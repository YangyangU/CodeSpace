import { useContext } from "react";
import Con from "../_context";

const ContextChild = () => {
    const msg = useContext(Con);
    return (
        <div>
            <h3>ContextChild --- {msg}</h3>
        </div>
    );
};

export default ContextChild;