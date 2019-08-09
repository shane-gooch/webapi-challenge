const people = [
  {
    id: 1,
    name: "Frodo Baggins",
    chores: [
      {
        id: 1,
        description: "take the ring to Mordor",
        notes: "make your way to Mount Doom",
        assignedTo: 1, // the id of Frodo,
        completed: true
      },
      {
        id: 2,
        description: "destroy the ring",
        notes: "cast the ring into the fire inside Mount Doom",
        assignedTo: 1,
        completed: false
      }
    ]
  },
  {
    id: 2,
    name: "Tuck Tuck",
    chores: [
      {
        id: 1,
        description: "hider",
        notes: " way to Mount Doom",
        assignedTo: 2,
        completed: true
      },
      {
        id: 2,
        description: "destroy ",
        notes: "cast the ring into",
        assignedTo: 2,
        completed: false
      }
    ]
  }
];

module.exports = people;
