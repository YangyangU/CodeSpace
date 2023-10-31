package Fruit;

import java.util.Arrays;

public class test {
    Fruits[] a;
    public static void main(String[] args) {
        Apple apple=new Apple();
        apple.setWeight(6);

        Strawberry strawberry=new Strawberry();
        strawberry.setWeight(5);

        test s1=new test();
        s1.a=new Fruits[] {apple,strawberry};
        System.out.println(Arrays.toString(s1.a));
    }
}

