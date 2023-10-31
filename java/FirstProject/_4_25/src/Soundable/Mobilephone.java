package Soundable;

public class Mobilephone implements Soundable{
    public void increaseVolume()
    {
        System.out.println("增大手机音量！");
    }
    public void decreaseVolume()
    {
        System.out.println("降低手机音量！");
    }
    public void stopSound()
    {
        System.out.println("停止播放手机！");
    }
    public void playSound()
    {
        System.out.println("开始播放手机！");
    }
}
