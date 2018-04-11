# UIengine

Workbench for UI-driven development:
A tool for developers and designers to build and document web sites and apps.

Useful if you want to …

- Create a living pattern library
- Document your design system
- Prototype with your apps components and templates
- Use code as a single source of truth

## 🚀  What it enables

- Establish a UI-driven workflow and structure your web UI into modular components.
- Give your team and stakeholders a central spot to develop and discuss the UI.
- Replace deliverables with usable, testable and production ready output/code.
- Make documentation fun and easy by providing structure and nice looking pages.

## 🖥 Examples and Screenshots

To get an idea of what this looks like, see the
[deployed sample project](http://uiengine-sample-project.uix.space/)
and the
[sample project source code](./test/project/).
There is also an
[introduction video](https://www.youtube.com/watch?v=OKHAhIQLvjU)
and some
[screenshots](./docs/media/) to give you a first impression.

## 🔩 Technical TL;DR

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Build Status](https://travis-ci.org/dennisreimann/uiengine.svg?branch=master)](https://travis-ci.org/dennisreimann/uiengine)
[![Known Vulnerabilities](https://snyk.io/test/github/dennisreimann/uiengine/badge.svg)](https://snyk.io/test/github/dennisreimann/uiengine)
[![Coverage Status](https://coveralls.io/repos/github/dennisreimann/uiengine/badge.svg?branch=master)](https://coveralls.io/github/dennisreimann/uiengine?branch=master)
[![npm](https://img.shields.io/npm/dw/uiengine.svg)](https://www.npmjs.com/package/uiengine)
[![Maintained with lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![npm](https://img.shields.io/npm/v/uiengine.svg)](https://www.npmjs.com/package/uiengine)

### ⚒ How does it work?

At its core, the UIengine is a static site generator.
It can be used in standalone mode or integrated into your build process.

➡️ Input: Your projects components, templates, pages and documentation

⬅️ Output: A static site that can be used as a workbench for development and deployed documentation

It consumes the files and structure of your project and generates the documentation based on this.
In development mode the output is regenerated on file change and synced to the browser.
This provides you with a development environment for creating the components, prototyping and writing the docs.

### 💯 Main features

- **Templating agnostic**: Various templating engines are integrated via adapters, giving you flexibility of choice and the option to integrate custom ones. It works with whatever can be rendered via JavaScript, which includes popular solutions like JSX, Vue, EJS, Pug/Jade, Handlebars, etc.
- **Prototyping environment**: Build your UI without the need for an existing backend/API. Render your templates and components with mock data and build various variants for pages by providing different data to your views.
- **Best practice approach**: The tool guides you towards best practices like not using application logic in the view layer by proposing a separation of data and template/component.
- **In sync with the end product**: Since the docs are generated from the code that is used in your application, you get a living pattern library – not a separate thing that needs to be looked after regularly.
- **Flexible integrations**: Templating engines and the theme can be configured or completely swapped out so you can fit it to your needs. Same goes for the markdown parsing/rendering which is configurable too.
- **Covers green- and brownfield projects**: Whether you start out with a pattern library or want to transition your process and refactor your existing UI into modular components, the UIengine has you covered.

For the evaluation process you might also want to have a look at the [alternatives](#-alternatives).

### 🗜 Prerequisites

UIengine requires at least Node.js 8.9. Future versions will track the latest active Node.js LTS version, which guarantees a reasonable level of backwards compatibility.

## 📘 Documentation

How To and Quick Start:

- [Getting Started](./docs/getting-started.md)
- [Configuration](./docs/config.md)
- [Component](./docs/component.md)
- [Variant](./docs/variant.md)

Technical documentation, with more detailed information:

- [Entities/Properties](./docs/entities-properties.md)
- [Adapters](./docs/adapters.md)
- [YAML](./docs/yaml.md)
- [UI](./docs/ui.md)
- [Deployment](./docs/deployment.md)
- [Integrations](./docs/integrations.md)

## 💁 Individual packages

- 🚀 [UIengine core](./packages/core)
- 🎨 [UIengine user interface](./packages/ui)
- 🔌 [Pug templating adapter](./packages/adapter-pug)
- 🔌 [React/JSX templating adapter](./packages/adapter-react)
- 🔌 [Vue templating adapter](./packages/adapter-vue)
- 🔌 [Marko templating adapter](./packages/adapter-marko)
- 🔌 [Handlebars templating adapter](./packages/adapter-handlebars)
- 🔌 [EJS templating adapter](./packages/adapter-ejs)
- 🔌 [HTML templating adapter](./packages/adapter-html)

### 🖖 Alternatives

OK, the UIengine looks really cool but it's not quite what you are looking for?
Or you want to first compare a few solutions to see which one is the right fit?
Here are some other projects that you might want to evaluate:

- [Pattern Lab](http://patternlab.io/)
- [Fractal](http://fractal.build/)
- [Storybook](https://storybook.js.org/)
- [patternplate](https://github.com/sinnerschrader/patternplate/)

… or have a look at [the ever growing list of similar tools](https://github.com/davidhund/styleguide-generators).

## 🛠 Development

You like this project and are interested in participating?
See the [development docs](./docs/development.md) for an introduction and workflows when hacking on the UIengine.

- - - - -

👨🏻‍💻 Brought to you by the nice people behind [UIengineering](https://www.uiengineering.de). 👨🏻‍💻
