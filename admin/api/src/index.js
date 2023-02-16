import * as dotenv from 'dotenv'

import { App } from './app.js'
import { connect } from '../config/db.js'

dotenv.config()

App.listen(81, () => {
  connect(process.env.MONGO_URI)
  console.log('STYC Admin API running on port 81.')
})