const mood = document.getElementById("change_mood");
const button = document.querySelectorAll(".check");

const check = (value) => {
    value = Number(value); // важно! value из input — это строка

    if (value <= 30) {
        alert("Just smile");
    } else if (value <= 75) {
        alert("Do something that makes you happy");
    } else {
        alert(":)");
    }
}

button.forEach(btn => {
    btn.addEventListener('click', ()=>{
        check(mood.value);
    })
})