const axios = require("axios");
const url = 'https://rickandmortyapi.com/api/character/';

const getCharDetail = async (req, res) => {
    const { id } = req.params;
    try {
        const getChar = await axios(`${url}${id}`)
        const detailChar = getChar.data
            let character = {
                id: detailChar.id,
                image: detailChar.image,
                name: detailChar.name,
                gender: detailChar.gender,
                species: detailChar.species,
                origin: detailChar.origin
            }
            res.status(200).json(character);
        }
    catch(error){
        res.status(500).json({message: error.message})
    }
}


module.exports = getCharDetail;