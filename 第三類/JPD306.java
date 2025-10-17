import java.util.*;
public class JPD03 {
    public static void main (String argv[]) throws IOException {
        int num1, num2;
  
        Scanner input = new Scanner(System.in));
        System.out.println("Input:"); 
        num1 = input.nextInt();
        while (num1 != 999) {
            num2 = input.nextInt();
            System.out.println(powerOf(num1, num2));
            ...
        }
    }  
  
    static int powerOf (int m, int n) {
        ...
    }
}
