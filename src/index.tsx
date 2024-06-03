import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@genflowly/react-assets/dist/dist/main.css';
import { I18nextProvider } from 'react-i18next';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import i18n from './i18n';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
