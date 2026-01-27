/* eslint-disable space-before-function-paren */
/* eslint-disable indent */

// Libs
import { exec } from 'child_process'
import express from 'express'
import os from 'os'
import instanceData from '../helpers/ec2-metadata.js'

const router = express.Router()

// Routes
// Routes
router.get('/load', (req, res) => {
    console.log('Load test started.')
    exec('dd if=/dev/zero bs=50M count=200 | gzip | gzip -d  > /dev/null &', (stderr, stdout) => {
        console.error('Exec Error: ', stderr)
        console.log('Exec Output: ', stdout)
    })
    res.json({ message: 'Load test started.' })
})

router.get('*', async(req, res) => {
    if (req.header('X-Real-IP') && req.header('X-Forwarded-For')) {
        console.log(`X-Real-IP: ${req.header('X-Real-IP')}, X-Forwarded-For: ${req.header('X-Forwarded-For')}`)
    } else {
        console.log(`Request from IP: ${req.ip}`)
    }
    if (os.userInfo().username === 'ec2-user') {
        res.render('versioner', {
            title: 'aws-instance',
            version: process.env.APPVERSION || '2.0.0',
            hostname: await instanceData.getInstanceId(),
            info:
                [
                    {
                        name: 'publicIp', value: await instanceData.getInstancePublicIp()
                    },
                    {
                        name: 'tier', value: await instanceData.getInstanceType()
                    },
                    {
                        name: 'uptime', value: os.uptime()
                    },
                    {
                        name: 'memory', value: os.totalmem()
                    },
                    {
                        name: 'load', value: os.loadavg()
                    }
                ]
        })
    } else {
        res.render('versioner', {
            title: 'Versioner',
            version: process.env.APPVERSION || '2.0.0',
            hostname: os.hostname(),
            info:
                [
                    {
                        name: 'arch', value: os.arch()
                    },
                    {
                        name: 'memory', value: os.totalmem()
                    },
                    {
                        name: 'uptime', value: os.uptime()
                    },
                    {
                        name: 'load', value: os.loadavg()
                    },
                    { name: 'cpu', value: JSON.stringify(os.cpus()[0].model) }
                ]
            //        info: { arch: os.arch(), memory: os.totalmem(), uptime: os.uptime(), load: os.loadavg(), cpu: os.cpus() }
        })
    }
})

// Export
export default router
