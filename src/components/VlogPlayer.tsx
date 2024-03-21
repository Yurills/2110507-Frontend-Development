'use client'
import { useRef, useEffect, useState } from 'react';
import { useWindowListener } from '@/hooks/useWindowListener';

export function VlogPlayer( {videoSrc, isPlaying}: {videoSrc: string, isPlaying: boolean}) {

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (isPlaying) {
            videoRef.current?.play();
        }
        else {
            videoRef.current?.pause();
        }
    }, [isPlaying])

    useWindowListener( "resize" , (e) => {alert('window width is '+ (e.target as Window).innerWidth)});
    

    return (
        <video className="w-[40%]" src={videoSrc} ref={videoRef} controls loop muted/>
    )
}