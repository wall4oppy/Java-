import java.util.Scanner;
public class JPA03 {
    static Scanner keyboard = new Scanner(System.in);
    static int i = -1;
    public static void main(String[] args) {
        int total = 0, s = 0;
        do {
          System.out.print("�п�J���O���B�A�ο�J-1�����G");
          s = keyboard.nextInt();
          if( s != -1)
            total = total + s;
        } while (s != -1);
        System.out.println("�q���g���`���O�G" + total);
    }
}