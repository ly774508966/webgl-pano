import bunyan from 'browser-bunyan';
import wagner from 'wagner-core';

export default function factory(name) {
  return bunyan.createLogger({name: "myapp"});
}

wagner.constant('logger', factory);
