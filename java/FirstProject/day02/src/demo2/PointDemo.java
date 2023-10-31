package demo2;

import java.util.Scanner;
class Point {
    private Double x;
    private Double y;
    public Point() {
    }
    public Point(Double x, Double y) {
        super();
        this.x = x;
        this.y = y;
    }
    public Double getX() {
        return x;
    }
    public void setX(Double x) {
        this.x = x;
    }
    public Double getY() {
        return y;
    }
    public void setY(Double y) {
        this.y = y;
    }
}
public class PointDemo {
    public Point input() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("请输入横坐标");
        Double x = scanner.nextDouble();
        System.out.println("请输入纵坐标");
        Double y = scanner.nextDouble();
        Point point = new Point(x, y);
        return point;
    }
    public  double distant(Point p1,Point p2){
        double c=0;
        double a=Math.pow(p1.getX()-p2.getX(), 2);
        double b=Math.pow(p1.getY()-p2.getY(), 2);
        c=Math.sqrt(a+b);
        return c;
    }
    public static void main(String[] args) {

        PointDemo pointDemo=new PointDemo();
        Point []Points=new Point[2];
        for (int i = 0; i < Points.length; i++) {
            Points[i]=pointDemo.input();
        }
        System.out.println(pointDemo.distant(Points[0],Points[1]));
    }
}