import java.util.Scanner;
public class JPA03 {
    static Scanner keyboard = new Scanner(System.in);
    public static void main(String[] args) {
      int sum = 0;
      int i = 2;
      int n = 0;
      do {
         System.out.print("�п�Jn����(n > 0�A�B������):");
         n = keyboard.nextInt();
      } while(n <= 0 || (n % 2 != 0));  
      do {
         sum = sum + i;
         i = i + 2;
      } while(i <= n);
      System.out.printf("2+4+...+%d=%d\n",n,sum);
    }
}