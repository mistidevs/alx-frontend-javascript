export default function cleanSet(set, startString) {
 let myString = '';

 if (
  typeof set !== 'object'
  || typeof startString !== 'string'
  || startString.length === 0
 ) {
  return '';
 }
 
 for (const idx of set) {
  if (idx.startsWith(startString)) {
    const section = idx.substring(startString.length);
    if (myString === '') {
      myString = myString.concat(section);
    } else {
      myString = myString.concat('-');
      myString = myString.concat(section);
    }
  }
 }

 return myString;
}
