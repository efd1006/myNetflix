import * as React from "react";
import styled from "styled-components";
import AsideNavigation from "../../common/components/layout/asideNav/AsideNavigation";
import NavBarContainer from "../../common/components/layout/navBar/NavBarContainer";
import { Device } from "../../common/styles/constans/Device";
import VideoDescription from "../components/singleVideoComponents/VideoDescription";
import Quiz from "../components/singleVideoComponents/Quiz";
import BannerContainer from "../../common/components/layout/banner/BannerContainer";
import VideoPlayerComponent from "../components/singleVideoComponents/VideoPlayerComponent";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 52px;
  @media ${Device.LAPTOP} {
    padding-top: 112px;
  }
`;
const Header = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  position: fixed;
  top: 0;
`;
const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media ${Device.LAPTOP} {
    flex-direction: row;
  }
`;
const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media ${Device.LAPTOP} {
    width: calc(100vw - 443px);
  }
  @media ${Device.LAPTOP_L} {
    margin-top: 32px;
    flex-direction: row;
    justify-content: right;
  }
`;

const SingleMovieView: React.FC = () => {
  return (
    <Wrapper>
      <Header>
        <BannerContainer />
        <NavBarContainer />
      </Header>
      <MainWrapper>
        <VideoPlayerComponent />
        <AsideNavigation />
      </MainWrapper>
      <DescriptionWrapper>
        <VideoDescription />
        <Quiz />
      </DescriptionWrapper>
    </Wrapper>
  );
};
export default SingleMovieView;
