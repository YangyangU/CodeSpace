package tom.jiafei;

import java.util.Scanner;

public class SquareEquation{
    Scanner sc=new Scanner(System.in);
    double a=sc.nextDouble();
    double b=sc.nextDouble();
    double c=sc.nextDouble();
    double x1,x2,result;
    public Double[] Getgen(){
        double t=(b*b)-(4*a*c);
        if(a==0&&b==0&&c==0)
            System.out.println("有无穷个解");
        else if(a==0&&b==0&&c!=0)
            System.out.println("方程没有解");
        else if(a==0&&b!=0&&c!=0)
        {
            x1 =-c/b;
            System.out.printf("方程有一个实数解：\n");
            System.out.printf("x1 = %.4f",x1);
        }
        else if(t>0)
        {
            x1=(-b+Math.sqrt(t))/(2*a);
            x2=(-b-Math.sqrt(t))/(2*a);
            System.out.printf("   方程有实数解：\n");
            System.out.printf("x1 = %.4f\n",x1);
            System.out.printf("x2 = %.4f\n",x2);
        }
        else if(t==0)
        {
            result = -b/(2*a);
            System.out.printf("方程有实数解：\n");
            System.out.printf("x1 = %.4f\n",result);
            System.out.printf("x2 = %.4f\n",result);
        }
        else if(t<0)
        {
            double realPart =-b/(2*a);
            double imgPart =Math.sqrt(4*a*c-b*b)/(2*a);
            System.out.printf("  方程有复数解：\n ");
            System.out.printf("x1 = "+"%.4f",realPart);
            System.out.printf(" + "+"%.4f",imgPart);
            System.out.printf("i\n");
            System.out.printf(" x2 = "+"%.4f",realPart);
            System.out.printf(" - "+"%.4f",imgPart);
            System.out.printf("i\n");
        }
        Double[] num = {x1, x2};
        return num;
    }
}
