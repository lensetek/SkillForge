# SkillForge

[Bahasa Indonesia](#bahasa-indonesia) | [English](#english)

---

## Bahasa Indonesia

SkillForge adalah framework kustomisasi workspace yang dirancang untuk membangun, mengelola, dan mengoordinasikan Sub-Agent AI personal dan skill modular. Framework ini berfungsi sebagai pondasi untuk menghasilkan alur kerja agen yang bersifat platform-agnostic (independen platform).

### Fitur

- **Agent Forge (Meta-Agent):** Agen analis sistem yang mewawancarai pengguna untuk menerjemahkan permintaan samar menjadi ekosistem sub-agent kustom.
- **Memori User Profile:** Pembelajaran dinamis terhadap preferensi pengguna, menyimpan konteks secara lokal untuk mempersonalisasi interaksi selanjutnya.
- **Auto Update:** Integrasi bawaan dengan Git untuk secara otomatis mendeteksi dan memperbarui skill agen agar tetap sinkron.
- **Dukungan Multi-Bahasa:** Dokumentasi dan antarmuka landing page dalam dua bahasa secara langsung.

### Struktur Direktori

```
SkillForge/
├── .agents/
│   └── skills/
│       ├── agent-forge/       # Meta-Agent Architect
│       ├── user-profile/      # Personalisasi & memori
│       └── auto-update/       # Sinkronisasi Git
├── index.html                 # Landing Page Multi-bahasa
├── style.css                  # Desain responsif premium
├── script.js                  # Logika landing page & pergantian bahasa
└── README.md                  # Dokumentasi 2 Bahasa (file ini)
```

### Yang Baru (What's New)

#### Versi 1.0.0 (4 Juli 2026)
- **Rilis Awal:** Meluncurkan pondasi utama SkillForge.
- **Meta-Agent Architect:** Membuat skill `agent-forge` untuk merancang sub-agent dan skill secara interaktif.
- **Memori & Pembaruan Inti:** Menambahkan `user-profile` untuk pembelajaran pengguna secara dinamis dan `auto-update` untuk sinkronisasi otomatis menggunakan Git.
- **Dokumentasi & UI:** Menambahkan dokumentasi satu file dalam 2 bahasa, serta antarmuka landing page yang responsif.

### Memulai

1. Atur Workspace AI Anda untuk mengarah ke direktori ini.
2. Agen akan otomatis mendeteksi dan memuat skill dari folder `.agents`.
3. Panggil `agent-forge` untuk mulai merancang alur kerja baru Anda.

---

## English

SkillForge is a workspace customization framework designed to build, manage, and orchestrate personalized AI Sub-Agents and modular skills. It serves as a foundation for generating platform-agnostic workflows.

### Features

- **Agent Forge (Meta-Agent):** A system analyst agent that interviews users to translate high-level requests into customized sub-agent ecosystems.
- **User Profile Memory:** Dynamic learning of user preferences, storing context locally to personalize subsequent interactions.
- **Auto Update:** Built-in git integration to automatically fetch and pull changes to keep skills synchronized.
- **Multilingual Support:** Multi-language documentation and landing page interfaces out-of-the-box.

### Directory Structure

```
SkillForge/
├── .agents/
│   └── skills/
│       ├── agent-forge/       # The Meta-Agent Architect
│       ├── user-profile/      # Personalization & memory
│       └── auto-update/       # Git-based synchronization
├── index.html                 # Multilingual Landing Page
├── style.css                  # Premium responsive design
├── script.js                  # Landing page logic & toggle
└── README.md                  # Bilingual documentation (this file)
```

### What's New

#### Version 1.0.0 (July 4, 2026)
- **Initial Release:** Launched the SkillForge foundation.
- **Meta-Agent Architect:** Created the `agent-forge` skill to generate sub-agents and skills interactively.
- **Core Memory & Updates:** Added `user-profile` for dynamic user learning and `auto-update` for Git synchronization.
- **Documentation & UI:** Added consolidated bilingual documentation and a responsive landing page interface.

### Getting Started

1. Set up your AI Workspace to point to this directory.
2. The agent will automatically discover and load the skills from the `.agents` root.
3. Call `agent-forge` to start designing new workflows.
