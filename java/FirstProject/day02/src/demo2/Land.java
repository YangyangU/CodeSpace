package demo2;

import java.util.Scanner;

public class Land {
    public static void main(String[] args) {
        Village v1 = new Village();
        Village v2 = new Village();
        Scanner s = new Scanner(System.in);
        System.out.println("请输入村里1喝掉的水量：");
        int a = s.nextInt();
        v1.Drink(a);
        System.out.println("村庄2查看后还剩：" + v2.SeeWater(a) + "升水");
    }
}
class Village {
    static int waterAmount=1000;
    public void Drink(int a){
        System.out.println("村庄1喝了："+a+"升水");
    }
    public int SeeWater(int change){
        return waterAmount=waterAmount-change;
    }
}