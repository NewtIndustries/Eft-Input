export class InputEvent {
		private _subscriptionName: string;
		private _data: any;
		
		public get Topic(): string {
			return this._subscriptionName;
		}
		public get Data(): any {
			return this._data;
		}
		constructor(name: string, data: any) {
			this._subscriptionName = name;
			this._data = data;
		}
}