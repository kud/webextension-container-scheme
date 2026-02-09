# Contributing to Container Scheme

Thank you for your interest in contributing to Container Scheme! This document provides guidelines and instructions for contributing.

## About This Project

Container Scheme is a Firefox extension that enables opening links in specific containers using a custom protocol handler. This is a fork of the original [open-url-in-container](https://github.com/honsiorovskyi/open-url-in-container) project, now maintained by [@kud](https://github.com/kud).

## Development Setup

### Prerequisites

- Node.js >= 22.0.0
- Firefox (preferably Nightly for development)
- Git

### Getting Started

1. Clone the repository:

```bash
git clone https://github.com/kud/webextension-container-scheme.git
cd webextension-container-scheme
```

2. Install dependencies:

```bash
npm install
```

3. Run the extension in Firefox:

```bash
npm run dev
```

This will open Firefox Nightly with the extension loaded.

## Development Workflow

### Available Scripts

- `npm run dev` - Run extension in Firefox Nightly with auto-reload
- `npm run dev:chrome` - Run extension in Chromium
- `npm run build` - Build the extension for distribution
- `npm run lint` - Run linting checks
- `npm run lint:fix` - Fix linting issues automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm test` - Instructions for running tests

### Code Style

- We use [Prettier](https://prettier.io/) for code formatting
- We use [ESLint](https://eslint.org/) for code linting
- Configuration is in `.prettierrc.json` and `build/.eslintrc.json`
- Run `npm run format` before committing to ensure consistent formatting

### Testing

Tests are located in `src/tests/`. To run tests:

1. Load the extension in Firefox
2. Navigate to `src/tests/unit.html`
3. View test results in the browser

## Submitting Changes

### Pull Request Process

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Run linting and formatting: `npm run lint:fix && npm run format`
5. Commit your changes with clear commit messages
6. Push to your fork: `git push origin feature/your-feature-name`
7. Open a Pull Request

### Commit Message Guidelines

- Use clear, descriptive commit messages
- Start with a verb in the imperative mood (e.g., "Add", "Fix", "Update")
- Examples:
  - `Add support for new container colors`
  - `Fix signature validation bug`
  - `Update README with new installation steps`

## Project Structure

```
container-scheme/
├── src/                    # Extension source code
│   ├── icons/             # Extension icons
│   ├── js/                # JavaScript modules
│   │   ├── popup/        # Popup UI logic
│   │   ├── opener/       # URL opener logic
│   │   └── security/     # Security & signature handling
│   ├── tests/            # Test files
│   ├── manifest.json     # Extension manifest
│   ├── popup.html        # Popup interface
│   └── opener.html       # Protocol handler page
├── build/                 # Build configuration
├── docs/                  # Documentation & images
└── bin/                   # Shell launcher script
```

## Reporting Issues

If you find a bug or have a feature request:

1. Check if an issue already exists
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Firefox version
   - Extension version

## Security

If you discover a security vulnerability:

1. **Do NOT** open a public issue
2. Email the maintainer directly (see GitHub profile)
3. Include detailed information about the vulnerability

## License

By contributing, you agree that your contributions will be licensed under the Mozilla Public License Version 2.0 (MPL-2.0).

## Questions?

Feel free to open an issue for any questions about contributing!

## Acknowledgments

This project is a fork of the excellent [open-url-in-container](https://github.com/honsiorovskyi/open-url-in-container) by [@honsiorovskyi](https://github.com/honsiorovskyi) and contributors. We're grateful for their foundational work.
