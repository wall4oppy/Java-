import java.util.Scanner;
public class JPA03 {
    static Scanner keyboard = new Scanner(System.in); 
    public static void main(String[] args) {
        int total = 0;
        int s = 0;
        int count = 0;
        double average;
        while(true) {
          System.out.print("Please enter meal dollars or enter -1 to stop: ");
          s = keyboard.nextInt();
          if(s != -1) {
            count++;
            total = total + s;
          }
          else
            break; 
	}
        average = (double)total / count;
        System.out.println("�\�I�`�O��:" + total);
        System.out.printf(" %d �D�\�I�����O�ά�: %.2f %n", count, average);
    }
}