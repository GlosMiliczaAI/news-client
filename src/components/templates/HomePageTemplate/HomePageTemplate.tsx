import { MainContainerTemplate } from "components/templates/MainContainerTemplate/MainContainerTemplate";
import { NewsBar } from "../../organisms/NewsBar/NewsBar";

interface HomePageTemplateProps {
  children: React.ReactNode;
}

export const HomePageTemplate = ({ children }: HomePageTemplateProps) => {
  return (
    <div data-testid="home-page">
      <NewsBar />
      <MainContainerTemplate>{children}</MainContainerTemplate>
    </div>
  );
};