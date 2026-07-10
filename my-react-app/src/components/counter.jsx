import { useEffect, useState } from "react"

const Counter = ({start = 0}) => {
    const [count, setCounter] = useState(start)
    const [warna, setWarna] = useState("red")

    useEffect(() => {
        if(count > 10){
            setWarna("Orange")
        }
        setTimeout(() => {
            setCounter(count+1)
        },1000)
    }, [count])

    return(
        <>
        <h1 style={{color: warna}}>Count: {count}</h1>


        </>
    )
}

export default Counter