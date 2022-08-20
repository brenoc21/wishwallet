import React from "react";
import {
  TitleRow,
  
  TokenContainer,
  TokenTable,
  TokenHeader,
  TokenBody,
} from "./styles";


import EditIcon from "../../assets/edit.svg";
import Button from "../../components/Button/index";
import { useData } from "../../context/databaseContext";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/index";
import WishLogo from "../../components/WishLogo";
export default function Home() {
  const { data, setData } = useData();
  console.log(data)
  function addToken() {
   setData(data.concat({ name: "klv", _id: 2, value: 10250.5 }));
    console.log(data);
   localStorage.setItem("data", JSON.stringify(data));
  }
  const navigate = useNavigate();
  
  return (
    <Layout>
      <TitleRow>
      <WishLogo/>
        <Button
          color={"var(--purple)"}
          text={"Add Token"}
          onClick={() => navigate("/addtoken")}
        />
      </TitleRow>
      <TokenContainer>
        <TokenTable>
          <TokenHeader>
            <td className="editBox"></td> <td>Tokens</td> <td>Balance</td>
          </TokenHeader>
          <TokenBody>
            {data ? (
              data.map((token) => {
                return (
                  <React.Fragment>
                  <tr>
                    <td
                      className="editBox"
                      onClick={() => console.log(token._id)}
                    >
                      <img src={EditIcon} />
                    </td>

                    <td className="item">{token.name.toUpperCase()}</td>
                    <td className="item">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                        currencyDisplay: "symbol",
                      })
                        .formatToParts(token.value)
                        .map((p) =>
                          p.type != "literal" && p.type != "currency"
                            ? p.value
                            : ""
                        )
                        .join("")}
                    </td>
                  </tr>
                  </React.Fragment>
                );
              })
            ) : (
              <p>No token has been registered.</p>
            )}
          </TokenBody>
        </TokenTable>
      </TokenContainer>
    </Layout>
  );
}
