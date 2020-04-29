var fs = require ('fs')

fs.readFile('planets.txt', 'utf8', (error, data) => {
   
    if (error) {
      console.error(error)
      return
    }
    console.log(data)
  })