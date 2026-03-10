# Contributing to Stark UI

First off, thank you so much for considering contributing to Stark UI! 🌟

Whether you're fixing a tiny typo, improving documentation, or building out a massive new component, every single contribution is genuinely appreciated and helps make this project better for everyone. We want this to be a welcoming, friendly space for open-source newcomers and veterans alike.

## How You Can Help

There are so many ways to get involved:

- 📝 **Documentation**: Found a typo? Want to clarify an explanation or add a cool new example? Yes, please!
- 💻 **Code**: We always welcome bug fixes, architectural improvements, DX enhancements, or new features.
- 🐛 **Bug Reports**: If something looks broken, please open an issue with detailed steps to reproduce it. We'd love to fix it!
- 💬 **Discussions**: Have an idea for a component? Want to ask a question or provide feedback? Jump into the discussions, we're all ears.

> **A quick note on design**: We try to keep the overarching visual "look and feel" intentionally opinionated to maintain consistency, so the core team generally takes the lead there. That being said, we absolutely love PRs for bug fixes, code quality improvements, accessibility tweaks, and feature additions!

## Getting Your Local Environment Ready

We've tried to make setting up the project as painless as possible. Here is everything you need to know.

### What You'll Need

| Tool                                                                                  | Required Version |
| :------------------------------------------------------------------------------------ | :--------------- |
| [Node.js](https://nodejs.org/) (or manager like [nvm](https://github.com/nvm-sh/nvm)) | `>= 25`          |
| [pnpm](https://pnpm.io/)                                                              | `>= 10`          |

### Let's Get Started!

Fire up your terminal and run the following commands to get the application running locally:

```bash
# 1. Grab the code
git clone https://github.com/starkinterface/stark-ui.git

# 2. Install all the necessary dependencies
pnpm install

# 3. Spin up the dev server for the framework you want to work on!
pnpm dev:react  # (or pnpm dev:vue, pnpm dev:vanilla)
```

### Before Submitting a PR

To make the review process as smooth as possible, please run these quick checks locally before pushing your code. It goes a long way!

```bash
pnpm typecheck  # Make sure TypeScript is happy
pnpm standard   # Run our formatting and linting rules
pnpm test       # Verify that all tests pass
pnpm build      # Ensure the project builds successfully
```

### Recommended Setup

We highly recommend using a **VS Code-based editor** (like VS Code, Cursor, Antigravity, etc). The workspace will prompt you to install a few recommended extensions. Accepting these will give you the best out-of-the-box developer experience! You can peek at them in `.vscode/extensions.json`.

Again, thank you for being an awesome part of this community! Happy coding! 🎉
