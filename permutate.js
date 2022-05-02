/*
<password_tools - Generate similar passwords>
    Copyright (C) <2021-2022>  <zakonfeniksa>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

const permutate = text => {

    let permutatedArray = [];

    for (let i = 0; i < text.length; i++) {

        let tempArray = [];

        let tempText = text;

        tempText = text.split('');
        tempText.splice(i, 1);
        tempText = tempText.join('');

        tempArray.push(' ' + tempText);
        tempArray.push('!' + tempText);
        tempArray.push('"' + tempText);
        tempArray.push('#' + tempText);
        tempArray.push('$' + tempText);
        tempArray.push('%' + tempText);
        tempArray.push('&' + tempText);
        tempArray.push('\'' + tempText);
        tempArray.push('(' + tempText);
        tempArray.push(')' + tempText);
        tempArray.push('*' + tempText);
        tempArray.push('+' + tempText);
        tempArray.push(',' + tempText);
        tempArray.push('-' + tempText);
        tempArray.push('.' + tempText);
        tempArray.push('/' + tempText);
        tempArray.push('0' + tempText);
        tempArray.push('1' + tempText);
        tempArray.push('2' + tempText);
        tempArray.push('3' + tempText);
        tempArray.push('4' + tempText);
        tempArray.push('5' + tempText);
        tempArray.push('6' + tempText);
        tempArray.push('7' + tempText);
        tempArray.push('8' + tempText);
        tempArray.push('9' + tempText);
        tempArray.push(':' + tempText);
        tempArray.push(';' + tempText);
        tempArray.push('<' + tempText);
        tempArray.push('=' + tempText);
        tempArray.push('>' + tempText);
        tempArray.push('?' + tempText);
        tempArray.push('@' + tempText);
        tempArray.push('A' + tempText);
        tempArray.push('B' + tempText);
        tempArray.push('C' + tempText);
        tempArray.push('D' + tempText);
        tempArray.push('E' + tempText);
        tempArray.push('F' + tempText);
        tempArray.push('G' + tempText);
        tempArray.push('H' + tempText);
        tempArray.push('I' + tempText);
        tempArray.push('J' + tempText);
        tempArray.push('K' + tempText);
        tempArray.push('L' + tempText);
        tempArray.push('M' + tempText);
        tempArray.push('N' + tempText);
        tempArray.push('O' + tempText);
        tempArray.push('P' + tempText);
        tempArray.push('Q' + tempText);
        tempArray.push('R' + tempText);
        tempArray.push('S' + tempText);
        tempArray.push('T' + tempText);
        tempArray.push('U' + tempText);
        tempArray.push('V' + tempText);
        tempArray.push('W' + tempText);
        tempArray.push('X' + tempText);
        tempArray.push('Y' + tempText);
        tempArray.push('Z' + tempText);
        tempArray.push('[' + tempText);
        tempArray.push('~' + tempText);
        tempArray.push(']' + tempText);
        tempArray.push('^' + tempText);
        tempArray.push('_' + tempText);
        tempArray.push('`' + tempText);
        tempArray.push('a' + tempText);
        tempArray.push('b' + tempText);
        tempArray.push('c' + tempText);
        tempArray.push('d' + tempText);
        tempArray.push('e' + tempText);
        tempArray.push('f' + tempText);
        tempArray.push('g' + tempText);
        tempArray.push('h' + tempText);
        tempArray.push('i' + tempText);
        tempArray.push('j' + tempText);
        tempArray.push('k' + tempText);
        tempArray.push('l' + tempText);
        tempArray.push('m' + tempText);
        tempArray.push('n' + tempText);
        tempArray.push('o' + tempText);
        tempArray.push('p' + tempText);
        tempArray.push('q' + tempText);
        tempArray.push('r' + tempText);
        tempArray.push('s' + tempText);
        tempArray.push('t' + tempText);
        tempArray.push('u' + tempText);
        tempArray.push('v' + tempText);
        tempArray.push('w' + tempText);
        tempArray.push('x' + tempText);
        tempArray.push('y' + tempText);
        tempArray.push('z' + tempText);
        tempArray.push('{' + tempText);
        tempArray.push('}' + tempText);
        tempArray.push('€' + tempText);
        tempArray.push('‚' + tempText);
        tempArray.push('ƒ' + tempText);
        tempArray.push('„' + tempText);
        tempArray.push('…' + tempText);
        tempArray.push('†' + tempText);
        tempArray.push('‡' + tempText);
        tempArray.push('ˆ' + tempText);
        tempArray.push('‰' + tempText);
        tempArray.push('Š' + tempText);
        tempArray.push('‹' + tempText);
        tempArray.push('Œ' + tempText);
        tempArray.push('Ž' + tempText);
        tempArray.push('‘' + tempText);
        tempArray.push('’' + tempText);
        tempArray.push('“' + tempText);
        tempArray.push('”' + tempText);
        tempArray.push('•' + tempText);
        tempArray.push('–' + tempText);
        tempArray.push('—' + tempText);
        tempArray.push('˜' + tempText);
        tempArray.push('™' + tempText);
        tempArray.push('š' + tempText);
        tempArray.push('›' + tempText);
        tempArray.push('œ' + tempText);
        tempArray.push('ž' + tempText);
        tempArray.push('Ÿ' + tempText);
        tempArray.push('¡' + tempText);
        tempArray.push('¢' + tempText);
        tempArray.push('£' + tempText);
        tempArray.push('¤' + tempText);
        tempArray.push('¥' + tempText);
        tempArray.push('¦' + tempText);
        tempArray.push('§' + tempText);
        tempArray.push('¨' + tempText);
        tempArray.push('©' + tempText);
        tempArray.push('ª' + tempText);
        tempArray.push('«' + tempText);
        tempArray.push('¬' + tempText);
        tempArray.push('®' + tempText);
        tempArray.push('¯' + tempText);
        tempArray.push('°' + tempText);
        tempArray.push('±' + tempText);
        tempArray.push('²' + tempText);
        tempArray.push('³' + tempText);
        tempArray.push('´' + tempText);
        tempArray.push('µ' + tempText);
        tempArray.push('¶' + tempText);
        tempArray.push('·' + tempText);
        tempArray.push('¸' + tempText);
        tempArray.push('¹' + tempText);
        tempArray.push('º' + tempText);
        tempArray.push('»' + tempText);
        tempArray.push('¼' + tempText);
        tempArray.push('½' + tempText);
        tempArray.push('¾' + tempText);
        tempArray.push('¿' + tempText);
        tempArray.push('À' + tempText);
        tempArray.push('Á' + tempText);
        tempArray.push('Â' + tempText);
        tempArray.push('Ã' + tempText);
        tempArray.push('Ä' + tempText);
        tempArray.push('Å' + tempText);
        tempArray.push('Æ' + tempText);
        tempArray.push('Ç' + tempText);
        tempArray.push('È' + tempText);
        tempArray.push('É' + tempText);
        tempArray.push('Ê' + tempText);
        tempArray.push('Ë' + tempText);
        tempArray.push('Ì' + tempText);
        tempArray.push('Í' + tempText);
        tempArray.push('Î' + tempText);
        tempArray.push('Ï' + tempText);
        tempArray.push('Ð' + tempText);
        tempArray.push('Ñ' + tempText);
        tempArray.push('Ò' + tempText);
        tempArray.push('Ó' + tempText);
        tempArray.push('Ô' + tempText);
        tempArray.push('Õ' + tempText);
        tempArray.push('Ö' + tempText);
        tempArray.push('×' + tempText);
        tempArray.push('Ø' + tempText);
        tempArray.push('Ù' + tempText);
        tempArray.push('Ú' + tempText);
        tempArray.push('Û' + tempText);
        tempArray.push('Ü' + tempText);
        tempArray.push('Ý' + tempText);
        tempArray.push('Þ' + tempText);
        tempArray.push('ß' + tempText);
        tempArray.push('à' + tempText);
        tempArray.push('á' + tempText);
        tempArray.push('â' + tempText);
        tempArray.push('ã' + tempText);
        tempArray.push('ä' + tempText);
        tempArray.push('å' + tempText);
        tempArray.push('æ' + tempText);
        tempArray.push('ç' + tempText);
        tempArray.push('è' + tempText);
        tempArray.push('é' + tempText);
        tempArray.push('ê' + tempText);
        tempArray.push('ë' + tempText);
        tempArray.push('ì' + tempText);
        tempArray.push('í' + tempText);
        tempArray.push('î' + tempText);
        tempArray.push('ï' + tempText);
        tempArray.push('ð' + tempText);
        tempArray.push('ñ' + tempText);
        tempArray.push('ò' + tempText);
        tempArray.push('ó' + tempText);
        tempArray.push('ô' + tempText);
        tempArray.push('õ' + tempText);
        tempArray.push('ö' + tempText);
        tempArray.push('÷' + tempText);
        tempArray.push('ø' + tempText);
        tempArray.push('ù' + tempText);
        tempArray.push('ú' + tempText);
        tempArray.push('û' + tempText);
        tempArray.push('ü' + tempText);
        tempArray.push('ý' + tempText);
        tempArray.push('þ' + tempText);
        tempArray.push('ÿ' + tempText);

        permutatedArray.push(...tempArray);
    }

    return permutatedArray;
}

module.exports = permutate;