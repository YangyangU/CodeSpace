package demo2;

import java.util.Random;

public class MathDemo {
    public static void main(String[] args) {
        int[] arr=new int[10];
        Random r=new Random();
        System.out.println("十个随机数从小到大排序为：");
        for (int i=0;i<10;i++){
            int number=r.nextInt(101);
            arr[i]=number;
        }
        int a=0;
        for (int i=0;i<10;i++) {
            for (int j = 0; j < 10; j++) {
                if (arr[i] < arr[j]) {
                    a = arr[j];
                    arr[j] = arr[i];
                    arr[i] = a;
                }
            }
        }
        for (int i=0;i<10;i++){
            System.out.println(arr[i]);
        }
        int []x=new int [5];
        Random y=new Random();
        System.out.println("彩票号码为：");
        for (int i=0;i<5;i++){
            int number=y.nextInt(23)+1;
            x[i]=number;
            System.out.println(x[i]);
        }
    }
}
