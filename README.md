# George Moruita Eipa — Developer Portfolio

> Full-Stack Software Engineer · Kenya 🇰🇪 · Building scalable SaaS platforms, RESTful APIs, and high-performance web applications.

---

[![Live Site](https://img.shields.io/badge/Live%20Site-Visit-f97316?style=flat-square&logo=googlechrome&logoColor=white)](https://eipageorge5-sketch.github.io/)
[![GitHub](https://img.shields.io/badge/GitHub-eipageorge5--sketch-181717?style=flat-square&logo=github)](https://github.com/eipageorge5-sketch)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-George%20Eipa-0077B5?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/george-eipa-93ab4b371/)
[![Email](https://img.shields.io/badge/Email-eipageorge5%40gmail.com-f97316?style=flat-square&logo=gmail&logoColor=white)](mailto:eipageorge5@gmail.com)

---

## 📸 Preview

> **[→ View Live Portfolio](https://eipageorge5-sketch.github.io/)**

---

## 👋 About This Repository

This is the source code for my personal developer portfolio — a hand-coded, performance-first website built without any JavaScript framework. It showcases my projects, technical skills, work experience, and background as a Full-Stack Software Engineer based in Kenya.

The portfolio is designed to reflect who I actually am as an engineer: someone who cares about clean architecture, real-world performance, and building things that matter.

---

## 🚀 Featured Projects

### [The Spirit of Turkana](https://eipageorge5-sketch.github.io/spirit-of-turkana/)
Cinematic documentary web experience preserving East African heritage. Built with a lazy-loading image/video pipeline using the Intersection Observer API — reduced initial page weight by 60% while maintaining 60fps scroll performance on 3G networks.
`JavaScript ES6+` · `HTML5` · `CSS3` · `Performance Optimization`

---

### WiFiHub ISP Manager *(In Development)*
Multi-tenant SaaS platform for hotspot operators and ISPs to manage billing, vouchers, and field workers. Features PostgreSQL + Prisma schema design, JWT authentication, Role-Based Access Control, and M-Pesa payment integration.
`TypeScript` · `Node.js` · `PostgreSQL` · `Prisma` · `JWT / RBAC` · `M-Pesa`

---

### SCCBO Platform *(In Development)*
Comprehensive NGO management system for tracking operations, field workers, and financial reporting. Built on Next.js + TypeScript with role-specific dashboards and optimized reporting workflows.
`Next.js` · `TypeScript` · `PostgreSQL` · `Authentication`

---

### Northstar Webhook Prototype
Production-style inventory webhook service with HMAC-SHA256 signature verification, RESTful endpoints for real-time stock updates, and deployed to Render.
`Python` · `FastAPI` · `HMAC-SHA256` · `Render`

---

### Solstice Event Check-in
Asynchronous event check-in system with QR code processing and automated badge-printing workflows. Uses RabbitMQ + CloudAMQP for durable message queuing and webhook-based status updates.
`Python` · `FastAPI` · `RabbitMQ` · `CloudAMQP` · `Webhooks`

---

### Bingwa Task App
Full-stack task management application with a NestJS REST API backend, MongoDB for persistent storage, and a Flutter frontend. Deployed on Render with secure environment-based configuration.
`NestJS` · `TypeScript` · `MongoDB` · `Flutter` · `Render`

---

## 🛠 Tech Stack

| Category | Technologies |
|---|---|
| **Languages** | TypeScript, JavaScript (ES6+), HTML5, CSS3, SQL, Python |
| **Frontend** | React.js, Next.js, Responsive Design, Performance Optimization |
| **Backend & APIs** | Node.js, NestJS, FastAPI, RESTful API Design |
| **Auth & Security** | JWT, Role-Based Access Control (RBAC), HMAC-SHA256 |
| **Databases** | PostgreSQL, Prisma ORM, MongoDB, Mongoose |
| **Async Systems** | RabbitMQ, CloudAMQP, Background Workers, Webhooks |
| **Mobile** | Flutter |
| **Tools** | Git, GitHub, VS Code, Lighthouse Auditing, Render, Vercel |

---

## 📁 Repository Structure

```
portfolio/
├── index.html          # Main portfolio page
├── style.css           # All styles — design tokens, layout, components
├── script.js           # AOS, Typed.js, nav, modal, form, skill animations
├── gallery.html        # Spirit of Turkana image gallery
├── assets/
│   ├── logo.png            # GMeipa personal logo
│   ├── turkana-1.jpeg      # Hero background
│   ├── turkana-2.jpeg      # Gallery image
│   ├── turkana-3.jpeg      # Gallery image
│   ├── turkana-4.jpeg      # Gallery image
│   └── turkana-5.jpeg      # About section image
└── README.md
```

---

## ⚡ Performance Notes

This portfolio is built with performance as a first-class concern — not an afterthought.

- **No JavaScript framework** — vanilla JS keeps the bundle near zero
- **Intersection Observer API** — used for both AOS scroll animations and lazy-loading project assets
- **System-aware rendering** — CSS custom properties enable instant theming without runtime computation
- **Lazy-loaded images** — all below-the-fold images use `loading="lazy"`
- **Semantic HTML5** — clean structure with proper ARIA labels and keyboard navigation support
- **Targets 90+ Lighthouse score** across Performance, Accessibility, Best Practices, and SEO

---

## 🌐 Hosting & Deployment

This portfolio is deployed on **GitHub Pages** — free, fast, and version-controlled.

For client projects and production applications, infrastructure choices matter significantly. Poor hosting directly impacts Core Web Vitals, search rankings, and conversion rates.

For serious web projects — especially WordPress sites, SaaS dashboards, and client work — I recommend using managed hosting on enterprise-grade infrastructure. See my full hosting breakdown and recommendations here:

**[→ Full Hosting Performance Breakdown](https://YOUR-LANDING-PAGE-URL.com)**

---

## 🏃 Running Locally

No build tools or Node.js required.

```bash
# Clone the repository
git clone https://github.com/eipageorge5-sketch/portfolio.git

# Open in your browser
cd portfolio
open index.html

# Or serve it locally with Python (optional)
python3 -m http.server 3000
# Then visit http://localhost:3000
```

---

## 📬 Contact

I'm currently available for **freelance work**, **contract projects**, and **full-time roles**.

| | |
|---|---|
| 📧 Email | [eipageorge5@gmail.com](mailto:eipageorge5@gmail.com) |
| 📱 Phone / WhatsApp | [+254 768 927 893](tel:+254768927893) |
| 💼 LinkedIn | [george-eipa-93ab4b371](https://www.linkedin.com/in/george-eipa-93ab4b371/) |
| 🐙 GitHub | [eipageorge5-sketch](https://github.com/eipageorge5-sketch) |
| 🐦 Twitter / X | [@LaFamily550](https://x.com/LaFamily550) |
| 📍 Location | Kenya 🇰🇪 |

---

## 📄 License

This portfolio's source code is open for reference and learning.
Please do not directly copy and deploy it as your own portfolio without meaningful changes.

---

*Built with care in Kenya. ⚡ Fast by default.*
