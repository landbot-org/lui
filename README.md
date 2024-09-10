# LUI ([Landbot UI](https://landbot.io/)) ✨

[![GitHub
license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/landbot-org/lui/blob/main/LICENSE)
[![npm version](https://img.shields.io/npm/v/@landbot/lui)](https://www.npmjs.com/package/@landbot/lui)
[![Build](https://github.com/landbot-org/lui/actions/workflows/build.yml/badge.svg)](https://github.com/landbot-org/lui/actions/workflows/build.yml)

## What is a UI components library?

A UI component library is a robust set of ready-made UI components such as buttons, inputs, dialogs, scrolling lists,
and more.

## Preparation and prerequisites

```shell
npm install
```

## Start the component explorer

```shell
npm run storybook
```

For more information about Storybook, please visit the [Storybook website](https://storybook.js.org/).

## Test

Component tests are written using [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/).

```shell
npm run test
```

## Build

Package is built using [Rollup](https://rollupjs.org/guide/en/). The build is configured to generate an ES module
(`esm`) package.

```shell
npm run build
```

## Installation and usage

```shell
npm install @landbot/lui
```

Import on the root of the project

```js
import { theme } from '@landbot/lui';
import { ThemeProvider } from 'styled-components';
```

Wrap the project with the provider

```js
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">//react app</div>
    </ThemeProvider>
  );
}
```
