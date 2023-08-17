import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // o grid aceita a função minmax que deixa mais responsivo o layout
        app: 'minmax(18rem, 20rem) 1fr',
        profile: 'max-content 1fr min-content',
      },
    },
  },
  plugins: [],
}
export default config
