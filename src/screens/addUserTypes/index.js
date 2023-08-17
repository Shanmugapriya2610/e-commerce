import React, { useState } from 'react';
import './styles.scss'
import left from "../../assets/svg/LIcon.svg";
import { useNavigate } from 'react-router-dom';
import InputField from '../../components/inputField';
import ReactSelect from 'react-select';
import PrimaryButton from '../../components/primaryButton'
import { Toast } from '../../components/toast';

import {
  createUserType,
  getAllUserTypes
} from '../../redux/reducers/userMgmtSlice'
import { useDispatch } from 'react-redux';
const AddUserTypes = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: '1px solid #ccc',
      borderRadius: '4px',
    }),
  };


  let [type, setType] = useState("");
  let [permissions, setPermissions] = useState([]);

  const permissionsOptions = [
    {
      label: "All",
      value: "all"
    },
    {
      label: "Dashboard",
      value: "1"
    },
    {
      label: "All Bookings",
      value: "2"
    },
    {
      label: "Can download Booking XML",
      value: "3"
    },
    {
      label: "User Management",
      value: "4"
    },
    {
      label: "Change Password",
      value: "5"
    },
  ]

  const goBack = () => {
    navigate(-1)
  };

  const handleChange = (selectedOptions) => {
    setPermissions(selectedOptions);
  }

  const onSubmit = () => {
    if (!type) {
      showError("Please enter type");
      return
    }
    if (permissions.length == 0) {
      showError("Please select atleast one permission");
      return
    }

    let hasAll = permissions.filter(it => it?.value == "all");

    let permission = [];
    if (hasAll.length > 0) {
      permissionsOptions.map(it => {
        if (it?.value != "all") {
          permission.push(it?.value);
        }
      })
    } else {
      permissions.map(it => {
        permission.push(it?.value);
      })
    };

    let data = {
      "type": type,
      "permission": permission
    };

    createUserType(data).then(res=>{
      Toast({type:"success",message:"User type created successfully"});
      dispatch(getAllUserTypes());
      goBack();
    })

  }

  const showError = (message) => {
    Toast({ type: "error", message: message });
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
            <label className='font-regular-14'>Type</label>
            <InputField
              placeholder="Please enter type"
              onChange={(e) => setType(e.target.value)}
            />
          </div>
          <div className='col-4'>
            <label className='font-regular-14'>Permissions</label>
            <div className='user-types-container-2'>
              <ReactSelect
                className='select-user-type'
                isMulti
                styles={customStyles}
                placeholder="Select User type"
                options={permissionsOptions}
                onChange={handleChange}
              />
            </div>
          </div>

        </div>

        <div className='row mt-3'>
          <div className='col-2'>
            <PrimaryButton onClick={() => onSubmit()} title="Submit" className='add-user' />
          </div>
        </div>


      </div>

    </div>
  );
};

export default AddUserTypes;