import * as React from 'react';
import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"

import { refsStore } from "./refs.store"
import { playPauseVideo } from "../../actions/videoPlayerActions"
import { playPause, toggleSmallMode, toogleFullscreen, setVideoTime } from "../../../store/singleMovie/actions"
import { handleVideoShortcuts } from "../../actions/videoActionController"
import { getMovieState } from "../../actions/ReduxActions"

const VideoPlayer = styled.video`
     width: 100%;
     height: 100%;
     overflow: hidden;
`
export interface VPProps {
}

const VP: React.SFC<VPProps> = (props) => {
    const videoRef: any = useRef();
    const movieState: any = useSelector(state => getMovieState(state))
    const dispatch = useDispatch()
    refsStore.Refs[0] = videoRef

    const setTime = (time: number) => {
        dispatch(setVideoTime(time))
    }

    const handleTimeProgress = () => {
        const video = videoRef.current;
        const time = (video.currentTime / video.duration) * 100
        setTime(time)
    };

    const handleKeyDown = (e: any) => {
        let reduxAction;
        const key = e.keyCode
        if (key == 32 || key == 37 || key == 39) {
            reduxAction = () => dispatch(playPause())
        } else if (document.fullscreenElement) {
            reduxAction = () => dispatch(toogleFullscreen())
        }
        handleVideoShortcuts(e, reduxAction, movieState, setTime)
    }

    const handleVideoClick = () => {
        dispatch(playPause())
        playPauseVideo(videoRef.current, movieState.isPaused);
    };


    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown)
        return () => { window.removeEventListener("keydown", handleKeyDown) }
    }, [movieState.isPaused])


    return (
        <VideoPlayer
            ref={videoRef}
            onTimeUpdate={handleTimeProgress}
            onClick={handleVideoClick}
        >
            <source
                src="http://localhost:3300/videos/video"
                type="video/mp4">
            </source>
        </VideoPlayer>
    );
}

export default VP;