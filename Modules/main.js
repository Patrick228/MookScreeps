const profiler = require('screeps-profiler');

var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

profiler.enable();

module.exports.loop = function () {
    profiler.wrap(function(){
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    console.log('Upgraders: ' + upgraders.length);
    if(upgraders.length < 5) {
        var newNameU = 'Upgrader' + Game.time;
        console.log('Spawning new upgrader: ' + newNameU);
        Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], newNameU,
            {memory: {role: 'upgrader'}});
    }
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    console.log('Builders: ' + builders.length);
    if(builders.length < 3) {
        var newNameB = 'Builder' + Game.time;
        console.log('Spawning new builder: ' + newNameB);
        Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], newNameB,
            {memory: {role: 'builder'}});
    }

    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    console.log('Harvesters: ' + harvesters.length);
    if(harvesters.length < 6) {
        var newNameH = 'Harvester' + Game.time;
        console.log('Spawning new harvester: ' + newNameH);
        Game.spawns['Spawn1'].spawnCreep([WORK, CARRY,  MOVE], newNameH,
            {memory: {role: 'harvester'}});
    }
        if(Game.spawns['Spawn1'].spawning) { 
        var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
        Game.spawns['Spawn1'].room.visual.text(
            'Spawn' + spawningCreep.memory.role,
            Game.spawns['Spawn1'].pos.x + 1, 
            Game.spawns['Spawn1'].pos.y, 
            {align: 'left', opacity: 0.8});
        }
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
});
}