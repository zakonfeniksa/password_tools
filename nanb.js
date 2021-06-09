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

const nanb = text => {

    let nanbArray = [];

    let x_end = 1;
    let x_beginning = 1;

    while (x_end < 124) {
        nanbArray.push(text + x_end);
        x_end++;
    }

    while (x_beginning < 124) {
        nanbArray.push(x_beginning + text);
        x_beginning++;
    }

    return nanbArray;
}

module.exports = nanb;