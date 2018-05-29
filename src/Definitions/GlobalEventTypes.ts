export namespace EFTEVENT {
	export const KEYBOARD = "KEYBOARD";
	export namespace KEYBORDEVENT {
		export const KEYDOWN = 'KEYDOWN';
		export const KEYUP = 'KEYUP';
		export const KEYPRESS = 'KEYPRESS';
	}
	// export namespace KEYBOARD {
		
	// }
	// export namespace MOUSE {

	// }
	// export namespace TOUCH {

	// }
	// export namespace GAMEPAD {

	// }
	export class EventBuilder {
		private _values: string[];
		constructor(...initialValues: string[]) {
			this._values = initialValues || [];
		}
		public Add = (value: string | number): EventBuilder => {
			this._values.push(value.toString());
			return this;
		}
		public toString = (): string => {
			return this._values.join('.');
		}
	}
}