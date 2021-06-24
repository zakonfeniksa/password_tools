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


const common = require('./common');
const leet = require('./leet');
const nanb = require('./nanb');
const pnapnb = require('./pnapnb');
const punctuation = require('./punctuation');
const reverse = require('./reverse');
const spaces = require('./spaces');
const swap = require('./swap');
const years = require('./years');
const textCompare = require('./compare');
const permutate = require('./permutate');

const allFunctions = {
    common,
    leet,
    nanb,
    pnapnb,
    punctuation,
    reverse,
    spaces,
    swap,
    years,
    textCompare,
    permutate
};

module.exports = allFunctions;