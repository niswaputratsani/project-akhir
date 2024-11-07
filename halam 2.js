let leftLightOnTime = 0;
let leftLightOffTime = 0;
let leftInterval;
let leftTimeout;


let rightLightOnTime = 0;
let rightLightOffTime = 0;
let rightInterval;


function updateTimeDisplay(id, time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    document.getElementById(id).textContent = `Waktu: ${minutes}:${seconds}`;
}

function toggleLeftLight() {
    const leftLight = document.getElementById("leftLight");
    const leftButton = document.getElementById("leftButton");
    const leftStatus = document.getElementById("leftStatus");
    const leftContainer = document.getElementById("leftLightContainer");
    const leftOnTimeDisplay = document.getElementById("leftOnTime");
    const leftOffTimeDisplay = document.getElementById("leftOffTime");

    if (leftLight.src.includes("https://www.w3schools.com/js/pic_bulboff.gif")) {
        leftLight.src = "https://www.w3schools.com/js/pic_bulbon.gif";
        leftStatus.textContent = "Lampu Nyala";
        leftButton.textContent = "Matikan";
        leftContainer.style.backgroundImage = "url('https://bahanpengawet.com/wp-content/uploads/2018/05/warehouse-pic.jpg')";


        leftOnTimeDisplay.style.display = "inline";
        leftOffTimeDisplay.style.display = "none";


        clearInterval(leftInterval);
        clearTimeout(leftTimeout);
        leftInterval = setInterval(() => {
            leftLightOnTime++;
            updateTimeDisplay("leftOnTime", leftLightOnTime);
        }, 1000);


        leftTimeout = setTimeout(() => {
            toggleLeftLight();
        }, 3000);
    } else {
        leftLight.src = "https://www.w3schools.com/js/pic_bulboff.gif";
        leftStatus.textContent = "Lampu Mati";
        leftButton.textContent = "Nyalakan";
        leftContainer.style.backgroundImage = "url('https://bahanpengawet.com/wp-content/uploads/2018/05/warehouse-pic.jpg')";


        leftOnTimeDisplay.style.display = "none";
        leftOffTimeDisplay.style.display = "inline";


        clearInterval(leftInterval);
        leftInterval = setInterval(() => {
            leftLightOffTime++;
            updateTimeDisplay("leftOffTime", leftLightOffTime);
        }, 1000);
    }

    leftLight.classList.add("shake");
    setTimeout(() => leftLight.classList.remove("shake"), 300);
}


function toggleRightLight(action) {
    const rightLight = document.getElementById("rightLight");
    const rightStatus = document.getElementById("rightStatus");
    const rightContainer = document.getElementById("rightLightContainer");

    const rightOnTimeDisplay = document.getElementById("rightOnTime");
    const rightOffTimeDisplay = document.getElementById("rightOffTime");

    if (action === "on") {
        rightLight.src = "https://www.w3schools.com/js/pic_bulbon.gif";
        rightStatus.textContent = "Lampu Nyala";
        rightContainer.style.backgroundImage = "url('https://cdn.idntimes.com/content-images/community/2023/09/home-stratosphere-warm-contemporaryresize50pc-83b2b44a70ea0d6e31b0791e40a50a00-5543100822f39a8ebefa5a2b1e18ad1a.jpg')";


        rightOnTimeDisplay.style.display = "inline";
        rightOffTimeDisplay.style.display = "none";


        clearInterval(rightInterval);
        rightInterval = setInterval(() => {
            rightLightOnTime++;
            updateTimeDisplay("rightOnTime", rightLightOnTime);
        }, 1000);
    } else {
        rightLight.src = "https://www.w3schools.com/js/pic_bulboff.gif";
        rightStatus.textContent = "Lampu Mati";
        rightContainer.style.backgroundImage = "url('https://cdn.idntimes.com/content-images/community/2023/09/home-stratosphere-warm-contemporaryresize50pc-83b2b44a70ea0d6e31b0791e40a50a00-5543100822f39a8ebefa5a2b1e18ad1a.jpg')";


        rightOnTimeDisplay.style.display = "none";
        rightOffTimeDisplay.style.display = "inline";


        clearInterval(rightInterval);
        rightInterval = setInterval(() => {
            rightLightOffTime++;
            updateTimeDisplay("rightOffTime", rightLightOffTime);
        }, 1000);
    }

    rightLight.classList.add("shake");
    setTimeout(() => rightLight.classList.remove("shake"), 300);
}


document.getElementById("leftLight").onclick = null;
document.getElementById("rightLight").onclick = null;


// Array hewan
let hewan = ["Kucing", "anjing","burung","ikan","Kelinci"];
console.log("Array:",hewan);

console.log("Hewan Pertama:", hewan[0]);
console.log("Hewan Terakhir:", hewan[hewan.length - 1]);



// Menghapus elemen dari array

let angka=['10','20','30','40',]
console.log("Array:",angka );
// Angka
angka.pop('10');
console.log("Array setelah penghapusan:", angka);

let warna=['kuning','merah','kuning','hijau']
console.log("Array;",warna);

// Menambahkan elemen ke array
warna.push('ungu');
console.log("Array setelah penambahan:", warna);
for (let i = 1; i <=10; i++) {
    console.log("Angka:", i);
}
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Menampilkan total
const total = angka.reduce((curr) =>+ curr,55);
console.log("jumblah", total);

// Menampilkan angka genap
console.log("Angka Genap:");
number.forEach(number => {
    if (number % 2 === 0) {
        console.log(number);
    }
});

// Menampilkan angka ganjil
console.log("Angka Ganjil:");
number.forEach(number => {
    if (number % 2 !== 0) {
        console.log(number);
    }
});

function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById("inputTemperature").value);
    const conversionType = document.getElementById("conversionType").value;

    // Input validation
    if (isNaN(inputTemp)) {
        document.getElementById("resultTemperature").textContent = "Please enter a valid number for the temperature.";
        return;
    }

    let result;

    switch (conversionType) {
        case "CtoF":
            result = `${inputTemp}°C = ${(inputTemp * 9 / 5 + 32).toFixed(2)}°F`;
            break;
        case "CtoK":
            result = `${inputTemp}°C = ${(inputTemp + 273.15).toFixed(2)}K`;
            break;
        case "FtoC":
            result = `${inputTemp}°F = ${((inputTemp - 32) * 5 / 9).toFixed(2)}°C`;
            break;
        case "FtoK":
            result = `${inputTemp}°F = ${((inputTemp - 32) * 5 / 9 + 273.15).toFixed(2)}K`;
            break;
        case "KtoC":
            result = `${inputTemp}K = ${(inputTemp - 273.15).toFixed(2)}°C`;
            break;
        case "KtoF":
            result = `${inputTemp}K = ${((inputTemp - 273.15) * 9 / 5 + 32).toFixed(2)}°F`;
            break;
        default:
            result = "Invalid conversion type.";
    }

    document.getElementById("resultTemperature").textContent = result;
}