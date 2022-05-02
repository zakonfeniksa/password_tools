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

const capitalize = text => {

    text = text.split('');

    text[0] = text[0].toUpperCase();

    for (let i = 1; i < text.length; i++) {
        text[i] = text[i].toLowerCase();
    }

    text = text.join('');

    return text;
}

module.exports = capitalize;