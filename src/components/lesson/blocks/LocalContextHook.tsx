// Local Context Hook - "Conexion con El Salvador"
// Shows department-specific relevance and Salvadoran context

import { MapPin } from "lucide-react";
import type { LocalContext } from "@/types/courses";

interface LocalContextHookProps {
  localContext: LocalContext;
}

// Department colors for visual variety
const departmentColors: Record<string, string> = {
  Apopa: "from-blue-500/20 to-blue-600/10 border-blue-500/30",
  "San Salvador": "from-primary/20 to-primary/10 border-primary/30",
  "Santa Ana": "from-orange-500/20 to-orange-600/10 border-orange-500/30",
  Sonsonate: "from-green-500/20 to-green-600/10 border-green-500/30",
  "La Libertad": "from-cyan-500/20 to-cyan-600/10 border-cyan-500/30",
  Usulutan: "from-yellow-500/20 to-yellow-600/10 border-yellow-500/30",
  "San Miguel": "from-red-500/20 to-red-600/10 border-red-500/30",
  Ahuachapan: "from-purple-500/20 to-purple-600/10 border-purple-500/30",
  Chalatenango: "from-emerald-500/20 to-emerald-600/10 border-emerald-500/30",
  default: "from-salvora-green/20 to-salvora-green/10 border-salvora-green/30",
};

export function LocalContextHook({ localContext }: LocalContextHookProps) {
  const colorClass = departmentColors[localContext.department] || departmentColors.default;

  return (
    <div
      className={`mb-6 rounded-xl p-4 bg-gradient-to-r ${colorClass} border`}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-card flex items-center justify-center">
          <span className="text-lg">🇸🇻</span>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-semibold text-foreground">
              Conexion con El Salvador
            </h4>
            <span className="flex items-center gap-1 text-xs text-muted-foreground bg-card/50 px-2 py-0.5 rounded-full">
              <MapPin className="w-3 h-3" />
              {localContext.department}
            </span>
          </div>
          <p className="text-foreground/90 text-sm leading-relaxed">
            {localContext.hook}
          </p>
        </div>
      </div>
    </div>
  );
}
