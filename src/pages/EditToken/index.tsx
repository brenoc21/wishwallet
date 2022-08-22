import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../../components/Layout';
import { useData } from '../../context/databaseContext';

// import { Container } from './styles';
type Token = {
  _id: String,
  name: string,
  value: number
  
}
function EditToken() {
  const {id} = useParams()
  const {data, setData} = useData()
  const [editFormData, setEditFormData] = useState<Token>(data.filter((item) => {return findToken(item, id!)})[0])
 useEffect(()=> {console.log("aaa: ",data.filter((item) => {return findToken(item, id!)})[0])}, [editFormData])
  const navigate = useNavigate()
  function findToken (item:Token, TokenId: string) {
    console.log("itemid: ",item._id,"id:", TokenId,"Tokenid: ", id)
    if(item._id == TokenId) {
      
      return true
    }
    return false
  }
  
  
  return (
    <Layout><div>{editFormData && editFormData.name}</div></Layout>
  );
}

export default EditToken;