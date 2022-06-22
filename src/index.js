module.exports = function toReadable(number) {
    let result = '';
    let nameOneToTwenty =
    {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty'
    }
    let nameOfDozens =
    {
        0: '',
        1: 'eleven',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    }


    let parseNumbers = number.toString();

    if (parseNumbers.length === 3) {
        let sub_result = '';

        sub_result += `${nameOneToTwenty[parseNumbers[0]]} hundred`;
        const twoLastNumbers = getOneToNintyNine(parseNumbers.slice(1).replace(/^0+/, ''));
        sub_result += twoLastNumbers !== '' ? ` ${twoLastNumbers}` : '';
        result = sub_result;

    } else if (parseNumbers.length === 2) {
        result = getOneToNintyNine(parseNumbers);
    } else {
        if (number == 0) return 'zero';
        result = nameOneToTwenty[number];
    }
    return result;

    function getOneToNintyNine(number_string) {
        if (!number_string || number_string.length === 0) return '';
        if (number_string <= 20) {
            return nameOneToTwenty[number_string];
        } else {
            return `${nameOfDozens[number_string[0]]} ${nameOneToTwenty[number_string[1]]}`.trim();
        }
    }
}
