export interface WordCategory {
    category: string;
    words: string[];
}

export const categories: WordCategory[] = [
    {
        "category": "Mekanlar & Yerler",
        "words": [
            "Hastane", "Okul", "Hapishane", "Uzay İstasyonu", "Denizaltı", "Sirk",
            "Korsan Gemisi", "Süpermarket", "Mezarlık", "Sinema", "Kütüphane",
            "Spor Salonu", "Hamam", "Havalimanı", "Düğün Salonu", "Kutup Üssü",
            "Çöl", "Lunapark", "Kumarhane (Casino)", "Müze", "Hayvanat Bahçesi",
            "Metro İstasyonu", "Camii", "İnşaat Şantiyesi", "Banka Kasası",
            "Stadyum", "Sauna", "Vapur", "Kamp Alanı", "Kayak Merkezi",
            "Fabrika", "Laboratuvar", "Tiyatro Sahnesi", "Berber/Kuaför", "Otobüs Terminali"
        ]
    },
    {
        "category": "Yiyecek & İçecek",
        "words": [
            "Lahmacun", "Sushi", "Hamburger", "Brokoli", "Baklava", "Döner",
            "Pizza", "Çiğ Köfte", "Mantı", "Kruvasan", "Taco", "Menemen",
            "Kuru Fasulye", "Patlamış Mısır", "Dondurma", "Karpuz", "Sarımsak",
            "Soğan", "Çikolata", "Kahve", "Türk Kahvesi", "Ayran", "Şalgam",
            "Makarna", "İskender", "Kestane", "Midye Dolma", "Simit", "Kokoreç",
            "Lazanya", "Waffle", "Hurma", "Turşu", "Zeytin", "Peynir"
        ]
    },
    {
        "category": "Hayvanlar Alemi",
        "words": [
            "Aslan", "Penguen", "Zürafa", "Timsah", "Yarasa", "Sivrisinek",
            "Köpekbalığı", "Kanguru", "Ornitorenk", "Bukalemun", "Ahtapot",
            "Panda", "Koala", "Tavuk", "Horoz", "Hindi", "Kirpi", "Yılan",
            "Örümcek", "Arı", "Karınca", "Fil", "Gergedan", "Su Aygırı",
            "Yunus", "Balina", "Kartal", "Baykuş", "Papağan", "Flamingo",
            "Hamam Böceği", "Fare", "Köstebek", "Solucan", "Deniz Anası"
        ]
    },
    {
        "category": "Ünlüler & Tarihi Kişiler",
        "words": [
            "Mustafa Kemal Atatürk", "Elon Musk", "Cristiano Ronaldo", "Lionel Messi",
            "Michael Jackson", "Marilyn Monroe", "Albert Einstein", "Nikola Tesla",
            "Barış Manço", "Tarkan", "Cem Yılmaz", "Nusret", "Acun Ilıcalı",
            "Müslüm Gürses", "Kemal Sunal", "Adile Naşit", "Shakespeare",
            "Leonardo da Vinci", "Pablo Picasso", "Steve Jobs", "Mark Zuckerberg",
            "Bill Gates", "Kraliçe Elizabeth", "Donald Trump", "Hitler",
            "Napolyon", "Kleopatra", "Sezen Aksu", "Fatih Terim", "Arda Güler"
        ]
    },
    {
        "category": "Film & Dizi Karakterleri",
        "words": [
            "Joker", "Batman", "Örümcek Adam", "Harry Potter", "Darth Vader",
            "Yoda", "Iron Man", "Kaptan Amerika", "Thanos", "Deadpool",
            "Walter White (Heisenberg)", "Polat Alemdar", "Behzat Ç.", "Hürrem Sultan",
            "Ramiz Dayı", "İsmail Abi", "Recep İvedik", "Gora (Arif)",
            "Sherlock Holmes", "James Bond", "John Wick", "Jack Sparrow",
            "Forrest Gump", "Shrek", "Buzz Lightyear", "Mickey Mouse",
            "Sünger Bob", "Rick Sanchez", "Gandalf", "Gollum", "Voldemort",
            "Barbie", "Wednesday Addams", "Tommy Shelby"
        ]
    },
    {
        "category": "Oyun Karakterleri",
        "words": [
            "Mario", "Pikachu", "Kratos (God of War)", "Steve (Minecraft)",
            "Master Chief", "Lara Croft", "Sonic", "Pac-Man", "CJ (GTA San Andreas)",
            "Arthur Morgan (RDR2)", "Geralt (Witcher)", "Yasuo (LoL)", "Teemo",
            "Jett (Valorant)", "Sage (Valorant)", "Ellie (The Last of Us)",
            "Joel (The Last of Us)", "Link (Zelda)", "Zelda", "Scorpion (Mortal Kombat)",
            "Sub-Zero", "Ryu (Street Fighter)", "Crash Bandicoot", "Agent 47",
            "Gordon Freeman", "Doom Guy", "P.E.K.K.A (Clash)", "Barbar Kral"
        ]
    },
    {
        "category": "Araçlar & Taşıtlar",
        "words": [
            "Togg", "Ferrari", "Traktör", "Bisiklet", "Kaykay", "Paten",
            "Helikopter", "F-16 Savaş Uçağı", "Zeplin", "Sıcak Hava Balonu",
            "Denizaltı", "Kamyon", "Tır", "Metrobüs", "Teleferik",
            "Tank", "UFO", "Süpürge (Cadı)", "Uçan Halı", "Batmobile",
            "Titanic", "Ambulans", "İtfaiye Aracı", "Polis Arabası", "Çöp Kamyonu",
            "Vinç", "Dozer", "At Arabası", "Kağnı", "Segway", "Martı (Scooter)"
        ]
    },
    {
        "category": "Meslekler",
        "words": [
            "Doktor", "Öğretmen", "Polis", "İtfaiyeci", "Astronot",
            "Pilot", "Kasiyer", "Çöpçü", "Muslukçu (Tesisatçı)", "Youtuber",
            "Influencer", "Yazılımcı", "Hacker", "Avukat", "Hakim",
            "Cumhurbaşkanı", "Asker", "Casus", "Dedektif", "Palyaço",
            "Sihirbaz", "İmam", "Papaz", "Hemşire", "Veteriner",
            "Dişçi", "Boksör", "Futbolcu", "Şarkıcı", "Ressam",
            "Mimar", "Kurye", "Taksici", "Çiftçi", "Madenci"
        ]
    },
    {
        "category": "Eşyalar & Objeler",
        "words": [
            "iPhone", "Klavye", "Mouse", "Kulaklık", "Ütü", "Çamaşır Makinesi",
            "Bulaşık Süngeri", "Diş Fırçası", "Tuvalet Kağıdı", "Sabun",
            "Şampuan", "Parfüm", "Ruj", "Topuklu Ayakkabı", "Şemsiye",
            "Gözlük", "Saat", "Yüzük", "Kumbara", "Kredi Kartı",
            "Pasaport", "Anahtar", "Çakmak", "Kibrit", "Mum",
            "Ampul", "Priz", "Tencere", "Çay Bardağı", "Oklava",
            "Balta", "Testere", "Matkap", "Teleskop", "Mikroskop"
        ]
    },
    {
        "category": "Spor & Aktiviteler",
        "words": [
            "Futbol", "Basketbol", "Voleybol", "Tenis", "Yüzme",
            "Güreş", "Yağlı Güreş", "Sumo Güreşi", "Boks", "Kick Boks",
            "Formula 1", "Satranç", "Tavla", "Okey", "Saklambaç",
            "Körebe", "Yakar Top", "İp Atlama", "Uçurtma Uçurma", "Balık Tutma",
            "Kamp Yapma", "Yoga", "Pilates", "Crossfit", "Maraton",
            "Okçuluk", "Atıcılık", "Golf", "Bowling", "Bilardo"
        ]
    }
];

export function getRandomWord(): { category: string; word: string } {
    const categoryIndex = Math.floor(Math.random() * categories.length);
    const selectedCategory = categories[categoryIndex];
    const wordIndex = Math.floor(Math.random() * selectedCategory.words.length);
    return {
        category: selectedCategory.category,
        word: selectedCategory.words[wordIndex]
    };
}
