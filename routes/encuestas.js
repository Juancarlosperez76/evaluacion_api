

const {Router}= require('express')
//Obtener la función Router
const router = Router()

const { getEncuesta, postEncuesta, putEncuesta, patchEncuesta, deleteEncuesta } = require('../controllers/encuesta')

router.get('/', getEncuesta,)

router.post('/', postEncuesta)

router.put('/', putEncuesta)

router.patch('/', patchEncuesta)

router.delete('/', deleteEncuesta)

//exportar módulo
module.exports = router


