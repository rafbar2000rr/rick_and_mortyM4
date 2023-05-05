const axios = require("axios");

const getCharById = async (req, res) => {
    const { id } = req.params;
    try {
        const getChar = await axios(`https://rickandmortyapi.com/api/character/${id}`)
        const dataChar = getChar.data
            let character = {
                id: dataChar.id,
                image: dataChar.image,
                name: dataChar.name,
                gender: dataChar.gender,
                species: dataChar.species
            }
            res.status(200).json(character);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

module.exports = getCharById;