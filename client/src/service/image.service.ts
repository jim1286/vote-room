const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getImage = (path?: string) => {
  if (!path) {
    return;
  }

  const pathIndex = path.indexOf("public");

  if (pathIndex === -1) {
    return;
  }

  const result = path.slice(pathIndex);
  const image = `${BASE_URL}/${result}`;

  return image;
};
