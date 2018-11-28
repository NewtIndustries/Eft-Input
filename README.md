# Eft-Input
Generic Keyboard, Mouse and Gamepad input mapping for browser-based applications.


# Constants

The basic idea of the library is this:

From the back end, you define mappings referencing a source, key and eventName.  The manager then listens for this event to occur and dispatches an eventName'd event out to the exposed interface of the Manager.

From the front side, you define handlers for each eventName to react to any input captured by whatever the active control scheme is.


- End user registers GameEvents that the game will respond to directly.   From their perspective, for the rest of the game, they only respond to GameEvents and don't actually do any input management at all.
- End user provides a map of InputEvents to GameEvents.   Multiple input events can be provided for each GameEvent.  Can multiple game events be associated with an input event?  Probably, err on the side of permissiveness but probably toss a warning at that point.

- Eft Input takes all provided input events and registers handlers for the appropriate input.  In those handlers, the InputManager will iterate through registered InputEvents and map to the appropriate game event and dispatch that.  

- Perhaps a useful source for some logic https://github.com/victorysoftworks/standard-gamepad-typescript
