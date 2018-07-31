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

		this._gameEventSet = new Collections.Set<string>();
		this._inputEventSet = new Collections.Set<string>();
		this._gameInputEventMap = new Map<string, string>();
		this._inputEventSubscriptionTokens = new Map<string, any>();

		// window.requestAnimationFrame(this.update);
	}
	private Update = () => {
		this._gamepad.Update();
	}

	// #region Should be moved into a more automatic mapping system
	private _gameEventSet: Collections.Set<string>;
	private _inputEventSet: Collections.Set<string>;
	private _gameInputEventMap: Map<string, string>;
	private _inputEventSubscriptionTokens: Map<string, any>;

	public RegisterGameEvent(gameEvent: string) {
		this._gameEventSet.add(gameEvent);
	}

	public RegisterInputEvent(inputEvent: string) {
		this._inputEventSet.add(inputEvent);
	}

	public MapInputEventToGameEvent(inputEvent: string, gameEvent: string) {
		this._gameInputEventMap.set(inputEvent, gameEvent);
		if (this._inputEventSubscriptionTokens.has(inputEvent)) {
			PubSub.unsubscribe(this._inputEventSubscriptionTokens.get(inputEvent));
			this._inputEventSubscriptionTokens.delete(inputEvent);
		}
		var token = PubSub.subscribe(inputEvent, (e: any) => {
			var gameEvent = this._gameInputEventMap.get(inputEvent);
			PubSub.publish(gameEvent, e);
		});
		this._inputEventSubscriptionTokens.set(inputEvent, token);
	}
	// #endregion

	public Subscribe<T = any>(topic: string, callback: (event: IInputEvent<T>) => void): any {
		console.log(`Subscribe to ${topic}`);
		var token = PubSub.subscribe(topic, (msg: string, data: any) => {
			callback(new InputEventOf<T>(msg, data));
		});
		return token;
	}

	public Unsubscribe(token: any): void {
		PubSub.unsubscribe(token);
	}
}

