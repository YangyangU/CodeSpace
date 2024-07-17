import Input from "@/components/input";
import { useState } from "react";

const Home = () => {
    const [value, setValue] = useState("");
    return (
        <div>
            <h1>Home</h1>
            <Input placeholder="请输入" value={value} onChange={(e) => setValue(e.target.value)}/>
        </div>
    );
};

export default Home;