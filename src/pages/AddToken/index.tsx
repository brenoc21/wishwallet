import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { json } from "stream/consumers";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Layout from "../../components/Layout";
import WishLogo from "../../components/WishLogo";
import { useData } from "../../context/databaseContext";

import { AddTokenContent, TitleRow, FormContainet } from "./styles";
type Token = {
  _id: number,
  name: string,
  value: number
  
}
function AddToken() {
  const {data, setData} = useData()
  const [error, setError] = useState<Boolean>(false)
  const [formData, setFormData] = useState<Token>({ _id: 0,
    name: "",
    value: 0})
    function findEqual (item:Token, name: string) {
      if(item.name == name) {
        return true
      }
      return false
    }
  
  function saveToken(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(false)
    console.log(data.filter((item) => {return findEqual(item, formData.name)}))
   if(data.filter((item) => {return findEqual(item, formData.name)}).length > 0){
    setError(true)
    console.log(formData.name, " : ", data.filter((item) => findEqual(item, formData.name)))
   }else {
    setData(data.concat(formData));
    console.log("deubom");
    navigate('/')
    localStorage.setItem("data", JSON.stringify(data));
   
   }
    
    
   }
  const navigate = useNavigate()
  return (
    <Layout>
      <WishLogo />
      <AddTokenContent>
        <TitleRow>
        <label>Add Token</label>
        <Button type={"button"} color={"var(--gray)"} text={"Back"} onClick={()=> navigate("/")}></Button>
        </TitleRow>
        <FormContainet onSubmit={e => saveToken(e)}>
          <Input error={error} onChange={(e)=> setFormData({...formData, name: (e.target as HTMLInputElement).value })} type={"text"} title="Token" />
        <Input error={false} onChange={(e)=> setFormData({...formData, value: parseFloat((e.target as HTMLInputElement).value)})} type={"number"} title="Balance" />
        <Button type={"submit"} color={"var(--purple)"} text="Save" onClick={()=> console.log("submit")} />
        </FormContainet>
      </AddTokenContent>
    </Layout>
  );
}

export default AddToken;
