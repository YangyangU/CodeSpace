package exe2;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
public class App {
    public static void main(String[] args) throws Exception {
        ArrayList<String> list = new ArrayList<String >();
        BufferedReader br = new BufferedReader(new FileReader("D:\\text10.txt"));
        try{
            String  s = null;
            while((s=br.readLine()) != null){
                list.add(s);
            }
        }catch (IOException e) {
            e.printStackTrace();
        }
        br.close();
        list.trimToSize();
        Iterator<String>iterator = list.iterator();
        while(iterator.hasNext()){
            System.out.print(iterator.next());
        }
    }
}
