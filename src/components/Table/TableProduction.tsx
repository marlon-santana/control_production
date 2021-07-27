import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useTotal } from '../../contextTotal';
import '../Table/tabela.css'





export function TableProduct() {

  const {total,
    HoraValue,
    setHora1,
    setHora2,
    setHora3,
    setHora4,
    setTotal,
    setPorcentagem,
    hora1Editada,
    hora2Editada,
    hora3Editada,
    hora4Editada,
    porcentagemColor,
    setporcentagemColor,
     porcentagem,
  } = useTotal();
  


/*const [hora1, setHora1] = useState('0')
const [hora2, setHora2] = useState('0')
const [hora3, setHora3] = useState('0')
const [hora4, setHora4] = useState('0')
const [total,setTotal ] = useState(0)
const [porcentagemColor,setporcentagemColor] = useState('porcentagemGren')
const [porcentagem, setPorcentagem ] = useState(0)
const hora1Editada = parseInt(hora1) 
const hora2Editada = parseInt(hora2) 
const hora3Editada = parseInt(hora3) 
const hora4Editada = parseInt(hora4) 


  
   function HoraValue () {
     
    const total = hora1Editada + hora2Editada + hora3Editada + hora4Editada
    const meta = 340
    const porcent = (total / meta) * 100
    
     
      setHora1(hora1)
      setHora2(hora2)
      setHora3(hora3)
      setHora4(hora4)
      setTotal(total)
    setPorcentagem(porcent)
    
     
   }

   useEffect(()=> {
    if(porcentagem < 100 ) {
      setporcentagemColor('porcentagemRed')
    }else {
      setporcentagemColor('porcentagemGren')
    }
   },[porcentagem])
   */
  
   

    return (
      <section className='align'>
      <div className='tabela'>
        <label className='hora'>05:30 / 06:30</label>
        <input  className='valor'  placeholder='00' ></input>
        <input onChange={e => setHora1(e.target.value)} placeholder='00'></input>
        
        
      </div>

      <div className='tabela'>
        <label className='hora'>06:30 / 07:30</label>
        <input  placeholder='00'></input>
        <input onChange={e => setHora2(e.target.value)} placeholder='00'></input>
        
      </div>

      <div className='tabela'>
        <label className='hora'>07:30 / 08:30</label>
        <input  placeholder='00'></input>
        <input onChange={e => setHora3(e.target.value)} placeholder='00'></input>
        
      </div>

      <div className='tabela'>
        <label className='hora'>08:30 / 09:30</label>
        <input  placeholder='00'></input>
        <input onChange={e => setHora4(e.target.value)} placeholder='00'></input>
        
      </div>

      <div className='tabela'>
        <label className='total'>TOTAL:</label>
        <input  placeholder='00'></input>
        <strong placeholder='000'>{total}</strong>
        
      </div>

      <div className='tabela'>
      <strong className={porcentagemColor} placeholder='00%'>{porcentagem.toFixed(0)}%</strong>
        <p className='paragraph'> Da meta do dia</p>
        
      </div>
      <button onClick={() => HoraValue()}>salvar</button>
      </section>
      

        
    );
  
}
