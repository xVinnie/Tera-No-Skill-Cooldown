const Command = require('command');

module.exports = function noCooldownNoLife(dispatch){
	const command = Command(dispatch);
	let enabled = false; //module disabled by default
	
	command.add('Cooldowns', () => {
		enabled = !enabled;
	});
	
	dispatch.hook('S_START_COOLTIME_SKILL', 1, e=>{ 
		if(enabled){
		e.cooldown=0;return true; 
		}
	});	
}
