const fs = require('fs')
const files = fs.readdirSync(__dirname)

files.forEach(f =>  console.log(f))
//node ex10_FS_FileSystem