const keyEnum = require('ts-keycode-enum');

const KEYBOARD_EVENT_TYPES = [
  'KEYDOWN',
  'KEYUP',
  'KEYPRESS'
]

const keyKeys = Object.values(keyEnum.Key).filter((v) => { return isNaN(v); });

for (var eventType in KEYBOARD_EVENT_TYPES) {
  keyKeys.forEach((v, i, a) => {
    console.log(`export var KEYBOARD_${KEYBOARD_EVENT_TYPES[eventType]} = \'KEYBOARD.${KEYBOARD_EVENT_TYPES[eventType]}.${v}\';`);
    // console.log(`KEYBOARD.${KEYBOARD_EVENT_TYPES[eventType]}.${v}`);
  });
  // for (var key in  keyEnum.Key) {
  //   console.log(`KEYBOARD.${KEYBOARD_EVENT_TYPES[eventType]}.${keyEnum.Key[key]}`);
  // }
}

// console.dir(keyEnum);
// for (var keyboardEventType in EFTEVENT.KEYBOARDEVENT) {
//   console.log(EFTEVENT.KEYBOARD + '.' + keyboardEventType);
// }