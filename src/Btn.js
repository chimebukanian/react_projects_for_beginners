export default function Btn({evHandler, btnText}) {
    // onClick (camelCase)
    return <button onClick={evHandler}>{btnText}</button>
}