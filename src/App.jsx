import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Loging from "./pages/loging/Loging";
import Registration from "./pages/registration/Registration";
import Home from "./pages/home/Home";
import RootLayout from "./components/layouts/RootLayout";
import Message from "./pages/message/Message";
import Notification from "./pages/notification/Notification";
import Setting from "./pages/setting/Setting";




function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Loging/>}/>
        <Route path="/registation" element={<Registration/>}/>
         <Route element={<RootLayout/>}>
           <Route path="/home" element={<Home/>}/>
           <Route path="/message" element={<Message/>}/>
           <Route path="/notification" element={<Notification/>}/>
           <Route path="/setting" element={<Setting/>}/>
         </Route>

      </>

    )
  );

  return (
    <>
      <RouterProvider
       router={router}
  />
    </>
  )
}

export default App
