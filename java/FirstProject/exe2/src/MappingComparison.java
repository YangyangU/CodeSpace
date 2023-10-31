import java.util.*;
public class MappingComparison {
    public static void main(String[] args) {
        // 创建HashMap对象
        Map<String, Integer> hashMap = new HashMap<>();
        // 创建TreeMap对象
        Map<String, Integer> treeMap = new TreeMap<>();
        // 记录开始时间
        long startTime = System.currentTimeMillis();
        // 使用HashMap进行映射
        for (int i = 0; i < 100000; i++) {
            String key = "key" + i;
            int value = i;
            hashMap.put(key, value);
        }
        // 记录结束时间
        long endTime = System.currentTimeMillis();
        long hashTime = endTime - startTime;

        System.out.println("HashMap time: " + hashTime + "ms");

        // 记录开始时间
        startTime = System.currentTimeMillis();

        // 使用TreeMap进行映射
        for (int i = 0; i < 100000; i++) {
            String key = "key" + i;
            int value = i;
            treeMap.put(key, value);
        }
        // 记录结束时间
        endTime = System.currentTimeMillis();
        long treeTime = endTime - startTime;
        System.out.println("TreeMap time: " + treeTime + "ms");
    }
}
