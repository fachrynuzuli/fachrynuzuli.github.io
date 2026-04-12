# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## What this repo is
This repository is a **Claude Code skill** implemented entirely as Markdown.

The "runtime" artifact is `SKILL.md`: Claude Code reads the YAML frontmatter (metadata + allowed tools) and the prompt/instructions that follow.

`README.md` is for humans: installation, usage, and a compact overview of the skill.

## Key files (and how they relate)
- `SKILL.md`
  - The actual skill definition.
  - Starts with YAML frontmatter (`---` … `---`) containing `name`, `version`, `description`, and `allowed-tools`.
  - After the frontmatter: the Shareability Engine (3 triggers), rewrite patterns, Voice DNA rules, anti-AI writing patterns, process, output format, and a full worked example.
- `README.md`
  - Installation and usage instructions.
  - Contains summarized tables for triggers, patterns, and Voice DNA highlights.
  - Version history and attribution.

When changing behavior/content, treat `SKILL.md` as the source of truth, and update `README.md` to stay consistent.

## Common commands
### Install the skill into Claude Code
Recommended (clone directly into Claude Code skills directory):
```bash
mkdir -p ~/.claude/skills
git clone https://github.com/fachrynuzuli/sharemaxxing.git ~/.claude/skills/sharemaxxing
```

Manual install/update (only the skill file):
```bash
mkdir -p ~/.claude/skills/sharemaxxing
cp SKILL.md ~/.claude/skills/sharemaxxing/
```

## How to "run" it (Claude Code)
Invoke the skill:
- `/sharemaxxing` then paste your draft
- Or: "Sharemaxx this post: [draft]"

## Making changes safely
### Versioning (keep in sync)
- `SKILL.md` has a `version:` field in its YAML frontmatter.
- `README.md` has a "Version History" section.

If you bump the version, update both.

### Editing `SKILL.md`
- Preserve valid YAML frontmatter formatting and indentation.
- The Shareability Engine section (3 triggers) is the conceptual core. Changes there cascade to examples and README.
- Voice DNA and Banned Phrases are strict rulesets. Adding/removing items requires updating both `SKILL.md` and `README.md`.

### Documenting non-obvious fixes
If you change the prompt to handle a tricky failure mode (e.g., a rewrite that still triggers a banned phrase pattern, or a trigger that consistently misfires), add a short note to `README.md`'s version history describing what was fixed and why.

## Author
[Fachry Nuzuli Kamal](https://github.com/fachrynuzuli)
