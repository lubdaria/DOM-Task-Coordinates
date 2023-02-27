//  Task. Find the coordinates of the square: upper left outer corner, lower right, outer corner, upper left, inner corner, lower right, inner corner

const elem = document.getElementById('field');
const coordinates = elem.getBoundingClientRect();
const coordLeftTop = [coordinates.left, coordinates.top];
const coordLeftTopInternal = [coordinates.left + elem.clientLeft, coordinates.top + elem.clientTop];
const coordRightButtom = [coordinates.right, coordinates.bottom];
const coordRightButtomInternal = [
  coordinates.left + elem.clientLeft + elem.clientWidth,
  coordinates.top + elem.clientTop + elem.clientHeight
];

console.log(coordLeftTop);
console.log(coordLeftTopInternal);
console.log(coordRightButtom);
console.log(coordRightButtomInternal);
