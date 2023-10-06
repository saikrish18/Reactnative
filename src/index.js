import { AppRegistry } from 'react-native';
import App from './App'; 
import appJson from './app.json';



AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, { rootTag: document.getElementById('app-root') });
