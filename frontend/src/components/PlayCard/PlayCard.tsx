import React from 'react';
import { performances } from '../../data/performances';
import PerformanceItem, { PerformanceItemProps } from './PerformanceItem';

export interface PlayCardProps {
    title: string,
    header: string,
    director: string,
    premiere: string,
    length: string,
    mainPhoto: string,
    description: string
}

export function PlayCard({title, header, director, premiere, length, mainPhoto, description}: PlayCardProps) {
  return (
    <div className="play-card">
        <div className="main-play-photo">
            <img className="play-photo" src={mainPhoto} alt="mainPhoto" />
        </div>
        <div className="text">
            <h1>{title}</h1>
            <h2>{header}</h2>
            <div className="info">
                <div className="play-info-titles">
                    <div className="play-info__title">Director</div>
                    <div className="play-info__title">Premiere</div>
                    <div className="play-info__title">Minutes</div>
                </div>
                <div className="play-info-values">
                    <div className="play-info__value">{director}</div>
                    <div className="play-info__value">{premiere}</div>
                    <div className="play-info__value">{length}</div>
                </div>
            </div>
            <div className="description">{description}</div>
            <div className='performance-list'>
                {performances.map((a: PerformanceItemProps) => <PerformanceItem {...a}/> )}
            </div>
        </div>
    </div>
  );
}

export default PlayCard;
