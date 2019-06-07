# react-stackblitz-snippet

React Component to generate a Stackblitz Editor

## Installation

```sh
yarn add react-stackblitz-snippet
```

or

```sh
npm i react-stackblitz-snippet --save
```

## Usage

1. import:

```ts
import { Stackblitz } from 'react-stackblitz-snippet';
```

2. Use:

```html
<Stackblitz>
  <file name="index.html" content="<h1>Hello</h1>" />
  <file name="index.ts" open>console.log("hello stackblitz!!");</file>
</Stackblitz>
```

### Options

- Stackblitz#project: [Stackblitz API project](https://stackblitz.com/docs#project-payload)
- Stackblitz#options: [Stackblitz API options](https://stackblitz.com/docs#options)

The file children can be used to easily add snippet code (see Usage). The open flag defines which file will be opened by default.

## Demo

You can run the demo via `npm start`
