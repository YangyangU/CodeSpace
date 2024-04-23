import React from "react";
import counterStore from "./counterStore";
import movieStore from "./movieStore";
import todoStore from "./todoStore";
import { observer } from 'mobx-react-lite';


class RootStore{
    constructor(){
        this.counterStore = counterStore
        this.movieStore = movieStore
        this.todoStore = todoStore
    }
}

const rootStore = new RootStore();

const context = React.createContext(rootStore);

const useStore = () => React.useContext(context);

export { useStore,observer }