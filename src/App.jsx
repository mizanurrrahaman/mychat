import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Loging from "./pages/loging/Loging";
import Registration from "./pages/registration/Registration";


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Loging/>}/>
        <Route path="/registation" element={<Registration/>}/>
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
