import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as BrowserRouter } from 'react-router';

import App from './App.tsx';
import './index.css';

// Fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// todo: Add light build of syntax highlighter
// https://www.npmjs.com/package/react-syntax-highlighter

// import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
// import ts from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript';
// import atomOneDark from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark';
// import atomOneLight from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-light';
// SyntaxHighlighter.registerLanguage('typescript', ts);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
