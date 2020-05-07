## Prerequisites
- install Node 
- `npm install -g protractor` to install protractor global
- `npm install`to install the project dependencies

## Description
- run tests: `protractor conf.js`

## Explanation
I decided to use Page Object for a clean code, avoid duplication, and better maintain on the suites.
I used Xpath, even though is more complex and slower than CSS selector, because can traverse both forward and backward whereas CSS selector only moves forward.
Also, in some cases I had elements depended on the context (like searching for a file named RoxanaAcatrinei) and Xpath is a better solution. 
On a long term use, xpath offers more functionality than CSS. 
It is known that CSS is faster than Xpath, but with this new technologies on the market the difference is not that big and relative Xpath offers more functionality than CSS (so it's worth the time difference).
I used parameters on functions so it will be easier to user/modify on long term.
