/**
 * Handle scripting and interaction for the movement tutorial area. 
 * 
 * @param {LifecycleEvent} event - lifecycle event emitted by TQ
 * @param {WorldAPI} world - TQ World API
 * @param {object} worldState - current game world state (mutate to change)
 */
function handleOverride(event, world, worldState) {
  // Hide the helper arrow once the fire extinguisher objective has been
  // opened once
  if (
    event.name === 'objectiveDidOpen' && 
    event.target.objectiveName === 'fire_extinguisher_objective'
  ) {
    worldState.chestFound = true;
  }

  // Render appropriate state
  if (worldState.chestFound) {
    world.hideEntities('floating_arrow_chest');
  }

  if (worldState.ryanSaved) {
    world.showEntities('floating_arrow_controls');
  } else {
    world.hideEntities('floating_arrow_controls');
  }
}

module.exports = handleOverride;
