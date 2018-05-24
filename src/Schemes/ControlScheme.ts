import { ControlMap } from './ControlMap';
import { ControlSchemeConfig } from './ControlSchemeConfig';
export class ControlScheme {
	private _controlMap: ControlMap[];
	constructor() {
		this._controlMap = [];
	}

	// Factories
	public static FromJson(json: string) : ControlScheme {
		return new ControlScheme();
	}
}