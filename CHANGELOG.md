# Changelog

## 3.3.0 — Cinematic Intelligence Architecture (2026-10-03)
Credits: Daniel Rodrigues

### Maintenance update — 2026-10-10

#### Added
- Quality Loop diagnostics for Hardness, Anti-Slop scoring, Smart Sharpen, Humanize Text and modality-specific Post-Sharpen plans.
- Delivery enforcement APIs: `qualityDeliveryGate`, `assertDeliverable`, `compilePromptForDelivery` and `compileShotForDelivery`.
- Automated regression tests for quality-loop behavior, delivery gates and integration paths.
- Explicit `UNASSESSED` behavior for empty input, with actionable findings instead of an artificial numeric score.
- Humanize Text replacements that preserve the original intent more accurately.
- Reproducible Node dependency installation through the committed npm lockfile.

#### Quality scoring hardening
- Replaced keyword-only score boosts with evidence-aware deterministic features.
- Technical evidence is modality-specific; subject/action/context and grounded detail combinations affect specificity and originality.
- Added adversarial regression coverage so keyword stuffing cannot earn `PASS` by itself.

#### Changed
- CI now uses `npm ci`, then runs unit/integration tests, the Python contract validator, TypeScript type-checking and dependency advisory reporting.
- Updated the audit document reference to `DANI_SKILLS_AUDIT_v3.3.md`.
- Aligned documented AntiSlopScore thresholds with the implemented delivery gate.

### Added
- Skills 59–75 (Cinematic Grammar, Cinematography Director, Acting Director 2.0, Sound Cinema Engine, AI Artifact Detector, Cinema Audit + Slop, Project Bible & Memory, Shot DNA + Prompt Compiler, Model Intelligence, Reference Intelligence, Edit Engine, Continuity + Asset Graph, Software Workflow Bridge, Deliverables Studio, Code-Driven Animation, Production Learning Loop, Micro-Drama Showrunner).
- 10 Visual DNAs with Color Grading DNA; 4 blend recipes; 9 LUT presets.
- 8 engines (low confidence) and 20 `engine_adapters`.
- Profiles 19–22; 7 pipelines; 13 routes; gates G10–G13; 22 commands.
- Tables: `director_profiles`, `design_tokens`, `cinema_slop`, `audit_dimensions`, `artifact_checks`, `engine_benchmark`, `model_intelligence`, `continuity_checks`, `project_bible_files`, `software_tools`, `deliverable_formats`, `learning_loop`; 15 new templates.
- TS: `compileShot`, `compileShotForAll`, `modelIntelligence`, `cinemaSlop`, `lintCinema`, `cinemaAudit`, `polishPlan`, `artifactVerdict`, `continuityCheck`, `sequenceContinuity`, `AssetGraph`, `directorProfile`, `designToken`, `gateG10`.
- Docs: `ARCHITECTURE.md`, `DANI_SKILLS_AUDIT_v3.3.md`, `TOOLKIT_2026.md`, `UNIVERSAL_PROMPT.md`, `PROJECT_BIBLE_TEMPLATE/`, `scripts/validate_contract.py`.

### Changed
- `BaseSkill.md` rewritten in English; protocol now reads project memory first and ends with audit/polish/learning.
- Existing routes/profiles/pipelines wired to the new skills and gates (additive only).
- `gradeCard()` prefers an exact LUT-name match before the fuzzy match.
- `Stage` type gains `edit` and `memory`.

### Preserved
- All v3.1 skills, styles, engines, pipelines, routes, gates, templates and functions. No ID was renamed or removed.

### Known limits
- Benchmark results and learning loop need real data.
- 3.3 engines are training-knowledge (2026-06-30), confidence low.
- Portuguese remains in v3.1 JSON strings, `triggers_pt`, and the v3.1 catalog/profile sections.
- Repositories other than Dani Skills (CineZine, openDesign, Hugovdd/skills, openclaw marketplace, impeccable) were not available in this session and have not been assimilated.
