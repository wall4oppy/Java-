import java.util.Scanner;
public class JPA04 {
    static Scanner keyboard = new Scanner(System.in);
    public static void main(String args[]) 
    {
      for(int i=0; i < 2; i++)
      {
        System.out.print("Input a string: ");
        String s = keyboard.nextLine();
        System.out.printf("%s has %d As\n", s, countA(s));
      }
    }
    
    public static int countA(String str)
    {
      if(str.equals(""))
        return 0;
      else
        if(str.charAt(0) == 'A')
           return 1 + countA(str.substring(1));
        else
           return countA(str.substring(1));
    }
}
