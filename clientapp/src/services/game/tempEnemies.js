/*
  Stats:

  HP_Base: int
    Starting health amount

  ATK_Base: int
    Base damage amount

  ATK_Elem: string
    Element of attack
    Used for damage calculation regarding resistence/vulnerability

  ATK_Freq: double
    1 attack per X seconds
    e.g. 0.5 == 1 ATK/ 0.5 sec == 2 ATKs/sec

  ATK_Acc: double|string
    Attack Accuracy (hit chance)
    e.g. 0.75 == 75% accuracy && 25% miss chance
    'ALWAYS' == never miss

  DEF_Base: int
    Base defence amount
    Used to decrease the amount of damage taken.

  DEF_Elem_Resist: string[]
    Elements the enemy resists
    Used for damage calculation regarding resistence/vulnerability

  DEF_Elem_Vuln: string[]
    Elements the enemy is vulnerable to
    Used for damage calculation regarding resistence/vulnerability

  DEF_Evade: double|string
    Evasion
    Used to reduce opponent's accuracy to encourage misses
    e.g. 'ALWAYS' == never hit
  
  MAG_Base: int
    Base Magic Attack amount

  MAG_Elem: string
    Element of Magic attack
    Used for damage calculation regarding resistence/vulnerability

  MAG_Acc: double
    Magic Attack Accuracy (hit chance)
    e.g. 0.75 == 75% accuracy && 25% miss chance

  MAG_Cooldown: double
    Magic attack cooldown time
    e.g. 1.5 == 1.5 seconds cooldown until attack can be reused

  Status_Chance: double|string
    Chance of applying element status to opponent
    e.g. 0.6 == 60% of applying a status debuff
    e.g. 'ALWAYS' == always apply
*/

export const TEMP_ENEMIES = [
  {
    Name: 'Slime',
    HP_Base: 70, 
    ATK_Base: 27,
    ATK_Elem: 'WATER',
    ATK_Acc: 0.9, 
    ATK_Freq: 2, 
    DEF_Base: 0,
    DEF_Evade: 0.05,
    DEF_Elem_Resist: [],
    DEF_Elem_Vuln: ['FIRE', 'SLASH'],
    MAG_Base: null,
    MAG_Elem: null,
    MAG_Acc: null,
    MAG_Cooldown: null,
    Status_Chance: null,
    Abilities: []
  },
  {
    Name: 'Goblin',
    HP_Base: 100, 
    ATK_Base: 30,
    ATK_Elem: null,
    ATK_Acc: 0.8, 
    ATK_Freq: 1.2, 
    DEF_Base: 10,
    DEF_Evade: 0.05,
    DEF_Elem_Resist: [],
    DEF_Elem_Vuln: [],
    MAG_Base: null,
    MAG_Elem: null,
    MAG_Acc: null,
    MAG_Cooldown: null,
    Status_Chance: null,
    Abilities: []
  },
  {
    Name: 'Ball of Spikes',
    HP_Base: 150, 
    ATK_Base: null,
    ATK_Elem: null,
    ATK_Acc: null, 
    ATK_Freq: 0, 
    DEF_Base: 10,
    DEF_Evade: 0,
    DEF_Elem_Resist: ['FIRE'],
    DEF_Elem_Vuln: [],
    MAG_Base: null,
    MAG_Elem: null,
    MAG_Acc: null,
    MAG_Cooldown: null,
    Status_Chance: null,
    Abilities: ['REFLECT']
  }
]