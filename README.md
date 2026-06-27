# Stelalliance Web

Corporate marketing website for **Stelalliance (SMC-Private) Limited** — a technology group headquartered in Islamabad, Pakistan, operating across software engineering, cybersecurity, and space & STREAM education.

🌐 **Live:** [stelalliance.com](https://stelalliance.com)

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React 18 + Vite 5 |
| Routing | React Router DOM 6 |
| UI | MUI (Material UI) 6 + Emotion |
| Forms | Formik + Yup |
| Animations | AOS (Animate on Scroll) |
| Backend | Firebase (Firestore + Storage) |
| Contact | Web3Forms API |
| Deployment | Netlify |

---

## Getting Started

```bash
# Install dependencies
yarn install

# Start dev server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview
```

---

## Project Structure

```
src/
├── App.jsx                  # MUI theme + AOS init + router
├── firebase.js              # Firebase config
├── components/
│   ├── global/              # DrawerComponent, Accordion
│   └── home/                # Banner, Services, Work, WorkCard, Footer, etc.
├── data/
│   ├── workData.js          # Portfolio projects
│   ├── servicesData.js      # Service areas (4 practices)
│   └── securityData.jsx     # Cybersecurity disciplines (11)
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Portfolio.jsx
│   ├── PortfolioDetail.jsx
│   ├── CyberSecurity.jsx
│   ├── SecurityDetail.jsx
│   └── ServiceDetail.jsx
├── routers/AppRouter.jsx
└── theme/theme.js
public/
└── projects/                # Real project screenshots and logos
    ├── hemogo/
    ├── bullseye/
    ├── resum8/
    └── ai-workflow/
```

---

## Routes

| Path | Page |
|------|------|
| `/` | Home — hero, portfolio preview, services, FAQs |
| `/about` | About — CEO message, team |
| `/portfolio` | Full portfolio grid |
| `/portfolio/:id` | Project case study with lightbox screenshots |
| `/security` | Cybersecurity hub — 11 disciplines |
| `/security/:slug` | Security discipline detail |
| `/services/:slug` | Service detail |

---

## Practice Areas

- **Software, SaaS & AI** — custom software, SaaS platforms, AI agents
- **Cybersecurity & Managed Security** — MSSP covering 11 security disciplines
- **Stellar Scholar** — space & STREAM education initiative (K-12)
- **Astrobot Academy** — delivery platform bringing Stellar Scholar to classrooms

---

## Portfolio Projects

| Project | Category | Status |
|---------|----------|--------|
| Stellar Scholar | Ed-tech · Education | Ongoing |
| HemoGo | Health-tech · AI | Ongoing |
| Bullseye | Fin-tech · SaaS | Ongoing |
| Resum8 | HR-tech · AI | Ongoing |
| LiveKit Voice Agents | AI · Conversational | Ongoing |
| AI Knowledge Assistant | AI · Enterprise | Ongoing |
| AI Workflow Automation | AI · Automation | Ongoing |
| AI Customer Support Assistant | AI · Customer Service | Ongoing |
| AI Document Processing | AI · Document Intelligence | Ongoing |
| DealerPro | Auto-tech · SaaS | Completed |

---

## Adding a New Portfolio Project

1. Add an entry to `src/data/workData.js` following the existing schema
2. Place project assets in `public/projects/<project-name>/`
3. Set `logoImage` for logo-style card, `screenshots` array for detail page gallery
4. Set `screenshotLayout: "grid"` for landscape/desktop screenshots

---

## Environment Notes

- Firebase config is in `src/firebase.js` — rotate keys if exposed
- Web3Forms `access_key` is in `ContactForm.jsx`
- Netlify SPA redirect is configured in `netlify.toml`
- All routes fall back to `index.html` for client-side routing
