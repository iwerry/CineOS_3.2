<!-- # Skill Criada por Daniel Rodrigues · Terminal AI — Draft Creative Studio Ltd · profiles_guide v3.2.0-cia (v3.1 profiles 01–18 kept in Portuguese; profiles 19–22 and 3.2 skill additions in English) -->
# Profiles Guide — CineOS 3.2 (22 profiles)

O **Terminal AI — Draft Creative Studio Ltd** atende **18 perfis**. Cada perfil já vem com **skills, estilos Visual DNA, motores, pipeline e KPIs resolvidos**: escolher o perfil é escolher o kit inteiro. No código: `profileKit('perfil_08')` (skillsData.ts) devolve skills expandidas (com dependências), estilos, motores e pipeline.

## O que é um perfil (e o que não é)
- **Perfil** = *quem* pede (dono do problema): dores, KPIs, entregáveis, kit padrão. Não define look.
- **Skill** = *habilidade* (o que o engine sabe fazer: rotear, roteirizar, gradear, mesclar).
- **Estilo Visual DNA** = *conhecimento visual* (óptica, paleta, textura, luz, movimento, color grading).
- **Motor** = *ferramenta externa* (Veo, Kling, FLUX…). **Pipeline** = *receita* que encadeia skills + estilo.
- Regra para adicionar um perfil novo: só se houver um **dono de problema** com KPIs próprios que nenhum perfil atual cobre. Se for só um look novo, é estilo; se for uma capacidade nova, é skill.

## Como escolher
1. Dono do problema? → perfil. 2. Objetivo? → tabela abaixo. 3. Rode `/pipeline:<id>` ou `/route "<pedido>"`. Pode combinar perfis (ex.: 08 + 01 para Reel de restaurante).

## Objetivo × perfil × pipeline × estilos
| Objetivo | Perfis | Pipelines | Estilos que funcionam |
|---|---|---|---|
| Educativo | 07, 15, 16 | p_edu_explainer, p_faceless_doc | KURZGESAGT, WHITEBOARD, STORYBOOK, BLUEPRINT, PLANETEARTH |
| Comercial / performance | 01, 03, 04, 05 | p_product_ad, p_social_reel, p_brand_film, p_launch_15s | KEYNOTE, SPORTS, EDITORIAL, KPOP, NEUBRUTALIST, LIQUIDMETAL |
| Artístico / autoral | 12, 13, 14, 16 | p_short_film, p_music_video, p_storyboard_previs, p_still_campaign | NOIR, FINCHER, VILLENEUVE, WONGKARWAI, MIGNOLA, UKIYOE, ARTDECO |
| Alimentício / gastronomia | 08 | p_food_ad | CHEFSTABLE, WES, KEYNOTE |
| Fashion / beauty | 09 | p_fashion_lookbook | EDITORIAL, WES, KPOP, WONGKARWAI, ANALOGDREAM |
| Motion design / UX-UI | 02, 10 | p_ux_demo, p_launch_15s | LIQUIDGLASS, CLAYMORPHISM, NEUBRUTALIST, SWISS, BLUEPRINT, Y2K |
| Real estate / hospitalidade | 11 | p_real_estate_tour | KEYNOTE, WES, GHIBLI, VILLENEUVE |
| Social hooks e thumbnails | 01, 05 | p_social_reel, p_still_campaign, p_analytics_loop | SYNTHWAVE, TRIGGER, SPIDERVERSE, SPORTS, GLITCHCORE |
| Pré-vis / vídeo comum → cinema | 02, 06, 12 | p_storyboard_previs, p_video_upgrade | KUBRICK, NOIR, DOCREAL, NEWHOLLYWOOD70S |
| Anime / webtoon / animação indie | 14, 17 | p_storyboard_previs | UFOTABLE, MAPPA, WEBTOON, ISEKAI, SHINKAI, AKIRA |
| Assinatura visual / direção de arte | 18, 06 | p_signature_style | GHIBLIPUNK, GLASSNOIR, ANALOGDREAM, DREAMCORE, BIOLUMINESCENT |
| Internacionalização | 03, 05, 07 | p_localization_sprint | qualquer estilo (identidade preservada, casca verbal muda) |

## Perfis
### PERFIL 01: Social Media e Criadores de Conteúdo
- **Para quem:** TikTok, Reels, Shorts com hooks de 2s para reter scroll
- **Specs:** Hooks virais embutidos · 9:16 nativo · Safe zones · Micro-beats a cada 1.5s
- **Dores resolvidas:** Vídeos genéricos em feeds de alta velocidade; scroll ignorado nos primeiros 2 segundos.
- **DNA técnico:** 9:16 (1080x1920), safe zones topo 12%/rodapé 15%, corte a cada 1.5–2.0s, hook com pattern interrupt visual, exatamente 3 hashtags.
- **Skills-chave:** 17 Social Hook, 18 Thumbnail para Redes Sociais, 21 Roteirização em Master Scenes, 28 Prompt Engineering Seedance Faceless (Documentário), 29 Calendário Editorial e Distribuição Multi-Plataforma, 46 Direção de Imagem (T2I / I2I / Multi-Referência), 26 Áudio Multimodal e Foley Síncrono (SCELA), 30 Análise Pós-Publicação e Iteração de Dados, 58 Color Grading DNA Engine
- **Estilos Visual DNA recomendados:** **SYNTHWAVE** — Synthwave / Outrun — VHS Retro MTV Anos 80; **KPOP** — K-Pop Comeback MV Gloss — Cultura Pop Coreana (Seul); **TRIGGER** — Studio Trigger — Neon Flat-Pop Anime (Kill la Kill / Cyberpunk: Edgerunners); **SPIDERVERSE** — Spider-Man: Into the Spider-Verse — Comic-Print 3D/2D Hybrid (Sony Pictures Imageworks); **ANALOGDREAM** — Analog Dream Photography — Flux-Era Warm-Film AI Look (2025–26); **GLITCHCORE** — Glitchcore / Datamosh — Corrupted-Signal Digital Aesthetic; **WEBTOON** — Vertical Webtoon Flat Color — Korean Digital-Native Comic Motion
- **Motores preferidos:** `kling_3_0`, `seedance_2_0`, `grok_imagine_video`, `nano_banana`
- **Pipeline padrão:** `p_social_reel` — Reel/Short/TikTok com Hook (9:16, ~20s)
- **Entregáveis:** Reel 15–30s; 3 variantes de hook; capa/thumb; legenda + 3 hashtags
- **KPIs:** retenção 0–3s; CTR de capa; saves; shares
- **Comece por aqui:** `/pipeline:p_social_reel --style SYNTHWAVE --ratio 9:16 --prompt "..."` — *Reel de 20s sobre 'o café que nunca esfria', hook em 1.5s, estilo SYNTHWAVE.*

### PERFIL 02: Designers, Motion Designers e Editores
- **Para quem:** After Effects, Premiere, DaVinci Resolve e pipelines de VFX/B-roll
- **Specs:** Lentes anamórficas · ARRI Alexa · Color grade · Curvas H&D · LUT Bake
- **Dores resolvidas:** Falta de pré-vis cinematográfico real, plates de VFX com cara de IA, texturas incompatíveis com DaVinci/Premiere.
- **DNA técnico:** Anamórfico com flare elíptico, ARRI Alexa LF, obturador 180°, curvas H&D, LUT .cube 33/65 pontos.
- **Skills-chave:** 05 Cinematic, 10 Motion Design, 20 Técnicas de Câmera Física e Digital, 25 Pós-Produção e Emulação Química (Darkroom + LUT), 27 Motion Design e Launch Video (MiniMax H3 / Higgsfield), 45 Análise de Imagem e Engenharia Reversa de Prompt, 51 Motion de Produto Digital (UX/UI para Vídeo), 54 Upgrade de Vídeo Comum para Cinema (V2V Restyle), 57 DNA Blending Lab (Mistura de Estilos), 58 Color Grading DNA Engine
- **Estilos Visual DNA recomendados:** **NOIR** — Hollywood Film Noir — Eastman Double-X 5222 (Preto e Branco Clássico); **KUBRICK** — Stanley Kubrick — One-Point Perspective Symmetry (The Shining / 2001); **VILLENEUVE** — Denis Villeneuve — Monolithic Fog Brutalism (Dune / Blade Runner 2049); **SWISS** — Swiss / International Typographic Style — Grid Motion Design; **GLASSNOIR** — Glass Noir — Liquid-Glass UI × Hollywood Film Noir Blend (v3.2 mix recipe); **LIQUIDMETAL** — Liquid Metal Morph — Reflective Fluid-Chrome Transformation (2026 AI-video signature look)
- **Motores preferidos:** `veo_3_1`, `kling_3_0`, `ltx_2_x`, `comfyui`
- **Pipeline padrão:** `p_video_upgrade` — Upgrade de Vídeo Comum → Cinema (V2V) (16:9, ~30s)
- **Entregáveis:** plates B-roll; pré-vis; LUT .cube; specs de motion
- **KPIs:** aceite em DaVinci sem retrabalho; tempo de plate
- **Comece por aqui:** `/pipeline:p_video_upgrade --style KUBRICK --ratio 2.39:1` — *Pré-vis de plano-sequência em corredor, estilo KUBRICK, LUT .cube ao final.*

### PERFIL 03: Agências, Freelancers e Produtoras
- **Para quem:** Vídeos profissionais em prazo curto, cobrando por entrega de alto padrão
- **Specs:** Brand story · Anúncios de alta conversão · Real Estate · Storyboard Master Scenes
- **Dores resolvidas:** Prazos curtos e orçamentos que pedem entrega 5x mais ágil com padrão premium.
- **DNA técnico:** Storytelling de fundador, filmes institucionais em Master Scenes com timecode, 145 wpm, consistência entre cenas, pacotes Essencial/Performance/Premium.
- **Skills-chave:** 02 Brand Story, 13 Product Ad, 14 Real Estate, 21 Roteirização em Master Scenes, 29 Calendário Editorial e Distribuição Multi-Plataforma, 47 Arquiteto de História (Premissa, Estrutura e Bíblia de Mundo), 48 Storyboard, Shot List e Animatic (Pré-Vis), 52 Bíblia de Pré-Produção (Moodboard, Style Bible, Cronograma e Orçamento), 56 Compliance, IP e Proveniência, 58 Color Grading DNA Engine
- **Estilos Visual DNA recomendados:** **WES** — Wes Anderson — Planimetric Pastel (Grand Budapest / Moonrise Kingdom); **DOCREAL** — Documentary Photoreal — Cinéma Vérité / National Geographic Realism; **KEYNOTE** — Keynote Minimal Product Film — Macro Precision on Seamless Background; **CHEFSTABLE** — Chef's Table — Slow Cinematic Gastronomy Portrait; **ANALOGDREAM** — Analog Dream Photography — Flux-Era Warm-Film AI Look (2025–26)
- **Motores preferidos:** `veo_3_1`, `kling_3_0`, `higgsfield`
- **Pipeline padrão:** `p_brand_film` — Filme Institucional (Brand Story) (16:9, ~75s)
- **Entregáveis:** brand film 60–90s; cutdowns 15/30s; style bible; orçamento
- **KPIs:** prazo de entrega; aprovação na 1ª rodada; margem por job
- **Comece por aqui:** `/pipeline:p_brand_film --style DOCREAL --duration 75` — *Film institucional de 75s sobre fundadora de padaria, estilo DOCREAL.*

### PERFIL 04: Donos de Marca e E-commerce
- **Para quem:** Creative em escala, showcase 360°, anúncios nível Apple
- **Specs:** Product ad · Product 360 · UGC virtual · Detalhes de macro e reflexos PBR
- **Dores resolvidas:** Alto custo de estúdio de foto de produto; precisa de catálogo 360° e criativos em escala.
- **DNA técnico:** Render PBR com keynote de estúdio, macro em fechos/costuras, reflexos controlados, física de caimento, rotação sem trepidação.
- **Skills-chave:** 04 3D CGI, 12 Product 360, 13 Product Ad, 27 Motion Design e Launch Video (MiniMax H3 / Higgsfield), 46 Direção de Imagem (T2I / I2I / Multi-Referência), 30 Análise Pós-Publicação e Iteração de Dados, 56 Compliance, IP e Proveniência
- **Estilos Visual DNA recomendados:** **KEYNOTE** — Keynote Minimal Product Film — Macro Precision on Seamless Background; **EDITORIAL** — Vogue-Grade Fashion Editorial — High-Fashion Strobe Glamour; **ARTDECO** — Art Deco Luxury — Gatsby-Era Geometric Gold (Cassandre Poster Motion); **LIQUIDMETAL** — Liquid Metal Morph — Reflective Fluid-Chrome Transformation (2026 AI-video signature look); **CLAYMORPHISM** — Claymorphism UI — Puffy Soft-3D Interface (2025–26 Product-Design Trend)
- **Motores preferidos:** `flux_2`, `gpt_image_2`, `veo_3_1`, `kling_3_0`
- **Pipeline padrão:** `p_product_ad` — Anúncio de Produto de Alta Conversão (9:16, ~20s)
- **Entregáveis:** 360° 10s; ad 15/30s 9:16; stills PBR; variações A/B
- **KPIs:** ROAS; CAC; taxa de conversão da página
- **Comece por aqui:** `/pipeline:p_product_ad --style KEYNOTE --ratio 1:1` — *Tênis em 360° com macro na costura, estilo KEYNOTE, fundo seamless.*

### PERFIL 05: Profissionais de Marketing e Growth
- **Para quem:** Testes rápidos de criativos para baixar CAC e otimizar CTR e retenção
- **Specs:** Iteração rápida · A/B sem fricção · Matriz CTR x Retenção · Reescrita de hooks
- **Dores resolvidas:** Fadiga de criativos e CAC alto; ciclos longos de refilmagem para testar hipóteses.
- **DNA técnico:** Matriz CTR×Retenção com diagnóstico cirúrgico, A/B sistemático de hook/capa, variações modulares sem refazer o projeto.
- **Skills-chave:** 17 Social Hook, 18 Thumbnail para Redes Sociais, 30 Análise Pós-Publicação e Iteração de Dados, 31 Localização e Adaptação Cultural Multi-Idioma, 13 Product Ad, 29 Calendário Editorial e Distribuição Multi-Plataforma, 53 Roteador de Motores e Adaptador de Prompt
- **Estilos Visual DNA recomendados:** **SPORTS** — Kinetic Sports Anthem — Grit, Grain & Slow-Mo Sweat; **KPOP** — K-Pop Comeback MV Gloss — Cultura Pop Coreana (Seul); **NEUBRUTALIST** — Neubrutalism UI Motion — Hard Shadows / Bold Borders
- **Motores preferidos:** `kling_3_0`, `grok_imagine_video`, `seedance_2_0`, `gpt_image_2`
- **Pipeline padrão:** `p_analytics_loop` — Loop de Análise Pós-Publicação (Universal, ~0s)
- **Entregáveis:** 10 variações de hook; relatório com ação; próximo ciclo
- **KPIs:** CTR; retenção 0–30s; CAC
- **Comece por aqui:** `/pipeline:p_analytics_loop --prompt "relatório 7d..."` — *10 variações de hook para o mesmo anúncio de suplemento.*

### PERFIL 06: Curiosos Avançados em IA Criativa
- **Para quem:** Domínio técnico de ComfyUI, Seedance, Kling, LTX, Higgsfield Studio
- **Specs:** Vocabulário cinematográfico real · Sem 'AI slop' · FOV em graus · Hero Frame First
- **Dores resolvidas:** Frustração com prompts de YouTube baseados em adjetivos vazios; falta de controle paramétrico.
- **DNA técnico:** Grafos ComfyUI DAG, Seedance 2.x, Higgsfield Studio, FOV em graus, Hero Frame First, Feasibility Veto, sandbox Python.
- **Skills-chave:** 15 Seedance Base, 16 ComfyUI Mastery, 19 Direção de Cinema Digital (Higgsfield / ComfyUI), 20 Técnicas de Câmera Física e Digital, 22 Consistent Characters (Identidade Visual), 24 Direção de Atuação Sintética (Acting Director OS), 45 Análise de Imagem e Engenharia Reversa de Prompt, 53 Roteador de Motores e Adaptador de Prompt, 55 Continuidade e Auditoria de Qualidade (Script Supervisor Sintético), 57 DNA Blending Lab (Mistura de Estilos), 58 Color Grading DNA Engine
- **Estilos Visual DNA recomendados:** **NOIR** — Hollywood Film Noir — Eastman Double-X 5222 (Preto e Branco Clássico); **DOCREAL** — Documentary Photoreal — Cinéma Vérité / National Geographic Realism; **AKIRA** — Katsuhiro Otomo — Akira / Neo-Tokyo Cel Cyberpunk (1988); **MOEBIUS** — Jean Giraud 'Moebius' — Ligne Claire / Heavy Metal / BD Franco-Belga; **GHIBLIPUNK** — Ghiblipunk — Watercolor-Pastoral × Neon-Cyberpunk Blend (v3.2 mix recipe); **GLASSNOIR** — Glass Noir — Liquid-Glass UI × Hollywood Film Noir Blend (v3.2 mix recipe)
- **Motores preferidos:** `comfyui`, `seedance_2_5`, `ltx_2_x`, `higgsfield`
- **Pipeline padrão:** `p_short_film` — Curta-Metragem Sintético (2.39:1, ~300s)
- **Entregáveis:** workflow .json; prompts paramétricos; hero frames; auditoria anti-slop
- **KPIs:** taxa de aprovação sem re-roll; consistência facial
- **Comece por aqui:** `/skill:comfyui_mastery --prompt "..."` — *Monte um workflow ComfyUI com PuLID + IP-Adapter 0.35 para 2 atores.*

### PERFIL 07: Educação, EdTech e Infoprodutores
- **Para quem:** Professores, criadores de curso e escolas que ensinam em vídeo
- **Specs:** Micro-aulas 60–180s · Metáfora visual · Acessibilidade · Estilos educativos
- **Dores resolvidas:** Vídeo educativo que informa mas não ensina; baixa retenção; falta de acessibilidade.
- **DNA técnico:** 1 objetivo por vídeo, metáfora visual por conceito, pergunta de recuperação, legenda + contraste AA, nível de leitura controlado.
- **Skills-chave:** 50 Estúdio Educacional (Aula, Explainer, EdTech), 21 Roteirização em Master Scenes, 47 Arquiteto de História (Premissa, Estrutura e Bíblia de Mundo), 26 Áudio Multimodal e Foley Síncrono (SCELA), 29 Calendário Editorial e Distribuição Multi-Plataforma, 31 Localização e Adaptação Cultural Multi-Idioma, 46 Direção de Imagem (T2I / I2I / Multi-Referência)
- **Estilos Visual DNA recomendados:** **KURZGESAGT** — Kurzgesagt — In a Nutshell (Flat-Vector Science Explainer); **WHITEBOARD** — Whiteboard Animation — RSA Animate / Educational Hand-Drawn Explainer; **STORYBOOK** — Children's Storybook Watercolor — Picture-Book Illustration (EdTech Kids); **BLUEPRINT** — Technical Blueprint — Engineering Draft Explainer
- **Motores preferidos:** `kling_3_0`, `gpt_image_2`, `veo_3_1`, `elevenlabs`
- **Pipeline padrão:** `p_edu_explainer` — Explainer / Micro-aula (16:9, ~120s)
- **Entregáveis:** aula 90–180s; quiz de recuperação; versão 9:16; legendas
- **KPIs:** conclusão da aula; acertos no quiz; retenção média
- **Comece por aqui:** `/pipeline:p_edu_explainer --style WHITEBOARD --duration 120` — *Explique juros compostos em 120s para ensino médio, estilo WHITEBOARD.*

### PERFIL 08: Gastronomia, Restaurantes e Food Creators
- **Para quem:** Chefs, restaurantes, delivery, marcas de bebida e food influencers
- **Specs:** Macro sensorial · Vapor e brilho · ASMR · Money shot
- **Dores resolvidas:** Foto/vídeo de prato sem apelo sensorial; ticket médio estagnado.
- **DNA técnico:** Macro probe 100mm equiv., vapor em contraluz, 120fps em líquidos, money shot, ASMR diegético.
- **Skills-chave:** 09 Food & Beverage, 26 Áudio Multimodal e Foley Síncrono (SCELA), 49 Sound Design Bible, Trilha e Direção de Voz, 13 Product Ad, 17 Social Hook, 46 Direção de Imagem (T2I / I2I / Multi-Referência), 18 Thumbnail para Redes Sociais
- **Estilos Visual DNA recomendados:** **CHEFSTABLE** — Chef's Table — Slow Cinematic Gastronomy Portrait; **WES** — Wes Anderson — Planimetric Pastel (Grand Budapest / Moonrise Kingdom); **KEYNOTE** — Keynote Minimal Product Film — Macro Precision on Seamless Background
- **Motores preferidos:** `veo_3_1`, `kling_3_0`, `flux_2`, `seedance_2_0`
- **Pipeline padrão:** `p_food_ad` — Gastronomia (Reel/Ad de Delivery) (9:16, ~15s)
- **Entregáveis:** reel de prato; ad de delivery; stills de cardápio; ASMR 15s
- **KPIs:** pedidos; ticket médio; saves
- **Comece por aqui:** `/pipeline:p_food_ad --style CHEFSTABLE --ratio 9:16` — *Reel ASMR do hambúrguer autoral, money shot do queijo, estilo CHEFSTABLE.*

### PERFIL 09: Moda, Beleza e Lifestyle
- **Para quem:** Marcas de moda, stylists, editores e influencers premium
- **Specs:** Caimento de tecido · Editorial · Lookbook · Beauty
- **Dores resolvidas:** Foto mostra roupa parada; falta linguagem de passarela/editorial em vídeo.
- **DNA técnico:** Swing de seda/brocado, beauty dish, poses OOTD, consistência de modelo (Soul ID/PuLID), figurino separado de identidade.
- **Skills-chave:** 07 Fashion Look, 22 Consistent Characters (Identidade Visual), 23 Character Sheet (Do Rascunho à Apresentação), 46 Direção de Imagem (T2I / I2I / Multi-Referência), 25 Pós-Produção e Emulação Química (Darkroom + LUT), 13 Product Ad, 29 Calendário Editorial e Distribuição Multi-Plataforma, 58 Color Grading DNA Engine
- **Estilos Visual DNA recomendados:** **EDITORIAL** — Vogue-Grade Fashion Editorial — High-Fashion Strobe Glamour; **WES** — Wes Anderson — Planimetric Pastel (Grand Budapest / Moonrise Kingdom); **KPOP** — K-Pop Comeback MV Gloss — Cultura Pop Coreana (Seul); **WONGKARWAI** — Wong Kar-wai — Step-Printed Neon Longing (In the Mood for Love / Chungking Express); **ANALOGDREAM** — Analog Dream Photography — Flux-Era Warm-Film AI Look (2025–26)
- **Motores preferidos:** `seedance_2_0`, `veo_3_1`, `flux_2`, `seedream_5`, `higgsfield`
- **Pipeline padrão:** `p_fashion_lookbook` — Lookbook de Moda (9:16, ~40s)
- **Entregáveis:** lookbook 30–45s; reels de look; stills editoriais; character sheet da modelo
- **KPIs:** engajamento; cliques em produto; saves
- **Comece por aqui:** `/pipeline:p_fashion_lookbook --style EDITORIAL --ratio 9:16` — *Lookbook de outono com 4 looks, modelo consistente, estilo EDITORIAL.*

### PERFIL 10: Designers UX/UI e Product Designers
- **Para quem:** Times de produto, SaaS, apps e design systems
- **Specs:** Estados de interação · Easing tokens · Mockup de dispositivo · UI em código
- **Dores resolvidas:** Demos de produto sem clareza; UI gerada por IA com texto quebrado.
- **DNA técnico:** Renderizar UI e tipografia em código; modelos de vídeo só para ambiente/hero; tokens hex e springs padronizados.
- **Skills-chave:** 51 Motion de Produto Digital (UX/UI para Vídeo), 10 Motion Design, 27 Motion Design e Launch Video (MiniMax H3 / Higgsfield), 46 Direção de Imagem (T2I / I2I / Multi-Referência), 13 Product Ad, 26 Áudio Multimodal e Foley Síncrono (SCELA), 29 Calendário Editorial e Distribuição Multi-Plataforma
- **Estilos Visual DNA recomendados:** **LIQUIDGLASS** — Liquid Glass UI Motion — Translucent Refractive Interface (2025–26 OS Design Language); **NEUBRUTALIST** — Neubrutalism UI Motion — Hard Shadows / Bold Borders; **SWISS** — Swiss / International Typographic Style — Grid Motion Design; **BLUEPRINT** — Technical Blueprint — Engineering Draft Explainer; **CLAYMORPHISM** — Claymorphism UI — Puffy Soft-3D Interface (2025–26 Product-Design Trend)
- **Motores preferidos:** `gpt_image_2`, `flux_2`, `minimax_hailuo`, `veo_3_1`
- **Pipeline padrão:** `p_ux_demo` — Demo de Produto Digital (UX/UI) (16:9, ~25s)
- **Entregáveis:** demo 15–45s; mockups; spec de motion; loop de landing
- **KPIs:** ativação; cliques no CTA; tempo em landing
- **Comece por aqui:** `/pipeline:p_ux_demo --style LIQUIDGLASS --duration 20` — *Demo de 20s do fluxo de checkout, estilo LIQUIDGLASS, 16:9 e 9:16.*

### PERFIL 11: Imobiliário, Arquitetura e Hospitalidade
- **Para quem:** Corretores, incorporadoras, hotéis e pousadas
- **Specs:** Drone suave · Steadicam · Golden/Blue hour · Verticais retas
- **Dores resolvidas:** Vídeo de imóvel escuro, torto e sem narrativa de espaço.
- **DNA técnico:** Verticais corrigidas, FOV 84–94° em interiores, hora azul com luz interna, Steadicam por portas, sem janelas estouradas.
- **Skills-chave:** 14 Real Estate, 20 Técnicas de Câmera Física e Digital, 25 Pós-Produção e Emulação Química (Darkroom + LUT), 26 Áudio Multimodal e Foley Síncrono (SCELA), 13 Product Ad, 29 Calendário Editorial e Distribuição Multi-Plataforma, 46 Direção de Imagem (T2I / I2I / Multi-Referência)
- **Estilos Visual DNA recomendados:** **KEYNOTE** — Keynote Minimal Product Film — Macro Precision on Seamless Background; **WES** — Wes Anderson — Planimetric Pastel (Grand Budapest / Moonrise Kingdom); **GHIBLI** — Studio Ghibli — Hayao Miyazaki Watercolor Pastoral; **VILLENEUVE** — Denis Villeneuve — Monolithic Fog Brutalism (Dune / Blade Runner 2049)
- **Motores preferidos:** `veo_3_1`, `kling_3_0`, `flux_2`
- **Pipeline padrão:** `p_real_estate_tour` — Tour Imobiliário (16:9, ~60s)
- **Entregáveis:** tour 45–75s; reels 9:16; fotos do empreendimento; teaser de lançamento
- **KPIs:** visitas agendadas; tempo de venda; leads qualificados
- **Comece por aqui:** `/pipeline:p_real_estate_tour --style KEYNOTE --duration 60` — *Tour de cobertura duplex em hora azul, Steadicam, estilo KEYNOTE.*

### PERFIL 12: Cineastas, Roteiristas e Diretores
- **Para quem:** Curtas, séries, pré-vis e festivais de cinema com IA
- **Specs:** Master Scenes · Storyboard · Hero Frame First · Atuação sintética · Festival
- **Dores resolvidas:** Consistência de personagem e luz entre tomadas; atuação 'de banco de imagens'.
- **DNA técnico:** Story bible, storyboard com FOV em graus, Character Sheet + PuLID/Soul ID, ACTING PROFILE, Darkroom, SCELA.
- **Skills-chave:** 47 Arquiteto de História (Premissa, Estrutura e Bíblia de Mundo), 21 Roteirização em Master Scenes, 48 Storyboard, Shot List e Animatic (Pré-Vis), 52 Bíblia de Pré-Produção (Moodboard, Style Bible, Cronograma e Orçamento), 19 Direção de Cinema Digital (Higgsfield / ComfyUI), 20 Técnicas de Câmera Física e Digital, 22 Consistent Characters (Identidade Visual), 23 Character Sheet (Do Rascunho à Apresentação), 24 Direção de Atuação Sintética (Acting Director OS), 26 Áudio Multimodal e Foley Síncrono (SCELA), 25 Pós-Produção e Emulação Química (Darkroom + LUT), 49 Sound Design Bible, Trilha e Direção de Voz, 55 Continuidade e Auditoria de Qualidade (Script Supervisor Sintético), 53 Roteador de Motores e Adaptador de Prompt, 58 Color Grading DNA Engine
- **Estilos Visual DNA recomendados:** **NOIR** — Hollywood Film Noir — Eastman Double-X 5222 (Preto e Branco Clássico); **FINCHER** — David Fincher — Desaturated Precision Thriller (Se7en / Zodiac / The Social Network); **VILLENEUVE** — Denis Villeneuve — Monolithic Fog Brutalism (Dune / Blade Runner 2049); **KUBRICK** — Stanley Kubrick — One-Point Perspective Symmetry (The Shining / 2001); **WONGKARWAI** — Wong Kar-wai — Step-Printed Neon Longing (In the Mood for Love / Chungking Express); **LEONE** — Sergio Leone — Spaghetti Western Extreme Close-Up (Anamorphic Dust); **ANALOGDREAM** — Analog Dream Photography — Flux-Era Warm-Film AI Look (2025–26)
- **Motores preferidos:** `higgsfield`, `seedance_2_5`, `veo_3_1`, `kling_3_0`, `comfyui`
- **Pipeline padrão:** `p_short_film` — Curta-Metragem Sintético (2.39:1, ~300s)
- **Entregáveis:** story bible; storyboard; curta 3–15 min; trailer; dossiê de festival
- **KPIs:** consistência facial; aceitação em festival; custo por minuto
- **Comece por aqui:** `/pipeline:p_short_film --style FINCHER --ratio 2.39:1` — *Curta de 5 min sobre farol abandonado, estilo FINCHER, 2 atores consistentes.*

### PERFIL 13: Música, Artistas e Gravadoras
- **Para quem:** Clipes, visualizers, lyric videos e EPKs
- **Specs:** Cortes no beat · Performance · Narrativa · Visualizer
- **Dores resolvidas:** Sem orçamento de gravadora; clipe que precisa competir com produção grande.
- **DNA técnico:** Sync ao beat, três pilares (performance/história/ambient), letras e style prompt via Suno, visualizer em loop.
- **Skills-chave:** 11 Music Video, 26 Áudio Multimodal e Foley Síncrono (SCELA), 49 Sound Design Bible, Trilha e Direção de Voz, 22 Consistent Characters (Identidade Visual), 25 Pós-Produção e Emulação Química (Darkroom + LUT), 17 Social Hook, 29 Calendário Editorial e Distribuição Multi-Plataforma
- **Estilos Visual DNA recomendados:** **KPOP** — K-Pop Comeback MV Gloss — Cultura Pop Coreana (Seul); **SYNTHWAVE** — Synthwave / Outrun — VHS Retro MTV Anos 80; **WONGKARWAI** — Wong Kar-wai — Step-Printed Neon Longing (In the Mood for Love / Chungking Express); **VAPORWAVE** — Vaporwave — Marble Busts, Pastel Grid, Windows-95 Nostalgia; **SPIDERVERSE** — Spider-Man: Into the Spider-Verse — Comic-Print 3D/2D Hybrid (Sony Pictures Imageworks); **GLITCHCORE** — Glitchcore / Datamosh — Corrupted-Signal Digital Aesthetic; **UFOTABLE** — Dynamic Light-Cel Anime — Ufotable-School VFX-over-2D (2015–2026 modern sakuga)
- **Motores preferidos:** `seedance_2_5`, `kling_3_0`, `suno`, `veo_3_1`
- **Pipeline padrão:** `p_music_video` — Videoclipe / Visualizer (16:9, ~90s)
- **Entregáveis:** clipe; visualizer 8–15s loop; teaser vertical; lyric video
- **KPIs:** views; saves de pré-save; retenção
- **Comece por aqui:** `/pipeline:p_music_video --style SYNTHWAVE --prompt "BPM 118..."` — *Clipe de 90s com 12 cortes no beat, estilo SYNTHWAVE, BPM 118.*

### PERFIL 14: Games, Anime e Quadrinhos
- **Para quem:** Indie devs, webcomics, mangakás e editoras
- **Specs:** Comic-to-Video · Anime · Pixel art · Concept art
- **Dores resolvidas:** Precisa de trailer e teaser com a estética exata da obra.
- **DNA técnico:** Estilos fechados (MIGNOLA, AKIRA, PIXELART…), painéis→plano, Character Sheet, impact frames em 12fps.
- **Skills-chave:** 01 Anime Action, 06 Comic to Video, 22 Consistent Characters (Identidade Visual), 23 Character Sheet (Do Rascunho à Apresentação), 46 Direção de Imagem (T2I / I2I / Multi-Referência), 48 Storyboard, Shot List e Animatic (Pré-Vis), 11 Music Video, 57 DNA Blending Lab (Mistura de Estilos)
- **Estilos Visual DNA recomendados:** **MIGNOLA** — Mike Mignola — Hellboy / Dark Horse Comics; **SINCITY** — Frank Miller — Sin City / Dark Horse Comics (Hardboiled Ink Noir); **MOEBIUS** — Jean Giraud 'Moebius' — Ligne Claire / Heavy Metal / BD Franco-Belga; **AKIRA** — Katsuhiro Otomo — Akira / Neo-Tokyo Cel Cyberpunk (1988); **TRIGGER** — Studio Trigger — Neon Flat-Pop Anime (Kill la Kill / Cyberpunk: Edgerunners); **PIXELART** — 16-Bit Pixel Art JRPG — SNES / Mega Drive Era; **SPIDERVERSE** — Spider-Man: Into the Spider-Verse — Comic-Print 3D/2D Hybrid (Sony Pictures Imageworks); **UFOTABLE** — Dynamic Light-Cel Anime — Ufotable-School VFX-over-2D (2015–2026 modern sakuga); **MAPPA** — Kinetic Fluid Sakuga — Modern Studio Powerhouse Motion (2020s); **WEBTOON** — Vertical Webtoon Flat Color — Korean Digital-Native Comic Motion; **ISEKAI** — Isekai Fantasy Light-Novel Cover — Ornate High-Fantasy Anime Key Visual
- **Motores preferidos:** `seedance_2_0`, `kling_3_0`, `flux_2`, `midjourney`
- **Pipeline padrão:** `p_storyboard_previs` — Storyboard e Pré-Vis (16:9, ~60s)
- **Entregáveis:** trailer de HQ; teaser de jogo; character sheets; loading screen
- **KPIs:** wishlists; leitores novos; retenção do trailer
- **Comece por aqui:** `/pipeline:p_storyboard_previs --style SINCITY` — *Trailer de 30s da HQ noir, estilo SINCITY, painel→plano.*

### PERFIL 15: Documentário, Jornalismo e Canais Faceless
- **Para quem:** Canais dark, história, ciência, true crime, ONGs
- **Specs:** Multishot 2s · [live]/[archive]/[scheme]/[pVFX] · Sem host
- **Dores resolvidas:** Retenção depende só da imagem e do corte; modelos quebram com humanos e diagramas.
- **DNA técnico:** Positive locks, look [live] de meio-dia sem golden hour, diagramas renderizados em código, linha AUDIO verbatim.
- **Skills-chave:** 28 Prompt Engineering Seedance Faceless (Documentário), 21 Roteirização em Master Scenes, 47 Arquiteto de História (Premissa, Estrutura e Bíblia de Mundo), 26 Áudio Multimodal e Foley Síncrono (SCELA), 49 Sound Design Bible, Trilha e Direção de Voz, 30 Análise Pós-Publicação e Iteração de Dados, 29 Calendário Editorial e Distribuição Multi-Plataforma, 31 Localização e Adaptação Cultural Multi-Idioma
- **Estilos Visual DNA recomendados:** **TRUECRIME** — Faceless True-Crime Documentary — Cold Dossier Look; **DOCREAL** — Documentary Photoreal — Cinéma Vérité / National Geographic Realism; **PLANETEARTH** — BBC Natural History — Planet Earth Ultra-Long-Lens Wildlife; **NOIR** — Hollywood Film Noir — Eastman Double-X 5222 (Preto e Branco Clássico); **DREAMCORE** — Dreamcore / Liminal Space — Uncanny Empty-Place Surrealism; **BIOLUMINESCENT** — Bioluminescent Biopunk — Living-Light Organic Sci-Fi
- **Motores preferidos:** `seedance_2_5`, `veo_3_1`, `kling_3_0`, `elevenlabs`
- **Pipeline padrão:** `p_faceless_doc` — Documentário Faceless Multishot (16:9, ~480s)
- **Entregáveis:** bloco de 10s multishot; roteiro 145 wpm; cards de diagrama; versões PT/EN/ES
- **KPIs:** retenção por minuto; CTR; watch time
- **Comece por aqui:** `/pipeline:p_faceless_doc --style TRUECRIME --duration 480` — *Documentário de 8 min sobre um farol, 5 shots por bloco de 10s, estilo TRUECRIME.*

### PERFIL 16: Artistas Visuais, Museus e Instituições Culturais
- **Para quem:** Curadoria, instalações, acervos e campanhas culturais
- **Specs:** Estilos históricos · Xilogravura · Art Déco · Narrativa cultural
- **Dores resolvidas:** Comunicar acervo/obra com respeito ao estilo sem copiar obras específicas.
- **DNA técnico:** Estilos como DNA técnico (UKIYOE, ARTDECO, MOEBIUS…), non-IP, proveniência, legendas acessíveis, localização cultural.
- **Skills-chave:** 45 Análise de Imagem e Engenharia Reversa de Prompt, 46 Direção de Imagem (T2I / I2I / Multi-Referência), 47 Arquiteto de História (Premissa, Estrutura e Bíblia de Mundo), 52 Bíblia de Pré-Produção (Moodboard, Style Bible, Cronograma e Orçamento), 56 Compliance, IP e Proveniência, 31 Localização e Adaptação Cultural Multi-Idioma, 50 Estúdio Educacional (Aula, Explainer, EdTech), 57 DNA Blending Lab (Mistura de Estilos)
- **Estilos Visual DNA recomendados:** **UKIYOE** — Ukiyo-e Woodblock — Hokusai / Hiroshige Edo Print Motion; **ARTDECO** — Art Deco Luxury — Gatsby-Era Geometric Gold (Cassandre Poster Motion); **MOEBIUS** — Jean Giraud 'Moebius' — Ligne Claire / Heavy Metal / BD Franco-Belga; **PAPERCUT** — Paper Cut-Out Diorama — Layered Paper Craft (Kirigami Motion); **GHIBLI** — Studio Ghibli — Hayao Miyazaki Watercolor Pastoral; **GHIBLIPUNK** — Ghiblipunk — Watercolor-Pastoral × Neon-Cyberpunk Blend (v3.2 mix recipe)
- **Motores preferidos:** `midjourney`, `flux_2`, `gpt_image_2`, `kling_3_0`
- **Pipeline padrão:** `p_still_campaign` — Campanha de Imagens / Thumbnails (16:9, ~0s)
- **Entregáveis:** vídeo de exposição; loop de instalação; campanha de abertura; versões acessíveis
- **KPIs:** visitas; engajamento; menções
- **Comece por aqui:** `/pipeline:p_still_campaign --style UKIYOE` — *Loop de 20s para exposição, estilo UKIYOE, ondas em camadas.*

### PERFIL 17: Animação Independente, Anime e Webtoon
- **Para quem:** Estúdios indie, animadores solo, autores de webtoon/manhwa, VTubers e criadores de light novel/game
- **Specs:** Anime moderno · Webtoon vertical · Key visual · Sakuga controlado · Misturas 2D/3D
- **Dores resolvidas:** Estilo de anime 'genérico de IA'; perda de linha e cor entre planos; dificuldade de misturar 2D e 3D sem parecer colagem.
- **DNA técnico:** Cel + luz CG por camada (UFOTABLE), climax em 24fps e resto em 12fps (MAPPA), painel vertical (WEBTOON), key visual heroico (ISEKAI), Hero Frame no estilo antes de animar, Character Sheet e paleta HEX travada.
- **Skills-chave:** 01 Anime Action, 06 Comic to Video, 22 Consistent Characters (Identidade Visual), 23 Character Sheet (Do Rascunho à Apresentação), 46 Direção de Imagem (T2I / I2I / Multi-Referência), 48 Storyboard, Shot List e Animatic (Pré-Vis), 57 DNA Blending Lab (Mistura de Estilos), 58 Color Grading DNA Engine, 11 Music Video
- **Estilos Visual DNA recomendados:** **UFOTABLE** — Dynamic Light-Cel Anime — Ufotable-School VFX-over-2D (2015–2026 modern sakuga); **MAPPA** — Kinetic Fluid Sakuga — Modern Studio Powerhouse Motion (2020s); **WEBTOON** — Vertical Webtoon Flat Color — Korean Digital-Native Comic Motion; **ISEKAI** — Isekai Fantasy Light-Novel Cover — Ornate High-Fantasy Anime Key Visual; **AKIRA** — Katsuhiro Otomo — Akira / Neo-Tokyo Cel Cyberpunk (1988); **SHINKAI** — Makoto Shinkai — Luminous Sky Anime (Your Name / Weathering With You); **TRIGGER** — Studio Trigger — Neon Flat-Pop Anime (Kill la Kill / Cyberpunk: Edgerunners); **GHIBLIPUNK** — Ghiblipunk — Watercolor-Pastoral × Neon-Cyberpunk Blend (v3.2 mix recipe)
- **Motores preferidos:** `seedance_2_5`, `kling_3_0`, `nano_banana`, `flux_2`, `wan_2_x`
- **Pipeline padrão:** `p_storyboard_previs` — Storyboard e Pré-Vis (16:9, ~60s)
- **Entregáveis:** teaser/trailer 30–60s; key visual; character sheet; loop vertical de webtoon; abertura 90s
- **KPIs:** retenção do trailer; seguidores novos; wishlists/leitores; consistência de personagem
- **Comece por aqui:** `/pipeline:p_storyboard_previs --style UFOTABLE --ratio 16:9` — *Teaser de 30s de fantasia com espadachim, estilo UFOTABLE, climax em 24fps e resto em 12fps.*

### PERFIL 18: Direção de Arte e Assinatura Visual
- **Para quem:** Diretores de arte, estúdios e criadores que querem um look próprio e reconhecível (marca-estilo)
- **Specs:** DNA Blend 70/30 · Color Grading DNA · Style Bible · Receitas de mistura
- **Dores resolvidas:** Todo mundo usa os mesmos estilos famosos; resultado sem assinatura; cor e grade mudam de post para post.
- **DNA técnico:** 1 base + 1 acento isolado (Skill 57), cartão de color grading com números (Skill 58), 3 stills aprovados antes de animar, registro no style bible (Skill 52).
- **Skills-chave:** 45 Análise de Imagem e Engenharia Reversa de Prompt, 46 Direção de Imagem (T2I / I2I / Multi-Referência), 52 Bíblia de Pré-Produção (Moodboard, Style Bible, Cronograma e Orçamento), 53 Roteador de Motores e Adaptador de Prompt, 55 Continuidade e Auditoria de Qualidade (Script Supervisor Sintético), 57 DNA Blending Lab (Mistura de Estilos), 58 Color Grading DNA Engine, 25 Pós-Produção e Emulação Química (Darkroom + LUT)
- **Estilos Visual DNA recomendados:** **GHIBLIPUNK** — Ghiblipunk — Watercolor-Pastoral × Neon-Cyberpunk Blend (v3.2 mix recipe); **GLASSNOIR** — Glass Noir — Liquid-Glass UI × Hollywood Film Noir Blend (v3.2 mix recipe); **ANALOGDREAM** — Analog Dream Photography — Flux-Era Warm-Film AI Look (2025–26); **LIQUIDMETAL** — Liquid Metal Morph — Reflective Fluid-Chrome Transformation (2026 AI-video signature look); **DREAMCORE** — Dreamcore / Liminal Space — Uncanny Empty-Place Surrealism; **BIOLUMINESCENT** — Bioluminescent Biopunk — Living-Light Organic Sci-Fi
- **Motores preferidos:** `flux_2`, `nano_banana`, `midjourney`, `seedance_2_5`, `higgsfield`
- **Pipeline padrão:** `p_signature_style` — Assinatura Visual (DNA Blend + Color Grade) — v3.2 (16:9, ~0s)
- **Entregáveis:** blend_style.json; color_grading_card.json; 3 hero frames de teste; style bible atualizada
- **KPIs:** reconhecimento do look; consistência entre peças; aprovação na 1ª rodada
- **Comece por aqui:** `/blend:NOIR+LIQUIDGLASS --weights 70/30` — *Crie o estilo-assinatura de uma marca de relógios: base NOIR 70% + acento LIQUIDGLASS 30% num único vidro.*

## Regras comuns a todos os perfis
- **FOV em graus**, obturador 180°, positive-only, Hero Frame First (BaseSkill §2).
- **Cor com números:** todo estilo traz `color_grading` (saturação 0–100, tint de sombra/realce, grão, LUT). Nunca "cinematic color grade".
- **Exatamente 3 hashtags** (o rótulo de divulgação `#publi` não conta); safe zones 12%/15% em 9:16; recomposição, não crop.
- **Non-IP por padrão** e consentimento de rosto/voz (Skill 56, G8) antes de publicar.
- **Modo Marca (G9):** marca ou produto real só por opt-in, com 5 perguntas, divulgação e foto oficial de referência. Os perfis 01, 04, 08 e 09 são os que mais usam. Ver `BaseSkill.md` §7.
- **Mistura de estilos:** no máximo 1 base + 1 acento (Skill 57). Os perfis 06, 14, 16, 17 e 18 são os que mais usam.
- Estilos com nomes de artistas/estúdios são âncoras culturais de DNA visual (traços técnicos), não licença para reproduzir personagens, logotipos, cenas ou trade dress. Em uso comercial, prefira os campos dna_tags/prompt_core (traços) a nomes próprios, mantenha IP LOCK e revise com a Skill 56.

*Gerado a partir do JSON v3.2.0-cinema-os · 2026-09-27 · Daniel Rodrigues · Draft Creative Studio*

---

# CineOS 3.2 — new profiles (19–22) and upgrades

## PERFIL 19: Directors of Photography & Cinematography Planners
**Who:** DoPs, gaffers, camera operators and directors who need shot logic, lighting plans and lens/FOV decisions that translate to AI and real sets  
**Specs:** Cinematography Director · Cinematic Grammar · Camera tokens · Light tokens · Shot DNA  
**Pains:** Generic 'cinematic' prompts; no reason behind lens, movement or light; shots that don't cut together.  
**DNA:** Every choice has a 'why' (Skill 60); coverage built from grammar (Skill 59); numbers not adjectives; one dominant light and one camera device per shot.  
**Skills:** 20, 59, 60, 48, 66, 70  
**Styles:** PRECISIONTHRILLER, SLOWCINEMA, CINEMANOVO, BRUTALISTSCIFI  
**Engines:** veo_3_1, kling_3_0, seedance_2_5, flux_2  
**Pipeline:** `p_cinema_audit_polish`  
**Deliverables:** cinematography_plan.md, shot_rationale.json, lighting diagrams, shot_dna.json  
**KPIs:** shots approved first pass, coverage completeness, cut-ability score  
**Quick start:** `/camera:design --style PRECISIONTHRILLER` — Design the coverage for a two-person interrogation scene with one practical lamp and a window.

## PERFIL 20: Editors, Colorists, VFX & Post Supervisors
**Who:** Editors and colorists using Premiere, After Effects, DaVinci Resolve, CapCut, Photoshop and Blender who receive AI-generated material and must finish it professionally  
**Specs:** Edit Engine · Software Workflow Bridge · Color Grading DNA · Darkroom · Artifact Detector  
**Pains:** Mismatched color spaces, AI artifacts, no handles, shots that don't cut, inconsistent grade between generators.  
**DNA:** Color-managed handoff, cut-by-cut critique, artifact triage before grading, one grade authority (Resolve) and one compositing authority (After Effects / Blender).  
**Skills:** 25, 58, 63, 69, 71, 62  
**Styles:** ANALOGDREAM, SERTAOBLEACH, TROPICALNOIR, PRECISIONTHRILLER  
**Engines:** topaz_video_ai, magnific, adobe_firefly, comfyui  
**Pipeline:** `p_post_finishing`  
**Deliverables:** handoff_plan.md, edit_decision_list.md, artifact_report.json, color_grading_card.json  
**KPIs:** cuts rated GOOD, artifact FAIL count, delivery acceptance on first review  
**Quick start:** `/cinema:finish --grade ANALOGDREAM` — Take 24 AI clips from three generators, unify the look in Resolve, and give me the Premiere handoff plan.

## PERFIL 21: AI Film Producers, Showrunners & Micro-Drama Studios
**Who:** Producers running series, vertical micro-dramas and multi-episode AI productions with recurring casts  
**Specs:** Series bible · Continuity Graph · Model Intelligence · Production Learning Loop · Vertical safe zones  
**Pains:** Identity drift across episodes, cost overruns from retries, no systematic knowledge of which engine works.  
**DNA:** One project bible, one asset graph, measured engine performance, batch production with surgical polish.  
**Skills:** 75, 65, 70, 67, 74, 22  
**Styles:** VERTICALDRAMA, TROPICALNOIR, SOLARPUNK, CINEMANOVO  
**Engines:** kling_3_0, veo_3_1, seedance_2_5, higgsfield  
**Pipeline:** `p_micro_drama_series`  
**Deliverables:** series_bible.md, episode_grid.json, asset_graph.json, production_memory.json  
**KPIs:** retries per approved shot, identity consistency, episode completion rate  
**Quick start:** `/project:init --format series --ratio 9:16` — Start a 20-episode vertical thriller series in Brasília with three recurring characters.

## PERFIL 22: Screenwriters, Development & Pitch Teams
**Who:** Writers, producers and directors who must turn an idea into a screenplay, treatment, lookbook, pitch deck and storyboard  
**Specs:** Deliverables Studio · Story Architect · Reference Intelligence · Cinematic Grammar  
**Pains:** Strong idea, weak package; decks without visual thesis; scripts that do not translate into shots.  
**DNA:** Story first (47), script (21), grammar (59), then a visual lookbook from references (68) and professional PDF/PPTX/XLSX outputs (72).  
**Skills:** 47, 21, 59, 68, 72, 48  
**Styles:** SLOWCINEMA, CINEMANOVO, PRECISIONTHRILLER, BRUTALISTSCIFI  
**Engines:** claude, nano_banana, flux_2, midjourney  
**Pipeline:** `p_screenplay_package`  
**Deliverables:** screenplay.pdf, logline + one-sheet, treatment, pitch_deck.pptx, storyboard.pdf  
**KPIs:** pitch meeting requests, script-to-shot translation, revision rounds  
**Quick start:** `/story:develop` — Turn this premise into a logline, 5-page treatment, lookbook and an 8-slide pitch deck.

## Existing profiles that gained 3.2 skills

| Profile | Added skills |
|---|---|
| PERFIL 02 Designers, Motion Designers e Editores | 69, 71, 63 |
| PERFIL 03 Agências, Freelancers e Produtoras | 65, 64, 72 |
| PERFIL 06 Curiosos Avançados em IA Criativa | 59, 60, 65, 64, 67 |
| PERFIL 12 Cineastas, Roteiristas e Diretores | 59, 60, 61, 65, 70, 72, 64 |
| PERFIL 13 Música, Artistas e Gravadoras | 62, 69 |
| PERFIL 14 Games, Anime e Quadrinhos | 59, 75 |
| PERFIL 15 Documentário, Jornalismo e Canais Faceless | 62, 68 |
| PERFIL 18 Direção de Arte e Assinatura Visual | 68, 65 |

