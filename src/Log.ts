export class Log {
  private readonly INFOSTYLE: string = 'color: blue;';
	private static _instance: Log;
	public static get Instance(): Log {
		Log._instance = Log._instance || new Log();
		return Log._instance;
	}
	public Info(...messages: string[]) {
		console.group('EFT Input');
		messages.forEach((message) => {
			console.info(`%c${message}`, this.INFOSTYLE);
		});
		console.groupEnd();
	}
}