/**
 * Artificia AI - Corporate transformation Partner Landing Page JS System
 * Fully self-contained, high-performance interactions, calculators, quizzes, and animations.
 */

/* ==========================================================================
   Lead Submission to n8n Webhook → Google Sheets
   ========================================================================== */
const N8N_WEBHOOK_URL = 'https://miniature-ugt6x.crab.containers.automata.host/webhook-test/corporate-ai-training-lead';

async function submitToN8N(data) {
    try {
        const response = await fetch(N8N_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return true;
    } catch (err) {
        console.error('[Artificia] Lead submission error:', err);
        return true;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // 0. Premium Preloader Overlay Control (Optimized 1.2s Delay + Slide Up Reveal)
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('fade-out');
            setTimeout(() => {
                preloader.remove();
            }, 850); // Clear element after transition finishes
        }, 1200);
    }

    // 1. Mobile Navigation Menu Toggle
    initMobileNav();

    // 2. Interactive Neural Particle Canvas
    initNeuralCanvas();

    // 3. Dynamic Tool Ecosystem Logos & Filters
    initToolEcosystem();

    // 4. Interactive ROI Calculator
    initROICalculator();

    // 5. Industry-Specific Tabs Loader
    initIndustryTabs();

    // 6. Interactive Ecosystem Flowchart Nodes
    initEcosystemFlowchart();

    // 7. Scroll-Triggered Counter KPIs
    initCounters();

    // 8. Testimonials Slider Carousel
    initTestimonialsSlider();

    // 9. Pre-written Corporate FAQ Accordion
    initFAQs();

    // 10. Forms Submission Controllers (Consultation, Quiz Lead, Exit Audit)
    initFormsHandler();

    // 11. Multi-Step AI Readiness Diagnostic Quiz Modal
    initReadinessQuiz();

    // 12. Exit Intent Trigger Setup
    initExitIntent();

    // 13. Horizontal Hierarchy Chart Sequential Loading
    initHierarchyChart();

    // 14. Curved Winding Roadmap Framework Sequential Loading
    initRoadmapChart();

    // 15. Industry Transformation Partners Slider
    initPartnersCarousel();

    // 16. Holographic Corporate Console Hover Integration
    initHeroConsoleHover();

    // 17. Global Scroll Reveal Animation System
    initScrollReveal();
});

/* ==========================================================================
   1. Mobile Navigation System
   ========================================================================== */
function initMobileNav() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', () => {
            const isOpen = mobileNav.classList.toggle('open');
            menuToggle.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', isOpen);
        });
    }
}

function toggleMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');
    if (mobileNav && mobileNav.classList.contains('open')) {
        mobileNav.classList.remove('open');
        if (menuToggle) menuToggle.classList.remove('active');
    }
}

/* ==========================================================================
   2. Interactive Neural network Background Canvas
   ========================================================================== */
function initNeuralCanvas() {
    // Performance Optimization: Disable heavy particle calculations on mobile viewports (< 768px)
    if (window.innerWidth < 768) {
        const canvas = document.getElementById('neuralCanvas');
        if (canvas) canvas.style.display = 'none';
        return;
    }

    const canvas = document.getElementById('neuralCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = Math.min(65, Math.floor((width * height) / 22000));
    const connectionDistance = 115;
    const mouse = { x: null, y: null, radius: 150 };

    // Handle resizing
    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    // Track mouse coordinates
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    });

    window.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    // Node particle class definition
    class Node {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.45;
            this.vy = (Math.random() - 0.5) * 0.45;
            this.radius = Math.random() * 2 + 1.5;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Bounce off outer boundary edges
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;

            // React to mouse attraction
            if (mouse.x !== null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.hypot(dx, dy);
                if (distance < mouse.radius) {
                    const force = (mouse.radius - distance) / mouse.radius;
                    this.x -= (dx / distance) * force * 0.5;
                    this.y -= (dy / distance) * force * 0.5;
                }
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(174, 213, 52, 0.45)'; // Electric Lime translucent nodes
            ctx.fill();
        }
    }

    // Populate particle nodes array
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Node());
    }

    // Main animation loop
    function animate() {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();

            // Connect neighboring particles if they are close
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.hypot(dx, dy);

                if (dist < connectionDistance) {
                    const alpha = (connectionDistance - dist) / connectionDistance * 0.16;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(174, 213, 52, ${alpha})`;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animate);
    }
    animate();
}

/* ==========================================================================
   3. Partner & Ecosystem Logo Arrays Loader
   ========================================================================== */
function initToolEcosystem() {
    const grid = document.getElementById('logosGrid');
    if (!grid) return;

    // High-fidelity partner brand SVG logo array with official corporate colors and detailed B2B integration descriptions
    const tools = [
        {
            name: 'ChatGPT',
            cat: 'llm',
            color: '#FFFFFF',
            glow: 'rgba(255, 255, 255, 0.28)',
            desc: 'Artificia integrates OpenAI\'s ChatGPT enterprise layers to automate complex content pipelines, structure raw unstructured data, and configure custom GPT agents embedded with your internal standard operating procedures (SOPs).',
            svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.74 10.15a5.79 5.79 0 0 0-.5-3.3 5.86 5.86 0 0 0-2.8-2.8 5.75 5.75 0 0 0-4.63-.17 5.86 5.86 0 0 0-3.32-3 5.75 5.75 0 0 0-4.62.72 5.86 5.86 0 0 0-3 3.32 5.75 5.75 0 0 0-.17 4.62 5.86 5.86 0 0 0-3 3.32 5.75 5.75 0 0 0 .72 4.63 5.86 5.86 0 0 0 2.8 2.8 5.75 5.75 0 0 0 4.63.17 5.86 5.86 0 0 0 3.32 3 5.75 5.75 0 0 0 4.62-.72 5.86 5.86 0 0 0 3-3.32 5.75 5.75 0 0 0 .17-4.62 5.86 5.86 0 0 0 3-3.32 5.75 5.75 0 0 0-.72-4.63zM12 15.63a3.63 3.63 0 1 1 3.63-3.63A3.63 3.63 0 0 1 12 15.63zm4.72-3.63a4.72 4.72 0 0 0-.3-1.66l-.54-.93a1 1 0 0 1 .15-1.22l.85-.85a1 1 0 0 1 1.41 0l.85.85a1 1 0 0 1 0 1.41l-.85.85a1 1 0 0 1-1.22.15l-.93-.54a4.72 4.72 0 0 0-.42.94zm-9.44 0a4.72 4.72 0 0 0 .3 1.66l.54.93a1 1 0 0 1-.15 1.22l-.85.85a1 1 0 0 1-1.41 0l-.85-.85a1 1 0 0 1 0-1.41l.85-.85a1 1 0 0 1 1.22-.15l.93.54a4.72 4.72 0 0 0 .42-.94z"/></svg>`
        },
        {
            name: 'Claude',
            cat: 'llm',
            color: '#D9775B',
            glow: 'rgba(217, 119, 91, 0.35)',
            desc: 'We deploy Anthropic\'s Claude models for deep document analysis, high-context report drafting, and secure coding pipelines due to its massive context window and exceptional logical reasoning capabilities.',
            svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 13.5l-1.5-3.5h-4l-1.5 3.5H6.3L11 5h2l4.7 10h-2.2zM12 7.3L10.6 10.5h2.8L12 7.3z"/></svg>`
        },
        {
            name: 'Gemini',
            cat: 'llm',
            color: '#4285F4',
            glow: 'rgba(66, 133, 244, 0.35)',
            desc: 'Artificia utilizes Google\'s Gemini models for multi-modal parsing, analyzing massive spreadsheets, and establishing seamless integrations with existing Google Workspace cloud databases.',
            svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c-.1 2.3-1 4.5-2.7 6.1a8.5 8.5 0 0 1-6.1 2.7c2.3.1 4.5 1 6.1 2.7a8.5 8.5 0 0 1 2.7 6.1c.1-2.3 1-4.5 2.7-6.1a8.5 8.5 0 0 1 6.1-2.7 8.5 8.5 0 0 1-6.1-2.7C13 6.5 12.1 4.3 12 2z"/><path d="M19 16c-.05 1.15-.5 2.25-1.35 3.05a4.25 4.25 0 0 1-3.05 1.35c1.15.05 2.25.5 3.05 1.35a4.25 4.25 0 0 1 1.35 3.05c.05-1.15.5-2.25 1.35-3.05a4.25 4.25 0 0 1 3.05-1.35c-1.15-.05-2.25-.5-3.05-1.35a4.25 4.25 0 0 1-1.35-3.05z" opacity="0.8"/></svg>`
        },
        {
            name: 'Perplexity',
            cat: 'llm',
            color: '#19A2B8',
            glow: 'rgba(25, 162, 184, 0.35)',
            desc: 'We train corporate teams to leverage Perplexity as a real-time conversational research agent, completely eliminating manual search loops and compiling formatted competitive intelligence.',
            svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 11h-3v3.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5V13H7.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5H9V6.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V10h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/></svg>`
        },
        {
            name: 'NotebookLM',
            cat: 'llm',
            color: '#0F9D58',
            glow: 'rgba(15, 157, 88, 0.35)',
            desc: 'We configure Google\'s NotebookLM environments mapped against your internal standard operating guides, research papers, and corporate assets to create secure, conversational localized expert tools.',
            svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 2H6c-1.2 0-2 .8-2 2v16c0 1.2.8 2 2 2h13c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 16H8v-2h5v2zm4-4H8v-2h9v2zm0-4H8V8h9v2z"/></svg>`
        },
        {
            name: 'Notion AI',
            cat: 'llm',
            color: '#FFFFFF',
            glow: 'rgba(255, 255, 255, 0.35)',
            desc: 'We integrate Notion AI inside collaborative team databases to automate meeting transcripts, organize wiki databases, and accelerate administrative search query workflows.',
            svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.6 2h14.8c1.4 0 2.6 1.2 2.6 2.6v14.8c0 1.4-1.2 2.6-2.6 2.6H4.6C3.2 22 2 20.8 2 19.4V4.6C2 3.2 3.2 2 4.6 2zm1.6 4.3v11.4h2.2v-4.1l4.9 4.1h2.5V6.3h-2.2v4.1L8.7 6.3H6.2z"/></svg>`
        },
        {
            name: 'Zapier',
            cat: 'automation',
            color: '#FF4F00',
            glow: 'rgba(255, 79, 0, 0.35)',
            desc: 'We map and build complex multi-step Zapier automation logic to trigger instant operations—linking your website forms, payment hubs, customer services, and CRMs without manual error.',
            svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c1.3 0 2.4.9 2.6 2.2l.6 5.8 4.7-3.4c1-.8 2.5-.5 3.2.5s.5 2.5-.5 3.2l-4.7 3.4 5.5 2.1c1.2.5 1.8 1.8 1.4 3s-1.8 1.8-3 1.4l-5.5-2.1 1.9 5.6c.4 1.2-.2 2.5-1.4 2.9s-2.5-.2-2.9-1.4l-1.9-5.6-1.9 5.6c-.4 1.2-1.7 1.8-2.9 1.4s-1.8-1.7-1.4-2.9l1.9-5.6-5.5 2.1c-1.2.4-2.5-.2-2.9-1.4s.2-2.5 1.4-2.9l5.5-2.1-4.7-3.4c-1-.7-1.2-2.2-.5-3.2s2.2-1.2 3.2-.5l4.7 3.4.6-5.8C9.6.9 10.7 0 12 0z"/></svg>`
        },
        {
            name: 'Make',
            cat: 'automation',
            color: '#C5168C',
            glow: 'rgba(197, 22, 140, 0.35)',
            desc: 'Artificia deploys Make.com multi-threaded data routing structures to visual-map corporate database synchronization, inventory tracking pipelines, and scalable custom webhooks.',
            svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c-2.48 0-4.5-2.02-4.5-4.5s2.02-4.5 4.5-4.5 4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5z"/></svg>`
        },
        {
            name: 'n8n',
            cat: 'automation',
            color: '#FF6C37',
            glow: 'rgba(255, 108, 55, 0.35)',
            desc: 'We construct secure, self-hosted n8n database pipelines to manage high-throughput backend data operations, preserving 100% corporate privacy and eliminating third-party API transaction overheads.',
            svg: `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="3" /><circle cx="6" cy="17" r="3" /><circle cx="18" cy="17" r="3" /><line x1="12" y1="8" x2="7.5" y2="15" stroke="currentColor" stroke-width="2.2" /><line x1="12" y1="8" x2="16.5" y2="15" stroke="currentColor" stroke-width="2.2" /><line x1="9" y1="17" x2="15" y2="17" stroke="currentColor" stroke-width="2.2" /></svg>`
        },
        {
            name: 'Fireflies',
            cat: 'automation',
            color: '#24B47E',
            glow: 'rgba(36, 180, 126, 0.35)',
            desc: 'We program Fireflies.ai meeting nodes to automatically record audio conferences, compile key deliverables, draft custom next-step plans, and sync notes directly with operational team boards.',
            svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3zm7 9a1 1 0 0 0-2 0 5 5 0 0 1-10 0 1 1 0 0 0-2 0 7 7 0 0 0 6 6.93V20H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-2v-2.07A7 7 0 0 0 19 11z"/></svg>`
        },
        {
            name: 'Canva AI',
            cat: 'creative',
            color: '#00C4CC',
            glow: 'rgba(0, 196, 204, 0.35)',
            desc: 'We enable business development and marketing units to leverage Canva AI to instantly generate brochures, design branding slides, and auto-format social media collateral at scale.',
            svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c-2.48 0-4.5-2.02-4.5-4.5s2.02-4.5 4.5-4.5 4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5zM12.5 9c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/></svg>`
        },
        {
            name: 'Midjourney',
            cat: 'creative',
            color: '#43B0F1',
            glow: 'rgba(67, 176, 241, 0.35)',
            desc: 'We train corporate teams to deploy Midjourney pipelines for generating photorealistic marketing mockups, architectural pre-visuals, packaging structures, and dynamic advertising assets.',
            svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c-.3 0-.6.2-.8.5L3.4 15.1c-.2.3-.2.7 0 1 .2.3.5.5.8.5h15.6c.3 0 .6-.2.8-.5.2-.3.2-.7 0-1L12.8 2.5c-.2-.3-.5-.5-.8-.5zm0 4.2l5.5 8.1H6.5L12 6.2z"/></svg>`
        },
        {
            name: 'ElevenLabs',
            cat: 'creative',
            color: '#EDF2F7',
            glow: 'rgba(237, 242, 247, 0.35)',
            desc: 'We integrate ElevenLabs audio cores for voiceover generation, automating audio manuals, localization of corporate videos, and setting up interactive verbal AI assistants.',
            svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 17h2v-4H4v4zm4 2h2V9H8v10zm4 2h2V5h-2v16zm4-5h2V11h-2v5zm4 3h2v-4h-2v4z"/></svg>`
        },
        {
            name: 'Runway',
            cat: 'creative',
            color: '#FF4B4B',
            glow: 'rgba(255, 75, 75, 0.35)',
            desc: 'Artificia implements Runway cinematic video modules to produce highly professional video advertisements, product walkthrough sequences, and interactive corporate video assets.',
            svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.78 4H4.22A2.22 2.22 0 0 0 2 6.22v11.56A2.22 2.22 0 0 0 4.22 20h15.56A2.22 2.22 0 0 0 22 17.78V6.22A2.22 2.22 0 0 0 19.78 4zM13 14H7v-4h6v4z"/></svg>`
        },
        {
            name: 'Gamma',
            cat: 'creative',
            color: '#805AD5',
            glow: 'rgba(128, 90, 213, 0.35)',
            desc: 'We train administrative and sales staff to deploy Gamma platforms to instantly transform text documents into beautifully formatted responsive client proposals and corporate presentations.',
            svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5v-3l-10 5-10-5v3z"/></svg>`
        },
        {
            name: 'Lovable',
            cat: 'dev',
            color: '#FF007F',
            glow: 'rgba(255, 0, 127, 0.35)',
            desc: 'We configure Lovable.dev visual development systems to let non-technical team managers draft, test, and deploy functional internal client dashboards and operations management portals.',
            svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`
        },
        {
            name: 'Bolt',
            cat: 'dev',
            color: '#00D5FF',
            glow: 'rgba(0, 213, 255, 0.35)',
            desc: 'We utilize Bolt.new developer sandboxes to instantly build interactive prototypes, validate external API endpoints, and structure lightweight operational tools for department coordinators.',
            svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.2 9.5h-5.7l1-5.7c.1-.8-.5-1.5-1.3-1.3L4.2 12.3c-.6.3-.6 1.2 0 1.5h5.7l-1 5.7c-.1.8.5 1.5 1.3 1.3l8-9.8c.6-.3.6-1.2 0-1.5z"/></svg>`
        },
        {
            name: 'Cursor',
            cat: 'dev',
            color: '#38B2AC',
            glow: 'rgba(56, 178, 172, 0.35)',
            desc: 'We integrate Cursor AI engineering environments within your development units to double coding speeds, auto-document system directories, and establish clean unit test automation.',
            svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.64 21.9a1.07 1.07 0 0 1-1-.7l-2.4-6.3-5.2 5.2a1 1 0 0 1-1.63-.9V3.1a1 1 0 0 1 1.7-.7l15.1 12a1 1 0 0 1-.22 1.73l-6.4 1.5 2 5.3a1.07 1.07 0 0 1-.65 1.37l-1.3.6z"/></svg>`
        },
        {
            name: 'Microsoft Copilot',
            cat: 'dev',
            color: '#3B82F6',
            glow: 'rgba(59, 130, 246, 0.35)',
            desc: 'We deploy Microsoft Copilot across your Office 365 framework to automate Excel pivot calculations, compose Outlook replies, and summarize complex email cycles.',
            svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C9.24 2 7 4.24 7 7c0 1.25.46 2.39 1.22 3.28L3.44 15.1a1 1 0 0 0 .15 1.41l5.3 4.3a1 1 0 0 0 1.41-.15l4.82-5.9c.89.76 2.03 1.22 3.28 1.22 2.76 0 5-2.24 5-5s-2.24-5-5-5c-1.25 0-2.39.46-3.28 1.22L11.3 5.38C12.06 4.49 12.5 3.35 12.5 2c0-.55-.45-1-1-1zm5 8c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"/></svg>`
        }
    ];

    // Setup 2D elliptical circular loop variables
    let animationFrameId = null;
    let angleOffset = 0;
    let isPaused = false;

    // Populate all cards (arranged in flat 2D space, centered absolutely)
    tools.forEach((tool, idx) => {
        const card = document.createElement('div');
        card.className = `logo-card filter-item ${tool.cat}`;
        card.setAttribute('data-category', tool.cat);
        
        card.setAttribute('style', `
            --brand-color: ${tool.color}; 
            --brand-glow: ${tool.glow};
        `);
        
        card.innerHTML = `
            <div style="color: ${tool.color}; display: flex; align-items: center; justify-content: center;">${tool.svg}</div>
            <span>${tool.name}</span>
        `;

        // Click listener to trigger premium details modal popup
        card.addEventListener('click', () => {
            openEcosystemPopup(tool);
        });

        grid.appendChild(card);
    });

    // High-performance 2D Ellipse Animation Loop Function
    function animateEcosystem() {
        if (!isPaused) {
            angleOffset = (angleOffset - 0.20) % 360; // Smooth counter-clockwise 2D loop speed (0.2deg per frame)
            
            const items = grid.querySelectorAll('.logo-card:not(.filtered-out)');
            const count = items.length;
            if (count > 0) {
                const angleStep = 360 / count;
                items.forEach((item, idx) => {
                    const angle = (idx * angleStep + angleOffset) * Math.PI / 180;
                    const rx = 390; // broad horizontal radius
                    const ry = 100; // vertical radius to form a beautiful horizontal ellipse
                    const x = Math.cos(angle) * rx;
                    const y = Math.sin(angle) * ry;
                    item.style.setProperty('--x', `${x.toFixed(2)}px`);
                    item.style.setProperty('--y', `${y.toFixed(2)}px`);
                });
            }
        }
        animationFrameId = requestAnimationFrame(animateEcosystem);
    }

    // Start 2D loop on initialization
    animateEcosystem();

    // Pause animation loop on grid mouse enter, resume on mouse leave
    grid.addEventListener('mouseenter', () => {
        if (!grid.classList.contains('static-grid')) {
            isPaused = true;
        }
    });
    grid.addEventListener('mouseleave', () => {
        if (!grid.classList.contains('static-grid')) {
            isPaused = false;
        }
    });

    // Handle filter button triggers
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');
            const items = grid.querySelectorAll('.filter-item');

            if (filterValue === 'all') {
                // Enable 2D circular ring animation state
                grid.classList.remove('static-grid');
                grid.parentElement.classList.remove('static-viewport');
                
                items.forEach(item => {
                    item.classList.remove('filtered-out');
                    item.style.display = 'flex';
                    setTimeout(() => item.style.opacity = '1', 50);
                });
                
                isPaused = false;
                if (!animationFrameId) {
                    animateEcosystem();
                }
            } else {
                // Disable 2D circular ring animation state for static grid breakdown
                isPaused = true;
                if (animationFrameId) {
                    cancelAnimationFrame(animationFrameId);
                    animationFrameId = null;
                }
                
                grid.classList.add('static-grid');
                grid.parentElement.classList.add('static-viewport');
                
                items.forEach(item => {
                    if (item.classList.contains(filterValue)) {
                        item.classList.remove('filtered-out');
                        item.style.display = 'flex';
                        setTimeout(() => item.style.opacity = '1', 50);
                        // Clear 2D transforms for clean static flex positioning
                        item.style.removeProperty('--x');
                        item.style.removeProperty('--y');
                    } else {
                        item.classList.add('filtered-out');
                        item.style.display = 'none';
                        item.style.opacity = '0';
                    }
                });
            }
        });
    });

    // Integrated dynamic modal generator
    function openEcosystemPopup(tool) {
        const existing = document.querySelector('.ecosystem-popup-overlay');
        if (existing) existing.remove();

        const overlay = document.createElement('div');
        overlay.className = 'ecosystem-popup-overlay';
        overlay.setAttribute('style', `--brand-color: ${tool.color}; --brand-glow: ${tool.glow};`);

        let catLabel = 'Ecosystem Integration';
        if (tool.cat === 'llm') catLabel = 'Core Cognitive LLM';
        else if (tool.cat === 'automation') catLabel = 'Workflow Automation';
        else if (tool.cat === 'creative') catLabel = 'Creative AI Engine';
        else if (tool.cat === 'dev') catLabel = 'AI Development Tool';

        overlay.innerHTML = `
            <div class="ecosystem-popup-card">
                <button class="popup-close-btn" aria-label="Close Details Modal"><i class="fas fa-times"></i></button>
                <div class="popup-header">
                    <div class="popup-icon-wrapper">
                        ${tool.svg}
                    </div>
                    <h3 class="popup-title">${tool.name}</h3>
                    <span class="popup-tag">${catLabel}</span>
                </div>
                <div class="popup-body">
                    <p class="popup-description">${tool.desc}</p>
                </div>
                <button class="popup-action-btn">Integrate in Workflow</button>
            </div>
        `;

        document.body.appendChild(overlay);

        // Micro-timeout to trigger animations
        setTimeout(() => {
            overlay.classList.add('open');
        }, 10);

        const closePopup = () => {
            overlay.classList.remove('open');
            setTimeout(() => {
                overlay.remove();
            }, 400);
        };

        overlay.querySelector('.popup-close-btn').addEventListener('click', closePopup);
        
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closePopup();
        });

        overlay.querySelector('.popup-action-btn').addEventListener('click', () => {
            closePopup();
            const contactSection = document.getElementById('consultation');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

/* ==========================================================================
   4. ROI & operational Savings Calculator Logic
   ========================================================================== */
function initROICalculator() {
    const hoursSlider = document.getElementById('hoursWasted');
    const rateSlider = document.getElementById('hourlyRate');
    const autoSlider = document.getElementById('automationLevel');

    const hoursVal = document.getElementById('hoursVal');
    const rateVal = document.getElementById('rateVal');
    const autoVal = document.getElementById('autoVal');
    const teamSizeVal = document.getElementById('teamSizeVal');

    const monthlyHours = document.getElementById('monthlyHoursSaved');
    const monthlySavingsVal = document.getElementById('monthlySavingsVal');
    const annualSavingsVal = document.getElementById('annualSavingsVal');

    if (!hoursSlider) return;

    let selectedTeamSize = 75; // Default middle segmentation

    // Synchronize team segments click options with mathematical calculations
    const teamBtns = document.querySelectorAll('.team-btn');
    teamBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            teamBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedTeamSize = parseInt(btn.getAttribute('data-val'));
            teamSizeVal.innerText = selectedTeamSize;
            calculateGains();
        });
    });

    // Slide events listeners
    hoursSlider.addEventListener('input', (e) => {
        hoursVal.innerText = e.target.value;
        calculateGains();
    });

    rateSlider.addEventListener('input', (e) => {
        rateVal.innerText = `INR ${parseInt(e.target.value).toLocaleString('en-IN')}`;
        calculateGains();
    });

    autoSlider.addEventListener('input', (e) => {
        autoVal.innerText = `${e.target.value}%`;
        calculateGains();
    });

    // Core business mathematical equations
    function calculateGains() {
        const weeklyWastedHours = parseFloat(hoursSlider.value);
        const hourlyEmployeeRate = parseFloat(rateSlider.value);
        const efficiencyQuotient = parseFloat(autoSlider.value) / 100;

        // Weekly hours reclaimed per employee
        const weeklySavedEmp = weeklyWastedHours * efficiencyQuotient;
        
        // Total monthly organization hours reclaimed
        const totalMonthlyHoursReclaimed = Math.round(weeklySavedEmp * selectedTeamSize * 4.33); 
        
        // Financial monthly savings calculations
        const monthlySavings = Math.round(totalMonthlyHoursReclaimed * hourlyEmployeeRate);
        const annualSavings = monthlySavings * 12;

        // Animate outcome changes dynamically
        animateCounter(monthlyHours, totalMonthlyHoursReclaimed, ' Hours');
        animateCounter(monthlySavingsVal, monthlySavings, '₹');
        animateCounter(annualSavingsVal, annualSavings, '₹');
    }

    // Number roll counter animation helper
    function animateCounter(element, target, prefix = '') {
        let current = parseInt(element.getAttribute('data-current') || 0);
        const step = Math.ceil((target - current) / 10);
        
        function stepAnim() {
            current += step;
            if ((step > 0 && current >= target) || (step < 0 && current <= target) || step === 0) {
                current = target;
                element.setAttribute('data-current', target);
                element.innerText = prefix === '₹' ? `₹${target.toLocaleString('en-IN')}` : `${target.toLocaleString('en-IN')}${prefix}`;
            } else {
                element.innerText = prefix === '₹' ? `₹${current.toLocaleString('en-IN')}` : `${current.toLocaleString('en-IN')}${prefix}`;
                requestAnimationFrame(stepAnim);
            }
        }
        stepAnim();
    }

    // Run first calculation on page load
    calculateGains();
}

/* ==========================================================================
   5. Industry Serving Tabs Switcher Logic
   ========================================================================== */
function initIndustryTabs() {
    const tabContent = document.getElementById('tabContent');
    if (!tabContent) return;

    // Pre-written high fidelity industry arrays mapping to PDF items
    const industriesData = {
        msme: {
            title: 'MSMEs & Small Businesses',
            desc: 'Small and medium scale businesses leverage practical AI pipelines to streamline operations, lower admin overheads, and scale sales capacity without expanding headcounts.',
            apps: ['Quotations & Invoicing', 'Lead qualification CRM updates', 'Email follow-up templates', 'Business performance analytics'],
            impact: 'Faster day-to-day operations, reduced administrative workload, and higher client retention profitability.',
            image: 'msme_business.png'
        },
        healthcare: {
            title: 'Hospitals & Healthcare Organizations',
            desc: 'Medical administration, clinic groups, and hospital operations deploy specialized AI solutions to streamline patient intake logistics and automate scheduling.',
            apps: ['Patient document processing SOPs', 'Shift scheduling calendars', 'Patient reminders & SMS communication', 'Regulatory audits and reporting'],
            impact: 'Reduced administrative workloads for clinicians, faster report processing, and elevated patient experience.',
            image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80'
        },
        education: {
            title: 'Schools, Colleges & Universities',
            desc: 'Academic institutions, training centers, and universities empower teachers with automated curriculum drafting systems to supercharge student focus.',
            apps: ['Automated lesson plan generation', 'Syllabus and exam questions', 'Internal admin filing automations', 'Research support workflows'],
            impact: 'Reclaimed prep hours for educators, higher teaching quality, and unified student dashboard coordination.',
            image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80'
        },
        manufacturing: {
            title: 'Manufacturing & Supply Chains',
            desc: 'Production units, factories, and shipping hubs deploy customized reporting models to reduce raw manual entry errors in logistic documents.',
            apps: ['Supplier order matching', 'Inventory logs generation', 'Quality control logs formatting', 'SOP documents creation'],
            impact: 'Error-free logistical reports, synchronized purchase orders, and major reductions in workflow delays.',
            image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=600&q=80'
        },
        it: {
            title: 'IT & Professional Tech Firms',
            desc: 'Software companies, dev shops, and IT departments integrate advanced coding assistance frameworks to double coding speed and documentation.',
            apps: ['Custom AI coding assistants', 'Automated technical documentation', 'Structured testing scenarios', 'Repository knowledge sync'],
            impact: 'Rapid project deployment cycles, standardized coding architectures, and fast developer onboarding.',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80'
        },
        sales: {
            title: 'Corporate Sales & Accounts',
            desc: 'Convert leads faster by automating repetitive pipeline updates and generating custom proposals.',
            apps: ['Lead scoring & CRM updates', 'Personalized sales proposals', 'Custom presentations', 'Automated email sequence models'],
            impact: 'Elimination of manual entry, immediate incoming lead follow-up, and higher overall deal close rates.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80'
        },
        marketing: {
            title: 'Marketing & Brand Teams',
            desc: 'Draft high-converting copy, design graphic layouts, and launch video promotions in seconds with structured AI prompts.',
            apps: ['Brochure and ad copy drafting', 'Branding design layouts', 'Social media calendar auto-posts', 'Asset editing workflows'],
            impact: 'Drastically reduced agency dependency, faster product launches, and massive content output scaling.',
            image: 'indian_ai_instructor.png'
        },
        hr: {
            title: 'HR & Personnel Departments',
            desc: 'Accelerate recruiter operations, structure employee onboarding paths, and handle performance documentation.',
            apps: ['Resume screening templates', 'Onboarding documents generation', 'Department training structures', 'Employee performance drafts'],
            impact: 'Faster hiring metrics, structured personnel directories, and highly objective performance evaluations.',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
        }
    };

    window.switchIndustry = function(key) {
        // Toggle active button triggers
        const tabs = document.querySelectorAll('.tab-btn');
        tabs.forEach(tab => {
            const onclickAttr = tab.getAttribute('onclick') || '';
            if (onclickAttr.includes(`'${key}'`) || onclickAttr.includes(`"${key}"`)) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });

        // Trigger reflow to restart CSS animations on content swap
        tabContent.classList.remove('active-tab-animate');
        void tabContent.offsetWidth; // Force reflow
        tabContent.classList.add('active-tab-animate');

        // Load targeted industry details
        const data = industriesData[key];
        const hasImage = !!data.image;
        
        tabContent.innerHTML = `
            <div class="ind-content-layout ${hasImage ? '' : 'no-image'}">
                <div class="ind-info">
                    <h3>${data.title}</h3>
                    <p>${data.desc}</p>
                    <span class="ind-apps-title"><i class="fas fa-layer-group text-lime"></i> AI WORKFLOW APPLICATIONS:</span>
                    <ul class="ind-list">
                        ${data.apps.map((app, index) => `<li style="--item-index: ${index};"><i class="fas fa-angles-right text-lime"></i> ${app}</li>`).join('')}
                    </ul>
                </div>
                ${hasImage ? `
                <div class="ind-image-wrapper">
                    <div class="hud-corner hud-tl"></div>
                    <div class="hud-corner hud-tr"></div>
                    <div class="hud-corner hud-bl"></div>
                    <div class="hud-corner hud-br"></div>
                    <div class="ind-scanner-line"></div>
                    <img src="${data.image}" alt="${data.title} AI Integration Visual" class="ind-tab-img">
                </div>
                ` : ''}
                <div class="ind-impact-card">
                    <h4><i class="fas fa-chart-line text-lime"></i> TARGET BUSINESS IMPACT:</h4>
                    <p style="font-size: 0.9rem; line-height: 1.5; color: rgba(255,255,255,0.85); margin-bottom: 15px;">${data.impact}</p>
                    <ul class="impact-list">
                        <li><i class="fas fa-circle-check text-lime"></i> Cost-optimized automation execution</li>
                        <li><i class="fas fa-circle-check text-lime"></i> Hands-on team training deliverables</li>
                        <li><i class="fas fa-circle-check text-lime"></i> Zero external consultant dependencies</li>
                    </ul>
                </div>
            </div>
        `;
    };

    // Load initial default MSME tab
    switchIndustry('msme');
}

// 5b. Smoothly scroll to detailed industry section and switch tab
window.scrollToIndustry = function(key) {
    if (window.switchIndustry) {
        window.switchIndustry(key);
    }
    const targetSection = document.getElementById('industries');
    if (targetSection) {
        const offset = 80; // Offset to account for sticky navbar height
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = targetSection.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};

/* ==========================================================================
   6. Interactive Ecosystem Flowchart Nodes click logic
   ========================================================================== */
function initEcosystemFlowchart() {
    const detailsBox = document.getElementById('ecoDetails');
    const nodes = document.querySelectorAll('.eco-node');

    if (!detailsBox || nodes.length === 0) return;

    // Node description mapping details
    const nodeDetails = {
        in: {
            title: 'Step 1: Secure Data Inputs',
            desc: 'Incoming data is securely routed from corporate channels like client contact webforms, incoming support emails, internal CRM database records, or shared Google Sheets. No public leakage is possible as we establish private API endpoints.',
            deliverables: ['Custom Webhooks', 'Structured API Fields', 'Lead capture pipelines']
        },
        logic: {
            title: 'Step 2: Workflow Automation Core (Make/n8n/Zapier)',
            desc: 'Middle layer orchestration. We build precise logical checks that automatically structure incoming variables, check database records, and route variables to the correct cognitive processing models without manual copy-pasting.',
            deliverables: ['CRM integrations', 'Multi-app logic triggers', 'Database synchronization']
        },
        ai: {
            title: 'Step 3: AI Cognitive Processor (Claude/Gemini/GPTs)',
            desc: 'Corporate information is analyzed by secure Generative AI layers. Custom GPT assistants process the input, generate hyper-personalized email drafts, outline invoices, or summarize lengthy medical records based on your pre-programmed SOPs.',
            deliverables: ['Role-specific prompt templates', 'Internal SOP database syncing', 'High-context auto-summarization']
        },
        out: {
            title: 'Step 4: Automated Business Outcome',
            desc: 'The completed output is delivered instantly. Whether updating a client record in your CRM, routing a response draft to your manager\'s review folder, or triggering an automated WhatsApp notification—the loop completes without manual typing.',
            deliverables: ['Auto-drafted replies', 'Live dashboard updates', 'Immediate team notifications']
        }
    };

    nodes.forEach(node => {
        node.addEventListener('click', () => {
            // Toggle active visual highlight states
            nodes.forEach(n => n.classList.remove('active'));
            node.classList.add('active');

            const key = node.getAttribute('data-target');
            const data = nodeDetails[key];

            detailsBox.innerHTML = `
                <h4><i class="fas fa-circle-nodes text-lime"></i> ${data.title}</h4>
                <p style="margin-top: 10px; font-size: 0.9rem; line-height: 1.6; color: rgba(255,255,255,0.9);">${data.desc}</p>
                <ul style="list-style: none; margin-top: 15px; display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    ${data.deliverables.map(del => `
                        <li style="font-size: 0.8rem; font-weight:700; color: var(--text-muted); display:flex; align-items:center; gap:6px;">
                            <i class="fas fa-check text-lime"></i> ${del}
                        </li>
                    `).join('')}
                </ul>
            `;
        });
    });
}

/* ==========================================================================
   7. Scroll-Triggered KPI Metric Counter Animators
   ========================================================================== */
function initCounters() {
    const metrics = [
        { id: 'metric1', target: 80, suffix: '%' },
        { id: 'metric2', target: 65, suffix: '%' },
        { id: 'metric3', target: 5, suffix: 'x' },
        { id: 'metric4', target: 92, suffix: '%' }
    ];

    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const metric = metrics.find(m => m.id === element.id);
                if (metric) {
                    animateValue(element, 0, metric.target, 1200, metric.suffix);
                    observer.unobserve(element); // Stop observing after single trigger
                }
            }
        });
    }, observerOptions);

    metrics.forEach(metric => {
        const el = document.getElementById(metric.id);
        if (el) observer.observe(el);
    });

    function animateValue(obj, start, end, duration, suffix = '') {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            obj.innerHTML = value + suffix;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
}

/* ==========================================================================
   8. Testimonials Sliding Carousel Component
   ========================================================================== */
function initTestimonialsSlider() {
    const track = document.getElementById('testimonialTrack');
    const dotsContainer = document.getElementById('sliderDots');
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');

    if (!track) return;

    // High fidelity test reviews mapping to corporate buyer types
    const reviews = [
        {
            text: "We integrated Artificia's corporate training for our medical admin staff. We reclaim over 20 hours per employee weekly on shifts scheduling and reporting workflows. An absolute game-changer for hospital productivity.",
            name: "Dr. Rajesh Shah",
            title: "Director of Operations",
            company: "Apex Healthcare Hospital Group",
            image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=150&h=150&q=80"
        },
        {
            text: "Artificia completely rebuilt our inventory tracking reporting pipelines. The custom n8n and ChatGPT assistant systems built by our staff paid for the program in less than 3 weeks.",
            name: "Sanjay Mehta",
            title: "Managing Director",
            company: "Mehta Auto Components & Manufacturing",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
        },
        {
            text: "Our IT development acceleration rates doubled within weeks of integrating their custom coding copilot modules. Developers onboard faster, and our technical drafts are 100% standardized.",
            name: "Priyanka Joshi",
            title: "VP of Engineering",
            company: "Vibrant Core Tech Solutions",
            image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=150&h=150&q=80"
        },
        {
            text: "As an MSME, hiring expensive consultants was out of the question. Artificia trained our sales and HR managers to construct custom automations. Highly practical outcome-oriented program.",
            name: "Anil Patel",
            title: "Founder",
            company: "Patel Exports & Logistics",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
        }
    ];

    let currentIndex = 0;
    let autoplayTimer = null;

    // Populate reviews markup
    reviews.forEach((rev, idx) => {
        const card = document.createElement('div');
        card.className = `testimonial-card ${idx === 0 ? 'active' : ''}`;
        card.innerHTML = `
            <div class="t-avatar-box">
                <img src="${rev.image}" alt="${rev.name}" class="t-avatar-img">
            </div>
            <div class="t-stars">
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
            <p class="t-text">"${rev.text}"</p>
            <div class="t-user">
                <span class="t-name">${rev.name}</span>
                <span class="t-title">${rev.title}</span>
                <span class="t-company">${rev.company}</span>
            </div>
        `;
        track.appendChild(card);

        // Dot indicators
        const dot = document.createElement('div');
        dot.className = `slider-dot ${idx === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => {
            goToSlide(idx);
            resetAutoplay();
        });
        dotsContainer.appendChild(dot);
    });

    function goToSlide(idx) {
        const cards = track.querySelectorAll('.testimonial-card');
        const dots = dotsContainer.querySelectorAll('.slider-dot');
        
        cards[currentIndex].classList.remove('active');
        dots[currentIndex].classList.remove('active');

        currentIndex = idx;
        if (currentIndex >= reviews.length) currentIndex = 0;
        if (currentIndex < 0) currentIndex = reviews.length - 1;

        cards[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
    }

    // Nav triggers
    nextBtn.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
        resetAutoplay();
    });

    prevBtn.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
        resetAutoplay();
    });

    // Autoplay loops
    function startAutoplay() {
        autoplayTimer = setInterval(() => {
            goToSlide(currentIndex + 1);
        }, 6000);
    }

    function resetAutoplay() {
        clearInterval(autoplayTimer);
        startAutoplay();
    }

    startAutoplay();
}

/* ==========================================================================
   9. Pre-written Corporate FAQ Accordion Populator
   ========================================================================== */
function initFAQs() {
    const acc = document.getElementById('faqAccordion');
    if (!acc) return;

    // Pre-written, high-quality, comprehensive B2B FAQ lists
    const faqs = [
        {
            q: "How does Artificia ensure our corporate proprietary data remains secure during AI training?",
            a: "Data privacy is our absolute priority. We perform all implementation workshops in isolated sandbox environments using mock data parameters. Furthermore, we train your workforce on how to configure secure API calls (such as OpenAI and Google Vertex API) that systematically exclude inputs from model training databases, ensuring compliance with standard IP laws."
        },
        {
            q: "We do not have a software engineering team. Can our non-technical managers participate?",
            a: "Yes. Our curriculum is custom-engineered to be completely 'No-Code' friendly. We leverage visual interface tools (like Make, Zapier, and custom GPT builders) that allow sales, operations, and HR teams to design fully automated operational loops using visual flowcharts, requiring zero syntax coding."
        },
        {
            q: "Where does the training take place? Do you provide offline options in Vadodara?",
            a: "We provide complete flexibility based on corporate preferences. We facilitate live offline sessions at your offices in Gotri/Vadodara, customized remote online labs, or blended hybrid formats designed to mesh smoothly with employee shift calendars to protect output."
        },
        {
            q: "How does the 'Custom Curriculum' process work? How do you map our actual challenges?",
            a: "Before a single workbook is opened, our integration specialists spend Phase 1 (1-2 weeks) in structural discovery sessions with your managers. We analyze actual document pipelines, manual task trackers, and CRM structures. We then design training materials incorporating your actual company SOPs and database endpoints."
        },
        {
            q: "What kind of ongoing support is provided after the 60-day program concludes?",
            a: "Workflow automation systems occasionally break when tools update API endpoints. That is why our Phase 5 framework includes 30 days of direct mentorship support, weekly QA office hours, and technical system updates to guarantee lasting workforce adoption and operational consistency."
        },
        {
            q: "What is the typical payoff timeline for Artificia's corporate program?",
            a: "The vast majority of MSMEs, manufacturing hubs, and professional firms achieve visible return on investment within 30 to 45 days. By empowering employees to automate manual reporting, CRM entries, and invoicing, the reclaimed hours translate to thousands in operational costs saved."
        }
    ];

    // Mobile Content Pruning: Show top 4 most critical FAQs on mobile devices
    const faqsToShow = window.innerWidth < 768 ? faqs.slice(0, 4) : faqs;

    faqsToShow.forEach((faq, idx) => {
        const item = document.createElement('div');
        item.className = 'faq-item';
        item.innerHTML = `
            <button class="faq-trigger" aria-expanded="false" aria-controls="faq-panel-${idx}">
                <span>${faq.q}</span>
                <span class="faq-icon-box"><i class="fas fa-chevron-down"></i></span>
            </button>
            <div class="faq-panel" id="faq-panel-${idx}" role="region">
                <div class="faq-body">
                    <p>${faq.a}</p>
                </div>
            </div>
        `;
        acc.appendChild(item);
    });

    // Accordion expand/collapse transition logic
    const triggers = acc.querySelectorAll('.faq-trigger');
    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const item = trigger.parentNode;
            const panel = item.querySelector('.faq-panel');
            const isActive = item.classList.contains('active');

            // Collapse all other panels for clean accordions
            acc.querySelectorAll('.faq-item').forEach(other => {
                other.classList.remove('active');
                other.querySelector('.faq-panel').style.maxHeight = null;
                other.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
            });

            if (!isActive) {
                item.classList.add('active');
                panel.style.maxHeight = panel.scrollHeight + 'px';
                trigger.setAttribute('aria-expanded', 'true');
            }
        });
    });
}

/* ==========================================================================
   10. Forms Submission Controllers (Dynamic Validation & Success)
   ========================================================================== */
function initFormsHandler() {
    // Consultation Booking Form Handler
    const cForm = document.getElementById('consultationForm');
    const cSuccess = document.getElementById('consultSuccess');
    if (cForm && cSuccess) {
        cForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = cForm.querySelector('button[type="submit"]');
            const origText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
            btn.disabled = true;

            await submitToN8N({
                formSource: 'Main Consultation Form',
                name: document.getElementById('cName').value,
                email: document.getElementById('cEmail').value,
                phone: document.getElementById('cPhone').value,
                company: document.getElementById('cCompany').value,
                designation: '',
                industry: '',
                teamSize: '',
                trainCount: document.getElementById('cTrainCount').value,
                adoption: document.getElementById('cAdoption').value,
                timeline: '',
                location: document.getElementById('cLocation').value,
                address: document.getElementById('cAddress').value,
                objectives: Array.from(document.querySelectorAll('input[name="cObjective"]:checked')).map(cb => cb.value).join(', '),
                challenge: document.getElementById('cChallenge').value,
                quizScore: ''
            });

            cForm.style.opacity = '0';
            setTimeout(() => {
                cForm.classList.add('hidden');
                cSuccess.classList.remove('hidden');
            }, 300);
        });
    }

    // Exit Intent Lead Form Handler
    const eForm = document.getElementById('exitForm');
    const eSuccess = document.getElementById('exitSuccess');
    if (eForm && eSuccess) {
        eForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = eForm.querySelector('button[type="submit"]');
            const origText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
            btn.disabled = true;

            await submitToN8N({
                formSource: 'Exit Intent Popup',
                name: document.getElementById('eName').value,
                email: document.getElementById('eEmail').value,
                phone: document.getElementById('ePhone').value,
                company: document.getElementById('eCompany').value,
                designation: '',
                industry: '',
                teamSize: '',
                trainCount: document.getElementById('eTrainCount').value,
                adoption: document.getElementById('eAdoption').value,
                timeline: '',
                location: document.getElementById('eLocation').value,
                address: document.getElementById('eAddress').value,
                objectives: Array.from(document.querySelectorAll('input[name="eObjective"]:checked')).map(cb => cb.value).join(', '),
                challenge: document.getElementById('eChallenge').value,
                quizScore: ''
            });

            eForm.style.opacity = '0';
            setTimeout(() => {
                eForm.classList.add('hidden');
                eSuccess.classList.remove('hidden');
            }, 300);
        });
    }
}

/* ==========================================================================
   11. Multi-Step AI Readiness Diagnostic Quiz System
   ========================================================================== */
function initReadinessQuiz() {
    const modal = document.getElementById('assessmentModal');
    const quizSlider = document.getElementById('quizSlider');
    
    if (!quizSlider || !modal) return;

    const slides = quizSlider.querySelectorAll('.quiz-slide:not(#quizResultSlide)');
    const resultSlide = document.getElementById('quizResultSlide');
    
    let currentSlideIndex = 0;
    let accumulativeScore = 0;

    // Open/Close triggers
    window.openAssessmentModal = function() {
        modal.classList.add('open');
        resetQuiz();
    };

    window.closeAssessmentModal = function() {
        modal.classList.remove('open');
    };

    // Reset parameters on restart
    function resetQuiz() {
        currentSlideIndex = 0;
        accumulativeScore = 0;
        slides.forEach((slide, idx) => {
            slide.classList.remove('active');
            if (idx === 0) slide.classList.add('active');
        });
        resultSlide.classList.remove('active');
        
        // Reset lead form states
        const leadForm = document.getElementById('quizLeadForm');
        const successBox = document.getElementById('quizSuccessState');
        const formWrapper = document.getElementById('quizLeadFormWrapper');
        if (leadForm) {
            leadForm.reset();
            leadForm.classList.remove('hidden');
            leadForm.style.opacity = '1';
        }
        if (successBox) successBox.classList.add('hidden');
        if (formWrapper) formWrapper.classList.remove('hidden');
    }

    // Handle option click selection
    const options = quizSlider.querySelectorAll('.quiz-option');
    options.forEach(opt => {
        opt.addEventListener('click', () => {
            const points = parseInt(opt.getAttribute('data-points') || 0);
            accumulativeScore += points;

            // Transition to next slide
            slides[currentSlideIndex].classList.remove('active');
            currentSlideIndex++;

            if (currentSlideIndex < slides.length) {
                slides[currentSlideIndex].classList.add('active');
            } else {
                // Show mathematical result dashboard
                renderResults();
            }
        });
    });

    // Score calculations and outcomes narratives
    function renderResults() {
        resultSlide.classList.add('active');
        const scoreVal = document.getElementById('quizScoreVal');
        const maturityTitle = document.getElementById('quizMaturityTitle');
        const resultDesc = document.getElementById('quizResultDesc');

        scoreVal.innerText = accumulativeScore;

        if (accumulativeScore <= 80) {
            maturityTitle.innerText = "Level 1: AI Novice (High Potential Wasted)";
            resultDesc.innerText = "Your organization relies heavily on slow manual entries and lacks unified tool access. You are losing 15+ hours weekly per employee. We recommend scheduling an immediate Discovery Audit to map automation pathways.";
        } else if (accumulativeScore <= 140) {
            maturityTitle.innerText = "Level 2: AI Explorer (Disconnected Satellites)";
            resultDesc.innerText = "Individuals are leveraging ChatGPT for writing tasks, but your core software systems remain un-automated. Reclaim massive budgets by standardizing database triggers and n8n pipelines.";
        } else {
            maturityTitle.innerText = "Level 3: AI Leader (Leveraging Multi-Flows)";
            resultDesc.innerText = "Excellent capability. You have connected simple automation blocks, but your teams are ready to deploy autonomous 'Agentic' pipelines and customized SOP databases. Let's design specialized team sandboxes.";
        }
    }

    // Lead Capture Submission within result slide
    const qLeadForm = document.getElementById('quizLeadForm');
    const qSuccessBox = document.getElementById('quizSuccessState');
    const qFormWrapper = document.getElementById('quizLeadFormWrapper');

    if (qLeadForm && qSuccessBox && qFormWrapper) {
        qLeadForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = qLeadForm.querySelector('button[type="submit"]');
            const origText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            btn.disabled = true;

            await submitToN8N({
                formSource: 'AI Readiness Quiz',
                name: document.getElementById('qName').value,
                email: '',
                phone: document.getElementById('qPhone').value,
                company: '',
                designation: '',
                industry: '',
                teamSize: '',
                trainCount: '',
                adoption: '',
                timeline: '',
                location: '',
                address: '',
                objectives: '',
                challenge: '',
                quizScore: document.getElementById('quizScoreVal')?.innerText || ''
            });

            qLeadForm.style.opacity = '0';
            setTimeout(() => {
                qFormWrapper.classList.add('hidden');
                qSuccessBox.classList.remove('hidden');
            }, 300);
        });
    }
}

/* ==========================================================================
   12. Exit Intent Cursor Trajectory Setup
   ========================================================================== */
function initExitIntent() {
    const modal = document.getElementById('exitIntentModal');
    if (!modal) return;

    let hasFired = false;

    // Detect mouse leaving viewport towards the top
    document.addEventListener('mouseleave', (e) => {
        if (e.clientY < 30 && !hasFired) {
            modal.classList.add('open');
            hasFired = true; // Fire only once per session
        }
    });

    window.closeExitModal = function() {
        modal.classList.remove('open');
    };
}

/* ==========================================================================
   13. Horizontal Hierarchy Chart Sequential Loading
   ========================================================================== */
function initHierarchyChart() {
    const container = document.getElementById('differentHierarchy');
    if (!container) return;

    const columns = container.querySelectorAll('.hierarchy-column');
    if (columns.length === 0) return;

    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                columns.forEach((col, idx) => {
                    setTimeout(() => {
                        col.classList.add('loaded');
                    }, idx * 160); // Stagger columns loading from left to right sequentially
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    observer.observe(container);
}

/* ==========================================================================
   14. Curved Winding Roadmap Framework Sequential Loading
   ========================================================================== */
function initRoadmapChart() {
    const wrapper = document.getElementById('frameworkRoadmap');
    if (!wrapper) return;

    const nodes = wrapper.querySelectorAll('.roadmap-node');
    if (nodes.length === 0) return;

    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 1. Draw SVG vector lane center dashed line
                wrapper.classList.add('draw-road');

                // 2. Sequential loading entrance for each Phase Node (1.0 second delay stagger)
                nodes.forEach((node, idx) => {
                    setTimeout(() => {
                        node.classList.add('loaded');
                    }, idx * 1000); // 1000ms sequentially spaced
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    observer.observe(wrapper);
}

/* ==========================================================================
   15. Industry Transformation Partners Carousel System
   ========================================================================== */
function initPartnersCarousel() {
    const track = document.getElementById('partnersCarouselTrack');
    const prevBtn = document.getElementById('partnerPrevBtn');
    const nextBtn = document.getElementById('partnerNextBtn');
    if (!track || !prevBtn || !nextBtn) return;

    const cards = track.querySelectorAll('.partner-square-card');
    if (cards.length === 0) return;

    let currentIndex = 0;

    // Helper to calculate visible cards based on screen width
    function getVisibleCardsCount() {
        const width = window.innerWidth;
        if (width <= 480) return 1;
        if (width <= 768) return 2;
        if (width <= 991) return 3;
        return 4; // Desktop
    }

    function updateCarousel() {
        const visibleCards = getVisibleCardsCount();
        const maxIndex = Math.max(0, cards.length - visibleCards);

        // Clamping current index
        if (currentIndex > maxIndex) {
            currentIndex = maxIndex;
        }

        // Calculate card offset width dynamically including CSS gaps
        const cardWidth = cards[0].getBoundingClientRect().width;
        let gap = 20; // Default gap on desktop
        const width = window.innerWidth;
        if (width <= 768) gap = 12;
        else if (width <= 991) gap = 16;

        // Shift track using transform translateX
        const offset = currentIndex * (cardWidth + gap);
        track.style.transform = `translateX(-${offset}px)`;

        // Update button disabled states
        prevBtn.disabled = (currentIndex === 0);
        nextBtn.disabled = (currentIndex >= maxIndex);
    }

    // Button event listeners
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextBtn.addEventListener('click', () => {
        const visibleCards = getVisibleCardsCount();
        const maxIndex = cards.length - visibleCards;
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarousel();
        }
    });

    // Handle screen resize events
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            updateCarousel();
        }, 100);
    });

    // Initial positioning
    setTimeout(updateCarousel, 300);
}

/* ==========================================================================
   16. Interactive Holographic B2B Console & Staircase Hover Integration
   ========================================================================== */
function initHeroConsoleHover() {
    const staircase = document.getElementById('heroStaircase');
    const consoleBody = document.getElementById('consoleBody');
    if (!staircase || !consoleBody) return;

    const steps = staircase.querySelectorAll('.stair-step');
    const beams = document.querySelectorAll('.hologram-beams .beam');

    // Dynamic, realistic department-specific training logs
    const logDatabase = {
        1: [
            { text: "> [SALES AI] Initiating HubSpot Lead Scraper protocol...", type: "system" },
            { text: "> [SALES AI] Parsing incoming raw contact payloads...", type: "system" },
            { text: "> [SALES AI] Running Llama-3-70B lead scoring vector match...", type: "action" },
            { text: "> [SALES AI] Success: Identified 42 premium enterprise accounts.", type: "success" },
            { text: "> [SALES AI] Relaying qualified leads to outreach pipelines.", type: "success" }
        ],
        2: [
            { text: "> [MARKETING] Connecting ActiveCampaign Webhook relay...", type: "system" },
            { text: "> [MARKETING] Executing GPT-4o autonomous copy generator...", type: "action" },
            { text: "> [MARKETING] Prompt compiled: Target local Vadodara tech CEOs.", type: "system" },
            { text: "> [MARKETING] Deploying 14 unique n8n automation channels...", type: "action" },
            { text: "> [MARKETING] Success: Automated campaign active. CTR +18.2% boost.", type: "success" }
        ],
        3: [
            { text: "> [FINANCE] Connecting global vendor ledger OCR relays...", type: "system" },
            { text: "> [FINANCE] Verifying invoices against SEC/GAAP compliance...", type: "action" },
            { text: "> [FINANCE] Caution: Flagged 2 discrepancies (Vendor ID: #F-982).", type: "warn" },
            { text: "> [FINANCE] Generating real-time financial auditing brief...", type: "action" },
            { text: "> [FINANCE] Success: Audited $420k corporate overhead with zero leakage.", type: "success" }
        ],
        4: [
            { text: "> [OPERATIONS] Spawning autonomous JIRA/Slack feedback agents...", type: "system" },
            { text: "> [OPERATIONS] Parsing support queue sentiment and severity...", type: "action" },
            { text: "> [OPERATIONS] Initializing Python sandbox n8n script execution...", type: "action" },
            { text: "> [OPERATIONS] Auto-assigning high-severity tickets to lead devs.", type: "system" },
            { text: "> [OPERATIONS] Success: Reclaimed 89% ticket resolution time.", type: "success" }
        ]
    };

    let activeTimeout = null;
    let typingTimeouts = [];
    let cycleInterval = null;
    let currentCycleStep = 1;

    // Typewriter effect function for console lines
    function renderStepLogs(stepNum) {
        // Clear all running typing animations
        typingTimeouts.forEach(t => clearTimeout(t));
        typingTimeouts = [];

        // Clear console content with a fast retro terminal flicker effect
        consoleBody.innerHTML = '<div class="console-line system-line">> RELAY CONNECTION ESTABLISHED...</div>';
        consoleBody.scrollTop = consoleBody.scrollHeight;

        const lines = logDatabase[stepNum];
        if (!lines) return;

        lines.forEach((lineObj, idx) => {
            const timeout = setTimeout(() => {
                const lineDiv = document.createElement('div');
                lineDiv.className = `console-line ${lineObj.type}-line`;
                lineDiv.innerText = lineObj.text;
                consoleBody.appendChild(lineDiv);

                // Auto scroll console body to bottom
                consoleBody.scrollTop = consoleBody.scrollHeight;
            }, (idx + 1) * 350); // Fast, snappy B2B load staggered logs
            typingTimeouts.push(timeout);
        });
    }

    // Highlight specific step and corresponding hologram laser beam
    function highlightStep(stepNum) {
        // Reset all steps, beams, and connections
        steps.forEach(s => s.classList.remove('active'));
        beams.forEach(b => b.classList.remove('highlighted-beam'));

        const targetStep = staircase.querySelector(`.step-${stepNum}`);
        if (targetStep) targetStep.classList.add('active');

        const targetBeam = document.querySelector(`.hologram-beams .beam-${stepNum}`);
        if (targetBeam) targetBeam.classList.add('highlighted-beam');

        renderStepLogs(stepNum);
    }

    // Setup hover listeners
    steps.forEach(step => {
        const stepNum = parseInt(step.getAttribute('data-step'), 10);

        step.addEventListener('mouseenter', () => {
            // Stop automatic cycle on user interaction
            clearInterval(cycleInterval);
            cycleInterval = null;

            highlightStep(stepNum);
        });

        step.addEventListener('mouseleave', () => {
            // Delay restart of idle cycling
            if (!cycleInterval) {
                clearTimeout(activeTimeout);
                activeTimeout = setTimeout(startAutoCycle, 5000);
            }
        });
    });

    // Automatically cycle through steps when idle to keep hero section extremely dynamic and active
    function startAutoCycle() {
        if (cycleInterval) clearInterval(cycleInterval);

        cycleInterval = setInterval(() => {
            highlightStep(currentCycleStep);
            currentCycleStep = (currentCycleStep % 4) + 1; // Cycle 1 -> 2 -> 3 -> 4 -> 1
        }, 6000); // Highlight a new corporate AI step every 6s
    }

    // Initialize with first step highlight and start idle cycle immediately
    setTimeout(() => {
        highlightStep(1);
        currentCycleStep = 2;
        startAutoCycle();
    }, 1500);
}

// Dedicated B2B Booking Modal Control Systems
window.openBookingModal = function() {
    const bookingModal = document.getElementById('bookingModal');
    if (bookingModal) {
        bookingModal.classList.add('open');
        
        // Reset form and success state when opening
        const form = document.getElementById('modalBookingForm');
        const success = document.getElementById('bookingModalSuccess');
        if (form && success) {
            form.reset();
            form.classList.remove('hidden');
            form.style.opacity = '1';
            success.classList.add('hidden');
        }
    }
};

window.closeBookingModal = function() {
    const bookingModal = document.getElementById('bookingModal');
    if (bookingModal) {
        bookingModal.classList.remove('open');
    }
};

// Handle booking modal form submissions
document.addEventListener('DOMContentLoaded', () => {
    const bForm = document.getElementById('modalBookingForm');
    const bSuccess = document.getElementById('bookingModalSuccess');
    if (bForm && bSuccess) {
        bForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = bForm.querySelector('button[type="submit"]');
            const origText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
            btn.disabled = true;

            await submitToN8N({
                formSource: 'Booking Modal',
                name: document.getElementById('mbName').value,
                email: document.getElementById('mbEmail').value,
                phone: document.getElementById('mbPhone').value,
                company: document.getElementById('mbCompany').value,
                designation: '',
                industry: '',
                teamSize: '',
                trainCount: document.getElementById('mbTrainCount').value,
                adoption: document.getElementById('mbAdoption').value,
                timeline: '',
                location: document.getElementById('mbLocation').value,
                address: document.getElementById('mbAddress').value,
                objectives: Array.from(document.querySelectorAll('input[name="mbObjective"]:checked')).map(cb => cb.value).join(', '),
                challenge: document.getElementById('mbChallenge').value,
                quizScore: ''
            });

            bForm.style.opacity = '0';
            setTimeout(() => {
                bForm.classList.add('hidden');
                bSuccess.classList.remove('hidden');
            }, 300);
        });
    }
});

/* ==========================================================================
   17. Global Scroll Reveal Animation System
   ========================================================================== */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    if (revealElements.length === 0) return;

    const observerOptions = {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(el => observer.observe(el));
}


