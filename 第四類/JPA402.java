import java.util.Scanner;
public class JPA04 {
    static Scanner keyboard = new Scanner(System.in);
    public static void main(String args[]) {
      int n =0;
      System.out.print("Input n (0 <= n <= 16):");  
      n = keyboard.nextInt();
      while(n != 999)
      { if(n >= 0 && n<= 16)
        { System.out.printf("%d ������(���ݻ��j) = %d\n", n, F(n,1));
          System.out.printf("%d ������(�j��) = %d\n", n, G(n,1));
        }
        System.out.print("Input n (0 <= n <= 16):");
        n = keyboard.nextInt();
      }
    }
    
    static int F(int n, int r)
    { if(n == 0)
        return r;
      else
        return F((n - 1), (r * n)); 
    }

    static int G(int n, int r) {
       for(int i = n; i >=1; i--)
            r = r * i;
       return r;
    }
}
