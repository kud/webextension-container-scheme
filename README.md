# Container Scheme

<img src="src/icons/extension-96.png" alt="Container Scheme Logo">

> **Note**: This is a maintained fork of [open-url-in-container](https://github.com/honsiorovskyi/open-url-in-container) by [@kud](https://github.com/kud). The original project provided an excellent foundation, and this fork aims to continue its development and maintenance.

A Firefox extension that enables opening links in specific containers using a custom protocol handler. It works seamlessly with terminal commands, OS shortcuts, bookmarks, password managers, HTML pages, and many other tools.

The extension also features a convenient popup accessible from the address bar icon, providing an easy way to generate links or terminal commands for opening the current page in any available container.

## Installation

Install from the [Mozilla Add-Ons Store for Firefox](https://addons.mozilla.org/firefox/addon/open-url-in-container/).

![Extension screenshot](./docs/images/screenshot_main.png)

## Features

- 🔗 Custom protocol handler (`ext+container:`) to open URLs in containers
- 🎨 UI to generate links, bookmarks and terminal commands
- 💻 Support for both command line and internal invocations
- ✨ Create containers on the fly with custom colors and icons
- 📌 Tab pinning support
- 📖 Reader mode support
- 🔒 HMAC-SHA256 signature-based security to prevent clickjacking
- 🤝 Works well with other extensions

## Examples

### Open a URL in a container

```bash
firefox 'ext+container:name=MyContainer&url=https://mozilla.org&signature=ea7214f675398e93764ba44504070221633b0d5dce6c4263715f1cca89ab5f86'
```

### Open with custom container appearance

Open `https://mozilla.org` in a container named `MyContainer`. If the container doesn't exist, create it with an `orange` colored `fruit` icon and pin the tab:

```bash
firefox 'ext+container:name=MyContainer&color=orange&icon=fruit&url=https://mozilla.org&pinned=true&signature=ea7214f675398e93764ba44504070221633b0d5dce6c4263715f1cca89ab5f86'
```

### Use in HTML links

```html
<a href="ext+container:name=MyContainer&url=https://mozilla.org&signature=ea7214f675398e93764ba44504070221633b0d5dce6c4263715f1cca89ab5f86">
  Mozilla.org in MyContainer
</a>
```

## Security: What is a signature?

The signature is a cryptographic HMAC-SHA256 hash of the URL parameters, designed to protect you from clickjacking attacks.

### Why signatures?

Imagine someone knows you have a container named `Personal` with private information. They could try to trick you into clicking a malicious link like:

```
ext+container:name=Personal&url=https://evil.com/correlationID=XXX
```

By using the same `XXX` in both your Personal container and a public container, they could track your identity across containers.

### How protection works

1. **Without signature**: The extension will ask for confirmation before opening the link, making you aware of potential tracking attempts

2. **With signature**: The extension automatically verifies the URL was signed with your secret key (known only to you and your local extension), guaranteeing the request is legitimate

### Making signatures convenient

- **Popup UI**: Generate signed links and commands easily from the extension popup
- **Simple algorithm**: Uses standard HMAC-SHA256, easy to integrate into scripts
- **Shell launcher**: Built-in signing support via environment variables

## Shell Launcher

The launcher provides a user-friendly, Unix-style way to open links:

```bash
firefox-container --help
```

```
firefox-container - open URL in a specific container in Firefox.

Usage:
        firefox-container [OPTIONS] URL
        firefox-container URL [OPTIONS]
        firefox-container -h|--help

Where optional OPTIONS may include any combination of:
        --COLOR                 color for the container (if does not exist)
        --ICON                  icon for the container (if does not exist)
  -n,   --name=NAME             container name (default: domain part of the URL)
  -s,   --signature=SIGNATURE   container signature to prevent clickjacking; also see (1) below
  -p,   --pin                   pin tab
  -r,   --reader                open tab in the reader mode

Where COLOR is one of:
        --blue
        --turquoise
        --green
        --yellow
        --orange
        --red
        --pink
        --purple

Where ICON is one of:
        --fingerprint
        --briefcase
        --dollar
        --cart
        --circle
        --gift
        --vacation
        --food
        --fruit
        --pet
        --tree
        --chill

Environment variables:
  (1)   OPEN_URL_IN_CONTAINER_SIGNING_KEY       signing key for the clickjacking prevention mechanism; if set to a non-empty value, SIGNATURE will be generated automatically
```

### Launcher Installation

```bash
curl -sL https://github.com/kud/webextension-container-scheme/raw/main/bin/launcher.sh | sudo tee /usr/bin/firefox-container > /dev/null
sudo chmod 0755 /usr/bin/firefox-container
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
