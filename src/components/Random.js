const Random = (props) => {
    let randomNum = Math.floor(Math.random() * (props.max - props.min) + props.min)

    return(
        <p className="box">Random value between {props.min} and {props.max} = {randomNum}</p>
    )
}

export default Random;