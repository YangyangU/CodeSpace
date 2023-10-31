package day0925.ui;

import javax.swing.*;
import javax.swing.border.BevelBorder;
import java.util.Random;

public class GameJFrame extends JFrame {
    int[][] data =new int[4][4];
    public GameJFrame(){
        initJFrame();//初始化界面
        initJMenuBar();//初始化菜单
        intData();//初始化数据
        initImage();

        this.setVisible(true);
    }

    private void intData(){
         int[] tempArr = {0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15};
         Random r=new Random();
         for (int i = 0; i < tempArr.length; i++) {
             int index =r.nextInt(tempArr.length);
             int temp=tempArr[i];
             tempArr[i]=tempArr[index];
             tempArr[index]=temp;
         }
         /**for (int i = 0; i < tempArr.length; i++) {
             System.out.print(tempArr[i]+" ");
         }
         System.out.println();*/

         for (int i = 0; i < tempArr.length; i++) {
             data[i/4][i%4]=tempArr[i];
         }
         /**for (int i = 0; i < data.length; i++) {
             for (int j = 0; j < data.length; j++) {
                 System.out.print(data[i][j]+" ");
             }
             System.out.println();
         }*/
    }
    private void initImage() {
    //先加载的图片在上方


        for (int i = 0; i < 4; i++) {
            for (int j = 0; j < 4; j++) {

                int num=data[i][j];
                //创建一个JLabel对象
                JLabel jLabel = new JLabel(new ImageIcon("day0925\\image\\animal\\animal3\\"+num+".jpg"));
                jLabel.setBounds(105 * j+83, 105 * i+134, 105, 105);
                jLabel.setBorder(new BevelBorder(BevelBorder.LOWERED));
                this.getContentPane().add(jLabel);
            }
        }

        ImageIcon bg =new ImageIcon("day0925\\image\\background.png");
        JLabel background=new JLabel(bg);
        background.setBounds(40,40,500,560);
        this.getContentPane().add(background);
    }

    private void initJMenuBar() {
        JMenuBar jMenuBar =new JMenuBar();

        JMenu functionJMenu = new JMenu("功能");
        JMenu aboutJMenu = new JMenu("关于我们");


        JMenuItem replayItem =new JMenuItem("重新游戏");
        JMenuItem reloginItem =new JMenuItem("重新登录");
        JMenuItem closeItem =new JMenuItem("关闭游戏");

        JMenuItem accountItem =new JMenuItem("公众号");

        functionJMenu.add(replayItem);
        functionJMenu.add(reloginItem);
        functionJMenu.add(closeItem);

        aboutJMenu.add(accountItem);

        jMenuBar.add(functionJMenu);
        jMenuBar.add(aboutJMenu);

        this.setJMenuBar(jMenuBar);
    }

    private void initJFrame() {
        this.setSize(603,680);
        this.setTitle("拼图单机版");
        this.setAlwaysOnTop(true);
        this.setLocationRelativeTo(null);
        this.setDefaultCloseOperation(3);
        this.setLayout(null);
    }
}
