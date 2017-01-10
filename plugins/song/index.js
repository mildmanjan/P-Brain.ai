var yt = require('../../youtube');

function * song_resp(query){

	query = query.replace('play', '');

	var track = query.split('by')[0].trim();
	var artist = query.split('by')[1];

	if (!artist || artist == ''){
		artist = '';
	} else {
		artist = artist.trim();
	}

	var url = yt.get(track, artist);

	return url;
}

module.exports = {
	get: song_resp
}