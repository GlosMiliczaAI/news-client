"use client";

import { MetadataBar } from "components/organisms/Article/MetadataBar";
import Typography from "components/atoms/Typography";
import styled from "styled-components";
import { FullArticleItem } from "types/FullArticleItem";
import { Slider } from "./Slider";
import { StatisticBar } from "../StatisticBar";

interface FullArticleProps {
  article: FullArticleItem;
  children: React.ReactNode;
}

export const FullArticleContent = ({ article, children }: FullArticleProps) => {
  const onDislikeClick = () => {
    console.log("onDislikeClick clicked");
  };

  return (
    <Wrapper data-testid={`full-article-${article.id}`}>
      <Container>
        <Typography variant="h1" marginBottom={12}>
          {article.title}
        </Typography>
        <InfoWrapper>
          <MetadataBar
            authorName={article.author.name}
            createdOn={article.createdOn}
          />
          <StatisticBar
            commentsPath="#comments"
            statistics={article.statistics}
            onDislikeClick={onDislikeClick}
          />
        </InfoWrapper>
        <LeadWrapper>
          <Typography color="#666">
            <strong>{article.lead}</strong>
          </Typography>
        </LeadWrapper>
        <Slider images={article.photos} />
        <BodyWrapper>
          <Typography innerHtml={article.body} />
        </BodyWrapper>
      </Container>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  min-height: 1px;
  padding: 0 12px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoWrapper = styled.div`
  margin: 12px 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const LeadWrapper = styled.div`
  margin: 40px 0;
  display: flex;
  flex-direction: column;
`;

const BodyWrapper = styled.div`
  margin: 64px 0;
  display: flex;
  flex-direction: column;
`;
