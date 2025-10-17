import java.util.*;
class JPA02 {
    static Scanner keyboard = new Scanner(System.in);
    public static void main(String[] args) {
        test();
        test();
    }
    
    public static void test() {
        System.out.println("Input:");
        int a = keyboard.nextInt();
        int b = keyboard.nextInt();
        if( a > b)
          System.out.printf("%d is larger than %d\n", a, b);
        else
          System.out.printf("%d is larger than %d\n", b, a);
    }
}
