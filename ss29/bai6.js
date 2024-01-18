let myArray = ["quang", "anh", "tuấn", "sơn", "dũng", "đức"];
function inHoa(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i].charAt(0).toUpperCase() + array[i].slice(1).toLowerCase());
    }
}
inHoa(myArray);