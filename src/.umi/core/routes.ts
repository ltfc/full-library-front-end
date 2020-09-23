// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/Deo/Documents/GitHub/full-library-front-end/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('@/layouts/index').default,
    "routes": [
      {
        "exact": true,
        "path": "/",
        "redirect": "/landing"
      },
      {
        "exact": true,
        "path": "/landing",
        "component": require('@/pages/index').default
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
