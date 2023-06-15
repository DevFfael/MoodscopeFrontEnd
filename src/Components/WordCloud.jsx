import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { TagCloud } from 'react-tagcloud';

const WordCloud = ({ videoName }) => {
  const [words, setWords] = useState([]);
  // const array = [];

  const countWords = useCallback((sentence) => {
    const cleanedSentence = sentence.replace(/[^\w\s]|\d/g, '').toLowerCase();
    const words = cleanedSentence.split(' ');
    const wordCount = {};
    words.forEach((word) => {
      if (wordCount[word]) wordCount[word] += 1;
      else wordCount[word] = 1;
    });

    const array = [];
    Object.entries(wordCount).forEach(([value, count]) => {
      array.push({ value, count });
    });

    return array;
  }, []);

  const getWords = useCallback(async () => {
    const comments = await fetch(`http://localhost:5000/comments/${videoName}`);
    const json = await comments.json();
    const data = countWords(json.join(' '));
    setWords(data);
  }, [videoName, countWords]);

  useEffect(() => {
    getWords();
  }, [getWords]);

  return (
    <div>
      {words ? (
        <TagCloud minSize={10} maxSize={100} tags={words} />
      ) : (
        <h1>Teste</h1>
      )}
    </div>
  );
};

export default WordCloud;
