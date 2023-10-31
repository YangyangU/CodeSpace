package demo2;

public class WhlieDemo {
    public static void main(String[] args) {
        int year=2000;
        while(year<=2100){
            if ((year%4==0)&&(year%100!=0)||(year%400==0)){
                System.out.println(year);
            }
            year++;
        }
    }
}
