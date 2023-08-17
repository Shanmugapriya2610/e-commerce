import React, { useEffect, useState } from 'react';
import './styles.scss'
import NormalTable from '../../components/table';
import NoData from '../../components/NoData';
import InputField from '../../components/inputField';
import Pagination from '../../components/Pagination/Pagination';
import { useNavigate } from 'react-router-dom';
import DatePicker from '../../components/DatePicker'
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllMyBookings,
  allBookingsData,
  totalPage
} from '../../redux/reducers/bookingSlice'

const MyBookings = () => {

  const [fromDate, setFromDate] = useState("")
  const [toDate, setToDate] = useState("");
  const [search, setSearch] = useState("");

  const dateObj = new Date();

  let dispatch = useDispatch();

  let pages = useSelector(totalPage);
  let list = useSelector(allBookingsData);
  const [activePage, setActivePage] = useState(1)


  const [limit, setLimit] = useState(10);



  const getData = () =>{
    let params = {
      page: activePage,
      limit,
      startDate: fromDate,
      endDate: toDate,
      search
    };

    if(!fromDate){
      delete params["startDate"]
    }
    if(!toDate){
      delete params["endDate"]
    }
    if(!fromDate && toDate){
      delete params["startDate"]
    }
    if(fromDate && !toDate){
      delete params["startDate"]
    }
    if(!search){
      delete params["search"]
    }
    dispatch(getAllMyBookings(params))
  }

  useEffect(()=>{
    getData();
  },[limit,activePage,fromDate,toDate,search])


  const navigate = useNavigate();


  const tableHeaders = ['S.No', 'User Id', 'Email Id', 'Super PNR', 'Booking Date', 'Payment Status', 'Action']


  const onClickViewDetails = (data) => {
    navigate('/admin/booking-details',{state: data})
  }
  return (
    <div>

      <p className='font-medium-24 mt-5'>All Bookings</p>
      <div className="row">
        <div className="row col-6 mt-2">
          <div className="d-flex">
            <label className="showLabel font-regular-16 me-2 mt-2">Show</label>
            <select
              onChange={(e) => {
                setLimit(e?.target?.value);
              }}
              className="holiday-selectBox font-regular-16">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="75">75</option>
              <option value="100">100</option>
            </select>
            <label className="showLabel font-regular-16 ms-2 mt-2">
              Entries
            </label>
          </div>
        </div>
        <div className="col-6 d-flex justify-content-end search-container">
          <label className='font-medium-14 filter-text'>Filters</label>
          <div className='col-4 mx-2'>
            <DatePicker
              calendarStyle={true}
              placeHolder={true}
              placeholderText="Select from date"
              value={fromDate}
              minDate={dateObj.getDate()}
              maxDate={dateObj.setDate(dateObj.getDate())}
              format={"dd-MM-yyyy"}
              onChange={(date) => setFromDate(date)}
            />
          </div>
          <div className='col-4 mx-2 row'>
            <DatePicker
              calendarStyle={true}
              placeHolder={true}
              placeholderText="Select to date"
              value={toDate}
              minDate={dateObj.getDate()}
              maxDate={dateObj.setDate(dateObj.getDate())}
              format={"dd-MM-yyyy"}
              onChange={(date) => setToDate(date)}
            />
          </div>
          <div className='col-5'>
            <InputField
              placeholder="Search"
              onChange={(e) => {
                let searchKey = e.target.value
                setSearch(searchKey)
              }}
            />
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
                  <td ><label className="font-regular-14">{list.userId}</label></td>
                  <td ><label className="font-regular-14">{list.email}</label></td>
                  <td ><label className="font-regular-14">{list.superPnr}</label></td>
                  <td ><label className="font-regular-14">{list.planPurchasedDate}</label></td>
                  <td ><label className={`font-medium-14 ${list.payStatus === 'false' ? 'error' : 'success'}`}>{list.payStatus === 'false' ? 'Failed' : 'Sucess'}</label></td>
                  <td ><label onClick={() => onClickViewDetails(list)} className="font-medium-14 view-details">{'View Details'}</label></td>
                </tr>
              )
            })}
          </>) : (
            <NoData
              colSpan={8}
            />)}
        </NormalTable>
      </div>

      {
        list?.length > 0 ? (
          <Pagination
            totalPage={pages}
            pageChange={(res) => {
              setActivePage(res)
            }}
          />) : (<></>)
      }
    </div>
  );
};

export default MyBookings;