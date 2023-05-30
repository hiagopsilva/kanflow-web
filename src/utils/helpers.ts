/* eslint-disable no-plusplus */
export const getInitialWords = (word: string) => {
  const words = word.split(' ');
  let initials = '';

  if (words.length === 1) {
    initials = words[0].substring(0, 2);
  } else {
    for (let i = 0; i < words.length; i++) {
      const newWord = words[i];
      initials += newWord.charAt(0);
    }
  }

  return initials;
};
