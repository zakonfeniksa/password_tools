# [password_tools](https://github.com/zakonfeniksa/password_tools) README
## Javascript tool for creating similar passwords from other passwords.
### Example:
'password' -> 'pa$$word'

# Instalation
## `npm install password_tools`

# Usage
```Javascript
const PasswordTools = require('password_tools');
PasswordTools.exampleFunction(exampleArguments);
```
### Example:
```Javascript
const PasswordTools = require('password_tools');
console.log(PasswordTools.leet('password',145));
// ^ pa$$word
```

# List of functions
## Capitalize
### First letter - UpperCase, next letters - LowerCase
### Example:
```Javascript
const PasswordTools = require('password_tools');
console.log(PasswordTools.capitalize('pAsSword'));
// ^ Password
```

## Common
### Returns an array with common words added on the left and right of the password
### Example:
```Javascript
const PasswordTools = require('password_tools');
console.log(PasswordTools.common('password'));
/*
[
    'password123456', '123456password'
    ... 168 more items
]
*/
```

## Compare
### Compares 2 passwords
### If everything is the same returns 100%, if other letterCase - 50%
### Example:
```Javascript
const PasswordTools = require('password_tools');
console.log(PasswordTools.textCompare('pa$$word','PassWORD'));
// ^ 0.4375
```

## Leet
### Permutates password using LEET(1337)
### There are 185 variants of 1337 permutation, they are listed in leet_permutations.txt file
### Example:
```Javascript
const PasswordTools = require('password_tools');
console.log(PasswordTools.leet('Password',145));
// ^ Pa$$word
```

## Nanb
### Returns an array containing passwords with numbers 1-123 at the end and at the beginning
### Example:
```Javascript
const PasswordTools = require('password_tools');
console.log(PasswordTools.nanb('Password'));
/*
[
    'Password1', 'Password2'
    ... 244 more items
]
*/
```

## Permutate
### Returns an array with permutated passwords
### Example:
```Javascript
const PasswordTools = require('password_tools');
console.log(PasswordTools.permutate('Password'));
/*
[
    ' assword', '!assword'
    ... 1710 more items
]
*/
```

## Pnapnb
### Returns an array containing passwords with '01'-'09' at the end and at the beginning
### Example
```Javascript
const PasswordTools = require('password_tools');
console.log(PasswordTools.pnapnb('Password'));
/*
[
    'Password01', 'Password02'
    ... 16 more items
]
*/
```

## Punctuation
### Returns an array with passwords and punctuation chars added at the end of the passwords
### Example
```Javascript
const PasswordTools = require('password_tools');
console.log(PasswordTools.punctuation('Password'));
/*
[
    'Password!', 'Password@'
    ... 11 more items
]
*/
```

## Reverse
### Returns reversed password
### Example
```Javascript
const PasswordTools = require('password_tools');
console.log(PasswordTools.reverse('Password'));
// ^ drowssaP
```

## Spaces
### Returns password with spaces added
### Example
```Javascript
const PasswordTools = require('password_tools');
console.log(PasswordTools.spaces('Password'));
// ^ P a s s w o r d
```

## Swap
### Swaps LowerCase & UpperCase
### Example
```Javascript
const PasswordTools = require('password_tools');
console.log(PasswordTools.swap('Password'));
// ^ pASSWORD
```

## Years
### Returns array containing password with years 1990-current added at the end of the password and at the beginning of the password
### Example
```Javascript
const PasswordTools = require('password_tools');
console.log(PasswordTools.years('Password'));
/*
[
    'Password1990', 'Password1991'
    ... 64 more items
]
*/
```

# Copyright notice
## <password_tools> - Generate similar passwords
## Copyright (C) <2021-2022> \<zakonfeniksa>

## This program is free software: you can redistribute it and/or modify
## it under the terms of the GNU General Public License as published by
## the Free Software Foundation, either version 3 of the License, or
## (at your option) any later version.

## This program is distributed in the hope that it will be useful,
## but WITHOUT ANY WARRANTY; without even the implied warranty of
## MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
## GNU General Public License for more details.

## You should have received a copy of the GNU General Public License
## along with this program.  If not, see <https://www.gnu.org/licenses/>.