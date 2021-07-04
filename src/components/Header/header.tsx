import '../Header/header.css'

export function Header() {
return (
    <>
    <div className="header1">
        Bancadas/Montagem
    </div>

    <div className="container">
        <div className='setor'>
        <button>B2</button>
         <p className='p'>00%</p>
        </div>
        
        <div className='setor'>
        <button>B3</button>
         <p className='verde'>110%</p>
        </div>

        <div className='setor'>
        <button>B5</button>
         <p className='verde'>100%</p>
        </div>

        <div className='setor'>
        <button>B6</button>
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


   
    </>
);
}