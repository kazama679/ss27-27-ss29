let arr = ['táo', 'chuối', 'dứa'];
let chuoi =prompt("Nhập chuỗi bất kỳ");
function test(array, text){
    let check=0;
    for(let i=0; i<array.length; i++){
        if(arr[i]===text){
            console.log(array[i]+" có thứ tự thứ "+i+" trong mảng");
            check++;
        }
    }
    if(check==0){
        console.log("ko có trong mảng");
    }
}
test(arr, chuoi);