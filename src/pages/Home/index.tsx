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
  const { data } = useData();
  console.log(data)
  
  const navigate = useNavigate();
  
  return (
    <Layout>
      <TitleRow>
      <WishLogo/>
        <Button
        type="button"
          color={"var(--purple)"}
          text={"Add Token"}
          onClick={() => navigate("/addtoken")}
        />
      </TitleRow>
      <TokenContainer>
       {data.length > 0 ? <TokenTable>
          <TokenHeader>
            <td className="editBox"></td> <td>Tokens</td> <td>Balance</td>
          </TokenHeader>
          <TokenBody>
            {
              
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
             
            }
          </TokenBody>
        </TokenTable> :  
              <p>No token has been registered.</p>}
      </TokenContainer>
    </Layout>
  );
}
