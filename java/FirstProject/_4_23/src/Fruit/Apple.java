package Fruit;

public class Apple extends Fruits{
    public double weight(){
        return getWeight();
    }

    public String toString(){
        return "苹果重量："+ weight();
    }
}
class Strawberry extends Fruits{
    public double weight(){
        return getWeight();
    }

    public String toString(){
        return "草莓重量："+ weight();
    }
}