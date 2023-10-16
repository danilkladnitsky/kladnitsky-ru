import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '@app';

const appNode = document.getElementById('root')!;
const root = createRoot(appNode);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);