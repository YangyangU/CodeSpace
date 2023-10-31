package demo2;

import java.util.Scanner;

public class ForDemo {
    public static void main(String[] args) {
        Scanner sc =new Scanner(System.in);
        System.out.println("输入等腰三角形大小：");
        int row=sc.nextInt();
        for (int i=1;i<=row;i++) {
            for (int j =1; j<=row-i; j++) {
                System.out.print(" ");
            }
            for (int n = 1; n <=2*i-1; n++) {
                System.out.print("*");
            }
            System.out.println();
        }
        System.out.println("输入菱形大小：");
        int row1=sc.nextInt();
        for (int i=1;i<=row;i++) {
            for (int j =1; j<=row-i; j++) {
                System.out.print(" ");
            }
            for (int n = 1; n <=2*i-1; n++) {
                System.out.print("*");
            }
            System.out.println();
        }
        for (int i=row-1;i>=1;i--) {
            for (int j =1; j<=row-i; j++) {
                System.out.print(" ");
            }
            for (int n = 1; n <=2*i-1; n++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
