import { useState, useEffect } from "react";
import { Typography } from "layout/components/typography/Typography";
import styled from "styled-components";

const themes = [
  "Budżet powiatu przeszedł tylko jednym głosem",
  "Udany Jarmark!",
  "Sytuacja na rzece Barycz",
];

export const PopularThemesBar = () => {
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentThemeIndex((prevIndex) => (prevIndex + 1) % themes.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container data-test-id="popular-themes-bar">
      <Typography color="#15a752" isUppercase>
        Popularne tematy:
      </Typography>
      <Slider>
        {themes.map((theme, index) => (
          <StyledTypography
            key={index}
            color="red"
            isVisible={index === currentThemeIndex}
          >
            {theme}
          </StyledTypography>
        ))}
      </Slider>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  margin-right: auto;
  margin-left: auto;
  padding: 8px 16px;
  width: 100%;
  max-width: 1080px;
  gap: 16px;
  text-wrap: nowrap;
`;

const Slider = styled.div`
  overflow: hidden;
  position: relative;
  width: -webkit-fill-available;
`;

interface StyledTypographyProps {
  isVisible: boolean;
}

const StyledTypography = styled(Typography)<StyledTypographyProps>`
  position: absolute;
  top: 0;
  left: 0;

  transition:
    transform 0.5s ease-in-out,
    opacity 0.5s ease-in-out;
  transform: translateY(${(props) => (props.isVisible ? "0" : "-100%")});
  opacity: ${(props) => (props.isVisible ? "1" : "0")};

  &:nth-child(2) {
    position: unset;
  }
`;
