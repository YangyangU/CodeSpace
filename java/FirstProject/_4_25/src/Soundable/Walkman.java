package Soundable;

public class Walkman implements Soundable{
    public void increaseVolume()
    {
        System.out.println("增大随身听音量！");
    }
    public void decreaseVolume()
    {
        System.out.println("降低随身听音量！");
    }
    public void stopSound()
    {
        System.out.println("停止播放随身听！");
    }
    public void playSound()
    {
        System.out.println("开始播放随身听！");
    }
}
