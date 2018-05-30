import { Log } from '../Log';
import { GamepadConstants } from '../Definitions/GamepadConstants';
import { GamepadInstance } from './Gamepads/GamepadInstance';

export class GamepadManager {
	private _connectedGamepads: Map<number, GamepadInstance>;
	
	constructor() {
		this._connectedGamepads = new Map<number, GamepadInstance>();
		this.registerEvents();
	}

	public Update(): void {
		this._connectedGamepads.forEach((v, k, m): void => {
			v.Update();
		}, this);
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
		Log.Instance.Info(
			`Gamepad connected at index ${event.gamepad.index} with id ${event.gamepad.id}`,
			`Axes ${event.gamepad.axes.length}`,
			`Buttons ${event.gamepad.buttons.length}`,
			`Mapping ${event.gamepad.mapping}`
		);
		this._connectedGamepads.set(event.gamepad.index, new GamepadInstance(event.gamepad));
	}
	private gamepadDisconnected = (event: GamepadEvent): void => {
		Log.Instance.Info(`Gamepad disconnected at index ${event.gamepad.index} with id ${event.gamepad.id}.`);
		this._connectedGamepads.delete(event.gamepad.index);
	}
	private attachToGamepad(gamepad: Gamepad.Gamepad): void {
		Log.Instance.Info(`Mapping events for gamepad at index ${gamepad.index} with id ${gamepad.id}.`);
	}
}