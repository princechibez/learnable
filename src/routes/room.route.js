const express = require('express');
const router = express.Router();

const RoomControllers = require('../controllers/room.controller')
const SearchControllers = require('../controllers/search.controller')

// route for getting all room types from the database
router.get('/room-types', RoomControllers.getRoomTypes)

// route for creating room types
router.post('/room-types', RoomControllers.postRoomTypes)

// route for adding a room to the database
router.post('/rooms', RoomControllers.AddRoom)

// route for fetching all rooms from the database
router.get('/rooms', RoomControllers.GetAllRooms)

// route for editing a room in the database
router.patch('/rooms/:roomId', RoomControllers.EditRoom)

// route for deleting a room from the database
router.delete('/rooms/:roomId', RoomControllers.DeleteRoom)

// route for fetching a sinhgle room from the database
router.get('/rooms/:roomId', RoomControllers.GetOneRoom)

module.exports = router;