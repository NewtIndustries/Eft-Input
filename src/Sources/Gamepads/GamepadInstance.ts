import { GamepadState } from "./GamepadState";

export class GamepadInstance {
	private _nativeGamepad: Gamepad;
	private _state: GamepadState;
	constructor(gamepad: Gamepad) {
		this._nativeGamepad = gamepad;
		this._state = new GamepadState();
	}
	public Update(): void {
		this._state.Update();
	}
}