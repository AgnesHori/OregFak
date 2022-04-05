const express=require('express')
const router=express.Router()

const {getStatistic}=require('../controllers/Statistic')

router.route('/').get(getStatistic)

module.exports=router