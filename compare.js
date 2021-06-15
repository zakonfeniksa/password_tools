/*
<password_tools - Generate similar passwords>
    Copyright (C) <2021>  <zakonfeniksa>

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

const textCompare = ( text, otherText ) => {

    while (text.length < otherText.length) {
        text += '0';
    }

    while (otherText.length < text.length) {
        otherText += '0';
    }

    let matchesLetters = 0;

    for (let i = 0; i < text.length; i++) {
        if (text[i] === otherText[i]) matchesLetters++;
        else if (text[i] === otherText[i].toLowerCase()) matchesLetters += 0.5;
        else if (text[i] === otherText[i].toUpperCase()) matchesLetters += 0.5;
    }

    return matchesLetters / text.length;
}

module.exports = textCompare;