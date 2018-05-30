// https://github.com/photonstorm/phaser/tree/master/src/input/gamepad/configs
export namespace GamepadConstants {
	export enum Buttons {
		SELECT,
		START,
		MENU,
		FACE1,
		FACE2,
		FACE3,
		FACE4,
		LEFT_BUMPER,
		LEFT_TRIGGER,
		RIGHT_BUMPER,
		RIGHT_TRIGGER,
		LEFT_STICK,
		RIGHT_STICK,
		DPAD_UP,
		DPAD_DOWN,
		DPAD_LEFT,
		DPAD_RIGHT
	}
	export enum Axes {
		LEFT_VERTICAL,
		LEFT_HORIZONTAL,
		RIGHT_VERTICAL,
		RIGHT_HORIZONTAL
	}
	export namespace XBox360 {
		export namespace Buttons {
			export const UP = GamepadConstants.Buttons.DPAD_UP;
			export const DOWN = GamepadConstants.Buttons.DPAD_DOWN;
			export const LEFT = GamepadConstants.Buttons.DPAD_LEFT;
			export const RIGHT = GamepadConstants.Buttons.DPAD_RIGHT;

			export const MENU = GamepadConstants.Buttons.MENU;
			export const BACK = GamepadConstants.Buttons.SELECT;
			export const START = GamepadConstants.Buttons.START;

			export const A = GamepadConstants.Buttons.FACE1;
			export const B = GamepadConstants.Buttons.FACE2;
			export const X = GamepadConstants.Buttons.FACE3;
			export const Y = GamepadConstants.Buttons.FACE4;

			export const LB = GamepadConstants.Buttons.LEFT_BUMPER;
			export const LT = GamepadConstants.Buttons.LEFT_TRIGGER;
			export const RB = GamepadConstants.Buttons.RIGHT_BUMPER;
			export const RT = GamepadConstants.Buttons.RIGHT_TRIGGER;

			export const LEFT_STICK_PRESS = GamepadConstants.Buttons.LEFT_STICK;
			export const RIGHT_STICK_PRESS = GamepadConstants.Buttons.RIGHT_STICK;
		}
		export const Axes = GamepadConstants.Axes;
	}
	export namespace PS4 {
		export namespace Buttons {
			export const UP = GamepadConstants.Buttons.DPAD_UP;
			export const DOWN = GamepadConstants.Buttons.DPAD_DOWN;
			export const LEFT = GamepadConstants.Buttons.DPAD_LEFT;
			export const RIGHT = GamepadConstants.Buttons.DPAD_RIGHT;

			// export const MENU = GamepadConstants.Buttons.MENU;
			export const TOUCH_PAD = GamepadConstants.Buttons.SELECT;
			export const OPTIONS = GamepadConstants.Buttons.START;

			export const CROSS = GamepadConstants.Buttons.FACE1;
			export const CIRCLE = GamepadConstants.Buttons.FACE2;
			export const SQUARE = GamepadConstants.Buttons.FACE3;
			export const TRIANGLE = GamepadConstants.Buttons.FACE4;

			export const LB = GamepadConstants.Buttons.LEFT_BUMPER;
			export const LT = GamepadConstants.Buttons.LEFT_TRIGGER;
			export const RB = GamepadConstants.Buttons.RIGHT_BUMPER;
			export const RT = GamepadConstants.Buttons.RIGHT_TRIGGER;

			export const LEFT_STICK_PRESS = GamepadConstants.Buttons.LEFT_STICK;
			export const RIGHT_STICK_PRESS = GamepadConstants.Buttons.RIGHT_STICK;
		}
		export const Axes = GamepadConstants.Axes;
	}
}