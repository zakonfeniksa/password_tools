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
        tempArray.push('???' + tempText);
        tempArray.push('???' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('???' + tempText);
        tempArray.push('???' + tempText);
        tempArray.push('???' + tempText);
        tempArray.push('???' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('???' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('???' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('???' + tempText);
        tempArray.push('???' + tempText);
        tempArray.push('???' + tempText);
        tempArray.push('???' + tempText);
        tempArray.push('???' + tempText);
        tempArray.push('???' + tempText);
        tempArray.push('???' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('???' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('???' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);
        tempArray.push('??' + tempText);

        permutatedArray.push(...tempArray);
    }

    return permutatedArray;
}

module.exports = permutate;