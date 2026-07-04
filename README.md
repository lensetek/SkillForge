# SkillForge

[Bahasa Indonesia](#bahasa-indonesia) | [English](#english)

---

## Bahasa Indonesia

SkillForge adalah framework kustomisasi workspace yang dirancang untuk membangun, mengelola, dan mengoordinasikan Sub-Agent AI personal dan skill modular. Framework ini berfungsi sebagai pondasi untuk menghasilkan alur kerja agen yang bersifat platform-agnostic (independen platform).

### Fitur

- **Agent Forge (Meta-Agent):** Agen analis sistem yang mewawancarai pengguna untuk menerjemahkan permintaan samar menjadi ekosistem sub-agent kustom.
- **Memori User Profile:** Pembelajaran dinamis terhadap preferensi pengguna, menyimpan konteks secara lokal untuk mempersonalisasi interaksi selanjutnya.
- **Auto Update:** Integrasi bawaan dengan Git untuk secara otomatis mendeteksi dan memperbarui skill agen agar tetap sinkron.
- **Workspace Orchestrator (AGENTS.md):** Pondasi instruksi pusat yang mengotomatisasi inisialisasi profile, pemeriksaan update, dan koordinasi antar sub-agent pada setiap startup sesi.
- **Dukungan Multi-Bahasa:** Dokumentasi dan antarmuka landing page dalam dua bahasa secara langsung.

### Struktur Direktori

```
SkillForge/
├── .agents/
│   ├── skills/
│   │   ├── agent-forge/       # Meta-Agent Architect
│   │   ├── user-profile/      # Personalisasi & memori
│   │   └── auto-update/       # Sinkronisasi Git
│   ├── user-profile.json      # File preferensi memori
│   └── AGENTS.md              # Workspace Orchestrator (Instruksi Utama Agen)
├── output/                    # Direktori standar untuk distribusi paket Agen Mandiri Baru
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

### Memulai & Instalasi

**Opsi 1: Instalasi Manual**
1. Atur Workspace AI Anda untuk mengarah ke direktori ini.
2. Agen akan otomatis mendeteksi dan memuat skill dari folder `.agents`.
3. Panggil `agent-forge` untuk mulai merancang alur kerja baru Anda.

**Opsi 2: Instalasi Otomatis via AI Prompt (Tanpa Git Clone)**
Cukup salin dan tempel instruksi berikut ke AI Agent Anda (seperti Gemini, Claude, atau Cursor):

> "Tolong unduh framework SkillForge dari `https://github.com/lensetek/SkillForge/archive/refs/heads/master.zip`. Jangan gunakan `git clone`. Unduh file zip tersebut, ekstrak isinya ke dalam direktori workspace ini, dan pastikan folder `.agents` terpasang dengan benar sebagai kustomisasi workspace saya. Setelah itu, baca `SKILL.md` dari `agent-forge` untuk memahami peranmu."

### Usecase & Contoh Penggunaan

#### Usecase: Mengubah Keluhan Harian Menjadi Otomatisasi
Anda merasa kewalahan karena setiap hari harus meriset berita teknologi terbaru dan menulis rangkumannya untuk audiens LinkedIn Anda. Ini memakan waktu berjam-jam.

**Langkah demi Langkah (Skenario Percakapan):**
1. **Ceritakan Masalah Anda:** Anda cukup mengeluh atau curhat ke AI Agent utama di workspace ini:
   > *"Saya capek sekali setiap hari harus mencari berita AI terbaru dan menulis rangkumannya untuk LinkedIn. Habis waktu berjam-jam!"*
2. **AI Menganalisis & Merekomendasikan Solusi:** AI Agent Anda menganalisis keluhan tersebut dan menawarkan solusi:
   > *"Saya memahami kendala Anda. Ini adalah masalah riset dan penulisan yang repetitif. Saya merekomendasikan pembuatan sistem otomatis yang terdiri dari dua sub-agent: satu untuk riset berita tepercaya, dan satu untuk menulis draf sesuai gaya bahasa Anda."*
3. **Kolaborasi Cetak Biru (Wawancara):** Agen menjalankan perintah slash `/agent-forge` untuk mewawancarai Anda secara santai guna memperjelas detail cetak biru:
   > *"Apakah Anda ingin rangkuman berita ini bersifat harian atau mingguan? Apa saja sumber berita yang Anda percayai? Dan bagaimana gaya bahasa yang Anda sukai?"*
4. **Instalasi Otomatis:** Setelah Anda menyetujui cetak biru rancangannya, Anda cukup mengetik konfirmasi:
   > *"Desain bagus, tolong pasang sekarang."*
   Agen otomatis membuat file sub-agent dan skill yang diperlukan ke disk.
5. **Masalah Terselesaikan:** Workspace memuat ulang sistem baru ini secara otomatis. Sekarang Anda cukup mengetik perintah slash kustom `/write-post` (atau cukup meminta: *"Tolong rangkum berita AI terpopuler hari ini"*) dan sistem sub-agent kustom Anda akan menyelesaikan seluruh tugas tersebut dalam hitungan detik.

---

## English

SkillForge is a workspace customization framework designed to build, manage, and orchestrate personalized AI Sub-Agents and modular skills. It serves as a foundation for generating platform-agnostic workflows.

### Features

- **Agent Forge (Meta-Agent):** A system analyst agent that interviews users to translate high-level requests into customized sub-agent ecosystems.
- **User Profile Memory:** Dynamic learning of user preferences, storing context locally to personalize subsequent interactions.
- **Auto Update:** Built-in git integration to automatically fetch and pull changes to keep skills synchronized.
- **Workspace Orchestrator (AGENTS.md):** Central instruction foundation that automates profile initialization, updates checks, and coordinates work delegation between sub-agents on every session startup.
- **Multilingual Support:** Multi-language documentation and landing page interfaces out-of-the-box.

### Directory Structure

```
SkillForge/
├── .agents/
│   ├── skills/
│   │   ├── agent-forge/       # The Meta-Agent Architect
│   │   ├── user-profile/      # Personalization & memory
│   │   └── auto-update/       # Git-based synchronization
│   ├── user-profile.json      # Memory preference storage
│   └── AGENTS.md              # Workspace Orchestrator (Central Agent Instructions)
├── output/                    # Standardized directory for newly forged Independent Agent packages
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

### Getting Started & Installation

**Option 1: Manual Setup**
1. Set up your AI Workspace to point to this directory.
2. The agent will automatically discover and load the skills from the `.agents` root.
3. Call `agent-forge` to start designing new workflows.

**Option 2: Automatic Setup via AI Prompt (No Git Clone)**
Simply copy and paste the following prompt to your AI Agent (like Gemini, Claude, or Cursor):

> "Please download the SkillForge framework from `https://github.com/lensetek/SkillForge/archive/refs/heads/master.zip`. Do not use `git clone`. Download the zip file, extract its contents into this workspace directory, and ensure the `.agents` folder is properly set up as my workspace customization root. After that, read the `SKILL.md` from `agent-forge` to understand your new role."

### Use Cases & Usage Example

#### Use Case: From Daily Frustrations to Automation
You are overwhelmed because you spend hours every day researching the latest AI news and writing summaries for your LinkedIn audience.

**Step-by-Step Example (Conversational Journey):**
1. **Share Your Pain Point:** Simply tell the main AI Agent in your workspace:
   > *"I'm exhausted researching AI news and writing daily summaries for my LinkedIn audience. It takes hours!"*
2. **AI Identifies & Recommends Solution:** The AI Agent analyzes your frustration and recommends a solution:
   > *"I hear you. This is a classic research and content creation bottleneck. I recommend building a custom system with two specialized sub-agents: one for researching news from trusted sources, and another for writing drafts in your personal style."*
3. **Collaborative Design (The Interview):** The agent runs the `/agent-forge` slash command to start a conversational interview to design the blueprint:
   > *"Would you like daily or weekly summaries? What news sources do you trust? And how would you describe your target writing tone?"*
4. **Automatic Installation:** Once you approve the proposed design, simply confirm:
   > *"Approved. Write all these skills to disk."*
   The agent automatically generates all sub-agent and tool files.
5. **Problem Resolved:** The workspace automatically reloads the new system. Now you can simply run the new slash command `/write-post` (or instruct: *"Summarize today's top tech news"*) and your custom sub-agents will run the entire workflow in seconds.
