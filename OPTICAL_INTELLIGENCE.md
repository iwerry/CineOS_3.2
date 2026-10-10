# Daniskills Optical Intelligence

**Module:** `opticsCatalog.ts`  
**Tests:** `tests/opticsCatalog.test.ts`  
**Purpose:** resolve a cinematography intention into a lens-family reference and prompt-ready optical vocabulary without pretending that a text-to-image or text-to-video model is a physical lens simulator.

## Quick start

```ts
import { resolveOptics, listLenses } from './opticsCatalog';

const shot = resolveOptics({
  intent: 'portrait',
  focalLengthMm: 85,
  sensorFormat: 'full-frame',
  aperture: 'T2.0',
  depthOfField: 'shallow',
  engine: 'video',
});

console.log(shot.prompt);
console.log(shot.opticalNotes);
console.log(shot.caveats);

const anamorphicOptions = listLenses({
  family: 'anamorphic-cinema-prime',
  sensorFormat: 'super35',
});
```

## Shot compiler integration

`ShotSpec` accepts an optional `optics` request. `compileShot()` resolves it through the catalog and appends generic optical instructions to the prompt. It uses the **selected catalog focal length**, not blindly the requested number.

```ts
import { compileShot } from './skillsData';

const compiled = compileShot({
  shot_id: 'portrait-01',
  subject: 'A ceramic artist',
  action: 'turns a clay bowl toward the window',
  location: 'a working ceramics studio',
  camera: { fov_degrees: 47, movement: 'slow push-in' },
  lighting: '5600K window daylight',
  optics: {
    intent: 'portrait',
    focalLengthMm: 85,
    sensorFormat: 'full-frame',
    aperture: 'T2.0',
    depthOfField: 'shallow',
  },
}, 'veo_3_1');

console.log(compiled?.prompt);
console.log(compiled?.opticalNotes);
```

The shot compiler intentionally emits generic family, focal-length and depth-of-field language rather than injecting a real lens manufacturer into a prompt. Keep branded equipment references behind Brand Mode (G9). The standalone `resolveOptics()` API still returns the catalog selection and its verification caveats for planning and diagnostics.

## Resolver inputs

| Field | Meaning |
|---|---|
| `intent` | Narrative purpose: natural, portrait, environmental, compression, macro, anamorphic, vintage, product or action |
| `focalLengthMm` | Desired focal length; the resolver selects the closest listed focal length in the chosen family |
| `sensorFormat` | Super 35, full frame, large format, medium format or unknown |
| `lensFamily` | Optional explicit family constraint |
| `aperture` | Literal creative/technical value such as `f/2.0` or `T2.0` |
| `depthOfField` | Shallow, moderate or deep |
| `anamorphic` | Requests an anamorphic family and adds a squeeze-ratio caveat |
| `movement`, `focusBehavior` | Optional camera-movement and focus-language cues |
| `engine` | Light prompt phrasing adaptation for ComfyUI, FLUX, Midjourney, video models or generic output |

## Optical decision rules

1. **Intent before brand.** Pick the narrative function first; a brand name alone is not a complete look.
2. **Position before compression.** Perspective and facial proportions are driven primarily by camera-to-subject distance. Focal length and sensor size control field of view.
3. **Format is not mount.** A format-plausible result is not proof of exact mount, image-circle coverage, clearance, or compatibility.
4. **T-stop is not f-number.** T-stop expresses transmission; f-number is geometric aperture. Preserve the user's notation.
5. **Anamorphic is a system.** Squeeze ratio, desqueeze, focal length, sensor coverage, bokeh and flare behavior must be checked for the exact lens.
6. **Depth of field is relational.** It depends on aperture, focal length, focus distance, format/circle of confusion and final viewing conditions. Avoid promising a specific blur solely from a lens label.
7. **Optical defects are deliberate choices.** Flare, halation, veiling glare, chromatic aberration, focus breathing, distortion, vignetting and cat's-eye bokeh should be requested only when they serve the shot.
8. **Generation models are semantic.** Equipment names are prompt cues; model output does not guarantee accurate optical simulation.

## Catalog coverage

The catalog currently includes references for:
- Modern spherical cinema primes: Cooke S8/i, ARRI Signature Prime, ZEISS Supreme Prime, Leitz SUMMILUX-C.
- Anamorphic families: ARRI Master Anamorphic, Atlas Orion and Panavision C-Series.
- Photo-prime families: Sony G Master, Sigma Art and Canon RF L / Nikon Z S.
- Character and specialty optics: vintage Canon FD / Nikon AI-S / Minolta Rokkor references, Laowa probe/macro, premium cine zoom families and tilt-shift.
- Camera-format references: ARRI ALEXA Mini LF, ALEXA 35, Sony VENICE 2, RED V-RAPTOR, RED KOMODO, Canon EOS C70 and Sony FX6.

This is a **family-level starter catalog**, not an exhaustive inventory of every focal length, mount or revision. The source URL on each record points to manufacturer information, but does not mean every listed family attribute has been individually verified against every SKU. Exact lens-level aperture, T-stop, minimum focus, magnification, squeeze ratio, image circle, mount, breathing and distortion should be added only with model-specific sources and a verification date.

## Prompt examples

**Natural close portrait**
`85mm lens, Cooke S8/i Full Frame Plus, T2.0, shallow depth of field, natural skin rendering, smooth tonal transitions, focus on the near eye`

**Anamorphic wide scene**
`40mm anamorphic cinema prime, oval bokeh, horizontal anamorphic flare only when motivated by bright sources, environmental composition, controlled highlight roll-off`

**Product macro**
`macro probe lens, extreme close-up, controlled focus plane, near-subject parallax, product texture detail, deep environmental macro composition`

Treat these as prompt-language examples, not as proof of exact camera/lens compatibility.

## Validation

Run the repository's checks:

```bash
npm test
npm run typecheck
```

The resolver's tests check stable IDs, filter behavior, prompt generation and explicit compatibility caveats. The module is additive and does not replace the existing `compileShot()` API; call `resolveOptics()` when a workflow needs explicit optical planning. Future integration can pass its output into the shot compiler as an optional optics layer.
