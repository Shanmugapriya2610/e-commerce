import React, { useState } from 'react';
import './styles.scss'
import InputField from '../../components/inputField';
import PrimaryButton from '../../components/primaryButton'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { changePassword, userData } from '../../redux/reducers/userSlice';
import { Toast } from '../../components/toast';

const ChangePassword = () => {

  const { register, handleSubmit, errors } = useForm({ mode: "onChange" });

  const [showPassword, setShowPassword] = useState(false);
  const [newPassword, setNewPassword] = useState(false);
  const [rePassword, setRePassword] = useState(false);


  let user = useSelector(userData);

  let dispatch = useDispatch();

  const onSubmit = (data) =>{

    if(data["newPassword"] !== data["rePassword"]){
      Toast({type:"error",message:"New password and re-enter password is not same"});
      return;
    };

    let formData = {
      emailId: user?.emailId,
      password: data?.password,
      newPassword: data["newPassword"]
    }

    dispatch(changePassword(formData));

  }


  return (
    <div>
      <p className='font-medium-20 title'>Change Password</p>
      <div className='fields-container'>
        <InputField
          name="password"
          register={register({
            required: true,
            pattern: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
          })}
          error={errors.password}
          isPassword
          viewPassword={showPassword}
          togglePassword={() => setShowPassword(!showPassword)}
          messages={{
            required: "Password is required",
            pattern: "Please enter valid password"
          }}
          placeholder="Current Password" />
        <InputField
          name="newPassword"
          register={register({
            required: true,
            pattern: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
          })}
          error={errors.newPassword}
          isPassword
          viewPassword={newPassword}
          togglePassword={() => setNewPassword(!newPassword)}
          messages={{
            required: "Password is required",
            pattern: "Please enter valid password"
          }}
          placeholder="Enter Password" />
        <InputField
          name="rePassword"
          register={register({
            required: true,
            pattern: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
          })}
          error={errors.rePassword}
          isPassword
          viewPassword={rePassword}
          togglePassword={() => setRePassword(!rePassword)}
          messages={{
            required: "Password is required",
            pattern: "Please enter valid password"
          }}
          placeholder="Enter Re-Password" />
        <PrimaryButton onClick={handleSubmit(onSubmit)} title="Submit" />

      </div>
    </div>
  );
};

export default ChangePassword;