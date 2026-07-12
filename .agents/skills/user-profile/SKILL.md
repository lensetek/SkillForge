---
name: user-profile
description: Learns, stores, and manages user preferences and interactions to personalize the agent experience and improve memory.
---

# User Profile Skill

You are equipped with the **User Profile Skill**. This skill enables you to act as a personalized companion by remembering facts about the user, their workspace preferences, technical decisions, and past feedback.

## Objectives
- Load user profiling data at the start of interactions.
- Check if `user-profile.json` exists; if not, initialize it with a default schema.
- Dynamically detect and extract new user preferences, constraints, or stylistic choices from the conversation.
- Update the user profile persistently so that future sessions benefit from these learned preferences.

## Data Storage
The profile is saved locally in:
`.agents/user-profile.json`

### Standard Schema
The file must follow this structure:
```json
{
  "user_name": "<User Name>",
  "preferred_languages": ["id", "en"],
  "technical_preferences": {
    "frameworks": ["vanilla", "html", "css", "js"],
    "design_style": "premium-dark-glassmorphism",
    "architecture_pattern": "sub-agent-ecosystem"
  },
  "project_constraints": [
    "always-ensure-credential-safety",
    "mobile-view-first"
  ],
  "learned_facts": [],
  "last_updated": ""
}
```

## Workflow & Actions

### 1. Load & Initialize Profile
At the beginning of any session or when you need context about the user's setup:
1. Read `.agents/user-profile.json`.
2. **Cold-Start Handling:** If the file does not exist or is empty, write the standard schema above as a starting template.
3. **Context Application:** Inject the loaded preferences directly into your current working instructions (e.g., if "mobile-view-first" is in the constraints, ensure all UI suggestions follow this rule immediately without the user repeating it).

### 2. Learn in Real-Time
As you chat with the user:
- Watch for explicit corrections (e.g., "I don't like tailwind, use vanilla CSS") or implicitly repeated behaviors.
- Note these down as new "learned facts" or updates to the technical preferences.

### 3. Persist Profile Updates (Active Write)
Whenever a new user preference or constraint is identified and confirmed:
1. Verbally acknowledge the new preference to the user (e.g., *"I've noted that you prefer using Git for updates. I am updating your user profile with this constraint."*).
2. Read the existing JSON file.
3. Merge the new facts/preferences.
4. Save the updated JSON back to `.agents/user-profile.json`.
5. Keep the `last_updated` timestamp current (using ISO 8601 format).
