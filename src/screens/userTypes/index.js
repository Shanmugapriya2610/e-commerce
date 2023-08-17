import React, { useEffect } from 'react';
import './styles.scss'
import NormalTable from '../../components/table';
import NoData from '../../components/NoData';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../components/primaryButton'
import { useDispatch, useSelector } from 'react-redux';
import {
  userTypes,
  getAllUserTypes,
  deleteUserTypeById
} from '../../redux/reducers/userMgmtSlice'
import { Toast } from '../../components/toast';

const UserTypes = () => {

  let list = useSelector(userTypes);


  const navigate = useNavigate();
  const dispatch = useDispatch();

  const tableHeaders = ['S.No', 'Type', 'No. of Users', 'Action']

  useEffect(() => {
    dispatch(getAllUserTypes())
  },[])

  const onClickViewDetails = (data) => {
    if (data?.count > 0) {
      Toast({ type: "error", message: "Can't delete if the no. of users is more than zero" });
      return
    }
    dispatch(deleteUserTypeById(data?._id))
  }
  return (
    <div>

      <p className='font-medium-24 mt-5'>User Types</p>
      <div className="row">
        <div className="row col-6 mt-2">

        </div>
        <div className="col-6 d-flex justify-content-end search-container">
          {/* <div className='col-6 mx-3'>
            <InputField
              placeholder="Search"
              onChange={(e) => {
                let searchKey = e.target.value
                if (searchKey.length > 1) {
                }
                if (searchKey.length === 0) {
                }
              }}
            />
          </div> */}
          <div>
            <PrimaryButton
              title="Add User Type"
              onClick={() => navigate('/admin/add-user-types')}
              className='add-user' />
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
                  <td ><label className="font-regular-14">{list.type}</label></td>
                  <td ><label className="font-regular-14">{list.count}</label></td>
                  <td ><label onClick={() => onClickViewDetails(list)} className="font-medium-14 view-details">{'Delete'}</label></td>
                </tr>
              )
            })}
          </>) : (
            <NoData
              colSpan={4}
            />)}
        </NormalTable>
      </div>
    </div>
  );
};

export default UserTypes;