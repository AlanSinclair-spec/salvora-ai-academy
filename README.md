# Salvora AI Academy

[![Built with Lovable](https://img.shields.io/badge/Built%20with-Lovable-ff69b4)](https://lovable.dev)
[![Open Source](https://img.shields.io/badge/Open%20Source-MIT-green)](LICENSE)
[![React](https://img.shields.io/badge/React-18.3-61dafb)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com)

> **"No student gets left behind in the age of AI"**

Free AI literacy platform for El Salvador's public schools, aligned with the national xAI/Grok rollout. Salvora prepares teachers and students to use AI responsibly and effectively.

## Live Demo

**[https://salvora.app](https://salvora.app)**

---

## Key Features

### For Everyone
- **35 Localized Lessons** - All in Spanish, culturally adapted for El Salvador
- **Video-Centric Learning** - Every lesson starts with a YouTube video for low-literacy accessibility
- **Mobile-First Design** - Optimized for 3G/slow connections with Lite Mode
- **Text-to-Speech (Guía Oral)** - Audio support for all content

### For Teachers
- **Lesson Plan Generator** - AI-powered templates for classroom use
- **Quiz Creator** - Generate assessments instantly
- **Rubric Builder** - Create grading criteria with AI assistance
- **Classroom Mode** - Group discussion timers and activity tools

### For Students
- **Safe AI Chat** - Content-filtered conversations with learning focus
- **Study Helper** - AI tutoring with anti-cheating guardrails
- **Progress Tracking** - Track completion across all courses

### Grok-Ready Integration
- **xAI Partnership Aligned** - Ready for Grok API when available
- **Responsible AI Framework** - Safety checks and ethical guidelines built-in
- **Demo Mode** - Works offline with simulated AI responses

---

## Screenshots

| Courses | Lesson View | Teacher Tools |
|---------|-------------|---------------|
| ![Courses](docs/screenshots/courses.png) | ![Lesson](docs/screenshots/lesson.png) | ![Tools](docs/screenshots/tools.png) |

| Progress Tracking | Grok Integration | Mobile View |
|-------------------|------------------|-------------|
| ![Progress](docs/screenshots/progress.png) | ![Grok](docs/screenshots/grok.png) | ![Mobile](docs/screenshots/mobile.png) |

---

## Course Structure

| Course | Lessons | Audience |
|--------|---------|----------|
| Introducción a la IA | 12 | Everyone |
| IA para Maestros | 9 | Teachers |
| IA para Estudiantes | 7 | Students |
| IA en la Vida Real | 7 | Everyone |

**Total: 35 lessons across 4 courses**

Each lesson includes:
- YouTube video (Spanish, beginner-friendly)
- Text-to-Speech support
- Practice questions with feedback
- Salvadoran cultural context
- Responsible AI reminders

---

## Tech Stack

- **Frontend**: React 18.3 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Backend**: Supabase (Edge Functions)
- **AI**: xAI Grok API (when available) / Demo mode
- **Hosting**: Lovable / Vercel

---

## Quick Start

### Prerequisites
- Node.js 18+ (recommend using [nvm](https://github.com/nvm-sh/nvm))
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/AlanSinclair-spec/salvora-ai-academy.git

# Navigate to project
cd salvora-ai-academy

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Variables

Create a `.env` file in the root directory:

```env
# Supabase (required for AI features)
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# AI Mode: "demo" (default) or "xai" (when API available)
VITE_AI_MODE=demo

# Demo Mode: Shows pre-filled examples
VITE_DEMO_MODE=false
```

### Build for Production

```bash
npm run build
```

---

## Project Structure

```
salvora-ai-academy/
├── src/
│   ├── components/      # React components
│   │   ├── layout/      # Header, Footer, Navbar
│   │   ├── lesson/      # Lesson display components
│   │   ├── tools/       # AI tools (SafeChat, etc.)
│   │   └── ui/          # shadcn/ui components
│   ├── contexts/        # React contexts (Progress, Settings)
│   ├── data/            # Course & lesson content
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Route pages
│   ├── services/        # AI providers, TTS
│   └── types/           # TypeScript definitions
├── supabase/
│   └── functions/       # Edge functions (Grok AI)
└── public/              # Static assets
```

---

## Contributing

We welcome contributions! Here's how you can help:

### Bug Reports
- Open an issue with reproduction steps
- Include browser/device information
- Screenshots appreciated

### New Lessons
1. Fork the repository
2. Add lesson content to `src/data/lesson-content.ts`
3. Add lesson metadata to `src/data/courses.ts`
4. Submit a pull request

### Translations
- Currently Spanish only
- Open to translations for other Latin American countries
- Contact maintainers for translation guidelines

### Code Contributions
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## Roadmap

- [ ] Offline PWA for rural schools
- [ ] Teacher admin dashboard
- [ ] Certificate generation
- [ ] Analytics dashboard
- [ ] MINED curriculum alignment
- [ ] Live Grok integration (when API available)

---

## Acknowledgments

- **xAI** - For the Grok AI partnership with El Salvador
- **Lovable** - For the development platform
- **El Salvador Ministry of Education** - For educational alignment
- **Platzi** - For complementary advanced learning pathways

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact

- **Website**: [salvora.app](https://salvora.app)
- **GitHub**: [github.com/AlanSinclair-spec/salvora-ai-academy](https://github.com/AlanSinclair-spec/salvora-ai-academy)

---

<p align="center">
  <strong>Built with love for El Salvador's future</strong><br>
  <em>Preparando a la próxima generación para la era de la IA</em>
</p>
