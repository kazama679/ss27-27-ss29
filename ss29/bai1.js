function check(num){
    if(num%2==0){
        return num + " là số chẵn";
    }else{
        return num + " là số lẻ";
    }
}
let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * 20);  
let num3 = Math.floor(Math.random() * 30);
console.log(check(num1));
console.log(check(num2));
console.log(check(num3));