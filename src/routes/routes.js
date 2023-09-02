/* eslint-disable space-before-function-paren */
/* eslint-disable indent */

// Libs
import express from 'express'
import os from 'os'
const router = express.Router()

// Routes
router.get('/', (req, res) => {
    res.render('versioner', {
        title: 'Versioner',
        version: '1.0.0',
        hostname: os.hostname(),
        info: { arch: os.arch(), memory: os.totalmem(), uptime: os.uptime(), load: os.loadavg(), cpu: os.cpus() }
    })
})

// Export
export default router
