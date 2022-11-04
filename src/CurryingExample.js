function sum(a, b) {
  return a + b;
}

// example 1
function currySum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(currySum(1)(2));

// example 2
const curry = (fn) => (a1) => (a2) => fn(a1, a2);

const cuttiedFn = curry(sum);
console.log(cuttiedFn(1)(2));

// example 3
const list = [
  {
    id: 1,
    name: "Steve",
    email: "steve@example.com",
  },
  {
    id: 2,
    name: "John",
    email: "john@example.com",
  },
  {
    id: 3,
    name: "Pamela",
    email: "pam@example.com",
  },
  {
    id: 4,
    name: "Liz",
    email: "liz@example.com",
  },
];
// remove/filter out John record from list
// 1
const noJhon = list.filter((item) => item.name != "John");
console.log(noJhon);

// 2
const remove = (list, name) => list.filter((item) => item.name != name);
console.log(remove(list, "John"));

// 3
const removeCurrying = (list) => (name) =>
  list.filter((item) => item.name != name);
console.log(removeCurrying(list)("John"));

// 4
const filter = (predicate) => (list) => list.filter(predicate);
const filterBy = (property) => (value) =>
  filter((item) => item[property] !== value);
const filterByName = filterBy("name");
const filterByJohnName = filterByName("John");
console.log(filterByJohnName(list));

// example 3 calculate distance between two points

// point 1 {x1,y1}
// point 2 {x2,y2}
// sqrt(pow((x2-x1),2) + pow((y2-y1),2));

const distance = (p1, p2) =>
  Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
console.log(distance({ x: 2, y: 2 }, { x: 11, y: 8 }));
// logs 10.816653826391969

const players = [
  {
    name: "Alice",
    color: "aliceblue",
    position: { x: 3, y: 5 },
  },
  {
    name: "Benji",
    color: "goldenrod",
    position: { x: -4, y: -4 },
  },
  {
    name: "Clarissa",
    color: "firebrick",
    position: { x: -2, y: 8 },
  },
];
const flag = { x: 0, y: 0 };
console.log(players.map((player) => distance(flag, player.position)));

const distanceFromStart = (start) => (distances) =>
  distances.map((player) => distance(start, player.position));
const distanceFromFlag = distanceFromStart(flag);
console.log(distanceFromFlag(players));
