// import State from './components/State';
// import Effect from './components/Effect';
// import MyHooks from "./components/MyHooks";
// import State2 from "./components/State2";
// import Ref from "./components/Ref";
// import Context from "./components/Context";
import Con from "./_context";
import Antd from "./components/UseAntd";

const App = () => {
    return (
        <Con.Provider value={"来自App的数据"}>
        <div>
            {/* <State></State> */}
            {/* <Effect></Effect> */}
            {/* <MyHooks></MyHooks> */}
            {/* <State2 num={10}></State2> */}
            {/* <Ref></Ref> */}
            {/* <Context></Context> */}
            <Antd></Antd>
        </div>
        </Con.Provider>
    );
};

export default App;