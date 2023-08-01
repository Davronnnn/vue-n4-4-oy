const elInput = document.querySelector(".form-input");
const elBtn = document.querySelector("#form-btn");
const elPersonTime = document.querySelector(".person-time");
const elBicycleTime = document.querySelector(".bicycle-time");
const elCarTime = document.querySelector(".car-time");
const elPlaneTime = document.querySelector(".plane-time");

const personSpeed = 3.6;
const bicycleSpeed = 20.1;
const carSpeed = 70;
const planeSpeed = 800;

function generateTime(masofa, speed) {
    const Time = masofa / speed;
    const Hours = Math.floor(Time);
    const FullMinutes = (Time - Hours) * 60;
    const Minutes = Math.floor(FullMinutes);
    const Seconds = Math.round((FullMinutes - Minutes) * 60);
    return `Yo'lovchi ${Hours} soat, ${Minutes} daqiqa, ${Seconds} soniyada yetib keladi`;
}

elBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const space = elInput.value;

    elPersonTime.textContent = generateTime(space, personSpeed);
    elBicycleTime.textContent = generateTime(space, bicycleSpeed);
    elCarTime.textContent = generateTime(space, carSpeed);
    elPlaneTime.textContent = generateTime(space, planeSpeed);
});

elBtn.addEventListener("mouseover", function(e) {
    console.log("test")
    document.body.style.backgroundColor = "gray"
})

elBtn.addEventListener("mouseout", function(e) {
    console.log("test")
    document.body.style.backgroundColor = "white"
})

window.addEventListener("scroll",function(){
    console.log(window.scrollY)
})

