import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'react-bootstrap';

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.createRoot(document.getElementById('root')).render(
  
      <ThemeProvider  dir="rtl" breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs" >
        <App />
      </ThemeProvider>
)