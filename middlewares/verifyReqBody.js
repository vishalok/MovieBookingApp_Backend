const {released, unreleased, blocked} = require('../utils/constant')
const  Theater  = require('../models/theatre.model');


function validateMovieReqBody(req, res, next){
    if(!req.body.name){
        return res.status(400).send({
            msg: 'name field is missing in movie creation'
        })
    }

    if(!req.body.releaseDate){
        return res.status(400).send({
            msg: 'releaseDate field is missing in movie creation'
        })
    }

    if(!req.body.releaseStatus){
        return res.status(400).send({
            msg: 'releaseStatus field is missing in movie creation'
        })
    }

    const defaultRelaseStatus = [released, unreleased, blocked];
    const tempStatus = defaultRelaseStatus.includes(req.body.releaseStatus);
    console.log('releaseStatus', tempStatus);
    if(!tempStatus){
        return res.status(400).send({
            msg: 'releaseStaus should be UNRELEASED/RELEASED/BLOCKED.'
        })
    }

        //Validate the director
        if (!req.body.director) {
            return res.status(400).send({
                message: "Failed! Movie director is not provided !"
            });
    
        }

    next();

}


function validateTheatreReqBody(req, res, next){
    const id = req.params.id;
  if (!id || isNaN(id)) {
    return res.status(400).send({ 
        msg: 'Invalid Theatre Id'
    });
  }
    
    
    next();
}

const theaterNameExists = async (req, res, next) => {
    try {
      const theater = await Theater.findOne({ name: req.body.name });
      if (theater) {
        return res.status(400).json({
             msg: 'Theater name already exists' 
            });
      }
      next();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
module.exports = {
    validateMovieReqBody,
    validateTheatreReqBody,
    theaterNameExists
}