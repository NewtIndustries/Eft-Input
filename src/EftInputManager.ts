import { Key } from 'ts-keycode-enum';
import { Keyboard, KeyboardState } from './Sources/Keyboard';
import { Gamepad } from './Sources/Gamepad';

export class EftInputManager {
		private static _instance: EftInputManager;
		public static get Instance() : EftInputManager {
			EftInputManager._instance = EftInputManager._instance || new EftInputManager();
			return EftInputManager._instance;
		}

		private _keyboard: Keyboard;
		private _gamepad: Gamepad;
    // declare var Keyboard: any;
    // declare var Mouse: any;
    // declare var Gamepad: any;
		// declare var Touch: any;
		public get KeyboardState() : KeyboardState {
			return this._keyboard;
		}

		private constructor() {
			this._keyboard = new Keyboard();
			this._gamepad = new Gamepad();
			// window.requestAnimationFrame(this.update);
		}
		private update = () => {

		}
    // CONSTANTS


}

