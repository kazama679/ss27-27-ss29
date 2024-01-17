let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let chan = [];
let le = [];
for(let i =1; i<=numbers.length; i++){
    if(numbers[i]%2!=0){
        chan.push(i);
    } else{
        le.push(i);
    }
}
console.log(chan);
console.log(le);