import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from "./component/Homepage"
import Eventpage from './component/Eventpage';
import Payking from './component/Payking';
import Detaileventpage from './component/Detaileventpage';

function RouteApp() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/event' element={<Eventpage />} />
        <Route path="/titket/:email" element={<Payking />} />
        <Route path="/detailEvent/:name" element={<Detaileventpage />} />


      </Routes>
    </BrowserRouter>
  )
}

export default RouteApp