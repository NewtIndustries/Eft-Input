export class GamepadButton {
	public Value: number;
	public Pressed: boolean;
	constructor(button: Gamepad.GamepadButton) {
		this.Value = button.value;
		this.Pressed = button.pressed;
	}
}