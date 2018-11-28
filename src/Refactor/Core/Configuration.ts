export interface IConfiguration {
	Name: string;

	load(): any;
	save(): any;
}
export class Configuration implements IConfiguration {
	private _name: string;

	constructor(name: string) {
		this._name = name;
	}

	public get Name(): string {
		return this._name;
	}
	public set Name(value: string) {
		this._name = value;
	}

	public load() {

	}

	public save() {
		
	}


}