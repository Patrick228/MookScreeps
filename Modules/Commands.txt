//This is just for saving any console Commands that are likely to be re-used a lot. Ideally all this will be automated in future.

//Spawn Harvester
Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], 'Harvester1', {memory: {role: 'harvester'}})
//Spawn Builder
Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], 'Builder1', {memory: {role: 'builder'}})
//Spawn Upgrader
Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], 'Upgrader1', {memory: {role: 'upgrader'}})