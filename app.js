
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const calculate_process = () => {

    let mass = parseFloat(document.getElementById("mass").value);
    if (isNaN(mass)) {
        mass = 0.1;
        document.getElementById("mass").value = mass;
    }
    let c = parseInt(document.querySelector("#speed-light").value);
    console.log(c);
    if (isNaN(c)) {
        c = 299792458;
        document.querySelector("#speed-light").value = c
    }
    let e = mass * Math.pow(c, 2);
    document.getElementById("result").textContent = e.toPrecision(14);
}

const calculateEnergy = () => {
    document.querySelector("#show-result").style.display = "none";
    document.querySelector("#loading").style.display = "block";

    sleep(1000).then(() => {
        document.querySelector("#show-result").style.display = "block";
        calculate_process();
        document.querySelector("#loading").style.display = "none";
    })



}

