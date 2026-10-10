/**
 * Daniskills 3.3 — Optical Intelligence layer.
 * Catalog entries are prompt-planning references, not a physical lens simulator.
 * Verify exact SKU, mount, image circle, T-stop and close-focus data before production.
 */
export type SensorFormat = 'super35' | 'full-frame' | 'large-format' | 'medium-format' | 'unknown';
export type LensFamily = 'spherical-cinema-prime' | 'anamorphic-cinema-prime' | 'photo-prime' | 'cine-zoom' | 'macro-probe' | 'vintage-character' | 'tilt-shift';
export type OpticalIntent = 'natural' | 'portrait' | 'environmental' | 'compression' | 'macro' | 'anamorphic' | 'vintage' | 'product' | 'action';
export type PromptEngine = 'comfyui' | 'flux' | 'midjourney' | 'video' | 'generic';

export interface LensProfile {
  id: string;
  name: string;
  manufacturer: string;
  family: LensFamily;
  focalLengthsMm: number[];
  apertureLabel?: string;
  formats: SensorFormat[];
  character: string[];
  bestFor: OpticalIntent[];
  tags: string[];
  sourceUrl: string;
  verification: 'manufacturer-family-reference' | 'model-reference-needs-sku-check';
}

export interface CameraFormatProfile {
  id: string;
  name: string;
  sensorFormat: SensorFormat;
  sensorWidthMm?: number;
  shutterNotes: string;
  sourceUrl: string;
}

export interface OpticalRequest {
  intent?: OpticalIntent;
  focalLengthMm?: number;
  sensorFormat?: SensorFormat;
  lensFamily?: LensFamily;
  aperture?: string;
  camera?: string;
  movement?: string;
  focusBehavior?: string;
  depthOfField?: 'shallow' | 'moderate' | 'deep';
  anamorphic?: boolean;
  engine?: PromptEngine;
}

export interface OpticalResolution {
  lens: LensProfile;
  requestedFocalLengthMm: number;
  selectedFocalLengthMm: number;
  sensorFormat: SensorFormat;
  compatibility: 'format-plausible' | 'verify-image-circle-and-mount' | 'unknown-format';
  opticalNotes: string[];
  promptTokens: string[];
  prompt: string;
  caveats: string[];
}

export const CAMERA_FORMATS: CameraFormatProfile[] = [
  { id: 'arri-alexa-mini-lf', name: 'ARRI ALEXA Mini LF', sensorFormat: 'large-format', sensorWidthMm: 36.7, shutterNotes: 'Electronic shutter angle can be specified in degrees; verify recording mode and frame-rate limits.', sourceUrl: 'https://www.arri.com/en/camera-systems/cameras/alexa-mini-lf' },
  { id: 'arri-alexa-35', name: 'ARRI ALEXA 35', sensorFormat: 'super35', shutterNotes: 'Electronic shutter angle; verify mode-specific limits.', sourceUrl: 'https://www.arri.com/en/camera-systems/cameras/alexa-35' },
  { id: 'sony-venice-2', name: 'Sony VENICE 2', sensorFormat: 'large-format', shutterNotes: 'Sensor/resolution configuration depends on VENICE 2 version; specify the exact body and mode.', sourceUrl: 'https://pro.sony/ue_US/products/digital-cinema-cameras/venice-2' },
  { id: 'red-v-raptor', name: 'RED V-RAPTOR', sensorFormat: 'large-format', shutterNotes: 'Rolling-shutter behavior and readout depend on recording mode; do not describe as global shutter.', sourceUrl: 'https://www.red.com/v-raptor' },
  { id: 'red-komodo', name: 'RED KOMODO', sensorFormat: 'super35', shutterNotes: 'Global shutter is a defining feature of the KOMODO sensor.', sourceUrl: 'https://www.red.com/komodo' },
  { id: 'canon-c70', name: 'Canon EOS C70', sensorFormat: 'super35', shutterNotes: 'Super 35 DGO sensor; verify selected frame rate and recording mode.', sourceUrl: 'https://www.usa.canon.com/cameras/eos-c70' },
  { id: 'sony-fx6', name: 'Sony FX6', sensorFormat: 'full-frame', shutterNotes: 'Full-frame sensor; use a compatible E-mount lens in a real-camera plan.', sourceUrl: 'https://pro.sony/ue_US/products/handheld-camcorders/ilme-fx6v' },
];

export const LENS_CATALOG: LensProfile[] = [
  { id: 'cooke-s8i', name: 'Cooke S8/i Full Frame Plus', manufacturer: 'Cooke', family: 'spherical-cinema-prime', focalLengthsMm: [18, 21, 25, 27, 32, 35, 40, 50, 65, 75, 100, 135], apertureLabel: 'T1.4 family (verify focal-length-specific data)', formats: ['full-frame', 'large-format'], character: ['organic skin rendering', 'smooth tonal transitions', 'controlled modern contrast'], bestFor: ['portrait', 'natural', 'environmental'], tags: ['cooke-look', 'cinema-prime', 'natural-skin', 'controlled-bokeh'], sourceUrl: 'https://cookeoptics.com/', verification: 'manufacturer-family-reference' },
  { id: 'arri-signature-prime', name: 'ARRI Signature Prime', manufacturer: 'ARRI', family: 'spherical-cinema-prime', focalLengthsMm: [12, 15, 18, 21, 25, 29, 35, 40, 47, 58, 75, 95, 125, 150], apertureLabel: 'T1.8 family (verify individual lens)', formats: ['full-frame', 'large-format'], character: ['high resolution with smooth roll-off', 'neutral-to-gentle rendering'], bestFor: ['natural', 'portrait', 'environmental'], tags: ['large-format-prime', 'clean-detail', 'smooth-highlight-rolloff'], sourceUrl: 'https://www.arri.com/en/camera-systems/cine-lenses', verification: 'manufacturer-family-reference' },
  { id: 'zeiss-supreme-prime', name: 'ZEISS Supreme Prime', manufacturer: 'ZEISS', family: 'spherical-cinema-prime', focalLengthsMm: [15, 18, 21, 25, 29, 35, 40, 50, 65, 85, 100, 135], apertureLabel: 'T1.5 family (check special focal lengths)', formats: ['full-frame', 'large-format'], character: ['high microcontrast', 'controlled aberrations', 'consistent family rendering'], bestFor: ['natural', 'portrait', 'environmental', 'action'], tags: ['zeiss-cinema', 'high-microcontrast', 'consistent-set'], sourceUrl: 'https://www.zeiss.com/consumer-products/int/cinematography.html', verification: 'manufacturer-family-reference' },
  { id: 'leitz-summilux-c', name: 'Leitz SUMMILUX-C', manufacturer: 'Leitz', family: 'spherical-cinema-prime', focalLengthsMm: [16, 18, 21, 25, 29, 35, 40, 50, 65, 75, 100, 135], apertureLabel: 'T1.4 family; verify exact set and format', formats: ['super35'], character: ['compact cine-prime rendering', 'controlled contrast'], bestFor: ['portrait', 'natural', 'action'], tags: ['summilux-c', 'compact-cinema-prime', 'super35'], sourceUrl: 'https://www.leitz-cine.com/', verification: 'manufacturer-family-reference' },
  { id: 'arri-master-anamorphic', name: 'ARRI Master Anamorphic', manufacturer: 'ARRI', family: 'anamorphic-cinema-prime', focalLengthsMm: [28, 35, 40, 50, 60, 75, 100, 135], apertureLabel: 'T1.9 family (verify individual lens)', formats: ['super35'], character: ['anamorphic rendering', 'oval bokeh', 'controlled horizontal flare'], bestFor: ['anamorphic', 'portrait', 'environmental'], tags: ['anamorphic-squeeze', 'oval-bokeh', 'horizontal-flare'], sourceUrl: 'https://www.arri.com/en/camera-systems/cine-lenses', verification: 'manufacturer-family-reference' },
  { id: 'atlas-orion', name: 'Atlas Orion Anamorphic', manufacturer: 'Atlas Lens Co.', family: 'anamorphic-cinema-prime', focalLengthsMm: [18, 25, 32, 40, 50, 65, 80, 100], formats: ['super35'], character: ['cinematic anamorphic artifacts', 'horizontal streak flare varies with source and lighting'], bestFor: ['anamorphic', 'environmental', 'portrait'], tags: ['anamorphic', 'oval-bokeh', 'streak-flare'], sourceUrl: 'https://atlaslensco.com/', verification: 'manufacturer-family-reference' },
  { id: 'panavision-c-series', name: 'Panavision C-Series Anamorphic', manufacturer: 'Panavision', family: 'anamorphic-cinema-prime', focalLengthsMm: [35, 40, 50, 75, 100, 135], formats: ['super35'], character: ['vintage anamorphic character', 'field-dependent softness and flare'], bestFor: ['anamorphic', 'vintage', 'portrait'], tags: ['vintage-anamorphic', 'oval-bokeh', 'character-flare'], sourceUrl: 'https://www.panavision.com/', verification: 'manufacturer-family-reference' },
  { id: 'sony-g-master-primes', name: 'Sony G Master fast primes (photo lens family)', manufacturer: 'Sony', family: 'photo-prime', focalLengthsMm: [14, 24, 35, 50, 85, 135], apertureLabel: 'Varies by model; do not infer one aperture for the family', formats: ['full-frame'], character: ['high-resolution photographic rendering', 'autofocus-first stills design'], bestFor: ['portrait', 'natural', 'environmental', 'action'], tags: ['photo-prime', 'high-resolution', 'fast-prime'], sourceUrl: 'https://www.sony.com/lenses', verification: 'manufacturer-family-reference' },
  { id: 'sigma-art-primes', name: 'Sigma Art primes', manufacturer: 'Sigma', family: 'photo-prime', focalLengthsMm: [20, 24, 35, 40, 50, 85, 105, 135], apertureLabel: 'Varies by model; check mount and exact SKU', formats: ['full-frame'], character: ['high detail', 'modern contrast', 'model-dependent bokeh'], bestFor: ['portrait', 'natural', 'product', 'macro'], tags: ['photo-prime', 'high-detail', 'modern-rendering'], sourceUrl: 'https://www.sigma-global.com/en/lenses/', verification: 'manufacturer-family-reference' },
  { id: 'canon-rf-l-primes', name: 'Canon RF L fast primes', manufacturer: 'Canon', family: 'photo-prime', focalLengthsMm: [24, 35, 50, 85, 135], apertureLabel: 'Varies by model; verify exact SKU', formats: ['full-frame'], character: ['high-end photographic rendering', 'lens-specific bokeh and aberration control'], bestFor: ['portrait', 'natural', 'product'], tags: ['photo-prime', 'fast-prime', 'portrait-detail'], sourceUrl: 'https://www.canon-europe.com/cameras/rf-lenses/', verification: 'manufacturer-family-reference' },
  { id: 'nikon-z-s-primes', name: 'NIKKOR Z S primes', manufacturer: 'Nikon', family: 'photo-prime', focalLengthsMm: [20, 24, 35, 50, 85, 105, 135], apertureLabel: 'Varies by model; verify exact SKU', formats: ['full-frame'], character: ['high-resolution stills rendering', 'lens-specific contrast and bokeh'], bestFor: ['portrait', 'natural', 'product'], tags: ['photo-prime', 'high-resolution', 'portrait'], sourceUrl: 'https://imaging.nikon.com/imaging/lineup/lens/z-mount/', verification: 'manufacturer-family-reference' },
  { id: 'canon-k35', name: 'Canon K-35 vintage cine primes', manufacturer: 'Canon', family: 'vintage-character', focalLengthsMm: [18, 24, 35, 55, 85], formats: ['super35'], character: ['vintage contrast', 'possible veiling flare', 'soft highlight character depending on lens condition'], bestFor: ['vintage', 'portrait', 'natural'], tags: ['vintage-cinema', 'veiling-flare', 'gentle-microcontrast'], sourceUrl: 'https://global.canon/en/c-museum/', verification: 'manufacturer-family-reference' },
  { id: 'vintage-fd-ai-s-rokkor', name: 'Vintage Canon FD / Nikon AI-S / Minolta Rokkor', manufacturer: 'Multiple', family: 'vintage-character', focalLengthsMm: [24, 28, 35, 50, 58, 85, 100, 135], formats: ['full-frame', 'super35'], character: ['sample-dependent rendering', 'potential flare and lower contrast', 'optical condition strongly affects result'], bestFor: ['vintage', 'portrait', 'natural'], tags: ['vintage-glass', 'imperfect-flare', 'character-bokeh'], sourceUrl: 'https://global.canon/en/c-museum/', verification: 'model-reference-needs-sku-check' },
  { id: 'laowa-probe', name: 'Laowa Probe / macro cine lenses', manufacturer: 'Venus Optics', family: 'macro-probe', focalLengthsMm: [24, 25, 28], formats: ['super35', 'full-frame'], character: ['extreme close-focus perspective', 'near-subject parallax', 'deep environmental macro compositions'], bestFor: ['macro', 'product', 'action'], tags: ['probe-lens', 'extreme-close-up', 'macro-perspective'], sourceUrl: 'https://www.venuslens.net/', verification: 'model-reference-needs-sku-check' },
  { id: 'cine-zoom-premium', name: 'Premium cine zoom families (Angénieux Optimo / ZEISS Cinema Zoom)', manufacturer: 'Multiple', family: 'cine-zoom', focalLengthsMm: [15, 16, 18, 24, 28, 35, 50, 70, 100, 135, 200], formats: ['super35', 'full-frame', 'large-format'], character: ['production-flexible focal range', 'consistent exposure is model-dependent', 'parfocal behavior must be verified per SKU'], bestFor: ['action', 'natural', 'environmental'], tags: ['cine-zoom', 'focal-length-flexibility', 'production-coverage'], sourceUrl: 'https://www.angenieux.com/', verification: 'model-reference-needs-sku-check' },
  { id: 'tilt-shift', name: 'Tilt-shift perspective-control lenses', manufacturer: 'Multiple', family: 'tilt-shift', focalLengthsMm: [17, 24, 45, 50, 90, 135], formats: ['full-frame', 'medium-format'], character: ['selective plane of focus', 'perspective correction', 'shift/tilt range depends on lens'], bestFor: ['product', 'environmental', 'macro'], tags: ['tilt-shift', 'perspective-control', 'selective-focus'], sourceUrl: 'https://www.canon-europe.com/cameras/tilt-shift-lenses/', verification: 'model-reference-needs-sku-check' },
];

const DEFAULT_FOCAL: Record<OpticalIntent, number> = {
  natural: 50, portrait: 85, environmental: 28, compression: 135, macro: 100,
  anamorphic: 50, vintage: 50, product: 65, action: 35,
};

function nearestFocal(available: number[], requested: number): number {
  return [...available].sort((a, b) => Math.abs(a - requested) - Math.abs(b - requested))[0];
}

function familyMatches(lens: LensProfile, request: OpticalRequest): boolean {
  if (request.lensFamily && lens.family !== request.lensFamily) return false;
  if (request.anamorphic && lens.family !== 'anamorphic-cinema-prime') return false;
  if (request.intent && !lens.bestFor.includes(request.intent)) return false;
  if (request.sensorFormat && request.sensorFormat !== 'unknown' && !lens.formats.includes(request.sensorFormat)) return false;
  return true;
}

/** Deterministic catalog resolver; never claims exact physical compatibility without SKU data. */
export function resolveOptics(request: OpticalRequest = {}): OpticalResolution {
  const intent = request.intent ?? (request.anamorphic ? 'anamorphic' : 'natural');
  const focal = request.focalLengthMm ?? DEFAULT_FOCAL[intent];
  const format = request.sensorFormat ?? 'unknown';
  const candidates = LENS_CATALOG.filter(lens => familyMatches(lens, { ...request, intent }));
  const pool = candidates.length ? candidates : LENS_CATALOG.filter(lens => !request.sensorFormat || lens.formats.includes(format) || format === 'unknown');
  const lens = [...pool].sort((a, b) => {
    const da = Math.abs(nearestFocal(a.focalLengthsMm, focal) - focal);
    const db = Math.abs(nearestFocal(b.focalLengthsMm, focal) - focal);
    return da - db;
  })[0] ?? LENS_CATALOG[0];
  const selectedFocal = nearestFocal(lens.focalLengthsMm, focal);
  const compatibility = format === 'unknown' ? 'unknown-format' : lens.formats.includes(format) ? 'format-plausible' : 'verify-image-circle-and-mount';
  const aperture = request.aperture ? `aperture ${request.aperture}` : request.depthOfField === 'shallow' ? 'shallow depth of field, focus plane intentionally isolated' : request.depthOfField === 'deep' ? 'deep depth of field, stopped-down look' : 'moderate depth of field';
  const tokens = [
    `${selectedFocal}mm lens`, lens.name, aperture,
    ...lens.tags,
    ...(request.movement ? [`camera movement: ${request.movement}`] : []),
    ...(request.focusBehavior ? [`focus behavior: ${request.focusBehavior}`] : []),
  ];
  const caveats = [
    'Perspective is controlled primarily by camera position, not focal length alone.',
    'Focal length and sensor format jointly determine field of view; crop and image-circle compatibility need exact camera/lens data.',
    'A lens name in an image/video model is a semantic prompt cue, not a guarantee of physically accurate optical simulation.',
    'Confirm exact SKU, mount, image circle, minimum focus, T-stop, breathing and distortion from manufacturer documentation for a real-camera plan.',
  ];
  if (request.anamorphic || lens.family === 'anamorphic-cinema-prime') caveats.push('Anamorphic squeeze ratio and desqueeze workflow are model-specific; do not assume a ratio from the family name.');
  if (request.aperture?.startsWith('T')) caveats.push('T-stop is a transmission rating; f-number describes geometric aperture. Do not treat them as interchangeable.');
  const enginePrefix = request.engine === 'midjourney' ? 'cinematic optics, ' : request.engine === 'comfyui' || request.engine === 'flux' ? 'optical reference: ' : '';
  return {
    lens,
    requestedFocalLengthMm: focal,
    selectedFocalLengthMm: selectedFocal,
    sensorFormat: format,
    compatibility,
    opticalNotes: [...lens.character],
    promptTokens: tokens,
    prompt: enginePrefix + tokens.join(', '),
    caveats,
  };
}

export function listLenses(filters: { family?: LensFamily; intent?: OpticalIntent; sensorFormat?: SensorFormat } = {}): LensProfile[] {
  return LENS_CATALOG.filter(lens =>
    (!filters.family || lens.family === filters.family) &&
    (!filters.intent || lens.bestFor.includes(filters.intent)) &&
    (!filters.sensorFormat || filters.sensorFormat === 'unknown' || lens.formats.includes(filters.sensorFormat))
  );
}
