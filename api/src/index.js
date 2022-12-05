import * as dotenv from 'dotenv'

import { App } from './app.js'
import { connect } from '../config/db.js'

dotenv.config()

App.listen(80, () => {
  connect(process.env.MONGO_URI)
  console.log('STYC API running on port 80.')
})