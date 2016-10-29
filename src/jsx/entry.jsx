/* global document */

import Hello from './hello';
import OsInfo from './osInfo';
import FileInfo from './fileInfo';
import DirInfo from './dirInfo';

const React = require('react');
const ReactDOM = require('react-dom');
require('../css/main.css');

ReactDOM.render(<Hello />, document.getElementById('react-stuff'));
ReactDOM.render(<OsInfo />, document.getElementById('os-stuff'));
ReactDOM.render(<FileInfo />, document.getElementById('file-contents'));
ReactDOM.render(<DirInfo />, document.getElementById('dir-contents'));
