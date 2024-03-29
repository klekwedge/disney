import { MantineProvider } from '@mantine/core';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import './main.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <MantineProvider
    theme={{
      colorScheme: 'dark',
    }}
  >
    <App />
  </MantineProvider>,
);
