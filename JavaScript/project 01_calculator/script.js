const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있음.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있음.
const operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있음.
const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있음.

function calculate(n1, operator, n2) {
    let result = 0;
    if (operator === '+') {
        result = Number(n1) + Number(n2); // '+'버튼을 눌렀을 때
    }
    else if (operator === '-') {
        result = Number(n1) - Number(n2); // '-'버튼을 눌렀을 때
    }
    else if (operator === '*') {
        result = Number(n1) * Number(n2); // '*'버튼을 눌렀을 때
    }
    if (operator === '/') {
        result = Number(n1) / Number(n2); // '/'버튼을 눌렀을 때
    }
    return String(result);
}

let firstNum = '';
let operatorForAdvanced = '';
let previousKey = '';
let previousNum = '';

buttons.addEventListener('click', function (event) {
    const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있음.
    const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옴.
    const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옴.

    if (target.matches('button')) {
        if (action === 'number') { //클릭된 HTML 엘리먼트의 클래스 네임이 'number'라면
            if (display.textContent === '0' && operatorForAdvanced === '') {
                display.textContent = buttonContent;
                firstNum = display.textContent // 첫번째 숫자를 변수에 할당
            } // 기존 계산기 숫자가 0이고, 오퍼레이터 버튼이 안눌린 상태의 분기
            else if (display.textContent !== '0' && operatorForAdvanced === '') {
                display.textContent = display.textContent + buttonContent;
                // textContent는 문자열이기 때문에 기존 계산기에서 보여지는 숫자에 +연산자로 구현 
                firstNum = display.textContent;
            } // 기존 계산기 숫자가 0이 아니고, 오퍼레이터 버튼이 안눌린 상태의 분기
            // ex) 15를 누르기 위해 1을 누른 상태의 분기(두자리 연속 누르기 위한 코드)
            else if (display.textContent !== '0' && operatorForAdvanced !== '') {
                if (previousKey === operatorForAdvanced) {
                    display.textContent = buttonContent;
                    previousKey = display.textContent;
                    // 직전키를 변수에 할당 (직전키가 오퍼레이터냐 숫자냐에 따라 계산기의 다양한 기능을 구현하기 위함)
                    previousNum = display.textContent; // 직전 숫자를 변수에 할당
                } // 기존 계산기 숫자가 0이 아니고, 오퍼레이터 버튼이 눌린 상태의 분기
                // ex) 15+7을 하기 위해 15와 +를 누른 상태(두번째 숫자를 누르기 위한 코드)
                else if (previousKey !== operatorForAdvanced) {
                    display.textContent = display.textContent + buttonContent;
                    previousNum = display.textContent;
                } // ex) 15+17을 하기 위해 15와 +, 1을 누른 상태(17을 완성하기 위한 코드)
            }
        }
        if (action === 'operator') { // //클릭된 HTML 엘리먼트의 클래스 네임이 'operator'일때 분기
            operatorForAdvanced = buttonContent; // 오퍼레이터 누를 때 누른 텍스트 정보 할당
            previousKey = operatorForAdvanced; // 직전키에 오퍼레이터 텍스트 정보 할당
        }
        if (action === 'clear') { // AC(초기화) 버튼을 누를 때 분기
            display.textContent = '0';
            firstNum = '';
            previousNum = '';
            operatorForAdvanced = '';
            previousKey = '';
        }
        if (action === 'calculate') { // Enter(계산) 버튼을 누를 때
            if (firstNum !== '' && operatorForAdvanced === '') {
                display.textContent = firstNum;
            }
            else if (firstNum !== '' && previousNum === '') {
                display.textContent = calculate(display.textContent, operatorForAdvanced, display.textContent)
            } // 기존에 작성했던 calculate 함수를 이용하여 계산 상황에 따른 전달인자와 함께 호출
            else if (previousKey === display.textContent) {
                display.textContent = calculate(firstNum, operatorForAdvanced, previousNum)
                //   if(operatorForAdvanced === '+') {
                //   display.textContent = String(Number(firstNum) + Number(previousNum));
                // } else if(operatorForAdvanced === '-') {
                //   display.textContent = String(Number(firstNum) - Number(previousNum));
                // } else if(operatorForAdvanced === '*') {
                //   display.textContent = String(Number(firstNum) * Number(previousNum));
                // } else if(operatorForAdvanced === '/') {
                //   display.textContent = String(Number(firstNum) / Number(previousNum));      
                // } // 기존에 작성했던 하드코딩..!       
            }
            else if (previousKey !== display.textContent && previousNum !== '') {
                display.textContent = calculate(display.textContent, operatorForAdvanced, previousNum)
            }
            else if (previousKey !== display.textContent && previousNum === '') {
                display.textContent = firstNum;
            }
        }
    }
});