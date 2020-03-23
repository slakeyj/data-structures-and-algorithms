const repeatedWord = string => {
  const wordMap = new Map();
  const words = string.split(' ');
  let matchingWord;

  if (string === '') {
    return '';
  }

  if (words.length === 1) {
    return words[0];
  }

  for (let i = 0; i < words.length; i++) {
    if (wordMap.get(words[i])) {
      // console.log('in here', words[i]);
      matchingWord = words[i];
      break;
    } else {
      wordMap.set(words[i].toLowerCase(), i + 1);
    }
  }

  return matchingWord;
}

module.exports = repeatedWord