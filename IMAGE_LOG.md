# Image Generation Log — Strathcona Druids RFC

---

### #1 — hero.jpg (Grok, passed first try)
![hero.jpg](images/hero.jpg)
- **Timestamp**: 2026-04-21 13:07
- **Tier**: 1 | **API**: Grok Imagine Standard 2K | **Cost**: $0.02
- **Exec Time**: ~330s (includes HTML build running in parallel)
- **Slot**: Full-width hero background (dark cinematic, 16:9)
- **Prompt**: "Dramatic close-up photograph of strong hands gripping a weathered leather rugby ball against a deep crimson-red cotton jersey, the ball's hand-stitched panels and raised lacing catching warm raking sidelight from a low afternoon sun. Background falls to deep shadow with faint atmospheric haze. Shot on 85mm lens at f/1.8, shallow depth of field focused tight on the laces, low angle looking slightly up. Documentary heritage sports photography feel, warm wine-red and bronze palette with a single bright highlight, subtle 35mm film grain, no visible faces, cinematic mood, editorial magazine quality."
- **Claude Review**: Use Case 9/10 | Prompt Accuracy 9/10 — strong moody composition, correct warm wine-red + bronze palette, ball is clearly rugby (not football/soccer), dark negative space works perfectly for text overlay
- **Grok QA Review**: Technical 9/10 | Prompt Accuracy 9/10 | Issues: none — "publication-ready"; noted well-rendered hands with no fused digits, correct Gilbert branding and hand-stitched panels, realistic lighting falloff, clean 85mm f/1.8 depth of field simulation, subtle film grain present
- **Attempts**: 1/2
- **Status**: ✓ Used
- **Notes**: Both reviewers agreed image passes. No escalation to Gemini needed. Integrated into hero as background layer beneath dark gradient veil. Deep crimson jersey directly supports brand color mandate.

---

## Total Cost: $0.02
- Grok Standard × 1 = $0.02

---

## Image Accuracy Compliance

Per CLAUDE.md's "Never generate images of the actual business" rule, this hero is **atmospheric filler** — a generic rugby mood shot, not a depiction of the actual Strathcona Druids, their specific clubhouse, Lynn Davies Rugby Park, or any individual player. No real facility, staff, or kit shown.

## Images NOT Generated (by design)

- Lynn Davies Rugby Park photos → hotlinked from Wix CDN (actual club assets)
- Sponsor logos → hotlinked from Wix CDN (real sponsor brand marks)
- Grant cheque photo → hotlinked from Wix CDN (the actual April 8 announcement photo)
- Board portraits → omitted (would require depicting specific individuals, against accuracy rules)

---

## Budget Tracking

| Cap | Limit | Used | Remaining |
|---|---|---|---|
| Per image | $0.30 | $0.02 (hero) | $0.28 |
| Per build | $0.75 | $0.02 | $0.73 |
| QA calls | 15 | 1 | 14 |
| Monthly (all projects) | $10.00 | tracked separately | — |
