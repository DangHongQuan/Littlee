import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from "./component/Homepage"

function RouteApp() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteApp