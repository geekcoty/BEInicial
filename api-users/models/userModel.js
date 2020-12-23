const mongoose = require ("mongoose")
const userSchema = mongoose.Schema({
  
//establecemos el schema de datos
  name: {
    type: String,
    required: true
  }
})

//creamos y exportamos el modelo
module.exports = mongoose.model("User", userSchema)


