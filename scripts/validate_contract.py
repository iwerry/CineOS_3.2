#!/usr/bin/env python3
"""Daniskills 3.3 — validates the ID contract of dani_skills_config.json and the docs.
Usage: python scripts/validate_contract.py [path/to/repo]   (credits: Daniel Rodrigues)"""
import json, os, re, sys
root = sys.argv[1] if len(sys.argv) > 1 else os.path.join(os.path.dirname(__file__), '..')
d = json.load(open(os.path.join(root, 'dani_skills_config.json'), encoding='utf-8'))
ids = lambda k, f='id': {x[f] for x in d[k]}
skill, model, pipe, gate, prof = ids('skills'), ids('models'), ids('pipelines'), ids('gates'), ids('profiles')
alias = {s['alias'] for s in d['styles']}; legacy = {s['legacy_skill_id'] for s in d['styles'] if s.get('legacy_skill_id')}; lut = {l['name'] for l in d['lut_presets']}
errs = []
def chk(cond, msg):
    if not cond: errs.append(msg)
for s in d['skills']:
    for r in s['requires'] + s['feeds']: chk(r in skill, f"{s['id']} -> unknown skill {r}")
for p in d['profiles']:
    for r in p['recommended_skills']: chk(r in skill, f"{p['id']} skill {r}")
    for a in p['default_styles']: chk(a in alias, f"{p['id']} style {a}")
    for m in p['preferred_models']: chk(m in model, f"{p['id']} model {m}")
    chk(p['default_pipeline'] in pipe, f"{p['id']} pipeline {p['default_pipeline']}")
for p in d['pipelines']:
    for g in p['gates']: chk(g in gate, f"{p['id']} gate {g}")
    for st in p['steps']: chk(st['skill'] in skill or st['skill'] == 'STYLE', f"{p['id']} step {st['skill']}")
for r in d['routes']:
    for s in r['primary_skills'] + r['support_skills']: chk(s in skill, f"route {r['id']} skill {s}")
    chk(r['default_pipeline'] is None or r['default_pipeline'] in pipe, f"route {r['id']} pipeline")
    chk(r['gate'] in gate, f"route {r['id']} gate")
for s in d['styles']:
    for m in s['engines']['image'] + s['engines']['video']: chk(m in model, f"style {s['alias']} engine {m}")
for a in d.get('engine_adapters', []): chk(a['engine_id'] in model, f"adapter {a['engine_id']}")
for r in d['tables']['ai_style_mixes']['recipes']:
    chk(r['base'] in alias and r['accent'] in alias, f"mix {r['id']}")
for p in d['tables']['director_profiles']['profiles']:
    for a in p['dna']: chk(a in alias, f"director_profile {p['id']} {a}")
chk(len(d['skills']) == d['system']['skill_count'], 'system.skill_count mismatch')
chk(len(d['styles']) == d['system']['style_count'], 'system.style_count mismatch')
chk(len(d['profiles']) == d['system']['profile_count'], 'system.profile_count mismatch')
chk(len(d['models']) == d['system']['model_count'], 'system.model_count mismatch')
# docs must cite only existing ids
for f in ('BaseSkill.md', 'skills_cinema_pipeline.md', 'profiles_guide.md', 'ARCHITECTURE.md', 'README.md'):
    p = os.path.join(root, f)
    if not os.path.exists(p): continue
    t = open(p, encoding='utf-8').read()
    for m in set(re.findall(r'\bskill_\d{2}\b', t)): chk(m in skill or m in legacy, f"{f} cites {m}")
    for m in set(re.findall(r'`(p_[a-z0-9_]+)`', t)): chk(m in pipe or m in ('p_',), f"{f} cites pipeline {m}")
    for m in set(re.findall(r'\bperfil_\d{2}\b', t)): chk(m in prof, f"{f} cites {m}")
    for m in set(re.findall(r'\bG(\d{1,2})\b', t)): chk(f'G{m}' in gate, f"{f} cites gate G{m}")
if errs:
    print('CONTRACT FAILED'); [print(' -', e) for e in errs if e]; sys.exit(1)
print(f"OK · {len(d['skills'])} skills · {len(d['styles'])} styles · {len(d['models'])} models · {len(d['profiles'])} profiles · {len(d['pipelines'])} pipelines · {len(d['routes'])} routes · {len(d['gates'])} gates")
