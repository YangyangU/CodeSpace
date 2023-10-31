package demo2;

import java.util.ArrayList;

public class Fruit {
    public String name;
    public String color;
    public int weight;
    public String getColor() {
        return color;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public void setColor(String color) {
        this.color = color;
    }
    public int getWeight() {
        return weight;
    }
    public void setWeight(int weight) {
        this.weight = weight;
    }
    public Fruit(){
    }
    public Fruit(String name,String color,int weight){
        this.name=name;
        this.color=color;
        this.weight=weight;
    }
    public String toString() {
        return getName()+"  "+getWeight()+"  "+getColor();
    }
}
class Apple extends Fruit{
    public Apple(String name,String color,int weight){
        super(name, color, weight);
    }
}
class Orange extends Fruit{
    public Orange(String name,String color,int weight){
        super(name, color, weight);
    }
}
class Pear extends Fruit{
    public Pear(String name,String color,int weight){
        super(name, color, weight);
    }
}
 class Box {
    ArrayList<Fruit> flist = new ArrayList<Fruit>();
    //添加水果方法
    public void addFruit(Fruit fruit) {
        flist.add(fruit);
    }
    //取出水果方法
    public void  getFruit(Fruit fruit) {
        flist.remove(fruit);

    }
    //显示
    public void show() {
        for(Fruit fruit : flist) {
            System.out.println(fruit);
        }
    }

    public static void main(String[] args) {
        Fruit f1 = new Apple("apple","red",3);
        Fruit f2 = new Pear("pear","blue",6);
        Fruit f3 = new Orange("orange","yellow",8);
        Box b = new Box();
        b.addFruit(f1);
        b.addFruit(f2);
        b.addFruit(f3);
        System.out.println("显示水果:");
        b.show();
        b.getFruit(f3);
        System.out.println("取出水果后：");
        b.show();
    }
}
