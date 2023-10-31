package demo2;

public class People {
    protected double height;
    protected double weight;
    public void speakHello(){
    }
    public void averageHeight(){
    }
    public void  averageWeight(){
    }
}
class ChinaPeople extends People{
    public void chinaGongfu(){
    }
    public void speakHello(){
    }
    public void averageHeight(){
    }
    public void  averageWeight(){
    }
}
class AmericanPeople extends People{
    public void americanBoxing(){
    }
    public void speakHello(){
    }
    public void averageHeight(){
    }
    public void  averageWeight(){
    }
}
class BeijingPeople extends ChinaPeople{
    public void speakHello(){
    }
    public void averageHeight(){
    }
    public void  averageWeight(){
    }
}