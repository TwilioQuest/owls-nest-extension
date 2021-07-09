const handleMovementTutorial = require('./events/handleMovementTutorial');
const handleHackingTutorial = require('./events/handleHackingTutorial');
const handleFredric = require('./events/handleFredric');

// Set up level state
const STATE_KEY = 'com.twilioquest.owls_nest';
const DEFAULT_STATE = {
  // Movement tutorial state
  movementSwitch: false,
  chiaraInitialGreeting: false,

  // hacking tutorial state
  hackingToolAcquired: false,
  firstObjectiveHacked: false,
  margaretInitialGreeting: false,
};

module.exports = function(event, world) {
  // Load world state
  let worldState = world.getState(STATE_KEY) || DEFAULT_STATE;

  // Process events for the movement tutorial section
  handleMovementTutorial(event, world, worldState);

  // Process events for the hacking tool sequence
  handleHackingTutorial(event, world, worldState);

  // Set up the Fredric ambush
  handleFredric(event, world, worldState);

  //world.setCurrentGoal('Seymour Butts!');

  // Persist world state across event handler invocations
  world.setState(STATE_KEY, worldState);
};
