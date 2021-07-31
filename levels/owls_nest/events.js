const handleMovementTutorial = require('./events/handleMovementTutorial');
const handleHackingTutorial = require('./events/handleHackingTutorial');
const handleFredric = require('./events/handleFredric');
const handleOverride = require('./events/handleOverride');
const updateQuestStatus = require('./events/updateQuestStatus');

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

  // handle scripting for the code override components of the story
  handleOverride(event, world, worldState);

  // Update current quest status text if needed
  updateQuestStatus(event, world, worldState);

  // Go to victory map if necessary
  if (
    event.name === 'mapDidLoad' && 
    worldState.missionComplete &&
    event.mapName !== 'victory'
  ) {
    window.warp('owls_nest', 'player_entry1', 'victory');
  }

  // Initiate victory conversation when appropriate
  if (
    event.name === 'mapDidLoad' && 
    worldState.missionComplete &&
    event.mapName === 'victory'
  ) {
    world.startConversation('kevinVictoryInitial', 'kevinNeutral.png', 500);
  }

  // Persist world state across event handler invocations
  world.setState(STATE_KEY, worldState);
};
