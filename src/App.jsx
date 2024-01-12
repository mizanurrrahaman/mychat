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



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Loging/>}/>
        <Route path="/registation" element={<Registration/>}/>
         <Route element={<RootLayout/>}>
           
         </Route>
        <Route path="/home" element={<Home/>}/>

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
