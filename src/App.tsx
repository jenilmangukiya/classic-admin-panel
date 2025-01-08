import './App.css';
import ThemeCustomization from './themes';
import ScrollTop from './components/ScrollTop';
import { RouterProvider } from 'react-router-dom';
import router from './routes';

function App() {
  return (
    <ThemeCustomization>
      <ScrollTop>
        <RouterProvider router={router} />
      </ScrollTop>
    </ThemeCustomization>
  );
}

export default App;
