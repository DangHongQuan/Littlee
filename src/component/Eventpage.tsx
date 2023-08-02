import React, { useEffect } from 'react'
import '../css/eventPage.css'
import { useNavigate } from 'react-router-dom'
import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from "redux-thunk";
import { fetchEventsData } from '../redux/eventActions';

function Eventpage() {
    const navigate = useNavigate();
    const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
    const data = useSelector((state: RootState) => state.event.dataEvent);
    useEffect(() => {
        dispatch(fetchEventsData());
    }, [dispatch]);
    return (
        <>
            <div className='bg-custom'>
                <div className='container-custom' >
                    <svg xmlns="http://www.w3.org/2000/svg" className='svg-custom' width="1220" height="147" viewBox="0 0 1920 147" fill="none">
                        <g filter="url(#filter0_d_16580_109)">
                            <path d="M1924.5 0V82.5C1383.5 115.5 459.5 117 0 82.5V0H1924.5Z" fill="#ED7200" />
                        </g>
                        <image href='/img/phone.png' x='1500' y='30' />
                        <image href="/img/logolittle.png" x="200" y="0" width="229" height="91" onClick={() => navigate("/")} />
                        <a >  <text x="860" y="62" fill="white" font-size="24" onClick={() => navigate("/")}>Trang chủ</text></a>

                        {/* <image href="/img/Tags.png" x="800" y="30" width="200" height="50" onClick={() => navigate("/")} /> */}
                        <image href="/img/sk.png" x="1050" y="30" width="200" height="50" onClick={() => navigate("/event")} />
                        <text x="1300" y="62" fill="white" font-size="24">Liên hệ</text>
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
                    <img src="/img/bg-vt.png " className='bg' />
                    <img src="/img/coLeft.png" className='coLeft' />
                    <img src="/img/coRight.png" className='coRight' />
                    <img src="/img/Sự kiện nổi bật.png" className='suKienNoiBat' />


                    <div className="row justify-content-center " style={{ marginTop: 120, maxWidth: 1300 }}>
                        {data.map((event) => (

                            <div className="col-2 me-5" key={event.name}>

                                <div className="card" style={{ width: 220, height: 340 }}>
                                    <img src={event.img1} alt="Image 1" style={{ width: 219, height: 140, marginTop: -4, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />

                                    <strong style={{ fontSize: 29, marginLeft: 15 }}>{event.name}</strong>
                                    <p style={{ color: '#6C7272', marginLeft: 15 }}>{event.title}</p>


                                    <svg style={{ position: 'absolute', top: 200, left: 13 }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 19C12.1978 19 12.3911 18.9414 12.5556 18.8315C12.72 18.7216 12.8482 18.5654 12.9239 18.3827C12.9996 18.2 13.0194 17.9989 12.9808 17.8049C12.9422 17.6109 12.847 17.4327 12.7071 17.2929C12.5673 17.153 12.3891 17.0578 12.1951 17.0192C12.0011 16.9806 11.8 17.0004 11.6173 17.0761C11.4346 17.1518 11.2784 17.28 11.1685 17.4444C11.0586 17.6089 11 17.8022 11 18C11 18.2652 11.1054 18.5196 11.2929 18.7071C11.4804 18.8946 11.7348 19 12 19ZM17 19C17.1978 19 17.3911 18.9414 17.5556 18.8315C17.72 18.7216 17.8482 18.5654 17.9239 18.3827C17.9996 18.2 18.0194 17.9989 17.9808 17.8049C17.9422 17.6109 17.847 17.4327 17.7071 17.2929C17.5673 17.153 17.3891 17.0578 17.1951 17.0192C17.0011 16.9806 16.8 17.0004 16.6173 17.0761C16.4346 17.1518 16.2784 17.28 16.1685 17.4444C16.0586 17.6089 16 17.8022 16 18C16 18.2652 16.1054 18.5196 16.2929 18.7071C16.4804 18.8946 16.7348 19 17 19ZM17 15C17.1978 15 17.3911 14.9414 17.5556 14.8315C17.72 14.7216 17.8482 14.5654 17.9239 14.3827C17.9996 14.2 18.0194 13.9989 17.9808 13.8049C17.9422 13.6109 17.847 13.4327 17.7071 13.2929C17.5673 13.153 17.3891 13.0578 17.1951 13.0192C17.0011 12.9806 16.8 13.0004 16.6173 13.0761C16.4346 13.1518 16.2784 13.28 16.1685 13.4444C16.0586 13.6089 16 13.8022 16 14C16 14.2652 16.1054 14.5196 16.2929 14.7071C16.4804 14.8946 16.7348 15 17 15ZM12 15C12.1978 15 12.3911 14.9414 12.5556 14.8315C12.72 14.7216 12.8482 14.5654 12.9239 14.3827C12.9996 14.2 13.0194 13.9989 12.9808 13.8049C12.9422 13.6109 12.847 13.4327 12.7071 13.2929C12.5673 13.153 12.3891 13.0578 12.1951 13.0192C12.0011 12.9806 11.8 13.0004 11.6173 13.0761C11.4346 13.1518 11.2784 13.28 11.1685 13.4444C11.0586 13.6089 11 13.8022 11 14C11 14.2652 11.1054 14.5196 11.2929 14.7071C11.4804 14.8946 11.7348 15 12 15ZM19 3H18V2C18 1.73478 17.8946 1.48043 17.7071 1.29289C17.5196 1.10536 17.2652 1 17 1C16.7348 1 16.4804 1.10536 16.2929 1.29289C16.1054 1.48043 16 1.73478 16 2V3H8V2C8 1.73478 7.89464 1.48043 7.70711 1.29289C7.51957 1.10536 7.26522 1 7 1C6.73478 1 6.48043 1.10536 6.29289 1.29289C6.10536 1.48043 6 1.73478 6 2V3H5C4.20435 3 3.44129 3.31607 2.87868 3.87868C2.31607 4.44129 2 5.20435 2 6V20C2 20.7956 2.31607 21.5587 2.87868 22.1213C3.44129 22.6839 4.20435 23 5 23H19C19.7956 23 20.5587 22.6839 21.1213 22.1213C21.6839 21.5587 22 20.7956 22 20V6C22 5.20435 21.6839 4.44129 21.1213 3.87868C20.5587 3.31607 19.7956 3 19 3ZM20 20C20 20.2652 19.8946 20.5196 19.7071 20.7071C19.5196 20.8946 19.2652 21 19 21H5C4.73478 21 4.48043 20.8946 4.29289 20.7071C4.10536 20.5196 4 20.2652 4 20V11H20V20ZM20 9H4V6C4 5.73478 4.10536 5.48043 4.29289 5.29289C4.48043 5.10536 4.73478 5 5 5H6V6C6 6.26522 6.10536 6.51957 6.29289 6.70711C6.48043 6.89464 6.73478 7 7 7C7.26522 7 7.51957 6.89464 7.70711 6.70711C7.89464 6.51957 8 6.26522 8 6V5H16V6C16 6.26522 16.1054 6.51957 16.2929 6.70711C16.4804 6.89464 16.7348 7 17 7C17.2652 7 17.5196 6.89464 17.7071 6.70711C17.8946 6.51957 18 6.26522 18 6V5H19C19.2652 5 19.5196 5.10536 19.7071 5.29289C19.8946 5.48043 20 5.73478 20 6V9ZM7 15C7.19778 15 7.39112 14.9414 7.55557 14.8315C7.72002 14.7216 7.84819 14.5654 7.92388 14.3827C7.99957 14.2 8.01937 13.9989 7.98079 13.8049C7.9422 13.6109 7.84696 13.4327 7.70711 13.2929C7.56725 13.153 7.38907 13.0578 7.19509 13.0192C7.00111 12.9806 6.80004 13.0004 6.61732 13.0761C6.43459 13.1518 6.27841 13.28 6.16853 13.4444C6.05865 13.6089 6 13.8022 6 14C6 14.2652 6.10536 14.5196 6.29289 14.7071C6.48043 14.8946 6.73478 15 7 15ZM7 19C7.19778 19 7.39112 18.9414 7.55557 18.8315C7.72002 18.7216 7.84819 18.5654 7.92388 18.3827C7.99957 18.2 8.01937 17.9989 7.98079 17.8049C7.9422 17.6109 7.84696 17.4327 7.70711 17.2929C7.56725 17.153 7.38907 17.0578 7.19509 17.0192C7.00111 16.9806 6.80004 17.0004 6.61732 17.0761C6.43459 17.1518 6.27841 17.28 6.16853 17.4444C6.05865 17.6089 6 17.8022 6 18C6 18.2652 6.10536 18.5196 6.29289 18.7071C6.48043 18.8946 6.73478 19 7 19Z" fill="#FFB809" />
                                    </svg>
                                    <p style={{ position: 'absolute', top: 200, left: 40, color: '#444;' }}>{event.data}</p>
                                    <p style={{ marginTop: 15, marginLeft: 15, fontSize: 28, fontFamily: 'Montserrat', color: '#FA7D09' }}>{event.money} vnđ</p>
                                    <div onClick={() => navigate(`/detailEvent/${event.name}`)}>
                                        <svg style={{ marginLeft: 10 }} xmlns="http://www.w3.org/2000/svg" width="200" height="40" viewBox="0 0 200 40" fill="none">
                                            <path d="M193.634 40H6.36558C2.85186 40 0 36.6498 0 32.5222V14.5366C0 10.4089 2.85186 7.05878 6.36558 7.05878H193.634C197.148 7.05878 200 10.4089 200 14.5366V32.5222C199.99 36.6498 197.148 40 193.634 40Z" fill="#BD000B" />
                                            <path d="M194.488 4.11765C197.53 4.11765 200 7.29984 200 11.2348V32.8828C200 36.8064 196.939 40 193.888 40H144.022V4.11765H194.488Z" fill="url(#paint0_linear_189_32)" />
                                            <path d="M5.51178 4.11765C2.47013 4.11765 1.14441e-05 7.29984 1.14441e-05 11.2348V32.8828C1.14441e-05 36.8064 3.06102 40 6.11235 40H55.9783V4.11765H5.51178Z" fill="url(#paint1_linear_189_32)" />
                                            <path d="M193.644 35.805H6.36589C2.852 35.805 0 32.1624 0 27.6743V8.13073C0 3.64266 2.852 0 6.36589 0H193.644C197.158 0 200.01 3.64266 200.01 8.13073V27.6867C200 32.1624 197.158 35.805 193.644 35.805Z" fill="#FF000A" />
                                            <defs>
                                                <linearGradient id="paint0_linear_189_32" x1="200" y1="22.0568" x2="136.413" y2="22.3096" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0.28125" stop-color="#93000A" />
                                                    <stop offset="1" stop-color="#D23333" stop-opacity="0" />
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_189_32" x1="6.04634e-06" y1="22.0568" x2="63.5871" y2="22.3096" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0.28125" stop-color="#93000A" />
                                                    <stop offset="1" stop-color="#D23333" stop-opacity="0" />
                                                </linearGradient>
                                            </defs>

                                            <image href="/img/xemChiTiet.png" x="0" y="5" width="200" height="20" />


                                        </svg>

                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>






                </div>

            </div >

        </>
    )
}

export default Eventpage