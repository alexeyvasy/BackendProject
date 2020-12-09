function sumutil(longerNum, shorterNum) {
    const num = [];

    let carry = 0;
    let i = longerNum.length - 1;
    let j = shorterNum.length - 1;

    while (j >= 0) {
        num.push((longerNum[i] + shorterNum[j] + carry) % 10);

        if ((longerNum[i] + shorterNum[j] + carry) > 9) {
            carry = 1;
        }
        else {
            carry = 0;
        }

        i--;
        j--;
    }

    while (i >= 0) {
        num.push((longerNum[i] + carry) % 10);

        if ((longerNum[i] + carry) > 9) {
            carry = 1;
        }
        else {
            carry = 0;
        }

        i--;
    }

    if (carry === 1) {
        num.push(carry);
    }

    num.reverse();
    removeUnnecessaryZeros(num);
    return num;
};

function removeUnnecessaryZeros(arr)
{
    while(arr[0] === 0 && arr.length > 1)
    {
        arr.shift();
    }
};


export function sum(num1, num2){
    // HERE COMES LOGIC OF SUMMING 2 ARRAYS 
    if (num1.length >= num2.length) {
        return sumutil(num1, num2);
    }
    else {
        return sumutil(num2, num1);
    }
};

export function multiply(num1, num2) {
    // HERE COMES LOGIC OF MULTIPLYING 2 ARRAYS 
    let num = [0];
    let degreeof10 = 0;
    let i = num1.length - 1;

    while (i >= 0) {
        let j = num2.length - 1;
        const tempNum = [];
        let carry = 0;

        while (j >= 0) {
            const currentCalc = (num1[i] * num2[j] + carry);
            
            tempNum.push(currentCalc % 10);

            if (currentCalc > 9) {
                carry = Math.floor(currentCalc / 10);
            }
            else {
                carry = 0;
            }
            j--;
        }

        if (carry > 0) {
            tempNum.push(carry);
        }

        tempNum.reverse();
        
        for (let k = 0; k < degreeof10; k++) {
            tempNum.push(0);
        }

        degreeof10++;
        i--;
        num = sum(tempNum, num);
    }

    removeUnnecessaryZeros(num);
    return num;
};

