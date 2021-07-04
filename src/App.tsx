
import '../src/styles/style.css'
import { Header } from './components/Header/header'
import { ProductHour } from './components/ProductsHour/ProductHour'
import { TableProduct } from './components/Table/TableProduction'


export function App() {
  return (
    <div>
      < Header />
      <ProductHour />
      <TableProduct />
      
    </div>
  );
    
}


export default App;
