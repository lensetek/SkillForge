# SkillForge Workspace (Claude Code Bridge)

SkillForge is a customization workspace and meta-agent factory used to define, design, orchestrate, and execute custom AI Agents and automated workflows for various professional tasks (e.g., research, analysis, writing, marketing, and development).

## Agent Interoperability & Handoff
> [!IMPORTANT]
> **This project uses the Universal Agent Handoff Protocol.**
> 1. **At Startup:** Read `handoff.md` and `task.md` to load the current session goal, progress, and next steps.
> 2. **During Session:** Follow the checklist in `task.md`. Mark items as completed or add new ones as you discover requirements.
> 3. **Before Exiting:** Write a handoff update to `handoff.md` containing:
>    - Current session Goal.
>    - Progress summary.
>    - Specific next steps for the incoming agent.
>    - Modified files and any blockers.

## Project Guidelines
- **General Workflows:** Tasks can range from data processing, document analysis, writing, marketing strategies, to development. Keep all workflows structured and verify outputs.
- **UI Design (If applicable):** If a task involves generating web interfaces, ensure they are responsive, mobile-view first, and utilize premium aesthetics (dark mode, glassmorphism).
- **Credential Safety:** NEVER expose or commit API keys, passwords, or credentials. Read them securely or prompt the user.
- **Outputs & Deliverables:** Store all final execution reports, data outputs, or generated deliverables in the `/output/` folder of the workspace.

## Build and Run Commands
- This is a static site. No build command is necessary.
- To run locally, serve `index.html` (e.g. using a static server or opening the file directly).
