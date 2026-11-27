<div align="center">

# 🏥 Mission 100 Hospital — Full-Stack Healthcare & Diagnostics Platform

**A production-grade healthcare web platform built with Next.js 16, React 19, Razorpay Payments, Dynamic PDF Generation, Google Sheets CRM, and an SEO-driven Medical Blog Engine.**

[![Next.js](https://img.shields.io/badge/Next.js-16.2.2-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Razorpay](https://img.shields.io/badge/Razorpay-Payments-0C2451?style=for-the-badge&logo=razorpay&logoColor=3395FF)](https://razorpay.com/)
[![Google Sheets API](https://img.shields.io/badge/Google_Sheets-CRM_Backend-34A853?style=for-the-badge&logo=googlesheets&logoColor=white)](https://developers.google.com/sheets/api)
[![Nodemailer](https://img.shields.io/badge/Nodemailer-SMTP_Alerts-22BC66?style=for-the-badge&logo=gmail&logoColor=white)](https://nodemailer.com/)

</div>

---

## 📌 Overview

**Mission 100 Hospital** is an end-to-end preventive healthcare and diagnostics platform designed for patient test bookings, individual & corporate wellness memberships, medical content publishing, and clinical recruitment.

Built with a focus on **server-side payment integrity**, **automated document generation**, **SEO performance**, and **zero-database operational simplicity** using Google Sheets as a lightweight CRM.

---

## ✨ Key Engineering Highlights

### 💳 Secure Payment & Referral Pipeline (Razorpay + HMAC-SHA256)
- **Server-Side Price Authority:** Order amounts are calculated strictly on the server (`/api/payment/order`, `/api/membership/order`, `/api/corporate-membership/order`) to prevent client-side price tampering.
- **Cryptographic Verification:** Payment signatures are verified server-side using HMAC-SHA256 (`crypto`) before fulfilling orders.
- **Dynamic Referral Engine:** Supports both flat-rate and percentage-based referral discounts validated in real time against Google Sheets (`/api/payment/check-referral`).

### 📄 Dynamic PDF Tax Invoices & Membership Cards (`pdfkit`)
- Generates custom **tax invoices** and **tiered digital membership cards** (Free, Silver, Gold, Platinum, Pro-Fitness, Corporate) in memory using `pdfkit` (`app/lib/pdfHelper.js`) with custom Roboto typography.
- Automatically attaches generated PDFs to transactional confirmation emails sent to customers via **Nodemailer**.

### 📊 Google Sheets CRM & Automated Email Workflows
- Integrates `google-spreadsheet` + `google-auth-library` (JWT service account auth) in `app/lib/googleSheets.js` to persist bookings, memberships, and referral tracking.
- Sends structured HTML notifications for enquiries, partnerships, franchise requests, newsletter signups, and expert onboarding.

### 📝 SEO-First Medical Blog & Content Automation
- Multi-cluster diagnostic blog architecture (`/blogs`, `/blogs/[slug]`) featuring category filtering, live search, Table of Contents, Medical Reviewer attribution, and JSON-LD structured data.
- Includes custom CLI tooling (`npm run build:blogs`, `npm run seo:check`) in `scripts/` to compile article clusters into `data/blogs.json` and validate SEO metadata, plus a dynamic `app/sitemap.js`.

### 💼 Careers & Recruitment Portal
- Full job directory (`/careers`, `/careers/[job-slug]`) backed by `data/jobs.json` with department filtering, application form validation (`react-hook-form` + `yup`), and resume attachment streaming via `/api/careers/applications`.

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework & Runtime** | Next.js `16.2.2` (App Router), React `19.2.4`, React Compiler (`babel-plugin-react-compiler`) |
| **Styling & UI** | Tailwind CSS v4, Framer Motion `12.38`, Lucide Icons, Swiper |
| **Forms & Validation** | React Hook Form, Yup, `@hookform/resolvers` |
| **Payments & Security** | Razorpay SDK, Node `crypto` (HMAC-SHA256 signature verification) |
| **Backend & Integrations** | Next.js Route Handlers, Google Sheets API (`google-spreadsheet`, `google-auth-library`), Nodemailer |
| **Document Generation** | PDFKit (`serverExternalPackages: ["pdfkit"]`) |
| **Analytics & SEO** | Google Analytics (`gtag`), Microsoft Clarity, Dynamic `sitemap.js`, JSON-LD |

---

## 📂 Project Structure

```text
mission100-hospital/
├── app/
│   ├── api/                        # Serverless API route handlers
│   │   ├── payment/                # Test booking orders, verification & referral checks
│   │   ├── membership/             # Individual membership checkout & verification
│   │   ├── corporate-membership/   # Corporate wellness checkout & PDF issuance
│   │   ├── careers/                # Job listings & resume application handling
│   │   └── ...                     # Enquiries, partnerships, franchise, newsletter, expert onboarding
│   ├── blogs/                      # SEO blog listing, search, filters & article pages
│   ├── book-test/                  # Diagnostic test booking checkout
│   ├── buy-membership/             # Individual membership checkout flow
│   ├── buy-corporate-membership/   # Corporate membership checkout flow
│   ├── careers/                    # Careers portal & application pages
│   ├── services/                   # 11 preventive healthcare service pages
│   └── lib/                        # Google Sheets CRM, PDFKit generator, GA helpers
├── components/                     # Modular UI components (Navbar, Footer, Blog, About, Services)
├── data/                           # Static structured data (blogs, doctors, jobs, tests, plans)
├── scripts/                        # Blog cluster compiler & automated SEO checker
├── public/                         # Static assets, fonts, icons & verification files
├── .env.example                    # Environment variable template
└── next.config.mjs                 # Image remotePatterns, redirects & PDFKit config
```

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/TheHemantPandey/mission100-hospital.git
cd mission100-hospital
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Copy `.env.example` to `.env.local` and fill in your credentials:
```bash
cp .env.example .env.local
```

<details>
<summary><strong>Required Environment Variables</strong></summary>

| Variable | Purpose |
| :--- | :--- |
| `EMAIL_USER` / `EMAIL_PASS` | Gmail address & App Password for Nodemailer SMTP |
| `ADMIN_EMAIL` | Comma-separated recipient(s) for admin notifications |
| `NEXT_PUBLIC_RAZORPAY_KEY_ID` | Razorpay public key ID (client & server) |
| `RAZORPAY_KEY_SECRET` | Razorpay secret key for order creation & HMAC verification |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | Google Cloud service account email |
| `GOOGLE_PRIVATE_KEY` | Service account private key (raw or Base64-encoded) |
| `GOOGLE_SHEET_ID` | Target Google Spreadsheet ID (`Bookings`, `Referrals`, `Memberhsip` tabs) |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics measurement ID *(optional)* |
| `NEXT_PUBLIC_CLARITY_PROJECT_ID` | Microsoft Clarity project ID *(optional)* |

</details>

### 4. Run locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Useful Scripts
```bash
npm run build        # Production build
npm run lint         # Run ESLint
npm run build:blogs  # Compile blog clusters into data/blogs.json
npm run seo:check    # Validate blog SEO metadata & structure
```

---

<div align="center">

Built by **[Hemant Pandey](https://github.com/TheHemantPandey)**

</div>
