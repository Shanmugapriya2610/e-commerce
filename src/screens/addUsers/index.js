import React, { useEffect, useState } from 'react';
import './styles.scss'
import left from "../../assets/svg/LIcon.svg";
import { useNavigate } from 'react-router-dom';
import InputField from '../../components/inputField';
import ReactSelect from 'react-select';
import PrimaryButton from '../../components/primaryButton';
import { useForm } from "react-hook-form";

import {
  getAllUserTypes,
  userTypes,
  createUser
} from '../../redux/reducers/userMgmtSlice'
import { useDispatch, useSelector } from 'react-redux';
import { Toast } from '../../components/toast';

const AddUsers = () => {

  const { register, handleSubmit, errors } = useForm({ mode: "onChange" });


  const navigate = useNavigate();

  const dispatch = useDispatch();

  let type = useSelector(userTypes);

  let [options, setOptions] = useState([]);
  let [userType, setUserType] = useState(null);

  useEffect(() => {
    dispatch(getAllUserTypes());
  }, []);


  useEffect(() => {

    if (type) {
      let array = [];
      type?.map(it => {
        let obj = {
          value: it["_id"],
          label: it?.type,
        };
        array.push(obj);
      });

      setOptions([...array])
    }
  }, [type])




  const goBack = () => {
    navigate(-1)
  }

  const onSubmit = (data) => {

    if (!userType) {
      Toast({ type: "error", message: "Please select user type." });
      return
    };

    let dt = window.navigator;

    let item = '';

    dt?.userAgentData?.brands?.map(it => item += it?.brand + ' ')

    let userAgent = dt?.userAgentData?.platform + ' ' + item;

    let formData = {
      "userName": data["userName"],
      "emailId": data["emailId"],
      "userType": userType["value"],
      "userAgent": userAgent
    }

    createUser(formData).then(res => {
      Toast({ type: "success", message: "User created Successfully. Please check the mail for credentials." });
      goBack();
    })

  }


  return (
    <div>

      <div className='d-flex  mt-4 align-items-center'>
        <img onClick={goBack} src={left} alt='back' className='back-icon' />
        <label className='font-medium-20'>Add User</label>
      </div>


      <div className='box-container'>

        <div className='row'>
          <div className='col-4'>
            <label className='font-regular-14'>User Name</label>
            <InputField
              name="userName"
              placeholder="Please enter user name"
              register={register({
                required: true,
              })}
              error={errors.userName}
              messages={{
                required: "User Name is required",
              }}
            />
          </div>
          <div className='col-4'>
            <label className='font-regular-14'>Email Id</label>
            <InputField
              placeholder="Please enter email id"
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
            />
          </div>

        </div>

        <div className='row mt-3'>
          <div className='col-4'>
            <label className='font-regular-14'>User Type</label>
            <div className='user-types-container'>
              <ReactSelect
                className='select-user-type'
                placeholder="Select User type"
                onChange={(e) => setUserType(e)}
                options={options}
              />
            </div>
          </div>


        </div>

        <div className='row mt-3'>
          <div className='col-2'>
            <PrimaryButton onClick={handleSubmit(onSubmit)} title="Submit" className='add-user' />
          </div>
        </div>


      </div>

    </div>
  );
};

export default AddUsers;