const fs = require('fs');

module.exports = {
  /**
   * Asynchronously gets the contents of a file.
   * @param {string} filePath The full or relative path of the file to get the contents of.
   * @param {function} callback The function to call once the file is read.
   * The parameter to the callback will be the file's contents.
   */
  getContents: function(filePath, callback) {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.log('getContents had a bit of a problem: ' + err);
      }

      callback(data);
    });
  },
  /**
   * Asynchronously gets the contents of a directory.
   * @param {string} dirPath The full or relative path of the directory to get the contents of.
   * @param {function} callback The function to call once the directory is read.
   * The parameter to the callback will be the directory's contents.
   */
  getDirectoryContents: function(dirPath, callback) {
    fs.readdir(dirPath, {}, (err, files) => {
      if (err) {
        console.log('getDirectoryContents had a bit of a problem: ' + err);
      }

      callback(files);
    });
  }
};
