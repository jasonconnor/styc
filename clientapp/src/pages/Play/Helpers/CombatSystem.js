// Cooldown timeout timers
export let playerMainCooldown = null
export let playerMagicCooldown = null

/**
 * Initialize a creature.
 * @param {object} creature 
 * @returns A fully initialized creature object.
*/
export const initiateCreature = (creature) => {
  return {
    ...creature,
    HP_Current: creature.HP_Base
  }
}

// Interval timers
let enemyAttackInterval = null

/**
 * Called to start the enemy attack interval.
 * @param {creature} enemy The enemy
 * @param {creature} player The player
 * @param {function} setEnemyCallback The callback function to update the enemy
 * @param {function} setPlayerCallback The callback function to update the player
 */
export const initializeEnemyAttackInterval = (
  enemy, 
  player, 
  setEnemyCallback, 
  setPlayerCallback
) => {
  enemyAttackInterval = setInterval(() => {
    executeAttack(enemy, player, setEnemyCallback, setPlayerCallback)
  }, enemy.ATK_Freq * 1000)
}

/**
 * Called to stop the enemy attack interval.
 */
export const clearEnemyAttackInterval = () => {
  clearInterval(enemyAttackInterval)
}

/**
 * Called to execute the calculations of an attack between a
 * source creature and a target creature.
 * @param {creature} source The creature making the attack
 * @param {creature} target The target of the attack
 * @param {function} setSourceCallback The callback function to update the source creature
 * @param {function} setTargetCallback The callback function to update the target creature
 * @param {string} attackType The type of attack executed
 */
export const executeAttack = (
  source, 
  target, 
  setSourceCallback, 
  setTargetCallback, 
  attackType = 'MAIN'
) => {
  // Calculate damage dealt
  const damageToTarget = calculateDamage(source, target, attackType)
  setTargetCallback(target => {
    let resultingHP = target.HP_Current - damageToTarget
    if (resultingHP < 0)
      resultingHP = 0

    return {
      ...target,
      HP_Current: resultingHP
    }  
  })

  // Calculate recoil damage
  if (target.Abilities.some(abil => abil === 'REFLECT')) {
    setSourceCallback(source => {
      let resultingHP = source.HP_Current - 10
      if (resultingHP < 0)
        resultingHP = 0

      return {
        ...source,
        HP_Current: resultingHP
      }
    })
  }

  // Calculate hp drain
  if (source.Abilities.some(abil => abil === 'LIFELINK')) {
    setSourceCallback(source => {
      let resultingHP = source.HP_Current + (damageToTarget * 0.3)
      if (resultingHP > source.HP_Base)
        resultingHP = source.HP_Base

      return {
        ...source,
        HP_Current: resultingHP
      }
    })
  }
}

/**
 * Calculate the damage to be dealt to the target
 * @param {creature} source The creature making the attack
 * @param {creature} target The target of the attack
 * @param {string} attackType The type of attack executed
 * @returns The amount of damage to apply to the 
 */
const calculateDamage = (source, target, attackType) => {
  let isDealingCrit = false,
    sourceDamage = 0,
    sourceAcc,
    sourceElem

  // Determine which stats to use based on attack type
  switch (attackType) {
    case 'MAIN':
      sourceDamage = source.ATK_Base
      sourceElem = source.ATK_Elem
      sourceAcc = source.ATK_Acc
      break
    case 'MAGIC':
      sourceDamage = source.MAG_Base
      sourceElem = source.MAG_Elem
      sourceAcc = source.MAG_Acc
      break
    default:
      break
  }

  // roll for accuracy
  const attackRoll = Math.random() + target.DEF_Evade
  if (attackRoll > sourceAcc) return 0

  isDealingCrit = attackRoll <= 0.05
  
  // apply modifiers
  if (isDealingCrit) sourceDamage *= 2

  // vulnerability calculate
  const isTargetVulnerable = target.DEF_Elem_Vuln.some(targetElement => targetElement === sourceElem)
  if (isTargetVulnerable) sourceDamage = sourceDamage * 1.25

  const targetIsResistent = target.DEF_Elem_Resist.some(elem => elem === sourceElem)
  
  // Resistance take priority over damage reduction
  if (targetIsResistent) sourceDamage *= 0.75 
  if (!targetIsResistent) sourceDamage -= target.DEF_Base

  // return damage amount
  return sourceDamage
}