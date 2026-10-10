import { describe, expect, it } from 'vitest';
import {
  antiSlop,
  antiSlopScore,
  executeQualityCommand,
  humanizeText,
  qualityLoop,
  smartSharpen,
  type PostSharpenPlan
} from '../skillsData';

const videoInput = {
  modality: 'video' as const,
  intent: 'Track a courier crossing a wet stone courtyard at dawn',
  destination: 'short film',
  technical: { fov_degrees: 47 }
};

describe('Quality Loop regression coverage', () => {
  it('returns UNASSESSED for empty or whitespace-only material', () => {
    expect(antiSlop('', 'video').status).toBe('UNASSESSED');
    expect(antiSlop('', 'video').score).toBe('UNASSESSED');
    expect(antiSlopScore('', 'video')).toBe('UNASSESSED');
    expect(antiSlop('   ', 'text').status).toBe('UNASSESSED');
    const loop = qualityLoop(videoInput, '   ');
    expect(loop.status).toBe('UNASSESSED');
    expect(loop.antiSlopScore).toBe('UNASSESSED');
    expect(loop.findings).toContain('Insufficient material for quality assessment');
    expect(loop.fixes).toContain('Provide non-empty generated content before scoring or delivery');
  });

  it('detects empty adjectives instead of treating them as production detail', () => {
    const result = antiSlop('A stunning epic masterpiece', 'video');
    expect(result.hits.length).toBeGreaterThan(0);
    expect(result.hits.some(hit => hit.message.toLowerCase().includes('empty adjective'))).toBe(true);
  });

  it('adds a 180-degree shutter default to video sharpening', () => {
    const result = smartSharpen(videoInput);
    expect(result.technical.shutter_angle).toBe(180);
    expect(result.decisions.some(item => item.includes('physical and narrative cause'))).toBe(true);
  });

  it('humanizes common formulaic wording without leaving extra whitespace', () => {
    expect(humanizeText('  In today’s fast-paced world, leverage tools to unlock the power of AI.  '))
      .toBe('In practice, use tools to make better use of AI.');
    expect(humanizeText('in today’s ever-changing world, utilize the process.'))
      .toBe('in practice, use the process.');
  });

  it('keeps modality and destination in the post-sharpen plan', () => {
    const result = executeQualityCommand('/post-sharpen', videoInput) as PostSharpenPlan;
    expect(result.modality).toBe('video');
    expect(result.destination).toBe('short film');
    expect(result.steps).toContain('temporal artifact cleanup');
  });

  it('keeps the Quality Loop result structurally complete', () => {
    const result = qualityLoop(videoInput, 'A courier crosses a wet stone courtyard at dawn. FOV 47 degrees, 5600K skylight, 180° shutter. Footfalls compress water into ripples.');
    expect(result).toHaveProperty('status');
    expect(result).toHaveProperty('antiSlopScore');
    expect(result).toHaveProperty('findings');
    expect(result).toHaveProperty('fixes');
    expect(result.postPlan.modality).toBe('video');
  });
});
