import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Ensure Lovable Cloud env vars are always available at build time.
  // (Prevents runtime crash: "supabaseUrl is required")
  const env = loadEnv(mode, process.cwd(), "");

  const resolvedSupabaseUrl =
    env.VITE_SUPABASE_URL ||
    (env.VITE_SUPABASE_PROJECT_ID
      ? `https://${env.VITE_SUPABASE_PROJECT_ID}.supabase.co`
      : "");

  return {
    server: {
      host: "::",
      port: 8080,
    },
    define: {
      ...(resolvedSupabaseUrl
        ? { "import.meta.env.VITE_SUPABASE_URL": JSON.stringify(resolvedSupabaseUrl) }
        : {}),
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});

