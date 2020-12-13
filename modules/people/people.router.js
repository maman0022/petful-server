const express = require('express')
const json = require('body-parser').json()

const People = require('./people.service')

const router = express.Router()

router.get('/', (req, res) => {
  const people = People.get()
  if (!people) {
    return res.status(404).json({ message: 'There are no people in line' })
  }
  return res.status(200).json(people)
})

router.post('/', json, (req, res) => {
  const person = req.body.name
  if (!person) {
    return res.status(400).json({ message: 'Name is required' })
  }
  People.enqueue(person)
  res.status(201).end()
})

router.delete('/', (req, res) => {
  People.dequeue()
  res.status(204).end()
})

module.exports = router
