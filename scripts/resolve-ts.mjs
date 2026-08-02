import { existsSync } from "node:fs";
import { registerHooks } from "node:module";
import { fileURLToPath } from "node:url";

/**
 * Erlaubt Node, die endungslosen relativen Importe aus src/content
 * aufzulösen (`from "../placeholder"`).
 *
 * Next und TypeScript lösen das über Bundler-Resolution auf; das nackte
 * Node-ESM nicht. Statt in jeder Content-Datei ".ts" anzuhängen — was den
 * Code nur für dieses eine Skript verbiegen würde — hängt dieser Hook die
 * Endung beim Auflösen an. Keine Dependency, ~15 Zeilen.
 *
 * Wird über `node --import ./scripts/resolve-ts.mjs` geladen.
 */
registerHooks({
  resolve(specifier, context, nextResolve) {
    if (specifier.startsWith(".") && !/\.[mc]?[jt]s$/.test(specifier)) {
      const base = new URL(specifier, context.parentURL);
      for (const candidate of [`${base.href}.ts`, `${base.href}/index.ts`]) {
        if (existsSync(fileURLToPath(candidate))) {
          return { url: candidate, format: "module-typescript", shortCircuit: true };
        }
      }
    }
    return nextResolve(specifier, context);
  },
});
