import java.util.*;
public class JPA01 {
  public static void main(String [] args) {
    Scanner keyboard = new Scanner(System.in);
    double x1, y1, x2, y2;
    System.out.print("��J��1�ժ�x�My�y�СG");
    x1 = keyboard.nextDouble();
    y1 = keyboard.nextDouble();
    System.out.print("��J��2�ժ�x�My�y�СG");
    x2 = keyboard.nextDouble();
    y2 = keyboard.nextDouble();
    double d = Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1), 2));
    System.out.printf("����(%.2f,%.2f)�M(%.2f,%.2f)�������Z���O%.2f�C\n",x1,y1,x2,y2,d);
  }
}

