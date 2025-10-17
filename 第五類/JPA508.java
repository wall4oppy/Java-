public class JPA05 {
    public static void main(String[] argv) {
        int[] data = {2, 4, 3, 5, 7, 6, 9, 1};  // 為排序的資料
        int temp;
        for(int i = 0; i < data.length-1; i++) {
          for(int j = 0; j < data.length-i-1; j++) {
            if(data[j] > data[j+1]) {
              temp = data[j];
              data[j] = data[j+1];
              data[j+1] = temp;
            }
          }
          for(int k = 0; k < data.length; k++)
            System.out.printf(" %d", data[k]);
          System.out.printf("\n");
        }
    }
}