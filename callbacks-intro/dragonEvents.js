// const dragonEvents = [
//   { type: 'attack', value: 12, target: 'player-dorkman'},
//   { type: 'yawn', value: 40},
//   { type: 'eat', target: 'horse'},
//   { type: 'attack', value:23, target: 'player-fluffykins'},
//   { type: 'attack', value: 12, target: 'player-dorkman'},
// ]
// const totalDamageOnDorkman = dragonEvents
// .filter((event) => {
//   return event.type === 'attack'
// })
// .filter((event) => {
//   return event.target === 'player-dorkman'
// })
// .map((event) =>  {
//   return event.value
// })
// .reduce(function(prev, value) {
//   return (prev || 0) + value
// })
// console.log('totalDamageOnDorkman\n', totalDamageOnDorkman);


//using arrow fn
const dragonEvents = [
  { type: 'attack', value: 12, target: 'player-dorkman'},
  { type: 'yawn', value: 40},
  { type: 'eat', target: 'horse'},
  { type: 'attack', value:23, target: 'player-fluffykins'},
  { type: 'attack', value: 12, target: 'player-dorkman'},
]
const totalDamageOnDorkman = dragonEvents
.filter(event => event.type === 'attack')
.filter(event => event.target === 'player-dorkman')
.map(event =>  event.value)
.reduce((prev, value) => (prev || 0) + value)
console.log('totalDamageOnDorkman\n', totalDamageOnDorkman);