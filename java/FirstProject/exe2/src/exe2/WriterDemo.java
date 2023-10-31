package exe2;

import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Scanner;
public class WriterDemo {
    public static void main (String args[]) throws IOException {
        String []a = new String[100];
        int i=0;
        ArrayList<String> list = new ArrayList<String>();
        Scanner sc = new Scanner(System.in);
        FileWriter fos = null;
        try{
            fos = new FileWriter("D:\\text10.txt");
            while(i<5){
                a[i] = sc.next();
                list.add(a[i]);
                i++;
            }
            for(String b : list){
                fos.write(b);
            }
            fos.close();
            sc.close();
        }catch (IOException e) {
            e.printStackTrace();
        }
    }
}