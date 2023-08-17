import React, { useEffect, useState } from 'react';
import './styles.scss'
import InputField from '../../components/inputField';
import PrimaryButton from '../../components/primaryButton'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SVG from "../../assets/svg";

import {
  loginUser,
  saveUserData,
  userData
} from '../../redux/reducers/userSlice'

const LoginScreen = (props) => {
  const [navLink,] = useState([
    {
      to: "/admin/dashboard",
      label: "Dashboard",
      Icon: SVG.DashboardIcon,
      id: '1',
    },
    {
      to: "/admin/all-bookings",
      label: "All Bookings",
      Icon: SVG.MyBookingsIcon,
      id: '2',
    },
    {
      to: "/admin/user-types",
      label: "User Types",
      Icon: SVG.UserTypesIcon,
      id: '4',
    },
    {
      to: "/admin/user-management",
      label: "User Management",
      Icon: SVG.UserManagementIcon,
      id: '4',
    },
    {
      to: "/admin/change-password",
      label: "Change Password",
      Icon: SVG.ChangePasswordIcon,
      id: '5',
    },

  ]);


  const { register, handleSubmit, errors } = useForm({ mode: "onChange" });

  const [showPassword, setShowPassword] = useState(false);


  const dispatch = useDispatch();

  let data = useSelector(userData);

  const navigate = useNavigate();


  const navigateUI = () => {
    navigate("/admin/dashboard");
    return () => { }
  }
  // useEffect(async() => {
  //   if (data) {

  //   }
  // }, [data]);



  const onSubmit = (data) => {
    loginUser(data).then(async res => {
      dispatch(saveUserData(res));

      let item = {...res};

      let permission = [...item?.userType?.permission];


      await localStorage.setItem('TOKEN',item?.token);
      let navLinks = [];

      for (let i = 0; i < permission.length; i++) {
        const element = permission[i];
        let backup = [...navLink];
        let items = backup.filter(i => i.id === `${element}`);
        navLinks = [...navLinks, ...items];
      };

      console.log(navLinks,'navLinks');
      let path = navLinks[0].to;
      navigate(`${path}`)

    })
  }

  return (
    <div className='login-container'>
      <div className='salutation-container'>
        <p className='font-medium-24'>Welcome to Yatra!</p>
        <p className='font-regular-18'>Please enter your Email ID to proceed</p>
      </div>
      <div className='login-fields-container'>
        <i className="yt-user-profile-disable"></i>
        <InputField
          name="emailId"
          register={register({
            required: true,
            pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
          })}
          error={errors.emailId}
          messages={{
            required: "Email Id is required",
            pattern: "Please enter valid Email Id"
          }}
          placeholder="Email Id" />

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
          placeholder="Password" />
        <PrimaryButton onClick={handleSubmit(onSubmit)} title="Login" />
      </div>


    </div>
  );
};

export default LoginScreen;