import java.util.Scanner;
public class JPD05 {
    public static Scanner keyboard = new Scanner(System.in);
    
    public static void main(String[] argv) {
        search();
        search();
    }
    
    public static void search() {
        int[] data = {5, 9, 13, 15, 17, 19, 25, 30, 45}; // 已排序資料

        System.out.print("請輸入要找尋的資料：");

        int target = keyboard.nextInt();
    
        ...
    }
}