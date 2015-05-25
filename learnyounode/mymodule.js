var fs = require('fs')

module.exports = function mymodule(directoryName, fileExtension, callbackFunction) {
  fs.readdir(directoryName, function(error, list) {
    if (error) {
      return callbackFunction(error)
    }
    filteredList = []
    list.forEach(function(file) {
      fileNameArray = file.split('.')
      if (fileNameArray[1] === fileExtension) {
        //console.log(list[i])
        filteredList.push(file)
      }
    })
    callbackFunction(null, filteredList)
  })
}
