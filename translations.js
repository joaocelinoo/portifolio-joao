const translations = {
    en: {
        // Navigation
        nav: {
            home: "Home",
            about: "About",
            experience: "Experience",
            contact: "Contact"
        },
        
        // Hero Section
        hero: {
            greeting: "Hello, I'm",
            subtitle: "QA Engineer | Software Test Engineer",
            learnMore: "Learn more",
            myExperience: "My experience"
        },
        
        // About Section
        about: {
            title: "About Me",
            subtitle: "Get to know a bit about my journey",
            storyTitle: "My Story",
            story1: "I am a dedicated QA Engineer with strong experience in manual and automated testing across various industries, including fashion, finance, and gaming. Over the years, I have developed expertise in tools like Postman, Cypress, Selenium, and Playwright, working with frameworks and methodologies like Scrum and Agile.",
            story2: "I have a proven track record of ensuring software quality through rigorous frontend and backend testing, defect management, and continuous improvement of testing processes. I am passionate about technology and always seek opportunities to apply and expand my skills, especially in automation and improving test efficiency.",
            skillsTitle: "Main Skills",
            skills: {
                manualTesting: "Manual Testing",
                selenium: "Selenium",
                cypress: "Cypress",
                playwright: "Playwright",
                postman: "Postman",
                scrum: "Scrum",
                agile: "Agile",
                stressTest: "Stress Test",
                regression: "Regression Test",
                whiteBox: "White Box Testing",
                blackBox: "Black Box Testing",
                devopsTests: "DevOps Tests",
                aiTesting: "AI Testing Creation",
                apiTests: "API Testing",
                dbTests: "Database Testing",
                mobileTests: "Mobile Testing",
                gameTests: "Game Testing"
            },
            stats: {
                yearsExperience: "Years of Experience",
                testingTools: "Testing Tools"
            }
        },
        
        // Experience Section
        experience: {
            title: "My Experience",
            subtitle: "A journey of learning and growth",
            descriptions: {
                kuehneNagel: "Identification of test scenarios and conditions, development and execution of manual and automated test cases. Defect and fault control, frontend and backend testing execution, and automated test execution using Scrum and Agile methodologies.",
                arkadium: "Identification of test scenarios and conditions, development and execution of manual and automated test cases. Defect and fault control, game testing, execution of automated unit tests for games using Scrum and Agile methodologies.",
                farfetch: "Identification of test scenarios and conditions, development and execution of manual and automated test cases. Defect and fault control, frontend and backend testing execution, and automated test execution using Scrum and Agile methodologies.",
                itau: "Identification of test scenarios and conditions, development and execution of manual and automated test cases. Defect and fault control, frontend and backend testing execution, and automated test execution using Scrum and Agile methodologies."
            }
        },
        
        // Contact Section
        contact: {
            title: "Let's Connect",
            subtitle: "Get in touch with me through social networks",
            linkedin: "Connect professionally",
            github: "Check my projects",
            contactInfo: "Contact Information"
        },
        
        // Footer
        footer: {
            rights: "All rights reserved.",
            developed: "Developed with",
            coffee: "and lots of coffee"
        }
    },
    
    pt: {
        // Navigation
        nav: {
            home: "Início",
            about: "Sobre",
            experience: "Experiências",
            contact: "Contato"
        },
        
        // Hero Section
        hero: {
            greeting: "Olá, eu sou",
            subtitle: "QA Engineer | Software Test Engineer",
            learnMore: "Conheça mais",
            myExperience: "Minhas experiências"
        },
        
        // About Section
        about: {
            title: "Sobre Mim",
            subtitle: "Conheça um pouco da minha jornada",
            storyTitle: "Minha História",
            story1: "Sou um QA Engineer dedicado com forte experiência em testes manuais e automatizados em diversas indústrias, incluindo moda, finanças e jogos. Ao longo dos anos, desenvolvi expertise em ferramentas como Postman, Cypress, Selenium e Playwright, trabalhando com frameworks e metodologias como Scrum e Agile.",
            story2: "Tenho um histórico comprovado de garantir qualidade de software através de testes rigorosos de frontend e backend, gerenciamento de defeitos e melhoria contínua dos processos de teste. Sou apaixonado por tecnologia e sempre busco oportunidades para aplicar e expandir minhas habilidades, especialmente em automação e melhoria da eficiência de testes.",
            skillsTitle: "Principais Habilidades",
            skills: {
                manualTesting: "Testes Manuais",
                selenium: "Selenium",
                cypress: "Cypress",
                playwright: "Playwright",
                postman: "Postman",
                scrum: "Scrum",
                agile: "Agile",
                stressTest: "Teste de Stress",
                regression: "Teste de Regressão",
                whiteBox: "Teste de Caixa Branca",
                blackBox: "Teste de Caixa Preta",
                devopsTests: "Testes DevOps",
                aiTesting: "Criação de Testes com IA",
                apiTests: "Testes de API",
                dbTests: "Testes de Banco de Dados",
                mobileTests: "Testes Mobile",
                gameTests: "Testes de Jogos"
            },
            stats: {
                yearsExperience: "Anos de Experiência",
                testingTools: "Ferramentas de Teste"
            }
        },
        
        // Experience Section
        experience: {
            title: "Minhas Experiências",
            subtitle: "Uma jornada de aprendizado e crescimento",
            descriptions: {
                kuehneNagel: "Identificação de cenários e condições de teste, elaboração e execução de casos de teste manuais e automatizados. Controle de falhas e defeitos, execução de testes de frontend e backend, e execução de testes automatizados utilizando metodologias Scrum e Agile.",
                arkadium: "Identificação de cenários e condições de teste, elaboração e execução de casos de teste manuais e automatizados. Controle de falhas e defeitos, testes de jogos, execução de testes automatizados de unidade para jogos utilizando metodologias Scrum e Agile.",
                farfetch: "Identificação de cenários e condições de teste, elaboração e execução de casos de teste manuais e automatizados. Controle de falhas e defeitos, execução de testes de frontend e backend, e execução de testes automatizados utilizando metodologias Scrum e Agile.",
                itau: "Identificação de cenários e condições de teste, elaboração e execução de casos de teste manuais e automatizados. Controle de falhas e defeitos, execução de testes de frontend e backend, e execução de testes automatizados utilizando metodologias Scrum e Agile."
            }
        },
        
        // Contact Section
        contact: {
            title: "Vamos Conectar",
            subtitle: "Entre em contato comigo através das redes sociais",
            linkedin: "Conecte-se profissionalmente",
            github: "Veja meus projetos",
            contactInfo: "Informações de Contato"
        },
        
        // Footer
        footer: {
            rights: "Todos os direitos reservados.",
            developed: "Desenvolvido com",
            coffee: "e muito café"
        }
    }
};

class TranslationManager {
    constructor() {
        this.currentLanguage = 'en';
        this.translations = translations;
    }
    
    setLanguage(language) {
        if (this.translations[language]) {
            this.currentLanguage = language;
        }
    }
    
    getTranslation(key) {
        const keys = key.split('.');
        let translation = this.translations[this.currentLanguage];
        
        for (const k of keys) {
            if (translation && translation[k]) {
                translation = translation[k];
            } else {
                console.warn(`Translation not found for key: ${key}`);
                return key;
            }
        }
        
        return translation;
    }
    
    translateElement(element, key) {
        const translation = this.getTranslation(key);
        if (translation && element) {
            element.textContent = translation;
        }
    }
    
    translateAll() {
        // Navigation
        this.translateElement(document.querySelector('[data-translate="nav.home"]'), 'nav.home');
        this.translateElement(document.querySelector('[data-translate="nav.about"]'), 'nav.about');
        this.translateElement(document.querySelector('[data-translate="nav.experience"]'), 'nav.experience');
        this.translateElement(document.querySelector('[data-translate="nav.contact"]'), 'nav.contact');
        
        // Hero
        this.translateElement(document.querySelector('[data-translate="hero.greeting"]'), 'hero.greeting');
        this.translateElement(document.querySelector('[data-translate="hero.learnMore"]'), 'hero.learnMore');
        this.translateElement(document.querySelector('[data-translate="hero.myExperience"]'), 'hero.myExperience');
        
        // About
        this.translateElement(document.querySelector('[data-translate="about.title"]'), 'about.title');
        this.translateElement(document.querySelector('[data-translate="about.subtitle"]'), 'about.subtitle');
        this.translateElement(document.querySelector('[data-translate="about.storyTitle"]'), 'about.storyTitle');
        this.translateElement(document.querySelector('[data-translate="about.story1"]'), 'about.story1');
        this.translateElement(document.querySelector('[data-translate="about.story2"]'), 'about.story2');
        this.translateElement(document.querySelector('[data-translate="about.skillsTitle"]'), 'about.skillsTitle');
        this.translateElement(document.querySelector('[data-translate="about.manualTesting"]'), 'about.skills.manualTesting');
        this.translateElement(document.querySelector('[data-translate="about.automation"]'), 'about.skills.automation');
        this.translateElement(document.querySelector('[data-translate="about.yearsExperience"]'), 'about.stats.yearsExperience');
        this.translateElement(document.querySelector('[data-translate="about.companiesWorked"]'), 'about.stats.companiesWorked');
        this.translateElement(document.querySelector('[data-translate="about.testingTools"]'), 'about.stats.testingTools');
        
        // Experience
        this.translateElement(document.querySelector('[data-translate="experience.title"]'), 'experience.title');
        this.translateElement(document.querySelector('[data-translate="experience.subtitle"]'), 'experience.subtitle');
        this.translateElement(document.querySelector('[data-translate="experience.kuehneNagel"]'), 'experience.descriptions.kuehneNagel');
        this.translateElement(document.querySelector('[data-translate="experience.arkadium"]'), 'experience.descriptions.arkadium');
        this.translateElement(document.querySelector('[data-translate="experience.farfetch"]'), 'experience.descriptions.farfetch');
        this.translateElement(document.querySelector('[data-translate="experience.itau"]'), 'experience.descriptions.itau');
        
        // Contact
        this.translateElement(document.querySelector('[data-translate="contact.title"]'), 'contact.title');
        this.translateElement(document.querySelector('[data-translate="contact.subtitle"]'), 'contact.subtitle');
        this.translateElement(document.querySelector('[data-translate="contact.linkedin"]'), 'contact.linkedin');
        this.translateElement(document.querySelector('[data-translate="contact.comingSoon"]'), 'contact.comingSoon');
        this.translateElement(document.querySelector('[data-translate="contact.moreSocial"]'), 'contact.moreSocial');
        this.translateElement(document.querySelector('[data-translate="contact.contactInfo"]'), 'contact.contactInfo');
        
        // Footer
        this.translateElement(document.querySelector('[data-translate="footer.rights"]'), 'footer.rights');
        this.translateElement(document.querySelector('[data-translate="footer.developed"]'), 'footer.developed');
        this.translateElement(document.querySelector('[data-translate="footer.coffee"]'), 'footer.coffee');
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations, TranslationManager };
}
