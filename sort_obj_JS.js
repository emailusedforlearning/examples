let ordered = obj.sort((a, b) => a.prop > b.prop ? 1 : -1);
console.table(ordered);
/* 
this should order the object from lowest to highest value of selected
property of the object
*/
