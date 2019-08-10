const express = require("express");
require("dotenv").config();
const People = require("./data/people.js");
// const ChoresRouter = require("./chores/chores-router.js");

const server = express();

server.use(express.json());

// server.use(("/api/people", ChoresRouter));

server.get("/", (req, res) => {
  res.status(200).json({ environment: process.env.environment });
});

server.get("/api/people/:peopleid/chores", (req, res) => {
  const { peopleid } = req.params;

  People.map(person => {
    if (person.id.toString() === peopleid) {
      return res.status(200).json(person.chores);
    }
  });
  res.status(500).json({ message: "The chore does not exist" });
  //   People.map(person => {
  //     if (person.id.toString() !== peopleid) {
  //       return res.status(500).json();
  //     }
  //   });
});

server.delete("/api/people/:peopleid/chores/:choresid", (req, res) => {
  const { peopleid } = req.params;
  const { choresid } = req.params;

  People.map(person => {
    if (person.id.toString() === peopleid) {
      const newArr = person.chores.filter(chore => {
        if (chore.id == choresid) {
          return false;
        } else {
          return true;
        }
      });
      res.status(200).json(newArr);
    }
    // else {
    //   res.status(404).json({ message: "The chore does not exist" });
    // }
  });
});

server.post("/api/people/:peopleid/chores", (req, res) => {
  const { peopleid } = req.params;
  const newChore = req.body;

  let chord_id = 0;
  newChore.id = chord_id + 1;

  console.log(newChore);

  People.map(person => {
    if (person.id.toString() === peopleid) {
      return person.chores.push(newChore);
    }
    res.status(201).json(person.chores);
  });
});

server.put("/api/people/:peopleid/chores/:choreid", (req, res) => {
  const { peopleid } = req.params;
  const { choreid } = req.params;
  console.log(peopleid);
  console.log(choreid);
  let changes = req.body;
  People.map(person => {
    if (person.id.toString() === peopleid) {
      const updateChore = person.chores.map(chore => {
        if (chore.id.toString() === choreid) {
          chore = { ...chore, ...changes };
        }
        return chore;
      });
      person.chores = updateChore;
      res.status(200).json(updateChore);
    }
    // else {
    //   res.status(500).json({ message: "The chor does not exist" });
    // }
  });
});

server.post("/api/people/:peopleid/chores/:choreid", (req, res) => {
  const { peopleid } = req.params;
  const { choreid } = req.params;
  const query = req.query.completed;
  console.log(query);
  People.map(person => {
    if (person.id.toString() === peopleid) {
      const completed = person.chores.map(chore => {
        console.log(chore);
        if (chore.id.toString() === choreid) {
          chore.completed = query;
        }
        return chore;
      });
      res.status(200).json(completed);
    }
  });
});
const port = process.env.PORT || 8000;

server.listen(port, () => console.log(`\nRunning on ${port}\n`));
