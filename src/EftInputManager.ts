import { Key } from 'ts-keycode-enum';
import { KeyboardManager, KeyboardState, GamepadManager, MouseManager, TouchManager } from './Sources';
import * as PubSub from 'pubsub-js';
import { IInputEvent, InputEventOf } from './Events/InputEvent';

export class EftInputManager {
	private static _instance: EftInputManager;
	public static get Instance(): EftInputManager {
		EftInputManager._instance = EftInputManager._instance || new EftInputManager();
		return EftInputManager._instance;
	}

	private _keyboard: KeyboardManager;
	private _gamepad: GamepadManager;
	private _mouse: MouseManager;
	private _touch: TouchManager;

	public get KeyboardState(): KeyboardState {
		return this._keyboard;
	}

	private constructor() {
		this._keyboard = new KeyboardManager();
		this._gamepad = new GamepadManager();
		this._mouse = new MouseManager();
		this._touch = new TouchManager();
		// window.requestAnimationFrame(this.update);
	}
	private Update = () => {
		this._gamepad.Update();
	}
	
	public Subscribe<T = any>(topic: string, callback: (event: IInputEvent<T>) => void): any {
		var token = PubSub.subscribe(topic, (msg: string, data: any) => {
			callback(new InputEventOf<T>(msg, data));
		});
		return token;
	}

	public Unsubscribe(token: any): void {
		PubSub.unsubscribe(token);
	}
}

