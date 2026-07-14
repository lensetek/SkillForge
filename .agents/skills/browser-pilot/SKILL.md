---
name: browser-pilot
description: Universal web automation, dynamic scraping, form filling, visual responsiveness auditing, and browser session management using Chrome DevTools MCP.
---

# Universal Browser Pilot Skill

You are equipped with the **Universal Browser Pilot Skill**. This skill enables you to control a live Chrome browser via the Chrome DevTools MCP server (`chrome-devtools-mcp`) for any web interaction task—including dynamic web scraping, mass form filling, web app debugging, responsiveness auditing, and persistent web session management.

## Capabilities & Toolset

When interacting with web pages via Chrome DevTools MCP, utilize the following core tool patterns:

### 1. Smart Form Filling & Multi-Input Automation
- **Batch Form Filling (`fill_form`):** ALWAYS prefer `fill_form` over individual `fill` or `click` calls when populating multi-field web forms (login screens, registration portals, surveys, enterprise forms). It executes in a single round-trip, preventing state desynchronization.
- **Key Navigation & Presses (`press_key`, `type_text`):** Use `press_key` for keyboard navigation (e.g. `Tab`, `Enter`, `Control+Shift+R`, `Escape`) or shortcuts when interacting with custom web controls.
- **File Uploads (`upload_file`):** Provide local file paths (e.g., PDFs, invoices, images from `/input/` or workspace paths) to target file input elements or file choosers.

### 2. Dynamic Web Content Extraction & Scraping
- **Page Snapshot (`take_snapshot`):** Use `take_snapshot` to extract structured text representations and unique element `uid`s from single-page applications (React, Vue, Angular, Next.js) where raw HTML scraping fails.
- **Structured Export:** Extract tables, lists, pricing data, or article text and format them into structured JSON, CSV, or Markdown files saved inside the workspace root `/output/` folder (e.g., `/output/scraped_data.json`).

### 3. Visual & Runtime Quality Auditing
- **Responsive Layout Inspection (`take_screenshot`, `emulate`):** Test responsive design adherence by emulating mobile viewports vs desktop viewports. Capture visual screenshots and save them directly to `/output/screenshot_[device]_[timestamp].png`.
- **Console Log & Error Capture (`list_console_messages`, `get_console_message`):** Monitor runtime console logs for unhandled JavaScript exceptions, network failures, or API breaks during automated interaction.
- **Performance Tracing (`performance_start_trace`, `performance_stop_trace`):** Capture execution traces to diagnose rendering bottlenecks or slow network requests.

### 4. Session Persistence & Authentication Management
- **Cookies & Storage Saving:** Save session cookies and token states under `/output/session_[domain].json` after manual or automated login to avoid repetitive login/2FA challenges in subsequent sessions.
- **Multi-Tab Orchestration (`list_pages`, `new_page`, `select_page`, `close_page`):** Handle complex workflows requiring multiple tabs or popup windows cleanly.

---

## Universal Operational Workflows

### Workflow A: Dynamic Web Scraping & Data Extraction
1. **Navigate:** Call `navigate_page` with the target URL.
2. **Wait:** Use `wait_for` to ensure dynamic JavaScript content or AJAX requests complete loading.
3. **Snapshot:** Execute `take_snapshot` to retrieve content and structural UIDs.
4. **Transform:** Process extracted data into clean JSON/CSV/Markdown.
5. **Persist:** Write the resulting deliverable file to `output/[filename].[ext]`.

### Workflow B: Mass Form Entry & Document Upload
1. **Prepare Data:** Read the source data file (JSON, CSV, or parsed document).
2. **Inspect Form:** Call `take_snapshot` to identify all form input `uid`s.
3. **Fill Mass Form:** Call `fill_form` with an array of mapped values (`uid` + `value`).
4. **Upload Attachments (If applicable):** Call `upload_file` with the path to any target document.
5. **Verify & Execute:** Review filled inputs, execute the submit action, and capture a proof screenshot saved to `output/submission_proof_[timestamp].png`.

---

## Safeguards & Human-in-the-Loop Protocol

1. **Dry-Run Mode for High-Risk Actions:**
   - Before executing irreversible online actions (e.g., submitting financial payments, deleting data, posting public messages, or final form submissions on live production systems), present a preview summary to the user and request explicit confirmation.
2. **Handling CAPTCHA, OTP & 2FA Challenges:**
   - If an automated site presents a CAPTCHA or 2FA/OTP screen, pause execution and inform the user. Allow the user to complete the challenge in the visible browser instance, then resume execution automatically upon user signal.
3. **Credential Guardrails:**
   - Never hardcode login credentials in prompt scripts or skill files. Read credentials securely from local `.env` files or prompt inputs.
