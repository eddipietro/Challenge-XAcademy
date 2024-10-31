// src/main.server.ts
import { enableProdMode } from '@angular/core';
import { AppServerModule } from './app/app.server.module';
import { renderModule } from '@angular/platform-server';
import * as express from 'express';

enableProdMode();

const app = express();

app.get('*', (req, res) => {
  renderModule(AppServerModule, {
    document: '<app-root></app-root>',
    url: req.url,
  }).then(html => {
    res.send(html);
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
