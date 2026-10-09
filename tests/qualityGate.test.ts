import { describe, expect, it } from 'vitest';
import { assertDeliverable, qualityDeliveryGate } from '../skillsData';

describe('qualityDeliveryGate', () => {
  it('allows PASS without review', () => {
    const gate = qualityDeliveryGate('PASS');
    expect(gate.allowed).toBe(true);
    expect(gate.blocked).toBe(false);
    expect(gate.requiresReview).toBe(false);
  });

  it('blocks POLISH by default and allows it only when policy accepts it', () => {
    expect(qualityDeliveryGate('POLISH').blocked).toBe(true);
    const gate = qualityDeliveryGate('POLISH', { allowPolish: true });
    expect(gate.allowed).toBe(true);
    expect(gate.requiresReview).toBe(true);
  });

  it('blocks REGENERATE unless an explicit reason is supplied', () => {
    expect(qualityDeliveryGate('REGENERATE').blocked).toBe(true);
    const gate = qualityDeliveryGate('REGENERATE', { overrideReason: 'Approved by editorial lead' });
    expect(gate.allowed).toBe(true);
    expect(gate.overrideAccepted).toBe(true);
    expect(gate.reason).toContain('Approved by editorial lead');
  });

  it('blocks UNASSESSED by default and supports explicit policy acceptance', () => {
    expect(qualityDeliveryGate('UNASSESSED').blocked).toBe(true);
    expect(qualityDeliveryGate('UNASSESSED', { allowUnassessed: true }).allowed).toBe(true);
  });

  it('does not accept whitespace as an override reason', () => {
    const gate = qualityDeliveryGate('REGENERATE', { overrideReason: '   ' });
    expect(gate.allowed).toBe(false);
    expect(gate.overrideAccepted).toBe(false);
  });
});

describe('assertDeliverable', () => {
  it('throws a stable error for blocked delivery', () => {
    const gate = qualityDeliveryGate('REGENERATE');
    expect(() => assertDeliverable(gate)).toThrow(/^QUALITY_GATE_BLOCKED: REGENERATE\./);
  });

  it('does not throw when delivery is allowed', () => {
    expect(() => assertDeliverable(qualityDeliveryGate('PASS'))).not.toThrow();
  });
});
