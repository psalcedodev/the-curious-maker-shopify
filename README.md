# the-curious-maker-shopify

Shopify theme for The Curious Maker.

## Local Development Setup

### Prerequisites

1. Install Node.js (v18 or higher recommended)
2. Install Shopify CLI globally:

```bash
npm install -g @shopify/cli @shopify/theme
```

Or using Homebrew on macOS:
```bash
brew tap shopify/shopify && brew install shopify-cli
```

### Getting Started

1. **Start local development server:**
   ```bash
   npm run dev
   ```
   Or directly:
   ```bash
   shopify theme dev
   ```

2. **First time setup:**
   - The CLI will prompt you to log in to your Shopify store
   - **Required permissions:** Your account needs access to the store with **Themes** permission
     - If you're the store owner, you already have full access
     - If you're a staff member, ensure you have "Themes" permission enabled in Settings > Users and permissions
   - Select your store from the list (or it will use the store from `shopify.theme.toml`)
   - Choose a development theme (or create a new one)
   - A preview URL will be generated for you

3. **Development workflow:**
   - Make changes to your theme files locally
   - Changes are automatically synced to your development theme
   - Preview changes in real-time using the provided preview URL
   - No need to commit/push until you're ready

### Available Commands

- `npm run dev` - Start local development server with hot reloading
- `npm run push` - Push theme changes to Shopify (when ready to deploy)
- `npm run pull` - Pull theme changes from Shopify
- `npm run check` - Run theme check to validate your theme code

### Workflow

1. **Local Development:** Use `npm run dev` to preview changes on a development theme
2. **Review:** Test your changes using the preview URL
3. **Commit:** Once satisfied, commit your changes to Git
4. **Deploy:** Push to GitHub, which can trigger your deployment workflow to Shopify

### Notes

- The development theme is separate from your live theme
- Changes made during `shopify theme dev` are synced to the development theme only
- Your live theme remains unchanged until you explicitly push/deploy
- Store configuration is saved in `shopify.theme.toml` - update this file if you need to switch stores
- If you get permission errors, verify your account has "Themes" access in Shopify Admin > Settings > Users and permissions
