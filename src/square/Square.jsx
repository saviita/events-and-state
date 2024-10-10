import { useState } from "react"
import {StyledDiv} from './square.styles'

const Square = () => {
    const [color, setColor] = useState('orange')

    return (
        <>
        <StyledDiv color={color}></StyledDiv>
        <button onClick = {() => changeColor(color, setColor)}>Change Color</button>
        </>
    )
}

export default Square


const changeColor = (color, setColor) => {
    setColor()
}