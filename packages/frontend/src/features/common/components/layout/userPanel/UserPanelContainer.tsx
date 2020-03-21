import * as React from 'react';
import styled from 'styled-components';

import UserSection from "./UserSection"
import ActionsSection from "./ActionsSection"

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.02);
`

export interface UserPanelContainerProps {

}

const UserPanelContainer: React.SFC<UserPanelContainerProps> = () => {
    return (
        <Wrapper>
            <UserSection />
            <ActionsSection />
        </Wrapper>);
}

export default UserPanelContainer;