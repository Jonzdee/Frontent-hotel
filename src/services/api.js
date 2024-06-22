// src/services/api.js

// Simulated data for rooms
const rooms = [
    {
      id: 1,
      name: 'Single Room',
      description: 'A cozy room for one person.',
      price: 50,
      images: ['https://via.placeholder.com/300']
    },
    {
      id: 2,
      name: 'Double Room',
      description: 'A comfortable room for two people.',
      price: 75,
      images: ['https://via.placeholder.com/300']
    },
    {
      id: 3,
      name: 'Suite',
      description: 'A luxurious suite with all amenities.',
      price: 120,
      images: ['https://via.placeholder.com/300']
    },
  ];
  
  // Simulated API call to get all rooms
  export const getAllRooms = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(rooms);
      }, 1000);
    });
  };
  