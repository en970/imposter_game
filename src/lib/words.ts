// Word categories for the game - Turkish version
export const wordCategories = [
    {
        category: "Mekanlar",
        words: [
            "Havalimanı", "Hastane", "Okul", "Restoran", "Otel", "Plaj", "Müze", "Stadyum",
            "Sinema", "Kütüphane", "AVM", "Metro", "Park", "Cami", "Kilise", "Hamam",
            "Kuaför", "Eczane", "Banka", "Postane"
        ]
    },
    {
        category: "Yiyecekler",
        words: [
            "Pizza", "Hamburger", "Döner", "Lahmacun", "Köfte", "Sushi", "Makarna", "Pilav",
            "Kebap", "İmam Bayıldı", "Kumpir", "Tantuni", "Çiğ Köfte", "Mantı", "Pide",
            "Baklava", "Künefe", "Simit", "Poğaça", "Börek"
        ]
    },
    {
        category: "Meslekler",
        words: [
            "Doktor", "Öğretmen", "Mühendis", "Aşçı", "Pilot", "Avukat", "Polis", "İtfaiyeci",
            "Hemşire", "Garson", "Kasap", "Terzi", "Berber", "Şoför", "Müzisyen",
            "Ressam", "Yazılımcı", "Mimar", "Veteriner", "Gazeteci"
        ]
    },
    {
        category: "Spor",
        words: [
            "Futbol", "Basketbol", "Voleybol", "Tenis", "Yüzme", "Koşu", "Bisiklet", "Boks",
            "Güreş", "Karate", "Jimnastik", "Kayak", "Satranç", "Bilardo", "Bowling",
            "Golf", "Hokey", "Okçuluk", "Dalış", "Sörf"
        ]
    },
    {
        category: "Hayvanlar",
        words: [
            "Köpek", "Kedi", "Aslan", "Fil", "Zürafa", "Maymun", "Penguen", "Yunus",
            "Kartal", "Timsah", "Yılan", "Kaplumbağa", "Tavşan", "At", "İnek",
            "Koyun", "Tavuk", "Arı", "Kelebek", "Balık"
        ]
    },
    {
        category: "Ülkeler",
        words: [
            "Türkiye", "Almanya", "Fransa", "İtalya", "İspanya", "Japonya", "Çin", "Amerika",
            "Brezilya", "Meksika", "Mısır", "Hindistan", "Rusya", "İngiltere", "Avustralya",
            "Kanada", "Arjantin", "Yunanistan", "Hollanda", "İsviçre"
        ]
    },
    {
        category: "Yerli Diziler",
        words: [
            "Kurtlar Vadisi", "Aşk-ı Memnu", "Ezel", "Avrupa Yakası", "Yaprak Dökümü",
            "Muhteşem Yüzyıl", "Behzat Ç.", "Leyla ile Mecnun", "Gibi", "Kardeş Payı",
            "İşler Güçler", "Cennet Mahallesi", "Arka Sokaklar", "Sihirli Annem", "Selena",
            "Kızılcık Şerbeti", "Yalı Çapkını", "Kuzey Güney", "Medcezir", "Çukur",
            "İçerde", "Şahsiyet", "Bir Başkadır", "Yargı", "Seksenler",
            "Çocuklar Duymasın", "Pis Yedili", "Yalan Dünya", "Jet Sosyete", "Bizimkiler"
        ]
    },
    {
        category: "Yabancı Diziler",
        words: [
            "Game of Thrones", "Breaking Bad", "La Casa de Papel", "Squid Game", "Stranger Things",
            "Friends", "The Office", "How I Met Your Mother", "Sherlock", "Black Mirror",
            "Prison Break", "Lost", "The Walking Dead", "Dark", "Peaky Blinders",
            "Vikings", "Better Call Saul", "Narcos", "Wednesday", "The Last of Us",
            "The Boys", "House of the Dragon", "The Witcher", "Mandalorian", "The Big Bang Theory",
            "Brooklyn Nine-Nine", "Rick and Morty", "Suits", "Lucifer", "Grey's Anatomy"
        ]
    },
    {
        category: "Yerli Filmler",
        words: [
            "G.O.R.A", "A.R.O.G", "Yahşi Batı", "Recep İvedik", "Organize İşler",
            "Vizontele", "Babam ve Oğlum", "Eyvah Eyvah", "Düğün Dernek", "Hababam Sınıfı",
            "Tosun Paşa", "Süt Kardeşler", "Kibar Feyzo", "Çöpçüler Kralı", "Davaro",
            "Züğürt Ağa", "Eşkıya", "Kış Uykusu", "Ayla", "7. Koğuştaki Mucize",
            "Dağ", "Müslüm", "Bergen", "Nefes", "Kelebeğin Rüyası"
        ]
    },
    {
        category: "Yabancı Filmler",
        words: [
            "The Godfather", "Pulp Fiction", "Fight Club", "Forrest Gump", "Inception",
            "Interstellar", "The Dark Knight", "Joker", "Matrix", "Harry Potter",
            "Star Wars", "Avengers", "Titanic", "Avatar", "Terminator",
            "Jurassic Park", "Pirates of the Caribbean", "John Wick", "Gladiator", "Parasite",
            "Oppenheimer", "Barbie", "Shrek", "Lion King", "Toy Story"
        ]
    },
    {
        category: "Anime & Çizgi Dizi",
        words: [
            "Pokemon", "Naruto", "One Piece", "Dragon Ball Z", "Attack on Titan",
            "Death Note", "Demon Slayer", "Tom ve Jerry", "Scooby Doo", "Sünger Bob",
            "Ben 10", "Samurai Jack", "Powerpuff Girls", "Adventure Time", "Gumball",
            "Ninja Kaplumbağalar", "Transformers", "Garfield", "Looney Tunes", "Şirinler"
        ]
    }
];

// Get random word from a specific category or random category
export const getRandomWord = (selectedCategory?: string): { word: string; category: string } => {
    let categoryData;

    if (selectedCategory && selectedCategory !== 'random') {
        categoryData = wordCategories.find(c => c.category === selectedCategory);
    }

    if (!categoryData) {
        // Random category
        categoryData = wordCategories[Math.floor(Math.random() * wordCategories.length)];
    }

    const randomWord = categoryData.words[Math.floor(Math.random() * categoryData.words.length)];

    return {
        word: randomWord,
        category: categoryData.category
    };
};

// Get all category names
export const getCategoryNames = (): string[] => {
    return wordCategories.map(c => c.category);
};
