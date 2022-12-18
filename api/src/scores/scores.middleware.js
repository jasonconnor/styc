import { check } from 'express-validator'

export const validateNewScore = check(
  [
    'enemiesSlain',
    'totalScore'
  ], 'Invalid request.'
).exists().notEmpty().isNumeric()