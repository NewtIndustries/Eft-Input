import { Key } from 'ts-keycode-enum';
import { KeyboardManager, KeyboardState, GamepadManager, MouseManager, TouchManager } from './Sources';
import * as PubSub from 'pubsub-js';
import { IInputEvent, InputEventOf } from './Events/InputEvent';
import { Log } from './Log';

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

	private _log: Log;

	public get KeyboardState(): KeyboardState {
		return this._keyboard;
	}
	public get Log(): Log {
		return this._log;
	}

	private constructor() {
		this._log = new Log();
		this._keyboard = new KeyboardManager();
		this._gamepad = new GamepadManager();
		this._mouse = new MouseManager();
		this._touch = new TouchManager();
		// window.requestAnimationFrame(this.update);
	}
	private Update = () => {
		this._gamepad.Update();
	}

	public Bind(gameEventConstant: string, handler: Function) {

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

