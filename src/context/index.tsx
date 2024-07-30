import { createContext ,ReactNode, useState } from 'react';

import en from '../../public/en.json'
import pt from '../../public/pt.json'

type pageIdiom = typeof en;

interface LanguageTypeContext{
  languageType: string
  setLanguageType: (idiom:string) => void
  idiomPage: pageIdiom
}

export const AppContex  = createContext({} as LanguageTypeContext);

interface ActiveContextProviderProps {
  children: ReactNode
}

export function AppContextProvider({children}:ActiveContextProviderProps){
 const [languageType, setLanguageType] = useState('en');

  function idiom ():pageIdiom{
    switch(languageType){
      case 'en':
        return en;
      case 'pt':
        return pt;
      default :
        return en  
    }
  }

  const idiomPage = idiom()

  return (
    <AppContex.Provider value={{
      languageType,
      setLanguageType,
      idiomPage
    }}>
      {children}
    </AppContex.Provider>
  )
}