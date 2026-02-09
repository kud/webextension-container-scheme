# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2026-02-09

### Changed

- **Fork Notice**: This project is now maintained by [@kud](https://github.com/kud) as a fork of [open-url-in-container](https://github.com/honsiorovskyi/open-url-in-container)
- Renamed extension to "Container Scheme" for better clarity
- Updated repository to https://github.com/kud/webextension-container-scheme
- Modernized build tooling with latest dependencies (web-ext 8.9.0, eslint 9.18.0)
- Added comprehensive development scripts for publishing and versioning
- Added code formatting with Prettier
- Added .editorconfig for consistent code style
- Restructured project with root-level package.json
- Added CHANGELOG.md for tracking changes
- Added CONTRIBUTING.md for contribution guidelines

### Fixed

- Fixed typo: "bookmars" → "bookmarks" in manifest.json
- Fixed typo: "Contibutions" → "Contributions" in README.md
- Fixed typo: "recieved" → "received" in README.md

## [2.0.0-alpha.10] - Previous Release

_This was the last release before the fork. For earlier history, see the [original repository](https://github.com/honsiorovskyi/open-url-in-container)._

### Features from Original Project

- Custom protocol handler (`ext+container:`) for opening URLs in specific containers
- UI popup for generating links, bookmarks, and terminal commands
- Container creation on the fly with customizable colors and icons
- Tab pinning support
- Reader mode support
- HMAC-SHA256 signature-based security to prevent clickjacking attacks
- Shell launcher script for Unix-style command-line usage
- Support for bookmarks, terminal commands, and HTML links
