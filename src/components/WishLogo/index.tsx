import React from 'react';
import ShootingStar from "../../assets/shooting-star.svg";
import { WishBar } from './styles';

 function WishLogo() {
  return ( 
  <WishBar>
    <img src={ShootingStar}></img>
    <p>Wish Wallet</p>
  </WishBar>);
}

export default WishLogo;