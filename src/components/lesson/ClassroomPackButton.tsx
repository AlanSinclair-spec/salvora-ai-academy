// Classroom Pack Button
// Secondary button that opens the classroom pack modal

import { Package, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ClassroomPackButtonProps {
  onClick: () => void;
}

export function ClassroomPackButton({ onClick }: ClassroomPackButtonProps) {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onClick}
      className="gap-2 border-salvora-purple/30 text-salvora-purple hover:bg-salvora-purple/10"
    >
      <Package className="w-4 h-4" />
      <span className="hidden sm:inline">Paquete de aula</span>
      <FileText className="w-3 h-3 sm:hidden" />
    </Button>
  );
}
