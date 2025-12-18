import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load VITE_ prefixed environment variables
  const env = loadEnv(mode, process.cwd(), "VITE_");

  const resolvedSupabaseUrl =
    env.VITE_SUPABASE_URL ||
    (env.VITE_SUPABASE_PROJECT_ID
      ? `https://${env.VITE_SUPABASE_PROJECT_ID}.supabase.co`
      : "https://drdefwhmvebokgsedxga.supabase.co");

  return {
    server: {
      host: "::",
      port: 8080,
    },
    define: {
      "import.meta.env.VITE_SUPABASE_URL": JSON.stringify(resolvedSupabaseUrl),
      "import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY": JSON.stringify(
        env.VITE_SUPABASE_PUBLISHABLE_KEY || ""
      ),
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});

