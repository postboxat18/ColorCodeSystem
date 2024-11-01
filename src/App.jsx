import Colorsystem from './app/pages/Colorsystem';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
      <Toaster position="top-center"></Toaster>
      <div className="container-fluid m-2">
        <div className="row">
          <Colorsystem></Colorsystem>
        </div>
      </div>
    </>
  );
}

export default App;
