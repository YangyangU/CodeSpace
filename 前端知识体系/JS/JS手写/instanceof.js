const myInstanceof = (left, right) => {
    let Left = left.__proto__;
    let Right = right.prototype;
    while(Left){
        if(Left === Right){
            return true;
        }
        Left = Left.__proto__;
    }
    return false;
}