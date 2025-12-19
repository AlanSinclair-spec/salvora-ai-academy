// Text-to-Speech Service for Salvora AI Academy
// Uses Web Speech API with Spanish voices optimized for low-literacy learners

export interface TTSOptions {
  rate?: number;      // 0.1 to 10, default 0.85 (slightly slower for comprehension)
  pitch?: number;     // 0 to 2, default 1
  volume?: number;    // 0 to 1, default 1
  lang?: string;      // default 'es-ES' or 'es-419' for Latin American Spanish
}

export interface TTSState {
  isSupported: boolean;
  isSpeaking: boolean;
  isPaused: boolean;
  voices: SpeechSynthesisVoice[];
  currentVoice: SpeechSynthesisVoice | null;
}

class TTSService {
  private synth: SpeechSynthesis | null = null;
  private utterance: SpeechSynthesisUtterance | null = null;
  private voices: SpeechSynthesisVoice[] = [];
  private spanishVoice: SpeechSynthesisVoice | null = null;
  private onStateChange: ((state: TTSState) => void) | null = null;
  private onWordBoundary: ((charIndex: number) => void) | null = null;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.loadVoices();

      // Voices may load asynchronously
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  private loadVoices(): void {
    if (!this.synth) return;

    this.voices = this.synth.getVoices();

    // Prefer Spanish voices in this order:
    // 1. es-419 (Latin American Spanish)
    // 2. es-MX (Mexican Spanish - common and clear)
    // 3. es-ES (Spain Spanish)
    // 4. Any Spanish voice
    const preferredLangs = ['es-419', 'es-MX', 'es-ES', 'es'];

    for (const lang of preferredLangs) {
      const voice = this.voices.find(v =>
        v.lang.startsWith(lang) || v.lang === lang
      );
      if (voice) {
        this.spanishVoice = voice;
        break;
      }
    }

    // Fallback: any Spanish voice
    if (!this.spanishVoice) {
      this.spanishVoice = this.voices.find(v =>
        v.lang.toLowerCase().includes('es')
      ) || null;
    }

    this.notifyStateChange();
  }

  private notifyStateChange(): void {
    if (this.onStateChange) {
      this.onStateChange(this.getState());
    }
  }

  public getState(): TTSState {
    return {
      isSupported: this.synth !== null,
      isSpeaking: this.synth?.speaking || false,
      isPaused: this.synth?.paused || false,
      voices: this.voices,
      currentVoice: this.spanishVoice,
    };
  }

  public setStateChangeCallback(callback: (state: TTSState) => void): void {
    this.onStateChange = callback;
  }

  public setWordBoundaryCallback(callback: (charIndex: number) => void): void {
    this.onWordBoundary = callback;
  }

  public speak(text: string, options: TTSOptions = {}): boolean {
    if (!this.synth) {
      console.warn('TTS not supported in this browser');
      return false;
    }

    // Cancel any ongoing speech
    this.stop();

    // Clean text for better pronunciation
    const cleanText = this.cleanTextForSpeech(text);

    this.utterance = new SpeechSynthesisUtterance(cleanText);

    // Set voice
    if (this.spanishVoice) {
      this.utterance.voice = this.spanishVoice;
    }

    // Set options with defaults optimized for comprehension
    this.utterance.rate = options.rate ?? 0.85;  // Slightly slower
    this.utterance.pitch = options.pitch ?? 1;
    this.utterance.volume = options.volume ?? 1;
    this.utterance.lang = options.lang ?? this.spanishVoice?.lang ?? 'es-ES';

    // Event handlers
    this.utterance.onstart = () => this.notifyStateChange();
    this.utterance.onend = () => this.notifyStateChange();
    this.utterance.onpause = () => this.notifyStateChange();
    this.utterance.onresume = () => this.notifyStateChange();
    this.utterance.onerror = (e) => {
      console.error('TTS Error:', e);
      this.notifyStateChange();
    };

    // Word boundary for karaoke-style highlighting
    this.utterance.onboundary = (event) => {
      if (event.name === 'word' && this.onWordBoundary) {
        this.onWordBoundary(event.charIndex);
      }
    };

    this.synth.speak(this.utterance);
    return true;
  }

  public pause(): void {
    if (this.synth?.speaking) {
      this.synth.pause();
      this.notifyStateChange();
    }
  }

  public resume(): void {
    if (this.synth?.paused) {
      this.synth.resume();
      this.notifyStateChange();
    }
  }

  public stop(): void {
    if (this.synth) {
      this.synth.cancel();
      this.utterance = null;
      this.notifyStateChange();
    }
  }

  public toggle(text: string, options?: TTSOptions): void {
    if (this.synth?.speaking && !this.synth?.paused) {
      this.pause();
    } else if (this.synth?.paused) {
      this.resume();
    } else {
      this.speak(text, options);
    }
  }

  private cleanTextForSpeech(text: string): string {
    return text
      // Remove markdown formatting
      .replace(/\*\*([^*]+)\*\*/g, '$1')  // Bold
      .replace(/\*([^*]+)\*/g, '$1')       // Italic
      .replace(/`([^`]+)`/g, '$1')         // Code
      .replace(/#{1,6}\s/g, '')            // Headers
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')  // Links
      // Remove HTML tags
      .replace(/<[^>]+>/g, '')
      // Remove extra whitespace
      .replace(/\s+/g, ' ')
      // Add pauses for better comprehension
      .replace(/\./g, '. ')
      .replace(/,/g, ', ')
      .trim();
  }

  public getSpanishVoices(): SpeechSynthesisVoice[] {
    return this.voices.filter(v =>
      v.lang.toLowerCase().startsWith('es')
    );
  }

  public setVoice(voice: SpeechSynthesisVoice): void {
    this.spanishVoice = voice;
    this.notifyStateChange();
  }
}

// Singleton instance
export const ttsService = new TTSService();

export default ttsService;
