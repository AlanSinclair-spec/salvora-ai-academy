// Share Button - WhatsApp-friendly text sharing
// Generates plain text payload with lesson summary, prompt, and practice question

import { useState } from "react";
import { Share2, Copy, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import type { WhatsAppPayload } from "@/types/courses";

interface ShareButtonProps {
  lessonId: string;
  lessonTitle: string;
  payload: WhatsAppPayload;
  courseId: string;
}

export function ShareButton({
  lessonId,
  lessonTitle,
  payload,
  courseId,
}: ShareButtonProps) {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  // Generate the share text
  const generateShareText = (): string => {
    const baseUrl = typeof window !== "undefined" ? window.location.origin : "https://salvora.ai";
    const lessonUrl = `${baseUrl}/leccion/${courseId}/${lessonId}`;

    return `${payload.summary}

Leccion: ${lessonTitle}
${lessonUrl}

Prompt seguro para probar:
"${payload.prompt}"

Pregunta de practica:
${payload.practiceQuestion}

Aprende IA con Salvora`;
  };

  const handleCopy = async () => {
    try {
      const text = generateShareText();
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast({
        title: "Copiado",
        description: "Listo para compartir por WhatsApp.",
      });
      setTimeout(() => {
        setCopied(false);
        setOpen(false);
      }, 1500);
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo copiar. Intenta de nuevo.",
        variant: "destructive",
      });
    }
  };

  const handleWhatsAppShare = () => {
    const text = generateShareText();
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Share2 className="w-4 h-4" />
          <span className="hidden sm:inline">Compartir</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72" align="end">
        <div className="space-y-3">
          <h4 className="font-medium text-foreground text-sm">
            Compartir leccion
          </h4>
          <p className="text-xs text-muted-foreground">
            Comparte un resumen con prompt seguro y pregunta de practica.
          </p>

          {/* Preview */}
          <div className="bg-muted/50 rounded-lg p-2 text-xs text-muted-foreground max-h-32 overflow-y-auto">
            <p className="mb-1 font-medium text-foreground">{payload.summary}</p>
            <p className="text-[10px] opacity-75">
              + link, prompt y pregunta
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopy}
              className="flex-1"
            >
              {copied ? (
                <Check className="w-4 h-4 mr-1 text-salvora-green" />
              ) : (
                <Copy className="w-4 h-4 mr-1" />
              )}
              {copied ? "Copiado" : "Copiar"}
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={handleWhatsAppShare}
              className="flex-1 bg-[#25D366] hover:bg-[#128C7E]"
            >
              <MessageCircle className="w-4 h-4 mr-1" />
              WhatsApp
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
