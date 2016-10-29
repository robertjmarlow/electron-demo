const React = require('react');
const os = require('os');

const OsInfo = () => (
  <div>
    <span className="big">Platform:</span> {os.platform()} {os.arch()}
    {' '}
    <span className="big">Uptime:</span> {os.uptime()}
  </div>
);

export default OsInfo;
