import { useState } from "react";
import { useCategoriesApi } from "common/api/useCategoriesApi";
import { GetTabsResponse } from "common/api/responses/GetTabsResponse";
import { TabItem } from "types/TabItem";
import { buildCategoryPath, buildTabPath } from "common/builders/buildPath";

export const useCategories = () => {
  const { getTabsDetails } = useCategoriesApi();
  const [tabs, setTabs] = useState<TabItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadTabs = () => {
    getTabsDetails().then((data) => {
      setTabs(mapData(data));
      setIsLoading(false);
    });
  };

  return {
    isLoading,
    tabs,
    loadTabs,
  };
};

const mapData = (data: GetTabsResponse[]): TabItem[] => {
  return data.map((tab: GetTabsResponse) => {
    return {
      id: tab.tabId,
      name: tab.name,
      categories: tab.categories.map((category) => {
        return {
          id: category.id,
          name: category.name,
          path: buildCategoryPath(category.id),
          tabId: tab.tabId,
          tabName: tab.name,
          tabPath: buildTabPath(tab.tabId),
        };
      }),
    };
  });
};
