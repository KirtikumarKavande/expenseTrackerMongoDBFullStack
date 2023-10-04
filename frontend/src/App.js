
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import RootComponent from "./components/RootComponent";
import AddExpense from './components/Expense/AddExpense';
import Login from './components/AuthComponents/Login';
import SignUp from './components/AuthComponents/SignUp';

export default function App() {
  const router=createBrowserRouter([{
    path:'/',
    element:<RootComponent/>,
    children:[{
      path:'/',
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
     <RouterProvider router={router}/>
    </div>
  );
}
