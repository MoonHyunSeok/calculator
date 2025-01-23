import { useState, useEffect } from 'react';

// 이 코드는 React를 사용한 계산기 컴포넌트입니다.

// Calculator 컴포넌트 정의
const Calculator = () => {
    // input 상태를 관리하기 위한 useState 훅 사용
    const [input, setInput] = useState('');

    // 버튼 클릭 시 입력값을 처리하는 함수
    const handleClick = (value) => {
        if (input.length >= 15) {
            alert('최대 15자리까지 입력할 수 있습니다.');
            return;
        }
        setInput(input + value);
    };

    // 계산 결과를 처리하는 함수
    const calculate = () => {
        try {
            // eval 함수를 사용하여 문자열 수식을 계산
            setInput(eval(input).toString());
        } catch (error) {
            // 에러 발생 시 'Error' 표시
            setInput('Error');
        }
    };

    // 입력값을 초기화하는 함수
    const clearInput = () => {
        setInput('');
    };

    // 입력 길이를 체크하는 함수
    const checkInputLength = (value) => {
        if (value.length > 15) {
            alert('15자리 까지만 입력할 수 있어요!');
            return false;
        }
        return true;
    };

    const handleKeyPress = (event) => {
        const key = event.key;
        if (/\d/.test(key)) {
            handleClick(key); // 숫자 키
        } else if (key === 'Enter') {
            calculate(); // Enter 키
        } else if (key === 'Backspace') {
            clearInput(); // C 키
        } else if (['+', '-', '*', '/'].includes(key)) {
            handleClick(key); // 연산자 키
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [input]);

    // JSX를 사용한 UI 렌더링
    return (
        <div className="calculator">
            <h1>계산기</h1>
            {/* 계산기 디스플레이 */}
            <input 
                type="text" 
                value={input
                    .replace(/[\*\/]/g, match => match === '*' ? 'x' : '÷')
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 
                readOnly 
                style={{
                    fontSize: input.length > 8 ? `${35 - (input.length - 8) * 2}px` : '35px'
                }}
            />
            {/* 버튼 그리드 */}
            <div className="button-grid">                                      
                <button className="operator" onClick={clearInput}>C</button>
                <button className="operator" onClick={() => {
                    const value = parseFloat(input) / 100;
                    setInput(value.toString());
                }}>%</button>
                <button className="operator" onClick={() => {
                    const newInput = input.slice(0, -1);
                    setInput(newInput);
                }}>←</button>
                <button className="operator" onClick={() => handleClick('/')}>÷</button>
                <button onClick={() => handleClick('7')}>7</button>
                <button onClick={() => handleClick('8')}>8</button>
                <button onClick={() => handleClick('9')}>9</button>
                <button className="operator" onClick={() => handleClick('*')}>×</button>
                <button onClick={() => handleClick('4')}>4</button>
                <button onClick={() => handleClick('5')}>5</button>
                <button onClick={() => handleClick('6')}>6</button>
                <button className="operator" onClick={() => handleClick('-')}>-</button>
                <button onClick={() => handleClick('1')}>1</button>
                <button onClick={() => handleClick('2')}>2</button>
                <button onClick={() => handleClick('3')}>3</button>
                <button className="operator" onClick={() => handleClick('+')}>+</button>
                <button onClick={() => handleClick('0')}>0</button>
                <button onClick={() => handleClick('.')}>.</button>
                <button className="operator" onClick={calculate}>=</button>
             </div>
        </div>
    );
};

export default Calculator;
