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
      char c;
      System.out.println("Input a character:");
      c = keyboard.next().charAt(0);
      switch(c) {
        case 'a' :
        case 'b' :
             System.out.println("You entered a or b");
             break;
        case 'x' :
             System.out.println("You enetered x");
             break;
        case 'y' :
             System.out.println("You entered y");
             break;
        default :
             System.out.println("You entered something else.");
       }  
    }
}


