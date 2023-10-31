package Dog;

public class Dog {
    DogState state;
    public void cry(){
        state.showState();
    }
    public void setState(DogState s){
        state =s;
    }
}
