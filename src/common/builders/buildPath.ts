export const buildArticlePath = (articleId: number) => {
  return `/article/${articleId}`;
};

export const buildAuthorPath = (articleId: number) => {
  return `/author/${articleId}`;
};

export const buildCategoryPath = (categoryId: number) => {
  return `/category/${categoryId}`;
};

export const buildPhotoPath = (photoPath: string) => {
  return `${photoPath}`;
};
