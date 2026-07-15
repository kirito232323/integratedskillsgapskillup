---
name: Precision Skills Core
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#0051d5'
  on-secondary: '#ffffff'
  secondary-container: '#316bf3'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#002113'
  on-tertiary-container: '#009668'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174b'
  on-secondary-fixed-variant: '#003ea8'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-desktop: 40px
  margin-mobile: 16px
  container-max: 1440px
---

## Brand & Style

The design system is engineered for high-stakes professional development and enterprise-grade skill gap analysis. The brand personality is **authoritative, analytical, and empowering**, designed to instill confidence in both the individual applicant seeking growth and the employer making strategic talent decisions.

The aesthetic follows a **Modern Corporate** movement: a blend of high-utility functionalism and a refined, airy interface. It prioritizes clarity over decoration, using purposeful whitespace to manage high information density. The emotional response should be one of "controlled efficiency"—users across all three roles (Admin, Applicant, Employer) must feel that the platform is a precise instrument for data-driven decision-making.

Key stylistic pillars include:
- **Clarity of Intent:** Every element serves a functional purpose; decorative flourishes are eliminated to reduce cognitive load.
- **Data Integrity:** Visual cues (lines, subtle fills) reinforce the structure of complex information.
- **Balanced Density:** The system scales from high-density "Control Center" views for Admins to more spacious, encouraging "Growth Paths" for Applicants.

## Colors

The palette is anchored in professional stability. 
- **Primary (#0F172A):** A deep slate blue used for navigation, high-level headers, and text to establish authority and maximum legibility.
- **Secondary (#2563EB):** A vibrant "Action Blue" for interactive elements, primary buttons, and progress indicators, signaling movement and technology.
- **Tertiary (#10B981):** A "Success Green" dedicated to skill proficiency, completed certifications, and positive gap closures.
- **Neutral (#64748B):** A balanced gray for secondary text, borders, and UI scaffolding.

System status colors (Warning: #F59E0B; Error: #EF4444) are used sparingly to highlight critical skill gaps or system alerts. Backgrounds utilize a subtle off-white (#F8FAFC) to differentiate card containers from the canvas.

## Typography

The system utilizes **Inter** as the primary typeface for its exceptional legibility in data-heavy environments and its neutral, modern character. For technical data, numerical values in tables, and status labels, **JetBrains Mono** is introduced to provide a distinct "data-driven" feel and ensure tabular figures align perfectly.

- **Weight Usage:** Use Semibold (600) for section headers and Bold (700) for primary KPIs.
- **Type Scale:** A minor third scale is used to maintain a professional, restrained hierarchy.
- **Data Labels:** Small uppercase labels using JetBrains Mono are preferred for metadata and "tags" to distinguish them from prose.

## Layout & Spacing

The layout employs a **12-column fluid grid** for desktop and a **4-column grid** for mobile. 

- **Admin View:** Uses a "Full-Width" fluid approach with a persistent left sidebar to maximize horizontal space for complex data tables and multi-column analytics.
- **Applicant View:** Uses a centered "Fixed Grid" (1200px max-width) to create a focused, blog-like reading experience for training recommendations.
- **Employer View:** A hybrid approach using modular "Dashboard Widgets" that reflow based on screen width.

Spacing follows a **4px base unit**. Component internal padding should be generous (16px or 24px) to ensure that even with high data density, the UI remains breathable and accessible.

## Elevation & Depth

To maintain a "reliable" and "systematic" feel, this design system avoids heavy shadows in favor of **Tonal Layers** and **Low-Contrast Outlines**.

- **Surface Tiers:** The base canvas is #F8FAFC. Primary containers (cards, table bodies) are pure white (#FFFFFF) with a 1px border in #E2E8F0.
- **Elevation Levels:**
    - **Level 0 (Base):** Canvas.
    - **Level 1 (Card):** White background, 1px border. No shadow.
    - **Level 2 (Hover/Active):** White background, 1px border in Secondary blue, and a very soft, high-diffusion shadow (0px 4px 20px rgba(15, 23, 42, 0.05)).
    - **Level 3 (Modals/Popovers):** White background, 1px border, and a medium shadow (0px 10px 30px rgba(15, 23, 42, 0.1)).

This flat-but-layered approach ensures the interface feels modern and "built," rather than floating or ephemeral.

## Shapes

The shape language is **Soft (0.25rem)**. This subtle rounding strikes a balance between the precision of sharp corners and the approachability of fully rounded elements.

- **Buttons & Inputs:** 4px (0.25rem) corner radius.
- **Cards & Large Containers:** 8px (0.5rem) corner radius.
- **Progress Bars:** Fully rounded (pill) to represent "fluid" growth.
- **Data Visualizations:** Radar charts and bar graphs should use clean, non-rounded paths to ensure data points are plotted with mathematical accuracy.

## Components

### Data Tables (High Density)
Designed for Admin and Employer roles. Feature:
- Fixed headers on scroll.
- Zebra striping using #F8FAFC for row readability.
- Inline status chips (e.g., "Skill Gap Identified" in Warning Orange).
- JetBrains Mono for all numerical data.

### Progress Tracking
- **Skill Progress Bar:** Uses a 8px height. Background is #E2E8F0, fill is Secondary blue or Tertiary green based on proficiency.
- **Milestone Steppers:** Vertical orientation for Applicant "Learning Paths," using icons to denote completion.

### Skill Radar Charts
- Web-based charts using a 5-point axis. 
- Transparent Secondary blue fill with a 2px solid stroke. 
- Overlays for "Target Skill" vs. "Current Skill" comparisons.

### Analytics Widgets
- Card-based KPIs with a large display-md value and a label-sm description.
- Sparkline charts tucked into the corner of the card to show 30-day trends.

### Inputs & Selection
- **Search Fields:** Persistent at the top of data views with a subtle glass effect (backdrop-blur) on scroll.
- **Multi-select Chips:** Used for filtering skills (e.g., "Python," "Project Management"). 4px radius, light gray fill, with a clear "x" icon.

### Profile Management
- Profile headers for Applicants include a "Verified Badge" in Tertiary green.
- Employer profiles focus on "Talent Bench" health metrics.