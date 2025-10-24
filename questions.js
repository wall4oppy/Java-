// 題庫資料
const questions = {
    1: [ // 第一類
        {
            id: '102',
            name: 'JPA102',
            jpa: `import java.util.*;
public class JPA01 {
  public static void main(String [] args)
  {
    Scanner keyboard = new Scanner(System.in);
    final double kgtrn = 2.20462;
    System.out.print("Please input: ");
    double kg = keyboard.nextDouble();
    double pd = kg * kgtrn;
    System.out.printf("%9.6f kg = %9.6f ponds\\n", kg, pd);
    
  }
    
}`,
            jpd: `
public class JPD01 {
    
}`
        },
        {
            id: '104',
            name: 'JPA104',
            jpa: `import java.util.*;
public class JPA01 {
  public static void main(String [] args) {
    Scanner keyboard = new Scanner(System.in);
    double x1, y1, x2, y2;
    System.out.print("輸入點1座標x及y座標：");
    x1 = keyboard.nextDouble();
    y1 = keyboard.nextDouble();
    System.out.print("輸入點2座標x及y座標：");
    x2 = keyboard.nextDouble();
    y2 = keyboard.nextDouble();
    double d = Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1), 2));
    System.out.printf("座標(%.2f,%.2f)與(%.2f,%.2f)的距離為%.2f。\\n",x1,y1,x2,y2,d);
  }
}`,
            jpd: `
public class JPD01 {
    



}`
        },
        {
            id: '106',
            name: 'JPA106',
            jpa: `import java.util.*;
public class JPA01 {
  public static void main(String [] args)
  {  
    System.out.printf("f(-3.2) = %.4f \\n", f(-3.2));
    System.out.printf("f(-2.1) = %.4f \\n", f(-2.1));
    System.out.printf("f(0) = %.4f \\n", f(0));
    System.out.printf("f(2.1) = %.4f \\n", f(2.1));     
  }
  static double f(double x)
  {  return 3 * Math.pow(x,3) + 2 * x - 1; 
  }
}`,
            jpd: `
public class JPD01 {
    



}`
        },
        {
            id: '108',
            name: 'JPA108',
            jpa: `class JPA01 {
  
  static int add(int a, int b)
  {  System.out.printf("Adding two integers:%d,%d\\n", a,b);
     return a+b; 
  }
  static double add(double a, double b)
  {  System.out.printf("Adding two doubles:%.1f,%.1f\\n", a, b);
     return a+b;
  }
  static String add(String a, String b)
  {  System.out.printf("Adding two strings:%s,%s\\n", a, b);
     return a+b;
  }
  
  public static void main (String[] args) {
    int i = add(2, 3);
    double d = add(5.2, 4.3);
    String s = add("I love ", "Java!!");
    System.out.printf("%d %f %s %n", i, d, s);
  }
}`,
            jpd: `class JPD01 {
  
  ...
  
  public static void main (String[] args) {
    int i = add(2, 3);
    double d = add(5.2, 4.3);
    String s = add("I love ", "Java!!");
    System.out.printf("%d %f %s %n", i, d, s);
  }
}`
        },
        {
            id: '110',
            name: 'JPA110',
            jpa: `import java.util.Scanner;
public class JPA01 {
    public static void main(String args[]) {
        double totalarea;
        System.out.printf("圓形面積為：%f \\n",calCircle(5));
        System.out.printf("三角形面積為：%f \\n",calTriangle(10, 5));
        System.out.printf("方形面積為：%f \\n",calRectangle(5,10));
        totalarea = calCircle(5) + calTriangle(10, 5) + calRectangle(5, 10);
        System.out.printf("此圖形面積為：%f \\n",totalarea);
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
}`,
            jpd: `import java.util.Scanner;
public class JPD01 {
    public static void main(String args[]) {
        double totalarea;
        System.out.printf("圓形面積為：%f \\n",calCircle(5));
        System.out.printf("三角形面積為：%f \\n",________________);
        System.out.printf("方形面積為：%f \\n",_______________);
        totalarea = __________________________________________;
        System.out.printf("此圖形面積為：%f \\n",totalarea);
    }
    _______ ______ calCircle(_____) {
        
    }
    ______ ____ calTriangle(_____________) {
        
    }
    ______ ____ calRectangle(______________) {
        
    }
}`
        }
    ],
    2: [ // 第二類
        {
            id: '202',
            name: 'JPA202',
            jpa: `import java.util.*;
class JPA02 {
    static Scanner keyboard = new Scanner(System.in);
    public static void main(String[] args) {
        test();
        test();
    }
    
    public static void test() {
        System.out.println("Input:");
        int a = keyboard.nextInt();
        int b = keyboard.nextInt();
        if( a > b)
          System.out.printf("%d is larger than %d\\n", a, b);
        else
          System.out.printf("%d is larger than %d\\n", b, a);
    }
}`,
            jpd: `import java.util.*;
class JPD02 {
    static Scanner keyboard = new Scanner(System.in);
    public static void main(String[] args) {
        test();
        test();
    }
    
    public static void test() {
        ...
    }
}`
        },
        {
            id: '204',
            name: 'JPA204',
            jpa: `import java.util.*;
class JPA02 {
    static Scanner input = new Scanner(System.in);
    public static void main(String[] args) {
        test();
        test();
    }
  
    public static void test() {
        int x;
    
        System.out.println("Input:");
        x = input.nextInt();
        if ((x % 5 == 0) && (x % 9 == 0))
            System.out.println("Yes");
        else
            System.out.println("No");
    }
}`,
            jpd: `import java.util.*;
class JPD02 {
    static Scanner input = new Scanner(System.in);
    public static void main(String[] args) {
        test();
        test();
    }
  
    public static void test() {
        ...
    }
}`
        },
        {
            id: '206',
            name: 'JPA206',
            jpa: `import java.util.*;
public class JPA02 {
    static Scanner keyboard = new Scanner(System.in);
    public static void main(String[] args) {
        test();        
        test();
        test();
        test();
    }
    
    static void test() {
        int chi, eng, math, avg;
        System.out.print("Input Chinese score:");
        chi = keyboard.nextInt();
        System.out.print("Input English score:");
        eng = keyboard.nextInt();
        System.out.print("Input Math score:");
        math = keyboard.nextInt();
        if(chi < 60)
          System.out.println("Chinese failed.");
        if(eng < 60)
          System.out.println("English failed.");
        if(math < 60)
          System.out.println("Math failed.");
        if( chi >= 60 && eng>=60 && math>=60)
          System.out.println("All pass.");
    }
}`,
            jpd: `import java.util.*;
public class JPD02 {
    static Scanner keyboard = new Scanner(System.in);
    public static void main(String[] args) {
        test();        
        test();
        test();
        test();
    }
    
    static void test() {
        int chi, eng, math, avg;
        System.out.print("Input Chinese score:");
        chi = keyboard.nextInt();
        System.out.print("Input English score:");
        eng = keyboard.nextInt();
        System.out.print("Input Math score:");
        math = keyboard.nextInt();
        
        ...
    }
}`
        },
        {
            id: '208',
            name: 'JPA208',
            jpa: `import java.util.*;

class JPA02 {

    static Scanner keyboard = new Scanner(System.in);

    public static void main(String[] args) {
        test();
        test();
        test();
        test();
        test();
    }

    public static void test() {
        int x;
        System.out.println("Input:");
        x = keyboard.nextInt();

        if(x >= 90)
           System.out.println("Your grade is A");
        else
           if(x >= 80)
             System.out.println("Your grade is B");
           else
             if(x >= 70)
               System.out.println("Your grade is C");
             else
               if(x>=60)
                 System.out.println("Your grade is D");
               else
                 System.out.println("Your grade is F");  
    }
}`,
            jpd: `import java.util.*;
class JPD02 {
    static Scanner keyboard = new Scanner(System.in);
    public static void main(String[] args) {
        test();
        test();
        test();
        test();
        test();
    }

    public static void test() {
        ...
    }
}`
        },
        {
            id: '210',
            name: 'JPA210',
            jpa: `import java.util.*;
class JPA02 {
    static Scanner keyboard = new Scanner(System.in);
    public static void main(String[] args) {
        test();
        test();
        test();
        test();
        test();
    }
  
    public static void test() {
      char c;
      System.out.println("Input a character:");
      c = keyboard.next().charAt(0);
      switch(c) {
        case 'a' :
        case 'b' :
             System.out.println("You entered a or b");
             break;
        case 'x' :
             System.out.println("You enetered x");
             break;
        case 'y' :
             System.out.println("You entered y");
             break;
        default :
             System.out.println("You entered something else.");
       }  
    }
}`,
            jpd: `import java.util.*;
class JPD02 {
    static Scanner keyboard = new Scanner(System.in);
    public static void main(String[] args) {
        test();
        test();
        test();
        test();
        test();
    }
  
    public static void test() {
        ...
    }
}`
        }
    ],
    3: [ // 第三類
        {
            id: '302',
            name: 'JPA302',
            jpa: `import java.util.Scanner;
public class JPA03 {
    public static void main(String[] args) {
        int i = 1, j = 1, count = 0;
        for (i = 1; i <= 3; i++) {
           for(j=1; j <=9; j++) {
                count++;
            }
        }
        System.out.printf("count = %d\\n", count);
    }
}`,
            jpd: `import java.util.Scanner;
public class JPD03 {
    public static void main(String[] args) {
        int i = 1, j = 1, count = 0;
        for (i = 1; i <= 3; i++) {
            ...
            }
        }
        System.out.printf("count = %d\\n", count);
    }
}`
        },
        {
            id: '304',
            name: 'JPA304',
            jpa: `import java.util.Scanner;
public class JPA03 {
    static Scanner keyboard = new Scanner(System.in); 
    public static void main(String[] args) {
        int total = 0;
        int s = 0;
        int count = 0;
        double average;
        while(true) {
          System.out.print("Please enter meal dollars or enter -1 to stop: ");
          s = keyboard.nextInt();
          if(s != -1) {
            count++;
            total = total + s;
          }
          else
            break; 
	}
        average = (double)total / count;
        System.out.println("餐費總費用:" + total);
        System.out.printf(" %d 次餐費的平均費用: %.2f %n", count, average);
    }
}`,
            jpd: `import java.util.Scanner;
public class JPD03 {
    

    
    public static void main(String[] args) {
        int total = 0;
        int s = 0;
        int count = 0;
        double average;
        
        System.out.print("Please enter meal dollars or enter -1 to stop: ");
        
	...

        }
        System.out.println("餐點總費用:"________);
        System.out.printf(" %d 道餐點平均費用為: %.2f %n"____________);
    }
}`
        },
        {
            id: '306',
            name: 'JPA306',
            jpa: `import java.util.*;
import java.io.*;
public class JPA03 {
    public static void main (String argv[]) throws IOException {
        int num1, num2;
  
        Scanner input = new Scanner(System.in);
        System.out.println("Input:"); 
        num1 = input.nextInt();
        while (num1 != 999) {
            num2 = input.nextInt();
            System.out.println(powerOf(num1, num2));
            System.out.println("Input:");
            num1 = input.nextInt();
        }
    }  
  
    static int powerOf (int m, int n) {
        int result = 1;
        for(int i = 1; i <= n; i++)
          result = result * m;
        return result;
    }
}`,
            jpd: `import java.util.*;
public class JPD03 {
    public static void main (String argv[]) throws IOException {
        int num1, num2;
  
        Scanner input = new Scanner(System.in));
        System.out.println("Input:"); 
        num1 = input.nextInt();
        while (num1 != 999) {
            num2 = input.nextInt();
            System.out.println(powerOf(num1, num2));
            ...
        }
    }  
  
    static int powerOf (int m, int n) {
        ...
    }
}`
        },
        {
            id: '308',
            name: 'JPA308',
            jpa: `import java.util.Scanner;
public class JPA03 {
    static Scanner keyboard = new Scanner(System.in);
    static int i = -1;
    public static void main(String[] args) {
        int total = 0, s = 0;
        do {
          System.out.print("請輸入金額，若輸入-1則停止：");
          s = keyboard.nextInt();
          if( s != -1)
            total = total + s;
        } while (s != -1);
        System.out.println("零錢筒內的金額為：" + total);
    }
}
`,
            jpd: `import java.util.Scanner;
public class JPD03 {
    static Scanner keyboard = new Scanner(System.in);
    static int i = -1;
    public static void main(String[] args) {
        int total = 0, s = 0;
        

	...


    }
}
`
        },
        {
            id: '310',
            name: 'JPA310',
            jpa: `import java.util.Scanner;
public class JPA03 {
    static Scanner keyboard = new Scanner(System.in);
    public static void main(String[] args) {
      int sum = 0;
      int i = 2;
      int n = 0;
      do {
         System.out.print("請輸入n的值(n > 0，且必須是偶數):");
         n = keyboard.nextInt();
      } while(n <= 0 || (n % 2 != 0));  
      do {
         sum = sum + i;
         i = i + 2;
      } while(i <= n);
      System.out.printf("2+4+...+%d=%d\\n",n,sum);
    }
}`,
            jpd: `import java.util.Scanner;
public class JPD03 {
    static Scanner keyboard = new Scanner(System.in);
    public static void main(String[] args) {
        





    }
}`
        }
    ],
    4: [ // 第四類
        {
            id: '402',
            name: 'JPA402',
            jpa: `import java.util.Scanner;
public class JPA04 {
    static Scanner keyboard = new Scanner(System.in);
    public static void main(String args[]) {
        int n =0;
        System.out.print("Input n (0 <= n <= 16):");
        n = keyboard.nextInt();
        while(n != 999)
        { if(n >= 0 && n<= 16)
          { System.out.printf("%d 的階乘(尾端遞迴) = %d\\n", n, F(n,1));
            System.out.printf("%d 的階乘(迴圈) = %d\\n", n, G(n,1));
          }
          System.out.print("Input n (0 <= n <= 16):");
          n = keyboard.nextInt();
        }
    }
    
    static int F(int n, int r)
    { if(n == 0)
        return r;
      else
        return F((n - 1), (r * n));
    }

    static int G(int n, int r) {
        for(int i = n; i >=1; i--)
            r = r * i;
        return r;
    }
}`,
            jpd: `import java.util.Scanner;
public class JPD04 {
    static Scanner keyboard = new Scanner(System.in);
    public static void main(String args[]) {
        
    ...


    }
    
    
    ...



}`
        },
        {
            id: '404',
            name: 'JPA404',
            jpa: `import java.util.Scanner;
public class JPA04 {
    static Scanner keyboard = new Scanner(System.in);
    public static void main(String args[]) {
      int m, n, temp;      
      System.out.print("Input m:");
      m = keyboard.nextInt();
      while(m != 999) 
      { System.out.print("Input n:");
        n = keyboard.nextInt();
        System.out.printf("最大公因數為：%d\\n", F(m,n));
        System.out.print("Input m:");
        m = keyboard.nextInt();
      }
    }
    static int F(int m, int n) {
      if(n == 0) 
        return m;
      else
        return F(n,m%n);
   }
}`,
            jpd: `import java.util.Scanner;
public class JPD04 {
    static Scanner keyboard = new Scanner(System.in);
    public static void main(String args[]) {
        
      ...

    }
    
    ...
}`
        },
        {
            id: '406',
            name: 'JPA406',
            jpa: `import java.util.Scanner;
public class JPA04 {
    static Scanner keyboard = new Scanner(System.in);
    public static void main(String args[]) 
    {
      for(int i=0; i < 2; i++)
      {
        System.out.print("Input a string: ");
        String s = keyboard.nextLine();
        System.out.printf("%s has %d As\\n", s, countA(s));
      }
    }
    
    public static int countA(String str)
    {
      if(str.equals(""))
        return 0;
      else
        if(str.charAt(0) == 'A')
           return 1 + countA(str.substring(1));
        else
           return countA(str.substring(1));
    }
}`,
            jpd: `import java.util.Scanner;
public class JPD04 {
    static Scanner keyboard = new Scanner(System.in);
    public static void main(String args[]) {
      
      ...

    }
    
    public static int countA(String str) {
          
      ...
 
      }
}`
        },
        {
            id: '408',
            name: 'JPA408',
            jpa: `import java.util.Scanner;
public class JPA04 
{
  static Scanner keyboard = new Scanner(System.in);
  public static void main(String args[]) {
     String s, c; 
     System.out.print("Input a string: ");
     s = keyboard.nextLine();
     System.out.printf("%s\\n", reverse(s));
     System.out.print("Input a string: ");
     s = keyboard.nextLine();
     System.out.printf("%s\\n", reverse(s));
 }
  static String reverse(String str)
  {
     if (str.equals(""))
        return "";
     else
        return reverse(str.substring(1)) + str.substring(0, 1);
    }
}`,
            jpd: `import java.util.Scanner;
public class JPD04 {
    static Scanner keyboard = new Scanner(System.in);
    public static void main(String args[]) {
        String s, c; 
        System.out.print("Input a string: ");
        s = keyboard.nextLine();
        System.out.printf("%s\\n", reverse(s));
        System.out.print("Input a string: ");
        s = keyboard.nextLine();
        System.out.printf("%s\\n", reverse(s));
    }
    
    ...
}`
        },
        {
            id: '410',
            name: 'JPA410',
            jpa: `import java.util.Scanner;
public class JPA04 {
    static Scanner keyboard = new Scanner(System.in);
    public static void main(String args[]) {
        String s, c1, c2; 
        System.out.print("Input a string: ");
        s = keyboard.nextLine();
        System.out.print("Input a character: ");
        c1 = keyboard.nextLine();
        System.out.print("Input another character: ");
        c2 = keyboard.nextLine();
        System.out.printf("%s\\n", replace(s, c1, c2));
    }
    static String replace(String str, String c1, String c2)
    {  if (str.equals("")) 
          return "";
       else 
          if (str.substring(0, 1).equals(c1))
             return c2 + replace(str.substring(1), c1, c2);
          else 
             return str.substring(0, 1) + replace(str.substring(1), c1, c2); 
    }
}`,
            jpd: `import java.util.Scanner;
public class JPD04 {
    static Scanner keyboard = new Scanner(System.in);
    public static void main(String args[]) {
        String s, c1, c2; 
        System.out.print("Input a string: ");
        s = keyboard.nextLine();
        System.out.print("Input a character: ");
        c1 = keyboard.nextLine();
        System.out.print("Input another character: ");
        c2 = keyboard.nextLine();
        System.out.printf("%s\\n", replace(s, c1, c2));
    }
    
    ...
}`
        }
    ],
    5: [ // 第五類
        {
            id: '502',
            name: 'JPA502',
            jpa: `import java.util.Scanner;
public class JPA05 {
    public static Scanner keyboard = new Scanner(System.in);
    
    public static void main(String args[]) {
        System.out.print("請輸入學生人數：");
        int n = keyboard.nextInt();
        float [] A = new float[n];
        for(int i = 0; i < A.length; i++) {
          System.out.printf("第%d個學生的成績：", i+1);
          A[i] = keyboard.nextFloat();
        }
        float sum = 0.0f;
        float average;
        for(int i = 0; i < n; i++) {
           sum = sum + A[i];
        }
        average = sum / n;
        System.out.printf("個數：%d\\n", n);
        System.out.printf("總和：%f\\n", sum);
        System.out.printf("平均：%f\\n", average);
    }
}
`,
            jpd: `import java.util.Scanner;
public class JPD05 {
    public static Scanner keyboard = new Scanner(System.in);
    
    public static void main(String args[]) {
        System.out.print("請輸入學生人數：");
        
        ...
        }
       
    }
}
`
        },
        {
            id: '504',
            name: 'JPA504',
            jpa: `import java.util.Scanner;
public class JPA05 {
    public static Scanner keyboard = new Scanner(System.in);
    
	public static void main(String[] argv) {
           int [] F = new int[10];
           F[0] = 0;
           F[1] = 1;
           for(int i = 2; i < F.length; i++)
             F[i] = F[i-1] + F[i-2];
         
           for(int i = 0; i< F.length; i++)
             System.out.printf("%d\\n", F[i]);
    }
}
`,
            jpd: `import java.util.Scanner;
public class JPD05 {
    public static Scanner keyboard = new Scanner(System.in);
    
	public static void main(String[] argv) {
        
        ...
    }
}
`
        },
        {
            id: '506',
            name: 'JPA506',
            jpa: `public class JPA05 {
    public static void main(String[] argv) {
       int sum =0;
       int A[][][] = {{{1,2,3},{4,5,6}},
                       {{7,8,9},{10,11,12}},
                       {{13,14,15},{16,17,18}},
                       {{19,20,21},{22,23,24}}};
       for(int i = 0; i < A.length; i++)
         for(int j = 0; j < A[i].length; j++)
           for(int k = 0; k < A[i][j].length; k++)
             sum = sum + A[i][j][k];                        
       System.out.printf("sum = %d\\n", sum);
    }
}
`,
            jpd: `public class JPD05 {
    public static void main(String[] argv) {
       int sum =0;
       int A[][][] = {{{1,2,3},{4,5,6}},
                       {{7,8,9},{10,11,12}},
                       {{13,14,15},{16,17,18}},
                       {{19,20,21},{22,23,24}}};
       
       ...
       
       System.out.printf("sum = %d\\n", sum);
    }
}`
        },
        {
            id: '508',
            name: 'JPA508',
            jpa: `public class JPA05 {
    public static void main(String[] argv) {
        int[] data = {2, 4, 3, 5, 7, 6, 9, 1};
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
          System.out.printf("\\n");
        }
    }
}
`,
            jpd: `public class JPD05 {
    public static void main(String[] argv) {
        int[] data = {2, 4, 3, 5, 7, 6, 9, 1};
        ...
    }
}
`
        },
        {
            id: '510',
            name: 'JPA510',
            jpa: `import java.util.Scanner;
public class JPA05 {
    public static Scanner keyboard = new Scanner(System.in);
    
    public static void main(String[] argv) {
        search();
        search();
    }
    
    public static void search() {
        int[] data = {5, 9, 13, 15, 17, 19, 25, 30, 45};

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
          System.out.printf("搜尋範圍：%d(%d)..%d(%d),中間值：%d(%d)\\n",start, data[start], stop, data[stop], mid, data[mid]);
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
        System.out.printf("經過 %d 次搜尋\\n", count);
        if(find)
          System.out.printf("您要的資料在陣列中第%d個位置\\n", mid);
        else
          System.out.printf("%d不在陣列中\\n", target);      
        
    }
}`,
            jpd: `import java.util.Scanner;
public class JPD05 {
    public static Scanner keyboard = new Scanner(System.in);
    
    public static void main(String[] argv) {
        search();
        search();
    }
    
    public static void search() {
        int[] data = {5, 9, 13, 15, 17, 19, 25, 30, 45};

        System.out.print("請輸入要找尋的資料：");

        int target = keyboard.nextInt();
    
        ...
    }
}
`
        }
    ]
};

// 隨機抽題函數
function getRandomQuestion(selectedCategory = 'all') {
    let availableCategories;
    
    if (selectedCategory === 'all') {
        // 從所有類別中選擇
        availableCategories = Object.keys(questions);
    } else {
        // 只從選定的類別中選擇
        if (questions[selectedCategory]) {
            availableCategories = [selectedCategory];
        } else {
            // 如果選定的類別不存在，顯示警告並從所有類別中選擇
            console.warn(`類別 ${selectedCategory} 尚未匯入`);
            alert(`第 ${selectedCategory} 類題目尚未匯入，將從現有類別隨機抽題`);
            availableCategories = Object.keys(questions);
        }
    }
    
    // 使用更隨機的算法選擇類別
    const categoryTimeSeed = Date.now() % 1000;
    const categoryRandomSeed = Math.random() * 1000;
    const combinedCategorySeed = (categoryTimeSeed + categoryRandomSeed) % availableCategories.length;
    const randomCategory = availableCategories[Math.floor(combinedCategorySeed)];
    const categoryQuestions = questions[randomCategory];
    
    // 使用多重隨機種子增加隨機性
    const questionTimeSeed = Date.now() % 1000;
    const questionRandomSeed1 = Math.random() * 1000;
    const questionRandomSeed2 = Math.random() * 1000;
    const performanceSeed = performance.now() % 1000;
    const combinedSeed = (questionTimeSeed + questionRandomSeed1 + questionRandomSeed2 + performanceSeed) % categoryQuestions.length;
    const randomIndex = Math.floor(combinedSeed);
    
    return {
        category: randomCategory,
        question: categoryQuestions[randomIndex]
    };
}

// 多題隨機抽題函數
function getRandomQuestions(selectedCategory = 'all', questionCount = '1') {
    let availableCategories;
    
    if (selectedCategory === 'all') {
        // 從所有類別中選擇
        availableCategories = Object.keys(questions);
    } else {
        // 只從選定的類別中選擇
        if (questions[selectedCategory]) {
            availableCategories = [selectedCategory];
        } else {
            // 如果選定的類別不存在，顯示警告並從所有類別中選擇
            console.warn(`類別 ${selectedCategory} 尚未匯入`);
            alert(`第 ${selectedCategory} 類題目尚未匯入，將從現有類別隨機抽題`);
            availableCategories = Object.keys(questions);
        }
    }
    
    const result = [];
    
    if (questionCount === 'each') {
        // 每類各抽一題，使用更強的隨機性
        availableCategories.forEach(category => {
            if (questions[category] && questions[category].length > 0) {
                // 使用多重隨機種子
                const timeSeed = Date.now() % 1000;
                const randomSeed1 = Math.random() * 1000;
                const randomSeed2 = Math.random() * 1000;
                const categorySeed = category.charCodeAt(0) % 1000;
                const combinedSeed = (timeSeed + randomSeed1 + randomSeed2 + categorySeed) % questions[category].length;
                const randomIndex = Math.floor(combinedSeed);
                
                result.push({
                    category: category,
                    question: questions[category][randomIndex]
                });
            }
        });
    } else {
        // 從選定範圍中抽取指定數量
        const count = parseInt(questionCount);
        const allQuestions = [];
        
        // 收集所有可用題目
        availableCategories.forEach(category => {
            if (questions[category]) {
                questions[category].forEach(question => {
                    allQuestions.push({
                        category: category,
                        question: question
                    });
                });
            }
        });
        
        // 使用 Fisher-Yates 洗牌算法進行更徹底的隨機打亂
        const shuffled = [...allQuestions];
        for (let i = shuffled.length - 1; i > 0; i--) {
            // 使用多個隨機種子增加隨機性
            const timeSeed = Date.now() % 1000;
            const randomSeed = Math.random() * 1000;
            const combinedSeed = (timeSeed + randomSeed + i) % (i + 1);
            const j = Math.floor(combinedSeed);
            
            // 交換元素
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        
        // 再次進行部分洗牌以增加隨機性
        for (let i = 0; i < Math.min(count * 2, shuffled.length); i++) {
            const randomIndex = Math.floor(Math.random() * shuffled.length);
            const currentIndex = i % shuffled.length;
            [shuffled[currentIndex], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[currentIndex]];
        }
        
        const selectedQuestions = shuffled.slice(0, Math.min(count, allQuestions.length));
        
        result.push(...selectedQuestions);
    }
    
    return result;
}

