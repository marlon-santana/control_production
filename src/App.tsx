
import '../src/styles/style.css'
import { Header } from './components/Header/header'
import { ProductHour } from './components/ProductsHour/ProductHour'
import { TableProduct } from './components/Table/TableProduction'
import {ContextTotalProvider } from './contextTotal';



export function App() {
  return (
    <ContextTotalProvider>
      < Header />
      <ProductHour />
      <TableProduct />
      
    </ContextTotalProvider>
  );
    
}


export default App;
