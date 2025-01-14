// components/App.js
import HeaderComponent from './Header.js';
import FooterComponent from './Footer.js';
import Home from './Home/Home.js';
import Portfolio from './components/Portfolio/Portfolio.js';
import Contact from './components/Contact/Contact.js';
import about from './components/aboutme/about.js';

export default {
    components: { HeaderComponent, FooterComponent, Home, Portfolio, Contact, about },
    template: `
        <div class="flex">
            <header-component></header-component>
            <div class="flex-grow ml-64 p-10 flex flex-col gap-24">
                <main class="flex-grow flex flex-col gap-24">
                    <section id="home" class="section-spacing">
                        <home></home>
                    </section>
                    <section id="portfolio" class="section-spacing">
                        <portfolio></portfolio>
                    </section>
                    <section id="aboutme" class="section-spacing">
                        <about></about>
                    </section>
                    <section id="contact" class="section-spacing">
                        <contact></contact>
                    </section>
                
                </main>

            </div>
        </div>
    `,
    style: `
        .font-cursive {
            font-family: 'Dancing Script', cursive;
        }
        .section-spacing {
            padding-top: 20px;
            padding-bottom: 20px;
        }
        .footer-spacing {
            margin-top: 24px;
            padding: 16px;
            text-align: center;
            background-color: #f3f4f6; /* Tailwind gray-100 */
        }
    `
}
