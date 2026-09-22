# Varun Vishwa — Personal Portfolio Website

> **AI PRODUCT ENGINEER • PRODUCT BUILDER • CREATIVE TECHNOLOGIST**
> *Curious. Creative. Ambitious.*

A personal digital world and portfolio built using the **Cyber Ronin** design aesthetic with futuristic HUD telemetry, dual-layer spotlight interactions, and deep case study presentations.

---

## 📁 Directory Structure

```text
varun-vishwa-portfolio/
├── index.html               # Main application entry point & semantic HTML structure
├── package.json             # NPM package scripts (npm start / npm run dev)
├── README.md                # Project documentation & editing guide
├── css/
│   └── style.css            # Cyber Ronin design system, tokens, and animations
├── js/
│   ├── portfolio-data.js    # Central data store (Projects, Skills, Timeline, Education, Socials)
│   └── main.js              # Spotlight engine, canvas graphics, modal drawer & audio HUD
└── assets/                  # Folder for personal images and assets
```

---

## ⚡ Quick Start

### Option 1: Using NPM
```powershell
npm start
```

### Option 2: Using NPX Serve directly
```powershell
npx -y serve . -l 3000
```

Then navigate to **`http://localhost:3000`** in your browser.

---

## 🛠️ How to Update Your Portfolio Content

All your data is cleanly decoupled from UI markup in **`js/portfolio-data.js`**.
To update:
- **Projects & Case Studies**: Edit the `projects` array.
- **Skills**: Edit the `skills.categories` array.
- **Timeline & Experience**: Edit the `journey.timeline` array.
- **Education & CGPA**: Edit the `education.details` array.
- **Credentials & Certifications**: Edit the `achievements.categories` array.
- **Links (LinkedIn, GitHub, Email)**: Edit the `contact.links` and `socialLinks` objects.
