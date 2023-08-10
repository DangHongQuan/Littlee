import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from "./component/Homepage"
import Eventpage from './component/Eventpage';
import Payking from './component/Payking';
import Detaileventpage from './component/Detaileventpage';
import Contact from './component/Contact';
import Paymentsuccess from './component/Paymentsuccess';

function RouteApp() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/event' element={<Eventpage />} />
        <Route path="/titket/:email" element={<Payking />} />
        <Route path="/detailEvent/:name" element={<Detaileventpage />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/Paymentsuccess" element={<Paymentsuccess />} />



      </Routes>
    </BrowserRouter>
  )
}

export default RouteApp