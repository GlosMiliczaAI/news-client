import { Typography } from "layout/components/typography/Typography";
import styled from "styled-components";
import { Categories } from "./MainMenu";

interface NaviagationPanelItemProps {
  category: Categories;
}

export const NaviagationPanelItem = ({
  category,
}: NaviagationPanelItemProps) => {
  return (
    <Container data-test-id="naviagation-panel-item">
      <div>
        <Link2>
          <Image></Image>
        </Link2>
        <div>
          <Typography>{category.name}</Typography>
          <Typography>Author</Typography>
          <Typography>Date</Typography>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 25%;
  max-width: 25%;
`;

const Link2 = styled.a`
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
  touch-action: manipulation;
  transition: all 0.3s;
  width: 80px;
`;

const Image = styled.img`
  vertical-align: middle;
  border-style: none;
  object-fit: cover;
  object-position: 50% 50%;
  height: 120px;
  width: 160px;
`;