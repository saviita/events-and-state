import { useState } from "react"
import {StyledDiv} from './square.styles'

const Square = () => {
    const [color, setColor] = useState(true)

    return (
        <>
        <StyledDiv color={color}></StyledDiv>
        <button onClick = {() => changeColor(color, setColor)}>Change Color</button>
        </>
    )
}

export default Square


const changeColor = (color, setColor) => {
    // let change = true
    // change ? change = false : change = true;
    setColor(!color)
}