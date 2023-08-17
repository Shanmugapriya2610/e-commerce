import React from "react";
import './styles.scss'

const PrimaryButton = (props) =>{

    let {
        title = "",
        onClick,
        className
    } = props;


    return(
        <button onClick={onClick} type="submit" className={`primary-button ${className}`}>{title}</button>
    )
}

export default PrimaryButton;