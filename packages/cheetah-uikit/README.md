# 🥞 Cheetah UIkit

[![Version](https://img.shields.io/npm/v/@cheetahswap-libs/uikit)](https://www.npmjs.com/package/@cheetahswap-libs/uikit) [![Size](https://img.shields.io/bundlephobia/min/@cheetahswap-libs/uikit)](https://www.npmjs.com/package/@cheetahswap-libs/uikit)

Cheetah UIkit is a set of React components and hooks used to build pages on Cheetah's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @cheetahswap-libs/uikit`

## Setup

### Theme

Before using Cheetah UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@cheetahswap-libs/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@cheetahswap-libs/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://cheetahswap.github.io/cheetah-uikit/)
