package Soundable;

public class Radio implements Soundable{
    public void increaseVolume()
    {
        System.out.println("增大收音机音量！");
    }
    public void decreaseVolume()
    {
        System.out.println("降低收音机音量！");
    }
    public void stopSound()
    {
        System.out.println("停止播放收音机！");
    }
    public void playSound()
    {
        System.out.println("开始播放收音机！");
    }
}
