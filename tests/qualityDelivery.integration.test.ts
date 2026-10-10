import { describe, expect, it } from 'vitest';
import {
  compilePrompt,
  compilePromptForDelivery,
  compileShot,
  compileShotForDelivery,
  validateShotTiming
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

  it('flags acting beats that exceed duration or run backwards in time', () => {
    const base = {
      shot_id: 'timing-qa',
      subject: 'A courier',
      action: 'crosses the wet courtyard and opens a gate',
      location: 'a stone courtyard at dawn',
      camera: { fov_degrees: 47, movement: 'slow lateral track' },
      lighting: '5600K skylight',
      duration_s: 6,
      acting_beats: [
        { t: '0s', beat: 'enters frame' },
        { t: '4.5s', beat: 'reaches the gate' },
        { t: '7s', beat: 'opens the gate' }
      ]
    };
    const overrun = validateShotTiming(base);
    expect(overrun.errors.some(error => error.startsWith('TIMING_BEYOND_DURATION'))).toBe(true);

    const outOfOrder = validateShotTiming({
      ...base,
      duration_s: 8,
      acting_beats: [
        { t: '4s', beat: 'reaches the gate' },
        { t: '2s', beat: 'turns toward the gate' }
      ]
    });
    expect(outOfOrder.errors.some(error => error.startsWith('TIMING_ORDER_CONFLICT'))).toBe(true);
  });

  it('blocks delivery when explicit beat timestamps contradict shot duration', () => {
    const shot = {
      shot_id: 'timing-gate',
      subject: 'A courier',
      action: 'crosses a wet stone courtyard, pauses, then opens a metal gate',
      location: 'an enclosed courtyard at dawn',
      camera: { fov_degrees: 47, movement: 'slow lateral track' },
      lighting: '5600K dawn skylight',
      duration_s: 5,
      acting_beats: [
        { t: '0s', beat: 'crosses the courtyard' },
        { t: '6s', beat: 'opens the gate' }
      ]
    };
    expect(() => compileShotForDelivery(shot, 'veo_3_1')).toThrow(/QUALITY_GATE_BLOCKED: REGENERATE/);
  });
\n  it('blocks a weak shot at the delivery boundary by default', () => {
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

  it('allows a prompt that passes the quality threshold and records the delivery decision', () => {
    const req = {
      engineId: 'veo_3_1',
      subject: 'A courier crosses a wet stone courtyard',
      setting: 'a wet stone courtyard enclosed at dawn',
      action: 'walks toward a metal gate, pauses for 2 seconds, then opens it',
      camera: 'slow lateral track',
      lighting: '5600K dawn skylight with warm practical lamps',
      physics: 'footfalls compress water into small ripples',
      durationS: 6
    };
    const out = compilePromptForDelivery(req);
    expect(out.warnings.some(w => w.startsWith('QUALITY_LOOP: PASS'))).toBe(true);
    expect(out.warnings.some(w => w.startsWith('QUALITY_DELIVERY_GATE: ALLOW'))).toBe(true);
  });

  it('blocks a slop-heavy prompt unless a reasoned override is provided', () => {
    const req = {
      engineId: 'veo_3_1',
      subject: 'ultra realistic stunning masterpiece',
      setting: 'room',
      action: 'dramatic action with epic movement and cinematic motion',
      camera: 'dynamic camera',
      lighting: 'beautiful cinematic light',
      physics: 'epic movement'
    };
    expect(() => compilePromptForDelivery(req)).toThrow(/QUALITY_GATE_BLOCKED: REGENERATE/);
    const overridden = compilePromptForDelivery(req, {
      overrideReason: 'Editorial exception for integration coverage'
    });
    expect(overridden.warnings.some(w => w.startsWith('QUALITY_LOOP: REGENERATE'))).toBe(true);
    expect(overridden.warnings.some(w => w.startsWith('QUALITY_DELIVERY_GATE: ALLOW; Explicit override'))).toBe(true);
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
