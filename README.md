# Eft-Input
Generic Keyboard, Mouse and Gamepad input mapping for browser-based applications.


# Constants

The basic idea of the library is this:

From the back end, you define mappings referencing a source, key and eventName.  The manager then listens for this event to occur and dispatches an eventName'd event out to the exposed interface of the Manager.

From the front side, you define handlers for each eventName to react to any input captured by whatever the active control scheme is.