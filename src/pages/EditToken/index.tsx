import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Layout from "../../components/Layout";
import WishLogo from "../../components/WishLogo";
import { useData } from "../../context/databaseContext";
import { EditTokenContent, FormContainet, TitleRow, ButtonRow } from "./styles";

// import { Container } from './styles';
type Token = {
  _id: string;
  name: string;
  value: number;
};
function EditToken() {
  const { id } = useParams();
  const { data, setData } = useData();
  const [error, setError] = useState<Boolean>(false);
  const [editFormData, setEditFormData] = useState<Token>(
    data.filter((item) => {
      return findToken(item, id!);
    })[0]
  );
  const navigate = useNavigate();
  function findToken(item: Token, TokenId: string) {
    if (item._id === TokenId) {
      return true;
    }
    return false;
  }
  function saveToken(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(false);
    console.log(editFormData);
    if (
      data.filter((item) => {
        return (
          findEqual(item, editFormData.name) &&
          !findEqual(item, editFormData._id)
        );
      }).length > 0
    ) {
      setError(true);
    } else {
      setData(
        data.map((item) => {
          return item._id === id ? editFormData : item;
        })
      );
      navigate("/");
    }
  }
  function findEqual(item: Token, variable: string) {
    if (item.name === variable || item._id === variable) {
      return true;
    }
    return false;
  }
  function removeItem() {
    setData(
      data.filter((item) => {
        return item._id !== id;
      })
    );
    navigate("/");
  }
  return (
    <Layout>
      <WishLogo />
      <EditTokenContent>
        <TitleRow>
          <label>Add Token</label>
          <Button
            type={"button"}
            color={"var(--gray)"}
            text={"Back"}
            onClick={() => navigate("/")}
          ></Button>
        </TitleRow>
        <FormContainet onSubmit={(e) => saveToken(e)}>
          <Input
            errorMsg={"Each token name must be unique."}
            value={editFormData.name}
            error={error}
            onChange={(e) =>
              setEditFormData({
                ...editFormData,
                name: (e.target as HTMLInputElement).value,
              })
            }
            type={"text"}
            title="Token"
          />
          <Input
            errorMsg="Something is wrong with the value"
            value={editFormData.value}
            error={false}
            onChange={(e) =>
              setEditFormData({
                ...editFormData,
                value: parseFloat((e.target as HTMLInputElement).value),
              })
            }
            type={"number"}
            title="Balance"
          />
          <ButtonRow>
            <Button
              type={"button"}
              color={"var(--red-error)"}
              text="Remove"
              onClick={() => removeItem()}
            />
            <Button
              type={"submit"}
              color={"var(--purple)"}
              text="Save"
              onClick={() => console.log("submit")}
            />
          </ButtonRow>
        </FormContainet>
      </EditTokenContent>
    </Layout>
  );
}

export default EditToken;
