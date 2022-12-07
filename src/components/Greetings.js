function Greetings(props){
            if(props.lang == "de"){
                return <p className="box">Hallo <span>{props.children}</span></p>
            } else if(
                props.lang == "en"){
                return (
                    <p className="box">Hello <span>{props.children}</span></p>
                )
            } else if(props.lang == "es"){
                return <p className="box">Hola <span>{props.children}</span></p>
            } else if(props.lang == "fr"){
                return(
                    <p className="box">Bonjour <span>{props.children}</span></p>
                )
            }
}

export default Greetings;