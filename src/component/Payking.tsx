import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../redux/store';
import { titketData } from '../redux/data/titketData';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction, unwrapResult } from '@reduxjs/toolkit';
import { fetchtitketData } from '../redux/ticketAction';
import { Form, Input, Modal, message } from 'antd';
import { addNewPaymant } from '../redux/paymentAction';
import '../css/payment.css'


function Payking() {
  const navigate = useNavigate();
  const [emailData, setEmailData] = useState<titketData | null>(null); // Sử dụng kiểu TicketData | null
  const { email } = useParams<{ email: string }>();
  const data = useSelector((state: RootState) => state.titket.dataTitket);
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
  const [cardValue, setCardValue] = useState('');
  const [modelt, setModelt] = useState(false)
  useEffect(() => {
    dispatch(fetchtitketData());
  }, [dispatch]);
  useEffect(() => {
    const selectedData = data.find((item) => item.email === email);
    setEmailData(selectedData || null);
  });


  const thanhToan = parseInt(emailData?.quantity || '0');


  const tongTienAsString = (thanhToan * 15000).toString();



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue.length < 10) {
      console.log('Input is less than 10 characters.');
    }
  };


  const handleAddNewpayment = async (values: any) => {
    try {
      const actionResult = await dispatch(addNewPaymant(values));
      const newtitketData = unwrapResult(actionResult);
      message.success('Đặt vé thành công')

    }
    catch {
      message.error('không được để trống')
    }

  };

  const handleCardInputChange = (e: { target: { value: any; }; }) => {
    const inputValue = e.target.value;
    setCardValue(inputValue);
  };

  const validateCardInput = () => {
    if (cardValue.length < 19) {
      setModelt(true);
    }
  };

  const haldeTrue = () => {
    setModelt(false)
  }

  return (
    <div>
      <Modal className='aa' style={{}}
        visible={modelt}
        onCancel={haldeTrue}
        footer={[
        ]}
      >
        <p>Hình như đã có lỗi xảy ra khi thanh toán...
          Vui lòng kiểm tra lại thông tin liên hệ, thông tin thẻ và thử lại.</p>
      </Modal>

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
          <img src="/img/vecongvegiadinh.png" style={{ position: 'absolute', width: 250, left: 220, top: 235 }} />
          <img src='/img/Trini_Arnold_Votay1 2.png' style={{ position: 'absolute', width: 200, left: 0, top: 225 }} />
          <img src="/img/Thanh toán.png" alt="" style={{ position: 'absolute', width: 200, left: 500, top: 160 }} />
          <div style={{ position: 'absolute', left: 810, top: 220 }}>
            <img src="/img/tttt.png" alt="" style={{ width: 220, position: 'absolute', top: 10, left: -15 }} />
            <img src="/img/THÔNG TIN THANH TOÁN.png" style={{ width: 190, position: 'absolute', top: 20, left: 0, zIndex: 1 }} alt="" />
          </div>
          <Form onFinish={handleAddNewpayment}>
            <div style={{ position: 'absolute', top: 300, left: 200 }}>
              <Form.Item >
                <label style={{ width: 210, position: 'absolute', top: 0, left: 55 }} > <strong>Số tiền thanh toán</strong></label>
                <Input className='input-home' type="text" style={{ width: 170, position: 'absolute', top: 30, left: 50 }} value={tongTienAsString + ' vnđ'} />
              </Form.Item>
              <Form.Item  >
                <label style={{ width: 200, position: 'absolute', top: -24, left: 250 }} > <strong>Số lượng vé</strong></label>
                <Input className='input-home' type="text" style={{ width: 50, position: 'absolute', top: 5, left: 250 }} value={emailData?.quantity} />
              </Form.Item>
              <Form.Item >
                <label style={{ width: 200, position: 'absolute', top: -50, left: 370 }} > <strong>Ngày sử dụng</strong></label>
                <Input className='input-home' type="text" style={{ width: 130, position: 'absolute', top: -20, left: 370 }} value={emailData?.data} />
              </Form.Item>
            </div>
            <div style={{ position: 'absolute', top: 370, left: 200 }}>
              <Form.Item >
                <label style={{ width: 210, position: 'absolute', top: 0, left: 55 }} > <strong>Thông tin liên hệ</strong></label>
                <Input className='input-home' type="text" style={{ width: 250, position: 'absolute', top: 30, left: 50 }} value={emailData?.name} />
              </Form.Item>
            </div>
            <div style={{ position: 'absolute', top: 440, left: 200 }}>
              <Form.Item  >
                <label style={{ width: 210, position: 'absolute', top: 0, left: 55 }} > <strong>Điện thoại</strong></label>
                <Input className='input-home' type="text" style={{ width: 180, position: 'absolute', top: 30, left: 50 }} value={emailData?.phone} />
              </Form.Item>
            </div>
            <div style={{ position: 'absolute', top: 505, left: 200 }}>
              <Form.Item initialValue={emailData?.email} >
                <label style={{ width: 210, position: 'absolute', top: 0, left: 55 }} > <strong>Email</strong></label>
                <Input className='input-home' type="text" style={{ width: 250, position: 'absolute', top: 30, left: 50 }} value={emailData?.email} />
              </Form.Item>
            </div>
            <div style={{ position: 'absolute', top: 280, left: 780, color: 'white', fontSize: 24 }} >
              <label style={{ color: 'black' }}><strong>Số thẻ</strong></label>

              <Form.Item name='card' >
                <Input className='input-home' type="text" style={{ width: 250 }}
                  value={cardValue}
                  onChange={handleCardInputChange}
                  onBlur={validateCardInput}
                />
              </Form.Item>
            </div>
            <div>
              <img src='/img/Group-left.png' width={550} style={{ marginLeft: 180, marginTop: 132 }} />
            </div>
            <div>
              <img src="/img/Vector.png" width={81} style={{ marginLeft: 707, marginTop: -390 }} />
            </div>
            <div>
              <img src="/img/Group-right.png" width={310} style={{ marginLeft: 750, marginTop: -428 }} />
              <div style={{ position: 'absolute', top: 340, left: 780, color: 'white', fontSize: 24 }} >
                <label style={{ color: 'black' }}><strong>Họ và tên chủ thẻ</strong></label>

                <Form.Item name='nameCard' >

                  <Input className='input-home' type="text" style={{ width: 250 }}
                  />
                </Form.Item>
              </div>
              <div style={{ position: 'absolute', top: 400, left: 780, color: 'white', fontSize: 24 }} >
                <label style={{ color: 'black' }}><strong>Ngày hết hạn</strong></label>

                <Form.Item name='dataEx' >

                  <Input className='input-home' type="text" style={{ width: 200 }}
                  />
                </Form.Item>
              </div>
              <div style={{ position: 'absolute', top: 420, left: 1000, }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="56" viewBox="0 0 53 56" fill="none">
                  <path d="M42.603 56.2154H10.3249C4.46644 56.2154 -0.288452 51.4406 -0.288452 45.5576V19.9237C-0.288452 14.0407 4.46644 9.26593 10.3249 9.26593H42.603C48.4614 9.26593 53.2163 14.0407 53.2163 19.9237V45.5576C53.2163 51.4406 48.4614 56.2154 42.603 56.2154Z" fill="#F9B842" />
                  <path d="M42.603 56.2154H10.3249C4.46644 56.2154 -0.288452 51.4406 -0.288452 45.5576V19.9237C-0.288452 14.0407 4.46644 9.26593 10.3249 9.26593H42.603C48.4614 9.26593 53.2163 14.0407 53.2163 19.9237V45.5576C53.2163 51.4406 48.4614 56.2154 42.603 56.2154Z" fill="#FFD27B" />
                  <path d="M43.9824 4.94742C49.0781 4.94742 53.2163 9.49407 53.2163 15.1163V46.0465C53.2163 51.6524 48.0882 56.2154 42.9763 56.2154H31.584V4.94742H43.9824Z" fill="url(#paint0_linear_194_315)" />
                  <path d="M8.94544 4.94742C3.84975 4.94742 -0.288473 9.49407 -0.288473 15.1163V46.0465C-0.288473 51.6524 4.83968 56.2154 9.9516 56.2154H21.3439V4.94742H8.94544Z" fill="url(#paint1_linear_194_315)" />
                  <path d="M42.603 46.8613H10.3249C4.46644 46.8613 -0.288452 42.0865 -0.288452 36.2036V10.5859C-0.288452 4.70299 4.46644 -0.0718079 10.3249 -0.0718079H42.603C48.4614 -0.0718079 53.2163 4.70299 53.2163 10.5859V36.2199C53.2163 42.0865 48.4614 46.8613 42.603 46.8613Z" fill="#FFDE32" />
                  <defs>
                    <linearGradient id="paint0_linear_194_315" x1="60.2829" y1="30.5824" x2="31.5874" y2="30.5824" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#FFBE5C" />
                      <stop offset="0.84375" stop-color="#FFA90B" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_194_315" x1="-7.35509" y1="30.5824" x2="21.3405" y2="30.5824" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#FFBE5C" />
                      <stop offset="0.84375" stop-color="#FFA90B" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div style={{ position: 'absolute', top: 428, left: 1004, width: 100, zIndex: 1 }}  >
                <img src="/img/calendar.png" alt="aaaa" />
              </div>
              <div style={{ position: 'absolute', top: 460, left: 780, color: 'white', fontSize: 24 }} >
                <label style={{ color: 'black' }}><strong>CVV/CVC</strong></label>
                <Form.Item name='cvv' >
                  <Input.Password className='input-home' type="text" style={{ width: 100 }}
                  />
                </Form.Item>
              </div>
              <button style={{
                boxShadow: 'none', padding: 0, margin: 0, outline: 0, width: 0, height: 0,
                position: 'absolute', top: 534, left: 800, border: 0, zIndex: 1, backgroundColor: '#fff6d4', borderColor: '#fff6d4'
              }}  >
                <img src="/img/red.png" style={{ width: 220 }} />
                <img src="/img/Thanh toán.png" style={{ width: 120, position: 'absolute', top: 8, left: 50 }} />
              </button>
              <div style={{ position: 'absolute', top: 532, left: 800, color: 'white' }} >
                <svg xmlns="http://www.w3.org/2000/svg" width="220" height="56" viewBox="0 0 368 56" fill="none">
                  <path d="M356.287 55.9999H11.7127C5.24742 55.9999 0 50.3047 0 43.2877V12.7122C0 5.69518 5.24742 -6.10352e-05 11.7127 -6.10352e-05H356.287C362.753 -6.10352e-05 368 5.69518 368 12.7122V43.2877C367.982 50.3047 362.753 55.9999 356.287 55.9999Z" fill="#BD000B" />
                </svg>
              </div>
            </div>
          </Form>
        </div>
      </div >
    </div>
  );
}

export default Payking;
