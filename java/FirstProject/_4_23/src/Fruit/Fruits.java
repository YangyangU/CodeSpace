package Fruit;

public abstract class Fruits {
    private double weight;

    public double getWeight() {
        return weight;
    }
    public void setWeight(double weight) {
        this.weight = weight;
    }
    public abstract double weight();
}
