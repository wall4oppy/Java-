import java.util.Scanner;
public class JPA05 {
    public static Scanner keyboard = new Scanner(System.in);
    
    public static void main(String[] argv) {
        search();
        search();
    }
    
    public static void search() {
        int[] data = {5, 9, 13, 15, 17, 19, 25, 30, 45}; // �w�ƧǸ��

        System.out.print("�п�J�n��M����ơG");

        int target = keyboard.nextInt();
        int start, stop,mid, count;
        boolean find = false;
        count = 0;
        start = 0;
        stop = data.length-1;
        mid =0;
        while((start <= stop) && !find) {
          mid = (stop + start) /2;
          System.out.printf("�M��϶��G%d(%d)..%d(%d),�����G%d(%d)\n",start, data[start], stop, data[stop], mid, data[mid]);
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
        System.out.printf("�g�L %d �����M��\n", count);
        if(find)
          System.out.printf("�z�n�䪺��Ʀb�}�C������%d�Ӧ�m\n", mid);
        else
          System.out.printf("%d���b�}�C��\n", target);      
        
    }
}