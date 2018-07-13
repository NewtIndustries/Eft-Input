import { Key } from 'ts-keycode-enum';
import { KeyboardManager, KeyboardState, GamepadManager, MouseManager, TouchManager } from './Sources';
import * as PubSub from 'pubsub-js';
import { IInputEvent, InputEvent, InputEventOf } from './Events/InputEvent';
import { Log } from './Log';
import { GameEvent } from './Events/GameEvent';
import * as Collections from 'typescript-collections';

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

		this._gameEventSet = new Collections.Set<GameEvent>();
		this._inputEventSet = new Collections.Set<InputEvent>();
		this._gameInputEventMap = new Map<InputEvent, GameEvent>();
		// window.requestAnimationFrame(this.update);
	}
	private Update = () => {
		this._gamepad.Update();
	}

	// #region Should be moved into a more automatic mapping system
	private _gameEventSet: Collections.Set<GameEvent>;
	private _inputEventSet: Collections.Set<InputEvent>;
	private _gameInputEventMap: Map<InputEvent, GameEvent>;

	public RegisterGameEvent(gameEvent: GameEvent) {
		
	}

	public RegisterInputEvent(inputEvent: InputEvent) {

	}

	public MapGameEventToInputEvent(inputEvent: InputEvent, gameEvent: GameEvent) {

	}
	// #endregion

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

