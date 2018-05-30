import { GamepadConstants } from "../../Definitions/GamepadConstants";

export class GamepadState {
	private _downButtons: Map<GamepadButton, number>;
	constructor() {
		this._downButtons = new Map<GamepadButton, number>();
	}
	public Update(): void {
		
	}
}

// export interface GamepadState {
// 	IsDown(button: GamepadConstants.Buttons): boolean;
// 	IsHeld(button: GamepadConstants.Buttons): boolean;
// 	GetButton(button: GamepadConstants.Buttons): number;
// 	GetAxis(axis: GamepadConstants.Axes): number;
// }