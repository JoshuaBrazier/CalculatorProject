const buttonList = document.getElementsByTagName('button');
let valueOne = '';
let valueTwo = '';
let operation = '';
let inputValue = document.getElementById('text-field');

for (button of buttonList) {
    const buttonText = button.textContent;
    console.log(button);
    setTimeout(() => {
        document.getElementById('introductionSound').play();
    }, 1000);
    if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].indexOf(buttonText) > -1) {
        button.addEventListener('click', function () {
            document.getElementById('testSound').play();
            inputValue.value = inputValue.value + buttonText;
            })
        }
    else if (buttonText === '*') {
        button.addEventListener('click', function () {
            document.getElementById('testSound').play();
            valueOne = inputValue.value;
            console.log(valueOne);
            inputValue.value = '';
            operation = 'multiplication';
            })
        }
    else if (buttonText === '/') {
        button.addEventListener('click', function () {
            document.getElementById('testSound').play();
            valueOne = inputValue.value;
            console.log(valueOne);
            inputValue.value = '';
            operation = 'division';
            })
        }
    else if (buttonText === '+') {
        button.addEventListener('click', function () {
            document.getElementById('testSound').play();
            valueOne = inputValue.value;
            console.log(valueOne);
            inputValue.value = '';
            operation = 'addition';
            })
        }
    else if (buttonText === '-') {
        button.addEventListener('click', function () {
            document.getElementById('testSound').play();
            valueOne = inputValue.value;
            console.log(valueOne);
            inputValue.value = '';
            operation = 'subtraction';
            })
        }
    else if (buttonText === '.') {
        button.addEventListener('click', function () {
            document.getElementById('testSound').play();
            if (inputValue.value.indexOf('.') === -1) {
                inputValue.value = inputValue.value + '.';
            }
            })
        }
    else if (buttonText === '=') {
        button.addEventListener('click', function () {
            document.getElementById('testSound').play();
            valueTwo = inputValue.value;
            if (operation === 'multiplication') {
                console.log(Number(valueOne), Number(valueTwo));
                inputValue.value = Number(valueOne) * Number(valueTwo);
                }
            else if (operation === 'division') {
                console.log(Number(valueOne), Number(valueTwo));
                inputValue.value = Number(valueOne) / Number(valueTwo);
                }
            else if (operation === 'addition') {
                console.log(Number(valueOne), Number(valueTwo));
                inputValue.value = Number(valueOne) + Number(valueTwo);
                }
            else if (operation === 'subtraction') {
                console.log(Number(valueOne), Number(valueTwo));
                inputValue.value = Number(valueOne) - Number(valueTwo);
                }
            valueOne = inputValue.value;
            valueTwo = '';
            operation = '';
            })
        }
    else if (buttonText === 'Clear') {
        button.addEventListener('click', function () {
            document.getElementById('testSound').play();
            inputValue.value = '';
        })
    }
}

function backgroundChanger(e) {
    const numberOne = Math.round(Math.random() * 255);
    const numberTwo = Math.round(Math.random() * 255);
    const numberThree = Math.round(Math.random() * 255);
    document.body.style.backgroundColor = `rgb(${numberOne}, ${numberTwo}, ${numberThree})`;
}