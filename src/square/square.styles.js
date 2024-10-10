import styled from 'styled-components'

const StyledDiv = styled.div `
    height: 200px;
    width: 200px;
    background-color: ${props => props.color};
`
export {StyledDiv}