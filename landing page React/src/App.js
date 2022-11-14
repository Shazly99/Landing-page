import Nav from './Components/Navbar/Nav';
import './App.scss';
import Home from './Components/Home/Home';
import Content from './Components/Content/Content';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Router/Layout';
import Portfolio from './Components/Portfolio/Portfolio';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import Test from "./Components/test";
const root = createBrowserRouter([{
  path: '/', element: <Layout />, children: [
    { index: true, element: <Home /> },
    { path: 'Portfolio', element: <Portfolio /> },
    { path: 'about', element: <About /> },
    { path: 'contact', element: <Content /> },
    { path: '*', element: <NotFound /> },
  ]
}])

function App() {
  return (
    <>
      <RouterProvider router={root}></RouterProvider>
    </>
  );
}

export default App;
