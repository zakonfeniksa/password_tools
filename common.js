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

const common = text => {

    const commonWords = [
        '123456',
        '123456789',
        'picture1',
        'password',
        '12345678',
        '111111',
        '123123',
        '12345',
        '1234567890',
        'senha',
        '1234567',
        'qwerty',
        'abc123',
        'Million2',
        '000000',
        '1234',
        'iloveyou',
        'aaron431',
        'password1',
        'qqww1122',
        'monkey',
        'letmein',
        'trustno1',
        'dragon',
        'baseball',
        'iloveyou',
        'master',
        'sunshine',
        'ashley',
        'bailey',
        'passw0rd',
        'shawod',
        '654321',
        'superman',
        'qazwsx',
        'michael',
        'Football',
        'welcome',
        'jesus',
        'ninja',
        'mustang',
        'password1',
        'adobe123',
        'photoshop',
        'princess',
        'azerty',
        'mustang',
        'access',
        '696969',
        'batman',
        '1qaz2wsx',
        'login',
        'qwertyuiop',
        'solo',
        'starwars',
        'flower',
        'hotie',
        'loveme',
        'zaq1zaq1',
        'hello',
        'freedom',
        'whatever',
        'qazwsx',
        '666666',
        '!@#$%^&*',
        'charlie',
        'aa123456',
        'donald',
        'qwerty123',
        '1q2w3e4r',
        '555555',
        'lovely',
        '7777777',
        '888888',
        '123qwe',
        'mynoob',
        '123321',
        '18atcskd2w',
        '3rjs1la7qe',
        'google',
        'duckduckgo',
        'zxcvbnm',
        'admin',
        'sys',
        'pw',
        'pwd'
    ];

    let commonArray = [];

    for (let i = 0; i < commonWords.length; i++) {
        commonArray.push(text + commonWords[i]);
        commonArray.push(commonWords[i] + text);
    }

    return commonArray;
}


module.exports = common;