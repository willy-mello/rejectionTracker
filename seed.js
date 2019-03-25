const { db } = require('./server/db')
const { green, red } = require('chalk')
const Application = require('./server/db/application');





const jobs = [
  {
    companyName: 'Google',
    method: 'LinkedIn',
    rejected: true
  },
  {
    companyName: 'Amazon',
    method: 'LinkedIn',
    rejected: true
  },
  {
    companyName: 'Spotify',
    method: 'LinkedIn',
    rejected: true
  },
  {
    companyName: 'Etsy',
    method: 'LinkedIn',
    rejected: true
  },
  {
    companyName: 'Bobs Bait, Tackle, and Websites',
    method: 'LinkedIn',
    rejected: false
  }


];





const seed = async () => {
  await db.sync({ force: true })

  await Application.create(jobs[0])
  await Application.create(jobs[1])
  await Application.create(jobs[2])
  await Application.create(jobs[3])
  await Application.create(jobs[4])

  console.log(green('Seeding success!'))
  db.close()
}

seed()
  .catch(err => {
    console.error(red('Oh noes! Something went wrong!'))
    console.error(err)
    db.close()
  })
