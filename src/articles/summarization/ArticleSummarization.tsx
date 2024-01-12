import { Typography } from "layout/components/typography/Typography";
import styled from "styled-components";
import { StatisticBar } from "../StatisticBar";
import { ArticleSummarizationItem } from "./ArticleSummarizationItem";
import { MetadataBar } from "articles/MetadataBar";

interface ArticleSummarizationProps {
  article: ArticleSummarizationItem;
}

export const ArticleSummarization = ({
  article,
}: ArticleSummarizationProps) => {
  const linkToArticle = `/publications?${article.id}`;

  return (
    <Wrapper data-test-id={`article-summarization-${article.id}`}>
      <Container>
        <Link href={linkToArticle}>
          <Image src={`/${article.photo.path}`} />
        </Link>
        <div>
          <Link href={linkToArticle}>
            <Title>{article.title}</Title>
          </Link>
          <MetadataBar
            authorName={article.author.name}
            createdOn={article.createdOn}
          />
          <StatisticBar
            statistics={{ views: 99, comments: 0, dislikes: 2, likes: 8 }}
          />
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Link = styled.a`
  text-decoration: none;
  background-color: transparent;

  touch-action: manipulation;
  transition: all 0.3s;
  cursor: pointer;
`;

const Title = styled(Typography)`
  text-align: left;
`;

const Image = styled.img`
  height: 180px;
  width: 100%;

  vertical-align: middle;
  border-style: none;

  object-fit: cover;
  object-position: 50% 50%;
`;
