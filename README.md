npx sv create .
Ok to proceed? (y) y

┌  Welcome to the Svelte CLI! (v0.6.5)
│
◇  Directory not empty. Continue?
│  Yes
│
◇  Which template would you like?
│  SvelteKit minimal
│
◇  Add type checking with Typescript?
│  Yes, using Typescript syntax
│
◆  Project created
│
◆  What would you like to add to your project? (use arrow keys / space bar)
│  ◼ prettier
│  ◼ eslint
│  ◼ vitest
│  ◼ playwright
│  ◼ tailwindcss (css framework - https://tailwindcss.com)
│  ◻ drizzle
│  ◻ lucia
│  ◻ mdsvex
│  ◻ paraglide
│  ◻ storybook

◆  tailwindcss: Which plugins would you like to add?
│  ◼ typography
│  ◼ forms
│  ◼ container-queries (@tailwindcss/container-queries)
└
◇  Which package manager do you want to install dependencies with?
│  pnpm
│
◆  Successfully setup add-ons
│
◇  Installing dependencies with pnpm...
◆  Successfully setup add-ons
│
◆  Successfully installed dependencies
│
◇  Successfully formatted modified files
│
◇  Project next steps ─────────────────────────────────────────────────────╮
│                                                                          │
│  1: git init && git add -A && git commit -m "Initial commit" (optional)  │
│  2: pnpm dev --open                                                      │
│                                                                          │
│  To close the dev server, hit Ctrl-C                                     │
│                                                                          │
│  Stuck? Visit us at https://svelte.dev/chat                              │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────╯
│
└  You're all set!

$ pnpm dlx sv add tailwindcss
Packages: +1                                                                                                                                                                           
+
Progress: resolved 1, reused 0, downloaded 1, added 1, done
┌  Welcome to the Svelte CLI! (v0.6.5)
│
◇  Which plugins would you like to add?
│  typography, forms, container-queries
│
◇  Which package manager do you want to install dependencies with?
│  pnpm
│
◆  Successfully setup add-ons
│
◆  Successfully installed dependencies
│
◇  Successfully formatted modified files
│
└  You're all set!

$ pnpm i
Lockfile is up to date, resolution step is skipped
Already up to date
Done in 1.1s

pnpm dlx shadcn-svelte@next init

┌   shadcn-svelte  v1.0.0-next.4
│
◇  Which style would you like to use?
│  New York
│
◇  Which base color would you like to use?
│  Slate
│
◇  Where is your global CSS file? (this file will be overwritten)
│  src/lib/app.css
│
◇  Where is your Tailwind config located? (this file will be overwritten)
│  tailwind.config.ts
│
◇  Configure the import alias for components:
│  $lib/components
│
◇  Configure the import alias for utils:
│  $lib/utils
│
◇  Configure the import alias for hooks:
│  $lib/hooks
│
◇  Configure the import alias for ui:
│  $lib/components/ui
│
◇  Config file components.json created
│
◇  Project initialized
│
◇  Dependencies installed with pnpm
│
└  Success! Project initialization completed.


pnpm dlx shadcn-svelte@next add form

┌   shadcn-svelte  v1.0.0-next.4
│
◇  Components to install:
│  form
│
◇  Ready to install components and dependencies?
│  Yes
│
◇  form installed at src\lib\components\ui\form
│
◇  button installed at src\lib\components\ui\button
│
◇  label installed at src\lib\components\ui\label
│
◇  Dependencies installed with pnpm
│
◇  Config file components.json updated
│
└  Success! Component installation completed.