const getImage = (path: string, name: string): string => {
  return new URL(`../assets/${path}/${name}`, import.meta.url).href;
};
const shuffleArray = (array: string[]) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export { getImage, shuffleArray };
