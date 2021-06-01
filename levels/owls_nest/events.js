const handleMovementTutorial = require('./events/handleMovementTutorial');

// Set up level state management
const STATE_KEY = 'com.twilioquest.owls_nest';
const DEFAULT_STATE = {
  // State for the movement tutorial
  movementSwitches: {
    one: false,
    two: false,
    three: false
  }
};

module.exports = function(event, world) {
  // Load world state
  let worldState = world.getState(STATE_KEY) || DEFAULT_STATE;

  // Process events for the movement tutorial section
  handleMovementTutorial(event, world, worldState);

  // Persist world state across event handler invocations
  world.setState(STATE_KEY, worldState);
};
