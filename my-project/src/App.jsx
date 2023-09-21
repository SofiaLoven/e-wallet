import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";

import { AddCard } from './routes/AddCard';
import { Cards } from './routes/Cards';
import { Root } from './routes/Root';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Root/>}>
    <Route index element={<Cards/>}/>
    <Route path='/addCard' element={<AddCard/>}/>
  </Route>
))

function App() {

  return (
    <>
      < RouterProvider router={router} />
    </>
  )
}

export default App
