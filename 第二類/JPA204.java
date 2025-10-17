import java.util.*;
class JPA02 {
    static Scanner input = new Scanner(System.in);
    public static void main(String[] args) {
        test();
        test();
    }
  
    public static void test() {
        int x;
    
        System.out.println("Input:");
        x = input.nextInt();
        if ((x % 5 == 0) && (x % 9 == 0))
            System.out.println("Yes");
        else
            System.out.println("No");
    }
}

