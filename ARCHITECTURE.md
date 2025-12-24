# Salvora Education Architecture (Platzi × Peter Thiel)

## Philosophy

**Platzi Approach**: Categories → Learning Paths → Modules → Lessons → Practice → Application

**Thiel Monopoly Strategy**: Build something 10x better than alternatives, not marginally better. Own the niche completely before expanding.

---

## Structure

### Categories (4 Total)
| Category | Target | Focus |
|----------|--------|-------|
| Fundamentos de IA | Everyone | What is AI, how it works, limits, ethics |
| IA para Maestros | Teachers | Lesson planning, quizzes, responsible classroom use |
| IA para Estudiantes | Students | Study tools, math help, reading comprehension |
| IA en la Vida Real | Everyone | Agriculture, economy, tourism, environment, sports |

### Learning Path Structure
```
Category (Curso)
└── Module (Unidad)
    └── Lesson (Lección)
        ├── Video (primary content delivery)
        ├── Reading (supplementary text)
        ├── Practice (interactive exercises)
        └── Quiz (assessment)
```

---

## National-Scale Lesson Standard

Every lesson includes these 8 components:

### 1. Video Section
- YouTube video (Spanish, beginner-friendly)
- Lite mode: External link to save data
- "He visto el video" confirmation button

### 2. Quick Version Panel (Versión Rápida)
- 3 bullet points summarizing key concepts
- Local example with Salvadoran context
- Safe prompt template for AI interaction

### 3. Local Context Hook (Contexto Local)
- Department rotation (14 departments represented)
- Real-world Salvadoran examples
- Cultural relevance connections

### 4. Safe Prompt Examples
- Template: How to structure prompts
- Good example: Learning-focused use
- Bad example: What NOT to do

### 5. Enhanced Practice Questions
- 4+ questions per lesson
- Explanations for correct answers
- Feedback for incorrect answers
- Hints for struggling learners

### 6. AI Error Tips
- What AI gets wrong
- How to verify AI responses
- Critical thinking prompts

### 7. Responsible AI Reminder
- Student version: Focus on learning, not copying
- Teacher version: Classroom guidance

### 8. WhatsApp Payload
- Shareable summary
- Discussion prompt
- Practice question for home

---

## Progression System

### Lesson Types
| Type | Purpose | Interactivity |
|------|---------|---------------|
| video | Primary content delivery | Watch + confirm |
| reading | Supplementary text | Read + TTS |
| practice | Skill building | Interactive exercises |
| quiz | Assessment | Multiple choice |

### Lesson Gating (Optional)
- First lesson always unlocked
- Subsequent lessons require:
  - Video watched (confirmed)
  - Practice completed (if applicable)
- Can be disabled for open access

### Progress Tracking
- localStorage persistence
- Tracks per-lesson: videoWatched, practiceCompleted, quizScore
- Course completion percentage

---

## Accessibility Features

### Low-Literacy Support
| Feature | Implementation |
|---------|----------------|
| Text-to-Speech (Guía Oral) | Web Speech API with Spanish voices |
| Video-Centric Design | All lessons start with video |
| Lite Mode | External links instead of embeds |
| Visual Icons | Meaningful icons reduce text reliance |

### Classroom Mode
| Feature | Purpose |
|---------|---------|
| Activity Timer | Group discussion timing |
| Role Cards | Facilitador, Relator, Cronometrista |
| Pause Points | Video discussion checkpoints |
| Post-Video Activities | Pair work, recap, roleplay |

---

## Department Coverage (14 Total)

Lessons rotate through departments for local relevance:

1. Apopa
2. San Salvador
3. Santa Ana
4. La Libertad
5. Sonsonate
6. Usulután
7. Chalatenango
8. San Miguel
9. Ahuachapán
10. Morazán
11. La Unión
12. Cuscatlán
13. Cabañas
14. San Vicente

---

## AI Integration

### Current State
- Demo mode: Simulated AI responses
- Ready for xAI Grok API integration

### Activation
```env
VITE_AI_MODE=xai  # Enable live Grok
VITE_AI_MODE=demo # Use demo responses (default)
```

### AI Tools (6 Total)

**For Teachers:**
1. Lesson Planner - Generate lesson plans
2. Quiz Generator - Create assessments
3. Rubric Builder - Create grading criteria

**For Students:**
4. Text Simplifier - Make complex text accessible
5. Math Helper - Step-by-step problem solving
6. Safe Chat - Content-filtered AI conversation

---

## Technical Architecture

### Stack
- React 18.3 + TypeScript + Vite 5.4
- Tailwind CSS 3.4 + shadcn/ui
- Supabase Edge Functions
- Web Speech API for TTS

### State Management
| Context | Purpose |
|---------|---------|
| ProgressContext | Lesson completion tracking |
| SettingsContext | Lite mode, TTS preferences |
| ReadinessContext | AI readiness score |

### Key Directories
```
src/
├── components/lesson/  # VideoLesson, ReadingLesson, etc.
├── components/tools/   # AI tools (SafeChat, etc.)
├── contexts/           # React contexts
├── data/               # courses.ts, lesson-content.ts
├── pages/              # Route pages
├── services/           # AI providers, TTS
└── types/              # TypeScript definitions
```

---

## Success Metrics

| Metric | Target |
|--------|--------|
| Lessons | 35 (complete) |
| Video Coverage | 100% |
| TTS Coverage | 100% |
| Department Coverage | 14/14 |
| Practice Questions | 4+ per lesson |
| Mobile Responsive | Yes |
| Lite Mode | Yes |

---

*Architecture aligned with xAI-El Salvador partnership specification*
*Built for national-scale deployment*
