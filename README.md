# Container Scheme

<img src="src/icons/extension-96.png" alt="Container Scheme Logo">

> **Note**: This is a maintained fork of [open-url-in-container](https://github.com/honsiorovskyi/open-url-in-container) by [@kud](https://github.com/kud). The original project provided an excellent foundation, and this fork aims to continue its development and maintenance.

**The simplest way to open links in Firefox containers.**

Click the toolbar icon, select a container, and copy the URL. That's it.

Perfect for Raycast, Alfred, and other launcher apps.

## Installation

Install from the [Mozilla Add-Ons Store for Firefox](https://addons.mozilla.org/firefox/addon/open-url-in-container/).

![Extension screenshot](./docs/images/screenshot_main.png)

## How It Works

1. Click the extension icon in your toolbar
2. Select a container from the dropdown
3. Copy the generated `ext+container:` URL
4. Use it in Raycast, Alfred, scripts, or anywhere else

That's it. No complexity, no settings, just container URLs.

## Example URL

```
ext+container:name=Work&url=https://github.com
```

Opens GitHub in your "Work" container.

## Use Cases

**Raycast/Alfred:**
- Copy the URL from the popup
- Create commands that open specific sites in containers

**Scripts:**
```bash
firefox 'ext+container:name=Work&url=https://github.com'
```

**HTML/Bookmarks:**
```html
<a href="ext+container:name=Work&url=https://github.com">GitHub (Work)</a>
```

## Development

### Prerequisites

- Node.js >= 22.0.0
- Firefox (preferably Nightly)

### Setup

```bash
git clone https://github.com/kud/webextension-container-scheme.git
cd webextension-container-scheme
npm install
```

### Available Commands

```bash
npm run dev              # Run in Firefox Nightly with auto-reload
npm run dev:chrome       # Run in Chromium
npm run build            # Build extension for distribution
npm run lint             # Lint code
npm run lint:fix         # Fix linting issues
npm run format           # Format code with Prettier
npm run test             # See test instructions
```

### Publishing

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed publishing instructions.

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

[Mozilla Public License Version 2.0](LICENSE)

## Acknowledgments

This project is a fork of [open-url-in-container](https://github.com/honsiorovskyi/open-url-in-container) originally created by [@honsiorovskyi](https://github.com/honsiorovskyi). We're grateful for the excellent foundation they built.

See [CONTRIBUTORS](CONTRIBUTORS) for a full list of contributors.
