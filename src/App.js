
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import Main from './Components/Layout/Main';
import Orders from './Components/Orders/Orders';
import About from './Components/About/About';
import Grandpa from './Components/Grandpa/Grandpa';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: ()=> fetch('tshirts.json'),
          element:<Home></Home>

        },
        {
          path: '/orders',
          element: <Orders></Orders>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/grandpa',
          element:<Grandpa></Grandpa>
        }
      ],
   }
 ])
  return (
    <div className="App">
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
