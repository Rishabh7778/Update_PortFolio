import { AllRoutes } from './Routes/AllRoutes';
import { Header, Footer } from './components';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



function App() {
  return (
    <div className="App dark:bg-slate-800">
      <Header/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
