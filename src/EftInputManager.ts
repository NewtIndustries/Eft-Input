import { Key } from 'ts-keycode-enum';
import { Keyboard, KeyboardState } from './Sources/Keyboard';

export class EftInputManager {
		private static _instance: EftInputManager;
		public static get Instance() : EftInputManager {
			EftInputManager._instance = EftInputManager._instance || new EftInputManager();
			return EftInputManager._instance;
		}
		private _keyboard: Keyboard;
    // declare var Keyboard: any;
    // declare var Mouse: any;
    // declare var Gamepad: any;
		// declare var Touch: any;
		public get KeyboardState() : KeyboardState {
			return this._keyboard;
		}

		private constructor() {
			this._keyboard = new Keyboard();
			// window.requestAnimationFrame(this.update);
		}
		private update = () => {

		}
    // CONSTANTS


}

