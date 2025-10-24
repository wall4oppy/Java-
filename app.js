// 全域變數
let answerEditor;
let currentQuestion = null;
let timerInterval = null;
let startTime = null;
let currentFontSize = 13;

// 初始化編輯器
function initEditors() {
    // 作答編輯器
    answerEditor = CodeMirror(document.getElementById('answer-editor'), {
        mode: 'text/x-java',
        theme: 'default',
        lineNumbers: true,
        indentUnit: 4,
        indentWithTabs: false,
        value: '// 開始作答...',
        lineWrapping: true,
        autoRefresh: true,
        scrollbarStyle: 'null',
        viewportMargin: Infinity
    });
}

// 計時器功能
function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        document.getElementById('timer-display').textContent = 
            `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function resetTimer() {
    stopTimer();
    document.getElementById('timer-display').textContent = '00:00';
    startTime = null;
}

// 載入題目
function loadQuestion(questionData) {
    currentQuestion = questionData;
    
    // 添加 no-scroll class 以禁用滾動
    document.body.classList.add('no-scroll');
    
    // 隨機顯示效果
    const questionElement = document.getElementById('current-question');
    questionElement.style.opacity = '0';
    questionElement.style.transform = 'translateY(-10px)';
    
    setTimeout(() => {
        // 更新題目資訊
        questionElement.textContent = `第 ${questionData.category} 類 - 題目 ${questionData.question.id}`;
        questionElement.style.opacity = '1';
        questionElement.style.transform = 'translateY(0)';
    }, 200);
    
    // 設定編輯器內容
    answerEditor.setValue(questionData.question.jpd);
    
    // 隱藏結果區域
    document.getElementById('result-section').classList.add('hidden');
    
    // 重置並開始計時
    resetTimer();
    startTimer();
    
    // 隨機捲動效果
    const scrollDelay = Math.random() * 300 + 200;
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, scrollDelay);
}

// 顯示題目列表
function showQuestionList(questionsData) {
    // 移除 no-scroll class 以允許滾動
    document.body.classList.remove('no-scroll');
    
    // 隱藏結果區域
    document.getElementById('result-section').classList.add('hidden');
    
    // 更新標題
    const questionElement = document.getElementById('current-question');
    questionElement.textContent = `已抽取 ${questionsData.length} 題`;
    
    // 清空編輯器
    answerEditor.setValue('// 請從下方題目列表中選擇要練習的題目');
    
    // 停止計時
    stopTimer();
    resetTimer();
    
    // 創建題目列表HTML
    let listHTML = `
        <div class="question-list-container">
            <div class="question-list-header">
                <h3>抽取的題目列表</h3>
                <p>共 ${questionsData.length} 題，點擊題目開始練習</p>
            </div>
            <div class="question-list">
    `;
    
    questionsData.forEach((questionData, index) => {
        listHTML += `
            <div class="question-item" onclick="loadQuestion(${JSON.stringify(questionData).replace(/"/g, '&quot;')})">
                <div class="question-number">${index + 1}</div>
                <div class="question-info">
                    <div class="question-title">第 ${questionData.category} 類 - ${questionData.question.name}</div>
                    <div class="question-id">題目編號: ${questionData.question.id}</div>
                </div>
                <div class="question-arrow">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </div>
            </div>
        `;
    });
    
    listHTML += `
            </div>
        </div>
    `;
    
    // 顯示題目列表
    const resultSection = document.getElementById('result-section');
    const resultContent = document.getElementById('result-content');
    
    resultSection.classList.remove('hidden', 'success', 'error');
    resultContent.innerHTML = listHTML;
    
    // 捲動到列表
    setTimeout(() => {
        resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

// 隨機抽題
document.getElementById('random-btn').addEventListener('click', () => {
    // 增加隨機動畫效果
    const btn = document.getElementById('random-btn');
    btn.style.transform = 'scale(0.95)';
    btn.style.filter = 'brightness(1.2)';
    
    setTimeout(() => {
        btn.style.transform = 'scale(1)';
        btn.style.filter = 'brightness(1)';
        
        // 隨機延遲 0-500ms
        const randomDelay = Math.random() * 500;
        setTimeout(() => {
            const selectedCategory = document.getElementById('category-select').value;
            const questionCount = document.getElementById('question-count-select').value;
            const questionsData = getRandomQuestions(selectedCategory, questionCount);
            
            if (questionsData.length === 1) {
                // 單題模式，直接載入
                loadQuestion(questionsData[0]);
            } else {
                // 多題模式，顯示題目列表
                showQuestionList(questionsData);
            }
        }, randomDelay);
    }, 150);
});

// 重置答案
document.getElementById('reset-btn').addEventListener('click', () => {
    if (currentQuestion) {
        answerEditor.setValue(currentQuestion.question.jpd);
        document.getElementById('result-section').classList.add('hidden');
        // 重新添加 no-scroll class
        document.body.classList.add('no-scroll');
        // 滾動到頂部
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});


// 比對答案
document.getElementById('submit-btn').addEventListener('click', () => {
    if (!currentQuestion) {
        alert('請先選擇題目！');
        return;
    }
    
    // 停止計時
    stopTimer();
    
    const referenceCode = currentQuestion.question.jpa; // 使用後台的參考答案
    const answerCode = answerEditor.getValue();
    
    const result = compareCode(referenceCode, answerCode);
    displayResult(result);
});

// 程式碼比對函數
function compareCode(reference, answer) {
    const refLines = reference.split('\n');
    const ansLines = answer.split('\n');
    
    const maxLines = Math.max(refLines.length, ansLines.length);
    const differences = [];
    let totalDiff = 0;
    
    for (let i = 0; i < maxLines; i++) {
        const refLine = refLines[i] || '';
        const ansLine = ansLines[i] || '';
        
        // 移除前後空白進行比較
        const refTrimmed = refLine.trim();
        const ansTrimmed = ansLine.trim();
        
        if (refTrimmed !== ansTrimmed) {
            differences.push({
                lineNum: i + 1,
                reference: refLine,
                answer: ansLine,
                type: !ansTrimmed ? 'missing' : !refTrimmed ? 'extra' : 'different'
            });
            totalDiff++;
        }
    }
    
    return {
        isCorrect: differences.length === 0,
        totalLines: maxLines,
        differences: differences,
        totalDifferences: totalDiff
    };
}

// 顯示比對結果
function displayResult(result) {
    const resultSection = document.getElementById('result-section');
    const resultContent = document.getElementById('result-content');
    
    resultSection.classList.remove('hidden', 'success', 'error');
    
    // 移除 no-scroll class 以允許滾動
    document.body.classList.remove('no-scroll');
    
    if (result.isCorrect) {
        resultSection.classList.add('success');
        resultContent.innerHTML = `
            <div class="success-msg">
                <div class="success-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>
                <h3>完全正確！</h3>
                <p>恭喜你答對了！繼續保持！</p>
            </div>
        `;
    } else {
        resultSection.classList.add('error');
        resultContent.innerHTML = `
            <div class="answer-display">
                <div class="answer-header">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14,2 14,8 20,8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10,9 9,9 8,9"></polyline>
                    </svg>
                    <h3>正確答案 (${currentQuestion.question.name})</h3>
                </div>
                <div class="answer-code">
                    <div id="answer-code-editor"></div>
                </div>
            </div>
            <div class="diff-container">
                ${generateDiffHTML(result.differences)}
            </div>
        `;
    }
    
    // 初始化答案程式碼編輯器（只讀）
    setTimeout(() => {
        const answerCodeEditor = document.getElementById('answer-code-editor');
        if (answerCodeEditor && !result.isCorrect) {
            // 清除可能存在的舊編輯器
            answerCodeEditor.innerHTML = '';
            
            // 創建只讀的 CodeMirror 編輯器
            const answerEditor = CodeMirror(answerCodeEditor, {
                mode: 'text/x-java',
                theme: 'default',
                lineNumbers: true,
                indentUnit: 4,
                indentWithTabs: false,
                value: currentQuestion.question.jpa,
                lineWrapping: true,
                readOnly: true,
                cursorBlinkRate: 0,
                scrollbarStyle: 'null',
                viewportMargin: Infinity
            });
            
            // 設定字體大小與主編輯器一致
            answerEditor.setSize(null, 'auto');
            const cmElement = answerEditor.getWrapperElement();
            cmElement.style.fontSize = currentFontSize + 'px';
        }
        
        // 捲動到結果區域
        resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

// 生成差異 HTML
function generateDiffHTML(differences) {
    if (differences.length === 0) {
        return '<div style="text-align: center; color: var(--text-muted);">無差異</div>';
    }
    
    return '<div style="text-align: center; color: var(--text-muted);">請參考上方正確答案進行修正</div>';
}

// HTML 轉義
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// 字體大小調整功能
document.getElementById('font-increase').addEventListener('click', () => {
    if (currentFontSize < 24) {
        currentFontSize += 1;
        updateFontSize();
    }
});

document.getElementById('font-decrease').addEventListener('click', () => {
    if (currentFontSize > 10) {
        currentFontSize -= 1;
        updateFontSize();
    }
});

function updateFontSize() {
    const cmElement = document.querySelector('.CodeMirror');
    if (cmElement) {
        cmElement.style.fontSize = currentFontSize + 'px';
        document.getElementById('font-size-display').textContent = currentFontSize;
        answerEditor.refresh();
    }
    
    // 同時更新答案程式碼編輯器的字體大小
    const answerCodeEditor = document.getElementById('answer-code-editor');
    if (answerCodeEditor) {
        const answerCmElement = answerCodeEditor.querySelector('.CodeMirror');
        if (answerCmElement) {
            answerCmElement.style.fontSize = currentFontSize + 'px';
        }
    }
}

// 特定題目選擇功能
document.getElementById('category-select-specific').addEventListener('change', (e) => {
    const category = e.target.value;
    const questionSelect = document.getElementById('question-select');
    const loadBtn = document.getElementById('load-question-btn');
    
    if (category && questions[category]) {
        // 啟用題號選擇器
        questionSelect.disabled = false;
        questionSelect.innerHTML = '<option value="">請選擇題號</option>';
        
        // 填入該類別的所有題號
        questions[category].forEach(q => {
            const option = document.createElement('option');
            option.value = q.id;
            option.textContent = q.id;
            questionSelect.appendChild(option);
        });
    } else {
        // 禁用題號選擇器
        questionSelect.disabled = true;
        questionSelect.innerHTML = '<option value="">請先選擇類別</option>';
        loadBtn.disabled = true;
    }
});

document.getElementById('question-select').addEventListener('change', (e) => {
    const loadBtn = document.getElementById('load-question-btn');
    loadBtn.disabled = !e.target.value;
});

document.getElementById('load-question-btn').addEventListener('click', () => {
    const category = document.getElementById('category-select-specific').value;
    const questionId = document.getElementById('question-select').value;
    
    if (category && questionId && questions[category]) {
        const question = questions[category].find(q => q.id === questionId);
        if (question) {
            loadQuestion({
                category: category,
                question: question
            });
        } else {
            alert('找不到指定的題目！');
        }
    }
});

// 初始化
window.addEventListener('DOMContentLoaded', () => {
    initEditors();
    // 自動載入第一題
    const firstQuestion = getRandomQuestion();
    loadQuestion(firstQuestion);
});

// 清理計時器
window.addEventListener('beforeunload', () => {
    stopTimer();
});

