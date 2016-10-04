const React = require('react')
const ReactDOM = require('react-dom')
require('../css/main.css');

import Hello from './hello.jsx'
import OsInfo from './osInfo.jsx'
import FileInfo from './fileInfo.jsx'
import DirInfo from './dirInfo.jsx'

ReactDOM.render(<Hello />, document.getElementById('react-stuff'));
ReactDOM.render(<OsInfo />, document.getElementById('os-stuff'));
ReactDOM.render(<FileInfo />, document.getElementById('file-contents'));
ReactDOM.render(<DirInfo />, document.getElementById('dir-contents'));
