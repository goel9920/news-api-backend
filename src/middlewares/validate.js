import validator from 'validator'

export const validateRegBody = async (req, res, next) => {
  console.log(req.body);
  const { body } = req;
  if (!body.username || body.username === "") {
    return res
      .status(406)
      .json({ msg: "Name is required & should not be empty!" });
  }

  if(!body.email || !validator.isEmail(body.email)){
    return res.status(406).json({msg:"Not a valid email!"})
  }
  if (!body.password || body.password.length < 8) {
    return res.status(406).json({
      msg: "Password should consist of minimum eight characters",
    });
  }

  if(!body.phoneNumber || !validator.isMobilePhone(body.phoneNumber)){
    return res.status(406).json({msg:"Not a valid phone number!"})
  }
  if(!body.dateOfBirth || !validator.isDate(new Date(body.dateOfBirth))){
    return res.status(406).json({msg:"Not a valid dateOfBirth"});
  }
  if(!body.timeOfBirth || !validator.isDate(new Date(body.timeOfBirth))){
    return res.status(406).json({msg:"Not a valid timeOfBirth!"});
  }

  if(!body.gender || body.gender===""){
    return res.status(400).json({msg:"Gender should not be empty!"})
  }

  if(!body.maritalStatus || body.maritalStatus===""){
    return res.status(400).json({msg:"maritalStatus should not be empty!"});
  }
  const allowedLangs=["hindi","english"];
  if(body.language){
    let isAllowed=false;
    for(let lang of allowedLangs){
      if(body.language===lang){
        isAllowed=true;
      }
    }
    if(!isAllowed){
      return res.status(406).json({msg:"language can either be hindi or english"});
    }
  } else{
    return res.status(400).json({msg:"language cannot be empty"});
  }

  if(!req.file){
    return res.status(400).json({msg:"profile picture is required"});
  }

  next();
};

export const validateLoginBody = async (req, res, next) => {
  const { body } = req;
  if (!body.email || body.email === "") {
    return res
      .status(400)
      .json({ msg: "Email is required & should not be empty!" });
  }

  if (!body.password || body.password === "") {
    return res.status(400).json({
      msg: "Password should not be empty!",
    });
  }
  next();
};

const validate = {
  validateLoginBody,
  validateRegBody,
};

export default validate;
