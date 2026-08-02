import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts", "public/**"]),
  {
    rules: {
      "@typescript-eslint/consistent-type-imports": "error",
    },
  },
  {
    // CLAUDE.md §9: Texte gehören in src/content, nicht in JSX.
    // Diese Regel macht das maschinell prüfbar statt nur zur Konvention.
    // Erlaubt bleiben Satzzeichen und Trenner — alles andere muss ein Prop
    // oder ein Import aus src/content sein.
    files: ["src/app/**/*.tsx", "src/components/**/*.tsx"],
    rules: {
      "react/jsx-no-literals": [
        "error",
        {
          noStrings: false,
          allowedStrings: ["/", "·", "—", "–", ",", ".", "%", "*", ":", "|", "+", "→", "©"],
          ignoreProps: true,
        },
      ],
    },
  },
]);

export default eslintConfig;
