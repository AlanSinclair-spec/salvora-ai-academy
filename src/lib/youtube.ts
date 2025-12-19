// YouTube Helper Functions
// Utilities for working with YouTube video IDs and URLs

/**
 * Extract YouTube video ID from various URL formats
 * Supports: youtube.com/watch?v=, youtu.be/, youtube.com/embed/
 */
export function extractYouTubeId(url: string): string | null {
  if (!url) return null;

  // Already just an ID (11 characters, alphanumeric with - and _)
  if (/^[a-zA-Z0-9_-]{11}$/.test(url)) {
    return url;
  }

  const patterns = [
    /(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/,
    /(?:youtu\.be\/)([a-zA-Z0-9_-]{11})/,
    /(?:youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
    /(?:youtube\.com\/v\/)([a-zA-Z0-9_-]{11})/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }

  return null;
}

/**
 * Get YouTube embed URL for iframe
 */
export function getYouTubeEmbedUrl(videoId: string): string {
  return `https://www.youtube.com/embed/${videoId}`;
}

/**
 * Get YouTube watch URL for external links
 */
export function getYouTubeWatchUrl(videoId: string): string {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

/**
 * Get YouTube thumbnail URL
 * Quality options: default, mqdefault, hqdefault, sddefault, maxresdefault
 */
export function getYouTubeThumbnail(
  videoId: string,
  quality: 'default' | 'mq' | 'hq' | 'sd' | 'maxres' = 'hq'
): string {
  const qualityMap = {
    default: 'default',
    mq: 'mqdefault',
    hq: 'hqdefault',
    sd: 'sddefault',
    maxres: 'maxresdefault',
  };
  return `https://img.youtube.com/vi/${videoId}/${qualityMap[quality]}.jpg`;
}

/**
 * Check if a video ID is a placeholder
 */
export function isPlaceholderVideoId(videoId: string | undefined): boolean {
  if (!videoId) return true;
  if (videoId === "placeholder") return true;
  if (videoId.startsWith("placeholder")) return true;
  if (videoId.startsWith("SALVORA_")) return true;
  return false;
}
