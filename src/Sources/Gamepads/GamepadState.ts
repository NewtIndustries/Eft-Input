import { GamepadConstants } from "../../Definitions/GamepadConstants";

export class GamepadState {
	private _downButtons: Map<GamepadButton, number>;
}

// export interface GamepadState {
// 	IsDown(button: GamepadConstants.Buttons): boolean;
// 	IsHeld(button: GamepadConstants.Buttons): boolean;
// 	GetButton(button: GamepadConstants.Buttons): number;
// 	GetAxis(axis: GamepadConstants.Axes): number;
// }