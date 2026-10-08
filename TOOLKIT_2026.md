# CineOS Toolkit 2026 — Professional Software & AI Tools

**Credits:** Daniel Rodrigues · Draft Creative Studio Ltd

> Software knowledge for professional handoff (Skill 71). Feature names change between releases; treat version-specific items as 'verify in the installed version'. Color rule: one grade authority, one compositing authority.

**Currency warning.** Feature names, limits and prices of AI tools change monthly. Items here describe stable *roles* and workflows. Anything version-specific must be checked in the installed version or on the vendor page. Engines in `draft_studio_config.json` carry `verified_on` and `confidence`.

## Who does what (one authority per job)

| Job | Authority | Why |
|---|---|---|
| Story, script, planning | LLM (any) + CineOS skills | Structure and consistency |
| Hero frames and stills | Flux / Nano Banana / Midjourney / GPT Image / Seedream | Per-style strengths |
| Local fixes on stills | Photoshop (+ Firefly) | Layer control |
| Vector / typography | Illustrator, Recraft, code (Skill 73) | Exact shapes and text |
| Video generation | Veo / Kling / Seedance / Hailuo / Wan / Hunyuan / Higgsfield | Per Model Intelligence |
| Upscale / enhance | Magnific (stills), Topaz Video AI (video) | Before grading |
| Assembly and cut | Premiere Pro or CapCut | Rhythm and speed |
| Compositing / motion graphics | After Effects, Blender (3D), Fusion | Plates + overlays |
| **Grade authority** | **DaVinci Resolve** | One grade, one color pipeline |
| Sound mix | Fairlight (Resolve) / Premiere Essential Sound | Loudness targets |

## Adobe Premiere Pro
*NLE*

**Use for:** assembly and rough cut; multicam and dialogue edit; captions and text-based editing; Lumetri basic grade; Essential Sound / audio cleanup; proxy workflow; Dynamic Link to After Effects

**In:** ProRes 422 HQ / DNxHR HQX clips, MP4 proxies, WAV 48 kHz stems, EDL/XML from other tools  
**Out:** ProRes master, H.264/H.265 delivery, XML/AAF to Resolve, captions SRT

**Recipes:**
- Name clips S###_V## and keep 1 s handles; ingest at native fps (24); create proxies for 4K
- Edit with J/L cuts for dialogue; export XML to Resolve for the final grade

## Adobe After Effects
*Compositing / Motion*

**Use for:** motion graphics and titles; compositing AI plates with overlays; tracking and roto; expressions and scripts; light-FX and particles; Cinema 4D / 3D camera workflows

**In:** PNG/EXR sequences, ProRes 4444 with alpha, SVG/AI from Illustrator, audio WAV  
**Out:** ProRes 4444, PNG sequence, Lottie via plugin

**Recipes:**
- Work in a 16-bit linear project with ACES or a consistent working space
- Use expressions (wiggle, loopOut) and Essential Graphics templates for repeatable title packages

## Adobe Photoshop
*Image*

**Use for:** hero-frame retouch; generative fill / expand for local fixes; character-sheet layout; thumbnails and key art; matte painting and texture; Camera Raw look development

**In:** PNG/TIFF 16-bit from generators, Magnific upscales  
**Out:** PSD with layers, PNG/JPG, TIFF 16-bit

**Recipes:**
- Keep AI output on a smart object; fix hands/text locally; export 16-bit for grading
- Use layers to isolate the accent element of a DNA blend

## Adobe Illustrator
*Vector*

**Use for:** logos and brand marks; title cards and lower thirds; vector icons and diagrams; assets for After Effects shape layers

**In:** SVG from Recraft, brand guidelines  
**Out:** SVG, AI, PDF vector

**Recipes:**
- Create critical typography as vector, then animate in After Effects instead of asking a video model to render text

## DaVinci Resolve
*Grade / Edit / Fusion / Fairlight*

**Use for:** primary and secondary grade (node tree); ACES or DaVinci Wide Gamut color management; film emulation and grain; Fusion VFX; Fairlight audio mix; Magic Mask and tracking; final conform and delivery

**In:** XML/AAF/EDL from Premiere, ProRes / DNxHR, LUTs (.cube)  
**Out:** ProRes / H.265 master, graded stills, DCTL/LUT

**Recipes:**
- Node order: input transform → exposure/balance → contrast → secondaries → look (grading card HEX tints) → film grain/halation → output transform
- Apply the project's color_grading_card values as the starting node; verify skin tones on a vectorscope

## CapCut
*Fast edit / vertical*

**Use for:** vertical 9:16 edits; auto captions and templates; quick keyframes and speed ramps; social-ready exports; ByteDance model integrations where available

**In:** MP4/MOV clips, SRT  
**Out:** MP4 9:16 / 16:9, captioned versions

**Recipes:**
- Use for vertical micro-drama assembly and caption styling; keep the master grade from Resolve
- Respect safe zones: top 12% / bottom 15%

## Blender
*3D / Animation / Compositing*

**Use for:** 3D previs and blocking; set extensions and props; Grease Pencil 2D animation; Geometry Nodes procedural effects; camera tracking; bpy Python automation; AgX/Filmic or ACES view transforms

**In:** reference images, camera plan with FOV in degrees, HDRI  
**Out:** EXR multilayer sequences, ProRes, depth/normal passes for AI relight

**Recipes:**
- Block the scene with real FOV (degrees) to get a depth/pose guide for ControlNet or i2v; render passes to composite in After Effects or Fusion
- Automate repeatable renders with bpy scripts (Skill 73)

## Higgsfield (Cinema Studio, Soul ID)
*AI platform*

**Use for:** camera-preset driven AI video; recurring identity with Soul ID; multi-model access

**In:** hero frames, identity references  
**Out:** MP4 clips

**Recipes:**
- Lock identity first with Soul ID; match the camera preset to the Shot Spec's device and speed

## Magnific
*AI finishing*

**Use for:** creative upscale; relight; style transfer; skin and texture enhancement

**In:** PNG/TIFF stills  
**Out:** upscaled stills

**Recipes:**
- Low creativity for faces, higher for environments; always check identity and text after upscale

## Topaz Video AI
*AI finishing*

**Use for:** video upscale; denoise; interpolation

**In:** ProRes/MP4 clips  
**Out:** upscaled clips

**Recipes:**
- Upscale before grade; add grain afterwards

## ComfyUI
*Node pipeline*

**Use for:** local control; PuLID/IP-Adapter identity; regional prompting; open-weights video (Wan, LTX, Hunyuan)

**In:** JSON workflows, reference sets  
**Out:** image/video sequences

**Recipes:**
- Version your workflow JSON; keep seeds and model hashes in AI_BIBLE.md

## Models and platforms (decision shortcuts)

See `BaseSkill.md` §4 for the full registry and `tables`/`engine_adapters` in the JSON. Shortcuts:

| Need | First candidates |
|---|---|
| Dialogue + rich audio | Veo 3.1 |
| Cheap multishot, 4K | Kling 3.0 |
| Long clips, many references | Seedance 2.5 / 2.0 |
| Fast social draft | Grok Imagine Video |
| Local control | ComfyUI + LTX / Wan / HunyuanVideo |
| Recurring identity | Higgsfield Soul ID, PuLID, Flux Kontext |
| Text in image | GPT Image 2, Ideogram, Qwen-Image |
| Vector assets | Recraft |
| Mood boards | Midjourney |
| Chinese-market assets | Seedream, Qwen-Image, Hailuo, Kling, Seedance |

## Standard handoff checklist

1. Name clips `S###_V##_<engine>`; keep 1 s handles; keep native fps (24 unless the delivery says otherwise).
2. Upscale first (Magnific / Topaz), then grade, then add stochastic grain (G7).
3. Work in one color space (ACES or Rec.709 managed); never grade twice in different tools.
4. Export ProRes 422 HQ / DNxHR HQX intermediates; delivery H.264/H.265 only at the end.
5. Render critical text/logos in vector or code, composite in After Effects.
6. Mix to loudness: social −14 LUFS / −1 dBTP; EBU R128 −23; ATSC A/85 −24.
7. Record engine, seed, references and prompt in `AI_BIBLE.md` for every approved shot.
