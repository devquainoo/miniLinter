let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];
const storyWords = story.split(' ');
// console.log(storyWords);

const betterWords = storyWords.filter(word => {return !unnecessaryWords.includes(word)});

// initialize overusedCount object
const overusedCount = {};
overusedWords.forEach(word => {
  overusedCount[word] = 0;
})
betterWords.forEach(word => {
  if (overusedWords.includes(word)){
    overusedCount[word] +=1;
    delete betterWords[betterWords.indexOf(word)];
  }
})

let sentenceCounter = 0;
betterWords.forEach(word=>{
  if (word[word.length-1] === '.' || word[word.length-1] === '!'){
    sentenceCounter += 1;
  }
})
console.log(betterWords.length);
console.log(sentenceCounter);
console.log(overusedCount);
console.log(betterWords.join(' '));

const greatestWord = words => {
  if(Array.isArray(words)){
    words = words.join(' ');
  }
  words = words.replace('.','').replace(',','').replace('!','').replace('"','');
  const wordsList = words.split(' ');
  // initialize all the unique words
  const wordsCount = {};
  wordsList.forEach(word => {
    wordsCount[word] = 0;
  });
  wordsList.forEach(word => {
    wordsCount[word] += 1;
  });
  let individualWords = Object.keys(wordsCount);
  let greatWordCount = wordsCount[individualWords[0]];
  let greatWord = individualWords[0];
  individualWords.forEach(word=>{
    if (wordsCount[word] > greatWordCount){
      greatWord = word;
      greatWordCount = wordsCount[word];
    }
  });
  return [greatWord, greatWordCount]

}
console.log(greatestWord(betterWords) )