package Truck;

import java.util.Scanner;

public class test {
    public static void main(String[] args) {
        ComputerWeight[] goods=new ComputerWeight[650]; //650件货物
        double[] a=new double[3];//存储Television,Computer,WashMachine对象weight属性初值
        Scanner sc=new Scanner(System.in);
        String str1=sc.nextLine();
        String[] str_a=str1.split(" ");
        for(int i=0;i<3;i++)
            a[i]=Double.parseDouble(str_a[i]);
        for(int i=0;i<goods.length;i++) { //简单分成三类
            if(i%3==0)
                goods[i]=new Television(a[0]);
            else if(i%3==1)
                goods[i]=new Computer(a[1]);
            else if(i%3==2)
                goods[i]=new WashMachine(a[2]);
        }
        Truck truck=new Truck(goods);
        System.out.printf("货车装载的货物重量:%-8.5f kg\n",truck.getTotalWeight());
        goods=new ComputerWeight[68]; //68件货物
        for(int i=0;i<goods.length;i++) { //简单分成两类
            if(i%2==0)
                goods[i]=new Television(a[0]);
            else
                goods[i]=new WashMachine(a[2]);
        }
        truck.setGoods(goods);
        System.out.printf("货车装载的货物重量:%-8.5f kg\n",truck.getTotalWeight());
    }
}
