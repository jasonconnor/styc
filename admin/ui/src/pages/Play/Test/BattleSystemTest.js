import { Button, Stack } from "@mui/material";
import { useEffect, useState } from "react"
import { baseEnemies, executeAttack, initiateCreature } from "../../../services/game/combat.svc";

const initialPlayerStats = {
  HP_Base: 200, 
  ATK_Base: 30,
  ATK_Elem: [],
  ATK_Acc: 0.9, 
  ATK_Freq: 0.33, 
  DEF_Base: 20,
  DEF_Evade: 0.05,
  DEF_Elem_Resist: [],
  DEF_Elem_Vuln: ['WATER'],
  MAG_Base: 50,
  MAG_Elem: 'FIRE',
  MAG_Acc: 0.9,
  MAG_Cooldown: 2,
  Status_Chance: 0.2,
  Abilities: ['LIFELINK']
}

let playerMainCooldown = null
let playerMagicCooldown = null

/**
 * 
 * @returns 
 */
const BattleSystemTest = () => {

  // State
  const [gameState, setGameState] = useState(0)
  const [player, updatePlayer] = useState(initiateCreature(initialPlayerStats))
  const [enemy, updateEnemy] = useState(null)

  const resetTimers = () => {
    clearInterval(enemyAttackTimer)
    clearTimeout(playerMainCooldown)
    clearTimeout(playerMagicCooldown)
  }

  useEffect(() => {
    if (player.HP_Current <= 0) resetTimers();
  },
  [player.HP_Current])

  useEffect(() => {
    if (!enemy) return

    enemyAttackTimer = setInterval(() => {
      executeAttack(enemy, player, updateEnemy, updatePlayer)
    }, enemy.ATK_Freq * 1000)
    
    setGameState(1)
  }, [enemy])

  return (<div className='game-container'>
    {gameState === 0 &&
    <EnemySelection 
      updateEnemy={updateEnemy}
    />
    }

    {gameState === 1 && 
    <CombatTime 
      enemy={enemy}
      player={player}
    />
    }
  </div>)
}

/**
 * 
 * @param {} updateEnemy 
 * @returns 
 */
const EnemySelection = ({
  updateEnemy
}) => {
  const handleInitEnemy = () => {
    const randomIndex = Math.floor(Math.random() * baseEnemies.length)
    updateEnemy(initiateCreature(baseEnemies[0]))
  }

  return (<Stack>
    <Button variant="contained" onClick={handleInitEnemy}>Start Combat</Button>
  </Stack>)
}

let enemyAttackTimer = null

const CombatTime = ({
  enemy,
  player
}) => {
  return (<div>
    <div>
      <span>{enemy.Name} Health: </span>
      <span>{enemy.HP_Current} / {enemy.HP_Base}</span>
    </div>
    <div>
      <span>Player Health: </span>
      <span>{player.HP_Current} / {player.HP_Base}</span>
    </div>
  </div>)
}

export default BattleSystemTest