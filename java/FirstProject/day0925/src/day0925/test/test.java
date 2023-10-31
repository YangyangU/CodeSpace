package day0925.test;

import java.util.Random;

public class test {
    public static void main(String[] args) {
        int[] tempArr = {0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15};
        Random r=new Random();
        for (int i = 0; i < tempArr.length; i++) {
            int index =r.nextInt(tempArr.length);
            int temp=tempArr[i];
            tempArr[i]=tempArr[index];
            tempArr[index]=temp;
        }
        for (int i = 0; i < tempArr.length; i++) {
            System.out.print(tempArr[i]+" ");
        }
        System.out.println();

        int[][] data =new int[4][4];
        for (int i = 0; i < tempArr.length; i++) {
            data[i/4][i%4]=tempArr[i];
        }
        for (int i = 0; i < data.length; i++) {
            for (int j = 0; j < data.length; j++) {
                System.out.print(data[i][j]+" ");
            }
            System.out.println();
        }
    }
}
