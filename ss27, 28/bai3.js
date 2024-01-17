let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let i =1; i<=numbers.length; i++){
    if(numbers[i]%2!=0){
        numbers.splice(i,1);
    }
}
console.log(numbers);