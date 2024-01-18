let arr = ["Xuân Quang", "Minh Anh"];
function hamdiem(array){
    let max=array[0];
    for(let i=1; i<array.length; i++){
        if(array[i].length>max.length){
            max=array[i];
        }
    }
    return max;
}
let max=hamdiem(arr);
console.log("Phần tử có độ dài lớn nhất trong mảng là: "+max);