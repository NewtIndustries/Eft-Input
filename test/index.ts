import { EftInputManager } from '../src/EftInputManager';
import * as EventTypes from '../src/Definitions/GlobalEventTypes';
import { EFTEVENT } from '../src/Definitions/GlobalEventTypes';
import { Key } from '../src';

const TestGameEvents = {
	MOVE_FORWARD: 'MOVE.FORWARD'
}

const TestInputEvents = {
	KEY_PRESS_X: new EventTypes.EFTEVENT.EventBuilder(EFTEVENT.KEYBOARD).Add(EFTEVENT.KEYBOARDEVENT.KEYPRESS).Add(Key.X).toString()
}

export class TestClient {
	constructor() {
		var iManager = EftInputManager.Instance;

		// Register Game Events
		iManager.RegisterGameEvent(TestGameEvents.MOVE_FORWARD);
		
		// Register Input Events
		iManager.RegisterInputEvent(TestInputEvents.KEY_PRESS_X);

		// Map Game Events to Input Events
		iManager.MapInputEventToGameEvent(TestInputEvents.KEY_PRESS_X, TestGameEvents.MOVE_FORWARD);

		// Set up handler for Game Event Occurrance
		iManager.Subscribe(TestGameEvents.MOVE_FORWARD, (e) => {
			console.log('In event for Move Forward');
		});
	}
}