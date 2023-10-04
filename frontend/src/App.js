
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import RootComponent from "./components/RootComponent";
import AddExpense from './components/Expense/AddExpense';
import Login from './components/AuthComponents/Login';
import SignUp from './components/AuthComponents/SignUp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home';

export default function App() {
  const router=createBrowserRouter([{
    path:'/',
    element:<RootComponent/>,
    children:[{
      path:'/',
      element:<Home/>
    }, {
      path:'/addexpense',
      element:<AddExpense/>
    },
  
  {
    path:'/signup',
    element:<SignUp/>
  } ,{
    path:'/login',
    element:<SignUp/>
  }
  
  ]
  }])
  return (
    <div>
        <ToastContainer />
     <RouterProvider router={router}/>
    </div>
  );
}
