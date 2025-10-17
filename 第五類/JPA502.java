import java.util.Scanner;
public class JPA05 {
    public static Scanner keyboard = new Scanner(System.in);
    
    public static void main(String args[]) {
        System.out.print("請輸入學生人數：");
        int n = keyboard.nextInt();
        float [] A = new float[n];
        for(int i = 0; i < A.length; i++) {
          System.out.printf("第%d個學生的成績：", i+1);
          A[i] = keyboard.nextFloat();
        }
        float sum = 0.0f;
        float average;
        for(int i = 0; i < A.length; i++) {
           sum = sum + A[i];
        }
        average = sum / n;
        System.out.printf("人數：%d\n", n);
        System.out.printf("總分：%f\n", sum);
        System.out.printf("平均：%f\n", average);
    }
}