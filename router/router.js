const express = require('express');
const { postData, getData, patchData } = require('../controller/controller');

const router = express.Router();
router.route('/').post(postData);
router.route('/:id').get(getData).patch(patchData);

module.exports = router;
