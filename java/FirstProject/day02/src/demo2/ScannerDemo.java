package demo2;

import java.util.Scanner;

public class ScannerDemo {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int[] arr=new int[10];
        String[] brr=new String[5];
        System.out.println("请输入十个整数：");
        for (int i=0;i<10;i++){
            arr[i]=sc.nextInt();
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
        System.out.println("从小到大排序为：");
        for (int i=0;i<10;i++){
            System.out.println(arr[i]);
        }
        System.out.println("请输入五个字符串：");
        for (int i=0;i<5;i++){
            brr[i]=sc.next();
        }
        for (int i=0;i<5;i++){
            System.out.print(brr[i]);
        }
    }
}
