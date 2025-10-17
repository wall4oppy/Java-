import java.util.Scanner;
public class JPA04 {
    static Scanner keyboard = new Scanner(System.in);
    public static void main(String args[]) {
      int m, n, temp;      
      System.out.print("Input m:");
      m = keyboard.nextInt();
      while(m != 999) 
      { System.out.print("Input n:");
        n = keyboard.nextInt();

        System.out.printf("最大公因數為：%d\n", F(m,n));
        System.out.print("Input m:");
        m = keyboard.nextInt();
      }
    }
    static int F(int m, int n) {
      if(n == 0) 
        return m;
      else
        return F(n,m%n);
   }
}

