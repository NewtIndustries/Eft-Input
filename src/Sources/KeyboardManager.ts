import { Key } from 'ts-keycode-enum';
import * as PubSub from 'pubsub-js';
import * as GlobalEvent from '../Definitions/GlobalEventTypes';

export interface KeyboardState {
	IsDown(key: Key | number): boolean;
	IsHeld(key: Key | number): boolean;
}

export class KeyboardManager implements KeyboardState {
	private _downKeys: Map<Key, number>;

	constructor() {
		this._downKeys = new Map<Key, number>();
		this.registerEvents();
	}

	private registerEvents(): void {
		document.addEventListener('keydown', this.keyDown);
		document.addEventListener('keyup', this.keyUp);
		document.addEventListener('keypress', this.keyPress);
	}

	private deregisterEvent(): void {
		document.removeEventListener('keydown', this.keyDown);
		document.removeEventListener('keyup', this.keyUp);
		document.removeEventListener('keypress', this.keyPress);
	}

	private keyDown = (event: KeyboardEvent): void => {
		if (!event.repeat) {
			this._downKeys.set(event.keyCode, Date.now());
			PubSub.publish(GlobalEvent.EFTEVENT.eventBuilder(GlobalEvent.EFTEVENT.KEYBOARD, GlobalEvent.EFTEVENT.KEYBOARDEVENT.KEYDOWN, event.key), {});
		}
	}

	private keyUp = (event: KeyboardEvent): void => {
		if (!event.repeat) {
			if (this._downKeys.has(event.keyCode)) {
				const keyDownDuration = Date.now() - this._downKeys.get(event.keyCode)!;
				PubSub.publish(GlobalEvent.EFTEVENT.eventBuilder(GlobalEvent.EFTEVENT.KEYBOARD, GlobalEvent.EFTEVENT.KEYBOARDEVENT.KEYUP, event.key), keyDownDuration);
				this._downKeys.delete(event.keyCode);
			}
		}
	}

	private keyPress = (event: KeyboardEvent): void => {
		if (!event.repeat) {
			PubSub.publish(GlobalEvent.EFTEVENT.eventBuilder(GlobalEvent.EFTEVENT.KEYBOARD, GlobalEvent.EFTEVENT.KEYBOARDEVENT.KEYPRESS, event.key), {});
		}
	}

	public Update(): void {

	}

	// State
	public IsDown = (key: Key | number): boolean => {
		return this._downKeys.has(key);
	}

	public IsHeld = (key: Key | number): boolean => {
		let keyVal = this._downKeys.get(key);
		if (keyVal) return Date.now() - keyVal > 1000;
		return false;
	}
}