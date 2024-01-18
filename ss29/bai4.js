let chuoi = prompt("nhập chuỗi ký tự");
let kytu = prompt("nhập ký tự");
function count(texts, text){
    let diem=0;
    for(let i=0; i<texts.length; i++){
        if(texts[i]===text){
            diem++;
        }
    }
    console.log("số lần xuất hiện = "+diem);
}
count(chuoi, kytu);