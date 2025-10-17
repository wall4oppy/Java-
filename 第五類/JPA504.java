import java.util.Scanner;
public class JPA05 {
    public static Scanner keyboard = new Scanner(System.in);
    
	public static void main(String[] argv) {
           int [] F = new int[10];
           F[0] = 0;
           F[1] = 1;
           for(int i = 2; i < F.length; i++)
             F[i] = F[i-1] + F[i-2];
         
           for(int i = 0; i< F.length; i++)
             System.out.printf("%d\n", F[i]);
    }
}