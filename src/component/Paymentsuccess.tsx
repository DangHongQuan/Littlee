import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../redux/store';
import { titketData } from '../redux/data/titketData';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction, unwrapResult } from '@reduxjs/toolkit';
import { fetchtitketData } from '../redux/ticketAction';
import { Card, Col, Form, Input, QRCode, Row, message } from 'antd';
import '../css/payment.css'
import { format } from 'date-fns';

function Paymentsuccess() {
  const navigate = useNavigate();
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
  const data = useSelector((state: RootState) => state.titket.dataTitket);
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const qrContent = 'aaaaaaaaa'
  useEffect(() => {
    dispatch(fetchtitketData());
  }, [dispatch]);

  const handlePageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };

  const pageCount = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, data.length);
  const slicedData = data.slice(startIndex, endIndex);




  return (
    <div>
      <div className='bg-custom'>
        
        <div className='container-custom' >
          <svg xmlns="http://www.w3.org/2000/svg" className='svg-custom' width="1220" height="147" viewBox="0 0 1920 147" fill="none">
            <g filter="url(#filter0_d_16580_109)">
              <path d="M1924.5 0V82.5C1383.5 115.5 459.5 117 0 82.5V0H1924.5Z" fill="#ED7200" />
            </g>
            <image href='/img/phone.png' x='1500' y='30' />
            <image href="/img/logolittle.png" x="200" y="0" width="229" height="91" onClick={() => navigate("/")} />
            <text x="850" y="62" fill="white" font-size="24" onClick={() => navigate("/")}>Trang chủ</text>

            <text x="1100" y="62" fill="white" font-size="24" onClick={() => navigate("/event")}>Sự kiện</text>
            <text onClick={() => navigate('/contact')} x="1300" y="62" fill="white" font-size="24">Liên hệ</text>
            <text x="1540" y="55" fill="white" font-size="24">033323232</text>
            <defs>
              <filter id="filter0_d_16580_109" x="-35" y="-31" width="1994.5" height="177.816" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="17.5" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.633333 0 0 0 0 0.228 0 0 0 0 0 0 0 0 0.75 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16580_109" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16580_109" result="shape" />
              </filter>
            </defs>
          </svg>

          <img src="/img/bg.png" alt="" className='bg' />
          <img src="/img/Thanh toán thành công.png" style={{ position: 'absolute', top: 100, left: 400, width: 400 }} alt="" />
          <img src="/img/bg-grppp.png" style={{ position: 'absolute', top: 220, left: 170, width: 900 }} alt="" />
          <img src="/img/Alvin_Arnold_Votay1 1.png" style={{ position: 'absolute', top: 250, left: 0, width: 200 }} />
          <img src="/img/xem chi tiết btn.png" style={{ position: 'absolute', top: 630, left: 500, width: 120 }} />
          <img src="/img/xem chi tiết bddtn.png" style={{ position: 'absolute', top: 630, left: 650, width: 120 }} />
          <div>
            <Row>
              <Col span={4}>
                <button style={{ width: 0, height: 0, border: 0, boxShadow: 'none', padding: 0, position: 'absolute', }}
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                  className="pagination-button"
                >
                  <img src="/img/previous btn1.png" alt="" style={{ width: 40, position: 'absolute', top: 280, left: 200 }} />
                </button>
              </Col>
              <Col span={14}>


                <div>
                  <div className="images-container" style={{ position: 'absolute', top: 120, left: 55 }} >
                    {slicedData.map((item) => (
                      <Col className="QR" span={4}>
                        <Card className="cardQR">
                          <div className="qr-container">
                            <QRCode type='canvas' value='aaa' style={{ marginLeft: -15, marginTop: -10 }} />
                            <h2 className="title">ALT2002323</h2>
                            <p style={{ fontSize: "20px", color: "#FFC226", fontFamily: "iCiel Koni", marginLeft: 30 }}>Vé cổng</p>
                            <p className="tgc" style={{ fontSize: 12, marginLeft: -10 }}>Ngày sử dụng: </p>
                            <div style={{ fontSize: 12, position: 'absolute', top: 255, left: 100, zIndex: 1 }}> {format(new Date(item.data), "dd/MM/yyyy")}</div>
                            <p style={{ marginTop: "30px" }}><img style={{ height: "30px" }} src="img/tick1.png" alt="" /></p>
                            <svg style={{ marginTop: -110, marginLeft: 50 }} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 48 48" fill="none">
                              <g clip-path="url(#clip0_190_550)">
                                <path d="M23.9999 47.9999C37.2548 47.9999 47.9999 37.2548 47.9999 23.9999C47.9999 10.7451 37.2548 0 23.9999 0C10.7451 0 0 10.7451 0 23.9999C0 37.2548 10.7451 47.9999 23.9999 47.9999Z" fill="#44C4A1" />
                                <path d="M37.9448 14.0899C36.7988 12.9376 34.934 12.9376 33.7882 14.09L21.4022 26.5464C20.2293 27.726 18.3205 27.726 17.1476 26.5464L13.2119 22.5885C12.066 21.4361 10.2012 21.436 9.05524 22.5884C7.9183 23.7316 7.91823 25.5785 9.05507 26.7218L17.1476 34.8605C18.3205 36.0401 20.2293 36.0401 21.4023 34.8605L37.945 18.2233C39.0818 17.08 39.0817 15.2331 37.9448 14.0899Z" fill="#EBF0F3" />
                              </g>
                              <defs>
                                <clipPath id="clip0_190_550">
                                  <rect width="48" height="48" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </Card>
                      </Col>
                    ))}
                  </div>


                </div>


              </Col>
              <Col span={4}>
                <button style={{ width: 0, height: 0, border: 0, boxShadow: 'none', padding: 0, position: 'absolute', }}
                  disabled={currentPage === pageCount}
                  onClick={() => handlePageChange(currentPage + 1)}
                  className="pagination-button"
                >
                  <img src="/img/next btn.png" style={{ width: 40, position: 'absolute', top: 280, left: 93 }} />
                </button>

              </Col>
            </Row>
          </div>
        </div>

      </div >
    </div>
  );
}

export default Paymentsuccess;

// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchtitketData } from '../redux/ticketAction';
// import { RootState } from '../redux/store';
// import { ThunkDispatch } from 'redux-thunk';
// import { AnyAction } from '@reduxjs/toolkit';
// function MyComponent() {
//   const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
//   const data = useSelector((state: RootState) => state.titket.dataTitket);
//   const itemsPerPage = 14;
//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     dispatch(fetchtitketData());
//   }, [dispatch]);

//   const handlePageChange = (page: React.SetStateAction<number>) => {
//     setCurrentPage(page);
//   };

//   const pageCount = Math.ceil(data.length / itemsPerPage);
//   const replicatedData = data.flatMap((item) => Array.from({ length: itemsPerPage }, () => item));
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = Math.min(startIndex + itemsPerPage, replicatedData.length);
//   const slicedData = replicatedData.slice(startIndex, endIndex);

//   const rows = [];
//   for (let i = 0; i < slicedData.length; i += 4) {
//     const row = slicedData.slice(i, i + 4);
//     rows.push(row);
//   }
//   return (
//     <div>
//     {/* Hiển thị dữ liệu trong trang hiện tại */}
//     {rows.map((row, rowIndex) => (
//       <div key={rowIndex} className="image-row">
//         {row.map((item) => (
//          <p>{item.email}</p>
//         ))}
//       </div>
//     ))}

//     {/* Hiển thị phân trang */}
//     <div className="pagination-container">
//       <button
//         disabled={currentPage === 1}
//         onClick={() => handlePageChange(currentPage - 1)}
//         className="pagination-button"
//       >
//         Previous
//       </button>
//       {Array.from({ length: pageCount }).map((_, index) => (
//         <button
//           key={index}
//           onClick={() => handlePageChange(index + 1)}
//           className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
//         >
//           {index + 1}
//         </button>
//       ))}
//       <button
//         disabled={currentPage === pageCount}
//         onClick={() => handlePageChange(currentPage + 1)}
//         className="pagination-button"
//       >
//         Next
//       </button>
//     </div>
//   </div>
//   );
// }

// export default MyComponent;

