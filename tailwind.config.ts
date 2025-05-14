import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        card: "var(--card)",
        "primary-text": "var(--textPrimary)",
        "secondary-text": "var(--textSecondary)",
        accent: "var(--accent)",
        error: "var(--error)",
        success: "var(--success)",
        warning: "var(--warning)",
        info: "var(--info)",

        // hover
        "primary-hover": "var(--primary-hover)",
        "secondary-hover": "var(--secondary-hover)",
        "card-hover": "var(--card-hover)",
        "primary-text-hover": "var(--text-primary-hover)",
        "secondary-text-hover": "var(--text-secondary-hover)",
        "accent-hover": "var(--accent-hover)",
        "error-hover": "var(--error-hover)",
        "success-hover": "var(--success-hover)",
        "warning-hover": "var(--warning-hover)",
        "info-hover": "var(--info-hover)",
      },
    },
  },
  plugins: [],
} satisfies Config;
