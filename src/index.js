import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';



//TODO: Add Bugsnag


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


// Bugsnag.start({
//   apiKey: '86cc05e770db4d552eaabcc2a6228b41',
//   plugins: [new BugsnagPluginReact()]
// })

// const ErrorBoundary = Bugsnag.getPlugin('react')
//   .createErrorBoundary(React)


root.render(
  // <ErrorBoundary>

  // <Router> 
  //   <App />
  //   </Router>
  //   </ErrorBoundary>
  
  <Router>
    <App />
  </Router>

)