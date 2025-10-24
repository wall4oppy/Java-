import java.util.*;

class JPA02 {

    static Scanner keyboard = new Scanner(System.in);

    public static void main(String[] args) {
        test();
        test();
        test();
        test();
        test();
    }

    public static void test() {
        int x;
        System.out.println("Input:");
        x = keyboard.nextInt();

        if(x >= 90)
           System.out.println("Your grade is A");
        else
           if(x >= 80)
             System.out.println("Your grade is B");
           else
             if(x >= 70)
               System.out.println("Your grade is C");
             else
               if(x>=60)
                 System.out.println("Your grade is D");
               else
                 System.out.println("Your grade is F");  
    }
}
