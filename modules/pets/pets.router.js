const express = require('express')
const json = require('body-parser').json()

const Pets = require('./pets.service')
const People = require('../people/people.service')

const router = express.Router()

router.get('/', (req, res) => {
  const pets = Pets.get()
  res.status(200).json(pets)
})

router.delete('/', json, (req, res) => {
  const { type } = req.body
  if (!type || (type !== 'cats' && type !== 'dogs')) {
    return res.status(400).json({ message: 'Type is required and must be either "dogs" or "cats".' })
  }
  Pets.dequeue(type)
  res.status(204).end()
})

module.exports = router
