import java.util.Scanner;
public class JPD04 {
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
    
    ...
}