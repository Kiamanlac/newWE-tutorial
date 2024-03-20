const express = require('express')
const {
    readShoppingListOf,
    saveShoppingListFor,
    updateShoppingListFor,
    removeShoppingListEntryFor,
} = require('fs-json')
// Übung 12 Kap 3

router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    res.send(`Shopping list for User ${id}: ${readShoppingListOf(id)}`)
})

router.post('/', (req, res, next) => {
    const { id, list } = req.body
    saveShoppingListFor(id, list)
    res.send(`Saved new shopping list for User ${id} successfully!🤷‍♂️🤷‍♂️🤷‍♂️`)
})

router.put('/', (req, res, next) => {
    const { id, list } = req.body
    updateShoppingListFor(id, list);
    res.send(`Updated shopping list for User ${id} successfully!🤦‍♂️🤦‍♂️🤦‍♂️`)
})

router.delete('/:id', (req, res, next) => {
    const { id } = req.params
    removeShoppingListEntryFor(id);
    res.send(`Deleted shopping list for User ${id} successfully!🐱‍👤🐱‍👤🐱‍👤`)
})

router.delete('/:id/:entry', (req, res, next) => {
    const { id, entry } = req.params
    removeShoppingListEntryFor(id, entry);
    res.send(`Removed ${entry} from User ${id}'s shopping list successfully!`)
})

module.exports = router