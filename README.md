# LUI ([Landbot UI](https://landbot.io/)) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/landbot-org/lui/blob/main/LICENSE) [![npm version](https://img.shields.io/npm/v/@landbot/lui)](https://www.npmjs.com/package/@landbot/lui) [![Test](https://github.com/landbot-org/lui/actions/workflows/tests.yml/badge.svg)](https://github.com/landbot-org/lui/actions/workflows/tests.yml)

## Quick start

Install

```
npm i @landbot/lui
```

Import on the root of the project

```
import { ThemeProvider } from 'styled-components';
import { theme } from '@landbot/lui';
```

Wrap the project with the provider

```
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        //react app
      </div>
    </ThemeProvider>
  );
}
```

## Build

```
npm run build
```
