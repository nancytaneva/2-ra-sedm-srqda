// конфигурационни константи:
// годината спрямо която определяме какъв ще бъде типът на потребителя:
const CONFIGURATION_CUSTOMER_YEAR = 1965;

var customerCardFirstDigit  = 0;
var customerCardSecondDigit = 0;
var customerCardThirdDigit  = 0;
var customerCardFourthDigit = 0;
var customerCardFifthDigit  = 0;
var customerCardSixthDigit  = 0;


// Първа цифра
const customerYearOfBirth = 1992;

do {
    if(customerYearOfBirth > CONFIGURATION_CUSTOMER_YEAR) {
        const currentYear               = (new Date()).getFullYear();
        const customerAge               = currentYear - customerYearOfBirth;
        const customerRandomCoefficient = Math.ceil(Math.random()*(7 - 1) + 1);
        customerCardFirstDigit = parseInt(customerAge/customerRandomCoefficient);
    }
} while(customerCardFirstDigit % 2 == 0)

if(customerYearOfBirth < CONFIGURATION_CUSTOMER_YEAR) {
    
}

console.log(`${customerCardFirstDigit}`);
