import { useArticlesApi } from "common/api/useArticlesApi";
import { useState } from "react";
import { GetArticleResponse } from "common/api/responses/GetArticleResponse";
import { FullArticleItem } from "../types/FullArticleItem";
import { formatDateToString } from "common/builders/buildDate";
import {
  buildAuthorPath,
  buildCategoryPath,
  buildArticlePath,
  buildPhotoPath,
  buildTabPath,
} from "common/builders/buildPath";

export const useArticle = () => {
  const { getArticleDetails } = useArticlesApi();
  const [article, setArticle] = useState<FullArticleItem>(
    {} as FullArticleItem,
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadArticle = (articleId: number) => {
    getArticleDetails(articleId).then((data) => {
      setArticle(mapData(data));
      setIsLoading(false);
    });
  };

  return {
    article,
    isLoading,
    loadArticle,
  };
};

const mapData = (data: GetArticleResponse): FullArticleItem => {
  return {
    author: {
      id: data.author.id,
      name: data.author.name,
      path: buildAuthorPath(data.author.id),
    },
    body: data.body,
    category: {
      id: data.category.id,
      name: data.category.name,
      path: buildCategoryPath(data.category.id),
      tabId: data.category.tabId,
      tabName: data.category.tabName,
      tabPath: buildTabPath(data.category.tabId),
    },
    createdOn: formatDateToString(data.createdOn),
    id: data.id,
    isArchived: data.isArchived,
    isPublished: data.isPublished,
    lead: data.lead,
    path: buildArticlePath(data.id),
    photos: data.photos.map((photo) => {
      return {
        description: photo.description,
        path: buildPhotoPath(photo.path),
      };
    }),
    statistics: {
      comments: data.comments?.length || 0,
      dislikes: 0,
      likes: 0,
      views: data.views || 0,
    },
    title: data.title,
  };
};
