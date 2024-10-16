import { useState } from "react"
import {StyledDiv} from './square.styles'

const Square = ({value}) => {
    const [color, setColor] = useState(true)

    return (
        <>
        <StyledDiv $color={color}></StyledDiv>
        {/* Se usa $ porque no es un atributo de html sino una propiedad para dar estilos */}
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