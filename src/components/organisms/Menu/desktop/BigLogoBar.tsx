"use cleint";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const BigLogoBar = () => {
  return (
    <Wrapper>
      <Container>
        <StyledLink href="/">
          <StyledImage
            src="/icons/logo.png"
            alt="logo"
            width={1500}
            height={150}
          />
        </StyledLink>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ theme }) => `
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    max-width: 1080px;
    height: 100px;

    margin: auto;
    padding: ${theme.spaces.lg} 0 ${theme.spaces.sm} 0;
  `}
`;

const Container = styled.div`
  ${({ theme }) => `
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    padding-bottom: ${theme.spaces.md};
  `}
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;

  text-decoration: none;
  background-color: transparent;

  touch-action: manipulation;
  cursor: pointer;
`;

const StyledImage = styled(Image)`
  vertical-align: middle;
  border-style: none;
  width: 90%;
`;
