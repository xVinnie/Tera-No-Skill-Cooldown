module.exports = function noCooldownNoLife(dispatch){
	dispatch.hook('S_START_COOLTIME_SKILL', 1, e=>{ e.cooldown=0;return true; });	
}