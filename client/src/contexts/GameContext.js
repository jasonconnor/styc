import React, { createContext, useContext, useState } from 'react';

const GameStats = createContext();
const GameStatsUpdate = createContext();

const defaultStats = {
    enemiesDefeated: 0,
    gold: 0,
    potions: 0,
    potionPotency: 150,
    health: 10,
    healthMax: 10,
    strength: 5,
    dexterity: 5,
    luck: 1,
}

let newStats = null;

export function useGameStats() {
    return useContext(GameStats);
}

export function useGameStatsUpdate(stats) {
    newStats = stats;
    return useContext(GameStatsUpdate);
}

export function GameStatsProvider({children}) {
    const [gameStats, setGameStats] = useState(defaultStats);

    function updateStats() {
        console.log(newStats);

        let result = {...gameStats};
        console.log(result);
        
        for (const property in newStats) {
            result[property] += newStats[property];         
        }
        
        console.log(result);
        setGameStats(result);
    }

    return (
        <GameStats.Provider value={gameStats}>
            <GameStatsUpdate.Provider
                value={updateStats}>
                {children}
            </GameStatsUpdate.Provider>
        </GameStats.Provider>
    );
}