<!-- # Skill Criada por Daniel Rodrigues · Daniskills — Daniel Rodrigues · skills_cinema_pipeline v3.3.0-cia (v3.1 tables kept in Portuguese; Daniskills 3.3 sections in English; generated from daniskills_config.json) -->
# Daniskills 3.3 Catalog — 62 Skills · 69 Styles · 25 Pipelines

Compatível com ComfyUI, Higgsfield Cinema Studio, Seedance 2.0/2.5, Veo 3.1, Kling 3.0, Grok Imagine, FLUX.2, GPT Image 2 e Nano Banana. Regras e conhecimento de motores: `BaseSkill.md`. Dados: `daniskills_config.json`. Funções: `skillsData.ts`.

## Como invocar
```bash
/skill:<id|nome> --prompt "<ideia>" --ratio 16:9 --style SINCITY
/pipeline:p_short_film --style FINCHER --ratio 2.39:1
/route "quero analisar essa imagem e gerar o prompt de recriação para o Veo"
/engines --mode t2v --style KUBRICK
/blend:NOIR+LIQUIDGLASS --weights 70/30      # Skill 57 (v3.3)
/grade:UFOTABLE                               # cartão de color grading (v3.3)
/brand:on --marca "X" --produto "Y" --vinculo afiliado   # Modo Marca (G9)
```
Auto-carregamento: **Skill 15** sempre · **16** se ComfyUI · **25** se pós · **53** em todo vídeo · **55/56** antes de entregar · **58** quando o pedido citar cor/saturação/sombras/grade · **57** quando houver 2 estilos · **G9** quando o pedido citar marca/produto real.

## Ciclo de produção em 5 fases
**1 Pré-produção:** 47 História → 21 Roteiro → 52 Bíblia → 22/23 Personagem → 45 Análise de refs → 57 Mistura de DNA → 48 Storyboard

**2 Produção:** 46 Hero Frame → 53 Motor por plano → 19/20 Direção e câmera → estilo (01–14, 27, 28, 50, 51 + Visual DNA) → 58 Grade → 24 Atuação → 26/49 Áudio

**3 Pós:** 54 V2V → 25 Darkroom/LUT → 26 Mix → 55 QA

**4 Distribuição:** 17 Hook → 18 Thumb → 29 Calendário (3 hashtags) → 31 Localização → 56 Compliance

**5 Análise:** 30 Retenção e CTR → volta para 17/18/21/28

## Skills vs. Conhecimento vs. DNA (como este acervo se organiza)
| Camada | O que é | Onde vive |
|---|---|---|
| **Skill** | habilidade executável (roteirizar, rotear motor, gradear, mesclar) | `skills[]` (skill_NN) |
| **Conhecimento** | tabelas de óptica, luz, câmera, motores, mercados, ciência de cor | `tables{}`, `models[]` |
| **Visual DNA** | kit de look: óptica + paleta + textura + luz + movimento + **color grading** | `styles[]` (dna_*) |
| **Receita de mistura** | híbrido 70/30 de dois DNAs | `tables.ai_style_mixes`, `style.blend_recipe` |
| **Perfil** | dono do problema + kit padrão | `profiles[]` |

## Índice de skills (fonte: JSON)
| Código | Skill | Fase | Requer | Alimenta | Modos |
|---|---|---|---|---|---|
| SKILL 01 | Anime Action | Produção | 15 | 25,26 | generate_video, create_image |
| SKILL 02 | Brand Story | Produção | 15,21 | 25,26,29 | generate_video, write_script |
| SKILL 03 | Cartoon | Produção | 15 | — | generate_video, create_image |
| SKILL 04 | 3D CGI | Produção | 15 | 12,13 | generate_video, create_image |
| SKILL 05 | Cinematic | Produção | 15,20 | 25 | generate_video, create_image, plan_production |
| SKILL 06 | Comic to Video | Produção | 15 | — | generate_video |
| SKILL 07 | Fashion Look | Produção | 15 | 25 | generate_video, create_image |
| SKILL 08 | Fight Scene | Produção | 15,20,24 | 26 | generate_video |
| SKILL 09 | Food & Beverage | Produção | 15 | 26 | generate_video, create_image |
| SKILL 10 | Motion Design | Produção | 15 | 27,51 | motion_ui, generate_video |
| SKILL 11 | Music Video | Produção | 15,26 | 25 | generate_video, compose_music |
| SKILL 12 | Product 360 | Produção | 15 | 13 | generate_video |
| SKILL 13 | Product Ad | Produção | 15,17 | 29 | generate_video, write_script |
| SKILL 14 | Real Estate | Produção | 15,20 | 25 | generate_video |
| SKILL 15 | Seedance Base | Fundação | — | — | route_model |
| SKILL 16 | ComfyUI Mastery | Fundação | — | — | route_model, grade_post |
| SKILL 17 | Social Hook | Produção | 15 | 13,29 | write_script, generate_video |
| SKILL 18 | Thumbnail para Redes Sociais | Distribuição | 46 | 29,30 | make_thumbnail, create_image |
| SKILL 19 | Direção de Cinema Digital (Higgsfield / ComfyUI) | Produção | 15,16,20 | 24,25 | generate_video, plan_production, route_model |
| SKILL 20 | Técnicas de Câmera Física e Digital | Produção | 15 | — | generate_video, storyboard |
| SKILL 21 | Roteirização em Master Scenes | Pré-produção | — | 48,17,28 | write_script |
| SKILL 22 | Consistent Characters (Identidade Visual) | Pré-produção | 16 | 23,24 | build_character |
| SKILL 23 | Character Sheet (Do Rascunho à Apresentação) | Pré-produção | 22 | — | build_character, create_image |
| SKILL 24 | Direção de Atuação Sintética (Acting Director OS) | Produção | 22 | 26 | direct_acting |
| SKILL 25 | Pós-Produção e Emulação Química (Darkroom + LUT) | Pós | 16 | — | grade_post |
| SKILL 26 | Áudio Multimodal e Foley Síncrono (SCELA) | Áudio | — | 49 | design_audio, design_sfx |
| SKILL 27 | Motion Design e Launch Video (MiniMax H3 / Higgsfield) | Produção | 15 | 29 | generate_video, motion_ui |
| SKILL 28 | Prompt Engineering Seedance Faceless (Documentário) | Produção | 15,20 | 26 | generate_video |
| SKILL 29 | Calendário Editorial e Distribuição Multi-Plataforma | Distribuição | — | 30 | plan_calendar |
| SKILL 30 | Análise Pós-Publicação e Iteração de Dados | Análise | 29 | 17,18,21,28 | analyze_performance |
| SKILL 31 | Localização e Adaptação Cultural Multi-Idioma | Distribuição | 21 | 29 | localize |
| SKILL 45 | Análise de Imagem e Engenharia Reversa de Prompt | Pré-produção | 15 | 46,48,54,55 | analyze_image, audit_qa |
| SKILL 46 | Direção de Imagem (T2I / I2I / Multi-Referência) | Produção | 15 | 18,48,54 | create_image, make_thumbnail |
| SKILL 47 | Arquiteto de História (Premissa, Estrutura e Bíblia de Mundo) | Pré-produção | — | 21,22,48,52 | write_story, plan_production |
| SKILL 48 | Storyboard, Shot List e Animatic (Pré-Vis) | Pré-produção | 21,20 | 46,53,55 | storyboard, plan_production |
| SKILL 49 | Sound Design Bible, Trilha e Direção de Voz | Áudio | 26 | — | design_audio, design_sfx, compose_music |
| SKILL 50 | Estúdio Educacional (Aula, Explainer, EdTech) | Produção | 21,15 | 26,29 | edu_content, write_script, generate_video |
| SKILL 51 | Motion de Produto Digital (UX/UI para Vídeo) | Produção | 10,27 | 29 | motion_ui, generate_video |
| SKILL 52 | Bíblia de Pré-Produção (Moodboard, Style Bible, Cronograma e Orçamento) | Pré-produção | 47,53 | 48,19 | plan_production |
| SKILL 53 | Roteador de Motores e Adaptador de Prompt | Fundação | 15 | 19,46,48,54 | route_model |
| SKILL 54 | Upgrade de Vídeo Comum para Cinema (V2V Restyle) | Pós | 45,46,25 | 26 | upgrade_video, grade_post |
| SKILL 55 | Continuidade e Auditoria de Qualidade (Script Supervisor Sintético) | Qualidade | 15 | — | audit_qa |
| SKILL 56 | Compliance, IP e Proveniência | Qualidade | — | 29 | audit_qa |
| SKILL 57 | DNA Blending Lab (Mistura de Estilos) | Pré-produção | 15,46 | 48,52 | create_image, generate_video, plan_production |
| SKILL 58 | Color Grading DNA Engine | Pós | 25 | — | grade_post, create_image |

### Estilos legados (SKILL 32–44, mantidos por compatibilidade)
| Legado | Alias | Nome completo |
|---|---|---|
| SKILL 32 | MIGNOLA | Mike Mignola — Hellboy / Dark Horse Comics |
| SKILL 33 | SINCITY | Frank Miller — Sin City / Dark Horse Comics (Hardboiled Ink Noir) |
| SKILL 34 | MOEBIUS | Jean Giraud 'Moebius' — Ligne Claire / Heavy Metal / BD Franco-Belga |
| SKILL 35 | AKIRA | Katsuhiro Otomo — Akira / Neo-Tokyo Cel Cyberpunk (1988) |
| SKILL 36 | GHIBLI | Studio Ghibli — Hayao Miyazaki Watercolor Pastoral |
| SKILL 37 | PIXAR | Pixar Animation Studios — PBR Toon 3D Moderno |
| SKILL 38 | XEROX | Walt Disney Animation Studios — Xerox Classic (1961–1977) |
| SKILL 39 | KPOP | K-Pop Comeback MV Gloss — Cultura Pop Coreana (Seul) |
| SKILL 40 | SYNTHWAVE | Synthwave / Outrun — VHS Retro MTV Anos 80 |
| SKILL 41 | DOCREAL | Documentary Photoreal — Cinéma Vérité / National Geographic Realism |
| SKILL 42 | LAIKA | Laika Studios — Stop-Motion Craft (Coraline / Kubo) |
| SKILL 43 | WES | Wes Anderson — Planimetric Pastel (Grand Budapest / Moonrise Kingdom) |
| SKILL 44 | NOIR | Hollywood Film Noir — Eastman Double-X 5222 (Preto e Branco Clássico) |

## Estilos Visual DNA v3.3 (59)
Cada estilo carrega óptica, paleta, textura, movimento, luz, referências, `prompt_core`, **`color_grading`** e motores por família. Use por alias (`/style:WES`). Estilos marcados ⭐ são novos na 3.3.

#### Quadrinhos
| Alias | Nome completo | FOV° | WB | Paleta | Melhor para |
|---|---|---|---|---|---|
| **MIGNOLA** | Mike Mignola — Hellboy / Dark Horse Comics | 84 | 4300K | #8B0000 #CC7722 #1A1A1A | trailer de HQ; true crime estilizado; capas de horror/ocultismo |
| **SINCITY** | Frank Miller — Sin City / Dark Horse Comics (Hardboiled Ink Noir) | 65 | 5600K | #000000 #FFFFFF #D40000 | trailer noir; clipe dramático; anúncio de perfume/bebida noir |
| **MOEBIUS** | Jean Giraud 'Moebius' — Ligne Claire / Heavy Metal / BD Franco-Belga | 94 | 6500K | #D9B382 #4ECDC4 #E86A92 | sci-fi contemplativo; arquitetura onírica; conceito de jogo/game world |
| **WEBTOON** ⭐ | Vertical Webtoon Flat Color — Korean Digital-Native Comic Motion | 47 | 5600K | #FF8FAB #7FD8BE #FFF3E2 | teaser de webtoon/manhwa; conteúdo vertical (9:16) narrativo; campanha de app de leitura |
*Motores (imagem → vídeo):* midjourney, flux_2 → seedance_2_5, kling_3_0, wan_2_x. Hero Frame no estilo (still) → i2v; impact frames e stepped 12fps no prompt.

#### Anime
| Alias | Nome completo | FOV° | WB | Paleta | Melhor para |
|---|---|---|---|---|---|
| **AKIRA** | Katsuhiro Otomo — Akira / Neo-Tokyo Cel Cyberpunk (1988) | 78 | 3200K | #FF2E63 #08D9D6 #252A34 | trailer cyberpunk; clipe synth/hip-hop; abertura de game |
| **GHIBLI** | Studio Ghibli — Hayao Miyazaki Watercolor Pastoral | 47 | 5600K | #7FB069 #87CEEB #F4E1C1 | conteúdo infantil/família; turismo e hospitalidade; marca artesanal/orgânica |
| **SHINKAI** | Makoto Shinkai — Luminous Sky Anime (Your Name / Weathering With You) | 54 | 6000K | #4FB3FF #FF9E9E #FFE0B5 | clipe romântico; campanha turismo; abertura de curta |
| **TRIGGER** | Studio Trigger — Neon Flat-Pop Anime (Kill la Kill / Cyberpunk: Edgerunners) | 107 | 4000K | #FF3D81 #00F0FF #FFE600 | trailer de ação; clipe eletrônico; campanha streetwear |
| **LOFI** | Lo-Fi Anime Study Beats — Cozy Night Loop Aesthetic | 47 | 3000K | #F2A65A #264653 #2A9D8F | visualizer de playlist; fundo de live/study; capa de álbum animada |
| **UFOTABLE** ⭐ | Dynamic Light-Cel Anime — Ufotable-School VFX-over-2D (2015–2026 modern sakuga) | 54 | 4500K | #FF5B2E #1FB6FF #0B0B14 | trailer de ação anime moderno; clipe de game/gacha; abertura de série de streaming |
| **MAPPA** ⭐ | Kinetic Fluid Sakuga — Modern Studio Powerhouse Motion (2020s) | 65 | 3800K | #7A1E1E #2B2B2B #C9A66B | trailer de anime dark/seinen; clipe de rock/metal; campanha de streaming de ação |
| **ISEKAI** ⭐ | Isekai Fantasy Light-Novel Cover — Ornate High-Fantasy Anime Key Visual | 47 | 5800K | #4361EE #F72585 #FFD60A | trailer de anime fantasia; capa/teaser de light novel ou game; campanha de RPG |
| **GHIBLIPUNK** ⭐ | Ghiblipunk — Watercolor-Pastoral × Neon-Cyberpunk Blend (v3.3 mix recipe) | 50 | 5600K | #7FB069 #87CEEB #FF2E63 | campanha de tecnologia sustentável; clipe indie synth-folk; trailer de jogo solarpunk |
*Motores (imagem → vídeo):* nano_banana, seedream_5 → seedance_2_5, kling_3_0, wan_2_x. Forte em i2v a partir de still estilizado; evitar pedir '3D'.

#### Animação 3D
| Alias | Nome completo | FOV° | WB | Paleta | Melhor para |
|---|---|---|---|---|---|
| **PIXAR** | Pixar Animation Studios — PBR Toon 3D Moderno | 54 | 5600K | #FF6B35 #004E89 #F7C59F | mascote de marca; educativo infantil; trailer de app casual |
| **SPIDERVERSE** | Spider-Man: Into the Spider-Verse — Comic-Print 3D/2D Hybrid (Sony Pictures Imageworks) | 65 | 5600K | #FF2E93 #00E5FF #FFD400 | trailer de herói original; clipe hip-hop; campanha Gen Z |
| **ARCANE** | Arcane — Fortiche Productions (Painterly 3D/2D Hybrid) | 54 | 4300K | #12B5A5 #E4257A #2A1F3D | trailer de fantasia urbana; abertura de série; clipe alternativo |
*Motores (imagem → vídeo):* flux_2, gpt_image_2 → kling_3_0, seedance_2_0, veo_3_1. SSS/peach fuzz e olhos vivos; consistência via referências.

#### Animação 2D
| Alias | Nome completo | FOV° | WB | Paleta | Melhor para |
|---|---|---|---|---|---|
| **XEROX** | Walt Disney Animation Studios — Xerox Classic (1961–1977) | 47 | 5200K | #2B2B2B #D8C9A7 #8A9A5B | nostalgia/retrô; storybook animado; campanha sazonal |
| **UKIYOE** | Ukiyo-e Woodblock — Hokusai / Hiroshige Edo Print Motion | 47 | 5600K | #1E3A5F #F2E8CF #C0392B | campanha japonesa/cultural; abertura de documentário; clipe artístico |
| **PIXELART** | 16-Bit Pixel Art JRPG — SNES / Mega Drive Era | 47 | neutral | #1A1C2C #5D275D #B13E53 | trailer de game indie; nostalgia gamer; loading screen animada |
*Motores (imagem → vídeo):* gpt_image_2, midjourney → kling_3_0, seedance_2_0. Cadência 12fps declarada; evitar 'smooth 60fps'.

#### Música / Pop
| Alias | Nome completo | FOV° | WB | Paleta | Melhor para |
|---|---|---|---|---|---|
| **KPOP** | K-Pop Comeback MV Gloss — Cultura Pop Coreana (Seul) | 65 | 5600K | #C77DFF #72EFDD #F8F9FA | clipe pop; teaser de comeback; campanha beauty/fashion Gen Z |
*Motores (imagem → vídeo):* nano_banana, seedream_5 → seedance_2_5, kling_3_0. Beat map em segundos; áudio nativo ou Suno.

#### Retrô
| Alias | Nome completo | FOV° | WB | Paleta | Melhor para |
|---|---|---|---|---|---|
| **SYNTHWAVE** | Synthwave / Outrun — VHS Retro MTV Anos 80 | 65 | 3200K | #FF6B6B #4ECDC4 #2C003E | clipe eletrônico; abertura/bumper retrô; campanha gamer |
| **Y2K** | Y2K Chrome Cyber-Optimism — 1999–2003 Futurism | 54 | 6500K | #C0C8D8 #4FD1FF #E8F1FF | campanha tech/fashion; bumper; clipe pop |
| **VAPORWAVE** | Vaporwave — Marble Busts, Pastel Grid, Windows-95 Nostalgia | 47 | 5000K | #FF71CE #01CDFE #05FFA1 | visualizer; capa de álbum animada; arte conceito |
| **SUPER8** | Super 8 Home Movie — Kodachrome Nostalgia | 65 | 5500K | #D9822B #8E2C1F #F1DFB8 | brand story nostálgico; flashback de curta; campanha de memória afetiva |
| **GLITCHCORE** ⭐ | Glitchcore / Datamosh — Corrupted-Signal Digital Aesthetic | 65 | 6500K | #FF003C #00FFF0 #0D0D0D | clipe eletrônico/hyperpop; abertura de podcast tech/hacker; campanha de streetwear digital |
*Motores (imagem → vídeo):* midjourney, flux_2 → seedance_2_0, kling_3_0, grok_imagine_video. Artefatos (tape warp, grain) declarados como feature.

#### Documental
| Alias | Nome completo | FOV° | WB | Paleta | Melhor para |
|---|---|---|---|---|---|
| **DOCREAL** | Documentary Photoreal — Cinéma Vérité / National Geographic Realism | 47 | ambient | #6B705C #A5A58D #FFE8D6 | brand story autêntica; jornalismo/ONG; true crime |
| **PLANETEARTH** | BBC Natural History — Planet Earth Ultra-Long-Lens Wildlife | 18 | 5000K | #B08D57 #3E5C3A #D9C9A3 | documentário de natureza; ESG/turismo; brand film ambiental |
| **TRUECRIME** | Faceless True-Crime Documentary — Cold Dossier Look | 84 | 5600K | #6B7280 #9CA3AF #374151 | canal faceless; história/ciência; podcast em vídeo |
| **ANALOGDREAM** ⭐ | Analog Dream Photography — Flux-Era Warm-Film AI Look (2025–26) | 47 | 4800K | #C9A876 #8A6A4F #3A2E24 | brand story autêntica; UGC premium de moda/lifestyle; capa/thumbnail que precisa 'não parecer IA' |
| **BIOLUMINESCENT** ⭐ | Bioluminescent Biopunk — Living-Light Organic Sci-Fi | 29 | 7500K | #04121C #00E5A0 #1FB6FF | campanha ESG/biotech; clipe ambient/sci-fi; beleza com conceito 'living light' |
*Motores (imagem → vídeo):* nano_banana, flux_2 → veo_3_1, seedance_2_5, kling_3_0. Sem golden hour; [live] meio-dia; positivo-only.

#### Stop-motion / Craft
| Alias | Nome completo | FOV° | WB | Paleta | Melhor para |
|---|---|---|---|---|---|
| **LAIKA** | Laika Studios — Stop-Motion Craft (Coraline / Kubo) | 35 | 3200K | #B5651D #4A4E69 #9A8C98 | curta autoral; campanha artesanal; abertura de série |
| **CLAYMATION** | Aardman Animations — Claymation Comedy (Wallace & Gromit / Shaun the Sheep) | 47 | 3200K | #D9A066 #8FB8DE #E4572E | campanha humorística; conteúdo infantil; explicador leve |
| **PAPERCUT** | Paper Cut-Out Diorama — Layered Paper Craft (Kirigami Motion) | 39 | 5000K | #E76F51 #F4A261 #2A9D8F | abertura editorial; storytelling de marca; conteúdo educativo |
*Motores (imagem → vídeo):* flux_2, midjourney → veo_3_1, seedance_2_0, kling_3_0. Jitter/12fps é feature; peça 'step exposure'.

#### Cinema de autor
| Alias | Nome completo | FOV° | WB | Paleta | Melhor para |
|---|---|---|---|---|---|
| **WES** | Wes Anderson — Planimetric Pastel (Grand Budapest / Moonrise Kingdom) | 39 | 5600K | #E9C46A #F4A261 #2A9D8F | campanha de moda/hotelaria; brand film quirky; clipe indie |
| **NOIR** | Hollywood Film Noir — Eastman Double-X 5222 (Preto e Branco Clássico) | 47 | mono | #000000 #FFFFFF #8C8C8C | thriller/mistério; perfume/bebida de luxo; true crime |
| **NEWHOLLYWOOD70S** | New Hollywood 1970s — Zoom-Lens Grain (The French Connection / Taxi Driver era) | 54 | 3200K | #8C5A2B #C98C3E #2E3B32 | curta noir urbano; campanha vintage; true crime dramatizado |
| **KUBRICK** | Stanley Kubrick — One-Point Perspective Symmetry (The Shining / 2001) | 75 | 3800K | #B32C2C #E8E1D0 #1B1B1B | curta de suspense; clipe conceitual; campanha arquitetônica |
| **FINCHER** | David Fincher — Desaturated Precision Thriller (Se7en / Zodiac / The Social Network) | 60 | 3200K | #5B6B3A #B8892B #1A1A14 | thriller; true crime dramatizado; campanha corporativa sombria |
| **VILLENEUVE** | Denis Villeneuve — Monolithic Fog Brutalism (Dune / Blade Runner 2049) | 84 | 3000K | #E07B39 #3D2B1F #C9A66B | trailer de sci-fi; brand film de arquitetura; clipe épico |
| **WONGKARWAI** | Wong Kar-wai — Step-Printed Neon Longing (In the Mood for Love / Chungking Express) | 47 | 3200K | #C1121F #2A9D8F #F4A261 | clipe romântico; campanha de perfume; curta urbano |
| **LEONE** | Sergio Leone — Spaghetti Western Extreme Close-Up (Anamorphic Dust) | 65 | 5600K | #C89B5B #8A5A2B #F2DDB0 | curta western; campanha de bebida/couro; clipe rock |
| **BURTON** | Tim Burton — Gothic Whimsy (Spiral Shadows / Striped Palettes) | 54 | 4300K | #1B1B2F #E8E8E8 #6A4C93 | campanha de Halloween; curta fantástico; clipe indie |
| **GLASSNOIR** ⭐ | Glass Noir — Liquid-Glass UI × Hollywood Film Noir Blend (v3.3 mix recipe) | 50 | mono | #000000 #FFFFFF #8C8C8C | thriller corporativo/tech; campanha de perfume/relógio de luxo com tela; trailer de app de investigação/segurança |
*Motores (imagem → vídeo):* nano_banana, flux_2 → veo_3_1, seedance_2_5, kling_3_0. Óptica em graus, WB em Kelvin, um dispositivo de câmera.

#### Educação
| Alias | Nome completo | FOV° | WB | Paleta | Melhor para |
|---|---|---|---|---|---|
| **KURZGESAGT** | Kurzgesagt — In a Nutshell (Flat-Vector Science Explainer) | 47 | neutral | #0B1026 #FF6F91 #FFC75F | explicador de ciência; aula em vídeo; pitch de startup |
| **WHITEBOARD** | Whiteboard Animation — RSA Animate / Educational Hand-Drawn Explainer | 39 | 5600K | #FFFFFF #111111 #E63946 | aula/palestra; explicador B2B; onboarding |
| **STORYBOOK** | Children's Storybook Watercolor — Picture-Book Illustration (EdTech Kids) | 47 | 5600K | #F6D5C4 #A8DADC #F1FAEE | contos infantis; material didático; campanha família |
| **BLUEPRINT** | Technical Blueprint — Engineering Draft Explainer | 47 | neutral | #0B3D91 #FFFFFF #7FD8FF | explicador de produto técnico; manual/treinamento; pitch industrial |
*Motores (imagem → vídeo):* gpt_image_2, nano_banana → kling_3_0, veo_3_1. Diagramas em código [scheme]; metáfora visual por conceito.

#### Design gráfico
| Alias | Nome completo | FOV° | WB | Paleta | Melhor para |
|---|---|---|---|---|---|
| **SWISS** | Swiss / International Typographic Style — Grid Motion Design | 47 | neutral | #FFFFFF #111111 #E30613 | vinheta de marca; apresentação institucional; promo de evento |
| **ARTDECO** | Art Deco Luxury — Gatsby-Era Geometric Gold (Cassandre Poster Motion) | 47 | 3200K | #0B0B0F #D4AF37 #F5E6C8 | perfume/joalheria; convite de gala; abertura de hotel de luxo |
*Motores (imagem → vídeo):* gpt_image_2, flux_2 → kling_3_0, minimax_hailuo. Tipografia crítica renderizada em código.

#### UI / Motion
| Alias | Nome completo | FOV° | WB | Paleta | Melhor para |
|---|---|---|---|---|---|
| **NEUBRUTALIST** | Neubrutalism UI Motion — Hard Shadows / Bold Borders | 47 | neutral | #FFDE59 #FF5757 #5CE1E6 | demo de app criativo; landing page em vídeo; anúncio de SaaS jovem |
| **LIQUIDGLASS** | Liquid Glass UI Motion — Translucent Refractive Interface (2025–26 OS Design Language) | 47 | 6500K | #F5F7FF #A5B4FC #67E8F9 | demo de app premium; anúncio de lançamento; apresentação de investidor |
| **CLAYMORPHISM** ⭐ | Claymorphism UI — Puffy Soft-3D Interface (2025–26 Product-Design Trend) | 47 | 6000K | #FFB5A7 #FCD5CE #F8EDEB | demo de app de bem-estar/saúde; onboarding fofo de SaaS consumer; campanha de produto infantil/lifestyle |
*Motores (imagem → vídeo):* gpt_image_2, flux_2 → minimax_hailuo, veo_3_1. UI e texto em código (Skill 51); vídeo só ambiente/hero.

#### Comercial
| Alias | Nome completo | FOV° | WB | Paleta | Melhor para |
|---|---|---|---|---|---|
| **CHEFSTABLE** | Chef's Table — Slow Cinematic Gastronomy Portrait | 29 | 3800K | #2B1B12 #C97B3A #E8D5B0 | restaurante autoral; cardápio sazonal; chef influencer |
| **EDITORIAL** | Vogue-Grade Fashion Editorial — High-Fashion Strobe Glamour | 29 | 5600K | #F5F0EB #111111 #B8860B | lookbook; campanha de coleção; beauty/cosméticos |
| **KEYNOTE** | Keynote Minimal Product Film — Macro Precision on Seamless Background | 24 | 5600K | #FFFFFF #111111 #C9CED6 | lançamento eletrônico; e-commerce premium; joalheria/relógio |
| **SPORTS** | Kinetic Sports Anthem — Grit, Grain & Slow-Mo Sweat | 84 | 5600K | #1C1C1C #E63946 #F1FAEE | marca esportiva; academia/luta; campanha motivacional |
| **LIQUIDMETAL** ⭐ | Liquid Metal Morph — Reflective Fluid-Chrome Transformation (2026 AI-video signature look) | 29 | 6500K | #0A0A0A #C9CED6 #FFFFFF | transição de logo/marca; reveal de produto tech; abertura de trailer de app/IA |
*Motores (imagem → vídeo):* flux_2, gpt_image_2 → veo_3_1, kling_3_0, seedance_2_0. HEX de marca e texto literal; macro/produto em motion-control.

#### Horror
| Alias | Nome completo | FOV° | WB | Paleta | Melhor para |
|---|---|---|---|---|---|
| **FOUNDFOOTAGE** | Analog Horror / Found-Footage VHS — Lo-Fi Dread | 65 | 3200K | #3A3D35 #8B9A7B #D8D5C4 | horror curto; ARG/alternate reality; teaser de jogo |
| **DREAMCORE** ⭐ | Dreamcore / Liminal Space — Uncanny Empty-Place Surrealism | 75 | 4000K | #D8C89A #8A8368 #2E2A20 | horror atmosférico faceless; ARG/alternate reality; clipe ambient/dark synth |
*Motores (imagem → vídeo):* midjourney, flux_2 → veo_3_1, kling_3_0. Imperfeição controlada; nunca gore gratuito.

## Color Grading DNA por estilo (v3.3 · Skill 58)
Saturação 0–100, tints de sombra/realce em HEX, estrutura de grão e LUT mais próxima. Copie estes valores para o bloco STYLE do prompt e para a cadeia Darkroom (Skill 25).

| Alias | Sat. | Contraste | Sombra | Realce | Grão | LUT / película |
|---|---|---|---|---|---|---|
| **NOIR** | 0 | deep S-curve, rich black falloff with silvery highlight roll | `#000000` | `#f4f2ea` | silver-halide Double-X grain, moderate density | Eastman Double-X 5222, tungsten-biased mono |
| **GLASSNOIR** | 6 | deep noir S-curve base with one cool high-key glass bloom | `#000000` | `#e8e6f2` | Double-X silver-halide grain across the frame, clean glass bloom confined to the accent surface | Double-X 5222 mono base + Liquid Glass cool-specular patch on the accent surface |
| **SINCITY** | 8 | absolute clip, pure black/pure white, zero gray ramp | `#000000` | `#ffffff` | fine halftone dot only, no photographic grain | custom bleach-bypass mono + single-channel spot-color key |
| **LIQUIDMETAL** | 10 | extreme specular contrast, near-black backdrop vs mirror-white highlight sweep | `#0a0a0a` | `#ffffff` | none, pristine chrome specular clarity | neutral chrome-specular grade, single cool accent #4FD1FF |
| **TRUECRIME** | 16 | cold flat mid-contrast, dossier-grey | `#111827` | `#d6c7a1` | subtle dust/paper grain | cold desaturated grey-blue grade, no warm push |
| **KEYNOTE** | 18 | clean, near-neutral with crisp specular rim | `#111111` | `#ffffff` | none, pristine studio clarity | neutral Apple-keynote grade, single accent blue #0071E3 |
| **FOUNDFOOTAGE** | 22 | muddy low-contrast VHS crush, unstable tracking bands | `#141414` | `#d8d5c4` | VHS tape noise, compression artifacts, tracking bar glitches | desaturated camcorder auto-WB, sickly green-grey cast |
| **FINCHER** | 24 | deep low-key contrast, sickly green-amber cast | `#1a1a14` | `#b8892b` | fine, controlled digital grain with grime texture | green-amber precision grade, crushed low-key blacks |
| **DREAMCORE** | 26 | low-mid, sickly flat fluorescent flatness | `#2e2a20` | `#f4efdd` | soft VHS haze, fluorescent flicker banding | sickly yellow-green fluorescent grade, no warm push |
| **SPORTS** | 28 | very high, bleach-bypass-like desaturated crush | `#141414` | `#f1faee` | gritty high-ISO grain, chalk-dust particulate | bleach-bypass desaturated grade, single red accent #E63946 |
| **WHITEBOARD** | 30 | stark, pure white base with sparse ink-black + 1-2 accent hits | `#111111` | `#ffffff` | none, flat paper white | no-LUT flat white, restrained accent color pops only |
| **EDITORIAL** | 30 | crisp studio contrast, controlled specular highlight | `#111111` | `#f5f0eb` | clean, near grainless strobe-lit skin | neutral high-fashion strobe grade, minimal color cast |
| **KUBRICK** | 32 | cold clinical high-contrast, hard practical falloff | `#1b1b1b` | `#e8e1d0` | clean, minimal fluorescent-lit texture | cold fluorescent-tungsten mix, red accent isolation |
| **BURTON** | 34 | cold moody contrast, pale-skin highlight vs deep violet shadow | `#1b1b2f` | `#e8e8e8` | fine painted-set texture, low fog diffusion | cold moonlit violet-grey grade, whimsical desaturation |
| **MIGNOLA** | 35 | crushed blacks, hard graphic-novel S-curve, near-zero midtone gray | `#140d05` | `#f2c98a` | coarse ink-wash grain with halftone dot structure, visible paper tooth | Eastman Double-X 5222 pushed 1 stop, crimson spot-color isolation |
| **VILLENEUVE** | 36 | soft haze-flattened contrast with hard silhouette edges | `#1c1c24` | `#e07b39` | large-format fine grain, atmospheric haze diffusion | monochrome-orange haze grade, minimal secondary color |
| **XEROX** | 38 | low-mid, muted wash with warm interior bias | `#2b2417` | `#efe4c8` | xerox line-scratch texture + paper flecks, no photographic grain | vintage cel-paint desaturation, sepia-leaning wash |
| **LIQUIDGLASS** | 38 | low-mid, soft glassy falloff with sharp specular pops | `#0f172a` | `#f5f7ff` | none, clean refractive bloom only | no-LUT pastel-glass gradient, cool specular bias |
| **MAPPA** | 38 | gritty crushed-shadow high contrast | `#0e0e0e` | `#e4d9c4` | coarse ink-line grain, dust particulate in beams | desaturated seinen grade, single blood-red accent #7A1E1E |
| **DOCREAL** | 40 | natural, unforced mid-contrast | `#2f2e28` | `#fff1de` | Vision3 500T grain, moderate luminance noise | Kodak Vision3 500T, minimal secondary grading |
| **SWISS** | 40 | absolute flat contrast, pure white/black/red only | `#111111` | `#ffffff` | none | no-LUT flat print colors, single red accent |
| **MOEBIUS** | 42 | gentle, airbrush-flat with almost no crush | `#caa984` | `#f2e9d8` | fine hatching texture standing in for grain, sand grain overlay | Ektachrome-like pastel desaturation, turquoise/sand duo-tone lean |
| **STORYBOOK** | 42 | very low, pastel-soft with gentle bloom | `#a8747d` | `#faf1e4` | watercolor paper texture, wet-bleed bloom | no-LUT pastel wash, warm paper base |
| **ANALOGDREAM** | 44 | gentle, slightly lifted shadow with soft highlight rolloff (underexposed by design) | `#3a2e24` | `#e8dcc4` | fine organic 35mm-style grain, matched to sensor noise not digital pattern noise | Kodak Portra 400 at -0.5EV push, warm halation |
| **LAIKA** | 45 | moody mid-contrast, lantern-carved shadow pockets | `#211f30` | `#e8c07d` | tactile clay-texture micro-grain, practical fog haze | warm tungsten practicals, teal shadow lean |
| **NEWHOLLYWOOD70S** | 45 | muted mid-contrast, milky lifted blacks | `#2e2419` | `#d9c7a0` | coarse 35mm grain, vintage halation bloom | Kodak Vision3 250D pushed, amber/olive duo-tone |
| **CLAYMORPHISM** | 46 | very soft, matte with almost no specular pop | `#c98a7a` | `#fef6f2` | none, matte silicone micro-texture only | no-LUT single-hue pastel family, soft inner-shadow gradient |
| **GHIBLI** | 48 | low, watercolor-soft with gentle rolloff | `#3f5c48` | `#fbf3df` | soft watercolor paper grain, bloom at wet edges | Portra 400 Editorial, warm pastel push |
| **BLUEPRINT** | 48 | single-hue flat contrast, white line on blue field | `#0a2a66` | `#ffffff` | faint blueprint grid texture | no-LUT engineering-blue monotone |
| **LEONE** | 48 | harsh high-noon contrast, hard-edged sun shadow | `#2b1b10` | `#f2ddb0` | dusty anamorphic grain, heat-shimmer haze | sepia-amber sun-bleached grade, dust diffusion |
| **LOFI** | 50 | low-mid, soft lamp-pool falloff into night blue | `#1d1a2f` | `#f7c98a` | soft 16mm-like grain, window-rain bokeh texture | teal/amber duo-tone, lamp-warm key |
| **PLANETEARTH** | 50 | natural high-latitude contrast, golden rim-light pop | `#1f2a24` | `#f0d9a8` | fine telephoto compression haze, minimal grain | BBC-natural warm-golden grade, minimal secondary |
| **PAPERCUT** | 52 | soft layered contrast, drop-shadow depth cues | `#264653` | `#f1e9da` | visible paper-fiber texture | no-LUT muted craft palette, warm paper base |
| **CHEFSTABLE** | 54 | high, deep chocolate shadows against warm glaze highlight | `#1c120b` | `#f4c98a` | fine cinema-like micro-grain, steam haze diffusion | CineStill-like warm tungsten window grade |
| **UKIYOE** | 55 | flat-print contrast, bold keyline separation | `#1e3a5f` | `#f2e8cf` | woodblock paper-fiber grain, bokashi gradient banding | no-LUT indigo/vermilion duo-tone, aged paper base |
| **ARTDECO** | 56 | very high, gold-on-black poster contrast | `#0b0b0f` | `#f5e6c8` | none, polished metallic sheen texture | no-LUT gold/black duo-tone, warm metallic push |
| **WES** | 58 | low, flat-matte with almost no falloff | `#3d2e1c` | `#fdeccb` | minimal, clean matte-paint texture | Kodak Portra 400 Editorial, mustard/teal duo-tone bias |
| **GHIBLIPUNK** | 58 | low-mid pastoral base with one high-contrast neon hot-spot | `#3f5c48` | `#fbf3df` | watercolor paper grain across the frame + tight neon-fringe bloom only on the tech element | Portra 400 pastoral base blended with a CineStill 800T halation patch confined to the tech element |
| **CLAYMATION** | 60 | warm mid-contrast, soft set-lit shadows | `#3b2d1e` | `#f7e3bc` | tactile clay-surface micro-texture | warm tungsten practicals, saturated storybook palette |
| **SUPER8** | 62 | warm crushed-highlight contrast, blowout-prone | `#3d2416` | `#fbe4b0` | heavy Super 8 gauge grain, gate weave jitter, light-leak flares | Kodachrome 64 (Super 8 look), warm amber push |
| **WEBTOON** | 64 | soft-cel low contrast, pastel highlight, gentle shadow layer | `#2b2b3d` | `#fff3e2` | none, clean digital flats with screen-tone dot accents | no-LUT pastel-saturated flat palette |
| **BIOLUMINESCENT** | 64 | extreme, near-black void against saturated glow | `#04121c` | `#b6ffdd` | clean macro detail with soft glow bloom, no photographic grain | deep-teal void grade, single bioluminescent green-cyan accent |
| **Y2K** | 65 | cool-bright, glossy specular highlights against silver-blue shadow | `#0b132b` | `#e8f1ff` | none, clean chrome specular sheen | cool cyan/silver duo-tone, no-LUT chrome specular |
| **PIXAR** | 66 | medium-soft, GI-bounced with warm shadow fill | `#3a2a4a` | `#ffd8b0` | clean, near grainless with subtle raytraced dither | ACES tonemap, Pixar-house warm-key/cool-fill split |
| **PIXELART** | 68 | palette-limited hard-edge contrast, no anti-aliasing | `#1a1c2c` | `#ffcd75` | pixel dithering pattern, optional CRT scanline overlay | no-LUT indexed palette, optional CRT phosphor bloom |
| **ARCANE** | 70 | deep painterly contrast, soot-black shadows vs hextech glow | `#150d1e` | `#3be0cf` | visible brush-stroke texture as grain substitute | teal/magenta hextech split-tone, smoky desaturated midtones |
| **WONGKARWAI** | 70 | rich saturated contrast, neon-bloom highlight glow | `#1b1b1b` | `#f4a261` | 35mm grain with step-printed motion smear | saturated red/green neon duo-tone, warm tungsten bias |
| **KURZGESAGT** | 72 | high vector-flat contrast, deep navy base with saturated glow accents | `#0b1026` | `#fffbe0` | none, clean vector gradients only | flat-vector no-LUT (pure gradient fills, edge-glow bloom) |
| **VAPORWAVE** | 74 | soft-bright pastel contrast, dreamy VHS bloom | `#4a1a5c` | `#fffb96` | soft VHS haze, slow chroma glitch bands | pink/cyan gradient duo-tone, VHS softness overlay |
| **ISEKAI** | 74 | high epic contrast, glowing particle highlight against deep indigo shadow | `#0b0c2a` | `#ffd60a` | clean, particle-bloom texture instead of grain | epic indigo/magenta sky gradient, gold particle accent |
| **SYNTHWAVE** | 75 | crushed VHS blacks, hot chroma-bled highlights | `#2c003e` | `#ffb199` | VHS tape noise + scanline raster, chroma bleed halo | Kodachrome 64 pushed + chroma-bleed VHS emulation |
| **AKIRA** | 78 | heavy, neon-hot highlights against crushed slate shadow | `#1a1c24` | `#ff6fa0` | coarse 35mm cel grain with chromatic fringe bloom | CineStill 800T Nocturne (strong red/magenta halation) |
| **SHINKAI** | 80 | high dynamic bloom-driven contrast, glowing highlight rolloff | `#1b2a4a` | `#fff0d6` | clean, bloom/flare texture stands in for grain | golden-hour twilight gradient LUT, sky-fill push |
| **UFOTABLE** | 80 | very high, CG-light overlay punches through crushed cel shadow | `#0b0b14` | `#ffd23f` | clean digital cel + soft particle-glow bloom, no photographic grain | modern anime compositing grade: neutral cel base + saturated elemental light overlay |
| **KPOP** | 82 | high-key, glossy with bright rolled-off highlights | `#2a1440` | `#f8f9ff` | clean digital, holo-foil chromatic sparkle instead of grain | studio high-key glam grade, RGB-matrix teal/magenta split |
| **SPIDERVERSE** | 85 | punchy graphic contrast with halftone shadow structure | `#1b1b3a` | `#fff2a8` | Ben-Day dot halftone + offset misregistration fringe | comic-print duo-tone split (magenta/cyan misregistration) |
| **NEUBRUTALIST** | 88 | maximal flat-color contrast, zero blur shadow edges | `#111111` | `#ffffff` | none, pure flat fill | no-LUT saturated flat-fill palette |
| **GLITCHCORE** | 90 | harsh digital contrast, neon-on-black clash | `#0d0d0d` | `#00fff0` | compression-block and pixel-sort artifacts as the primary texture | no-LUT RGB-channel-split, neon-on-black clash palette |
| **TRIGGER** | 92 | maximal graphic punch, flat-color blocks with no gradient | `#14002e` | `#ffe600` | digital glitch scanline bursts instead of grain | neon flat-pop duo-tone (magenta/cyan), zero midtone falloff |

### Escala de saturação
| Faixa | Significado |
|---|---|
| 0–10 | monocromático / spot-color |
| 11–30 | dessaturado (doc frio, thriller, bleach bypass) |
| 31–50 | natural a suave (pastel, film natural) |
| 51–70 | rico (comercial, Kodak-warm, animação premium) |
| 71–90 | vívido (neon, pop, anime de ação) |
| 91–100 | máximo gráfico (flat-pop, glitch) |

**Vocabulário de contraste:** crushed blacks; hard S-curve; soft S-curve; lifted blacks (milky); flat-matte; high-key rolloff; binary clip (pure B/W); specular pop over low base.

**Regra de tints:** Sombra fria (azul/teal) + realce quente = separação clássica; sombra quente + realce frio = nostalgia/analógico; sombra e realce do mesmo matiz = monótono (Blueprint, Noir).

**Glossário de grão:**
- `silver-halide` — grão de prata (Double-X, Tri-X) — orgânico, luminance-dependent
- `Monte Carlo` — grão estocástico Darkroom (Skill 25)
- `halftone` — pontos Ben-Day/impressão — estilo gráfico
- `paper tooth` — textura de papel/aquarela
- `VHS/compression` — ruído de fita e blocos de compressão
- `none` — vetor/UI limpos

**No prompt:** No prompt, escreva a grade como parâmetros: 'saturation ~N/100, shadow tint #HEX, highlight tint #HEX, grain: <descritor>'. Nunca 'cinematic color grade'.

## Receitas de mistura que funcionam (v3.3 · Skill 57)
v3.3 — receitas de mistura com histórico de bom resultado em IA (Skill 57). Regra: 1 base (60–70%) + 1 acento (30–40%); o acento fica ISOLADO num elemento/superfície.

| Receita | Base | Acento | Pesos | Por que funciona |
|---|---|---|---|---|
| **GHIBLIPUNK** | GHIBLI | AKIRA | 70/30 | natureza gouache + um elemento neon isolado |
| **GLASSNOIR** | NOIR | LIQUIDGLASS | 70/30 | mono clássico + uma superfície de vidro refrativo |
| **NEONOIR** | NOIR | WONGKARWAI | 70/30 | P&B com neon saturado só nas fontes de luz |
| **INKVERSE** | SPIDERVERSE | MIGNOLA | 65/35 | 3D hachurado + blocos de preto sólido |
| **SATURDAYCEL** | XEROX | SYNTHWAVE | 70/30 | linha xerox trêmula + grid/chrome retrô |
| **WESNOIR** | WES | NOIR | 70/30 | simetria planimétrica com luz de slats |
| **ANALOGPIXEL** | ANALOGDREAM | PIXELART | 75/25 | foto quente com HUD/sprites pixelados isolados |
| **CELVERSE** | UFOTABLE | SPIDERVERSE | 70/30 | cel moderno + halftone/misregistration nos impactos |
| **CHROMEKEYNOTE** | KEYNOTE | LIQUIDMETAL | 70/30 | produto minimalista com uma morfose de metal líquido |
| **VHSDREAM** | DREAMCORE | FOUNDFOOTAGE | 70/30 | espaço liminar com ruído de fita e timecode |
| **BIOGHIBLI** | GHIBLI | BIOLUMINESCENT | 70/30 | floresta pintada que brilha à noite |
| **WEBTOONCLAY** | WEBTOON | CLAYMORPHISM | 70/30 | painel vertical com objetos puffy tácteis |

**Conflitos conhecidos:** LAIKA+PIXAR (matéria vs. render); XEROX+KEYNOTE (linha trêmula vs. precisão); PIXELART+PLANETEARTH (grade vs. teleobjetiva); Qualquer mistura de 3+ estilos.

**Como misturar:** skill_57: (1) escolha base+acento; (2) herde FOV/WB/fps da base; (3) empreste luz/textura do acento em UM elemento; (4) interpole paleta em HEX (máx. 6 cores); (5) fundir negative_locks (união); (6) gere prompt_core único; (7) aprove 3 stills (G2) antes de animar.

## Pipelines
### `p_social_reel` — Reel/Short/TikTok com Hook
*Proporção 9:16 · ~20s · gates G1, G2, G3, G4, G8* — Hook decide: gere 3 e teste.

| # | Skill | Papel | Saída |
|---|---|---|---|
| 1 | 17 Social Hook | 3 variantes de hook (0–1.8s) | `hooks.md` |
| 2 | 21 Roteirização em Master Scenes | Master Scene 145 wpm com b-roll | `script.md` |
| 3 | 46 Direção de Imagem (T2I / I2I / Multi-Referência) | Hero Frame e capa | `hero.png` |
| 4 | 53 Roteador de Motores e Adaptador de Prompt | Motor por plano | `engine_plan.json` |
| 5 | STYLE (Visual DNA) | Look Visual DNA travado | `style_lock` |
| 6 | 26 Áudio Multimodal e Foley Síncrono (SCELA) | Speech/SFX SCELA | `audio_block` |
| 7 | 18 Thumbnail para Redes Sociais | Thumb/capa 4 palavras | `thumb.png` |
| 8 | 29 Calendário Editorial e Distribuição Multi-Plataforma | Slot no calendário + 3 hashtags | `post.json` |
| 9 | 56 Compliance, IP e Proveniência | Compliance | `checklist` |

### `p_product_ad` — Anúncio de Produto de Alta Conversão
*Proporção 9:16 · ~20s · gates G2, G3, G4, G8* — Produza 5–10 variações modulares trocando só o hook.

| # | Skill | Papel | Saída |
|---|---|---|---|
| 1 | 13 Product Ad | Estrutura hook→benefício→CTA | `ad_script.md` |
| 2 | 17 Social Hook | Hook A/B/C | `hooks.md` |
| 3 | 46 Direção de Imagem (T2I / I2I / Multi-Referência) | Stills de produto com HEX de marca | `stills` |
| 4 | 12 Product 360 | Rotação/macro | `360.mp4` |
| 5 | STYLE (Visual DNA) | Estilo (ex.: KEYNOTE) | `style_lock` |
| 6 | 26 Áudio Multimodal e Foley Síncrono (SCELA) | Áudio e VO | `audio_block` |
| 7 | 30 Análise Pós-Publicação e Iteração de Dados | Leitura de CTR×Retenção | `report.md` |
| 8 | 56 Compliance, IP e Proveniência | Compliance | `checklist` |

### `p_brand_film` — Filme Institucional (Brand Story)
*Proporção 16:9 · ~75s · gates G1, G2, G3, G4, G5, G6, G7, G8* — Entregue também cutdowns de 15s e 30s.

| # | Skill | Papel | Saída |
|---|---|---|---|
| 1 | 47 Arquiteto de História (Premissa, Estrutura e Bíblia de Mundo) | Premissa e estrutura | `story_bible` |
| 2 | 52 Bíblia de Pré-Produção (Moodboard, Style Bible, Cronograma e Orçamento) | Style bible + orçamento | `production_bible.md` |
| 3 | 21 Roteirização em Master Scenes | Master Scenes | `script.md` |
| 4 | 48 Storyboard, Shot List e Animatic (Pré-Vis) | Storyboard | `storyboard.json` |
| 5 | 22 Consistent Characters (Identidade Visual) | Personagem de marca | `character.json` |
| 6 | 53 Roteador de Motores e Adaptador de Prompt | Motor por plano | `engine_plan.json` |
| 7 | STYLE (Visual DNA) | Look travado | `style_lock` |
| 8 | 24 Direção de Atuação Sintética (Acting Director OS) | ACTING PROFILE | `acting` |
| 9 | 26 Áudio Multimodal e Foley Síncrono (SCELA) | SCELA + trilha | `audio` |
| 10 | 25 Pós-Produção e Emulação Química (Darkroom + LUT) | Darkroom + LUT | `graded` |
| 11 | 55 Continuidade e Auditoria de Qualidade (Script Supervisor Sintético) | QA | `qa_report.md` |
| 12 | 56 Compliance, IP e Proveniência | Compliance | `checklist` |

### `p_launch_15s` — Launch Video 15s (Motion Design)
*Proporção 16:9 · ~15s · gates G1, G3, G4, G8* — Copy list é contrato; tipografia crítica renderiza em código.

| # | Skill | Papel | Saída |
|---|---|---|---|
| 1 | 27 Motion Design e Launch Video (MiniMax H3 / Higgsfield) | Cinco Leis + beat sheet + copy list | `launch_prompt` |
| 2 | 10 Motion Design | Estilo de motion | `motion_style` |
| 3 | 51 Motion de Produto Digital (UX/UI para Vídeo) | UI/tokens se produto digital | `ui_spec` |
| 4 | STYLE (Visual DNA) | Estilo nomeado | `style_lock` |
| 5 | 53 Roteador de Motores e Adaptador de Prompt | Motor/segmentos | `engine_plan.json` |
| 6 | 26 Áudio Multimodal e Foley Síncrono (SCELA) | Silêncio obrigatório | `audio_block` |
| 7 | 56 Compliance, IP e Proveniência | Compliance | `checklist` |

### `p_short_film` — Curta-Metragem Sintético
*Proporção 2.39:1 · ~300s · gates G1, G2, G3, G4, G5, G6, G7, G8* — Aprove todos os Hero Frames antes de gerar qualquer vídeo.

| # | Skill | Papel | Saída |
|---|---|---|---|
| 1 | 47 Arquiteto de História (Premissa, Estrutura e Bíblia de Mundo) | Story bible | `story_bible` |
| 2 | 21 Roteirização em Master Scenes | Master Scenes | `script.md` |
| 3 | 52 Bíblia de Pré-Produção (Moodboard, Style Bible, Cronograma e Orçamento) | Style bible/orçamento/riscos | `production_bible.md` |
| 4 | 22 Consistent Characters (Identidade Visual) | Personagens .json | `characters` |
| 5 | 23 Character Sheet (Do Rascunho à Apresentação) | Character sheets | `sheets` |
| 6 | 48 Storyboard, Shot List e Animatic (Pré-Vis) | Storyboard + animatic | `storyboard.json` |
| 7 | 53 Roteador de Motores e Adaptador de Prompt | Motor por plano | `engine_plan.json` |
| 8 | 19 Direção de Cinema Digital (Higgsfield / ComfyUI) | Hero Frame First + Feasibility Veto | `hero_frames` |
| 9 | 20 Técnicas de Câmera Física e Digital | Câmera motivada | `camera` |
| 10 | STYLE (Visual DNA) | Look travado | `style_lock` |
| 11 | 24 Direção de Atuação Sintética (Acting Director OS) | ACTING PROFILE por take | `acting` |
| 12 | 26 Áudio Multimodal e Foley Síncrono (SCELA) | SCELA | `audio` |
| 13 | 49 Sound Design Bible, Trilha e Direção de Voz | Sound bible | `sound_bible.md` |
| 14 | 25 Pós-Produção e Emulação Química (Darkroom + LUT) | Darkroom/LUT | `graded` |
| 15 | 55 Continuidade e Auditoria de Qualidade (Script Supervisor Sintético) | QA/continuidade | `qa_report.md` |
| 16 | 56 Compliance, IP e Proveniência | Compliance | `checklist` |

### `p_faceless_doc` — Documentário Faceless Multishot
*Proporção 16:9 · ~480s · gates G1, G3, G4, G7, G8* — Diagramas [scheme] são renderizados em código, nunca gerados.

| # | Skill | Papel | Saída |
|---|---|---|---|
| 1 | 47 Arquiteto de História (Premissa, Estrutura e Bíblia de Mundo) | Tese e estrutura | `story_bible` |
| 2 | 21 Roteirização em Master Scenes | Roteiro 145 wpm + hook | `script.md` |
| 3 | 28 Prompt Engineering Seedance Faceless (Documentário) | Prompts de 10s (12 blocos) | `blocks` |
| 4 | 20 Técnicas de Câmera Física e Digital | FOV/câmera | `camera` |
| 5 | STYLE (Visual DNA) | Ex.: TRUECRIME/DOCREAL | `style_lock` |
| 6 | 26 Áudio Multimodal e Foley Síncrono (SCELA) | Linha AUDIO verbatim | `audio` |
| 7 | 25 Pós-Produção e Emulação Química (Darkroom + LUT) | Grão/LUT | `graded` |
| 8 | 18 Thumbnail para Redes Sociais | Thumb + título em par | `thumb` |
| 9 | 29 Calendário Editorial e Distribuição Multi-Plataforma | Calendário | `post.json` |
| 10 | 30 Análise Pós-Publicação e Iteração de Dados | Retenção por minuto | `report.md` |

### `p_music_video` — Videoclipe / Visualizer
*Proporção 16:9 · ~90s · gates G1, G2, G3, G4, G6, G8* — Cortes sincronizados ao beat; loop de 8–15s para visualizer.

| # | Skill | Papel | Saída |
|---|---|---|---|
| 1 | 49 Sound Design Bible, Trilha e Direção de Voz | Music brief (Suno/skill externo) | `music_brief.json` |
| 2 | 11 Music Video | Performance/Narrativa/Ambient | `concept.md` |
| 3 | 48 Storyboard, Shot List e Animatic (Pré-Vis) | Storyboard no beat | `storyboard.json` |
| 4 | 22 Consistent Characters (Identidade Visual) | Artista consistente | `character.json` |
| 5 | 53 Roteador de Motores e Adaptador de Prompt | Motor por plano | `engine_plan.json` |
| 6 | STYLE (Visual DNA) | Ex.: KPOP/SYNTHWAVE | `style_lock` |
| 7 | 26 Áudio Multimodal e Foley Síncrono (SCELA) | Sync de áudio | `audio` |
| 8 | 25 Pós-Produção e Emulação Química (Darkroom + LUT) | Grade | `graded` |
| 9 | 29 Calendário Editorial e Distribuição Multi-Plataforma | Teaser vertical + 3 hashtags | `post.json` |

### `p_food_ad` — Gastronomia (Reel/Ad de Delivery)
*Proporção 9:16 · ~15s · gates G2, G3, G4, G8* — 120fps em líquidos; vapor sempre em contraluz.

| # | Skill | Papel | Saída |
|---|---|---|---|
| 1 | 09 Food & Beverage | Money shot e macro | `shots.md` |
| 2 | 17 Social Hook | Hook ASMR/awe | `hook.md` |
| 3 | 46 Direção de Imagem (T2I / I2I / Multi-Referência) | Still do prato | `hero.png` |
| 4 | STYLE (Visual DNA) | Ex.: CHEFSTABLE | `style_lock` |
| 5 | 26 Áudio Multimodal e Foley Síncrono (SCELA) | Foley diegético | `audio` |
| 6 | 18 Thumbnail para Redes Sociais | Capa | `thumb` |
| 7 | 29 Calendário Editorial e Distribuição Multi-Plataforma | Calendário | `post.json` |

### `p_fashion_lookbook` — Lookbook de Moda
*Proporção 9:16 · ~40s · gates G1, G2, G5, G7, G8* — Separe identidade (PuLID/Soul ID) de figurino (IP-Adapter 0.3–0.5).

| # | Skill | Papel | Saída |
|---|---|---|---|
| 1 | 22 Consistent Characters (Identidade Visual) | Modelo consistente | `character.json` |
| 2 | 23 Character Sheet (Do Rascunho à Apresentação) | Sheet + figurino | `sheet` |
| 3 | 07 Fashion Look | Caimento/passarela | `shots.md` |
| 4 | 46 Direção de Imagem (T2I / I2I / Multi-Referência) | Stills editoriais | `stills` |
| 5 | STYLE (Visual DNA) | Ex.: EDITORIAL | `style_lock` |
| 6 | 26 Áudio Multimodal e Foley Síncrono (SCELA) | Foley de tecido | `audio` |
| 7 | 25 Pós-Produção e Emulação Química (Darkroom + LUT) | Grade Portra | `graded` |
| 8 | 29 Calendário Editorial e Distribuição Multi-Plataforma | Calendário | `post.json` |
| 9 | 56 Compliance, IP e Proveniência | Compliance/likeness | `checklist` |

### `p_real_estate_tour` — Tour Imobiliário
*Proporção 16:9 · ~60s · gates G2, G3, G4, G7* — Verticais corrigidas; sem janela estourada.

| # | Skill | Papel | Saída |
|---|---|---|---|
| 1 | 14 Real Estate | Roteiro espacial | `tour_plan.md` |
| 2 | 20 Técnicas de Câmera Física e Digital | Drone→fachada→Steadicam | `camera` |
| 3 | 46 Direção de Imagem (T2I / I2I / Multi-Referência) | Stills de hora azul | `stills` |
| 4 | STYLE (Visual DNA) | Ex.: KEYNOTE | `style_lock` |
| 5 | 26 Áudio Multimodal e Foley Síncrono (SCELA) | Ambiência | `audio` |
| 6 | 25 Pós-Produção e Emulação Química (Darkroom + LUT) | Grade | `graded` |
| 7 | 29 Calendário Editorial e Distribuição Multi-Plataforma | Cortes 9:16 | `post.json` |

### `p_ux_demo` — Demo de Produto Digital (UX/UI)
*Proporção 16:9 · ~25s · gates G1, G4, G8* — UI/tipografia em código; vídeo só para ambiente.

| # | Skill | Papel | Saída |
|---|---|---|---|
| 1 | 51 Motion de Produto Digital (UX/UI para Vídeo) | Fluxo, estados e tokens | `ui_motion_spec.json` |
| 2 | 10 Motion Design | Estilo de motion | `motion_style` |
| 3 | 27 Motion Design e Launch Video (MiniMax H3 / Higgsfield) | Beat sheet e copy list | `launch_prompt` |
| 4 | 46 Direção de Imagem (T2I / I2I / Multi-Referência) | Mockup de dispositivo/hero | `hero` |
| 5 | STYLE (Visual DNA) | Ex.: LIQUIDGLASS | `style_lock` |
| 6 | 29 Calendário Editorial e Distribuição Multi-Plataforma | Versão 9:16 | `post.json` |

### `p_edu_explainer` — Explainer / Micro-aula
*Proporção 16:9 · ~120s · gates G1, G4, G6, G8* — Uma pergunta de recuperação no final.

| # | Skill | Papel | Saída |
|---|---|---|---|
| 1 | 50 Estúdio Educacional (Aula, Explainer, EdTech) | Objetivo + plano de aula | `lesson_plan.md` |
| 2 | 21 Roteirização em Master Scenes | Roteiro 145 wpm | `script.md` |
| 3 | 46 Direção de Imagem (T2I / I2I / Multi-Referência) | Metáforas visuais | `frames` |
| 4 | STYLE (Visual DNA) | Ex.: WHITEBOARD/KURZGESAGT | `style_lock` |
| 5 | 26 Áudio Multimodal e Foley Síncrono (SCELA) | VO + legendas | `audio` |
| 6 | 31 Localização e Adaptação Cultural Multi-Idioma | Localização | `l10n` |
| 7 | 29 Calendário Editorial e Distribuição Multi-Plataforma | Distribuição | `post.json` |

### `p_storyboard_previs` — Storyboard e Pré-Vis
*Proporção 16:9 · ~60s · gates G1, G2, G3* — Todo plano tem job (performance, geografia, impacto, suspense, beauty, detalhe).

| # | Skill | Papel | Saída |
|---|---|---|---|
| 1 | 47 Arquiteto de História (Premissa, Estrutura e Bíblia de Mundo) | Premissa | `story_bible` |
| 2 | 21 Roteirização em Master Scenes | Master Scenes | `script.md` |
| 3 | 45 Análise de Imagem e Engenharia Reversa de Prompt | Análise de referências | `image_analysis.json` |
| 4 | 48 Storyboard, Shot List e Animatic (Pré-Vis) | Shot list + animatic | `storyboard.json` |
| 5 | 46 Direção de Imagem (T2I / I2I / Multi-Referência) | Painéis de Hero Frame | `panels` |
| 6 | 55 Continuidade e Auditoria de Qualidade (Script Supervisor Sintético) | Continuidade | `continuity.csv` |

### `p_still_campaign` — Campanha de Imagens / Thumbnails
*Proporção 16:9 · ~0s · gates G1, G2, G4, G8* — Julgue em feed size (5 m de distância).

| # | Skill | Papel | Saída |
|---|---|---|---|
| 1 | 45 Análise de Imagem e Engenharia Reversa de Prompt | Analisar referências | `analysis` |
| 2 | 46 Direção de Imagem (T2I / I2I / Multi-Referência) | Prompt por motor | `image_prompt.json` |
| 3 | STYLE (Visual DNA) | Look travado | `style_lock` |
| 4 | 18 Thumbnail para Redes Sociais | 5 frameworks de CTR | `thumbs` |
| 5 | 30 Análise Pós-Publicação e Iteração de Dados | Teste a/b 48h | `report.md` |

### `p_video_upgrade` — Upgrade de Vídeo Comum → Cinema (V2V)
*Proporção 16:9 · ~30s · gates G2, G3, G5, G7* — Herde performance e câmera do original; refaça só look, lente, luz e grade.

| # | Skill | Papel | Saída |
|---|---|---|---|
| 1 | 45 Análise de Imagem e Engenharia Reversa de Prompt | Analisar frames-chave | `analysis` |
| 2 | 54 Upgrade de Vídeo Comum para Cinema (V2V Restyle) | Plano manter/refazer | `upgrade_plan.md` |
| 3 | 46 Direção de Imagem (T2I / I2I / Multi-Referência) | Hero Frame reestilizado | `hero` |
| 4 | 53 Roteador de Motores e Adaptador de Prompt | Motor V2V | `engine_plan.json` |
| 5 | STYLE (Visual DNA) | Look destino | `style_lock` |
| 6 | 25 Pós-Produção e Emulação Química (Darkroom + LUT) | Darkroom | `graded` |
| 7 | 26 Áudio Multimodal e Foley Síncrono (SCELA) | Áudio | `audio` |
| 8 | 55 Continuidade e Auditoria de Qualidade (Script Supervisor Sintético) | QA | `qa_report.md` |

### `p_localization_sprint` — Sprint de Localização Multi-Idioma
*Proporção 9:16 · ~30s · gates G4, G6, G8* — Escala se retenção inicial ≥80% do original; <60% regerar hook.

| # | Skill | Papel | Saída |
|---|---|---|---|
| 1 | 31 Localização e Adaptação Cultural Multi-Idioma | Hook/título/CTA reescritos | `l10n.md` |
| 2 | 26 Áudio Multimodal e Foley Síncrono (SCELA) | VO nativa + lip-sync recalculado | `audio` |
| 3 | 18 Thumbnail para Redes Sociais | Thumb por cultura/RTL | `thumbs` |
| 4 | 29 Calendário Editorial e Distribuição Multi-Plataforma | Redes regionais | `post.json` |
| 5 | 30 Análise Pós-Publicação e Iteração de Dados | 48h vs baseline | `report.md` |

### `p_analytics_loop` — Loop de Análise Pós-Publicação
*Proporção Universal · ~0s · gates G4* — Hierarquia: thumb → título → hook → 1º open loop → corpo → closer.

| # | Skill | Papel | Saída |
|---|---|---|---|
| 1 | 30 Análise Pós-Publicação e Iteração de Dados | Diagnóstico por curva + matriz CTR×Retenção | `report.md` |
| 2 | 18 Thumbnail para Redes Sociais | Nova capa/título | `thumb` |
| 3 | 17 Social Hook | Novo hook | `hook` |
| 4 | 21 Roteirização em Master Scenes | Reescrita cirúrgica | `script` |
| 5 | 28 Prompt Engineering Seedance Faceless (Documentário) | Regerar só o bloco afetado | `block` |
| 6 | 29 Calendário Editorial e Distribuição Multi-Plataforma | Próximo ciclo | `calendar.json` |

### `p_signature_style` — Assinatura Visual (DNA Blend + Color Grade) — v3.3
*Proporção 16:9 · ~0s · gates G1, G2, G4, G8* — Crie o estilo-assinatura do cliente/projeto: 1 base + 1 acento, com grade travada e reutilizável.

| # | Skill | Papel | Saída |
|---|---|---|---|
| 1 | 45 Análise de Imagem e Engenharia Reversa de Prompt | Analisar referências do cliente | `analysis` |
| 2 | 57 DNA Blending Lab (Mistura de Estilos) | Mesclar 2 DNAs (70/30) + resolver conflitos | `blend_style.json` |
| 3 | 58 Color Grading DNA Engine | Cartão de color grading do híbrido | `color_grading_card.json` |
| 4 | 46 Direção de Imagem (T2I / I2I / Multi-Referência) | Hero Frames de teste do híbrido | `hero_frames` |
| 5 | 52 Bíblia de Pré-Produção (Moodboard, Style Bible, Cronograma e Orçamento) | Registrar no style bible do projeto | `production_bible.md` |
| 6 | 55 Continuidade e Auditoria de Qualidade (Script Supervisor Sintético) | QA de consistência entre 3 stills | `qa_report.md` |

## Modo Marca (G9) — marcas e produtos reais
Non-IP (G8) é o padrão. O G9 é o caminho opt-in para quem quer usar marca/produto real (afiliado, patrocinado, cedido ou sem vínculo). Regras completas em `BaseSkill.md` §7; dados em `tables.brand_mode` e templates no JSON.

| Pergunta | Por quê |
|---|---|
| 1. Marca e produto exatos? | evita marca inventada ou genérica demais |
| 2. Vínculo: afiliado, patrocinado, cedido ou sem vínculo? | define o texto de divulgação |
| 3. Link (se afiliado) e rótulo na descrição? | divulgação obrigatória |
| 4. Contexto da cena compatível com a marca? | marca fora de violência, vilania e humor depreciativo |
| 5. Orgânico ou anúncio pago? | pago exige autorização escrita da marca |

**Continua proibido mesmo com G9:** rosto/voz de pessoa real sem consentimento, trilha reconhecível, personagens/trade dress de terceiros, alegações inventadas. Rótulo de divulgação (`#publi`, `#afiliado`, `#parceria`, `#gifted`) **não conta** entre as 3 hashtags. Não é aconselhamento jurídico; confirme as regras do seu país e da plataforma.

## Metodologia por fase
### Pré-produção
1. **Story bible** (Skill 47): logline → premissa → tema → querer/necessidade/falha → regras de mundo → estrutura por duração.
2. **Style bible** (Skill 52): alias + acento (Skill 57), paleta hex, óptica, **cartão de color grading (Skill 58)**, referências analisadas (Skill 45), riscos (Veto), especificação de entrega.
3. **Orçamento por lote:** hero frames (imagem, barato) → aprovação → vídeo (por segundo do motor) → áudio → pós. Meça iteração em *segundos gerados*, não em prompts.
4. **Personagens:** `character.json` (Skill 22) + sheet (Skill 23) antes do primeiro frame.

### Produção
- **Por plano:** job → tamanho → FOV° → movimento (1 dispositivo) → luz (One Light) → ação por segundo → áudio → motor.
- **Continuidade:** figurino, props, estado de luz, geografia, eyelines; trave dos dois lados do corte.
- **Multidão / escala:** Hell Grind em 3 camadas + size-ref frame.
- **Anime / 2D:** Hero Frame no estilo → i2v; 12fps por padrão e 24fps só nos clímax (UFOTABLE/MAPPA); nunca peça "3D".

### Pós
Linear sRGB → EV → curvas H&D → halation → acutance → grão Monte Carlo → ACES → rebate → LUT `.cube`. **Nenhum upscale sem grão.** Estilos vetoriais/UI (KURZGESAGT, SWISS, CLAYMORPHISM) usam `lut_match` "no-LUT": não force grão fotográfico.

### Distribuição e análise
Recomponha por rede; 3 hashtags; teste thumb+título como par; leia retenção por ponto de queda (`diagnoseDrop`) e devolva ao pipeline.

## Templates prontos
**Master Scene (Skill 21)**
```
MS-01 | 00:00–00:12 | HOOK: <1 frase, ≤2s falado> | CONTEXTO: <1 frase> | TENSÃO: <obstáculo> | PAYOFF: <resolução/loop aberto>
B-ROLL: <planos com job + FOV°>   VO (145 wpm): "<texto>"   A/B HOOK: (a) awe (b) curiosidade (c) dado
```
**Linha de storyboard (Skill 48)** — campos: `shot_id, scene, timecode, duration_s, size, angle, fov_degrees, camera_move, job, subject_action, light, audio_cue, transition, engine_id, hero_frame_prompt, continuity_notes`

**Blend style (Skill 57)** — campos: `id, name, base, accent, optics, palette_hex, prompt_core, negative_locks, color_grading, conflicts_flagged, approved_stills`

**Cartão de grade (Skill 58)** — campos: `style_id, saturation, contrast, shadow_tint, highlight_tint, grain, dynamic_range, lut_match, darkroom_chain_overrides`

**Análise de imagem (Skill 45)** — campos: `subject, composition, light, palette_hex, color_grading_estimate, materials_textures, style_dna_matches, era_or_film_stock_guess, slop_audit, recreate_prompts, negative_locks, uncertainty_flags`

**Prompt de imagem FLUX.2 (JSON)**
```json
{
 "scene": "",
 "subjects": [
  {
   "description": "",
   "position": "",
   "action": ""
  }
 ],
 "style": "",
 "color_palette": [
  "#RRGGBB"
 ],
 "lighting": "",
 "mood": "",
 "background": "",
 "composition": "",
 "camera": {
  "angle": "",
  "fov_degrees": 0,
  "depth_of_field": ""
 }
}
```
**Launch 15s (Skill 27)** — blocos: Format line · Silence line · Background/world · PALETTE (locked, hex) · THE HERO / THE MASS / THE SURFACE · TYPE TREATMENT · MOTION LANGUAGE · BEAT SHEET (1.5–2s) · COPY LIST (contrato) · CONTENT SAFETY / NON-IP · CONSISTENCY · CAMERA & MOTION · RENDER. Adaptação 9:16: 1080×1920, safe zones 12%/15%, headlines em 2–3 linhas, recomposição.

**Relatório pós-publicação (Skill 30)** — PEÇA · REDE · DATA PUBLICAÇÃO | JANELA · MÉTRICAS-CHAVE · DROP PRINCIPAL · DIAGNÓSTICO · AÇÃO · SKILL ENVOLVIDA · VARIAÇÃO A TESTAR · PRÓXIMA JANELA

**Localização (Skill 31)** — PEÇA ORIGINAL · MERCADO/IDIOMA · ÉPICO CULTURAL · FUNÇÃO EMOCIONAL DO HOOK · HOOK ADAPTADO · TÍTULO ADAPTADO (≤N chars) · THUMB ADAPTADA · VO · RITMO (wpm local) · REFERÊNCIAS AJUSTADAS · PROVA SOCIAL · CTA · REDES · JANELA DE TESTE

**Cliente (Skill 29)** — ver `social_media_clients[]` no JSON (pacote, cadência, redes, 3 hashtags, SLA 48h, métricas).

## Mercados (Skill 31)
| Mercado | Cores favoráveis | Cores de risco | Leitura | Palavras/10s | Nota |
|---|---|---|---|---|---|
| PT-BR | amarelo, verde, laranja | roxo (luto) | LTR | 24–30 | emoji e informalidade funcionam |
| EN-US | vermelho, azul, preto | verde-amarelado | LTR | 20–25 | direto, prova numérica |
| ES-LATAM | quentes saturadas | roxo | LTR | 22–28 | tuteo, contexto familiar |
| DE | azul, cinza, branco | vermelho (alerta) | LTR | 18–22 | precisão, dado real, sem exagero |
| FR | azul, vermelho contido | verde saturado | LTR | 20–26 | elegância, texto curto, sem hype |
| JP | branco, vermelho contido | verde brilhante | LTR | 18–22 | formalidade por nível, contexto visual forte |
| KR | branco, azul, pastel | vermelho | LTR | 20–24 | estética limpa e minuciosa |
| AR | ouro, verde, branco | vermelho intenso ritual | RTL | 20–26 | recompor thumb da direita p/ esquerda |
| HE | azul, branco | verde | RTL | 20–26 | recompor thumb RTL |
| CN | vermelho (auspicioso), dourado | branco em contexto fúnebre | LTR | 20–25 | WeChat, Weibo, Bilibili |
| RU | vermelho, azul, cinza | verde político ambíguo | LTR | 20–26 | tipografia cirílica com fonte adaptada |

## Diagnóstico de retenção (Skill 30)
| Queda | Causa | Ação | Skills |
|---|---|---|---|
| 0–3s | Hook falhou | Reescrever Layer 1 (cold drop); testar 3 variantes | 17,21 |
| 3–30s | Stakes/promessa não conectou | Reforçar Layer 2 (stakes) e encurtar Layer 3 (trailer) | 21 |
| 30–60s | Ritmo | Cortar filler; antecipar o 1º open loop | 21 |
| ~50% | Open loop mal fechado ou beat morto | Mover payoff do bloco anterior; reescrever bloco | 21,28 |
| 70–80% | Payoff do título demorou | Antecipar The Turn/Resolution (~10%) | 21 |
| 90–100% | Closer fraco | Reescrever última linha (gut-punch/pergunta aberta) | 21 |
| re-watch spike | Momento clipável | Usar frame como thumb; cortar Short derivado; testar como hook | 18,17 |

*Gerado do JSON v3.3.0-cinema-os · 2026-09-27 · Criado por Daniel Rodrigues · Direção Geral @ Daniel Rodrigues*

---

# Daniskills 3.3 — Cinematic Intelligence Architecture (additions)

**Credits:** Daniel Rodrigues · Daniel Rodrigues. See `ARCHITECTURE.md`. The sections above are the v3.1 catalog (kept); everything below is new in 3.3.

## New skills (59–75)

| Code | Name | Stage | Requires | Outputs |
|---|---|---|---|---|
| SKILL 59 | Cinematic Grammar Engine (Shot → Sequence → Scene → Act → Film) | pre | 21, 48, 20 | scene_grammar.json, coverage_plan.md |
| SKILL 60 | Cinematography Director (the 'Why' engine) | prod | 20, 59 | cinematography_plan.md, shot_rationale.json |
| SKILL 61 | Acting Director 2.0 (Beats, Subtext, Micro-Action) | prod | 24 | beat_sheet.json, acting_profile.md |
| SKILL 62 | Sound Cinema Engine (Layers + Silence Design) | audio | 26, 49 | sound_cinema_map.json, silence_cue_sheet.md |
| SKILL 63 | AI Artifact Detector (Hands, Physics, Camera, Continuity) | qa | 55 | artifact_report.json |
| SKILL 64 | Cinema Audit, Critique & Polish (Slop Detector) | qa | 55, 63, 56 | cinema_audit_report.md, polish_plan.json |
| SKILL 65 | Project Bible & Cinematic Memory (PROJECT.md vs STYLE_BIBLE.md) | pre | 47, 52 | PROJECT_BIBLE/, decision_log.md |
| SKILL 66 | Shot DNA & Prompt Compiler 2.0 (compileShot) | foundation | 15, 53 | shot_dna.json, compiled_prompts.json |
| SKILL 67 | Model Intelligence & Engine Benchmark | foundation | 53 | model_decision.md, benchmark_results.json |
| SKILL 68 | Reference Intelligence Engine (Reference → Cinematic DNA) | pre | 45 | cinematic_dna.json, reference_board.md |
| SKILL 69 | Edit Engine (AI-native Editing & Montage) | edit | 59, 55 | edit_decision_list.md, cut_report.json |
| SKILL 70 | Continuity Graph & Asset Graph | memory | 65, 22 | continuity_graph.json, asset_graph.json |
| SKILL 71 | Software Workflow Bridge (Premiere · After Effects · Photoshop · Illustrator · Resolve · CapCut · Blender) | post | 25 | handoff_plan.md, tool_pipeline.json |
| SKILL 72 | Deliverables Studio (Screenplay, Treatment, Pitch Deck, Storyboard PDF) | pre | 21, 47, 48 | screenplay.pdf, pitch_deck.pptx, storyboard.pdf, shot_list.xlsx |
| SKILL 73 | Code-Driven Animation & Procedural Video | prod | 10, 15 | render_script.*, composition.json |
| SKILL 74 | Production Learning Loop (Performance Memory) | memory | 67, 70, 30 | production_memory.json, lessons.md |
| SKILL 75 | Micro-Drama & Series Showrunner (Vertical Serial) | pre | 47, 21, 65 | series_bible.md, episode_grid.json |

### What each new skill does

**SKILL 59 — Cinematic Grammar Engine (Shot → Sequence → Scene → Act → Film).** Teaches the system to think in montage, not isolated shots. Assigns every shot a story function (establish, reveal, reaction, insert, realization, consequence), builds coverage patterns per scene, and checks screen direction, eyeline, 180° axis and shot-size progression between neighbouring shots.  
*Negative locks:* shot lists with no stated function; every shot the same size; random axis flips; coverage without a master or geography anchor

**SKILL 60 — Cinematography Director (the 'Why' engine).** Decides and justifies every camera choice: why this shot, lens (FOV°), angle, movement, light, duration and cut. Can veto a move that adds redundancy (e.g. a push-in on a scene that is already intimate) and propose a stronger alternative such as locked-off plus blocking.  
*Negative locks:* unmotivated dolly, decorative drone, push-in on already intimate scenes, 'cinematic' without a lighting setup, random lens changes

**SKILL 61 — Acting Director 2.0 (Beats, Subtext, Micro-Action).** Extends Skill 24 with a beat-level timeline: emotion, intention, micro-action, eyeline, breath, posture, gesture, pause, reaction and subtext. Converts a dramatic moment into timecoded beats (e.g. recognition 0.0–1.2s → hesitation → decision → look to door) that video models can follow.  
*Negative locks:* emotion words with no physical behaviour, constant smiling, theatrical over-acting, blank listening, acting beats shorter than 0.8s

**SKILL 62 — Sound Cinema Engine (Layers + Silence Design).** Extends SCELA (26) and the Sound Design Bible (49) into a layered sound-cinema model: diegetic, non-diegetic, foley, room tone, ambience, dialogue, music, transitions and silence. Silence is designed as an event with timecodes, not as an absence.  
*Negative locks:* constant wall-to-wall music, ambience with no geography, silence left to chance, recognizable scores or real voices

**SKILL 63 — AI Artifact Detector (Hands, Physics, Camera, Continuity).** Structured audit of AI-generation failures: human (hands, fingers, eyes, teeth, ears, hair, skin, limbs, facial identity), physics (gravity, collision, fluid, cloth, hair, shadow, reflection), camera (lens deformation, focus instability, drift, impossible parallax, axis violation) and continuity. Returns PASS / WARN / FAIL per group and a render-again decision.  
*Negative locks:* approving a shot after one viewing, ignoring hands and hair, calling a continuity break 'style'

**SKILL 64 — Cinema Audit, Critique & Polish (Slop Detector).** The Impeccable-style loop for film: audit the whole project across 12 weighted dimensions, critique the worst offenders, then polish surgically by regenerating only the failing shots. Includes the Cinema Slop Detector — deterministic rules for the recurring tells of generic AI cinema.  
*Negative locks:* regenerating the whole film to fix one shot, vague feedback, scores without evidence, fixing symptoms instead of causes

**SKILL 65 — Project Bible & Cinematic Memory (PROJECT.md vs STYLE_BIBLE.md).** Upgrades Skill 52 into a persistent project memory. Separates project truth (PROJECT.md: what the film IS) from cinematic language (STYLE_BIBLE.md: how it LOOKS), and keeps story, world, character, location, prop, camera, lighting, sound, editing, color, VFX, AI, continuity and delivery bibles in one folder every later skill reads first.  
*Negative locks:* style details leaking into project truth, bible written after generation, decisions with no 'why', two conflicting sources of truth

**SKILL 66 — Shot DNA & Prompt Compiler 2.0 (compileShot).** Separates cinematic intent from model syntax: intent → Shot Spec (Shot DNA) → engine adapter → prompt. One shot plan compiles into many model dialects (Veo, Kling, Seedance, Wan, Runway, Higgsfield, ComfyUI graph, Flux, Nano Banana…). A new model needs only a new adapter, not a new system.  
*Negative locks:* writing prompts directly in one model's syntax, mixing intent and syntax, hard-coding a model into the plan

**SKILL 67 — Model Intelligence & Engine Benchmark.** Upgrades the router from 'which model is best' to 'which model is best for THIS shot, NOW, with THESE assets and THIS budget'. Scores candidates, explains the choice with cost and risk, and keeps an internal benchmark (10 standard tests) so choices come from measured results, not impressions.  
*Negative locks:* choosing a model by hype, using a sunsetting engine, ignoring budget, benchmark scores invented rather than measured

**SKILL 68 — Reference Intelligence Engine (Reference → Cinematic DNA).** Extends Skill 45. Accepts image, video, frame, film, photo, painting or real location and extracts composition, camera, FOV, light, color, texture, motion, depth, subject, environment, style and editing. Chain: reference → Cinematic DNA → Style Bible → Shot Specs → model prompts.  
*Negative locks:* copying a reference 1:1, claiming brand or person identity from appearance, estimates without evidence

**SKILL 69 — Edit Engine (AI-native Editing & Montage).** Thinks in editing, not just generation: shot selection, assembly, rhythm, pacing, match cut, jump cut, J-cut, L-cut, montage and final cut. Rates each cut (GOOD / WEAK / BAD) with a reason and a fix (reverse the shot, insert a neutral transition, trim head/tail).  
*Negative locks:* cutting on identical motion energy, ignoring screen direction, rhythm set by generation length instead of story, no handles for editors

**SKILL 70 — Continuity Graph & Asset Graph.** The Script Supervisor core. Tracks character (face, hair, age, wardrobe, accessories, body, emotional state), location (geometry, architecture, light, time, weather), prop (shape, color, position, state) and camera (axis, lens, height, movement, screen direction). The Asset Graph links shots to assets so impact is computable: 'if Helena's hair changes, which shots must be regenerated?'  
*Negative locks:* describing identity in text only, new wardrobe by accident, light direction flips, changing an asset without re-listing affected shots

**SKILL 71 — Software Workflow Bridge (Premiere · After Effects · Photoshop · Illustrator · Resolve · CapCut · Blender).** Professional handoff recipes between AI generation and the tools editors really use: Premiere Pro, After Effects, Photoshop, Illustrator, DaVinci Resolve, CapCut and Blender, plus AI finishing (Magnific, Topaz, Higgsfield). Specifies formats, color management, proxies, naming, and which tool does which job.  
*Negative locks:* grading in the editor and again in the generator, exporting 8-bit intermediates, mixed color spaces, skipping handles and naming

**SKILL 72 — Deliverables Studio (Screenplay, Treatment, Pitch Deck, Storyboard PDF).** Produces the paper side of cinema in professional formats: screenplay (Fountain / PDF / FDX-ready), logline, one-sheet, treatment, pitch deck, lookbook, shot list, storyboard PDF, call sheet and budget summary. Pairs with the docx / pptx / pdf document skills when available.  
*Negative locks:* screenplay without proper scene headings, deck without a visual thesis, storyboard pages without shot metadata

**SKILL 73 — Code-Driven Animation & Procedural Video.** Generates video with code when determinism matters: Remotion/React, HTML+Canvas, p5, Manim, Lottie, FFmpeg, Blender Python (bpy) and After Effects expressions/scripts. Critical typography, charts, UI motion and loops are rendered in code; the AI model handles organic imagery.  
*Negative locks:* asking a video model to render critical text, non-deterministic brand typography, un-versioned render scripts

**SKILL 74 — Production Learning Loop (Performance Memory).** Daniskills learns from each production. Logs which engine, style and shot recipe worked, how many retries each shot needed, audit scores and audience data, then feeds the Model Intelligence benchmark and the next project's defaults.  
*Negative locks:* starting every project from zero, logging impressions instead of numbers, keeping lessons outside the project memory

**SKILL 75 — Micro-Drama & Series Showrunner (Vertical Serial).** Plans vertical episodic stories (typically 9:16, 60–120s episodes): series bible, episode grid, cliffhanger structure, recurring cast identity, hook-per-episode, and an efficient production batch so identity and look stay constant across dozens of episodes.  
*Negative locks:* episodes with no end-hook, identity drift between episodes, new look every episode, 16:9 composition cropped to 9:16

## New Visual DNA styles (10)

| Alias | Family | FOV | Sat | Shadow / Highlight | LUT match |
|---|---|---|---|---|---|
| `CINEMANOVO` | cinema_auteur | 65° | 34 | #1b1712 / #e8e1d0 | Kodak Vision3 250D 5207 Daylight Cine Film |
| `SERTAOBLEACH` | cinema_auteur | 84° | 38 | #5e3b22 / #f2e8d5 | Sertão Sun-Bleach Daylight (v3.3) |
| `TROPICALNOIR` | cinema_auteur | 54° | 46 | #0b1a1f / #e0a030 | Tropical Neon Night 800T (v3.3) |
| `PRECISIONTHRILLER` | cinema_auteur | 58° | 28 | #1b1f1a / #a8883a | Bleach Bypass Controlled Desat (v3.3) |
| `SLOWCINEMA` | cinema_auteur | 72° | 30 | #2e3430 / #d8c9a8 | Slow Cinema Muted Natural (v3.3) |
| `WUXIAINK` | animation_2d | 60° | 12 | #1c1c1c / #f4efe4 | Ink-Wash Monochrome + Vermilion (v3.3) |
| `DONGHUA3D` | animation_3d | 50° | 78 | #0e1b3d / #f4c84a | Donghua Glow Compositing (v3.3) |
| `SOLARPUNK` | commercial | 62° | 62 | #2e7d32 / #f5f1dc | Solarpunk Fresh Daylight (v3.3) |
| `BRUTALISTSCIFI` | cinema_auteur | 92° | 22 | #2c2a26 / #e6c58b | Kodak Vision3 250D 5207 Daylight Cine Film |
| `VERTICALDRAMA` | commercial | 47° | 58 | #2a2a2e / #fff6ee | Vertical Drama Clean Skin (v3.3) |

### Prompt cores

- **CINEMANOVO** — Raw social-realist look: hard tropical sun, high-contrast near-monochrome natural light, handheld urgency, real faces and real locations.  
  `hard overhead 5600K sun, unfilled deep shadows, handheld 16mm grain, real faces on real streets, sweat and dust, abrupt reframing on events`
- **SERTAOBLEACH** — Parched, over-exposed earth tones: cracked soil, white sky, small figures in vast empty space, heat shimmer and long silence.  
  `bleached white sky, cracked sun-dried earth, small figure in vast wide frame, heat shimmer, locked-off wide, long silent take`
- **TROPICALNOIR** — Hot humid night thriller: sodium and neon practicals on wet asphalt, sweat-sheen skin, ceiling fans, rain, moths around streetlights.  
  `humid night, sodium 3200K key with magenta and green neon kickers, wet asphalt reflections, sweat sheen, moths in light cones, ratio 6:1`
- **PRECISIONTHRILLER** — IP-safe archetype of the 'precision thriller' language: locked-off geometry, motivated practical light, desaturated palette, underplayed performance and elliptical cutting.  
  `locked-off geometric framing, motivated 3200K practical key, desaturated green-amber palette, ratio 6:1, mm-precise camera push, underplayed performance`
- **SLOWCINEMA** — Patient observational cinema: long static or barely moving takes, ambient natural light, muted palette, sound of place instead of score.  
  `long static take, overcast soft 6500K daylight, muted palette, deep-focus staging, sound of place only, glacial camera drift`
- **WUXIAINK** — Shan-shui ink-wash backgrounds, flowing silk and sleeves, bamboo and mist, monochrome with a single vermilion accent, balletic motion.  
  `ink-wash mountains in mist, monochrome with a single vermilion accent, flowing silk sleeves, bamboo, rice-paper texture, parallax glide`
- **DONGHUA3D** — Stylized 3D characters with painterly textures and heavy compositing: glowing qi, floating particles, layered silk, cinematic depth of field.  
  `stylized 3D with painted textures, glowing qi particles, layered silk, volumetric light shafts, cool ambient with warm rim, shallow depth of field`
- **SOLARPUNK** — Bright hopeful futures: living architecture, solar glass, urban gardens, warm daylight and soft airy colours.  
  `living architecture with plants, solar glass, warm 5600K daylight, green bounce fill, backlit foliage rim, airy natural palette`
- **BRUTALISTSCIFI** — Monolithic architecture, tiny humans, atmospheric haze, near-monochrome sand and grey palette, sparse sound and vast silence.  
  `monolithic concrete, tiny figure vs vast structure, atmospheric haze, near-monochrome sand-grey palette, 5000K diffused light, locked-off wide`
- **VERTICALDRAMA** — Optimised for serial vertical drama: face-forward framing, bright clean key light, high-contrast emotional close-ups, readable on a phone in sunlight.  
  `face-forward 9:16 framing, soft 5600K key at 45 degrees, fill ratio 2:1, eye catchlights, clean background separation, snap zoom on the end-frame`

## New LUT presets (9)

| Name | Type | Characteristics | Halation | Grain |
|---|---|---|---|---|
| Bleach Bypass Controlled Desat (v3.3) | Thriller / Desaturated | Silver retention look: lowered saturation, raised contrast, crushed but readable blacks, cool-green midtones | 0.10 | 0.35 |
| Teal-Amber Restrained (v3.3 anti-slop) | Cinema / Controlled Complementary | Cool shadows and warm highlights limited to practical sources; skin protected from teal; saturation capped at 40 | 0.15 | 0.30 |
| Sertão Sun-Bleach Daylight (v3.3) | Arid Landscape Drama | Overexposed warm daylight, milky highlights, earth tones, restrained saturation | 0.25 | 0.25 |
| Tropical Neon Night 800T (v3.3) | Night Exterior Neon | Tungsten-balanced night with magenta/green neon halation, wet-asphalt speculars, rich blacks | 0.40 | 0.45 |
| Ink-Wash Monochrome + Vermilion (v3.3) | Stylized Monochrome Accent | Near-monochrome ink wash with a single selectively preserved vermilion hue | 0.00 | 0.00 (paper tooth only) |
| Donghua Glow Compositing (v3.3) | Digital Light-FX | Neutral base with HDR emissive FX layer, soft particle bloom | 0.20 (digital bloom) | 0.00 |
| Solarpunk Fresh Daylight (v3.3) | Commercial Natural | Airy lifted shadows, fresh greens, clean skin, bright roll-off | 0.10 | 0.15 |
| Vertical Drama Clean Skin (v3.3) | Phone-First Commercial | Bright clean key, protected skin tones, medium contrast readable in sunlight | 0.05 | 0.10 |
| Slow Cinema Muted Natural (v3.3) | Naturalistic Muted | Pulled exposure feel, muted greens and greys, soft roll-off, low-amplitude grain | 0.08 | 0.20 |

## New blend recipes (4)

| Recipe | Base | Accent | Why |
|---|---|---|---|
| SERTAONOIR | SERTAOBLEACH | NOIR | bleached daylight landscape with hard high-contrast shadow isolated on the interior doorway |
| INKDONGHUA | WUXIAINK | DONGHUA3D | ink-wash world where only the energy effect is glowing stylized 3D |
| TROPICALGLASS | TROPICALNOIR | LIQUIDGLASS | humid neon night with a single refractive glass surface carrying the reflections |
| PRECISIONBRUTAL | PRECISIONTHRILLER | BRUTALISTSCIFI | geometric thriller grammar inside one monumental concrete space |

## New pipelines (7)

### `p_project_init` — Project Init (Bible + Memory) — v3.3
*Ratio 16:9 · gates G1, G10* — Create PROJECT.md, STYLE_BIBLE.md and the 16-file bible before any generation.

| # | Skill | Role | Output |
|---|---|---|---|
| 1 | SKILL 47 | Premise, theme, world | `story_bible.json` |
| 2 | SKILL 68 | Reference intake → Cinematic DNA | `cinematic_dna.json` |
| 3 | SKILL 65 | Write PROJECT.md and STYLE_BIBLE.md; lock decision log | `PROJECT_BIBLE/` |
| 4 | SKILL 70 | Seed continuity + asset graph | `asset_graph.json` |
| 5 | SKILL 55 | Consistency check of the bible | `qa_report.md` |

### `p_cinema_audit_polish` — Cinema Audit → Critique → Polish — v3.3
*Ratio 16:9 · gates G4, G11, G12, G13* — Audit the whole project, critique worst items, regenerate only failing shots.

| # | Skill | Role | Output |
|---|---|---|---|
| 1 | SKILL 70 | Continuity audit across shots | `continuity_report.json` |
| 2 | SKILL 63 | AI artifact audit per shot | `artifact_report.json` |
| 3 | SKILL 64 | Cinema Audit score + slop scan | `cinema_audit_report.md` |
| 4 | SKILL 60 | Critique camera / light choices | `critique.md` |
| 5 | SKILL 66 | Recompile only failing shots | `compiled_prompts.json` |
| 6 | SKILL 64 | Re-audit; gate G12 | `polish_plan.json` |

### `p_reference_to_shot` — Reference → Cinematic DNA → Shot Specs — v3.3
*Ratio 16:9 · gates G1, G4* — Turn references into a reusable look and executable shot specs.

| # | Skill | Role | Output |
|---|---|---|---|
| 1 | SKILL 68 | Analyze references (image / video / location) | `cinematic_dna.json` |
| 2 | SKILL 57 | Blend if two looks (70/30) | `blend_style.json` |
| 3 | SKILL 58 | Grading card | `color_grading_card.json` |
| 4 | SKILL 65 | Register in STYLE_BIBLE.md | `STYLE_BIBLE.md` |
| 5 | SKILL 66 | Compile Shot DNA | `shot_dna.json` |

### `p_screenplay_package` — Screenplay + Pitch Package — v3.3
*Ratio 16:9 · gates G1, G4* — From premise to screenplay, treatment, lookbook, deck and storyboard in professional formats.

| # | Skill | Role | Output |
|---|---|---|---|
| 1 | SKILL 47 | Logline, premise, structure | `story_bible.json` |
| 2 | SKILL 21 | Screenplay in master scenes | `screenplay.fountain` |
| 3 | SKILL 59 | Scene grammar and coverage | `scene_grammar.json` |
| 4 | SKILL 68 | Lookbook from references | `reference_board.md` |
| 5 | SKILL 48 | Storyboard + shot list | `storyboard.json` |
| 6 | SKILL 72 | Export PDF / PPTX / XLSX | `screenplay.pdf` |

### `p_micro_drama_series` — Vertical Micro-Drama Series — v3.3
*Ratio 9:16 · gates G1, G2, G3, G4, G10, G11, G12* — Series production with recurring identity, batch generation and surgical polish.

| # | Skill | Role | Output |
|---|---|---|---|
| 1 | SKILL 75 | Series bible + episode grid | `series_bible.md` |
| 2 | SKILL 65 | Project bible + style bible | `PROJECT_BIBLE/` |
| 3 | SKILL 22 | Lock cast identity | `character_sheets` |
| 4 | SKILL 70 | Asset graph per episode | `asset_graph.json` |
| 5 | SKILL 66 | Compile shots per engine | `compiled_prompts.json` |
| 6 | SKILL 67 | Choose engine per shot | `model_decision.md` |
| 7 | SKILL 69 | Assemble episode, hook + cliffhanger | `edit_decision_list.md` |
| 8 | SKILL 64 | Audit + polish | `cinema_audit_report.md` |

### `p_post_finishing` — Post Finishing (Edit · Color · Sound · Master) — v3.3
*Ratio 16:9 · gates G7, G12, G13, G8* — Professional finishing of AI-generated material across NLE, compositor and grade.

| # | Skill | Role | Output |
|---|---|---|---|
| 1 | SKILL 63 | Artifact triage before grading | `artifact_report.json` |
| 2 | SKILL 69 | Assembly + rhythm | `edit_decision_list.md` |
| 3 | SKILL 71 | Handoff plan (Premiere / AE / Resolve / CapCut / Blender) | `handoff_plan.md` |
| 4 | SKILL 58 | Grade card → Resolve nodes | `color_grading_card.json` |
| 5 | SKILL 25 | Darkroom: grain, halation, LUT | `graded_master` |
| 6 | SKILL 62 | Sound cinema map + mix | `sound_cinema_map.json` |
| 7 | SKILL 64 | Final audit and delivery gate | `cinema_audit_report.md` |

### `p_code_animation` — Code-Driven Animation (Remotion · bpy · AE scripts · FFmpeg) — v3.3
*Ratio 16:9 · gates G4, G8* — Deterministic typography, charts, UI motion and loops rendered in code; AI plates underneath.

| # | Skill | Role | Output |
|---|---|---|---|
| 1 | SKILL 10 | Motion concept | `motion_brief.md` |
| 2 | SKILL 73 | Write render script + composition | `render_script` |
| 3 | SKILL 71 | Handoff / assembly plan | `handoff_plan.md` |
| 4 | SKILL 55 | QA frame check | `qa_report.md` |

## New routes (13)

| Route | Label | Primary | Gate | Pipeline |
|---|---|---|---|---|
| `project_init` | Start a project (bible + memory) | 65 | G10 | p_project_init |
| `cinema_audit` | Audit the whole film (score + polish plan) | 64 | G12 | p_cinema_audit_polish |
| `compile_shot` | Compile a Shot Spec into engine prompts | 66 | G4 | — |
| `model_intelligence` | Pick the best model for this shot | 67 | G3 | — |
| `continuity_audit` | Continuity audit (character, location, prop, camera) | 70 | G11 | — |
| `direct_cinematography` | Cinematography direction (why this shot) | 60, 59 | G3 | — |
| `edit_cut` | Edit and montage planning | 69 | G4 | — |
| `artifact_check` | AI artifact check (hands, physics, camera) | 63 | G13 | — |
| `reference_intel` | Reference → Cinematic DNA | 68 | G1 | p_reference_to_shot |
| `software_workflow` | Software workflow (Premiere, AE, Resolve, CapCut, Blender…) | 71 | G7 | p_post_finishing |
| `screenplay_package` | Screenplay, deck and storyboard package | 72 | G4 | p_screenplay_package |
| `code_animation` | Animate with code (Remotion, bpy, AE scripts, FFmpeg) | 73 | G4 | p_code_animation |
| `series_plan` | Series / micro-drama planning | 75 | G10 | p_micro_drama_series |

## New gates

- **G10 — Project Bible locked:** PROJECT.md (project truth) and STYLE_BIBLE.md (cinematic language) exist and are consistent before generation; decision log started.
- **G11 — Continuity verified:** Continuity Graph shows no unresolved CRITICAL item across consecutive shots (identity, wardrobe, light direction, axis, time, weather, props).
- **G12 — Cinema Audit passed:** Cinematic Score >= 80/100 with zero CRITICAL findings; every WARNING has an owner and a fix or an accepted-risk note.
- **G13 — AI artifacts cleared:** AI Artifact Detector returns no FAIL in human, physics, camera or continuity groups for approved shots; WARN items are logged.

## Director Profiles (cinematic-language archetypes)

Director Profiles describe cinematic LANGUAGES (archetypes), not people. Map a client's famous-director request to the archetype, then build from tokens. This keeps looks ownable and IP-safe.

| Profile | Camera | Light | Color | Editing | Maps to |
|---|---|---|---|---|---|
| `precision_thriller` | restrained, locked-off, mm-precise pushes | motivated practical key, top light, ratio 6:1 | desaturated green-amber, saturation 20-30 | elliptical, hard cuts, no flourishes | PRECISIONTHRILLER, FINCHER |
| `intimate_naturalism` | handheld motivated by breath, close, observational | available light, soft window key 5600K, ratio 2:1 | natural to muted, saturation 30-45 | long takes, cuts on emotion not action | CINEMANOVO, DOCREAL, SLOWCINEMA |
| `operatic_scale` | crane, slow orbit, low wide angles | single low sun or haze source, ratio 4:1 | restrained palette with one accent, saturation 20-40 | slow build, large set-piece rhythm | BRUTALISTSCIFI, VILLENEUVE, SERTAOBLEACH |
| `kinetic_urgency` | handheld, whip pans, snap zoom, 1 dominant device | hard mixed sources, high contrast | punchy but controlled, saturation 45-65 | fast, match-on-action, jump cuts with intent | TRIGGER, MAPPA, TROPICALNOIR |
| `contemplative_slow` | static tripod or glacial drift | overcast ambient 6500K, ratio 1.5:1 | muted, saturation 25-35 | takes 15 s+, minimal cuts | SLOWCINEMA |
| `symmetrical_whimsy` | planimetric, lateral tracks, whip pans between tableaux | soft frontal key 5600K, ratio 2:1 | pastel palette, saturation 55-70 | chaptered, deadpan holds | WES |
| `pulp_stylized` | dutch, extreme low and high angles, crash zoom | hard key with hard shadow, ratio 8:1+ | binary or spot colour, saturation 0-20 with one accent | punctuated, title-card chapters | SINCITY, NOIR, LEONE |
| `observational_doc` | documentary snap, handheld at distance, long lens | available daylight, no added key | natural, saturation 35-50 | sequence logic, narration-led | DOCREAL, PLANETEARTH, TRUECRIME |
| `vertical_serial` | locked-off or gentle push on faces, snap zoom on cliffhanger | soft bright key 5600K, catchlights | clean commercial, saturation 50-65 | hook in 1-2 s, turn, end-hook | VERTICALDRAMA, KPOP |

## Cinema Slop Detector rules

| ID | Severity | Flags | Fix |
|---|---|---|---|
| CINEMA_SLOP_001 | warn | 'Cinematic lighting' with no lighting specification. | Name the key source, Kelvin and ratio (e.g. 3200K practical key, ratio 6:1). |
| CINEMA_SLOP_002 | warn | Random lens change inside a scene. | Lock FOV per shot; change size by cutting, not by lens drift. |
| CINEMA_SLOP_003 | warn | Unmotivated camera movement. | State the physical device, speed and the story motivation. |
| CINEMA_SLOP_004 | warn | Generic slow motion with no purpose. | Tie slow motion to one peak moment and state fps/overcrank. |
| CINEMA_SLOP_005 | warn | Fake anamorphic flare added as decoration. | Use flares only from visible practicals; name the source. |
| CINEMA_SLOP_006 | warn | Teal-and-orange default grade. | Use the grading card: cap saturation, protect skin, tint shadows/highlights with HEX. |
| CINEMA_SLOP_007 | warn | Shallow depth of field used by default. | Justify with aperture/distance and subject separation need. |
| CINEMA_SLOP_008 | error | Drone shot repeated across the sequence. | Limit aerials to one geography beat; vary devices. |
| CINEMA_SLOP_009 | warn | Every scene = 35mm shallow DOF. | Vary FOV and depth by job (geography vs performance). |
| CINEMA_SLOP_010 | warn | Generic 'epic cinematic' language. | Replace with optics, light and grade parameters. |
| CINEMA_SLOP_011 | warn | Music-video camera moves without narrative motivation. | Give every move a story cause or remove it. |
| CINEMA_SLOP_012 | warn | Unmotivated lens flare. | Name the light source producing the flare. |
| CINEMA_SLOP_013 | warn | Empty quality adjectives. | Delete; specify FOV, light, texture and grade instead. |
| CINEMA_SLOP_014 | warn | Push-in on a moment that is already intimate. | Hold locked-off and let blocking carry the intensity. |
| CINEMA_SLOP_015 | warn | Continuous handheld without cause. | Handheld only on events; return to stable framing. |

## Cinema Audit dimensions

Pass score: **80** (G12).

| Dimension | Weight |
|---|---|
| Story | 10 |
| Cinematography | 12 |
| Composition | 8 |
| Lighting | 9 |
| Acting | 8 |
| Continuity | 12 |
| Motion | 7 |
| Audio | 8 |
| Color | 8 |
| AI Artifacts | 10 |
| Engine Fit | 4 |
| IP / Compliance | 4 |

## Engine benchmark (suite)

Standard tests to run on every engine you actually use. Record measured 0-100 scores in results; never invent numbers. Model Intelligence blends results with spec data.

| Test | Name | Dimension |
|---|---|---|
| T001 | Human walk | physics |
| T002 | Dialogue (one speaker, 8 words) | dialogue |
| T003 | Hand-object interaction | physics |
| T004 | Hair motion in wind | physics |
| T005 | Crowd (6+ people) | crowd |
| T006 | Fast action | motion |
| T007 | Camera orbit 360 | camera |
| T008 | Multishot continuity | continuity |
| T009 | Character consistency across 5 shots | character |
| T010 | Native audio sync | audio |

## Continuity checks

- 180-degree rule
- screen direction
- eyeline match
- wardrobe
- light direction
- sun position
- prop position and state
- character identity
- location geometry
- time of day
- weather
- camera axis
- focal relationship (FOV jump between adjacent shots)

## Deliverable formats (Skill 72)

| Deliverable | Formats | Rules |
|---|---|---|
| screenplay | Fountain (.fountain), PDF (industry layout), Final Draft-ready text | Scene headings INT./EXT. LOCATION - TIME; Action in present tense, visual only; Courier-type 12 pt, 1 page ≈ 1 minute; Dialogue under 25 words per beat for AI generation |
| treatment | docx, pdf | 3-8 pages, present tense, no dialogue except key lines |
| one_sheet | pdf, pptx | logline, genre, tone, comparable looks (as DNA tags), key art |
| pitch_deck | pptx, pdf | 8-12 slides: hook, logline, world, characters, look (grading card + frames), structure, proof of concept, plan |
| storyboard | pdf, xlsx (shot list), json | one panel per shot with FOV°, movement, light, sound, duration |
| call_sheet | pdf, xlsx | scene, location, cast, props, light time, notes (for hybrid productions) |
| lookbook | pdf, pptx | reference board, palette HEX, grading card, lighting examples |

## New engines and adapters

| Engine | Kind | Status | Confidence | Best for |
|---|---|---|---|---|
| `magnific` Magnific (AI upscale / enhance / relight) | platform | active | low | finishing_stills, thumbnails, print_stills, texture_boost |
| `topaz_video_ai` Topaz Video AI (upscale / denoise / interpolation) | pipeline | active | low | finishing_video, slow_motion, archive_restore |
| `flux_kontext` FLUX Kontext (in-context image editing) | image | active | low | character_consistency, wardrobe_change, relight_still, continuity_fix |
| `qwen_image` Qwen-Image / Qwen-Image-Edit | image | open_weights | low | posters_with_text, bilingual_text, local_pipeline |
| `hunyuan_video` HunyuanVideo (open-weights video) | video | open_weights | low | local_pipeline, experiments, custom_lora |
| `ideogram` Ideogram (typography-first image model) | image | active | low | posters, logos, title_cards, thumbnails_with_text |
| `recraft` Recraft (vector and brand-style images) | image | active | low | vector_assets, brand_illustration, motion_graphic_assets |
| `adobe_firefly` Adobe Firefly (inside Photoshop / Premiere / After Effects) | platform | active | low | photoshop_fixes, clip_extension, client_safe_assets |

Adapters (`engine_adapters[]`, 20): `veo_3_1`, `kling_3_0`, `seedance_2_5`, `seedance_2_0`, `grok_imagine_video`, `runway_gen_4_5`, `minimax_hailuo`, `wan_2_x`, `ltx_2_x`, `hunyuan_video`, `higgsfield`, `comfyui`, `flux_2`, `flux_kontext`, `nano_banana`, `midjourney`, `gpt_image_2`, `seedream_5`, `qwen_image`, `ideogram`

