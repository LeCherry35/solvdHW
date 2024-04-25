String.prototype.plus = function (string) {
    const arr1 = this.split('').reverse(); 
    const arr2 = string.split('').reverse(); // turn string into array and reverse it to have better access to last digits in both numbers
    const result = [];
    let carry = 0 //indicates if there is a carry from previous operation
    for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
        let sum = (+arr1[i] || 0) + (+arr2[i] || 0) + carry;
        if (sum > 9) { //if sum of digits is greater than 9, we have to carry 1 to the next digit
            carry = 1;
            sum = sum - 10;
        } else carry = 0;
        result.push(sum);
    }
    return result.reverse().join('');
}

String.prototype.minus = function (string) {
    if (+this < +string) return 'wrong input'; // ensure that the first parameter is always greater than the second parameter
    const arr1 = this.split('').reverse();
    const arr2 = string.split('').reverse();
    const result = [];
    let carry = 0
    for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
        let div = (+arr1[i] || 0) - (+arr2[i] || 0) - carry;
        if (div < 0) {
            carry = 1;
            div = div + 10;
        } else carry = 0;
        result.push(div);
    }
    return result.reverse().join('');

}

String.prototype.multiply = function (string) {
    const arr1 = this.split('').reverse();
    const arr2 = string.split('').reverse();
    const result = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            let mul = (+arr1[i] || 0) * (+arr2[j] || 0);
            if (result[i + j]) {
                result[i + j] = result[i + j] + mul; // if there is already a result for this placeof digit, add the new value to it
            } else result[i + j] = mul;
        }
    }

    // finish with carriers
    let carry = 0;
    for (let i = 0; i < result.length; i++) {
        let sum = result[i] + carry;
        if (sum > 9) {
            carry = Math.floor(sum / 10);
            sum = sum % 10;
        } else carry = 0;
        result[i] = sum;
    }
    if (carry) result.push(carry);
    return result.reverse().join('');
}

String.prototype.divide = function (string) {
    if (+string === 0 || +this < +string) return 'wrong input'; //ensure that the second parameter is not equal to 0 and not greater than the first parameter
    const arr1 = this.split('');
    const arr2 = string.split(''); // we dont need to reverse arrays in division cause we start from the first digit
    let result = '';
    let temp = '';
    for (let i = 0; i < arr1.length; i++) {
        temp += arr1[i];
        let count = 0; // the divider
        while (+temp >= +string) { // searching for the apropriate divider
            temp = String(temp).minus(string); // putting rest in temp variable
            count++;
        }
        result += count;
    }
    while(result[0] === '0') result = result.slice(1); //remove leading zeros
    return result;
}

console.log('345345'.plus('345'), 345345+345);
console.log('345345'.minus('345'), 345345-345);
console.log('345345'.multiply('345'), 345345*345);
console.log('345345'.divide('345'), 345345/345);
console.log('123456789'.plus('98765432'), 123456789+98765432);
console.log('123456789'.minus('98765432'), 123456789-98765432);
console.log('123456789'.multiply('98765432'), 123456789*98765432);
console.log('123456789'.divide('98765432'), 123456789/98765432);
console.log('99988877'.plus('932'), 99988877+932);
console.log('99988877'.minus('932'), 99988877-932);
console.log('99988877'.multiply('932'), 99988877*932);
console.log('99988877'.divide('932'), 99988877/932);

