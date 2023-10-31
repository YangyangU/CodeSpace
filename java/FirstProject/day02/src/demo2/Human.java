package demo2;

public class Human {
    private String name;
    private String age;

    public Human() {
    }
    public Human(String name,String age) {
        this.setName(name);
        this.setAge(age);
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getAge() {
        return age;
    }
    public void setAge(String age) {
        this.age = age;
    }
    //父类方法
    public void work() {
        System.out.printf("这是父类的方法");
    }
}
    class Student extends Human {
    public Student() {}
    public Student(String name, String age) {
        super(name,age);//调用父类构造方法传递参数
//这里我尝试过使用this.setName（getName（））方法，最后输出是null，因为name是private类型，我们可以通过getname（）得到name，但是我们的子类无法继承父类的私有成员变量，即学生类中是没有name变量的，所以setname（）不成功，输出null
        }
        //重写父类方法
        public void work() {
            System.out.println("学生爱读书");
        }
    }
    class Teacher extends Human {
        //构造方法
        public Teacher() {}

        public Teacher(String name, String age) {
            super(name,age);
        }
        //重写父类方法
        public void work() {
            System.out.println("老师爱教书");
        }
    }
    class test {
        public static void main(String[] args) {
            System.out.println("调用setName方法（顺序：学生类，老师类）");
            Student s=new Student("学生","15");
            System.out.println(s.getName());
            Teacher t=new Teacher("老师","35");
            System.out.println(t.getName());
        }
}
