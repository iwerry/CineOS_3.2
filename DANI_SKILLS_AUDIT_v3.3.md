# Dani Skills v3.1 → 3.2 Architecture Audit

**Credits:** Daniel Rodrigues · Daniel Rodrigues

**Method and limits.** Classification is based on the structure of `dani_skills_config.json` (skill summaries, requires/feeds, routes, pipelines, gates) and the contents of `BaseSkill.md`, `skillsData.ts`, README and the doc files. It is **not** a line-by-line review of every skill's internal wording. Treat IMPROVE/MERGE items as design decisions to confirm.

**Result:** 32 KEEP · 12 IMPROVE · 1 MERGE · 0 REPLACE · 17 NEW. Nothing was removed.

## Skills

| Code | Name | Class | Decision |
|---|---|---|---|
| SKILL 01 | Anime Action | **KEEP** | Domain skill; unchanged. Wired to new QA gates where relevant. |
| SKILL 02 | Brand Story | **KEEP** | Domain skill; unchanged. Wired to new QA gates where relevant. |
| SKILL 03 | Cartoon | **KEEP** | Domain skill; unchanged. Wired to new QA gates where relevant. |
| SKILL 04 | 3D CGI | **KEEP** | Domain skill; unchanged. Wired to new QA gates where relevant. |
| SKILL 05 | Cinematic | **KEEP** | Domain skill; unchanged. Wired to new QA gates where relevant. |
| SKILL 06 | Comic to Video | **KEEP** | Domain skill; unchanged. Wired to new QA gates where relevant. |
| SKILL 07 | Fashion Look | **KEEP** | Domain skill; unchanged. Wired to new QA gates where relevant. |
| SKILL 08 | Fight Scene | **IMPROVE** | Fight scene: add Skill 61 beats and Skill 63 physics checks. |
| SKILL 09 | Food & Beverage | **KEEP** | Domain skill; unchanged. Wired to new QA gates where relevant. |
| SKILL 10 | Motion Design | **KEEP** | Domain skill; unchanged. Wired to new QA gates where relevant. |
| SKILL 11 | Music Video | **KEEP** | Domain skill; unchanged. Wired to new QA gates where relevant. |
| SKILL 12 | Product 360 | **KEEP** | Domain skill; unchanged. Wired to new QA gates where relevant. |
| SKILL 13 | Product Ad | **KEEP** | Domain skill; unchanged. Wired to new QA gates where relevant. |
| SKILL 14 | Real Estate | **KEEP** | Domain skill; unchanged. Wired to new QA gates where relevant. |
| SKILL 15 | Seedance Base | **KEEP** | Foundation of every video prompt. Now fed by Shot Spec (66). |
| SKILL 16 | ComfyUI Mastery | **KEEP** | ComfyUI node knowledge; adapter `comfyui` added. |
| SKILL 17 | Social Hook | **KEEP** | Domain skill; unchanged. Wired to new QA gates where relevant. |
| SKILL 18 | Thumbnail para Redes Sociais | **KEEP** | Domain skill; unchanged. Wired to new QA gates where relevant. |
| SKILL 19 | Direção de Cinema Digital (Higgsfield / ComfyUI) | **IMPROVE** | Digital direction copilot → delegate the "why" to Skill 60 and coverage to Skill 59. |
| SKILL 20 | Técnicas de Câmera Física e Digital | **IMPROVE** | Camera knowledge stays; movements/light now also exposed as design tokens. |
| SKILL 21 | Roteirização em Master Scenes | **KEEP** | Domain skill; unchanged. Wired to new QA gates where relevant. |
| SKILL 22 | Consistent Characters (Identidade Visual) | **IMPROVE** | Identity recipes stay; identity refs + negative identity locks move into the Continuity Graph (70). |
| SKILL 23 | Character Sheet (Do Rascunho à Apresentação) | **KEEP** | Character sheet; feeds Asset Graph. |
| SKILL 24 | Direção de Atuação Sintética (Acting Director OS) | **IMPROVE** | Extended by Skill 61 (beat timeline, subtext, micro-action). Keep 15-symptom audit. |
| SKILL 25 | Pós-Produção e Emulação Química (Darkroom + LUT) | **KEEP** | Darkroom chain + LUT. Resolve/AE handoff now documented in Skill 71. |
| SKILL 26 | Áudio Multimodal e Foley Síncrono (SCELA) | **IMPROVE** | SCELA block gains [SILENCE]; layered model in Skill 62. |
| SKILL 27 | Motion Design e Launch Video (MiniMax H3 / Higgsfield) | **KEEP** | Domain skill; unchanged. Wired to new QA gates where relevant. |
| SKILL 28 | Prompt Engineering Seedance Faceless (Documentário) | **KEEP** | Domain skill; unchanged. Wired to new QA gates where relevant. |
| SKILL 29 | Calendário Editorial e Distribuição Multi-Plataforma | **KEEP** | Domain skill; unchanged. Wired to new QA gates where relevant. |
| SKILL 30 | Análise Pós-Publicação e Iteração de Dados | **KEEP** | Domain skill; unchanged. Wired to new QA gates where relevant. |
| SKILL 31 | Localização e Adaptação Cultural Multi-Idioma | **KEEP** | Domain skill; unchanged. Wired to new QA gates where relevant. |
| SKILL 45 | Análise de Imagem e Engenharia Reversa de Prompt | **IMPROVE** | Image analysis → Reference Intelligence (68) handles video/film/location and outputs Cinematic DNA. |
| SKILL 46 | Direção de Imagem (T2I / I2I / Multi-Referência) | **IMPROVE** | Gains adapters for Flux Kontext, Qwen-Image, Ideogram, Recraft. |
| SKILL 47 | Arquiteto de História (Premissa, Estrutura e Bíblia de Mundo) | **KEEP** | Domain skill; unchanged. Wired to new QA gates where relevant. |
| SKILL 48 | Storyboard, Shot List e Animatic (Pré-Vis) | **IMPROVE** | Storyboard rows now carry `story_function` (Skill 59) and export to PDF/XLSX (Skill 72). |
| SKILL 49 | Sound Design Bible, Trilha e Direção de Voz | **IMPROVE** | Sound Bible; silence cues and layers via Skill 62. |
| SKILL 50 | Estúdio Educacional (Aula, Explainer, EdTech) | **KEEP** | Domain skill; unchanged. Wired to new QA gates where relevant. |
| SKILL 51 | Motion de Produto Digital (UX/UI para Vídeo) | **KEEP** | Domain skill; unchanged. Wired to new QA gates where relevant. |
| SKILL 52 | Bíblia de Pré-Produção (Moodboard, Style Bible, Cronograma e Orçamento) | **MERGE** | Pre-production Bible merged into Skill 65 (Project Bible & Memory). Budget/schedule content kept. |
| SKILL 53 | Roteador de Motores e Adaptador de Prompt | **IMPROVE** | Router becomes Model Intelligence (67) + Adapters (66). Keep as the entry point. |
| SKILL 54 | Upgrade de Vídeo Comum para Cinema (V2V Restyle) | **KEEP** | V2V upgrade; now followed by artifact + continuity QA. |
| SKILL 55 | Continuidade e Auditoria de Qualidade (Script Supervisor Sintético) | **IMPROVE** | Script-supervisor skill kept as QA entry; core logic moves to Skill 70; scoring to Skill 64. |
| SKILL 56 | Compliance, IP e Proveniência | **KEEP** | Domain skill; unchanged. Wired to new QA gates where relevant. |
| SKILL 57 | DNA Blending Lab (Mistura de Estilos) | **KEEP** | DNA Blending Lab; 4 new recipes. |
| SKILL 58 | Color Grading DNA Engine | **KEEP** | Color Grading DNA; 10 new cards + 9 LUT presets. |
| SKILL 59 | Cinematic Grammar Engine (Shot → Sequence → Scene → Act → Film) | **NEW** | Added in 3.2. |
| SKILL 60 | Cinematography Director (the 'Why' engine) | **NEW** | Added in 3.2. |
| SKILL 61 | Acting Director 2.0 (Beats, Subtext, Micro-Action) | **NEW** | Added in 3.2. |
| SKILL 62 | Sound Cinema Engine (Layers + Silence Design) | **NEW** | Added in 3.2. |
| SKILL 63 | AI Artifact Detector (Hands, Physics, Camera, Continuity) | **NEW** | Added in 3.2. |
| SKILL 64 | Cinema Audit, Critique & Polish (Slop Detector) | **NEW** | Added in 3.2. |
| SKILL 65 | Project Bible & Cinematic Memory (PROJECT.md vs STYLE_BIBLE.md) | **NEW** | Added in 3.2. |
| SKILL 66 | Shot DNA & Prompt Compiler 2.0 (compileShot) | **NEW** | Added in 3.2. |
| SKILL 67 | Model Intelligence & Engine Benchmark | **NEW** | Added in 3.2. |
| SKILL 68 | Reference Intelligence Engine (Reference → Cinematic DNA) | **NEW** | Added in 3.2. |
| SKILL 69 | Edit Engine (AI-native Editing & Montage) | **NEW** | Added in 3.2. |
| SKILL 70 | Continuity Graph & Asset Graph | **NEW** | Added in 3.2. |
| SKILL 71 | Software Workflow Bridge (Premiere · After Effects · Photoshop · Illustrator · Resolve · CapCut · Blender) | **NEW** | Added in 3.2. |
| SKILL 72 | Deliverables Studio (Screenplay, Treatment, Pitch Deck, Storyboard PDF) | **NEW** | Added in 3.2. |
| SKILL 73 | Code-Driven Animation & Procedural Video | **NEW** | Added in 3.2. |
| SKILL 74 | Production Learning Loop (Performance Memory) | **NEW** | Added in 3.2. |
| SKILL 75 | Micro-Drama & Series Showrunner (Vertical Serial) | **NEW** | Added in 3.2. |

## Other components

| Component | Class | Decision |
|---|---|---|
| 59 Visual DNA styles | KEEP | Unchanged. +10 new (69 total), each with a Color Grading card. |
| Color Grading DNA (`tables.color_science`) | KEEP | Unchanged; 9 LUT presets added (21 total). |
| `tables.ai_style_mixes` | IMPROVE | +4 recipes (16 total). |
| `lintPrompt()` | KEEP | Unchanged; complemented by `cinemaSlop()` and `lintCinema()`. |
| `compilePrompt()` | KEEP | Kept for backward compatibility. `compileShot()` is the 3.2 path (intent → adapter). |
| `recommendEngines()` | KEEP | Spec-based ranking. `modelIntelligence()` adds assets, budget, risk, benchmark. |
| Gates G1–G9 | KEEP | Unchanged. G10–G13 added. |
| 18 pipelines | KEEP | `p_short_film`, `p_brand_film` gain gates G10–G13. +7 pipelines (25 total). |
| 22 routes | KEEP | +13 routes (35 total); 12 existing routes gained support skills. |
| 18 profiles | KEEP | 8 profiles gained 3.2 skills. +4 profiles (22 total). |
| 23 engines | KEEP | +8 engines (31 total, low confidence). |
| Language of constitution | REPLACE | `BaseSkill.md` rewritten in English. JSON content from v3.1 still partly Portuguese. |
| Project memory | NEW | Project Bible folder, decision log, Asset Graph. |
| Benchmark | NEW | Suite defined (T001–T010); results empty until measured. |
| Learning loop | NEW | Schema only; needs real production data. |

## Gaps found in v3.1 (and where 3.2 closes them)

| Gap | Closed by |
|---|---|
| No persistent project memory | Skill 65, G10 |
| Continuity was a checklist, not a graph | Skill 70, G11, `AssetGraph` |
| Editing barely covered | Skill 69, `edit_cut` route |
| No whole-film evaluation | Skill 64, G12, `cinemaAudit()` |
| AI artifacts handled only as 15 acting symptoms | Skill 63, G13 |
| Prompts tied to one model's syntax | Skill 66, `engine_adapters`, `compileShot()` |
| Model choice by spec only | Skill 67, benchmark suite |
| No professional-software handoff | Skill 71, `TOOLKIT_2026.md` |
| No paper deliverables (screenplay, deck, storyboard PDF) | Skill 72 |
| Typography/UI always at risk in video models | Skill 73 |
| No series/vertical-drama planning | Skill 75 |
