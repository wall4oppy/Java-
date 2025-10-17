import java.util.Scanner;
public class JPA05 {
    public static Scanner keyboard = new Scanner(System.in);
    
    public static void main(String[] argv) {
        search();
        search();
    }
    
    public static void search() {
        int[] data = {5, 9, 13, 15, 17, 19, 25, 30, 45}; // 已排序資料

        System.out.print("請輸入要找尋的資料：");

        int target = keyboard.nextInt();
        int start, stop,mid, count;
        boolean find = false;
        count = 0;
        start = 0;
        stop = data.length-1;
        mid =0;
        while((start <= stop) && !find) {
          mid = (stop + start) /2;
          System.out.printf("尋找區間：%d(%d)..%d(%d),中間：%d(%d)\n",start, data[start], stop, data[stop], mid, data[mid]);
          count++;
          if(data[mid] > target) {
            stop = mid-1;
          }
          else {
            if(data[mid] < target) {
              start = mid+1;
            }
            else {
              find = true;
            }
          }
        }
        System.out.printf("經過 %d 次的尋找\n", count);
        if(find)
          System.out.printf("您要找的資料在陣列中的第%d個位置\n", mid);
        else
          System.out.printf("%d不在陣列中\n", target);      
        
    }
}