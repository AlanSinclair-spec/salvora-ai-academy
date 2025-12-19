// useTextToSpeech Hook
// React hook for Text-to-Speech functionality in Salvora AI Academy

import { useState, useEffect, useCallback, useRef } from 'react';
import { ttsService, TTSOptions, TTSState } from '@/services/tts-service';

export interface UseTextToSpeechReturn {
  // State
  isSupported: boolean;
  isSpeaking: boolean;
  isPaused: boolean;
  isActive: boolean; // speaking or paused

  // Actions
  speak: (text: string, options?: TTSOptions) => void;
  pause: () => void;
  resume: () => void;
  stop: () => void;
  toggle: (text: string, options?: TTSOptions) => void;

  // For karaoke-style highlighting
  currentWordIndex: number;

  // Voice info
  currentVoice: SpeechSynthesisVoice | null;
  availableVoices: SpeechSynthesisVoice[];
  setVoice: (voice: SpeechSynthesisVoice) => void;
}

export function useTextToSpeech(): UseTextToSpeechReturn {
  const [state, setState] = useState<TTSState>(() => ttsService.getState());
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const currentTextRef = useRef<string>('');

  useEffect(() => {
    // Subscribe to TTS state changes
    ttsService.setStateChangeCallback((newState) => {
      setState(newState);
    });

    // Subscribe to word boundaries for highlighting
    ttsService.setWordBoundaryCallback((charIndex) => {
      setCurrentWordIndex(charIndex);
    });

    // Initial state
    setState(ttsService.getState());

    // Cleanup on unmount
    return () => {
      ttsService.stop();
    };
  }, []);

  const speak = useCallback((text: string, options?: TTSOptions) => {
    currentTextRef.current = text;
    setCurrentWordIndex(0);
    ttsService.speak(text, options);
  }, []);

  const pause = useCallback(() => {
    ttsService.pause();
  }, []);

  const resume = useCallback(() => {
    ttsService.resume();
  }, []);

  const stop = useCallback(() => {
    ttsService.stop();
    setCurrentWordIndex(0);
  }, []);

  const toggle = useCallback((text: string, options?: TTSOptions) => {
    if (currentTextRef.current !== text) {
      // New text, start fresh
      currentTextRef.current = text;
      setCurrentWordIndex(0);
      ttsService.speak(text, options);
    } else {
      // Same text, toggle play/pause
      ttsService.toggle(text, options);
    }
  }, []);

  const setVoice = useCallback((voice: SpeechSynthesisVoice) => {
    ttsService.setVoice(voice);
  }, []);

  return {
    isSupported: state.isSupported,
    isSpeaking: state.isSpeaking,
    isPaused: state.isPaused,
    isActive: state.isSpeaking || state.isPaused,
    speak,
    pause,
    resume,
    stop,
    toggle,
    currentWordIndex,
    currentVoice: state.currentVoice,
    availableVoices: state.voices.filter(v => v.lang.toLowerCase().startsWith('es')),
    setVoice,
  };
}

export default useTextToSpeech;
