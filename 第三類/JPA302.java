import java.util.Scanner;
public class JPA03 {
    public static void main(String[] args) {
        int i = 1, j = 1, count = 0;
        for (i = 1; i <= 3; i++) {        //第一個迴圈，i從1到3
           for(j=1; j <=9; j++) {
                count++;
            }
        }
        System.out.printf("count = %d\n", count);
    }
}