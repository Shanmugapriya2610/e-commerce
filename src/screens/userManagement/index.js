import React, { useEffect } from 'react';
import './styles.scss'
import NormalTable from '../../components/table';
import NoData from '../../components/NoData';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../components/primaryButton'
import {
  users,
  getAllUsers,
  deleteUserById
} from '../../redux/reducers/userMgmtSlice'
import { useDispatch, useSelector } from 'react-redux';
const UserManagement = () => {


  let list = useSelector(users);


  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(()=>{
    dispatch(getAllUsers())
  },[])



  const tableHeaders = ['S.No', 'User Name', 'Email Id', 'User Type', 'Action']


  const onClickViewDetails = (data) => {
    dispatch(deleteUserById(data?._id))
  };

  const getUserType = (data) =>{
    if(data && data?.length > 0){
      let type = data[0]?.type;
      return type
    }else{
      return '-'
    }
  }

  return (
    <div>

      <p className='font-medium-24 mt-5'>User Management</p>
      <div className="row">
        <div className="row col-6 mt-2">
          
        </div>
        <div className="col-6 d-flex justify-content-end search-container">
          <div className='col-6 mx-2'>
            {/* <InputField
              placeholder="Search"
              onChange={(e) => {
                let searchKey = e.target.value
                if (searchKey.length > 1) {
                }
                if (searchKey.length === 0) {
                }
              }}
            /> */}
          </div>
          <div>
            <PrimaryButton
                title="Add User" 
                onClick={()=> navigate('/admin/add-user')}
                className='add-user'/>
          </div>
        </div>

      </div>

      <div className='table-container'>
        <NormalTable headers={tableHeaders} isAlign={true}>
          {list?.length > 0 ? (<>
            {list.map((list, index) => {
              return (
                <tr key={index}>
                  <td className='text-center'><label className="font-regular-14">{(index + 1)}</label></td>
                  <td ><label className="font-regular-14">{list.userName}</label></td>
                  <td ><label className="font-regular-14">{list.emailId}</label></td>
                  <td ><label className="font-regular-14">{getUserType(list?.users)}</label></td>
                  <td ><label onClick={() => onClickViewDetails(list)} className="font-medium-14 view-details">{'Delete'}</label></td>
                </tr>
              )
            })}
          </>) : (
            <NoData
              colSpan={8}
            />)}
        </NormalTable>
      </div>
    </div>
  );
};

export default UserManagement;