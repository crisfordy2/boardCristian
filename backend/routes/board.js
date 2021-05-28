const express = require("express");
const router = express.Router();

const Board = require("../models/board");
const Auth = require("../middleware/auth");


// crear actividades - URL: http://localhost:3001/api/board/saveTask
router.post("/saveTask", Auth, async (req, res)=>{        
    
    const board = new Board({
        userId: req.user_Id,
        name: req.body.name,
        description: req.body.description,
        status: "to-do"         
    });

    const result = await board.save();
    return res.status(200).send({result});
})


// listar actividades - URL: http://localhost:3001/api/board/listTask
router.get("/listTask" , Auth, async(req, res)=>{   

    const board = await Board.find({userId: req.user_Id});
    res.status(200).send({board});
})


// editar actividades - URL: http://localhost:3001/api/board/updateTask
router.put("/updateTask" , Auth, async (req, res)=>{    

    const board = await Board.findByIdAndUpdate(req.body._id, {
        userId: req.user_Id,
        name: req.body.name,
        description: req.body.description,        
        status: req.body.status
    })

    if(!board) return res.status(401).send("could not update");
    return res.status(200).send({board});
})


// eliminar actividades - URL: http://localhost:3001/api/board/:_id
router.delete("/:_id" , Auth, async(req, res)=>{    

    const board = await Board.findByIdAndDelete(req.params._id);
    if(!board) return res.status(401).send("could not delete");
    return res.status(200).send("Activity Delete")
})

module.exports = router;