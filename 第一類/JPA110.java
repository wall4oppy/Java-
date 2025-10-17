import java.util.Scanner;
public class JPA01 {
    public static void main(String args[]) {
        double totalarea;
        System.out.printf("圓形面積為：%f \n",calCircle(5));
        System.out.printf("三角形面積為：%f \n",calTriangle(10, 5));
        System.out.printf("方形面積為：%f \n",calRectangle(5,10));
        totalarea = calCircle(5) + calTriangle(10, 5) + calRectangle(5, 10);
        System.out.printf("此圖形面積為：%f \n",totalarea);
    }
    static double calCircle(int r) {
      final double PI = 3.1415926;
      return Math.pow(r,2)*PI;        
    }
    static double calTriangle(int b, int h) {
      return b * h / 2.0;        
    }
    static double calRectangle(int l, int w) {
      return (double)l*w;        
    }
}
