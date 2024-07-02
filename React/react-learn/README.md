
lodash —— _.orderBy

const [count,setCount] = useState(0)

const inputRef = useRef(null) // 渲染完毕后才可用
ref={inputRef}

useEffect(()=>{
    inputRef.current.focus()
},[])

useEffect(()=>{
    console.log(count)
},[count])

useEffect(()=>{
    console.log('count or name or age changed')
})

useEffect(()=>{
    console.log('count or name or age changed')
    return ()=>{
        console.log('清除副作用')
    }
})