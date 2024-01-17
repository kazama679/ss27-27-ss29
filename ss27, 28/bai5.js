let numbers = [1, 2, 3, 4, 5, 1, 2, 3, 4];
let check = 0;
for(let i=0; i<=numbers.length; i++){
    for(let j=i+1; j<=numbers.length; j++){
        if(numbers[i]==numbers[j]){
            check++;
        }
    } 
    if(check==0){
        console.log(numbers[i]);
        break;
    }  
    check=0;
}