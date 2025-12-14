// Prompts Seguros Page - /prompts-seguros
// Safe prompt templates organized by audience

import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import {
  GraduationCap,
  Users,
  Building2,
  Copy,
  Check,
  Search,
  Sparkles,
  Shield,
} from "lucide-react";
import {
  safePrompts,
  getPromptsByCategory,
  searchPrompts,
  type SafePromptTemplate,
  type PromptCategory,
} from "@/data/safe-prompts";

function PromptCard({ prompt }: { prompt: SafePromptTemplate }) {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt.prompt);
      setCopied(true);
      toast({
        title: "Prompt copiado",
        description: "Listo para usar con la IA.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo copiar. Intenta de nuevo.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="bg-card rounded-xl border border-border p-4 hover:border-primary/30 transition-colors">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-semibold text-foreground">{prompt.title}</h3>
          <p className="text-sm text-muted-foreground">{prompt.description}</p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="flex-shrink-0"
        >
          {copied ? (
            <Check className="w-4 h-4 text-salvora-green" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </Button>
      </div>

      <div className="bg-muted/50 rounded-lg p-3 text-sm text-foreground/90 font-mono">
        {prompt.prompt}
      </div>

      {prompt.tags && prompt.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-3">
          {prompt.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

const PromptsSeguro = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<PromptCategory>("estudiantes");

  const filteredPrompts = searchQuery
    ? searchPrompts(searchQuery)
    : getPromptsByCategory(activeTab);

  const studentPrompts = getPromptsByCategory("estudiantes");
  const teacherPrompts = getPromptsByCategory("maestros");
  const adminPrompts = getPromptsByCategory("directores");

  return (
    <Layout>
      <div className="salvora-container py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-foreground mb-2">
            Prompts Seguros
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Plantillas de prompts aprobadas para usar con herramientas de IA.
            Copia, personaliza y aprende de manera responsable.
          </p>
        </div>

        {/* Safety Notice */}
        <div className="bg-salvora-green/10 border border-salvora-green/20 rounded-xl p-4 mb-8 flex items-start gap-3">
          <Shield className="w-5 h-5 text-salvora-green flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-medium text-foreground mb-1">
              Prompts disenados para aprender
            </h4>
            <p className="text-sm text-muted-foreground">
              Estos prompts estan disenados para fomentar el aprendizaje, no para
              hacer trampa. Reemplaza los valores entre [CORCHETES] con tu
              informacion especifica.
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Buscar prompts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Tabs */}
        {!searchQuery && (
          <Tabs
            value={activeTab}
            onValueChange={(v) => setActiveTab(v as PromptCategory)}
            className="mb-6"
          >
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="estudiantes" className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                <span className="hidden sm:inline">Estudiantes</span>
                <span className="sm:hidden">Est.</span>
                <span className="bg-primary/20 text-primary text-xs px-1.5 py-0.5 rounded-full">
                  {studentPrompts.length}
                </span>
              </TabsTrigger>
              <TabsTrigger value="maestros" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span className="hidden sm:inline">Maestros</span>
                <span className="sm:hidden">Mae.</span>
                <span className="bg-primary/20 text-primary text-xs px-1.5 py-0.5 rounded-full">
                  {teacherPrompts.length}
                </span>
              </TabsTrigger>
              <TabsTrigger value="directores" className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                <span className="hidden sm:inline">Directores</span>
                <span className="sm:hidden">Dir.</span>
                <span className="bg-primary/20 text-primary text-xs px-1.5 py-0.5 rounded-full">
                  {adminPrompts.length}
                </span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        )}

        {/* Results */}
        {searchQuery && (
          <div className="mb-4">
            <p className="text-sm text-muted-foreground">
              {filteredPrompts.length} resultado{filteredPrompts.length !== 1 ? "s" : ""} para "{searchQuery}"
            </p>
          </div>
        )}

        {/* Prompt Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredPrompts.map((prompt) => (
            <PromptCard key={prompt.id} prompt={prompt} />
          ))}
        </div>

        {filteredPrompts.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h3 className="text-lg font-medium text-foreground mb-2">
              No se encontraron prompts
            </h3>
            <p className="text-muted-foreground">
              Intenta con otros terminos de busqueda
            </p>
          </div>
        )}

        {/* Footer Tips */}
        <div className="mt-12 bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-4">
            Tips para usar estos prompts
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary">1.</span>
              Reemplaza todo lo que este entre [CORCHETES] con tu informacion especifica
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">2.</span>
              Agrega contexto salvadoreno para obtener respuestas mas relevantes
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">3.</span>
              Si la respuesta no es util, reformula la pregunta con mas detalles
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">4.</span>
              Siempre verifica informacion importante con fuentes confiables
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default PromptsSeguro;
