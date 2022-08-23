import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Layout from "../../components/Layout";
import WishLogo from "../../components/WishLogo";
import { useData } from "../../context/databaseContext";
import { ethers } from "ethers";
import { AddTokenContent, TitleRow, FormContainet } from "./styles";
type Token = {
  _id: string;
  name: string;
  value: number;
};
function AddToken() {
  const { data, setData } = useData();
  const [error, setError] = useState<Boolean>(false);
  const [formData, setFormData] = useState<Token>({
    _id: ethers.utils.sha256(ethers.utils.randomBytes(32)),
    name: "",
    value: 0,
  });
  function findEqual(item: Token, name: string) {
    if (item.name === name) {
      return true;
    }
    return false;
  }

  function saveToken(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (
      data.filter((item) => {
        return findEqual(item, formData.name);
      }).length > 0
    ) {
      setError(true);
    } else {
      setData(data.concat(formData));
      navigate("/");
    }
  }
  const navigate = useNavigate();
  return (
    <Layout>
      <WishLogo />
      <AddTokenContent>
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
            value={formData.name}
            error={error}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: (e.target as HTMLInputElement).value,
              })
            }
            type={"text"}
            title="Token"
          />
          <Input
            errorMsg={"Something is wrong with the value."}
            value={formData.value}
            error={false}
            onChange={(e) =>
              setFormData({
                ...formData,
                value: parseFloat((e.target as HTMLInputElement).value),
              })
            }
            type={"number"}
            title="Balance"
          />
          <Button
            type={"submit"}
            color={"var(--purple)"}
            text="Save"
            onClick={() => console.log("submit")}
          />
        </FormContainet>
      </AddTokenContent>
    </Layout>
  );
}

export default AddToken;
