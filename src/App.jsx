import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import { BookingPage, HomePage } from './pages'
import { Header } from './components';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
        <Header />
        <HomePage />
      </>,
    },
    {
      path: "/booking",
      element: <>
        <Header />
        <BookingPage />
      </>,
    },
    {
      path: "*",
      element: <>
        <Header />
        <HomePage />
      </>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
