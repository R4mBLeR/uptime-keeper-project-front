import styles from './App.module.css'
import {BrowserRouter, Route, Routes} from "react-router";
import MainPage from "./pages/MainPage/MainPage.tsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.tsx";
import LoginPage from "./pages/LoginPage/LoginPage.tsx";

function App() {

  return (
   <div className={styles.wrapper}>
       <BrowserRouter>
         <Routes>
             <Route path='/' element={<MainPage/>}/>
             <Route path='/login' element={<LoginPage/>}/>
             <Route path='/register' element={<RegisterPage/>}/>
         </Routes>
       </BrowserRouter>
   </div>
  )
}

export default App
