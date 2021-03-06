const addButton = document.getElementById("addValue");
const input1 = document.getElementById("numberOne");
const input2 = document.getElementById("numberTwo");
const resultView = document.getElementById("result");


const parseInputs = (...input) =>{
    return input.map(str => parseInt(str));
}

const inputAreValid = (...input) => {
    return input.every(num => typeof num === "number" && !isNaN(num));
}

addButton.addEventListener("click", () =>{
    const inputs = [input1.value,input2.value];
    const parsedInputs = parseInputs(...inputs);
    if(inputAreValid(...parsedInputs)){
        const [numA,numB] = parsedInputs;
        resultView.innerHTML = numA+numB;
    }else{
        resultView.innerHTML = "";
    }
})






