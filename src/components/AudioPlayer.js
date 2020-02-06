import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import './AudioPlayer.scss';

const AudioPlayer = () => {
	const audioRef = useRef(null);
	const currentTrack = useSelector((state) => state.player.current);
	useEffect(() => {
		if (currentTrack && currentTrack.previewUrl) {
			audioRef.current.play();
		}
	}, [currentTrack]);
	return (
		<audio
			className="AudioPlayer"
			controls
			autoPlay
			src={currentTrack && currentTrack.previewUrl}
			ref={audioRef}
		>
			Your browser does not support the
			<code>audio</code> element.
		</audio>
	);
};

export default AudioPlayer;
