var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {

	    if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
            creep.say('harvest');
	    }
	    if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.building = true;
	        creep.say('build');
	    }

	    if(creep.memory.building) {
	        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if(targets.length > 0) {
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
	    }
	    else {
            if(creep.carry.energy < creep.carry.carryCapacity) {
                var source = creep.pos.findClosestByRange(FIND_SOURCES);
                if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(source, {visualizePathStyle: {stroke: '#ffaa00'}});
                }
            }
            else {
            var targetsrep = creep.room.find(FIND_STRUCTURES, {
                filter: object => object.hits < object.hitsMax});
                targetsrep.sort((a,b) => a.hits - b.hits);
                if(targetsrep.length > 0) {
                    if(creep.repair(targetsrep[0]) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(targetsrep[0]);
    }
}
            }
	    }
	}
};

module.exports = roleBuilder;