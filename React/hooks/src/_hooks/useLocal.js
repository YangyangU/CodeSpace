import { useState,useEffect } from "react"

export function useLocal(key,value) {
    let [count,setCount] = useState(value)
    useEffect(() => {
        console.log(count);
        window.localStorage.setItem(key,count)
    },[count])//只会在count发生变化时触发，否则页面滚动也会打印

    return [count,setCount]
}