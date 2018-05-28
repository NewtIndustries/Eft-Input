import { Key } from 'ts-keycode-enum';
import { Keyboard, KeyboardState, Gamepad, Mouse, Touch } from './Sources';
import * as PubSub from 'pubsub-js';
import { InputEvent } from './Events/InputEvent';

export class EftInputManager {
	private static _instance: EftInputManager;
	public static get Instance(): EftInputManager {
		EftInputManager._instance = EftInputManager._instance || new EftInputManager();
		return EftInputManager._instance;
	}

	private _keyboard: Keyboard;
	private _gamepad: Gamepad;
	private _mouse: Mouse;
	private _touch: Touch;

	public get KeyboardState(): KeyboardState {
		return this._keyboard;
	}

	private constructor() {
		this._keyboard = new Keyboard();
		this._gamepad = new Gamepad();
		this._mouse = new Mouse();
		this._touch = new Touch();
		// window.requestAnimationFrame(this.update);
	}
	private update = () => {

	}

	public Subscribe(topic: string, callback: (e: InputEvent) => void): any{
		var token = PubSub.subscribe(topic, (msg: string, data: any) => {
			callback(new InputEvent(msg, data));
		});
		return token;
	}
	public Unsubscribe(token: any): void {
		PubSub.unsubscribe(token);
	}
}

