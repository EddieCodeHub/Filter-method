  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];

const oldEnogh = people.filter(person => person.age >= 21);
console.log(oldEnough); // [{ name: 'Michael', age: 23 }]

const paul = people.filter(person => person.name === 'Paul')[0]; // [0] is used to get the object from the array
console.log(paul); // [ name: 'Paul', age: 18 ] 


// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];


const has5yearsExp = skill => skill.yrsEperience >= 5;
const hasStrongSkills = student => {
  let strongSkills = student.skills.filter(has5yearsExp)
  return strongSkills.length > 0;
}
const candidates = students.filter(hasStrongSkills)

console.log(candidates); // mark and jason logged as they have strong skills in html and css respectively

// use map method to only return candidates names
const names = candidates.map(candidate => candidate.name);
console.log(names); // [ 'Mark', 'Jason' ]


// challange
let students2 = [
  {
      name: 'John',
      subjects: ['maths', 'english', 'cad'],
      teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
      results: {maths: 90, english: 75, cad: 87},
  },
  {
      name: 'Emily',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 80, art: 95},
  },
  {
      name: 'Adam',
      subjects: ['science', 'maths', 'art'],
      teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
      results: {science: 84, maths: 97, art: 95},
  },
  {
      name: 'Fran',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 67, english: 87, art: 95},
  }
];

// filter students with math grades
const topMaths = students.filter(student => student.results.maths)
console.log(topMaths) // logs adam and johns fulll objects as they have maths grades

// filter names from objects
const topMathsNames = topMaths.map(student => student.name)
console.log(topMathsNames) // logs ['John', 'Adam'] removed from objects and only names are logged