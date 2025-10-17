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
            const questionData = getRandomQuestion(selectedCategory);
            loadQuestion(questionData);
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
            <div class="stats">
                <div class="stat-item">
                    <div class="stat-value">${result.totalLines}</div>
                    <div class="stat-label">總行數</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${result.totalDifferences}</div>
                    <div class="stat-label">錯誤行數</div>
                </div>
            </div>
            <div class="diff-container">
                ${generateDiffHTML(result.differences)}
            </div>
            <div class="error-summary">
                ⚠ 請修正以上 ${result.totalDifferences} 個錯誤後重新送出
            </div>
        `;
    }
    
    // 捲動到結果區域
    setTimeout(() => {
        resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

// 生成差異 HTML
function generateDiffHTML(differences) {
    if (differences.length === 0) {
        return '<div style="text-align: center; color: var(--text-muted);">無差異</div>';
    }
    
    let html = '<div class="diff-header"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>發現以下錯誤：</div>';
    
    differences.forEach(diff => {
        html += `<div class="diff-block">`;
        html += `<div class="diff-line-label">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
            第 ${diff.lineNum} 行
        </div>`;
        
        if (diff.type === 'missing') {
            html += `<div class="diff-line diff-removed">
                <span class="diff-line-number">${diff.lineNum}</span>你的答案是空的
            </div>`;
            html += `<div class="diff-line diff-added">
                <span class="diff-line-number">${diff.lineNum}</span>${escapeHtml(diff.reference) || '(空行)'}
            </div>`;
        } else if (diff.type === 'extra') {
            html += `<div class="diff-line diff-removed">
                <span class="diff-line-number">${diff.lineNum}</span>${escapeHtml(diff.answer)}
            </div>`;
            html += `<div class="diff-line diff-added">
                <span class="diff-line-number">${diff.lineNum}</span>這行應該是空的或不存在
            </div>`;
        } else {
            html += `<div class="diff-line diff-removed">
                <span class="diff-line-number">${diff.lineNum}</span>${escapeHtml(diff.answer) || '(空行)'}
            </div>`;
            html += `<div class="diff-line diff-added">
                <span class="diff-line-number">${diff.lineNum}</span>${escapeHtml(diff.reference) || '(空行)'}
            </div>`;
        }
        
        html += `</div>`;
    });
    
    return html;
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

