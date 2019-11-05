// sort any array using a for loop
// after sorting the result will be  [9,8,7,6,5,4,3,2,1,0] 

const lst = [5,0,9,1,7,4,2,6,3,8];

console.log("Before sort:")
console.log(lst.toString());
// result 5,0,9,1,7,4,2,6,3,8

let temp;

for (let i = 0; i < lst.length; i ++) {    
    for (let j = 0; j<lst.length-1; j++) {
        if (lst[j] < lst[j+1]) {
            temp = lst[j+1];
            lst[j+1] = lst[j];
            lst[j] = temp;
        }
    }
}
console.log("After sort:")
console.log(lst.toString());
// result- 9,8,7,6,5,4,3,2,1,0
