package demo2;

public class BankAccount {
    String account_number;
    int leftmoney;
    public BankAccount() {
    }
    public BankAccount(String account_number, int leftmoney) {
        super();
        this.account_number = account_number;
        this.leftmoney = leftmoney;
    }
    public void savemoney(int money) {//存钱
        leftmoney += money;
    }
    public void getmoney(int money) {//取钱
        if (leftmoney > money) {
            leftmoney -= money;
        } else {
            System.out.println("超出余额");
        }
    }
    public int getleftmoney() {
        return leftmoney;
    }
    public static void main(String[] args) {
        BankAccount ba = new BankAccount("111111", 500);//卡号12138，余额500
        System.out.println("卡号："+ba.account_number+' '+"余额："+ba.leftmoney);
        ba.savemoney(1000);//存1000
        ba.getmoney(1499);//取1499
        System.out.println("取款后余额为："+ba.getleftmoney()+'元');//打印剩余存款1元
    }
}

