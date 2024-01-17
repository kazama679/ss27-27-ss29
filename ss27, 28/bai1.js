let numbers = [1, 2, 3, 4, -1, -2, -3, -4];
let max = numbers[0];
for(let i=0; i<numbers.length; i++){
    if(max<numbers[i]){
        max = numbers[i];
    }
}
console.log("phần tử lớn nhất là: ", max);

let min = numbers[0];
for(let i=0; i<numbers.length; i++){
    if(min>numbers[i]){
        min = numbers[i];
    }
}
console.log("phần tử nhỏ nhất là: ", min);