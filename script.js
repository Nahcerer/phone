// Отримуємо всі пункти навігації
const navItems = document.querySelectorAll('nav li');
const infoBox = document.getElementById('info-box');
const galleryBox = document.getElementById('gallery-box');
const languageSwitcher = document.querySelectorAll('.flag');
const infoText = document.getElementById('info-text');
const contactInfoBox = document.getElementById('contact-info-box');
const contactInfoText = document.getElementById('contact-info-text');
const navItemsMap = {
    hlavna: document.getElementById('hlavna'),
    fotky: document.getElementById('fotky'),
    kontakty: document.getElementById('kontakty'),
};
const contactBoxes = document.getElementById('contact-boxes');

// Тексти для різних мов
const translations = {
    ua: {
        info: `
            Ласкаво просимо на сайт нашого масажного салону, де ми пропонуємо професійну турботу про ваше тіло та розум.
В комфортному середовищі ми подбаємо про ваше відновлення, розслаблення та загальну гармонію. Подаруйте собі турботу, яку ви заслуговуєте!<br><br>

<strong>Відкрийте силу масажу для тіла та розуму</strong><br><br>

У нашому салоні ми пропонуємо <strong>класичні та спортивні масажі</strong>, які ефективно знімають м'язову напругу, сприяють відновленню та покращують фізичний стан. Також ми спеціалізуємося на <strong>медеротерапії</strong> – ефективній методиці для формування фігури та стимуляції лімфатичної системи.<br><br>

Масажі приносять не тільки <strong>фізичні переваги</strong>, такі як зняття болю та втоми, але й <strong>психологічне благополуччя</strong> – знижують стрес, покращують сон і створюють відчуття гармонії. Подаруйте собі момент відпочинку та турботи, яку ви заслуговуєте!<br><br>

<strong>Чому обрати масажі у нас?</strong><br><br>

У нашому салоні ми пропонуємо <strong>професійну турботу</strong> з урахуванням ваших індивідуальних потреб. Використовуючи перевірені методи – <strong>класичні та спортивні масажі або медеротерапія</strong> – ми подбаємо про ваше фізичне відновлення та психологічне благополуччя.<br><br>

<strong>У комфортному та розслаблюючому середовищі ви можете покластися на досвідчену команду, яка піклується про ваше задоволення та здоров'я. Подаруйте собі момент для себе – ви це заслуговуєте!</strong>

        `, 
        contactInfo: `Адреса: наш заклад знаходиться в центрі міста Жиліна, вул.
 <br>в Charlie centrum – Relax <strong>Žilina J. M. Geromettu 146/1,
<br>01001 Žilina - Старе місто</strong>

<br><br>• <strong>Графік роботи: За замовленням</strong>

<br><br>• Замовляйте по телефону або SMS, електронною поштою
<br>або повідомленням в Instagram

<br><br>• Контакти:

<br> <br>Пошта: recepcia@4hb.eu

<br><br>Євгеній Боровик +421 919 390 744 - Масажі

<br><br>Juliana Borovyk Hilbertová +421 904 008 299 - Мадеротерапія`,
        nav: {
            hlavna: "Головна",
            fotky: "Галерея",
            kontakty: "Контакти"
        }
    },
    sk: {
        info: `
            Vitajte na stránke nášho masérskeho salóna, kde ponúkame profesionálnu starostlivosť o vaše telo a myseľ.
            V príjemnom prostredí sa postaráme o vašu regeneráciu, uvoľnenie a celkovú harmóniu. Doprajte si starostlivosť,
            ktorú si zaslúžite!<br><br>

            <strong>Objavte silu masáže pre telo aj myseľ</strong><br><br>

            V našom salóne ponúkame <strong>klasické a športové masáže</strong>, ktoré účinne uvoľnia svalové napätie, podporia regeneráciu
            a zlepšia fyzickú kondíciu. Špecializujeme sa aj na <strong>maderoterapiu</strong> – účinnú metódu na formovanie postavy a stimuláciu
            lymfatického systému.<br><br>

            Masáže prinášajú nielen <strong>fyzické výhody</strong> ako zmiernenie bolesti či únavy, ale aj <strong>psychickú pohodu</strong> – odbúravajú stres,
            zlepšujú spánok a navodzujú pocit harmónie. Doprajte si chvíľu relaxu a starostlivosti, ktorú si zaslúžite!<br><br>

            <strong>Prečo si vybrať masáže práve u nás?</strong><br><br>

            V našom salóne ponúkame <strong>profesionálnu starostlivosť</strong> zameranú na vaše individuálne potreby. S využitím osvedčených techník –
            <strong>klasických a športových masáží či maderoterapie</strong> – sa postaráme o vašu fyzickú regeneráciu a psychickú pohodu.<br><br>

            <strong>V príjemnom a relaxačnom prostredí sa môžete spoľahnúť na skúsený tím, ktorý dbá na vašu spokojnosť a zdravie. Doprajte si chvíľu pre seba – zaslúžite si to!</strong>
        `,  
        contactInfo: `• Adresa: Naša prevádzka sa nachádza v centre Žiliny, v priestore 
        <br>centra Charlie centrum – Relax <strong>Žilina J. M. Geromettu 146/1,
        <br>01001, 072 23 Žilina - Staré mesto</strong>

<br><br>• <strong>Otváracia doba: Na objednávku</strong> 

<br><br>• Objednanie na tel.číslach príp. SMS, mailom alebo 
<br>správou na instagrame 

<br><br>• Kontakt :

 <br> <br>Mail: recepcia@4hb.eu 

 <br><br>Yevhenii Borovyk +421 919 390 744 - Masáže 

 <br><br>Juliana Borovyk Hilbertová +421 904 008 299 - Maderoterapia`, 
        nav: {
            hlavna: "Domov",
            fotky: "Galéria",
            kontakty: "Kontakty"
        }
    },
    en: {
        info: `
            Welcome to the website of our massage salon, where we offer professional care for your body and soul. In a pleasant atmosphere, we will ensure your recovery, relaxation, and overall harmony. Treat yourself to the care you deserve!<br><br>

<strong>Discover the Power of Massage for Body and Mind</strong><br><br>

In our salon, we offer classic and sports massages that effectively relieve muscle tension, promote regeneration, and improve physical condition. We also specialize in maderotherapy – an effective method for body shaping and stimulating the lymphatic system.<br><br>
Massage provides not only physical benefits, such as relieving pain or fatigue, but also psychological well-being – reducing stress, improving sleep, and creating a sense of harmony. Give yourself a moment of rest and care that you truly deserve!<br><br>

<strong>Why Choose Our Massage Services?</strong><br><br>

At our salon, we provide professional care tailored to your individual needs. Using proven techniques – whether classic, sports massage, or maderotherapy – we will take care of your physical recovery and mental well-being.<br><br>

In a pleasant and tranquil setting, you can rely on an experienced team dedicated to your satisfaction and health. Take time for yourself – you deserve it!<strong>

        `,  
        contactInfo: `• Address: Our establishment is located in the center of Zilina,
        <br>in the Charlie centrum – Relax <strong>Žilina J. M. Geromettu 146/1,
<br>01001 Žilina - Old town</strong>

<br><br>• <strong>Opening hours: By order</strong>

<br><br>• Order by phone or SMS, email or message on Instagram

<br><br>• Contact:

<br> <br>Mail: recepcia@4hb.eu

<br><br>Yevhenii Borovyk +421 919 390 744 - Massages

<br><br>Juliana Borovyk Hilbertová +421 904 008 299 - Wood Therapy`, 
        nav: {
            hlavna: "Home",
            fotky: "Gallery",
            kontakty: "Contacts"
        }
    },
};


function updateLanguage(lang) {
    infoText.innerHTML = translations[lang].info;
    contactInfoText.innerHTML = translations[lang].contactInfo;
    navItemsMap.hlavna.textContent = translations[lang].nav.hlavna;
    navItemsMap.fotky.textContent = translations[lang].nav.fotky;
    navItemsMap.kontakty.textContent = translations[lang].nav.kontakty;
}

// Перевірка локальної мови браузера або використання словацької за замовчуванням
document.addEventListener('DOMContentLoaded', () => {
    const defaultLang = localStorage.getItem('lang') || 'sk'; // За замовчуванням - словацька
    updateLanguage(defaultLang);
});

// Додаємо обробник подій для кожного прапора (зміна мови)
languageSwitcher.forEach(flag => {
    flag.addEventListener('click', () => {
        const selectedLang = flag.getAttribute('data-lang');

        // Оновлюємо текст в info-box
        updateLanguage(selectedLang);

        // Зберігаємо вибір мови в localStorage
        localStorage.setItem('lang', selectedLang);
    });
});

// Додаємо обробник подій для кожного пункту навігації
navItems.forEach(item => {
    item.addEventListener('click', () => {
        resetNavStyles();
        item.classList.add('active');

        // Показ або приховування блоків
        if (item.id === 'hlavna') {
            infoBox.classList.add('show');
            galleryBox.classList.remove('show');
            contactInfoBox.classList.remove('show');
            contactBoxes.classList.remove('show');
        } else if (item.id === 'fotky') {
            galleryBox.classList.add('show');
            infoBox.classList.remove('show');
            contactInfoBox.classList.remove('show');
            contactBoxes.classList.remove('show');
        } else if (item.id === 'kontakty') {
            contactInfoBox.classList.add('show');
            contactBoxes.classList.add('show'); // Показуємо нові вікна
            infoBox.classList.remove('show');
            galleryBox.classList.remove('show');
        }
    });
});

// Функція для скидання стилів навігації
function resetNavStyles() {
    navItems.forEach(item => {
        item.classList.remove('active');
    });
}
