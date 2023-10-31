package demo;

import java.util.Scanner;

import java.util.Random;

public class test {
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        int s=sc.nextInt();
        System.out.println(s);
        Random r=new Random();
        int a=r.nextInt(10);
        System.out.println(a);
    }
}
