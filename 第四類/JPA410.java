import java.util.Scanner;
public class JPA04 {
    static Scanner keyboard = new Scanner(System.in);
    public static void main(String args[]) {
        String s, c1, c2; 
        System.out.print("Input a string: ");
        s = keyboard.nextLine();
        System.out.print("Input a character: ");
        c1 = keyboard.nextLine();
        System.out.print("Input another character: ");
        c2 = keyboard.nextLine();
        System.out.printf("%s\n", replace(s, c1, c2));
    }
    static String replace(String str, String c1, String c2)
    {  if (str.equals("")) 
          return "";
       else 
          if (str.substring(0, 1).equals(c1))
             return c2 + replace(str.substring(1), c1, c2);
          else 
             return str.substring(0, 1) + replace(str.substring(1), c1, c2); 
    }
}
