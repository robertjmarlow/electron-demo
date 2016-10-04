const { ipcRenderer } = require('electron');
const uniqueId = require('lodash/uniqueId');
const React = require('react');

export default class DirInfo extends React.Component {
  constructor() {
    super();

    this.state = {
      dirContentsArr: []
    };
  }

  componentDidMount() {
    ipcRenderer.on('getDirectoryContents', function(event, arg) {
      var dirContentsArr = [];

      for (let dirItem of arg) {
        dirContentsArr.push({
          dirItem: dirItem,
          id: uniqueId()
        });
      }

      this.setState({
        dirContentsArr: dirContentsArr
      });
    }.bind(this));

    ipcRenderer.send('getDirectoryContents', '.');
  }

  render() {
    var dirLines = this.state.dirContentsArr.map(function(item) {
      return (
        <div key={item.id}>{item.dirItem}</div>
      );
    });
    
    return (
      <div className='dirContents'>
        {dirLines}
      </div>
    );
  }
}
