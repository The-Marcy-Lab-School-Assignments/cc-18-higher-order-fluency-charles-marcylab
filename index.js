//write your code here
let animals = ['dodobird', 'cheetah', 'dolphin', 'bear', 'dog', 'cat'];
//1
const shortWords = (arr) => {
  return arr.filter(el => el.length < 5);
};


//2
const noVowel = (arr) => {
  return arr.map(el=>el.replace( /[aeiou]/gi, 'x'));
};


//3
const longToShort = (arr) => {
    return arr.sort((a,b) => (b.length - a.length));
};

//4
const onlyVowelA = (arr) => {
    return arr.filter(el => el.includes('a'));
};


//5
const pluralize = (arr) => {
    return arr.map(animal => `${animal}s`);
};


//6
const longerThanSeven = (arr) => {
    return arr.some(word => word.length > 7);
};


//7
const oddLength = (arr) => {
    return arr.filter(el => (el.length % 2) === 1);//2 !== 0
};

//8
const allFour = (arr) => {
    return arr.every((animal) => animal.length === 4);
};


const numbers = [22, 15, 1114, 416, 37, 4]
//9
const sum = (arr) => {
    return arr.reduce((acc, curVal) => acc += curVal);
};

//10
const longWords = (arr) => {
  return arr.filter(el => el.length > 3);
};

//11
const uppercase = (arr) => {
  return arr.map(words => words[0].toUpperCase() + words.substr(1));
};

//12
const concatStrings = (arr) => {
    return arr.reduce((prev, current) => `${prev} ${current}`);
};

console.log(concatStrings(animals));