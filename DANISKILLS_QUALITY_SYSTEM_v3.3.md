# Daniskills 3.3 — Hardness, Anti-Slop & Smart Sharpening

## Objetivo

Daniskills 3.3 aplica um único sistema de qualidade a **imagem, áudio, vídeo, roteiro e texto**. O sistema não tenta parecer inteligente: ele toma decisões técnicas, detecta formulações genéricas, resolve lacunas e entrega instruções executáveis.

Princípio central:

**INTENÇÃO → HARDNESS → SHOT/TASK DNA → SMART SHARPEN → ENGINE ADAPTER → GERAÇÃO → QA → POST SHARPEN → ENTREGA**

## 1. Hardness

Hardness é o agente interno de direção e controle de qualidade.

Ele:
- identifica a intenção real;
- separa requisito de adjetivo;
- encontra ambiguidades que afetam o resultado;
- transforma desejo abstrato em decisões observáveis;
- escolhe o nível de especificidade adequado à modalidade;
- devolve um plano executável antes da geração.

Hardness não adiciona complexidade por vaidade. Se um detalhe não muda o resultado, ele é descartado.

### Loop

`DETECT → CLASSIFY → LOCALIZE → SHARPEN → REGENERATE`

A regeneração é cirúrgica: se um shot, trecho, camada ou bloco falha, somente esse bloco retorna ao ciclo.

## 2. Anti-Slop

AI Slop é conteúdo que parece produzido por fórmula: genérico, intercambiável, excessivamente adjetivado, tecnicamente incoerente, sem comportamento observável ou sem identidade.

### Imagem
Detectar:
- composição genérica;
- iluminação sem causa;
- excesso de adjetivos;
- textura plástica;
- profundidade artificial sem geometria;
- estética de banco de imagens;
- detalhes decorativos sem função.

### Vídeo
Detectar:
- câmera sem motivação;
- movimento acumulado;
- ação sem timing;
- física incoerente;
- cortes sem função;
- continuidade fraca;
- “cinematic” usado como substituto de direção.

### Áudio
Detectar:
- música genérica de trailer;
- SFX sem perspectiva;
- voz sem distância ou acústica;
- dinâmica excessivamente uniforme;
- excesso de compressão;
- silêncio inexistente;
- paisagem sonora sem relação espacial.

### Roteiro e texto
Detectar:
- abertura formulaica;
- frases que poderiam pertencer a qualquer marca;
- repetição de estrutura;
- adjetivação promocional;
- abstração sem ação;
- conclusões previsíveis;
- voz institucional quando a tarefa pede voz humana.

Anti-Slop **não significa adicionar erros artificiais**. Humanidade vem de intenção, contexto, comportamento, ritmo, escolhas lexicais e especificidade.

## 3. Smart Sharpen

Smart Sharpen é a etapa de resolução técnica executada por código antes do prompt ou artefato final.

### Para imagem
Quando relevante, resolver:
- sujeito e hierarquia visual;
- posição e escala;
- distância de câmera;
- FOV em graus;
- perspectiva;
- profundidade;
- fonte dominante de luz;
- Kelvin;
- relação de contraste;
- materialidade;
- paleta e HEX;
- textura;
- destino e proporção.

### Para vídeo
Resolver:
- duração;
- fps;
- 180° shutter por padrão;
- FOV em graus;
- posição e altura da câmera;
- movimento e velocidade;
- motivação física;
- ação por beat;
- continuidade;
- luz e Kelvin;
- áudio diegético;
- ritmo e ponto de corte.

### Para áudio
Resolver:
- fonte;
- distância;
- perspectiva;
- ambiente;
- reverberação;
- dinâmica;
- faixa de frequência;
- transientes;
- relação voz/música/ambiente;
- silêncio;
- duração e ritmo.

### Para roteiro/texto
Resolver:
- público;
- objetivo;
- voz;
- contexto;
- informação verificável;
- estrutura;
- ritmo;
- extensão;
- exemplos concretos;
- palavras e construções que soam artificiais.

## 4. Leis de prompt

1. FOV sempre em graus.
2. Kelvin sempre que a luz/WB for relevante.
3. 180° shutter como padrão de movimento natural.
4. Positive-only: declarar o que deve existir.
5. Um dispositivo de câmera dominante por shot curto.
6. Toda escolha importante precisa de função.
7. Adjetivo vazio não substitui parâmetro.
8. Não usar “ultra realistic”, “hyper realistic”, “8K”, “masterpiece”, “stunning”, “epic”, “cinematic”, “highly detailed” ou equivalentes como solução técnica.
9. Marcas reais entram somente por Brand Mode G9.
10. Rostos e vozes reais exigem consentimento.
11. Prompts de engine são compilados a partir da intenção; não se escreve intenção diretamente no dialeto de uma engine.
12. A saída deve ser curta o suficiente para ser usada e específica o suficiente para produzir.

## 5. AntiSlopScore

Escala 0–100:

| Dimensão | Peso |
|---|---:|
| Especificidade | 20 |
| Originalidade | 20 |
| Coerência técnica | 15 |
| Humanidade / comportamento | 15 |
| Materialidade / textura | 10 |
| Ritmo / edição | 10 |
| Ausência de clichês generativos | 10 |

Faixas implementadas:
- **90–100:** PASS
- **80–89:** POLISH — requer revisão; entrega bloqueada por padrão.
- **0–79:** REGENERATE — exige correção localizada; entrega bloqueada por padrão.
- **dados insuficientes ou entrada vazia:** UNASSESSED — não atribuir score artificial; solicitar material antes de avaliar.

O Quality Loop e o gate de entrega usam essas mesmas faixas. `REGENERATE` só pode ser entregue com uma exceção explícita e justificada; `UNASSESSED` exige avaliação ou aceitação explícita da política. O score é um instrumento de QA, não uma promessa de qualidade objetiva. A implementação usa heurísticas determinísticas baseadas em evidências observáveis; ela não entende semanticamente a cena. O QA também sinaliza conflitos explícitos detectáveis por regra, incluindo FOV informado em mm em vez de graus e múltiplos ângulos de obturador no mesmo shot sem separação por plano; esses conflitos reduzem o crédito técnico e podem bloquear a entrega. Para `ShotSpec`, timestamps de `acting_beats` em segundos (`2s`, `2.5`) ou relógio (`00:02`) são comparados com `duration_s`; beats fora da duração ou fora de ordem geram erro e forçam `REGENERATE` no gate de entrega. Notação de tempo não reconhecida é ignorada pela heurística e permanece para revisão humana. Palavras-chave isoladas não devem garantir `PASS`: especificidade e originalidade dependem de combinações de sujeito/fonte, ação observável, contexto, restrições, causalidade, materialidade e estrutura temporal. A evidência técnica é avaliada conforme a modalidade (imagem, vídeo, áudio, texto ou roteiro).

## 6. Post Sharpen

Geração não é acabamento.

Para imagem/foto:
- upscale controlado;
- recuperação de microcontraste;
- redução de artefatos;
- reconstrução seletiva de textura;
- proteção de pele e bordas;
- revisão de halos.

Para vídeo:
- recuperação temporal;
- upscale;
- redução de ruído/artefatos;
- preservação de movimento;
- revisão de bordas e pele;
- grain depois do upscale quando o look pedir.

Para texto/roteiro:
- segunda leitura;
- remoção de repetição;
- corte de abstrações;
- preservação da voz;
- checagem factual quando houver fontes.

Ferramentas de pós são recomendadas por função e destino, não por marca: upscale, deartifact, sharpen, denoise, grain, color e finishing.

## 7. Nitidex

Nitidex mede clareza de presença, não “beleza”:

**clareza × especificidade × identidade × ritmo × contraste × retenção**

Uma peça forte é reconhecível pelo que faz, não por afirmar que é premium.

## 8. Quality Loop

`INTENT → HARDNESS → ANTI-SLOP → SMART SHARPEN → GENERATE → ARTIFACT QA → CONTINUITY QA → POST SHARPEN → FINAL QA`

Nunca regenerar um projeto inteiro por uma falha localizada.

### Integração automática no compilador

O Quality Loop roda automaticamente em `compilePrompt()` e `compileShot()` após a composição do prompt. O compilador acrescenta avisos `QUALITY_LOOP`, `QUALITY` e `QUALITY_FIX`, com score, achados e correções sugeridas. Se o status for `REGENERATE`, o aviso pede revisão localizada do prompt/shot.

**Entrega com enforcement:** `compilePrompt()` continua sendo o modo de composição/diagnóstico. Para aplicar o bloqueio, use `compilePromptForDelivery(req, policy)` para prompts e `compileShotForDelivery(shot, engineId, policy)` para shots. `PASS` libera; `POLISH` só libera com `allowPolish: true` ou uma justificativa de exceção; `REGENERATE` bloqueia até revisão, salvo exceção justificada; `UNASSESSED` bloqueia por padrão e exige avaliação ou exceção explícita. `assertDeliverable()` lança `QUALITY_GATE_BLOCKED` quando a política não autoriza a entrega. Registre e audite qualquer exceção no sistema que orquestra a produção. `UNASSESSED` significa evidência insuficiente, nunca score baixo.

## 9. Saída esperada

Quando aplicável, Daniskills deve devolver:
- modalidade;
- decisão principal;
- prompt ou especificação pronta;
- parâmetros técnicos;
- riscos detectados;
- correções;
- plano de pós;
- AntiSlopScore ou `UNASSESSED`.

A linguagem deve ser objetiva. Não repetir que “Daniskills é uma IA” nem fazer propaganda do próprio sistema.

**Precisão antes de volume. Decisão antes de adjetivo. Humanidade antes de fórmula. Qualidade antes de resolução. Pós-produção antes de considerar a geração final.**

Credits: Daniel Rodrigues.
