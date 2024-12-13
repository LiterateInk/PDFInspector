# `@literate.ink/pdf-inspector`

## Installation

```bash
npm install @literate.ink/pdf-inspector
yarn add @literate.ink/pdf-inspector
pnpm add @literate.ink/pdf-inspector
bun add @literate.ink/pdf-inspector
```

## Usage

```typescript
import { parsePDF } from "@literate.ink/pdf-inspector";

const pages = await parsePDF(buffer);

for (const page of pages) {
  console.log(`Page of ${page.Width}x${page.Height}px`);
  console.log("- contains", page.Texts.length, "texts");
  console.log("- contains", page.Fills.length, "fills");
}
```

## Credits

The JS/TS implementation is a fork of the following projects :

- [`pdf2json`](https://github.com/modesty/pdf2json) is a [Node.js](http://nodejs.org/) module that parses and converts PDF from binary to JSON format
- [`pdf.js`](https://github.com/mozilla/pdf.js/) but lighter because we only need a few things from it for what we are doing
