import { Key } from 'ts-keycode-enum';

export interface KeyboardState {
	IsDown(key: Key | number): boolean;
	IsHeld(key: Key | number): boolean;
}

export class Keyboard implements KeyboardState {
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
			console.log('eft key down event');
			this._downKeys.set(event.keyCode, new Date().getTime());
		}
	}

	private keyUp = (event: KeyboardEvent): void => {
		console.log('eft key up event');
		this._downKeys.delete(event.keyCode);
	}

	private keyPress = (event: KeyboardEvent): void => {
		if (!event.repeat) {
			console.log('eft key press event');
		}
	}

	public Update(): void {

	}

	// State
	public IsDown = (key: Key | number): boolean => {
		return this._downKeys.has(key);
	}

	public IsHeld = (key: Key | number): boolean => {
		// return this._downKeys.has(key) && this._downKeys.get(key)! > 1000;
		let keyVal = this._downKeys.get(key);
		if (keyVal) return Date.now() - keyVal > 1000;
		return false;
	}
}