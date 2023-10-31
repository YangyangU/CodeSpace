package demo2;

import java.util.Scanner;

public class Circle{
    double r;
    public Circle(){
        this(1.0);
    }
    public Circle(double r){
        this.r=r;
    }
    public double getArea(){
        double area=3.14*r*r;
        return area;
    }
    public double getAround(){
        double around=2*3.14*r;
        return around;
    }
    public double getR(){
        return r;
    }
    public void setR(double r){
        this.r=r;
    }
}
class Circle_Column{
    double h;
    public Circle_Column(){
    }
    public double getV(double r){
        double v=3.14*r*r*h;
        return v;
    }
    public double getArea(double r,double h){
        double area=3.14*r*r*2+2*3.14*r*h;
        return area;
    }
    public void setH(double h){
        this.h=h;
    }
    public double getH(){
        return h;
    }
}
class Circle_Cone{
    double h;
    public Circle_Cone(){
    }
    public void Circular_Cone(double r,double l){
    }
    public double getV(double r){
        double v=3.14*r*r*h*1/3;
        return v;
    }
    public double getArea(double r,double l){
        double area=3.14*r*r+3.14*r*l;
        return area;
    }
    public void setH(double h){
        this.h=h;
    }
    public double getH(){
        return h;
    }
}
class Test{
    Scanner sc;
    Circle c1;
    Circle c2;
    public static void main(String[] args) {
        Circle c=new Circle();
        Circle_Column c1=new Circle_Column();
        Circle_Cone c2=new Circle_Cone();
        Scanner sc=new Scanner(System.in);
        System.out.println("请输入圆的半径：");
        double r=sc.nextDouble();
        c.setR(r);
        System.out.println("圆的面积为："+c.getArea());
        System.out.println("圆的周长为："+c.getAround());
        System.out.println("请输入圆柱的高：");
        double h1=sc.nextDouble();
        c1.setH(h1);
        System.out.println("圆柱的面积为："+c1.getArea(r,h1));
        System.out.println("圆柱的体积为："+c1.getV(r));
        System.out.println("请输入圆锥的半径：");
        double h2=sc.nextDouble();
        c2.setH(h2);
        System.out.println("请输入圆锥的母线：");
        double l=sc.nextDouble();
        System.out.println("圆锥的面积为："+c2.getArea(r,l));
        System.out.println("圆锥的体积为："+c2.getV(r));
    }
}
