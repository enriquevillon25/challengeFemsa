export const formatDate = (date: string) =>
  new Intl.DateTimeFormat('es-ES', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
    .format(new Date(date))
    .replace(/(?<=( de)[\s\S]+)\1/g, ',');

export const formatFirstMayusWord = (word: string) => {
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
};

export const formatGetMonth = () =>
  new Intl.DateTimeFormat('es-ES', {
    month: 'long',
  }).format(new Date());
