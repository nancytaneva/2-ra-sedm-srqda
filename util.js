function isOdd(number) {
    const result = number % 2 !=0;
    return result;
}

function isEven(number) {
    // const result = number % 2 != 0;
    // return result;

    return number % 2 != 0;
}

function isProcessable(customerCardFirstDigit) {
    return (isOdd(customerCardFirstDigit) || isEven(customerCardFirstDigit));
}

function isEven(number) {
    return!isOdd(number);
}