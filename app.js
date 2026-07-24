/* ==========================================================================
   THE MIND CAFÉ & BOARD GAMES - CORE APPLICATION LOGIC
   ========================================================================== */

// Master Dataset: 30 Board Games (10 for 2 Players, 10 for 3 Players, 10 for 4 Players)
const GAMES_DATA = [
    // ----------------------------------------------------------------------
    // 2 PLAYERS GAMES (10 Games)
    // ----------------------------------------------------------------------
    {
        id: "7w-duel",
        titleAr: "7 وندرز ديويل",
        titleEn: "7 Wonders Duel",
        players: 2,
        playerLabel: "شخصين (2)",
        category: "استراتيجية",
        playtime: "30 دقيقة",
        difficulty: "متوسط",
        desc: "أشهر لعبة تنافس استراتيجي ثنائية! ابْنِ العجائب القديمة وتطوّر علمياً وعسكرياً للسيطرة على العالم القديم.",
        image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=600&q=80",
        youtubeId: "yP9A-G-2DNo"
    },
    {
        id: "jaipur",
        titleAr: "جايبور",
        titleEn: "Jaipur",
        players: 2,
        playerLabel: "شخصين (2)",
        category: "ورق",
        playtime: "25 دقيقة",
        difficulty: "سهل",
        desc: "تحدي التجار في الهند! تبادل الأقمشة والتوابل وتداول الذهب والجمال لتصبح التاجر الشخصي للمهراجا.",
        image: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=600&q=80",
        youtubeId: "t137l5s2o38"
    },
    {
        id: "patchwork",
        titleAr: "باتش وورك",
        titleEn: "Patchwork",
        players: 2,
        playerLabel: "شخصين (2)",
        category: "ذكاء",
        playtime: "30 دقيقة",
        difficulty: "سهل - متوسط",
        desc: "لعبة تخطيط وهندسة ممتعة! اجمع قطع القماش والأزرار وقم بخياطة أجمل مفرش متناسق قبل انتهاء الوقت.",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
        youtubeId: "qXF1zD78X1o"
    },
    {
        id: "hive",
        titleAr: "هايف (الخلية)",
        titleEn: "Hive",
        players: 2,
        playerLabel: "شخصين (2)",
        category: "ذكاء",
        playtime: "20 دقيقة",
        difficulty: "متوسط",
        desc: "شطرنج الحشرات بدون لوح لعب! استخدم ملكة النحل والنمل والخنافس لمحاصرة ملكة المنافس بالكامل.",
        image: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&w=600&q=80",
        youtubeId: "sKz_p1nJ-tA"
    },
    {
        id: "santorini",
        titleAr: "سانتوريني",
        titleEn: "Santorini",
        players: 2,
        playerLabel: "شخصين (2)",
        category: "عائلية",
        playtime: "20 دقيقة",
        difficulty: "سهل",
        desc: "ابنِ الأبراج الرخامية البيضاء والقباب الزرقاء فوق جزيرة سانتوريني اليونانية واصعد للطبق الثالث للفوز.",
        image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
        youtubeId: "46yD3gL6N1g"
    },
    {
        id: "mindbug",
        titleAr: "مايند بغ",
        titleEn: "Mindbug",
        players: 2,
        playerLabel: "شخصين (2)",
        category: "ورق",
        playtime: "15 دقيقة",
        difficulty: "سهل",
        desc: "لعبة بطاقات سريعة وحماسية تمكّنك من التحكم بحشرات العقل للسيطرة على وحوش خصمك واستخدامها ضده.",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80",
        youtubeId: "v2W0Kz4d-oI"
    },
    {
        id: "targi",
        titleAr: "تارجي",
        titleEn: "Targi",
        players: 2,
        playerLabel: "شخصين (2)",
        category: "استراتيجية",
        playtime: "45 دقيقة",
        difficulty: "متوسط",
        desc: "رحلة عميقة في صحراء الطوارق. تحكم بقبيلتك واجمع الموارد والمقايضات على شبكة المربعات المتغيرة.",
        image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
        youtubeId: "l15r1x3m-oA"
    },
    {
        id: "schotten-totten",
        titleAr: "شوتن توتن",
        titleEn: "Schotten Totten",
        players: 2,
        playerLabel: "شخصين (2)",
        category: "ورق",
        playtime: "20 دقيقة",
        difficulty: "سهل",
        desc: "معركة القرى الإسكتلندية! كوّن تشكيلات بطاقات قوية للسيطرة على أحجار الحدود بين القبيلتين.",
        image: "https://images.unsplash.com/photo-1563941402622-4e7a488bcc57?auto=format&fit=crop&w=600&q=80",
        youtubeId: "8b7h5G7m-o0"
    },
    {
        id: "lost-cities",
        titleAr: "لوست سيتيز",
        titleEn: "Lost Cities",
        players: 2,
        playerLabel: "شخصين (2)",
        category: "استراتيجية",
        playtime: "25 دقيقة",
        difficulty: "سهل",
        desc: "انطلق في 5 رحلات استكشافية غامضة عبر الحضارات المفقودة وأدر المخاطر والنقاط بحذر وتكتيك.",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
        youtubeId: "1f2K3M4N5O6"
    },
    {
        id: "kahuna",
        titleAr: "كاهونا",
        titleEn: "Kahuna",
        players: 2,
        playerLabel: "شخصين (2)",
        category: "تداول",
        playtime: "30 دقيقة",
        difficulty: "متوسط",
        desc: "معركة السحرة في أوقيانوسيا! ابنِ الجسور بين 12 جزيرة واستولِ على نفوذ الأرخبيل الاستوائي.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
        youtubeId: "2g3h4j5k6l7"
    },

    // ----------------------------------------------------------------------
    // 3 PLAYERS GAMES (10 Games)
    // ----------------------------------------------------------------------
    {
        id: "splendor",
        titleAr: "سبليندور",
        titleEn: "Splendor",
        players: 3,
        playerLabel: "3 أشخاص",
        category: "تداول",
        playtime: "30 دقيقة",
        difficulty: "سهل - متوسط",
        desc: "اجمع رقاقات الأحجار الكريمة، اشترِ مناجم الزمرد والياقوت، واكسب نفوذ النبلاء وتوج ملك التجار.",
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80",
        youtubeId: "rR-VpY_j8r8"
    },
    {
        id: "azul",
        titleAr: "أزول",
        titleEn: "Azul",
        players: 3,
        playerLabel: "3 أشخاص",
        category: "ذكاء",
        playtime: "35 دقيقة",
        difficulty: "سهل - متوسط",
        desc: "صمم جدران قصر البلاط الأندلسي الملكي! اختر البلاطات الملونة بعناية لتفادي الغرامات وتكبير مجموع النقاط.",
        image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80",
        youtubeId: "y1uM-kKzF60"
    },
    {
        id: "carcassonne",
        titleAr: "كاركسون",
        titleEn: "Carcassonne",
        players: 3,
        playerLabel: "3 أشخاص",
        category: "استراتيجية",
        playtime: "40 دقيقة",
        difficulty: "سهل",
        desc: "ابنِ مدن وجسور وقلاع فرنسا في العصور الوسطى قطعة قطعة وأرسل فرسانك ومزارعيك للسيطرة.",
        image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80",
        youtubeId: "o8E44M7y0h0"
    },
    {
        id: "ticket-to-ride",
        titleAr: "تكت تو رايد - أوروبا",
        titleEn: "Ticket to Ride Europe",
        players: 3,
        playerLabel: "3 أشخاص",
        category: "عائلية",
        playtime: "45 دقيقة",
        difficulty: "سهل",
        desc: "سافر عبر خطوط السكك الحديدية الأوروبية! اجمع بطاقات القطارات وابنِ مسارات الأنفاق والمحطات.",
        image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=600&q=80",
        youtubeId: "hX1S4_5G6s7"
    },
    {
        id: "century-spice",
        titleAr: "سينشري: طريق التوابل",
        titleEn: "Century: Spice Road",
        players: 3,
        playerLabel: "3 أشخاص",
        category: "تداول",
        playtime: "35 دقيقة",
        difficulty: "سهل - متوسط",
        desc: "رحلة قافلة التجارة القديمة! تداول الكركم والهيل والقرفة وحول الموارد للوصول لقمة النقاط.",
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
        youtubeId: "9m8n7b6v5c4"
    },
    {
        id: "dixit",
        titleAr: "ديكسيت",
        titleEn: "Dixit",
        players: 3,
        playerLabel: "3 أشخاص",
        category: "عائلية",
        playtime: "30 دقيقة",
        difficulty: "سهل جداً",
        desc: "لعبة الإبداع والتخيل الساحرة! استخدم كلمة أو جملة قصيرة للتعبيير عن لوحة غامضة واجعل الأصدقاء يحزرون.",
        image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=600&q=80",
        youtubeId: "3k4l5m6n7o8"
    },
    {
        id: "the-mind",
        titleAr: "ذا مايند (لعبة القاعة)",
        titleEn: "The Mind",
        players: 3,
        playerLabel: "3 أشخاص",
        category: "سريعة",
        playtime: "20 دقيقة",
        difficulty: "سهل جداً",
        desc: "اللعبة الشهيرة باسم قاعتنا! العب البطاقات ذات الأرقام 1-100 تصاعدياً بدون التحدث كأنكم عقل واحد ممتد.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
        youtubeId: "4m5n6b7v8c9"
    },
    {
        id: "sagrada",
        titleAr: "ساجرادا",
        titleEn: "Sagrada",
        players: 3,
        playerLabel: "3 أشخاص",
        category: "ذكاء",
        playtime: "40 دقيقة",
        difficulty: "متوسط",
        desc: "صمم زجاج الكاتدرائية الملون من أحجار النرد الشفافة وفق قواعد وألوان هندسية مبهرة.",
        image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=600&q=80",
        youtubeId: "5b6v7c8x9z0"
    },
    {
        id: "kingdomino",
        titleAr: "كينغ دومينو",
        titleEn: "Kingdomino",
        players: 3,
        playerLabel: "3 أشخاص",
        category: "عائلية",
        playtime: "20 دقيقة",
        difficulty: "سهل",
        desc: "توسع في بناء إقطاعيتك! اختر قطع الدومينو الملكية المطابقة للغابات والمحيطات والقلاع لرفع نقاطك.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
        youtubeId: "6c7v8b9n0m1"
    },
    {
        id: "king-of-tokyo",
        titleAr: "ملك طوكيو",
        titleEn: "King of Tokyo",
        players: 3,
        playerLabel: "3 أشخاص",
        category: "سريعة",
        playtime: "30 دقيقة",
        difficulty: "سهل",
        desc: "معركة الوحوش والآليين المدمّرين! ارمِ النرد لتنفيذ الهجمات، وعالج نفسك واحتل مدينة طوكيو.",
        image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=600&q=80",
        youtubeId: "7v8b9n0m1l2"
    },

    // ----------------------------------------------------------------------
    // 4 PLAYERS GAMES (10 Games)
    // ----------------------------------------------------------------------
    {
        id: "catan",
        titleAr: "كاتان (Catan)",
        titleEn: "Catan",
        players: 4,
        playerLabel: "4 أشخاص",
        category: "تداول",
        playtime: "60 دقيقة",
        difficulty: "متوسط",
        desc: "أشهر لعبة لوحية في العالم! استكشف جزيرة كاتان، تاجر بالخشب والقمح والخراف، وابنِ الطرق والمدن.",
        image: "https://images.unsplash.com/photo-1563941402622-4e7a488bcc57?auto=format&fit=crop&w=600&q=80",
        youtubeId: "kw_Jz9n-9c8"
    },
    {
        id: "codenames",
        titleAr: "كود نيمز (أسماء شفرة)",
        titleEn: "Codenames",
        players: 4,
        playerLabel: "4 أشخاص",
        category: "ذكاء",
        playtime: "25 دقيقة",
        difficulty: "سهل",
        desc: "لعبة فرق وجواسيس رهيبة! يعطي قائد الفريق تلميحاً من كلمة واحدة لربط كلمات الشفرة وتفادي الاغتيال.",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80",
        youtubeId: "jT81f185v0k"
    },
    {
        id: "secret-hitler",
        titleAr: "سيكرت هتلر",
        titleEn: "Secret Hitler",
        players: 4,
        playerLabel: "4 أشخاص",
        category: "خدع",
        playtime: "45 دقيقة",
        difficulty: "متوسط",
        desc: "لعبة الخداع والنوايا الخفية! يتنافس الفريقان في البرلمان مع محاولات كشف الفاشيين وحماية القوانين.",
        image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
        youtubeId: "9x3k2l1m0n9"
    },
    {
        id: "coup",
        titleAr: "كوب (الانقلاب)",
        titleEn: "Coup",
        players: 4,
        playerLabel: "4 أشخاص",
        category: "خدع",
        playtime: "15 دقيقة",
        difficulty: "سهل",
        desc: "لعبة الانقلابات السريعة والتظاهر! ادّعِ امتلاك شخصيات البلاط الملكي وأسقط نفوذ المنافسين واحد تلو الآخر.",
        image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80",
        youtubeId: "0b1c2d3e4f5"
    },
    {
        id: "exploding-kittens",
        titleAr: "القطط المتفجرة",
        titleEn: "Exploding Kittens",
        players: 4,
        playerLabel: "4 أشخاص",
        category: "سريعة",
        playtime: "15 دقيقة",
        difficulty: "سهل جداً",
        desc: "لعبة الروليت الروسية بالقطط! اسحب البطاقات وتفادَ القطط المتفجرة واستخدم نزع الفتيل للبقاء حياً.",
        image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80",
        youtubeId: "1a2b3c4d5e6"
    },
    {
        id: "avalon",
        titleAr: "أفالون (Avalon)",
        titleEn: "The Resistance: Avalon",
        players: 4,
        playerLabel: "4 أشخاص",
        category: "خدع",
        playtime: "40 دقيقة",
        difficulty: "متوسط",
        desc: "معركة فرسان الملك آرثر ضد أتباع الشر الخفيين! تكتيكات إقناع وفراسة عالية لإنجاز المهام الشريفة.",
        image: "https://images.unsplash.com/photo-1519074069444-1ba4ea16028d?auto=format&fit=crop&w=600&q=80",
        youtubeId: "2b3c4d5e6f7"
    },
    {
        id: "sheriff-of-nottingham",
        titleAr: "شريف نوتنغهام",
        titleEn: "Sheriff of Nottingham",
        players: 4,
        playerLabel: "4 أشخاص",
        category: "تداول",
        playtime: "45 دقيقة",
        difficulty: "سهل - متوسط",
        desc: "ادخل بضاعتك من بوابة المدينة! تظاهر بالصدق أو قم برشرة الشريف لتهريب الحرير والأسلحة الثمينة.",
        image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80",
        youtubeId: "3c4d5e6f7g8"
    },
    {
        id: "camel-up",
        titleAr: "سباق الجمال (Camel Up)",
        titleEn: "Camel Up",
        players: 4,
        playerLabel: "4 أشخاص",
        category: "سريعة",
        playtime: "30 دقيقة",
        difficulty: "سهل",
        desc: "سباق الجمال الجنوني فوق بعضها البعض! راهن على الجمل الفائز والمتأخر واستمتع بحركة النرد في الهرم.",
        image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=600&q=80",
        youtubeId: "4d5e6f7g8h9"
    },
    {
        id: "salem-1692",
        titleAr: "سالم 1692",
        titleEn: "Salem 1692",
        players: 4,
        playerLabel: "4 أشخاص",
        category: "خدع",
        playtime: "35 دقيقة",
        difficulty: "متوسط",
        desc: "أجواء بلدة سالم التاريخية! حاول كشف الساحرات من بين القرويين وحماية نفسك ببطاقات الأحداث والمحاكمات.",
        image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
        youtubeId: "5e6f7g8h9i0"
    },
    {
        id: "sushi-go",
        titleAr: "سوشي جو باص",
        titleEn: "Sushi Go! Party",
        players: 4,
        playerLabel: "4 أشخاص",
        category: "ورق",
        playtime: "20 دقيقة",
        difficulty: "سهل",
        desc: "لعبة التجميع السريعة الممتعة! اختار أفضل قطع السوشي والماكي والوسابي وتمرير البطاقات للمنافسين.",
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80",
        youtubeId: "6f7g8h9i0j1"
    }
];

// App State Management
let state = {
    searchQuery: "",
    selectedCategory: "all",
    selectedPlayerFilter: "all"
};

// DOM Element References
const elements = {
    searchInput: document.getElementById("searchInput"),
    clearSearchBtn: document.getElementById("clearSearchBtn"),
    categoriesContainer: document.getElementById("categoriesContainer"),
    playerNavCards: document.querySelectorAll(".player-nav-card"),
    grid2Players: document.getElementById("grid2Players"),
    grid3Players: document.getElementById("grid3Players"),
    grid4Players: document.getElementById("grid4Players"),
    section2Players: document.getElementById("section2Players"),
    section3Players: document.getElementById("section3Players"),
    section4Players: document.getElementById("section4Players"),
    noResultsBox: document.getElementById("noResultsBox"),
    resetFiltersBtn: document.getElementById("resetFiltersBtn"),
    visibleCount: document.getElementById("visibleCount"),
    activeTagText: document.getElementById("activeTagText"),
    
    // Video Modal
    videoModal: document.getElementById("videoModal"),
    closeVideoModalBtn: document.getElementById("closeVideoModalBtn"),
    videoModalTitle: document.getElementById("videoModalTitle"),
    videoModalSubtitle: document.getElementById("videoModalSubtitle"),
    videoIframe: document.getElementById("videoIframe"),
    videoModalMeta: document.getElementById("videoModalMeta"),
    reserveFromVideoBtn: document.getElementById("reserveFromVideoBtn"),
    
    // Reserve Modal
    reserveModal: document.getElementById("reserveModal"),
    openReserveBtn: document.getElementById("openReserveBtn"),
    closeReserveModalBtn: document.getElementById("closeReserveModalBtn"),
    reserveForm: document.getElementById("reserveForm"),
    resGameSelect: document.getElementById("resGame"),
    resDateInput: document.getElementById("resDate"),
    randomGameBtn: document.getElementById("randomGameBtn"),
    footerReserveLink: document.getElementById("footerReserveLink"),
    logoClick: document.getElementById("logoClick")
};

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
    populateGameSelectOptions();
    setDefaultReservationDate();
    setupEventListeners();
    renderAllGames();
});

// Populate Select element inside Reservation Modal
function populateGameSelectOptions() {
    if (!elements.resGameSelect) return;
    elements.resGameSelect.innerHTML = `<option value="">-- اختر من قائمة الألعاب (30 لعبة) --</option>`;
    
    GAMES_DATA.forEach(game => {
        const option = document.createElement("option");
        option.value = `${game.titleAr} (${game.titleEn})`;
        option.textContent = `${game.titleAr} - ${game.playerLabel}`;
        elements.resGameSelect.appendChild(option);
    });
}

// Set Today's Date in Reservation Form
function setDefaultReservationDate() {
    if (elements.resDateInput) {
        const today = new Date().toISOString().split('T')[0];
        elements.resDateInput.value = today;
        elements.resDateInput.min = today;
    }
}

// Setup Event Listeners
function setupEventListeners() {
    // Live Search Event
    elements.searchInput.addEventListener("input", (e) => {
        state.searchQuery = e.target.value.trim().toLowerCase();
        elements.clearSearchBtn.style.display = state.searchQuery ? "block" : "none";
        renderAllGames();
    });

    // Clear Search Input
    elements.clearSearchBtn.addEventListener("click", () => {
        elements.searchInput.value = "";
        state.searchQuery = "";
        elements.clearSearchBtn.style.display = "none";
        renderAllGames();
    });

    // Category Chips Filtering
    elements.categoriesContainer.addEventListener("click", (e) => {
        const chip = e.target.closest(".category-chip");
        if (!chip) return;

        document.querySelectorAll(".category-chip").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");

        state.selectedCategory = chip.dataset.category;
        renderAllGames();
    });

    // Player Quick Nav Filtering (All, 2, 3, 4)
    elements.playerNavCards.forEach(card => {
        card.addEventListener("click", () => {
            elements.playerNavCards.forEach(c => c.classList.remove("active"));
            card.classList.add("active");

            state.selectedPlayerFilter = card.dataset.playerFilter;
            renderAllGames();

            // Smooth Scroll to corresponding section if specific player count chosen
            if (state.selectedPlayerFilter === "2") {
                elements.section2Players.scrollIntoView({ behavior: "smooth" });
            } else if (state.selectedPlayerFilter === "3") {
                elements.section3Players.scrollIntoView({ behavior: "smooth" });
            } else if (state.selectedPlayerFilter === "4") {
                elements.section4Players.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Reset Filters Button
    elements.resetFiltersBtn.addEventListener("click", () => {
        state.searchQuery = "";
        state.selectedCategory = "all";
        state.selectedPlayerFilter = "all";

        elements.searchInput.value = "";
        elements.clearSearchBtn.style.display = "none";

        document.querySelectorAll(".category-chip").forEach(c => c.classList.remove("active"));
        document.querySelector('.category-chip[data-category="all"]').classList.add("active");

        elements.playerNavCards.forEach(c => c.classList.remove("active"));
        document.querySelector('.player-nav-card[data-player-filter="all"]').classList.add("active");

        renderAllGames();
    });

    // Modal Control: Close Video Modal
    elements.closeVideoModalBtn.addEventListener("click", closeVideoModal);
    elements.videoModal.addEventListener("click", (e) => {
        if (e.target === elements.videoModal) closeVideoModal();
    });

    // Modal Control: Open/Close Reserve Modal
    elements.openReserveBtn.addEventListener("click", () => openReserveModal());
    elements.footerReserveLink.addEventListener("click", (e) => {
        e.preventDefault();
        openReserveModal();
    });
    elements.closeReserveModalBtn.addEventListener("click", closeReserveModal);
    elements.reserveModal.addEventListener("click", (e) => {
        if (e.target === elements.reserveModal) closeReserveModal();
    });

    // Handle Reservation Form Submit -> Redirect to WhatsApp
    elements.reserveForm.addEventListener("submit", (e) => {
        e.preventDefault();
        sendWhatsAppReservation();
    });

    // Random Game Spinner Button
    elements.randomGameBtn.addEventListener("click", selectRandomGame);

    // Reserve from Video Modal button
    elements.reserveFromVideoBtn.addEventListener("click", () => {
        const gameTitle = elements.videoModalTitle.textContent;
        closeVideoModal();
        openReserveModal(gameTitle);
    });

    // Logo Click scroll to top
    elements.logoClick.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// Render Game Cards Filtered by Search & Categories
function renderAllGames() {
    const filtered = GAMES_DATA.filter(game => {
        // Player filter
        if (state.selectedPlayerFilter !== "all" && String(game.players) !== state.selectedPlayerFilter) {
            return false;
        }

        // Category filter
        if (state.selectedCategory !== "all" && !game.category.includes(state.selectedCategory)) {
            return false;
        }

        // Search query filter
        if (state.searchQuery) {
            const q = state.searchQuery;
            const matchAr = game.titleAr.toLowerCase().includes(q);
            const matchEn = game.titleEn.toLowerCase().includes(q);
            const matchCat = game.category.toLowerCase().includes(q);
            const matchDesc = game.desc.toLowerCase().includes(q);
            return matchAr || matchEn || matchCat || matchDesc;
        }

        return true;
    });

    // Separate into 2, 3, 4 players lists
    const games2 = filtered.filter(g => g.players === 2);
    const games3 = filtered.filter(g => g.players === 3);
    const games4 = filtered.filter(g => g.players === 4);

    // Update Counter & Active Filter Badge
    elements.visibleCount.textContent = filtered.length;
    updateActiveFilterTag();

    // Render each grid
    renderGrid(elements.grid2Players, games2, elements.section2Players);
    renderGrid(elements.grid3Players, games3, elements.section3Players);
    renderGrid(elements.grid4Players, games4, elements.section4Players);

    // Toggle No Results Box
    if (filtered.length === 0) {
        elements.noResultsBox.classList.remove("hidden");
    } else {
        elements.noResultsBox.classList.add("hidden");
    }
}

// Helper to update active filter label
function updateActiveFilterTag() {
    let parts = [];
    if (state.selectedPlayerFilter !== "all") {
        parts.push(`لاعبين: ${state.selectedPlayerFilter}`);
    }
    if (state.selectedCategory !== "all") {
        parts.push(`تصنيف: ${state.selectedCategory}`);
    }
    if (state.searchQuery) {
        parts.push(`بحث: "${state.searchQuery}"`);
    }

    elements.activeTagText.textContent = parts.length > 0 ? parts.join(" • ") : "جميع الألعاب (30)";
}

// Render Specific Grid HTML
function renderGrid(gridElement, gamesList, sectionHeaderElement) {
    gridElement.innerHTML = "";

    if (gamesList.length === 0) {
        sectionHeaderElement.style.display = "none";
        gridElement.style.display = "none";
        return;
    }

    sectionHeaderElement.style.display = "block";
    gridElement.style.display = "grid";

    gamesList.forEach(game => {
        const card = document.createElement("div");
        card.className = "game-card";
        card.innerHTML = `
            <div class="card-media">
                <img src="${game.image}" alt="${game.titleAr}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=600&q=80'">
                <span class="card-badge-player">${game.playerLabel}</span>
                <span class="card-badge-category">${game.category}</span>
                
                <div class="play-video-overlay" onclick="openVideoModal('${game.id}')">
                    <div class="play-btn-circle">
                        <i class="fa-solid fa-play"></i>
                    </div>
                    <span class="play-overlay-text">شاهد فيديو الشرح 🎬</span>
                </div>
            </div>
            
            <div class="card-body">
                <h3 class="game-title-ar">${game.titleAr}</h3>
                <p class="game-title-en">${game.titleEn}</p>
                
                <div class="game-meta-pills">
                    <span class="meta-pill"><i class="fa-regular fa-clock"></i> ${game.playtime}</span>
                    <span class="meta-pill"><i class="fa-solid fa-gauge-high"></i> ${game.difficulty}</span>
                </div>
                
                <p class="game-desc">${game.desc}</p>
                
                <div class="card-actions">
                    <button class="btn-card-video" onclick="openVideoModal('${game.id}')">
                        <i class="fa-solid fa-circle-play"></i> فيديو الشرح
                    </button>
                    <button class="btn-card-reserve" onclick="openReserveModal('${game.titleAr}')">
                        <i class="fa-solid fa-calendar-check"></i> طلب طاولة
                    </button>
                </div>
            </div>
        `;
        gridElement.appendChild(card);
    });
}

// Open Video Tutorial Modal
function openVideoModal(gameId) {
    const game = GAMES_DATA.find(g => g.id === gameId);
    if (!game) return;

    elements.videoModalTitle.textContent = `${game.titleAr} (${game.titleEn})`;
    elements.videoModalSubtitle.textContent = `فيديو شرح وطريقة لعب ${game.titleAr} - ${game.playerLabel}`;
    
    // Embed YouTube Video with Autoplay
    const embedUrl = `https://www.youtube.com/embed/${game.youtubeId}?autoplay=1&rel=0`;
    elements.videoIframe.src = embedUrl;

    elements.videoModalMeta.innerHTML = `
        <span class="meta-pill"><i class="fa-solid fa-users"></i> ${game.playerLabel}</span>
        <span class="meta-pill"><i class="fa-regular fa-clock"></i> ${game.playtime}</span>
        <span class="meta-pill"><i class="fa-solid fa-tag"></i> ${game.category}</span>
    `;

    // Firebase Analytics Event Tracking
    if (window.firebaseAnalytics && window.firebaseLogEvent) {
        try {
            window.firebaseLogEvent(window.firebaseAnalytics, "view_game_tutorial", {
                game_id: gameId,
                game_title: game.titleAr,
                category: game.category,
                players: game.players
            });
        } catch (err) {
            console.log("Firebase Analytics track note:", err);
        }
    }

    elements.videoModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

// Close Video Modal
function closeVideoModal() {
    elements.videoIframe.src = "";
    elements.videoModal.classList.add("hidden");
    document.body.style.overflow = "auto";
}

// Open Reservation Modal
function openReserveModal(preselectedGameTitle = "") {
    if (preselectedGameTitle && elements.resGameSelect) {
        for (let i = 0; i < elements.resGameSelect.options.length; i++) {
            if (elements.resGameSelect.options[i].value.includes(preselectedGameTitle)) {
                elements.resGameSelect.selectedIndex = i;
                break;
            }
        }
    }

    elements.reserveModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

// Close Reservation Modal
function closeReserveModal() {
    elements.reserveModal.classList.add("hidden");
    document.body.style.overflow = "auto";
}

// Send WhatsApp Reservation & Sync with Firebase Firestore
function sendWhatsAppReservation() {
    const name = document.getElementById("resName").value;
    const players = document.getElementById("resPlayers").value;
    const date = document.getElementById("resDate").value;
    const game = document.getElementById("resGame").value || "لم يتم تحديد لعبة معينة";
    const notes = document.getElementById("resNotes").value || "لا يوجد";

    // Firebase Firestore Sync (Store reservation in 'reservations' collection)
    if (window.firebaseDb && window.firebaseAddDoc && window.firebaseCollection) {
        try {
            window.firebaseAddDoc(window.firebaseCollection(window.firebaseDb, "reservations"), {
                name: name,
                playersCount: players,
                reservationDate: date,
                requestedGame: game,
                notes: notes,
                createdAt: window.firebaseTimestamp ? window.firebaseTimestamp() : new Date().toISOString()
            });

            if (window.firebaseAnalytics && window.firebaseLogEvent) {
                window.firebaseLogEvent(window.firebaseAnalytics, "table_reservation_created", {
                    requested_game: game,
                    players_count: players
                });
            }
            console.log("🔥 Reservation successfully saved to Firebase Firestore!");
        } catch (err) {
            console.log("Firebase sync note:", err);
        }
    }

    const msg = `مرحباً قاعة The Mind! 👋🏼%0Aاريد حجز طاولة معكم:%0A👤 *الاسم:* ${encodeURIComponent(name)}%0A👥 *عدد الأشخاص:* ${encodeURIComponent(players)}%0A📅 *التاريخ:* ${encodeURIComponent(date)}%0A🎲 *اللعبة المطلوبة:* ${encodeURIComponent(game)}%0A📝 *ملاحظات:* ${encodeURIComponent(notes)}`;

    // Open WhatsApp URL (café booking line)
    const phone = "9647700000000"; // Sample Iraqi phone number for WhatsApp café line
    window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
    
    closeReserveModal();
    elements.reserveForm.reset();
    setDefaultReservationDate();
}

// Pick Random Game Spinner
function selectRandomGame() {
    const randomIndex = Math.floor(Math.random() * GAMES_DATA.length);
    const selectedGame = GAMES_DATA[randomIndex];

    openVideoModal(selectedGame.id);
}
