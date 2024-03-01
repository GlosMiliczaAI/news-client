"use client";

import { useContext, useEffect, useState } from "react";

import { OrganizationContext } from "./OrganizationContext";
import { CategoryItem } from "types/CategoryItem";
import { buildCategoryPath, buildTabPath } from "core/builders/buildPath";

export const useOrganizationInfo = () => {
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const { tabs, firstSite } = useContext(OrganizationContext);
  const { mainTopic, releaseDate, image } = firstSite;

  useEffect(() => {
    setCategories(
      tabs.flatMap((tab) => {
        return tab.categories.map((category) => {
          return {
            id: category.id,
            name: category.name,
            path: buildCategoryPath(category.id),
            tabSlug: category.tabSlug,
            tabName: category.tabName,
            tabPath: buildTabPath(category.tabSlug),
          };
        });
      })
    );
  }, [tabs]);

  return {
    categories,
    mainTopic,
    newReleaseDate: releaseDate,
    newCoverImage: image,
    tabs,
  };
};
