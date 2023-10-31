package demo2;

public class Product {
    private String type;
    private String manufacture;
    private double price;
    public Product (){
    }
    public Product (String type, String manufacture, double price) {
        this.type = type;
        this.manufacture = manufacture;
        this.price = price;
    }
    public String getType(){
        return type;
    }
    public void setType(String type) {
        this.type = type;
    }
    public String getManufacture(){
        return manufacture;
    }
    public void setManufacture(String manufacture) {
        this.manufacture = manufacture;
    }
    public double getPrice(){
        return price;
    }
    public void setPrice (double price) {
        this.price = price;
    }

    public void display(){
        System.out.println("类型：" + this.getType());
        System.out.println("厂商：" + this.getManufacture());
        System.out.println("价格：" + this.getPrice());
    }
}