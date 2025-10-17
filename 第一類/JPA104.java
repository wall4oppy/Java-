import java.util.*;
public class JPA01 {
  public static void main(String [] args) {
    Scanner keyboard = new Scanner(System.in);
    double x1, y1, x2, y2;
    System.out.print("輸入第1組的x和y座標：");
    x1 = keyboard.nextDouble();
    y1 = keyboard.nextDouble();
    System.out.print("輸入第2組的x和y座標：");
    x2 = keyboard.nextDouble();
    y2 = keyboard.nextDouble();
    double d = Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1), 2));
    System.out.printf("介於(%.2f,%.2f)和(%.2f,%.2f)之間的距離是%.2f。\n",x1,y1,x2,y2,d);
  }
}

