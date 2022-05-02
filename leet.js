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

const leet = ( text, variant) => {

    if (variant === 0) {
        text = text.replace(/a/gi, '4');
        text = text.replace(/b/gi, '8');
        text = text.replace(/c/gi, '[');
        text = text.replace(/d/gi, ')');
        text = text.replace(/e/gi, '3');
        text = text.replace(/f/gi, '|"');
        text = text.replace(/g/gi, '6');
        text = text.replace(/h/gi, '#');
        text = text.replace(/i/gi, '1');
        text = text.replace(/j/gi, '_|');
        text = text.replace(/k/gi, '|<');
        text = text.replace(/l/gi, '1');
        text = text.replace(/m/gi, '^^');
        text = text.replace(/n/gi, '^/');
        text = text.replace(/o/gi, '0');
        text = text.replace(/p/gi, '|*');
        text = text.replace(/q/gi, '(_,)');
        text = text.replace(/r/gi, '|`');
        text = text.replace(/s/gi, '5');
        text = text.replace(/t/gi, '7');
        text = text.replace(/u/gi, '(_)');
        text = text.replace(/v/gi, '|/');
        text = text.replace(/w/gi, '\'//');
        text = text.replace(/x/gi, '><');
        text = text.replace(/y/gi, 'j');
        text = text.replace(/z/gi, '2');
    }

    else if (variant === 1) {
      text = text.replace(/a/gi, '@');
      text = text.replace(/b/gi, '13');
      text = text.replace(/c/gi, '¢');
      text = text.replace(/d/gi, '|)');
      text = text.replace(/e/gi, '&');
      text = text.replace(/f/gi, '|=');
      text = text.replace(/g/gi, '&');
      text = text.replace(/h/gi, '/-/');
      text = text.replace(/i/gi, '!');
      text = text.replace(/j/gi, '_/');
      text = text.replace(/k/gi, '|{');
      text = text.replace(/l/gi, '£');
      text = text.replace(/n/gi, '^');
      text = text.replace(/o/gi, '()');
      text = text.replace(/q/gi, '()_');
      text = text.replace(/r/gi, '|~');
      text = text.replace(/s/gi, '$');
      text = text.replace(/t/gi, '+');
      text = text.replace(/u/gi, '|_|');
      text = text.replace(/x/gi, '}{');
      text = text.replace(/y/gi, '4');
      text = text.replace(/z/gi, '7_');
    }
    
    else if (variant === 2) text = text.replace(/a/gi, '4');
    else if (variant === 3) text = text.replace(/a/gi, '@');
    else if (variant === 4) text = text.replace(/a/gi, '^');
    else if (variant === 5) text = text.replace(/a/gi, 'aye');
    else if (variant === 6) text = text.replace(/b/gi, '8');
    else if (variant === 7) text = text.replace(/b/gi, '13');
    else if (variant === 8) text = text.replace(/b/gi, '|3');
    else if (variant === 9) text = text.replace(/b/gi, 'P>');
    else if (variant === 10) text = text.replace(/b/gi, '|:');
    else if (variant === 11) text = text.replace(/b/gi, '!3');
    else if (variant === 12) text = text.replace(/b/gi, '(3');
    else if (variant === 13) text = text.replace(/b/gi, '/3');
    else if (variant === 14) text = text.replace(/b/gi, ')3');
    else if (variant === 15) text = text.replace(/b/gi, '[-]');
    else if (variant === 16) text = text.replace(/c/gi, '[');
    else if (variant === 17) text = text.replace(/c/gi, '<');
    else if (variant === 18) text = text.replace(/c/gi, '(');
    else if (variant === 19) text = text.replace(/c/gi, '©');
    else if (variant === 20) text = text.replace(/d/gi, ')');
    else if (variant === 21) text = text.replace(/d/gi, '|)');
    else if (variant === 22) text = text.replace(/d/gi, '(|');
    else if (variant === 23) text = text.replace(/d/gi, '|o');
    else if (variant === 24) text = text.replace(/d/gi, '[)');
    else if (variant === 25) text = text.replace(/d/gi, 'I>');
    else if (variant === 26) text = text.replace(/d/gi, '|>');
    else if (variant === 27) text = text.replace(/d/gi, '?');
    else if (variant === 28) text = text.replace(/d/gi, 'T)');
    else if (variant === 29) text = text.replace(/d/gi, 'I7');
    else if (variant === 30) text = text.replace(/d/gi, 'cl');
    else if (variant === 31) text = text.replace(/d/gi, 'dee');
    else if (variant === 32) text = text.replace(/e/gi, '3');
    else if (variant === 33) text = text.replace(/e/gi, '&');
    else if (variant === 34) text = text.replace(/e/gi, '£');
    else if (variant === 35) text = text.replace(/e/gi, '€');
    else if (variant === 36) text = text.replace(/e/gi, '{');
    else if (variant === 37) text = text.replace(/e/gi, '[-');
    else if (variant === 38) text = text.replace(/e/gi, '|=-');
    else if (variant === 39) text = text.replace(/f/gi, '|"');
    else if (variant === 40) text = text.replace(/f/gi, '|=');
    else if (variant === 41) text = text.replace(/f/gi, 'ƒ');
    else if (variant === 42) text = text.replace(/f/gi, '|#');
    else if (variant === 43) text = text.replace(/f/gi, 'ph');
    else if (variant === 44) text = text.replace(/f/gi, '/=');
    else if (variant === 45) text = text.replace(/f/gi, 'v');
    else if (variant === 46) text = text.replace(/g/gi, '6');
    else if (variant === 47) text = text.replace(/g/gi, '&');
    else if (variant === 48) text = text.replace(/g/gi, '(_+');
    else if (variant === 49) text = text.replace(/g/gi, '9');
    else if (variant === 50) text = text.replace(/g/gi, 'C-');
    else if (variant === 51) text = text.replace(/g/gi, 'gee');
    else if (variant === 52) text = text.replace(/g/gi, '(γ,');
    else if (variant === 53) text = text.replace(/g/gi, '[,');
    else if (variant === 54) text = text.replace(/g/gi, '{,');
    else if (variant === 55) text = text.replace(/g/gi, '<-');
    else if (variant === 56) text = text.replace(/g/gi, '(.');
    else if (variant === 57) text = text.replace(/h/gi, '#');
    else if (variant === 58) text = text.replace(/h/gi, '/-/');
    else if (variant === 59) text = text.replace(/h/gi, '[-]');
    else if (variant === 60) text = text.replace(/h/gi, ']-[');
    else if (variant === 61) text = text.replace(/h/gi, ')-(');
    else if (variant === 62) text = text.replace(/h/gi, '(-)');
    else if (variant === 63) text = text.replace(/h/gi, ':-:');
    else if (variant === 64) text = text.replace(/h/gi, '|~|');
    else if (variant === 65) text = text.replace(/h/gi, '|-|');
    else if (variant === 66) text = text.replace(/h/gi, ']~[');
    else if (variant === 67) text = text.replace(/h/gi, '}{');
    else if (variant === 68) text = text.replace(/h/gi, '1-1');
    else if (variant === 69) text = text.replace(/h/gi, '}-{');
    else if (variant === 70) text = text.replace(/i/gi, '1');
    else if (variant === 71) text = text.replace(/i/gi, '!');
    else if (variant === 72) text = text.replace(/i/gi, 'i');
    else if (variant === 73) text = text.replace(/i/gi, '|');
    else if (variant === 74) text = text.replace(/i/gi, 'eye');
    else if (variant === 75) text = text.replace(/i/gi, '3y3');
    else if (variant === 76) text = text.replace(/i/gi, '][');
    else if (variant === 77) text = text.replace(/i/gi, ']');
    else if (variant === 78) text = text.replace(/j/gi, '_|');
    else if (variant === 79) text = text.replace(/j/gi, '_/');
    else if (variant === 80) text = text.replace(/j/gi, '¿');
    else if (variant === 81) text = text.replace(/j/gi, '</');
    else if (variant === 82) text = text.replace(/j/gi, '(/ </');
    else if (variant === 83) text = text.replace(/j/gi, '_[');
    else if (variant === 84) text = text.replace(/k/gi, 'X');
    else if (variant === 85) text = text.replace(/k/gi, '|<');
    else if (variant === 86) text = text.replace(/k/gi, '|{');
    else if (variant === 87) text = text.replace(/k/gi, ']{');
    else if (variant === 88) text = text.replace(/k/gi, '|X');
    else if (variant === 89) text = text.replace(/l/gi, '1');
    else if (variant === 90) text = text.replace(/l/gi, '£');
    else if (variant === 91) text = text.replace(/l/gi, '7');
    else if (variant === 92) text = text.replace(/l/gi, '1_');
    else if (variant === 93) text = text.replace(/l/gi, '|');
    else if (variant === 94) text = text.replace(/l/gi, '|_');
    else if (variant === 95) text = text.replace(/l/gi, 'el');
    else if (variant === 96) text = text.replace(/l/gi, '[_,');
    else if (variant === 97) text = text.replace(/m/gi, '|v|');
    else if (variant === 98) text = text.replace(/m/gi, '[V]');
    else if (variant === 99) text = text.replace(/m/gi, '(Y)');
    else if (variant === 100) text = text.replace(/m/gi, '{V}');
    else if (variant === 101) text = text.replace(/m/gi, 'em');
    else if (variant === 102) text = text.replace(/m/gi, 'AA');
    else if (variant === 103) text = text.replace(/m/gi, '(u)');
    else if (variant === 104) text = text.replace(/m/gi, '(V)');
    else if (variant === 105) text = text.replace(/m/gi, '^^');
    else if (variant === 106) text = text.replace(/n/gi, '^/');
    else if (variant === 107) text = text.replace(/n/gi, '// []');
    else if (variant === 108) text = text.replace(/n/gi, '/V');
    else if (variant === 109) text = text.replace(/n/gi, '₪');
    else if (variant === 110) text = text.replace(/n/gi, '^');
    else if (variant === 111) text = text.replace(/o/gi, '0');
    else if (variant === 112) text = text.replace(/o/gi, '()');
    else if (variant === 113) text = text.replace(/o/gi, 'oh');
    else if (variant === 114) text = text.replace(/o/gi, '[]');
    else if (variant === 115) text = text.replace(/o/gi, 'p');
    else if (variant === 116) text = text.replace(/p/gi, '|*');
    else if (variant === 117) text = text.replace(/p/gi, '|o');
    else if (variant === 118) text = text.replace(/p/gi, '|º');
    else if (variant === 119) text = text.replace(/p/gi, '?');
    else if (variant === 120) text = text.replace(/p/gi, '|^(o)');
    else if (variant === 121) text = text.replace(/p/gi, '|>');
    else if (variant === 122) text = text.replace(/p/gi, '9');
    else if (variant === 123) text = text.replace(/p/gi, '[]D');
    else if (variant === 124) text = text.replace(/p/gi, '|̊');
    else if (variant === 125) text = text.replace(/p/gi, '|7');
    else if (variant === 126) text = text.replace(/q/gi, '(_,)');
    else if (variant === 127) text = text.replace(/q/gi, '()_');
    else if (variant === 128) text = text.replace(/q/gi, '0_');
    else if (variant === 129) text = text.replace(/q/gi, '<|');
    else if (variant === 130) text = text.replace(/q/gi, '0,');
    else if (variant === 131) text = text.replace(/r/gi, '|`');
    else if (variant === 132) text = text.replace(/r/gi, '|~');
    else if (variant === 133) text = text.replace(/r/gi, '|?');
    else if (variant === 134) text = text.replace(/r/gi, '/2');
    else if (variant === 135) text = text.replace(/r/gi, '|^');
    else if (variant === 136) text = text.replace(/r/gi, 'lz');
    else if (variant === 137) text = text.replace(/r/gi, '|9');
    else if (variant === 138) text = text.replace(/r/gi, '2');
    else if (variant === 139) text = text.replace(/r/gi, '[z');
    else if (variant === 140) text = text.replace(/r/gi, 'Я');
    else if (variant === 141) text = text.replace(/r/gi, '.-');
    else if (variant === 142) text = text.replace(/r/gi, '|2');
    else if (variant === 143) text = text.replace(/r/gi, 'ſ');
    else if (variant === 144) text = text.replace(/s/gi, '5');
    else if (variant === 145) text = text.replace(/s/gi, '$');
    else if (variant === 146) text = text.replace(/s/gi, 'z');
    else if (variant === 147) text = text.replace(/s/gi, '§');
    else if (variant === 148) text = text.replace(/s/gi, 'ehs');
    else if (variant === 149) text = text.replace(/s/gi, 'es');
    else if (variant === 150) text = text.replace(/t/gi, '7');
    else if (variant === 151) text = text.replace(/t/gi, '+');
    else if (variant === 152) text = text.replace(/t/gi, '-|-');
    else if (variant === 153) text = text.replace(/t/gi, '1');
    else if (variant === 154) text = text.replace(/t/gi, '\'][\'');
    else if (variant === 155) text = text.replace(/t/gi, '†');
    else if (variant === 156) text = text.replace(/u/gi, '(_)');
    else if (variant === 157) text = text.replace(/u/gi, '|_|');
    else if (variant === 158) text = text.replace(/u/gi, 'v');
    else if (variant === 159) text = text.replace(/u/gi, 'L|');
    else if (variant === 160) text = text.replace(/u/gi, 'µ');
    else if (variant === 161) text = text.replace(/w/gi, 'vv');
    else if (variant === 162) text = text.replace(/w/gi, '\'//');
    else if (variant === 163) text = text.replace(/w/gi, 'dubya');
    else if (variant === 164) text = text.replace(/w/gi, '(n)');
    else if (variant === 165) text = text.replace(/w/gi, 'Ш');
    else if (variant === 166) text = text.replace(/w/gi, 'uu');
    else if (variant === 167) text = text.replace(/x/gi, '><');
    else if (variant === 168) text = text.replace(/x/gi, 'Ж');
    else if (variant === 169) text = text.replace(/x/gi, '}{');
    else if (variant === 170) text = text.replace(/x/gi, 'ecks');
    else if (variant === 171) text = text.replace(/x/gi, '×');
    else if (variant === 172) text = text.replace(/x/gi, 'χ');
    else if (variant === 173) text = text.replace(/x/gi, ')(');
    else if (variant === 174) text = text.replace(/x/gi, '][');
    else if (variant === 175) text = text.replace(/y/gi, 'j');
    else if (variant === 176) text = text.replace(/y/gi, '`/');
    else if (variant === 177) text = text.replace(/y/gi, 'Ч');
    else if (variant === 178) text = text.replace(/y/gi, '7');
    else if (variant === 179) text = text.replace(/z/gi, '2');
    else if (variant === 180) text = text.replace(/z/gi, '7_');
    else if (variant === 181) text = text.replace(/z/gi, '-/_');
    else if (variant === 182) text = text.replace(/z/gi, '%');
    else if (variant === 183) text = text.replace(/z/gi, '>_');
    else if (variant === 184) text = text.replace(/z/gi, 's');


    return text;
}

module.exports = leet;