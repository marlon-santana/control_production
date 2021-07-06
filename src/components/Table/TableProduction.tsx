import { useState } from 'react';
import '../Table/tabela.css'



export function TableProduct() {
const [productHour, setProductHour] = useState([])


function Soma() {
  setProductHour(productHour)
  const soma = [...productHour]
    return soma
  console.log(soma)
}

    return (
      <section className='align'>
      <div className='tabela'>
        <label className='hora'>05:30 / 06:30</label>
    <input  placeholder='00'></input>
        <input placeholder='85'></input>
        
      </div>

      <div className='tabela'>
        <label className='hora'>06:30 / 07:30</label>
        <input  placeholder='00'></input>
        <input placeholder='85'></input>
        
      </div>

      <div className='tabela'>
        <label className='hora'>07:30 / 08:30</label>
        <input  placeholder='00'></input>
        <input placeholder='85'></input>
        
      </div>

      <div className='tabela'>
        <label className='hora'>08:30 / 09:30</label>
        <input  placeholder='00'></input>
        <input placeholder='85'></input>
        
      </div>

      <div className='tabela'>
        <label className='total'>TOTAL:</label>
        <input  placeholder='00'></input>
        <input placeholder='359'></input>
        
      </div>

      <div className='tabela'>
        <input  className='porcentagem' placeholder='50%'></input>
        <p className='paragraph'> Da meta do dia</p>
        
      </div>
      <button onClick={() => Soma()}>salvar</button>
      </section>
      

        
    );
}