---
name: obsidian-vault-manager
description: Manages Obsidian Vault integration, formats Markdown deliverables with YAML frontmatter and Wikilinks, generates Map of Content (MOC) index notes, and extracts task items from Obsidian notes.
---

# Obsidian Vault Manager Skill

The **`obsidian-vault-manager`** skill connects the SkillForge AI Agent ecosystem with Obsidian PKM (Personal Knowledge Management) workflows. It ensures all generated reports, deliverables, and system logs conform to Obsidian Vault standards, maintaining bidirectional links (`[[Note]]`) and graph view readiness.

---

## Capabilities & Workflows

### 1. Generate / Update Map of Content (`build_moc`)
Generates or updates a central Index Note at `output/000_SkillForge_MOC.md` (or at the root of the Obsidian Vault).
- Scans all deliverables in `/output/`.
- Categorizes files by tags and agent skills.
- Includes clickable Wikilinks `[[Document Name]]` and summary metadata.
- Embedded graph references to active sub-agents and active workspace tasks.

### 2. Format & Sanitize Wikilinks (`format_wikilinks`)
Converts standard Markdown relative links into Obsidian Wikilink syntax:
- `[Output Document](output/doc.md)` ➔ `[[doc|Output Document]]` or `[[doc]]`
- Adds default Obsidian YAML Frontmatter Properties if missing:
  ```yaml
  ---
  title: "Document Title"
  created: YYYY-MM-DD
  tags: [skillforge, output]
  agent_skill: skill-name
  ---
  ```

### 3. Extract Obsidian Checklists (`extract_obsidian_tasks`)
- Scans designated Obsidian notes for open checkbox items (`- [ ] Task description`).
- Translates extracted tasks into the central `task.md` file in the workspace so the SkillForge Orchestrator can execute them.

---

## Execution Instructions

When asked to run Obsidian maintenance or integrate new outputs:
1. Ensure all new files in `/output/` have valid Obsidian frontmatter header.
2. Replace any internal link targets with `[[Target]]` syntax.
3. Update `output/000_SkillForge_MOC.md` using the standard MOC template.
