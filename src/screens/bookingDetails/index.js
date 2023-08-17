import React, { useEffect, useState } from 'react';
import './styles.scss'
import left from "../../assets/svg/LIcon.svg";
import { useLocation, useNavigate } from 'react-router-dom';
import Assets from '../../assets';
import {
  bookingsDetailsById,
  bookingDetailsData
} from '../../redux/reducers/bookingSlice';

import {
  userData
} from '../../redux/reducers/userSlice'
import { useDispatch, useSelector } from 'react-redux';

const BookingDetails = () => {


  const navigate = useNavigate();

  const location = useLocation();
  const dispatch = useDispatch();

  let user = useSelector(userData);


  const [status, setStatus] = useState(true);

  let bookingData = useSelector(bookingDetailsData);

  useEffect(() => {
    if (location?.state?._id) {
      dispatch(bookingsDetailsById(location.state._id));
    } else {
      goBack()
    }
    let permission = [...user?.userType?.permission];

    let status = permission.filter(it => it == "3");

    setStatus(status.length > 0);


  }, []);

  const goBack = () => {
    navigate(-1)
  }


  const onClickDownload = (data) => {
    const blob = new Blob([data?.moData], { type: 'text/xml' });
    const elem = window.document.createElement('a');
    elem.href = window.URL.createObjectURL(blob);
    elem.download = data?.superPnr + ".xml";
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
  }




  return (
    <div>

      <div className='d-flex  mt-4 align-items-center'>
        <img onClick={goBack} src={left} alt='back' className='back-icon' />
        <label className='font-medium-20'>Bookings Details</label>
      </div>


      <div className='box-container'>

        <div className='row'>
          <div className='col-3'>
            <p className='label font-medium-16'>User Id</p>
            <p className='label font-regular-14'>{bookingData?.userId}</p>
          </div>
          <div className='col-3'>
            <p className='label font-medium-16'>Email Id</p>
            <p className='label font-regular-14'>{bookingData?.email}</p>
          </div>
          <div className='col-3'>
            <p className='label font-medium-16'>Mobile Number</p>
            <p className='label font-regular-14'>{bookingData?.mobileISDCode + " " + bookingData?.mobileNumber}</p>
          </div>
          <div className='col-3'>
            <p className='label font-medium-16'>IP Address</p>
            <p className='label font-regular-14'>{bookingData?.ipAddress}</p>
          </div>


        </div>
        <div className='row mt-4'>
          <div className='col-3'>
            <p className='label font-medium-16'>User Agent</p>
            <p className='label font-regular-14'>{bookingData?.userAgent}</p>
          </div>
          <div className='col-3'>
            <p className='label font-medium-16'>Purchased Date</p>
            <p className='label font-regular-14'>{bookingData?.planPurchasedDate}</p>
          </div>
          <div className='col-3'>
            <p className='label font-medium-16'>Super PNR</p>
            <p className='label font-regular-14'>{bookingData?.superPnr}</p>
          </div>
          <div className='col-3'>
            <p className='label font-medium-16'>TTID</p>
            <p className='label font-regular-14'>{bookingData?.ttid}</p>
          </div>


        </div>
        <div className='row mt-4'>
          <div className='col-3'>
            <p className='label font-medium-16'>Payment Status</p>
            <p className='label font-regular-14'>{bookingData?.payStatus == "false" ? "Failed" : "Success"}</p>
          </div>
          <div className='col-3'>
            <p className='label font-medium-16'>UUID</p>
            <p className='label font-regular-14'>{bookingData?.uuid}</p>
          </div>
          <div className='col-3'>
            <p className='label font-medium-16'>Product</p>
            <p className='label font-regular-14'>{bookingData?.product}</p>
          </div>
          <div className='col-3'>
            <p className='label font-medium-16'>Payment Option</p>
            <p className='label font-regular-14'>{bookingData?.paymentOption}</p>
          </div>
        </div>
        <div className='row mt-4'>
          <div className='col-3'>
            <p className='label font-medium-16'>Plan Name</p>
            <p className='label font-regular-14'>{bookingData?.planName}</p>
          </div>
          <div className='col-3'>
            <p className='label font-medium-16'>Payment Mode</p>
            <p className='label font-regular-14'>{bookingData?.paymentMode}</p>
          </div>
          <div className='col-3'>
            <p className='label font-medium-16'>Payment Type</p>
            <p className='label font-regular-14'>{bookingData?.paymentType}</p>
          </div>
          <div className='col-3'>
            <p className='label font-medium-16'>Amount</p>
            <p className='label font-regular-14'>{bookingData?.amountDisplayed}</p>
          </div>


        </div>

        <div className='row mt-4'>

          <div className='col-3'>
            <p className='label font-medium-16'>MO File Droped</p>
            <p className='label font-regular-14'>{bookingData?.hasUploadedMOXML ? "Yes" : "No"}</p>
          </div>
          {
            status &&
            <div className='col-3'>
              <p className='label font-medium-16'>MO File</p>
              <div className='download-container-mo' onClick={() => onClickDownload(bookingData)}>
                <p className='label font-regular-16 download'>Download File</p>
                <img src={Assets.Images.download} alt="download" className='download-icon' />
              </div>
            </div>
          }


        </div>
      </div>

    </div>
  );
};

export default BookingDetails;