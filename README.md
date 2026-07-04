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

#### Usecase: Membuat Agent Content Creator Otomatis
Anda ingin membangun tim sub-agent kustom untuk menulis draf postingan LinkedIn secara terjadwal.

**Langkah demi Langkah:**
1. **Panggil Agent Forge:** Berikan instruksi ke AI Agent utama Anda:
   > *"Tolong jalankan skill `agent-forge` untuk merancang sub-agent pembuat konten otomatis."*
2. **Proses Wawancara:** `agent-forge` akan mulai mengajukan pertanyaan berdasarkan preferensi Anda, seperti channel tujuan (misal: LinkedIn) dan gaya bahasanya.
3. **Penyusunan Blueprint:** `agent-forge` menyusun spesifikasi sub-agent `LinkedInPlanner` beserta skill `write-linkedin-post` dan `schedule-post`.
4. **Instalasi Otomatis:** Setelah Anda menyetujui cetak biru (*blueprint*), berikan instruksi:
   > *"Saya setuju, tulis semua skill ini ke direktori."*
5. **Eksekusi:** Agent utama memuat ulang workspace dan siap menerima perintah seperti:
   > *"Tolong jadwalkan postingan tentang tips AI terbaru untuk besok pagi."*

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

#### Use Case: Automated Content Creator Agent
You want to build a custom sub-agent team to draft and schedule LinkedIn posts.

**Step-by-Step Example:**
1. **Trigger Agent Forge:** Tell your main AI Agent:
   > *"Please run the `agent-forge` skill to design an automated content creator sub-agent."*
2. **The Interview:** `agent-forge` will ask questions tailored to your needs, such as target channels (e.g. LinkedIn) and preferred tone.
3. **Blueprint Design:** `agent-forge` designs the `LinkedInPlanner` sub-agent alongside the `write-linkedin-post` and `schedule-post` skills.
4. **Automatic Installation:** Once you approve the blueprint, instruct the agent:
   > *"Approved. Write all these skills to disk."*
5. **Execution:** The main agent reloads the workspace and is now ready to handle instructions like:
   > *"Draft and schedule a LinkedIn post about AI trends for tomorrow morning."*
