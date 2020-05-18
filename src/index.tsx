import '@app/config/icons';
import React from 'react';
import ReactDOM from 'react-dom';
import MainWindow from '@app/applications/main_window';
import CameraWindow  from '@app/applications/camera_window';
import 'bulma/css/bulma.css'
import '@app/assets/styles/main.scss';
import querystring from 'querystring';
let RootComponet: any;

const params = querystring.parse(window.location.search.slice(1));

switch(params.screen) {
  case 'camera':
    RootComponet = CameraWindow;
    break;
  default:
    RootComponet = MainWindow;
    break;
}

ReactDOM.render(<RootComponet/>, document.getElementById('app'));
