import java.util.*;
public class JPA01 {
  public static void main(String [] args)
  {
    Scanner keyboard = new Scanner(System.in);
    final double kgtrn = 2.20462;
    System.out.print("Please input: ");
    double kg = keyboard.nextDouble();
    double pd = kg * kgtrn;
    System.out.printf("%9.6f kg = %9.6f ponds\n", kg, pd);
    
  }
    
}
