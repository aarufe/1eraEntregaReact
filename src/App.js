import './App.css';
import NavBar from './components/NavbBar/NavBar'; 
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
    <NavBar />  
    <ItemListContainer greeting={"Bienvenidos al ECommerce de Pintureria Córdoba"}/>
    </div>
  );
}

export default App;


