let a =+prompt("nhập a");
let b =+prompt("nhập b");
let numbers =[];
if(a>b){
    for(let i=b+1; i<a; i++){
        numbers.push(i);
    }
} else{
    for(let i=a+1; i<b; i++){
        numbers.push(i);
    }
}
console.log(numbers);