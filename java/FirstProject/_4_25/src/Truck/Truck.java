package Truck;

public class Truck {
    ComputerWeight goods[];
    Truck(ComputerWeight[] goods) {
        super();
        this.goods = goods;
    }
    public void setGoods(ComputerWeight[] goods) {
        this.goods = goods;
    }
    public double getTotalWeight()
    {
        double sum=0;
        for(ComputerWeight i:goods)
        {
            sum += i.computerWeight();
        }
        return sum;
    }
}
    interface ComputerWeight
    {
        double computerWeight();
    }
    class Television implements ComputerWeight
    {
        double w;
        Television(double w) {
            super();
            this.w = w;
        }
        public double computerWeight()
        {
            return w;
        }
    }
    class Computer implements ComputerWeight
    {
        double weight;
        Computer(double weight)
        {
            this.weight=weight;
        }
        public double computerWeight()
        {
            return 2*weight;
        }
    }
    class WashMachine implements ComputerWeight
    {
        double weight;
        WashMachine(double weight)
        {
            this.weight=weight;
        }
        public double computerWeight()
        {
            return 3*weight;
        }
    }
