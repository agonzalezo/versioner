/* eslint-disable space-before-function-paren */
/* eslint-disable indent */

// Libs
import express from 'express'
import morgan from 'morgan'
import { hostname } from 'os'
import path from 'path'
import { fileURLToPath } from 'url'
import router from './routes/routes.js'
const app = express()

// Settings
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.set('port', process.env.PORT || 3000)
app.set('env', process.env.NODE_ENV || 'production')
app.set('hostname', hostname())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Middlewares
app.use(morgan('short'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(router)

app.listen(app.get('port'), () => {
    console.log(`Server started on http://${app.get('hostname')}:${app.get('port')}`)
})
