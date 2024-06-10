import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@genflowly/react-assets/dist/dist/main.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { Provider, useSelector } from 'react-redux';
import store, { RootState } from './store/store';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const ThemedApp: React.FC = () => {
  const mode = useSelector((state: RootState) => state.theme.mode);

  useEffect(() => {
    if (mode === 'light') {
      import('./styles/lightTheme.scss');
    } else {
      import('./styles/darkTheme.scss');
    }
  }, [mode]);

  return <App />;
};
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <ThemedApp />
      </Provider>
      ,
    </I18nextProvider>
  </React.StrictMode>
);
