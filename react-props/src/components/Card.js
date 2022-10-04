
const Card = (props) => {
    return(
        <>
            <h2>This is a Card!</h2>
            <h1>{props.card[props.index]}</h1>
        </>
    )
}

export default Card