import React, { useContext, useState } from 'react';

const LangContext = React.createContext(null);

function LangProvider({ children }): JSX.Element {
  const [lang, setLang] = useState<string>('en');

  return <LangContext.Provider value={[lang, setLang]}>{children}</LangContext.Provider>;
}

function useLang() {
  const context = useContext(LangContext);

  if (context === null) {
    throw new Error('useLang must be used within a LangProvider');
  }

  return context;
}

export { LangProvider, useLang };
