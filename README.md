# linter-gml
Linting of GML (GameMaker language) files. Uses the [linter](https://atom.io/packages/linter) package.

## Installation

First install [language-gml](https://atom.io/packages/language-gml) and [linter](https://atom.io/packages/linter) (the dependencies)
```bash
apm install language-gml linter
```
Then install this package
```bash
apm install linter-gml
```

## Development

At the moment, most of the linting is done by [gml-pegjs](https://github.com/ThomasHickman/gml-pegjs), if an error is being reported wrong, add a new issue [here](https://github.com/ThomasHickman/gml-pegjs/issues/new). If you want to improve the linter beyond this or correct something that is handled by this package, you could correct it here, by running:

```bash
git clone https://github.com/ThomasHickman/gml-pegjs # or your fork
apm install linter language-gml # if you haven't installed these
cd ./gml-pegjs
npm install
```

## Related packages

[autocomplete-gml](https://atom.io/packages/autocomplete-gml)
