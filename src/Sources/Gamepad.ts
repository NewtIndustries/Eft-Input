export class Gamepad {
	private _connectedGamepads: Gamepad.Gamepad[];
	constructor() {
		this._connectedGamepads = [];
		this.registerEvents();
	}
	private registerEvents() {
		window.addEventListener('gamepadconnected', this.gamepadConnected as any, false);
		window.addEventListener('gamepaddisconnected', this.gamepadDisconnected as any, false);
	}

	private deregisterEvents() {
		window.removeEventListener('gamepadconnected', this.gamepadConnected as any);
		window.removeEventListener('gamepaddisconnected', this.gamepadDisconnected as any);
	}
	private gamepadConnected = (event: GamepadEvent): void => {
		this._connectedGamepads.push(event.gamepad);
	}
	private gamepadDisconnected = (event: GamepadEvent): void => {
		// Remove somehow... probably can't use stock array.
	}
}