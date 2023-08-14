import { defineConfig } from "tsup";

type ENV = "development" | "production";
const env = process.env.NODE_ENV as ENV;

export default defineConfig({
  entry: ["./src/index.ts"],
  target: "es2015",
  shims: true,
  platform: "node",
  treeshake: true,
  watch: env === "development",
  dts: true,
  splitting: false,
  sourcemap: env === "development",
  clean: true,
  minify: env === "production",
  format: ["esm"],
});
