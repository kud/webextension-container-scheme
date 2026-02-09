# Container Scheme

<img src="src/icons/extension-96.png" alt="Container Scheme Logo">

> **Note**: This is a maintained fork of [open-url-in-container](https://github.com/honsiorovskyi/open-url-in-container) by [@kud](https://github.com/kud). The original project provided an excellent foundation, and this fork aims to continue its development and maintenance.

A simple Firefox extension that enables opening links in specific containers using `ext+container:` URLs. Perfect for launcher apps like Raycast, Alfred, terminal scripts, password managers, and automating container isolation.

Click the address bar icon to generate container URLs for the current page.

## Installation

Install from the [Mozilla Add-Ons Store for Firefox](https://addons.mozilla.org/firefox/addon/open-url-in-container/).

![Extension screenshot](./docs/images/screenshot_main.png)

## Features

- 🔗 Custom protocol handler (`ext+container:`) to open URLs in containers
- 🎨 Simple popup UI to generate container URLs
- 💻 Perfect for launcher apps (Raycast, Alfred, etc.)
- ✨ Create containers on the fly with custom colors and icons
- 🤝 Works with password managers, scripts, and other tools

## Usage

### Basic Example

```bash
firefox 'ext+container:name=Work&url=https://github.com'
```

This opens GitHub in your "Work" container.

### Use with Raycast/Alfred

1. Click the extension icon in Firefox's address bar
2. Select a container
3. Copy the generated URL
4. Use it in your launcher app

### Create container with custom appearance

```bash
firefox 'ext+container:name=MyContainer&color=orange&icon=fruit&url=https://mozilla.org'
```

If `MyContainer` doesn't exist, it will be created with an orange color and fruit icon.

### Use in HTML links

```html
<a href="ext+container:name=Work&url=https://github.com">
  Open GitHub in Work container
</a>
```

## URL Parameters

- `name` - Container name (required)
- `url` - URL to open (required)
- `color` - Container color (optional: blue, turquoise, green, yellow, orange, red, pink, purple)
- `icon` - Container icon (optional: fingerprint, briefcase, dollar, cart, circle, gift, vacation, food, fruit, pet, tree, chill)
- `pinned` - Pin the tab (optional: true/false)
- `openInReaderMode` - Open in reader mode (optional: true/false)

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
