import * as GlobalEvent from './GlobalEventTypes';
import { Key } from 'ts-keycode-enum';
export namespace KeyboardConstants {
	export var Keys : typeof Key;
	export var KEYBOARD = new GlobalEvent.EFTEVENT.EventBuilder(GlobalEvent.EFTEVENT.KEYBOARD);
	export var KEYBOARD_PUSH_A = new GlobalEvent.EFTEVENT.EventBuilder(GlobalEvent.EFTEVENT.KEYBOARD).Add(GlobalEvent.EFTEVENT.KEYBOARDEVENT.KEYUP).Add(Key.A).toString();
}

