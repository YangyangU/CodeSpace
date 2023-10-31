public class Main {
    public static void main(String[] args){
        int [] arr={1,23,4,5,6,9};
        int n=10;
        for (int i = 0; i < arr.length; i++) {
            for (int j = i+1; j < arr.length; j++) {
                if (arr[i]+arr[j]==n)
                {
                    System.out.println("["+i+","+j+"]");
                }
            }
        }

    }
}