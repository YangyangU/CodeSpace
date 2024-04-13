import { useEffect, useState } from "react";

export function useScroll(instance) {
    let [y,setY] = useState(instance)

    useEffect(()=>{
        const handlerScoll =()=>{
            setY(document.documentElement.scrollTop)
            console.log(y);
        }
        window.addEventListener('scroll',handlerScoll)
        
        return ()=>{
            window.removeEventListener('scroll',handlerScoll)
        }
    })

    return [y]
}