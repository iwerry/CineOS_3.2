# Daniskills 3.3 — Cinematic Intelligence Architecture

**Credits:** Daniel Rodrigues · Daniel Rodrigues

> **Do not turn Daniskills into a bigger skill. Turn it into a smarter cinematic system.**

Daniskills 3.3 keeps everything that made v3.1 strong (FOV in degrees, Hero Frame First, Feasibility Veto, Visual DNA, Color Grading DNA, engine routing, gates) and adds the layer that was missing: **how to keep, evaluate, remember, edit and improve an entire AI-generated film.**

The design borrows the *philosophy* of the Impeccable project — persistent context, an operational vocabulary, deterministic anti-pattern rules, audit → critique → polish loops — and adapts it to cinema. It copies none of its UI rules.

---

## 1. System map

```text
                         DANISKILLS 3.3
                    CINEMATIC INTELLIGENCE
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
   STORY ENGINE       CINEMA ENGINE       AI ENGINE
   Story · Script     Camera · Light      Models · Adapters
   Character · World  Composition         Model Intelligence
   Dialogue           Acting · Sound      Prompt Compiler
        │                  │                  │
        └──────────────────┼──────────────────┘
                           │
                    CONTINUITY ENGINE
        Character · Location · Prop · Camera continuity
                           │
                    EDIT · POST · FINISHING
             Edit · Color · Sound · VFX · Handoff
                           │
                       QA / AUDIT
        Artifacts · Continuity · Cinema Audit · Slop · Compliance
                           │
                      DISTRIBUTION
             Localization · Analytics · Learning

   ┌────────────────────────────────────────────────────────┐
   │                    CINEMATIC MEMORY                    │
   │  Project Bible · Asset Graph · Decision Log · Learning │
   └────────────────────────────────────────────────────────┘
```

## 2. Which skills belong to which engine

| Engine | Skills |
|---|---|
| **Story** | 47 Story Architect · 21 Master-Scene Script · 75 Micro-Drama & Series · 72 Deliverables Studio · 31 Localization |
| **Cinema** | 20 Camera · 19 Digital Direction · 59 Cinematic Grammar · 60 Cinematography Director · 24 + 61 Acting · 26 + 49 + 62 Sound · 48 Storyboard |
| **AI** | 15 Seedance Base · 16 ComfyUI · 53 Router · 66 Shot DNA + Prompt Compiler · 67 Model Intelligence · 46 Image Direction · 54 V2V · 73 Code Animation |
| **Continuity** | 22 Consistent Characters · 23 Character Sheet · 70 Continuity + Asset Graph · 65 Project Bible |
| **Look** | 57 DNA Blending · 58 Color Grading DNA · 68 Reference Intelligence · 45 Image Analysis · 32–44 legacy styles · Visual DNA (69) |
| **Edit / Post** | 69 Edit Engine · 25 Darkroom + LUT · 71 Software Workflow Bridge |
| **QA** | 55 Continuity QA · 63 AI Artifact Detector · 64 Cinema Audit + Slop · 56 Compliance |
| **Distribution** | 17 Hook · 18 Thumbnail · 29 Calendar · 30 Analytics |
| **Memory** | 65 Project Bible · 70 Asset Graph · 74 Production Learning Loop |

The 30+ capability areas of the original v3.1 skills (styles 01–14, 27, 28, 50, 51) are unchanged and remain available through their routes and pipelines.

## 3. Three separations that matter

1. **Project truth vs cinematic language.** `PROJECT.md` says what the film *is* (genre, audience, runtime, language, location, mode). `STYLE_BIBLE.md` says how it *looks* (base + accent DNA, FOV range, light, grade card, grain). Models stop confusing story with style.
2. **Intent vs model syntax.** Intent → Shot Spec (Shot DNA) → **Engine Adapter** → prompt. A new model needs `models[]` + `engine_adapters[]`, not a new Daniskills.
3. **Director Profile vs person.** Famous-director requests map to language archetypes (`precision_thriller`, `intimate_naturalism`, `operatic_scale`, …) built from design tokens. Looks stay ownable and IP-safe.

## 4. The core loop

```text
IDEA → STORY → PROJECT BIBLE (G10) → CINEMATIC LANGUAGE → SCENE → SHOT → SHOT DNA
     → MODEL INTELLIGENCE → GENERATION → ARTIFACT QA (G13) + CONTINUITY (G11)
     → EDIT → COLOR → SOUND → CINEMA AUDIT (G12) → POLISH → MASTER
     → DISTRIBUTION → PERFORMANCE → LEARNING ──→ next project
```

## 4.1 Multimodal Quality Layer

Daniskills 3.3 extends QA beyond cinema. **Hardness** resolves intent; **Anti-Slop** audits image/audio/video/script/text; **Smart Sharpen** resolves technical detail in code; **Humanize Text** reduces formulaic language; **Post Sharpen** plans finishing; **Quality Loop** regenerates only the smallest failed block.

```text
INTENT → HARDNESS → ANTI-SLOP → SMART SHARPEN → ADAPTER
→ GENERATE → ARTIFACT QA → CONTINUITY QA → POST SHARPEN → FINAL QA
```

Operational commands: `/hardness`, `/anti-slop`, `/smart-sharpen`, `/humanize`, `/post-sharpen`, `/quality:loop`.

See `DANISKILLS_QUALITY_SYSTEM_v3.3.md` and the executable functions in `skillsData.ts`.

## 5. Shot DNA

A shot is a data object (`templates.shot_dna_schema`):

```json
{
  "shot_id": "S023", "story_function": "revelation",
  "composition": {}, "subject": {}, "camera": {"fov_degrees": 47, "movement": "locked-off"},
  "lens": {}, "lighting": {"key": "practical", "kelvin": 3200, "ratio": "6:1"},
  "motion": {}, "acting": {"beats": []}, "sound": {"layers": [], "silence": []},
  "color": {"grading_card": "..."}, "continuity": {"requires": ["CHAR_001", "LOC_003", "PROP_007"]},
  "engine": {}, "references": [], "generation": {}, "qa": {}
}
```

`compileShot(shot, 'veo_3_1')` and `compileShotForAll(shot, [...])` turn it into prompts. See `skillsData.ts`.

## 6. Continuity and the Asset Graph

```text
PROJECT ── CHARACTERS (Helena, Marcus) ── LOCATIONS (Lab, Street) ── PROPS (Radio, Vehicle)
        └─ STYLES · FRAMES · VIDEOS · AUDIO · SHOTS

SHOT_023 ── character → Helena · location → Lab · prop → Radio · frame → FRAME_023
         └─ video → VIDEO_023 · audio → AUDIO_023 · style → PRECISIONTHRILLER
```

`new AssetGraph().add(...shots).impactOf('Helena')` answers: *"If I change Helena's hair, which shots must be regenerated?"* `sequenceContinuity(shots)` runs the 13 checks (180° rule, screen direction, eyeline, wardrobe, light direction, sun position, props, identity, geometry, time, weather, camera axis, focal relationship).

## 7. Audit → Critique → Polish

```text
/cinema:audit     → 12 weighted dimensions, Cinematic Score, CRITICAL / WARNING / RECOMMENDATION
/cinema:critique  → explains the worst items (why it fails, what would be stronger)
/cinema:polish    → regenerates ONLY the failing shots (polishPlan)
/cinema:finish    → color, sound, master, delivery gate (G12 + G13)
```

Dimensions and weights live in `tables.audit_dimensions`. The pass rule is G12: score ≥ 80 and zero CRITICAL. `cinemaSlop()` adds deterministic detection of generic AI-cinema tells (15 rules).

## 8. Command map

| Area | Commands |
|---|---|
| Project | `/project:init` · `/project:audit` |
| Story | `/story:develop` · `/story:analyze` · `/deliver:screenplay` |
| Shot / Scene | `/shot:create` · `/shot:audit` · `/scene:direct` · `/camera:design` · `/acting:direct` · `/edit:cut` |
| Reference | `/reference:analyze` |
| Continuity | `/continuity:audit` |
| AI | `/model:benchmark` · `/model:recommend` · `/prompt:compile --engine <id>` · `/code:animate` |
| QA | `/artifact:check` · `/cinema:audit` · `/cinema:critique` · `/cinema:polish` · `/cinema:finish` |
| Legacy (unchanged) | `/route` · `/skill` · `/style` · `/profile` · `/pipeline` · `/model` · `/lint` · `/engines` · `/brand` · `/blend` · `/grade` |

## 9. Implementation phases

| Phase | Scope | Status in 3.3 |
|---|---|---|
| 1 Consolidate | Project Bible, Shot Spec, Shot DNA, Asset Graph | **Done** (skills 65, 66, 70; templates; `AssetGraph`) |
| 2 Intelligence | Model Intelligence, benchmark suite, Reference Intelligence, Prompt Compiler 2 | **Done** (skills 67, 68, 66; adapters; `modelIntelligence`) — *benchmark results are empty until you measure* |
| 3 Direction | Grammar, Cinematography Director, Acting 2.0, Edit Engine, Sound Cinema | **Done** (skills 59–62, 69) |
| 4 QA | Cinema Audit, Continuity audit, Artifact Detector, Slop Detector | **Done** (skills 63, 64, 70; gates G10–G13) |
| 5 Learning | Production memory, engine/style/shot performance | **Schema done** (skill 74, `tables.learning_loop`) — needs real production data |

## 10. What is still open

- Run the 10-test benchmark on the engines you actually use and fill `tables.engine_benchmark.results`.
- Re-verify engine specs added in 3.3 (`confidence: low`, `verified_on 2026-06-30`) and the v3.1 specs older than 90 days (`staleEngines()`).
- Optionally translate the remaining Portuguese v3.1 strings in the JSON (`triggers_pt` stays for PT routing).
- Assimilate additional repositories (CineZine, openDesign, Hugovdd/skills, openclaw marketplace) once their contents are provided; each addition should land as a style, skill, pipeline, table or adapter — never as a loose file.
