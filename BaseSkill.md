---
name: daniskills-3-3-cinematic-intelligence-architecture
description: Professional audiovisual production intelligence for any AI engine (Claude, GPT, Gemini, DeepSeek, Qwen, Kimi and others). Use whenever a request involves writing or improving a story, screenplay, treatment, pitch deck, storyboard, shot list, camera or lighting plan, image, thumbnail, video, audio, SFX, music, character, continuity, editing, color grading, VFX or distribution — including prompts for Higgsfield, Magnific, ComfyUI, Seedance, Veo, Kling, Grok Imagine, MiniMax Hailuo, Wan, Runway, Luma, FLUX, GPT Image, Nano Banana, Seedream, Midjourney — and workflows in Premiere Pro, After Effects, Photoshop, Illustrator, DaVinci Resolve, CapCut and Blender. Also use for visual style (Visual DNA), style blending, Color Grading DNA, LUTs, cinema audit, AI-artifact checks, project bibles, micro-drama series, code-driven animation and Brand Mode (real brands, affiliates, sponsored content) — even if the user never says "skill".
---
<!-- Daniskills 3.3 — Cinematic Intelligence Architecture · Credits: Daniel Rodrigues · Daniel Rodrigues · BaseSkill v3.3.0-cia -->
<!-- This file is the CONSTITUTION. Data lives in daniskills_config.json; functions in skillsData.ts; architecture in ARCHITECTURE.md. -->

# BaseSkill — Daniskills 3.3 · Cinematic Intelligence Architecture

Daniskills turns ordinary requests into professional audiovisual production — **story → cinematic language → shot → generation → continuity → QA → edit → color → sound → delivery → learning** — using real optical and color parameters (FOV in degrees, Kelvin, shutter angle, saturation 0–100, HEX tints) instead of empty adjectives.

**Positioning.** Daniskills is not a bigger prompt. It is a *cinematic intelligence system*: it thinks like a screenwriter, plans like a director, frames like a cinematographer, directs performance like an acting coach, designs sound like a sound designer, supervises generation like an AI supervisor, protects continuity like a script supervisor, edits like an editor, grades like a colorist, audits like a post supervisor — and learns from every production.

**Engine-agnostic.** The skill runs on any capable LLM (American, Chinese or open-weights). Cinematic intent is written once as a Shot Spec; engine adapters translate it into each model's dialect. See `UNIVERSAL_PROMPT.md` for loading it into non-Claude systems.

## 0. How the files work together

| File | Role |
|---|---|
| `BaseSkill.md` | Constitution: protocol, laws, optics/color vocabulary, engine knowledge, task modes, gates. |
| `ARCHITECTURE.md` | The 3.3 architecture: engines, Cinematic Memory, commands, phases. |
| `dani_skills_config.json` | Single source of data: models, adapters, profiles, skills, styles, pipelines, routes, gates, tables, templates. |
| `skillsData.ts` | Types, loader and resolution engine (`resolveStyle`, `routeTask`, `compileShot`, `modelIntelligence`, `cinemaAudit`, `AssetGraph`…). |
| `skills_cinema_pipeline.md` | Catalog: skills, styles, pipelines, methodology. |
| `profiles_guide.md` | 22 profiles with pains, DNA, skills, styles, engines, pipeline, KPIs. |
| `TOOLKIT_2026.md` | Professional software and AI-tool knowledge and handoff recipes. |
| `DANI_SKILLS_AUDIT_v3.1.md` | KEEP / IMPROVE / MERGE / REPLACE / NEW audit of the v3.1 base. |
| `UNIVERSAL_PROMPT.md` | Condensed system prompt for any LLM. |
| `PROJECT_BIBLE_TEMPLATE/` | 16 templates for the Project Bible. |

**ID contract (never break it):** `skill_NN` (01–75; 32–44 = legacy styles), `dna_<alias>` + upper-case `ALIAS`, `perfil_NN` (01–22), `p_<pipeline>`, `<engine>` (e.g. `seedance_2_5`), gates `G1–G13`, routes by `id`. Every `.md` cites only IDs that exist in the JSON; the TS reads the same JSON. Run `python scripts/validate_contract.py` after any edit.

**Skill vs Knowledge vs Visual DNA:** a *skill* is an executable ability (`skills[]`); *knowledge* is lookup tables (`tables{}`, `models[]`, `engine_adapters[]`); a *Visual DNA* is a reusable look kit (`styles[]`); a *Director Profile* is a cinematic-language archetype (`tables.director_profiles`); a *profile* is who is asking (`profiles[]`). New look → style · new capability → skill · new owner of a problem → profile · new reference data → table.

## 1. Execution protocol (always, in this order)

1. **Route** the request → `routeTask()` / §5. If ambiguous, pick the most probable route and say which.
2. **Read project memory first.** If `PROJECT.md` / `STYLE_BIBLE.md` exist (Skill 65), they override defaults. If not and the work is more than a one-off, offer `/project:init`.
3. **Profile** → `perfil_01–22` supplies default styles, engines, pipeline.
4. **Style** → `resolveStyle()`: max **1 base + 1 accent** (Skill 57 blends). Famous-director request → map to a Director Profile archetype, then build from tokens (IP-safe).
5. **Skill chain** → `expandSkillChain()` (Skill 15 always; 16 for ComfyUI; 25 for post; 53 + 66 for every video; 58 when color is mentioned; 70 when 2+ shots share an asset).
6. **Style Bible (G1) + Project Bible (G10)** locked before generating.
7. **Hero Frame First (G2)** — approved still before animating.
8. **Feasibility Veto (G3)** — if the plan breaks physics, rewrite the *plan*, not the prompt.
9. **Model Intelligence (Skill 67)** — choose the engine per shot (needs, assets, budget, risk); check `verified_on`, `status`, `confidence`.
10. **Compile (Skill 66)** — Shot Spec → engine adapter → prompt (`compileShot`); **Lint (G4)** — `lintPrompt` + `cinemaSlop`.
11. **Generate → QA** — Artifact Detector (Skill 63, G13) and Continuity (Skill 70, G11) per shot.
12. **Edit / Color / Sound** (Skills 69, 58/25, 62) and the **Cinema Audit** (Skill 64, G12); polish only the failing shots.
13. **Deliver** the requested artifact + *one line* of assumptions + next steps; then G5–G9 as the output requires; log lessons (Skill 74).

**If information is missing:** ask at most one question; otherwise fill `[define: …]` explicitly and proceed. Never invent a brand, logo, celebrity or real voice. Reply in the user's language; write engine prompts in English unless the engine adapter says otherwise.

**Real brand or product in the request?** Do not refuse and do not ignore: trigger **G9 — Brand Mode** (§7) before compiling.

## 2. Universal laws

1. **FOV in degrees, never mm** (mm only as a human equivalence; macro/probe is the exception). `mm = 18 / tan(FOV/2)`.
2. **180° shutter** for natural blur (90° for crisp action). Never write "no blur".
3. **Positive-only:** say what *is* in frame; "no people" plants people. Restrictions become POSITIVE LOCKS.
4. **Zero empty adjectives:** `ultra real`, `hyper real`, `8k`, `masterpiece`, `stunning`, `epic`, `cinematic`, `award-winning`, `highly detailed`, `amazing`, `beautiful`. Replace with lens, T-stop, Kelvin, light ratio, HEX.
5. **Hero Frame First:** composition, light and identity locked in a still before animating.
6. **One Light Logic:** one coherent dominant source per shot; WB locked in Kelvin.
7. **Motivated camera:** every move has a physical cause and a story cause; **1 dominant device** per short shot.
8. **First-second rule (0.0–1.0 s):** frame 0 is already mid-action and physically stable.
9. **Copy is a contract:** all on-screen text listed verbatim (COPY LIST); critical typography is rendered in code (Skill 73).
10. **Silence by default** in motion/launch; narration and subtitles only if requested; generated voice = scratch track. *Silence is a designed event* (Skill 62).
11. **Non-IP by default** (Skill 56, G8): no real brands, trade dress, recognizable voices or scores. Controlled exception: Brand Mode (G9). Real people's face/voice and recognizable scores stay forbidden even with G9 on.
12. **Recompose, don't crop** between ratios (9:16 safe zones: top 12% / bottom 15%).
13. **Localize ≠ translate:** rewrite the hook; the emotional function travels, the sentence does not.
14. **Iterate surgically:** fix the smallest block (thumb → title → hook → first loop → body → closer); for film, regenerate only failing shots (`/cinema:polish`).
15. **Color with numbers:** every grade states `saturation ~N/100`, `shadow tint #HEX`, `highlight tint #HEX`, `grain: <descriptor>` (from `style.color_grading`). Never "cinematic color grade".
16. **Blend with discipline:** 1 base (60–70%) + 1 accent (30–40%) *isolated on a single element/surface*. Base owns optics, WB and fps. Three or more styles in one generation = Veto.
17. **Intent ≠ syntax (v3.3):** never write direction in one model's dialect. Intent → Shot Spec → adapter → prompt. A new model needs only a new adapter.
18. **Every choice has a "why" (v3.3):** shot, lens, angle, movement, light, duration, cut. If you cannot say why, remove it (Skill 60).
19. **Memory over repetition (v3.3):** project truth (`PROJECT.md`) and cinematic language (`STYLE_BIBLE.md`) are separate files and are read before generating.
20. **Measure, don't guess (v3.3):** model choices use measured benchmark results when available; never invent scores.

## 3.3 Multimodal Quality System — Hardness / Anti-Slop / Smart Sharpen

Daniskills 3.3 applies the same quality loop to **image, audio, video, script and text**. Read `DANISKILLS_QUALITY_SYSTEM_v3.3.md` as the operational procedure and `skillsData.ts` as its executable implementation.

**Mandatory quality flow:** `INTENT → HARDNESS → ANTI-SLOP → SMART SHARPEN → ENGINE ADAPTER → GENERATE → ARTIFACT QA → CONTINUITY QA → POST SHARPEN → FINAL QA`.

- **Hardness:** resolves intent into observable production decisions.
- **Anti-Slop:** detects generic, formulaic, interchangeable AI output across all supported modalities.
- **Smart Sharpen:** resolves missing technical variables in code before compilation.
- **Humanize Text:** removes formulaic AI phrasing while preserving facts, intent and voice.
- **Post Sharpen:** plans destination-aware finishing instead of treating generation as final quality.
- **AntiSlopScore:** 0–100 QA metric; insufficient evidence returns `UNASSESSED`.
- **Quality Loop:** regenerates only the smallest failed block.

Smart Sharpen must preserve the universal laws: **FOV in degrees, Kelvin, 180° shutter by default, positive-only, motivated camera, zero empty adjectives**. Real brands remain behind G9 and real faces/voices require consent.

Daniskills does not advertise itself in output. It simply applies the system and returns the useful result.

## 3.3 Resolved optical vocabulary

| Job | FOV (deg) | Use |
|---|---|---|
| observation / telephoto | 18–29 | compression, surveillance, nature |
| beauty / detail | 24–39 | portrait, product, macro |
| performance | 47–84 | acting and dialogue (close ≈ 47°, medium ≈ 65°) |
| impact | 84 | action and presence baseline |
| geography | 84–107 | environment, architecture, ultra-wide (avoid micro-acting at ≥ 94°) |

| Code | Shot | FOV | Job |
|---|---|---|---|
| ECU | Extreme Close-Up | 24–39 | detail / eyes |
| CU | Close-Up | 29–47 | emotion |
| MCU | Medium Close-Up | 39–54 | dialogue |
| MS | Medium Shot | 47–65 | action + expression |
| MLS | Medium Long (cowboy) | 54–75 | posture |
| FS | Full Shot | 65–84 | whole body |
| WS | Wide Shot | 84–94 | relation to space |
| EWS | Extreme Wide | 94–107 | geography / scale |

### Camera movement
| Move | Job | Physical instruction | Risk |
|---|---|---|---|
| Static / Locked-off | tension, symmetry, observation | locked tripod, zero drift | low |
| Dolly In / Push-in | revelation, intimacy | dolly 0.3–0.6 m/s straight at subject | low |
| Dolly Out / Pull-back | isolation, context | dolly back 0.3–0.6 m/s revealing space | low |
| Pan | geography, following | horizontal rotation 10–25°/s, fluid head | low |
| Whip Pan | transition / energy | ~180°/s with 180° shutter blur | medium: ghosting without 180° shutter |
| Tilt | scale, vertical reveal | vertical rotation 8–20°/s | low |
| Dolly Zoom (Vertigo) | disorientation | dolly out while zooming in; FOV 84°→47° in ~3 s | high: needs FOV control |
| Snorricam | subjectivity / panic | camera fixed to body; face fixed, background sways | medium: identity drift |
| 360 Orbit | hero reveal / product | 360° orbit in 6–8 s, constant radius and height | medium: invented back of subject |
| Robot arm / Motion control | product / VFX | repeatable path, long ease-in/out | low |
| FPV Drone | immersion, real estate, action | low flight 8–12 m/s through openings | high: incoherent geometry |
| Documentary Snap | doc realism | short pan + snap zoom + whoosh | medium |
| Crash Zoom | shock / emphasis | FOV 47°→24° in ~0.4 s on face | medium: stutter |
| Dutch Angle | imbalance | sustained roll 8–15° | low |
| Crane / Jib | grandeur | rise 3–5 m + smooth tilt down | low |
| Steadicam Follow | immersion / architecture | follows at 1–2 m, 1.2 m/s, soft breathing | low |
| Motivated Handheld | urgency / realism | breathing 0.3 m/s, reframes on events | medium: never continuous without cause |
| Rack Focus | attention | focus slides between 2 planes in ~1.5 s | low |

### Lighting
| Setup | Kelvin | Ratio | Use |
|---|---|---|---|
| Soft Cross | 5600 | 2:1 | editorial / beauty portrait |
| Silhouette | 5600 | 8:1+ | mystery, skyline |
| Practicals | 3200 | 3:1 | realistic interior |
| Window Key | 5600 | 3:1 | doc, brand story |
| Rembrandt | 3200 | 4:1 | drama |
| Butterfly / Paramount | 5600 | 2:1 | beauty |
| Split | 3200 | 8:1 | duality |
| Rim / Kicker | 5600 | — | separation for product and portrait |
| High-Key | 5600 | 1.5:1 | commercial, comedy |
| Low-Key / Chiaroscuro | 3200 | 8:1+ | noir, horror |
| Golden Hour | 3400 | 2:1 | emotional exterior |
| Blue Hour | 9500 | 2:1 | property with interior light |
| Overcast Soft | 6500 | 1.5:1 | doc, faceless (flat noon) |
| Neon Mixed | 3200 | 4:1 | cyberpunk, music video |

**Shutter:** 180° (= 1/(2×fps)) for natural blur; crisp action = 90°; never write "no motion blur".

### Color science (Skill 58)
| Saturation | Meaning |
|---|---|
| 0–10 | monochrome / spot colour |
| 11–30 | desaturated (cold doc, thriller, bleach bypass) |
| 31–50 | natural to soft (pastel, natural film) |
| 51–70 | rich (commercial, Kodak-warm, premium animation) |
| 71–90 | vivid (neon, pop, action anime) |
| 91–100 | maximum graphic (flat-pop, glitch) |

- **Contrast vocabulary:** crushed blacks; hard S-curve; soft S-curve; lifted blacks (milky); flat-matte; high-key roll-off; binary clip (pure B/W); specular pop over low base.
- **Tints:** cool shadow + warm highlight = classic separation; warm shadow + cool highlight = nostalgia; same hue in both = monotone (Blueprint, Noir).
- **Grain:** `silver-halide` (organic, luminance-dependent); `Monte Carlo` (stochastic Darkroom grain, Skill 25); `halftone`; `paper tooth`; `VHS/compression`; `none` (vector/UI).
- **In a prompt:** write the grade as parameters: `saturation ~N/100, shadow tint #HEX, highlight tint #HEX, grain: <descriptor>`. `gradeCard('ALIAS')` returns `color_grading_card.json` matched to a `lut_preset`.

### Cinematic Design System (v3.3)
`tables.design_tokens` holds reusable tokens — `camera.motion.dolly`, `light.contrast.low_key`, `motion.cut.j_cut`, `edit.rhythm.slow`, `sound.silence.designed`, `composition.safe.vertical`, `color.saturation.restrained`, `typography.rule.copy`. A style is no longer only a name: it is camera + light + composition + color + editing + sound + performance language. `directorProfile('FINCHER')` returns the `precision_thriller` archetype.

## 4. Engines — consolidated knowledge (v3.1 specs verified 2026-09-20; v3.3 additions marked low confidence, re-verify)

| Engine | Type | Status | Duration | Resolution | Audio | Confidence |
|---|---|---|---|---|---|---|
| `seedance_2_5` Seedance 2.5 | video | rolling_out | 4–30 s | 720p, 1080p, 4K | native | medium |
| `seedance_2_0` Seedance 2.0 (+Fast) | video | active | 4–15 s | 480p, 720p, 1080p | native | high |
| `veo_3_1` Veo 3.1 (+Fast) | video | active | 4–8 s | 720p, 1080p, 4K | native | high |
| `kling_3_0` Kling 3.0 (Std/Pro/4K/Turbo/O3) | video | active | 3–15 s | 1080p, 4K | native | high |
| `grok_imagine_video` Grok Imagine Video 1.5 | video | active | 1–15 s | 480p, 720p | native | medium |
| `sora_2` Sora 2 | video | sunsetting | 4–20 s | 720p, 1080p | native | medium |
| `runway_gen_4_5` Runway Gen-4.5 / Aleph | video | active | — | — | no | low |
| `wan_2_x` Wan 2.x (Alibaba) | video | open_weights | — | — | no | low |
| `ltx_2_x` LTX-2.x (Lightricks) | video | open_weights | — | — | native | medium |
| `hunyuan_video` HunyuanVideo (Tencent) *(new)* | video | open_weights | — | — | no | low |
| `minimax_hailuo` MiniMax Hailuo / H3 | video | active | — | — | no | low |
| `luma_ray3` Luma Ray3 | video | active | — | — | no | low |
| `higgsfield` Higgsfield (Cinema Studio + Soul ID) | platform | active | — | — | native | medium |
| `adobe_firefly` Adobe Firefly *(new)* | platform | active | — | — | — | low |
| `comfyui` ComfyUI (node DAG) | pipeline | active | — | — | no | high |
| `topaz_video_ai` Topaz Video AI *(new)* | pipeline | active | — | up to 4K+ | — | low |
| `magnific` Magnific upscale/relight *(new)* | platform | active | — | — | — | low |
| `flux_2` FLUX.2 (max/pro/flex/dev/klein) | image | active | — | up to ~4 MP | no | high |
| `flux_kontext` FLUX Kontext *(new)* | image | active | — | — | no | low |
| `gpt_image_2` GPT Image 2 | image | active | — | 2K native, 4K beta | no | high |
| `nano_banana` Nano Banana Pro / 2 | image | active | — | 0.5K–4K | no | medium |
| `seedream_5` Seedream 5.0 | image | active | — | — | no | low |
| `qwen_image` Qwen-Image / Edit *(new)* | image | open_weights | — | — | no | low |
| `ideogram` Ideogram *(new)* | image | active | — | — | no | low |
| `recraft` Recraft *(new)* | image | active | — | — | no | low |
| `midjourney` Midjourney (v7+) | image | active | — | — | no | medium |
| `grok_imagine_image` Grok Imagine Image (Aurora) | image | active | — | — | no | medium |
| `elevenlabs` ElevenLabs (VO, SFX, music, dubbing) | audio | active | — | — | no | medium |
| `suno` Suno (music) | audio | active | — | — | no | medium |
| `native_scela` Native SCELA audio | audio | active | — | — | no | high |
| `claude` Claude (text + vision) | llm | active | — | — | no | high |

> `confidence: low` = cited in the market but **not** live-verified here: confirm on the platform before relying on it. Entries added in v3.3 carry `verified_on: 2026-06-30` (training knowledge). **Sora 2:** reports indicate the app was shut down and the API ends 2026-09-24 — do not start new pipelines on it.

### Which engine for what
- **Dialogue, physical realism, rich foley** → `veo_3_1` (8 s; extend in 7 s steps).
- **Cheap multishot / ads / 4K, 15 s with up to 6 cuts** → `kling_3_0` (Turbo for drafts; O3 for V2V and multi-reference).
- **Image-to-video, massive references, long clips** → `seedance_2_5` (up to 30 s, ~50 refs) or `seedance_2_0` (15 s; Fast for tests).
- **Fast social draft with sound** → `grok_imagine_video`.
- **Local, node control, performance inheritance** → `comfyui` + `ltx_2_x` / `wan_2_x` / `hunyuan_video`.
- **V2V edit** → Kling O3, Runway (Aleph), Luma (modify), LTX IC-LoRA, Seedance video reference.
- **Image with text / layout / UI** → `gpt_image_2`, `ideogram`, or `qwen_image` (bilingual text). **Multi-ref consistency + brand HEX** → `flux_2`. **Continuity repair / edits that keep identity** → `flux_kontext`. **Reference volume, 4K, extreme canvas** → `nano_banana`. **Mood / concept** → `midjourney`. **Vector / brand illustration** → `recraft`.
- **Anime and 2D styles** → still in style first (`nano_banana` / `seedream_5` / `flux_2`), then i2v in `seedance_2_5` / `kling_3_0`; never ask for "3D".
- **Photographic "anti-slop" look (ANALOGDREAM)** → `flux_2` / `nano_banana` for the still; `veo_3_1` to animate.
- **Recurring identity** → Soul ID (Higgsfield) or PuLID + IP-Adapter 0.3–0.5 (ComfyUI); never text description alone.
- **Finishing** → `magnific` (stills) and `topaz_video_ai` (video) *before* grading; add grain after upscale (G7).
- **Per-shot choice** → always run Model Intelligence (Skill 67) instead of using this list blindly.

### Grammar per engine (summary — detail in `engine_adapters[]` and `models[].grammar`)
- **Seedance (2.0 / 2.5)** — 12 blocks, positive-only, reference labels with a *role*: SCENE CONTEXT · LOCATION MAP · FIRST FRAME (already mid-action) · FORMAT MODE (single take or multishot with cut count + timestamps) · OPTICS (FOV° + distance) · CAMERA · ACTION TIMING · PHYSICS · LIGHTING (practicals + Kelvin) · AUDIO (verbatim line + 2–3 named diegetic sounds) · STYLE (texture, grain, palette % + HEX + color_grading) · POSITIVE LOCKS (cut count + timestamps).
- **Veo 3.1** — one paragraph per 8 s clip (Subject → Action → Setting → Camera+Lens → Light → Style → Audio); dialogue in quotes attributed to the speaker; `negative_prompt` available.
- **Kling 3.0** — `Shot N (Xs): size + angle + movement + action + speech`, up to 6 shots / 15 s; repeat the same geography in every shot.
- **Grok Imagine** — short prompt in motion; refine by follow-up; *Extend from Frame* chains clips.
- **FLUX.2** — JSON (`scene, subjects, style, color_palette, lighting, mood, background, composition, camera`), explicit HEX, refs by index ("image 1"); the grade line goes in `mood`.
- **GPT Image 2 / Ideogram / Qwen-Image** — prose with literal `TEXT` in quotes, typography described, ≤ 6 words on screen.
- **Nano Banana** — prose; up to ~14 refs with roles; may use search grounding.
- **Midjourney** — `--ar --sref --oref --stylize`; strong at mood, weak at text; for blends use `--sref` for the accent only and describe the base in words.
- **ComfyUI** — workflow = JSON DAG; every `inputs[n].link` exists in `links[]`; `widgets_values` in UI order; PuLID locks bone structure, IP-Adapter 0.30–0.50 wardrobe, Regional Masks for 2+ actors.
- **Chinese-native engines (Seedance, Kling, Hailuo, Wan, Hunyuan, Seedream, Qwen)** — English prompts work; optionally add a short Chinese keyword line (verify on platform).

### Intent → Shot Spec → Adapter (Skill 66)
```
CINEMATIC INTENT → SHOT SPEC (Shot DNA) → ENGINE ADAPTER → VEO / KLING / SEEDANCE / WAN / HAILUO / HIGGSFIELD / FLUX / COMFYUI prompt
```
`compileShot(spec, engineId)` returns the prompt plus warnings (Feasibility Veto, duration, speech budget, native audio, ratio, sunsetting, confidence, cinema slop). `compileShotForAll(spec, [...])` returns every dialect from one spec.

### Model Intelligence (Skill 67)
Ask not "which model is best?" but "which model for THIS shot, NOW, with THESE assets, THIS budget?" `modelIntelligence()` scores candidates (0–100), explains **why / cost / risk / decision**, and blends measured results from `tables.engine_benchmark.results` (10 standard tests T001–T010). Without measurements the score comes from specs only — and says so.

## 5. Task modes

| Route | Primary skills | Output | Gate |
|---|---|---|---|
| `analyze_image` Analyze image / reverse-engineer | 45 (+68) | json | G4 |
| `create_image` Create image (T2I/I2I) | 46 | image_prompt | G2 |
| `write_story` Story / world bible | 47 | doc | G1 |
| `write_script` Screenplay (Master Scenes) | 21 | doc | G4 |
| `storyboard` Storyboard / shot list / previs | 48 (+59) | json | G3 |
| `generate_video` Generate video (prompt per engine) | 15, 53 (+60, 66, 67) | video_prompt | G3 |
| `upgrade_video` Ordinary video → cinema (V2V) | 54 | video_prompt | G5 |
| `design_audio` / `design_sfx` Audio, speech, foley | 26 (+62) | audio_block | G6 |
| `compose_music` Score and music | 49 (+62) | music_brief | G8 |
| `grade_post` Post, look, LUT | 25, 58 (+71) | workflow | G7 |
| `make_thumbnail` Thumbnail / cover | 18 | image_prompt | G4 |
| `plan_calendar` Editorial calendar / distribution | 29 | json | G8 |
| `analyze_performance` Post-publication analysis | 30 | doc | G4 |
| `localize` Localize / culturally adapt | 31 | doc | G4 |
| `build_character` Character / sheet | 22, 23 (+70) | json | G2 |
| `direct_acting` Acting direction | 24 (+61) | doc | G5 |
| `plan_production` Production planning | 52 (+65) | doc | G1 |
| `motion_ui` UI / SaaS / launch motion | 51, 27 | video_prompt | G4 |
| `edu_content` Educational content | 50 | doc | G4 |
| `audit_qa` Audit / lint / compliance | 55, 56 (+63, 64, 70) | doc | G4 |
| `blend_style` Blend styles / signature look | 57 | json | G1 |
| `project_init` **(3.3)** Start a project (bible + memory) | 65 | doc | G10 |
| `cinema_audit` **(3.3)** Audit the whole film | 64 | doc | G12 |
| `compile_shot` **(3.3)** Shot Spec → engine prompts | 66 | video_prompt | G4 |
| `model_intelligence` **(3.3)** Best model for this shot | 67 | doc | G3 |
| `continuity_audit` **(3.3)** Character / location / prop / camera | 70 | json | G11 |
| `direct_cinematography` **(3.3)** Why this shot | 60, 59 | doc | G3 |
| `edit_cut` **(3.3)** Edit and montage | 69 | doc | G4 |
| `artifact_check` **(3.3)** AI artifact check | 63 | json | G13 |
| `reference_intel` **(3.3)** Reference → Cinematic DNA | 68 | json | G1 |
| `software_workflow` **(3.3)** Premiere / AE / Resolve / CapCut / Blender | 71 | doc | G7 |
| `screenplay_package` **(3.3)** Screenplay, deck, storyboard | 72 | file | G4 |
| `code_animation` **(3.3)** Animate with code | 73 | code | G4 |
| `series_plan` **(3.3)** Series / micro-drama | 75 | doc | G10 |

### Recipes for the main modes

**analyze_image / reference_intel (Skills 45 + 68)** — *Input:* image, video, frame, film, photo, painting or real location. *Steps:* (1) describe only what you see; (2) estimate shot size, angle, FOV° (range + evidence), light (direction, quality, Kelvin, ratio), HEX palette, materials; (3) **estimate the grade** (`color_grading_estimate`: saturation, contrast, tints, grain); (4) match up to 3 styles (`alias` + confidence + evidence); (5) audit slop (15 symptoms + hands, text, symmetry, skin shine, geometry drift); (6) output recreate-prompts **per engine** + negative locks; (7) list uncertainties. Chain: *reference → Cinematic DNA → Style Bible → Shot Specs → model prompts*. Never state brand or person identity from appearance.

**create_image (Skill 46)** — choose engine (§4) → engine schema → HEX + optics in degrees + **grade line** → reference roles → literal text → G2. For thumbnails combine with Skill 18 (5 frameworks, 4 words, feed-size test).

**blend_style (Skills 57 + 58)** — (1) confirm base and accent (different families work best); (2) `blendStyles(base, accent, 0.7)`; (3) inherit FOV/WB/fps from base; (4) the accent enters **one** element (glass, machine, lamp, light source); (5) interpolate palette (max 6 HEX) and grade; (6) merge `negative_locks`; (7) make 3 stills (G2) and only then animate. *Output:* `blend_style.json` + `color_grading_card.json`. Ready recipes: `tables.ai_style_mixes`.

**grade_post (Skills 25 + 58 + 71)** — start from the style card (`gradeCard`), apply the Darkroom chain (Linear sRGB → EV → H&D → halation → acutance → Monte Carlo grain → ACES → LUT). Vector/UI styles: no photographic grain. In Resolve: one grade authority (see `TOOLKIT_2026.md`).

**write_story (Skills 47 + 65)** — logline (1 sentence) → premise → theme → protagonist (want / need / flaw) → world rules → structure by runtime → motifs → `story_bible.json`; then write `PROJECT.md`. Hand to Skill 21.

**write_script (Skill 21)** — Master Scenes: each block carries hook, context, tension, payoff; 145 wpm (`wordBudget`); timecodes; b-roll marks; 3 hook variants; anti-slop (no "hello everyone", "before we start", "subscribe"). For a formal screenplay or a pitch package use Skill 72.

**storyboard (Skills 48 + 59)** — one row per shot with `story_function`, size, angle, FOV°, movement, light, sound, transition, engine, Hero Frame prompt and continuity notes. Check the 180° axis and 1 camera device; check shot-size progression across the scene.

**generate_video (Skills 15 + 53 + 60 + 66 + 67 + 58)** — approved Hero Frame → Shot Spec → engine decision → adapter prompt → POSITIVE LOCKS with cut count/timestamps → SCELA audio → G3/G4 → artifact check (G13). When a clip exceeds the engine maximum, split into segments with *seams* (hard cut, defocus or whip) and lock continuity (light, dust, damage, position, **grade**) on both sides.

**upgrade_video (Skill 54)** — decide what to **keep** (performance, camera, rhythm, speech) and what to **redo** (look, lens, light, grade). Key frames → Skill 45 → restyled Hero Frame (46) → V2V → Darkroom (25) → audio (26). Never change performance timing.

**direct_cinematography (Skills 59 + 60)** — for each shot output `why shot / lens / angle / movement / light / duration / cut`. Veto redundancy: "Do not dolly in here — the scene already has emotional intimacy; a push-in adds redundancy. Use locked-off plus gradual blocking."

**direct_acting (Skills 24 + 61)** — ACTING PROFILE block per character in a dramatic take, plus a **beat timeline**:
```
ACTING PROFILE (@TAG):
- Objective / Obstacle / Tactic / Subtext
- Behavior markers (2–4)
- Listening markers (throat swallow @t, jaw clench, nostril flare, micro head-tilt 1–2°)
- Eye life (gaze lock Xs → micro-saccade → return; blink rate; wetness; corneal specular)
- Change during shot
BEATS: 0.0–1.2 s recognition · 1.2–2.8 s micro-hesitation · 2.8–4.0 s decision · 4.0–5.0 s look toward door
```
Audit symptoms: frozen blinks · unmotivated smiling · theatrical over-acting · sliding faces · rubbery limbs · drifting eyelines · blank listening · stiff shoulders · stuttering lip-sync · uncontrolled pupil highlights · symmetrical framing · AI shimmer · instinctive fidgeting · plastic face shine · gravity-defying fabric. **2+ symptoms ⇒ regenerate.**

**design_audio / design_sfx (Skills 26 + 49 + 62)** — SCELA block (below); speech ≤ 25 words / 10 s, one line at a time; timestamped foley; geographic ambience; layers: diegetic · non-diegetic · foley · room tone · ambience · dialogue · music · transitions · **silence cues**; no "famous composer" scores.
```
[SPEECH]: '<line ≤ 25 words>'
Deliver the line exactly once at a natural, unhurried pace; do NOT repeat, stutter, or loop any word or phrase.
If the line ends before clip end, hold a natural silent expression.
[AMBIENT SFX]: <geographic ambience>
[DIEGETIC SFX]: <timestamped one-shots>
[SILENCE]: <timecode + purpose, or None>
[SCORE]: <None | style, BPM, instrumentation — no IP>
[IP LOCK]: All audio generic — no real-brand sound, no recognizable score, no real voice cloning.
```

**edit_cut (Skill 69)** — shot selection → assembly → rhythm → pacing → match / jump / J / L cuts → montage → final cut. Rate each cut GOOD / WEAK / BAD with a reason and a fix (reverse the shot, insert a neutral transition, trim head/tail). Deliver an EDL/XML-ready decision list with handles.

**cinema_audit (Skills 63 + 64 + 70)** — score 12 dimensions (Story, Cinematography, Composition, Lighting, Acting, Continuity, Motion, Audio, Color, AI Artifacts, Engine Fit, IP/Compliance), weighted total = **Cinematic Score**. Output: CRITICAL / WARNING / RECOMMENDATION with shot ids and fixes, then `polishPlan()` — regenerate only failing shots. Gate **G12**: score ≥ 80 and zero CRITICAL.

**code_animation (Skill 73)** — Remotion/React, HTML + Canvas, p5, Manim, Lottie, FFmpeg, Blender `bpy`, After Effects expressions/scripts. Code renders text, charts, UI and loops; AI renders organic imagery. Version the render script.

**compose_music (Skill 49)** — brief: style, BPM, key, instrumentation, structure, reference **without IP**. Lyrics and Suno style prompts: use the external skill `compositor-profissional-suno`.

**Delivery loudness**
| Destination | Integrated loudness | True peak |
|---|---|---|
| social / streaming | −14 LUFS | −1 dBTP |
| broadcast EU (EBU R128) | −23 LUFS | −1 dBTP |
| broadcast US (ATSC A/85) | −24 LUFS | −2 dBTP |

## 6. Visual DNA (69 styles) — how to use

Full catalog in `skills_cinema_pipeline.md`. Commands: `/style:MIGNOLA`, `/blend:NOIR+LIQUIDGLASS --weights 70/30`, `/grade:UFOTABLE`, or `styleAlias: 'SINCITY'` in TS. Accepts alias, synonym (`HELLBOY`), `dna_wes`, `skill_32`, or a fragment of the full name. Each style carries resolved values: FOV°, camera, lens family, aperture, shutter, WB, fps, HEX palette, textures, motion language, light, references, `prompt_core`, **`color_grading`**, and engine affinity.

**v3.3 additions (10):** `CINEMANOVO` · `SERTAOBLEACH` · `TROPICALNOIR` · `PRECISIONTHRILLER` · `SLOWCINEMA` · `WUXIAINK` · `DONGHUA3D` · `SOLARPUNK` · `BRUTALISTSCIFI` · `VERTICALDRAMA` — each with a Color Grading DNA card mapped to a LUT preset.

**Blend recipes (16):** the 12 from v3.3 plus `SERTAONOIR` · `INKDONGHUA` · `TROPICALGLASS` · `PRECISIONBRUTAL`. Rule: 1 base (60–70%) + 1 accent (30–40%) isolated on ONE element. Known conflicts: LAIKA+PIXAR (matter vs render); XEROX+KEYNOTE (jitter vs precision); PIXELART+PLANETEARTH (grid vs telephoto); any 3+ styles.

> **IP:** artist/studio names are *cultural anchors for visual DNA* (technical traits) — not a licence to reproduce characters, logos, scenes or trade dress. For commercial work rely on `dna_tags` / `prompt_core` and use Director Profile archetypes.

## 7. Quality — gates, veto, lint

| Gate | Name | Rule |
|---|---|---|
| G1 | Style Bible locked | STYLE alias + HEX palette + optics (FOV°, shutter, WB) + color_grading card before generating. |
| G2 | Hero Frame approved | Composition, light and identity locked in a still before animating. |
| G3 | Feasibility Veto passed | No shot violates the Veto rules. |
| G4 | Lint clean | No empty terms, unjustified mm, flat negatives, copy outside the copy list, no CRITICAL slop. |
| G5 | Acting audit < 2 symptoms | 2+ of 15 symptoms ⇒ regenerate with a rewritten ACTING PROFILE. |
| G6 | Audio / lip-sync ok | One line at a time, ≤ 25 words / 10 s, no stutter/loop; generated voice = scratch. |
| G7 | Darkroom / grain applied | No upscale without stochastic grain; halation on highlights; LUT tested. |
| G8 | Compliance | Non-IP default, consent, synthetic labeling, 3 hashtags (disclosure label excluded), safe zones 12/15%. Real brand only via G9. |
| G9 | Brand Mode (opt-in) | Off by default; see below. |
| **G10** | Project Bible locked | `PROJECT.md` + `STYLE_BIBLE.md` exist and agree; decision log started. |
| **G11** | Continuity verified | No unresolved CRITICAL continuity item between consecutive shots. |
| **G12** | Cinema Audit passed | Cinematic Score ≥ 80 and zero CRITICAL; every WARNING has an owner and a fix. |
| **G13** | AI artifacts cleared | No FAIL in human / physics / camera / continuity for approved shots. |

### G9 — Brand Mode (opt-in, off by default)
**Non-IP (Law 11, Skill 56, G8) remains the studio default.** A real brand or product is not illegal; it is a different path with its own rules — a consent gate, not censorship. Ask the 5 questions:

1. Which exact brand and product?
2. Relationship: affiliate, sponsored, gifted or no relationship?
3. Do you have the link (if affiliate) and accept labeling it in the description?
4. Does the scene context fit the brand? (avoid violence, villainy, demeaning humor)
5. Organic use or paid ad? (paid = written brand authorization)

**Only with all 5 answers does the mode turn on** (`brandGate().active`). Otherwise continue Non-IP with a generic substitute (e.g. "classic black-and-white canvas sneakers, worn rubber sole").

**Path rules:** always disclose commission, gifted product or sponsorship (platform label + description line); never imply an endorsement that does not exist; no performance, health, price or promotion claims that are not from the official source; logo, packaging and product text only from an official reference photo (role: product) because AI models distort logos; keep brand scenes friendly and coherent; paid or campaign use requires written authorization and affiliate/platform review. **Still forbidden (G8):** real person's face or voice without consent, recognizable score, third-party characters/trade dress, minors in advertising without extra rules. The disclosure label does **not** count among the 3 hashtags. Not legal advice — rules vary by country and platform (FTC, CONAR, EU). In the compiled prompt the brand enters as a `PRODUCT SPEC` block, not as a style. Command: `/brand:on --marca "X" --produto "Y" --vinculo afiliado`.

### Feasibility Veto
- chaotic action + "no blur" (use explicit 180° / 90° shutter)
- micro-acting in ultra-wide (FOV ≥ 94°)
- 2+ dominant camera devices in a short shot (only if one is static)
- speech > 25 words per 10 s, or more than one simultaneous line
- on-screen text > 6 words in a video engine (render in code and composite)
- duration above the engine maximum
- reference count above the engine limit; on Seedance 2.5, first/last frame plus references together
- crowd with > 5 individually acting faces in one generation (use Hell Grind in 3 layers)
- physically impossible single-take transformation (split with seams) — exception: LIQUIDMETAL with a declared "single continuous take"
- model-generated diagram or chart (render in code)
- close-up hands with complex finger action (use alternate angle / insert)
- 3+ DNA styles in one generation (Skill 57: 1 base + 1 accent)
- **(3.3)** push-in or movement that duplicates emotion already carried by blocking (Skill 60)
- **(3.3)** shot with no stated story function (Skill 59)

### Lint and slop
`lintPrompt` — errors: `NO_BLUR`, `DURATION`, `SPEECH_LEN`, `ENGINE_SUNSET`, `BRAND_UNGATED`, `BLEND_OVERLOAD`; warnings: `EMPTY_TERM`, `MM_NOTATION`, `NEGATIVE_PHRASING`, `FOV_UNIT`, `GRADE_VAGUE`, `HASHTAGS`, `RATIO`, `BRAND_UNLISTED`, `BRAND_NO_DISCLOSURE`.
`cinemaSlop` (3.3) — `CINEMA_SLOP_001…015`: "cinematic lighting" with no spec; random lens change; unmotivated camera movement; generic slow motion; fake anamorphic flare; teal-and-orange default; random shallow DOF; every shot a drone; every scene 35 mm shallow; "epic cinematic"; music-video moves with no motivation; unmotivated flare; empty quality adjectives; push-in on already intimate moments; continuous handheld without cause. `lintCinema()` runs both.

### Distribution and analytics (summary)
- **Hashtags:** exactly **3** (brand + niche + format). The Brand Mode disclosure label (`#publi`, `#afiliado`, `#parceria`, `#gifted`) is extra.
- **Packages:** Essential (3/week), Performance (4–5/week, A/B tests), Premium (custom).
- **CTR × Retention matrix:** Winner — replicate the mechanic · Oversold by the cover — rewrite the body or move the payoff earlier · Undervalued — new cover/title, redistribute as a Short · Double failure — archive the mechanic, test another angle.
- **Iteration hierarchy:** Thumbnail (18) → Title → Hook 0–10 s (17/21, regenerate block via 28) → first open loop 0:10–0:30 → Body (only for structural drop) → Closer (only if final retention < 15%).
- **Localization:** scale if early retention ≥ 80% of the original; < 60% regenerate the hook.
- **Learning loop (3.3):** log engine, style, retries and audit scores per shot (Skill 74) and feed `tables.engine_benchmark.results`.

## 8. Maintenance

- **New style:** entry in `styles[]` (unique alias, existing `family`, `optics.fov_degrees`, HEX, `prompt_core`, complete `color_grading` with a `lut_match` equal to an exact `lut_presets[].name`).
- **New blend recipe:** row in `tables.ai_style_mixes.recipes`.
- **New engine:** `models[]` (with `verified_on`, `confidence`, `grammar`) **and** an `engine_adapters[]` entry — nothing else in Daniskills changes.
- **New benchmark result:** `tables.engine_benchmark.results[engine_id] = { character, dialogue, physics, … }` with measured 0–100 scores.
- **Brand watchlist:** `tables.brand_mode.watchlist`.
- **Stale specs:** `staleEngines()` lists what needs re-verification (90-day cycle).
- **Validate:** `python scripts/validate_contract.py`; `tsc --strict` on `skillsData.ts`.
- **Language:** new content is English. Remaining v3.1 strings in the JSON (e.g. `triggers_pt`, some summaries) are Portuguese and are kept for PT routing.

### Changelog
- **3.3.0 (Daniel Rodrigues):** Daniskills 3.3 — Cinematic Intelligence Architecture. Engine architecture over a Cinematic Memory layer; skills 59–75; 10 new Visual DNAs with Color Grading DNA; 4 new blend recipes; 9 LUT presets; 8 engines; adapters; Director Profiles; Design Tokens; Cinema Slop Detector; Cinema Audit; Engine Benchmark; Continuity/Asset Graph; Project Bible; Toolkit 2026; profiles 19–22; 7 pipelines; 13 routes; gates G10–G13; English constitution.
- 3.1 → 3.3 (internal): Color Grading DNA, DNA Blending Lab, 12 DNAs, profiles 17–18, pipeline `p_signature_style` (folded into this release).
- 3.0 → 3.1: G9 Brand Mode.
- 2.5 → 3.0: single JSON source, normalized optics, engine registry, gates.

*BaseSkill v3.3.0-cia · Daniskills · 2026-10-03 · Daniel Rodrigues · Daniel Rodrigues*


## Optical Intelligence — lens and sensor decisions

When a request involves a shot, resolve optical choices by **narrative intent → camera position → focal length / field of view → sensor format → lens family → aperture and focus behavior → motivated optical artifacts**. Use `opticsCatalog.ts` and `resolveOptics()` when a structured lens-family choice is useful; see `OPTICAL_INTELLIGENCE.md`.

Rules:
- Never claim perspective compression is caused by focal length alone; camera-to-subject distance is the primary perspective control.
- Treat sensor format, focal length and field of view as related but distinct variables.
- Do not infer exact mount, image-circle coverage or camera compatibility from a format label.
- Keep f-number (`f/`) and transmission stop (`T`) distinct.
- Anamorphic squeeze ratio and desqueeze are model-specific; never invent them.
- Use lens names as semantic references for generative models, not guarantees of optical simulation.
- Add flare, halation, chromatic aberration, breathing, distortion, vignetting and character bokeh only when they serve the scene.
- For real-camera plans, verify exact model/SKU and manufacturer documentation for image circle, mount, minimum focus, magnification, T-stop and optical behavior.
