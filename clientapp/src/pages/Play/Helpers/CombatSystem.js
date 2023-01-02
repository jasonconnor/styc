import { TEMP_ENEMIES } from "../../../services/game/tempEnemies"

// This would probably come from the API
export let baseEnemies = [...TEMP_ENEMIES]

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
  const damageToTarget = calculateDamage(source, target, attackType)
  setTargetCallback(target => {
    return {
      ...target,
      HP_Current: target.HP_Current - damageToTarget
    }  
  })

  if (target.Abilities.some(abil => abil === 'REFLECT')) {
    setSourceCallback(source => {
      return {
        ...source,
        HP_Current: source.HP_Current - 10
      }
    })
  }

  if (source.Abilities.some(abil => abil === 'LIFELINK')) {
    setSourceCallback(source => {
      return {
        ...source,
        HP_Current: source.HP_Current + (damageToTarget * 0.3)
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
  console.log("damage",sourceDamage)
  return sourceDamage
}