import { describe, expect, it } from 'vitest';
import {
  compilePrompt,
  compilePromptForDelivery,
  compileShot,
  compileShotForDelivery
} from '../skillsData';

const minimalShot = {
  shot_id: 'integration-minimal',
  subject: 'object',
  action: 'moves',
  location: 'room',
  camera: { fov_degrees: 47 },
  lighting: 'light'
};

describe('delivery wrappers', () => {
  it('blocks a weak shot at the delivery boundary by default', () => {
    expect(() => compileShotForDelivery(minimalShot, 'veo_3_1'))
      .toThrow(/^QUALITY_GATE_BLOCKED: /);
  });

  it('allows an explicitly overridden shot and attaches its gate result', () => {
    const result = compileShotForDelivery(minimalShot, 'veo_3_1', {
      overrideReason: 'Integration test: explicit editorial override'
    });
    expect(result?.deliveryGate?.allowed).toBe(true);
    expect(result?.deliveryGate?.overrideAccepted).toBe(true);
    expect(result?.warnings.some(w => w.startsWith('QUALITY_DELIVERY_GATE: ALLOW'))).toBe(true);
  });

  it('blocks a prompt at the delivery boundary by default when it fails the quality threshold', () => {
    const req = {
      engineId: 'veo_3_1',
      subject: 'object',
      setting: 'room',
      action: 'moves',
      camera: 'camera',
      lighting: 'light',
      physics: 'moves'
    };
    expect(() => compilePromptForDelivery(req)).toThrow(/^QUALITY_GATE_BLOCKED: /);
  });

  it('keeps the Quality Loop active when Brand Mode G9 is inactive', () => {
    const out = compilePrompt({
      engineId: 'veo_3_1',
      subject: 'A courier crosses a wet stone courtyard',
      setting: 'an enclosed courtyard at dawn',
      action: 'walks toward a metal gate',
      camera: 'slow lateral track',
      lighting: '5600K dawn skylight with warm practical lamps',
      physics: 'footfalls compress water into small ripples',
      brand: { brand: '', product: '', usage: 'organico' }
    });
    expect(out.warnings.some(w => w.startsWith('G9 inativo'))).toBe(true);
    expect(out.warnings.some(w => w.startsWith('QUALITY_LOOP:'))).toBe(true);
  });

  it('runs the Quality Loop with Brand Mode G9 active', () => {
    const out = compilePrompt({
      engineId: 'veo_3_1',
      subject: 'A courier crosses a wet stone courtyard',
      setting: 'an enclosed courtyard at dawn',
      action: 'walks toward a metal gate',
      camera: 'slow lateral track',
      lighting: '5600K dawn skylight with warm practical lamps',
      physics: 'footfalls compress water into small ripples',
      brand: {
        brand: 'Example Camera',
        product: 'X1',
        relationship: 'sem_vinculo',
        context: 'held at chest height',
        contextCompatible: true,
        usage: 'organico',
        referencePhoto: true
      }
    });
    expect(out.disclosure).toBeTruthy();
    expect(out.warnings.some(w => w.startsWith('QUALITY_LOOP:'))).toBe(true);
  });
});
