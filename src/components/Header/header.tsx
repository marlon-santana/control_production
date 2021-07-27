import { useContext } from 'react';
import { useState } from 'react';
import { contextTotal } from '../../contextTotal';
import '../Header/header.css'



export function Header() {
    const [select, setSelect] = useState('')
    const [select2, setSelect2] = useState('')
    const [select3, setSelect3] = useState('')
    const [select4, setSelect4] = useState('')

    const total = useContext(contextTotal);
    
        console.log(select)
        console.log(select2)
        console.log(select3)
        console.log(select4)
    
return (
    <>
    <div className="header1">
        Bancadas/Montagem
    </div>

    <div className="container">
        <div >
        <button className={select}  onClick={ () => setSelect(select === 'select'? '': 'select')} >B2</button>
        <p className='p'>{total}</p>
        </div>
     
        
        <div className='setor'>
        <button className={select2}  onClick={ () => setSelect2(select2 === 'select2'? '': 'select2')} >B3</button>
         <p className='verde'>110%</p>
        </div>

        <div className='setor'>
        <button className={select3}  onClick={ () =>  setSelect3(select3 === 'select3'? '': 'select3') }>B5</button>
         <p className='verde'>100%</p>
        </div>

        <div className='setor'>
        <button className={select4}  onClick={ () =>  setSelect4(select4 === 'select4'? '': 'select4')}>B6</button>
         <p className='verde'>100%</p>
        </div>

        <div className='setor'>
        <button>SP3</button>
         <p className='red'>35%</p>
        </div>
        <div className='setor'>
        <button>SP4</button>
         <p className='red'>35%</p>
        </div>
        <div className='setor'>
        <button>cp1</button>
         <p className='red'>35%</p>
        </div>
        <div className='setor'>
        <button>cp2</button>
         <p className='red'>35%</p>
        </div>
        <div className='setor'>
        <button>USINAG</button>
         <p className='red'>35%</p>
        </div>

        

    </div>


    <button className="atrasos">ATRASOS</button>

    <div className='produto'>
        <strong className='prodstrong'>PRODUTOS</strong>
        <input className='prodinput'></input>
        <button className='prodbutton'>ENTER</button>
    </div>


   
    </>
);
}