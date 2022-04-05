const express=require('express')
const router=express.Router()

const {getFilter}=require('../controllers/Filter')

router.route('/').get(getFilter)

module.exports=router