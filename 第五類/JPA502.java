import java.util.Scanner;
public class JPA05 {
    public static Scanner keyboard = new Scanner(System.in);
    
    public static void main(String args[]) {
        System.out.print("�п�J�ǥͤH�ơG");
        int n = keyboard.nextInt();
        float [] A = new float[n];
        for(int i = 0; i < A.length; i++) {
          System.out.printf("��%d�Ӿǥͪ����Z�G", i+1);
          A[i] = keyboard.nextFloat();
        }
        float sum = 0.0f;
        float average;
        for(int i = 0; i < A.length; i++) {
           sum = sum + A[i];
        }
        average = sum / n;
        System.out.printf("�H�ơG%d\n", n);
        System.out.printf("�`���G%f\n", sum);
        System.out.printf("�����G%f\n", average);
    }
}