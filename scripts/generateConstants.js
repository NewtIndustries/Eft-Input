const fs = require('fs');
const path = require('path');
const cp = require('child_process');
const keyEnum = require('ts-keycode-enum');

const KEYBOARD_EVENT_TYPES = [
  'KEYDOWN',
  'KEYUP',
  'KEYPRESS'
]

const projectRoot = path.resolve(__dirname, '..');

// Remove generated files
var files = fs.readdirSync(path.resolve(projectRoot, 'src', 'Generated'));
files.forEach((file) => {
  fs.unlinkSync(path.resolve(projectRoot, 'src', 'Generated', file));
});

// Create Generated Files

// Keyboard Constants

const keyboardConstantsFileName = path.resolve(projectRoot, 'src', 'Generated', 'KeyboardConstants.ts');
var keyboardConstantsContents = ``;

keyboardConstantsContents += 'export namespace KeyboardConstants {\n';

const keyKeys = Object.values(keyEnum.Key).filter((v) => { return isNaN(v); });

for (var eventType in KEYBOARD_EVENT_TYPES) {
  keyboardConstantsContents += `\n// ${KEYBOARD_EVENT_TYPES[eventType]}\n`;
  keyKeys.forEach((v, i, a) => {
    // console.log(`export var KEYBOARD_${KEYBOARD_EVENT_TYPES[eventType]} = \'KEYBOARD.${KEYBOARD_EVENT_TYPES[eventType]}.${v}\';`);
    keyboardConstantsContents += `  export var KEYBOARD_${KEYBOARD_EVENT_TYPES[eventType]}_${v} = \'KEYBOARD.${KEYBOARD_EVENT_TYPES[eventType]}.${v}\';\n`
  });

}

keyboardConstantsContents += '}'
fs.writeFileSync(keyboardConstantsFileName, keyboardConstantsContents);