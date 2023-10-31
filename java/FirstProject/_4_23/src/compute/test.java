package compute;

public class test {
    public static void main(String[] args) {
        Compute compute = new Addition();
        UseCompute.useCom(compute,100,10);
        compute = new Subtraction();
        UseCompute.useCom(compute,100,10);
        compute = new Multiplication();
        UseCompute.useCom(compute,100,10);
        compute = new Division();
        UseCompute.useCom(compute,100,10);
    }
}
