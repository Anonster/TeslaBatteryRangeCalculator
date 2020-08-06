import React from "react";
import logoUrl from '../../assets/logo.svg';
import { HeaderDivStyled , HeaderImgStyled } from "./HeaderStyles";

const Header = () => (
    <HeaderDivStyled>
        <HeaderImgStyled src={logoUrl} alt="Tesla" />
    </HeaderDivStyled>
)
export default Header;