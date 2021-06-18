/**
 * Handle scripting and interaction for the hacking tutorial area. 
 * 
 * @param {LifecycleEvent} event - lifecycle event emitted by TQ
 * @param {WorldAPI} world - TQ World API
 * @param {object} worldState - current game world state (mutate to change)
 */
function handleHackingTutorial(event, world, worldState) {
  if (
    event.name === 'triggerAreaWasEntered' &&
    !worldState.margaretInitialGreeting
  ) {
    // Trigger Margaret conversation, if required
    world.startConversation('margaretDefault', 'margaretNeutral.png');
  }

  const completedObjectives = world.getContext('completedObjectives');
  if (completedObjectives['owls_nest.hacking_tool_objective']) {
    worldState.firstObjectiveHacked = true;
  }
}

module.exports = handleHackingTutorial;
