// Basic interaction script
document.addEventListener('DOMContentLoaded', () => {

    // Blog Modal Logic
    const blogData = {
        'historia': {
            title: 'Założenie Firmy SIC',
            date: '15 Lut 2005',
            category: 'Historia',
            content: `
                <p style="margin-bottom: 1rem;"><strong>Firma „SIC Specialized Industrial Chemicals – Specjalistyczna Chemia Przemysłowa” została założona w 2005 r. przez obecnego właściciela mgr inż. Mariusza Rzucidło.</strong></p>
                <p>Historycznie rzecz ujmując, nazwa firmy wynika z pierwotnego zamysłu sprzedaży, rozwoju i doskonalenia się w zakresie chemicznych dodatków specjalistycznych, dla szeroko rozumianego przemysłu w sektorze B2B. Skrót pełnej nazwy firmy SIC, stanowią początkowe litery wyrazów: Specialized Industrial Chemicals.</p>
                <p>Wprowadzenie nazwy obcojęzycznej, podyktowane było ścisłą współpracą z partnerami zagranicznymi, szczególnie na samym początku działalności firmy. To właśnie kooperacja z zagranicą i podpisane umowy z zachodnimi producentami specjalistycznych produktów chemicznych, stanowiły bazę do stworzenia firmy. Skrót SIC i nazwa pozostały do dzisiaj, jako pewien element tradycji i ciągłości.</p>
                <p>W 2007 roku nastąpił dynamiczny rozwój firmy, spowodowany zawarciem kolejnych umów z krajowymi producentami niszowych, wyspecjalizowanych produktów chemicznych. Poszerzyła się oferta firmy oraz znacząco wzrosła liczba klientów. Jesteśmy dumni, że zaufali nam najwięksi i najbardziej wymagający klienci z rozlicznych branż przemysłowych, w których jesteśmy aktywni.</p>
                <p>Znaleźliśmy się na listach kwalifikowanych dostawców u wielu znanych i cenionych odbiorców. Zachęciło to nas do dalszej, wytrwałej pracy nad marketingiem, sprzedażą i rozwojem nowych produktów. Rozwój firmy w latach kolejnych oraz uruchomienie laboratorium badawczo-rozwojowego, przyczyniły się do dalszych sukcesów.</p>
                <p>Ofertę produktową wzbogaciły nowe środki chemiczne oraz produkty pod własną marką – SICol. W chwili obecnej stanowimy prężny i nastawiony na sukces zespół osób, otwartych na dynamicznie zmieniające się potrzeby rynku. Stale szukamy nowych wyzwań oraz inspiracji, ponieważ świat chemii jest naszą pasją!</p>
            `
        },
        'jubileusz': {
            title: 'Jubileusz 10-lecia Firmy',
            date: '20 Cze 2015',
            category: 'Wydarzenia',
            content: `
                <p style="margin-bottom: 1rem;"><strong>18 i 19 Kwietnia 2015 rok w „Folwarku Cyziówka” położonym na skraju malowniczej części Puszczy Sandomierskiej odbyły się obchody 10-lecia firmy SIC.</strong></p>
                <p>Z tej to okazji cały zespół wraz z licznym gronem zaproszonych gości celebrował niniejszy 2 dniowy Jubileusz. W oficjalnej części obchodów Dyrektor Zarządzający pan Mariusz Rzucidło wygłosił przemówienie, w którym to podziękował wieloletnim partnerom biznesowym oraz zasłużonym pracownikom za trudy tworzenia firmy oraz rozpoznawalnej już dziś w całej Europie marki produktów SICol.</p>
                <p>Część nieformalna Jubileuszu urozmaicona została licznymi atrakcjami w postaci kasyna z profesjonalna obsługą krupierską, koncertu duetu ” Akolada” (skrzypce i akordeon), biesiady przy ognisku oraz licznych konkursów.</p>
            `
        },
        'nagrody': {
            title: 'Gazele Biznesu 2012',
            date: '12 Gru 2012',
            category: 'Nagrody',
            content: `
                <p style="margin-bottom: 1rem;"><strong>Ranking Gazele Biznesu — to ranking najdynamiczniej rozwijających się małych i średnich firm.</strong></p>
                <p>I edycja rankingu Gazele Biznesu odbyła się w 2000 roku. Gazela to firma małej lub średniej wielkości, która dzięki niezwykle dynamicznemu rozwojowi doskonale daje sobie radę wśród nawet znacznie większych konkurentów. Autorem rankingu jest wywiadownia gospodarcza Coface Poland, która jest odpowiedzialna za weryfikację danych finansowych zgłoszonych przedsiębiorstw.</p>
                <p>Ranking publikowany jest w postaci ponad dwustustronicowego specjalnego wydania, które dołączone jest do grudniowego wydania „Pulsu Biznesu”. Oprócz tego na specjalnej stronie gazele.pl znajduje się pełna baza Gazel Biznesu, czyli wszystkich firm, które znalazły się na rankingowych listach, począwszy od roku 2000.</p>
                <p>Po ogłoszeniu rankingu, począwszy od grudnia do marca „Puls Biznesu” organizuje w 12 miastach Polski specjalne uroczystości, podczas których laureatom rankingu wręczane są statuetki i pamiątkowe dyplomy. To również okazja do spotkania najlepszych menedżerów i poszerzenia wiedzy.</p>
            `
        }
    };

    const modal = document.getElementById('blog-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalMeta = document.getElementById('modal-meta');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.getElementById('modal-close-btn');

    // Open Modal
    document.querySelectorAll('.blog-trigger').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const id = trigger.getAttribute('data-id');
            const data = blogData[id];

            if (data) {
                modalTitle.textContent = data.title;
                modalMeta.textContent = `${data.category} | ${data.date}`;
                modalBody.innerHTML = data.content;

                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }
        });
    });

    // Close Modal
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Close on outside click
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Original Script Content Below...

    console.log('SIC Chemicals Website loaded');

    // Main Section Toggle (Produkty vs Usługi)
    const mainToggleBtns = document.querySelectorAll('.main-toggle-btn');
    const mainSections = document.querySelectorAll('.main-section');

    if (mainToggleBtns.length > 0) {
        mainToggleBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from buttons and sections
                mainToggleBtns.forEach(b => b.classList.remove('active'));
                mainSections.forEach(s => s.classList.remove('active'));

                // Add active class to clicked button
                btn.classList.add('active');

                // Show target section
                const targetId = btn.getAttribute('data-target');
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.classList.add('active');
                }
            });
        });
    }

    // Tab System for Offer Page (Produkty Sub-tabs)
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons and panes
                tabBtns.forEach(b => b.classList.remove('active'));
                tabPanes.forEach(p => p.classList.remove('active'));

                // Add active class to clicked button
                btn.classList.add('active');

                // Show corresponding pane
                const tabId = btn.getAttribute('data-tab');
                const targetPane = document.getElementById(tabId);
                if (targetPane) {
                    targetPane.classList.add('active');
                }
            });
        });
    }
});
