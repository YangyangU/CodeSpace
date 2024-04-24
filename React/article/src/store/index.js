import React from "react";

import LoginStore from "./login.Store";

class RootStore{
    constructor(){
        this.loginStore = new LoginStore();
    }
}

const Context = React.createContext(new RootStore());

export const useStore = ()=>{
    return React.useContext(Context);
}
