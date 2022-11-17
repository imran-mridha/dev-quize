import './App.css';
import { RouterProvider } from "react-router-dom";
import { router } from './routes/Routes';


function App() {
  return (
    <div className="App bg-gray-900">
      <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
