var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.carry.energy < creep.carry.carryCapacity) {
            var spawn = Game.spawns['Spawn1']
            var sites = creep.room.find(FIND_CONSTRUCTION_SITES);
            if(creep.withdraw(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.say('OOR')
                creep.moveTo(Game.spawns['Spawn1']);
            }
        }
        else {
            if(creep.build(sites) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sites);
            }
        }
        if(creep.carry.energy == creep.carryCapacity) {
            creep.say('Energy Full')
            creep.moveTo(Game.spawns['Spawn1']);
        }
    }
};

module.exports = roleBuilder;