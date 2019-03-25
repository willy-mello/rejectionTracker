const router = require('express').Router()
// const Students = require('../db/student')
const { Application } = require('../db')




router.get('/', async (req, res, next) => {
  try {
    const allJobs = await Application.findAll()
    console.log('alljobs', allJobs)
    res.json(allJobs)
  } catch (error) {
    next(error)

  }
})



// router.get('/:id', async (req, res, next) => {
//   try {
//     const oneJob = await Application.findById(req.params.id)
//     


//     res.json(oneJob)
//   } catch (error) {
//     next(error)
//   }
// })

router.post('/', async (req, res, next) => {
  try {
    const newJob = await Application.create({
      companyName: req.body.company,
      method: req.body.method,
      rejected: req.body.rejected

    })
    res.json(newJob)
  } catch (error) {
    next(error)
  }
})

// router.delete('/:id', async (req, res, next) => {
//   try {
//     await Application.destroy({
//       where: { id: req.params.id }
//     })
//     res.send('Smile, Application was deleted').status(204)
//   } catch (error) {
//     next(error)
//   }
// })
// router.use((req, res, next) => {
//   const err = new Error('Application route not found!')
//   err.status = 404
//   next(err)
// })

module.exports = router