package demo2;

public class BookDemo {
    public static void main(String[] args) {
        Book p=new Book("JAVA8",200);
        p.display();
    }
}
class Book{
    private String name;
    private int pages;
    Book(){
    }
    Book(String name,int pages){
        this.name=name;
        this.pages=pages;
    }
    public void display() {
        System.out.println("名字："+ name);
        System.out.println("页数："+pages);
    }
}
