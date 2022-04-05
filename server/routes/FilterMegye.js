const express=require('express')
const router=express.Router()

const {getFilterMegye}=require('../controllers/FilterMegye')

router.route('/').get(getFilterMegye)

module.exports=router