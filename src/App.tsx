
import '../src/styles/style.css'
import { Header } from './components/Header/header'
import { ProductHour } from './components/ProductsHour/ProductHour'
import { TableProduct } from './components/Table/TableProduction'
import { contextTotal } from './contextTotal';


export function App() {
  return (
    <contextTotal.Provider value={123}>
      < Header />
      <ProductHour />
      <TableProduct />
      
    </contextTotal.Provider>
  );
    
}


export default App;
