export interface IInputEvent<T = any> {
	readonly Topic: string;
	readonly Data: T;
}

export class InputEvent implements IInputEvent {
		protected _topic: string;
		protected _data: any;
		
		public get Topic(): string {
			return this._topic;
		}
		public get Data(): any {
			return this._data;
		}
		constructor(name: string, data: any) {
			this._topic = name;
			this._data = data;
		}
}

export class InputEventOf<T> extends InputEvent implements IInputEvent<T> {
	public get Data(): T {
		return <T>this._data;
	}
}