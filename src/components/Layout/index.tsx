import React from "react";
import logo from "../../assets/logo.svg";
import { Background, Logo } from "./styles";

type Props = {
  children: React.ReactNode,
};
function Layout({ children}:Props) {
  return (
    <Background>
      <Logo src={logo} />
      {children}
    </Background>
  );
}

export default Layout;
