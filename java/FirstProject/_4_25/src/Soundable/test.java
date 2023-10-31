package Soundable;

import java.util.Scanner;

public class test {
    public static void main(String[] args) {
        people p=new people();
        int i;
        Scanner input=new Scanner(System.in);
        Soundable[] a=new Soundable[3];
        a[0]=new Radio();
        a[1]=new Walkman();
        a[2]=new Mobilephone();
        System.out.println("请用户输入想要收听的设备：");
        i=input.nextInt();
        p.listen(a[i]);
        a[i].increaseVolume();
        a[i].decreaseVolume();
        a[i].stopSound();
    }
}
