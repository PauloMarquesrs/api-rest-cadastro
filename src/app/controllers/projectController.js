const express = require('express')
const authMiddleware = require('../middlewares/auth')

const Project = require('../models/Project')
const Task = require('../models/Task')

const router = express.Router()

router.use(authMiddleware)

//list-----------------
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find().populate('user')
 
        return res.send({ projects })

    } catch (err) {
        return res.status(400).send({ error: 'Error loading projects'})
    
    }
})

//show-----------------
router.get('/:projectId', async (req, res) => {
    res.send({ user: req.userId })
})

//create---------------
router.post('/', async (req, res) => {
    try {
        const project = await Project.create({ ...req.body, user: req.userId })

        return res.send({ project })

    } catch (err) {
        return res.status(400).send({ error: 'Error creating new project'})
    }
})

//update---------------
router.put('/:projectId', async (req, res) => {
    res.send({ user: req.userId })
})

//delete---------------
router.delete('/:projectId', async (req, res) => {
    res.send({ user: req.userId})
})

module.exports = app => app.use('/projects', router)
