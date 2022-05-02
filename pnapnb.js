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

const pnapnb = (text) => {

    let pnapnbArray = [];

    let x_end = 1;
    let x_beginning = 1;

    while (x_end < 10) {
        pnapnbArray.push(text + '0' + x_end);
        x_end++;
    }

    while (x_beginning < 10) {
        pnapnbArray.push('0' + x_beginning + text);
        x_beginning++;
    }

    return pnapnbArray;
}

module.exports = pnapnb;