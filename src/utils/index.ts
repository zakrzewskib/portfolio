export const removeFirstTwoWords = (str: string) => {
  return str.split(' ').slice(2).join(' ');
};
