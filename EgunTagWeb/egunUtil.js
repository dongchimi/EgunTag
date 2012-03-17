var egunUtil = function() {};
egunUtil.StringUtil = function() {};
egunUtil.StringUtil.isEmpty = function(source) {
	if(source == undefined) return true;
	if(source == null) return true;
	if(source.trim().length == 0) return true;

	return false;
};

egunUtil.ArrayUtil = function() {};
egunUtil.ArrayUtil.isEmpty = function(source) {
	if(source == undefined) return true;
	if(source == null) return true;
	if(source.length < 1) return true;

	return false;
};

module.exports = egunUtil;