import * as GlobalEvent from './GlobalEventTypes';
import { Key } from 'ts-keycode-enum';
export namespace KeyboardConstants {
	export var Keys : typeof Key;
	export var KEYBOARD = new GlobalEvent.EFTEVENT.EventBuilder(GlobalEvent.EFTEVENT.KEYBOARD);

	export var KEYBOARD_KEYUP = GlobalEvent.EFTEVENT.eventBuilder(GlobalEvent.EFTEVENT.KEYBOARD, GlobalEvent.EFTEVENT.KEYBOARDEVENT.KEYUP);
	export var KEYBOARD_KEYPRESS = GlobalEvent.EFTEVENT.eventBuilder(GlobalEvent.EFTEVENT.KEYBOARD, GlobalEvent.EFTEVENT.KEYBOARDEVENT.KEYPRESS);
	export var KEYBOARD_KEYDOWN = GlobalEvent.EFTEVENT.eventBuilder(GlobalEvent.EFTEVENT.KEYBOARD, GlobalEvent.EFTEVENT.KEYBOARDEVENT.KEYDOWN);

}
