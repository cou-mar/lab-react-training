function BoxColor(props){
    const bgColor = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
        padding:'50px'
    }

    function valueToHex(c){
        var hex = '0' + c.toString(16);
        return hex.slice(-2)
    }

    function rgbToHex(r, g, b){
        return(
            valueToHex(r) + valueToHex(g) + valueToHex(b)
        )
    }

    return(
        <div style={bgColor}>
            <p>
                rgb({props.r}, {props.g}, {props.b})
                <p>#{rgbToHex(props.r, props.g, props.b)}</p>
            </p>
        </div>
    );
}

export default BoxColor;