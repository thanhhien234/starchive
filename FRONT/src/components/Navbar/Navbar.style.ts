import styled from 'styled-components';

export const NavbarContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: var(--primary-color);
`;

export const ToggleIcon = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
`;

export const ProfileIcon = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    cursor: pointer;
`;