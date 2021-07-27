import { ReactNode } from 'react';
import { createContext, useState, useEffect,useContext } from 'react'


interface contextTotalProviderProps {
    children: ReactNode;
}

interface contextTotalProps {
    setHora1(string: string) : void;
    setHora2(string: string) : void;
    setHora3(string: string) : void;
    setHora4(string: string) : void;
    setTotal(number: number) : void;
    setporcentagemColor(string: string) : void;
    HoraValue () : void;
    setPorcentagem: (number: number) => void;
    porcentagemColor: string;
    total: number;
    porcentagem: number;
    hora1Editada: number;
    hora2Editada: number;
    hora3Editada: number;
    hora4Editada: number;
}



 export const contextTotal = createContext({} as contextTotalProps);


export  function ContextTotalProvider({children}:contextTotalProviderProps) {

const [hora1, setHora1] = useState<string>('0')
const [hora2, setHora2] = useState<string>('0')
const [hora3, setHora3] = useState<string>('0')
const [hora4, setHora4] = useState<string>('0')
const [total,setTotal ] = useState<number>(0)
const [porcentagemColor,setporcentagemColor] = useState<string>('porcentagemGren')
const [porcentagem, setPorcentagem ] = useState<number>(0)
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

   return (
       <contextTotal.Provider value={{total,
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
        }}>
           {children}
       </contextTotal.Provider>
   );

}

export function useTotal() {
    const context = useContext(contextTotal);

    return context
}