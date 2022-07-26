import Header from './components/Header'
import './styles/bootstrap.min (4).css'
import { useDispatch, useSelector } from 'react-redux'
import CustomForm from './components/CustomForm'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from './pages/Users'
import Owners from './pages/Owners'
import Home from './pages/Home'
import OwnerDetail from './pages/OwnerDetail'
import DocumentosList from './pages/documentos/DocumentosList';
import DocumentosCreate from './pages/documentos/DocumentosCreate';
// import DocumentosUpdate from './pages/documentos/DocumentosUpdate';
import Fail from './pages/404'

function App() {

  // const {userReducer} = useSelector(state=> state)

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/register/" element={<Users />} />
          <Route path="/base/owners/" element={<Owners />} />
          <Route path="/base/owner/:id" element={<OwnerDetail />} />
          <Route path="/base/documentos/" element={<DocumentosList />} />
          <Route path="/base/documentos/create" element={<DocumentosCreate />} />
          {/* <Route path="/base/documentos/update" element={<DocumentosUpdate />} /> */}
          {/* <Route path="/api/user/register/" element={<ScreenUsuario />} /> */}
          <Route path="*" element={<Fail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
