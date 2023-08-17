import React, { useEffect, useState } from "react";
import './styles.scss'
import FormErrorMessage from "../ErrorMessage";
import Assets from "../../assets";

const InputField = (props) => {

    const [, setTitle] = useState(null);
    let {
        name = "",
        value = "",
        type = "text",
        onChange,
        togglePassword,
        placeholder = "",
        isForgot = false,
        isTitle = false,
        isMobile = false,
        disabled = false,
        className = '',
        maxlength,
        error,
        messages,
        register = {},
        isPassword = false,
        viewPassword = true
    } = props;

    useEffect(() => {
        if (isMobile) {
            setTitle({ label: '+91', value: '91' })
        }
    }, [isMobile])



    return (
        <>
            <div className={`input-container ${className}`}>
                {
                    isMobile &&
                    <span className={`country-code`}>{isMobile}</span>
                }
                {
                    isTitle &&
                    <span className={`country-code`}>{isTitle}</span>
                }

                
                <input
                    name={name}
                    placeholder={placeholder}
                    className={`${"font-regular-14 inputBoxStyle"} ${disabled ? "cursor-not-allowed" : ""} ${isMobile ? "isMobile" : ""}`}
                    disabled={disabled}
                    ref={register}
                    autoComplete='new-password'
                    onChange={onChange}
                    defaultValue={value}
                    type={viewPassword ? type : "password"}
                    maxLength={maxlength}
                    onWheel={(event) => event.currentTarget.blur()}
                />
                {
                    isForgot && <span className="forgot-text">Forgot?</span>
                }
                {
                    isPassword && <img onClick={togglePassword} src={viewPassword ? Assets.Icons.hide : Assets.Icons.view} alt="password" className="password-icon"/>
                }

            </div>

            <div>
                <FormErrorMessage error={error} messages={messages} />
            </div>
        </>
    )
}

export default InputField;