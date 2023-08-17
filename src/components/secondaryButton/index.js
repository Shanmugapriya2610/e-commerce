import React from "react";
import './styles.scss'

const SecondaryButton = (props) =>{

    let {
        title = "",
        onClick,
    } = props;


    return(
        <button onClick={onClick} className="secondary-button">{title}</button>
    )
}

export default SecondaryButton;