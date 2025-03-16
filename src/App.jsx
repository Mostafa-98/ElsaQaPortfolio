
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Contact from './Components/Contact/Contact'
import About from './Components/About/About'
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import WhatsAppButton from './Components/WhatsAppButton/WhatsAppButton'



function App() {

  const router = createHashRouter([
    {
      path: "", element: <Layout />, children: [
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "projects", element: <Projects /> },
        { path: "/", element: <Home /> },
        { path: "*", element: <div>404</div> },

      ]
    }
  ])

  return (
    <>

      <RouterProvider router={router} />
      <WhatsAppButton />
    </>
  )
}

export default App
