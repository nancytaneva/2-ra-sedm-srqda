// конфигурационни константи:
// годината спрямо която определяме какъв ще бъде типът на потребителя:
const CONFIGURATION_CUSTOMER_YEAR = 1965;

var customCardFirstDigit  = 0;
var customCardSecondDigit = 0;
var customCardThirdDigit  = 0;
var customCardFourthDigit = 0;
var customCardFifthDigit  = 0;
var customCardSixthDigit  = 0;


// Първа цифра
function generateFirstDigit() {
    var generatedFirstDigit  = 0;

    const customerYearOfBirth = 1955;
    const currentYear               = (new Date()).getFullYear();
    const customerAge               = currentYear - customerYearOfBirth;
    
    function getFirstDigit() {
        const customerRandomCoefficient = Math.ceil(Math.random()*(7 - 1) + 1);
        generatedFirstDigit = parseInt(customerAge/customerRandomCoefficient);
    
        return generatedFirstDigit;
    }
    
    if(customerYearOfBirth > CONFIGURATION_CUSTOMER_YEAR) {
        do {
                generatedFirstDigit = getFirstDigit();
        } while(isProcessable(generatedFirstDigit))
    }
    
    if(customerYearOfBirth < CONFIGURATION_CUSTOMER_YEAR) {
        do {
            generatedFirstDigit = getFirstDigit();
        } while((generatedFirstDigit % 2 == 0) || (generatedFirstDigit >= 10))
    }
    
    return generatedFirstDigit;    
}



// Втора цифра:
