import { describe, expect, it } from 'vitest';
import { CAMERA_FORMATS, LENS_CATALOG, listLenses, resolveOptics } from '../opticsCatalog';

describe('Optical Intelligence catalog', () => {
  it('contains a substantial, uniquely keyed lens catalog', () => {
    expect(LENS_CATALOG.length).toBeGreaterThanOrEqual(12);
    expect(new Set(LENS_CATALOG.map(lens => lens.id)).size).toBe(LENS_CATALOG.length);
  });

  it('contains camera format references with manufacturer source URLs', () => {
    expect(CAMERA_FORMATS.length).toBeGreaterThanOrEqual(5);
    expect(CAMERA_FORMATS.every(camera => camera.sourceUrl.startsWith('https://'))).toBe(true);
  });

  it('selects a portrait-oriented lens and emits prompt-ready tokens', () => {
    const result = resolveOptics({ intent: 'portrait', focalLengthMm: 85, sensorFormat: 'full-frame' });
    expect(result.requestedFocalLengthMm).toBe(85);
    expect(result.lens.bestFor).toContain('portrait');
    expect(result.prompt).toContain('mm lens');
    expect(result.promptTokens.length).toBeGreaterThan(2);
  });

  it('prefers anamorphic families when anamorphic intent is explicit', () => {
    const result = resolveOptics({ intent: 'anamorphic', anamorphic: true, focalLengthMm: 50 });
    expect(result.lens.family).toBe('anamorphic-cinema-prime');
    expect(result.caveats.some(note => note.includes('squeeze ratio'))).toBe(true);
  });

  it('keeps format compatibility qualified rather than making false exact-mount claims', () => {
    const known = resolveOptics({ intent: 'portrait', sensorFormat: 'full-frame' });
    const unknown = resolveOptics({ intent: 'portrait' });
    expect(['format-plausible', 'verify-image-circle-and-mount']).toContain(known.compatibility);
    expect(unknown.compatibility).toBe('unknown-format');
    expect(known.caveats.some(note => note.includes('exact SKU'))).toBe(true);
  });

  it('filters catalog by requested family, intent and format', () => {
    const lenses = listLenses({ family: 'anamorphic-cinema-prime', sensorFormat: 'super35' });
    expect(lenses.length).toBeGreaterThan(0);
    expect(lenses.every(lens => lens.family === 'anamorphic-cinema-prime' && lens.formats.includes('super35'))).toBe(true);
  });

  it('does not conflate T-stop and f-number', () => {
    const result = resolveOptics({ aperture: 'T2.0', intent: 'natural' });
    expect(result.caveats.some(note => note.includes('T-stop is a transmission rating'))).toBe(true);
  });
});
