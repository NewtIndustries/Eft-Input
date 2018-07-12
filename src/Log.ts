export class Log {
	private readonly INFOSTYLE: string = 'color: blue;';
	private readonly WARNINGSTYLE: string = 'color: yellow';
	private readonly ERRORSTYLE: string = 'color: red';
	private static _instance: Log;
	public static get Instance(): Log {
		Log._instance = Log._instance || new Log();
		return Log._instance;
	}
	private sendConsole(message: string, style: string) {
		console.info(`%c${message}`, style);
	}
	public Info(...messages: string[]) {
		console.group('EFT Input');
		messages.forEach((message) => {
			this.sendConsole(message, this.INFOSTYLE);
			// console.info(`%c${message}`, this.INFOSTYLE);
		});
		console.groupEnd();
	}
	public Warn(...messages: string[]) {
		console.group('EFT Input');
		messages.forEach((message) => {
			this.sendConsole(message, this.WARNINGSTYLE);
		});
	}
	public Error(...messages: string[]) {
		console.group('EFT Input');
		messages.forEach((message) => {
			this.sendConsole(message, this.ERRORSTYLE);
		});
	}
}