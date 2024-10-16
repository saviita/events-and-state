
const Counter = ({value, setValue}) => {
    return (
    <>
    <h1>{value}</h1>
    <button onClick = {() => decrement(value, setValue)}>-1</button>
    <button onClick={() => reset(value, setValue)}>reset</button>
    <button onClick={() => increment(value, setValue)}>+1</button>
    </>
    )
}
export default Counter

const increment = (value, setValue) => {
    setValue(value + 1)
}

const reset = (value, setValue) => {
    setValue(value = 0)
}

const decrement = (value, setValue) => {
    setValue(value - 1)
}