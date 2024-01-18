function hamdiem(){
    let text = "Xuân Quang";
    let diem=0;
    for(let i=0; i<text.length; i++){
        if(text[i]!=' '){
            diem++;
        }
    }
    console.log(diem);
}
hamdiem();