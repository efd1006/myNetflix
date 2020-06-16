import * as React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { Device } from "../../../styles/constans/Device";
import { Colors } from "../../../styles/constans/Colors";
import { fontWeight } from "../../../styles/constans/fontWeight";
import { FontSize } from "../../../styles/constans/FontSize";
import VideoSearch from "./VideoSearch";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 55px;
  background-color: ${Colors.WHITE};
  @media ${Device.LAPTOP} {
    position: fixed;
    top: 0;
    left: 0;
    width: calc(100% - 446px);
  }
  @media ${Device.LAPTOP} {
    z-index: 4;
    height: 112px;
  }
`;
const Logo = styled.img`
  width: 58px;
  margin-left: 10px;
  cursor: pointer;
  @media ${Device.TABLET} {
    width: 76px;
  }
  @media ${Device.LAPTOP} {
    width: 110px;
  }
`;
const Title = styled.h3`
  display: none;
  font-size: ${FontSize.MEDIUM};
  font-weight: ${fontWeight.SEMI_BOLD};
  margin-left: 13px;
  @media ${Device.TABLET} {
    display: block;
  }
  @media ${Device.LAPTOP} {
    font-size: ${FontSize.XXBIG};
  }
`;
const LogoTitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const title = "Docker od podstaw";

const Banner: React.SFC = () => {
  return (
    <Wrapper>
      <LogoTitleContainer>
        <Logo src="/img/logo.svg" />
        <Title>{title}</Title>
      </LogoTitleContainer>
      <VideoSearch />
    </Wrapper>
  );
};

export default Banner;
