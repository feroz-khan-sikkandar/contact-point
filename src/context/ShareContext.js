import React from 'react';
import { createContext, useState } from 'react';
const ShareContext = createContext()

export const ShareProvider = ({ children }) => {


  return <ShareContext.Provider value={{


  }}>
    {children}

  </ShareContext.Provider>
}
export default ShareContext