package demo1;

import java.util.Random;

public class test2 {
    //验证码
    public static void main(String[] args) {
        char[] chs=new char[52];
        for (int i=0;i<52;i++){
            if (i<26){
                chs[i]=(char)(97+i);
            }
            else {
                chs[i]=(char)(65+i-26);
            }
        }
        Random r=new Random();
        int a= r.nextInt(10);
        int b= r.nextInt(53);
        int c= r.nextInt(53);
        int d= r.nextInt(53);
        System.out.print(chs[b]);
        System.out.print(chs[c]);
        System.out.print(chs[d]);
        System.out.print(a);
    }
}
