import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../redux/store';
import { titketData } from '../redux/data/titketData';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';
import { fetchtitketData } from '../redux/ticketAction';

// interface TicketData {
//   // Định nghĩa kiểu dữ liệu của item trong mảng dataTitket
//   email: string;
//   // Các trường dữ liệu khác của item
// }

function Payking() {
  const [emailData, setEmailData] = useState<titketData | null>(null); // Sử dụng kiểu TicketData | null
  const { email } = useParams<{ email: string }>();
  const data = useSelector((state: RootState) => state.titket.dataTitket);
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

  useEffect(() => {
      dispatch(fetchtitketData());
    }, [dispatch]);
  useEffect(() => {
    const selectedData = data.find((item) => item.email === email);
    setEmailData(selectedData || null); // Nếu không tìm thấy, setEmailData thành null
  }, [data, email]); // Giám sát biến data và email trong mảng dependency

  return (
    <div>
      <h1>Payking</h1>
      {emailData ? (
        <div>
          <p>Email: {emailData.email}</p>
          <p> {emailData.name}</p>
          <p> {emailData.phone}</p>
          <p> {emailData.data}</p>
          <p> {emailData.ticketType}</p>
          <p> {emailData.quantity}</p>


          {/* Hiển thị các trường dữ liệu khác của emailData */}
        </div>
      ) : (
        <div>Email not found!</div>
      )}
    </div>
  );
}

export default Payking;
