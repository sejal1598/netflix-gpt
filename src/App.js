
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Body from './Component/Body';
import appRouter from './routes';

function App() {
  return (
    <div 
    >
     <RouterProvider router={appRouter}/>
    
    </div>
  );
}

export default App;
