import React, { createContext, useContext, useEffect, useState } from "react";
type Token = {
  _id: String,
  name: string,
  value: number
  
}
type Props = {
  children: React.ReactNode,
};
type Context = {
  data: Token[],
  setData: (Token:Token[])=> void
}
export const DataContext = createContext({} as Context);


export default function DataProvider({ children }: Props) {
  const [data, setData] = useState<Token[]>(localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data") || ""): []);
  useEffect(()=> {
    localStorage.setItem("data", JSON.stringify(data));
  }, data)
  return (
    <DataContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  const { data, setData } = context;
  return {
    data,
    setData,
  };
}
