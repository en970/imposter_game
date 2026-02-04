export type Language = 'tr' | 'en';

export const translations = {
    tr: {
        appName: 'KelimeCasusu',
        tagline: 'İçinizdeki Casusu Bulun!',
        howToPlay: 'OYUN KURALLARI',
        rules: [
            'Herkese gizli bir kelime verilir, Casus hariç.',
            'Casus kelimeyi bilmez, sadece kategoriyi bilir.',
            'Sırayla kelimeyi belli etmeyecek ipuçları verin.',
            'Tur sonunda tartışın ve Casus\'u bulun!'
        ],
        username: 'Kullanıcı Adı',
        enterName: 'İsmini gir...',
        createRoom: 'Oda Oluştur',
        joinRoom: 'Odaya Katıl',
        roomCodePlaceholder: 'Oda kodu...',
        rejoinLastRoom: 'Son odaya geri dön:',
        ready: 'HAZIR MISIN?',
        connecting: 'Bağlanıyor...',
        playersHeading: 'Oyuncular',
        live: 'CANLI',
        minPlayers: 'BAŞLAMAK İÇİN EN AZ 3 KİŞİ GEREKLİ',
        startGame: 'OYUNU BAŞLAT',
        waitingForHost: 'HOSTUN BAŞLATMASI BEKLENİYOR...',
        category: 'KATEGORİ',
        chooseCategory: 'KATEGORİ SEÇİN',
        hostChoice: 'HOST SEÇER',
        imposterCount: 'Casus Sayısı',
        kickPlayer: 'Odadan At',
        you: 'SEN',
        host: 'HOST',
        organizer: 'YÖNETİCİ',
        player: 'OYUNCU',
        roomCode: 'Oda Kodu',
        cardDistribution: 'Kart Dağıtımı',
        revealCard: 'Kartını görmek için dokun',
        imposterRole: 'CASUSSUN!',
        imposterSecret: 'Gizli kelimeyi bilmiyorsun. Belli etme!',
        civilianSecret: 'Kelimeyi tarif et ama Casus\'a dikkat!',
        understood: 'Anladım',
        confirmed: 'Kartın Görüldü',
        waitingForOthers: 'Diğer oyuncular bekleniyor...',
        readyToStart: 'Herkes hazır! Oyun başlıyor...',
        gamePhase: 'Oyun',
        currentTurn: 'SIRADA',
        nextTurn: 'SIRAYI GEÇ',
        wait: 'BEKLE',
        goToVote: 'OYLAMA',
        votingPhase: 'Oylama',
        whosImposter: 'Sence Casus kim?',
        confirmVote: 'OYU GÖNDER',
        votes: 'Oy',
        voteDistribution: 'Oy Dağılımı',
        civiliansWin: 'SİVİLLER KAZANDI!',
        imposterWins: 'CASUS KAZANDI!',
        imposterCaught: 'Casus yakalandı!',
        imposterEscaped: 'Casus kendini gizledi.',
        playAgain: 'TEKRAR OYNA',
        waitingForHostRestart: 'Hostun tekrar başlatması bekleniyor...',
        random: 'RASTGELE',
        categories: {
            random: 'RASTGELE',
            Genel: 'Genel',
            Yemek: 'Yemek',
            Eşya: 'Eşya',
            Şehirler: 'Şehirler',
            Diziler: 'Diziler',
            Filmler: 'Filmler',
            Spor: 'Spor',
            Hayvanlar: 'Hayvanlar'
        },
        shareText: 'Paylaş',
        shareMessage: 'Hadi KelimeCasusu oynayalım! Oda kodu: ',

        // Timer
        timerToggle: 'Zamanlayıcı',
        timerOn: 'AÇIK',
        timerOff: 'KAPALI',
        timerDuration: 'Süre (saniye)',

        // Navbar
        navHowToPlay: 'Nasıl Oynanır?',
        navStrategies: 'Stratejiler',
        navFaq: 'SSS',
        navAbout: 'Hakkımızda',
        navContact: 'İletişim',
        navMenu: 'Menü',
        backToGame: 'Oyuna Dön',

        // Content pages
        howToPlayPage: {
            title: 'Nasıl Oynanır',
            subtitle: 'KelimeCasusu oynama rehberi',
            whatIs: 'KelimeCasusu Nedir?',
            whatIsDesc: 'KelimeCasusu, kelime tahminini gizli rollerle birleştiren heyecanlı bir sosyal çıkarım parti oyunudur. 3-10 arkadaşınızla oynayın ve aranızdaki Casusu bulun! Casus, herkesin gördüğü gizli kelimeyi bilmez - yalnızca kategoriyi bilir. Onu karışmadan önce yakalayabilir misiniz?',
            gameSetup: 'Oyun Kurulumu',
            steps: [
                { title: 'Oda Oluştur', desc: 'Benzersiz bir 4 haneli kod almak için Oda Oluştur\'a tıklayın. Bunu arkadaşlarınızla paylaşın!' },
                { title: 'Oyuncuları Davet Et', desc: 'Arkadaşlar oda kodunu girerek katılır. Her oyuncu bir takma ad seçer. 3-10 oyuncu gerekli.' },
                { title: 'Kategori Seç', desc: 'Oda sahibi kelime kategorisini seçer: Hayvanlar, Filmler, Şehirler, Yemekler ve daha fazlası!' },
                { title: 'Oyunu Başlat', desc: 'Herkes hazır olduğunda, host oyunu başlatır ve roller atanır!' }
            ],
            gameplayPhases: 'Oyun Aşamaları',
            phases: [
                { title: 'Aşama 1: Rol Dağıtımı', text: 'Oyun başladığında herkes gizli bir kart alır:', items: ['Siviller: Gizli kelimeyi görür (örn. Aslan)', 'Casus: Sadece kategoriyi görür (örn. Hayvanlar)'] },
                { title: 'Aşama 2: İpucu Turu', text: 'Her oyuncu gizli kelime hakkında TEK KELİMELİK ipucu verir:', items: ['Siviller kelimeyi bildiklerini kanıtlar (ama çok belli etmeden!)', 'Casus genel ipuçları vererek karışmaya çalışır', 'Kelimeyi veya türevlerini söyleyemezsiniz'] },
                { title: 'Aşama 3: Tartışma', text: 'Tüm ipuçları verildikten sonra:', items: ['Herkesin ipuçlarını analiz edin', 'Şüpheli oyuncuları sorgulayın', 'Casusun kim olabileceğini tartışın'] },
                { title: 'Aşama 4: Oylama', text: 'Herkes Casusun kim olduğunu düşündüğüne oy verir:', items: ['En çok oy alan oyuncu açığa çıkar', 'Doğruysa → Siviller KAZANIR!', 'Yanlışsa → Casus KAZANIR!'] }
            ],
            winConditions: 'Kazanma Koşulları',
            civiliansWinTitle: 'Siviller Kazanır',
            civiliansWinItems: ['Casusu doğru şekilde oylayarak elediler', 'Casusun şüpheli ipuçlarını yakaladılar'],
            imposterWinTitle: 'Casus Kazanır',
            imposterWinItems: ['Masum bir Sivil oylandı', 'Gizli kelimeyi doğru tahmin etti', 'Sonuna kadar gizli kaldı'],
            importantRules: 'Önemli Kurallar',
            rulesItems: [
                'Ekranınızı gizli tutun - rolünüzü göstermeyin!',
                'İpuçları sadece TEK kelime olmalı',
                'Gizli kelimeyi veya türevlerini asla söylemeyin',
                'Tartışma sırasında yalan söylemek serbest!',
                'Diğer oyuncuların ekranlarına bakmayın',
                'Saygılı olun ve eğlenin!'
            ],
            exampleRound: 'Örnek Tur',
            exampleCategory: 'Kategori:',
            exampleWord: 'Gizli Kelime:',
            examplePlayers: 'Oyuncular:',
            exampleResult: 'Jordan\'ın ipucu çok belirsizdi. Oyuncular doğru oy verdi - SİVİLLER KAZANDI!',
            playNow: 'Hemen Oyna'
        },

        strategiesPage: {
            title: 'Oyun Stratejileri',
            subtitle: 'Bu profesyonel ipuçları ve taktiklerle KelimeCasusu\'nda ustalaşın',
            civilianTitle: 'Sivil Stratejileri',
            civilianDesc: 'Sivil olarak amacınız, kelimeyi bildiğinizi kanıtlarken Casusu yakalamaktır.',
            civilianStrategies: [
                { level: 'BAŞLANGIÇ', title: 'İpuçlarınızı Dengeleyin', desc: 'Çok belli etmeyin (Casus kelimeyi tahmin eder) veya çok belirsiz olmayın (şüpheli görünürsünüz).', example: 'Kelime Aslan ise:', good: 'İyi: Safari, Yele, Sürü', bad: 'Kötü: Kral (çok belli), Hayvan (çok belirsiz)' },
                { level: 'ORTA', title: 'Diğer Oyuncuları İzleyin', desc: 'Diğerleriyle uyuşmayan ipuçlarına dikkat edin. Casus genellikle genel veya uyumsuz ipuçları verir.', flags: ['Kategorideki herhangi bir kelimeye uyabilecek ipuçları', 'İpucu vermeden önce tereddüt', 'Diğerleriyle çelişen ipuçları'] },
                { level: 'İLERİ', title: 'Tuzak Kurun', desc: 'Casusun gerçekten anlamadan tarzınızı kopyalayıp kopyalamadığını görmek için biraz yanıltıcı bir ipucu verin.', tip: 'Herkes hayvan özellikleri söylüyor ama bir kişi rastgele bir sıfat söylüyorsa, körlemesine tahmin ediyor olabilir!' },
                { level: 'ORTA', title: 'Tartışmada Aktif Olun', desc: 'Sessiz kalmak sizi şüpheli gösterir. Analizinizi paylaşın ve sorular sorun!', example: '"Ayşe, ipucun ilginçti - neden onu seçtin?"' }
            ],
            imposterTitle: 'Casus Stratejileri',
            imposterDesc: 'Casus olarak, Sivillerle karışın ve ipuçlarından gizli kelimeyi çözmeye çalışın.',
            imposterStrategies: [
                { level: 'BAŞLANGIÇ', title: 'Önce Dikkatlice Dinleyin', desc: 'İlk birkaç ipucu altın değerindedir! Kelimeyi tahmin etmek için kalıpları ve ortak temaları arayın.', example: 'İpuçları: Soğuk, Siyah, Yürüyüş → Kategori: Hayvanlar → Muhtemelen Penguen!' },
                { level: 'BAŞLANGIÇ', title: 'Güvenli, Geniş İpuçları Verin', desc: 'Kategorideki birden fazla şeye uyabilecek ipuçları kullanın.', example: 'Hayvanlar kategorisi - güvenli ipuçları: Vahşi, Doğa, Güzel, Hızlı' },
                { level: 'ORTA', title: 'Şüpheyi Savuşturun', desc: 'Biri sizi şüpheliyse, saldırgan olmadan dikkati başka bir oyuncuya yönlendirin.', example: '"İpucum mantıklı çünkü... Ama aslında, Ali\'nin ipucunun da oldukça belirsiz olduğunu fark eden oldu mu?"' },
                { level: 'İLERİ', title: 'Kelimeyi Tahmin Edin', desc: 'İpuçlarından kelimeyi çözerseniz, sonunda tahmin edip kazanabilirsiniz!', tip: 'Yakalansanız bile, doğru tahmin kazanmanız demektir.' },
                { level: 'ORTA', title: 'Özgüvenli Olun', desc: 'Tereddüt etmeyin veya gergin görünmeyin. İpucunuzu tam olarak ne yaptığınızı biliyor gibi güvenle verin. Beden dili video aramalarda da önemlidir!' }
            ],
            advancedTitle: 'İleri Taktikler',
            advancedTactics: [
                { title: 'Oyuncu Kalıplarını Okuyun', desc: 'Arkadaşlarınızın nasıl oynadığını öğrenin. Birisi kalıbını bozduğunda fark edin!' },
                { title: 'Psikoloji Önemlidir', desc: 'Gerginlik, aşırı açıklama veya ani sessizliği izleyin. İnsanlar genellikle sadece kelimelerle değil, davranışlarıyla kendilerini ele verirler.' },
                { title: 'İstatistiksel Düşünün', desc: '5 oyuncuda herkesin Casus olma olasılığı %20\'dir. Rastgele oy vermeyin - kanıtlara dayalı kararlar verin!' },
                { title: 'İttifaklar Kurun', desc: 'Tamamlayıcı ipuçları veren oyuncular muhtemelen ikisi de Sivil\'dir. Garip olanı analiz etmek için birlikte çalışın!' }
            ],
            mistakesTitle: 'Kaçınılması Gereken Yaygın Hatalar',
            mistakes: [
                { title: 'Çok belli ipuçları vermek', desc: 'Casus kelimeyi anında çözer' },
                { title: 'Suçlandığında çok savunmacı olmak', desc: 'Bu sizi daha suçlu gösterir, masum olsanız bile' },
                { title: 'İlk turda rastgele oy vermek', desc: 'Masum bir Sivil\'i eleyip Casusun kazanmasına yardım edebilirsiniz' },
                { title: 'Tamamen sessiz kalmak', desc: 'Sessizlik şüpheli görünür - tartışmalara katılın!' },
                { title: 'Yanlışlıkla kelimeyi söylemek', desc: 'Bu oyunu herkes için mahveder - konuşmadan önce düşünün!' }
            ],
            tryCta: 'Bu Stratejileri Şimdi Deneyin'
        },

        faqPage: {
            title: 'Sıkça Sorulan Sorular',
            subtitle: 'KelimeCasusu hakkında bilmeniz gereken her şey',
            sections: [
                {
                    category: 'Genel Sorular',
                    faqs: [
                        { q: 'KelimeCasusu ücretsiz mi?', a: 'Evet! KelimeCasusu tamamen ücretsizdir. Ücret yok, kayıt yok, indirme yok. Sadece web sitesini açın ve arkadaşlarınızla oynamaya başlayın.' },
                        { q: 'Kaç oyuncu oynayabilir?', a: 'KelimeCasusu 3-10 oyuncuyu destekler. En iyi deneyim için 5-8 oyuncu idealdir. Daha az oyuncuyla oyunlar daha hızlı olur. Daha fazla oyuncuyla daha fazla aldatma ve heyecan!' },
                        { q: 'Hesap oluşturmam gerekiyor mu?', a: 'Hesaba gerek yok! Bir takma ad seçin ve oynamaya hazırsınız. Engelsiz anında eğlenceye inanıyoruz.' },
                        { q: 'Hangi diller destekleniyor?', a: 'Şu anda İngilizce ve Türkçe mevcuttur. Almanca, Fransızca ve İspanyolca dahil daha fazla dil eklemeye çalışıyoruz.' }
                    ]
                },
                {
                    category: 'Teknik Sorular',
                    faqs: [
                        { q: 'Hangi cihazlarda oynayabilirim?', a: 'KelimeCasusu modern bir web tarayıcısı olan herhangi bir cihazda çalışır - masaüstü bilgisayarlar, dizüstü bilgisayarlar, tabletler ve akıllı telefonlar. Uygulama indirmeye gerek yok!' },
                        { q: 'Mobil uygulama var mı?', a: 'Henüz yok, ancak web sitesi mobil cihazlar için tamamen optimize edilmiştir. Telefon tarayıcınızda mükemmel çalışır. Gelecekte iOS ve Android uygulamaları planlanmaktadır.' },
                        { q: 'Oynamak için internete ihtiyacım var mı?', a: 'Evet, KelimeCasusu çevrimiçi çok oyunculu bir oyundur. Tüm oyuncuların gerçek zamanlı oynamak için internet bağlantısına ihtiyacı var.' },
                        { q: 'Oyun yavaş veya yüklenmiyor. Ne yapmalıyım?', a: 'Şu adımları deneyin: 1) Sayfayı yenileyin, 2) Tarayıcı önbelleğinizi temizleyin, 3) Farklı bir tarayıcı deneyin, 4) İnternet bağlantınızı kontrol edin. Sorunlar devam ederse bizimle iletişime geçin!' }
                    ]
                },
                {
                    category: 'Oyun Soruları',
                    faqs: [
                        { q: 'Oyun odası nasıl oluşturulur?', a: 'Ana sayfada Oda Oluştur\'a tıklayın. Benzersiz bir 4 haneli kod alacaksınız. Bu kodu arkadaşlarınızla paylaşarak katılmalarını sağlayın.' },
                        { q: 'Arkadaşlar odama nasıl katılır?', a: 'Arkadaşlar Odaya Katıl\'a tıklayıp paylaştığınız 4 haneli kodu girerler. Her oyuncu bir takma ad seçer, sonra herkes oynamaya hazırdır!' },
                        { q: 'Casus nedir?', a: 'Her oyunda rastgele bir oyuncu Casus olarak seçilir. Casus gizli kelimeyi görmez - sadece kategoriyi bilir. Gerçek kelimeyi bilmeden ipuçları vererek karışmaya çalışmalıdır!' },
                        { q: 'İpuçları nasıl verilir?', a: 'Her oyuncu sırayla gizli kelime hakkında TEK KELİMELİK bir ipucu verir. İpuçları kelimeyi ima etmeli ama çok belli olmamalıdır. Kelimenin kendisini veya varyasyonlarını söyleyemezsiniz.' },
                        { q: 'Nasıl kazanırım?', a: 'Sivil olarak: Casusu bulun ve oylamayla eleyin. Casus olarak: Oylamadan sağ çıkın veya gizli kelimeyi doğru tahmin ederek bonus kazanın!' },
                        { q: 'Birden fazla tur oynayabilir miyiz?', a: 'Evet! Her oyun bittikten sonra host aynı oyuncularla yeni bir oyun başlatabilir. İstediğiniz kadar tur oynayın!' }
                    ]
                },
                {
                    category: 'Kelime Kategorileri',
                    faqs: [
                        { q: 'Hangi kategoriler mevcut?', a: 'Birçok kategorimiz var: Hayvanlar, Yemekler, Şehirler, Filmler, Diziler, Spor ve daha fazlası! Düzenli olarak yeni kategoriler eklenmektedir.' },
                        { q: 'Oyunda kaç kelime var?', a: 'Veritabanımız tüm kategorilerde yüzlerce kelime içerir. Her kategoride 20-30+ benzersiz kelime bulunur, her oyunda çeşitlilik sağlar.' },
                        { q: 'Yeni kelimeler veya kategoriler önerebilir miyim?', a: 'Kesinlikle! Topluluk katkılarını seviyoruz. Önerilerinizle bizimle iletişime geçin ve gelecek güncellemelerde eklemeyi değerlendireceğiz.' }
                    ]
                },
                {
                    category: 'Gizlilik ve Güvenlik',
                    faqs: [
                        { q: 'Hangi verileri topluyorsunuz?', a: 'Yalnızca oyun için gereken minimum verileri topluyoruz: seçtiğiniz takma ad ve oda kodu. Kişisel bilgi, e-posta veya takip verisi toplanmaz.' },
                        { q: 'Oyun verilerim kaydediliyor mu?', a: 'Hayır, oyun verileri geçicidir. Bir oyun bittiğinde tüm veriler silinir. Oyunlarınızın kayıtlarını veya istatistiklerini tutmuyoruz.' },
                        { q: 'Oyun çocuklar için güvenli mi?', a: 'Evet! KelimeCasusu aile dostu bir oyundur. Tüm kelimeler her yaş için uygundur. Ancak, çevrimiçi oynayan küçük çocuklar için ebeveyn gözetimi önerilir.' }
                    ]
                },
                {
                    category: 'Sorun Giderme',
                    faqs: [
                        { q: 'Oda kodu çalışmıyor. Ne yapmalıyım?', a: 'Doğru 4 haneli kodu girdiğinizden emin olun. Oda kapatılmış olabilir - hosttan yeni bir oda oluşturmasını isteyin. Ayrıca sayfanızı yenilemeyi deneyin.' },
                        { q: 'Oyun başlamıyor. Neden?', a: 'Başlamak için en az 3 oyuncu gereklidir. Tüm oyuncuların odada olduğundan ve hostun Başlat düğmesine tıkladığından emin olun.' },
                        { q: 'Sadece bir kategori görüyorum, kelime yok!', a: 'Bu, Casus olduğunuz anlamına gelir! Casus olarak yalnızca kategoriyi görürsünüz ve diğer oyuncuların ipuçlarından kelimeyi çözmeniz gerekir.' },
                        { q: 'Bağlantım kesildi. Tekrar katılabilir miyim?', a: 'Evet! Aynı takma adla oda kodunu tekrar girin. Oyun zaten başladıysa, bir sonraki turu beklemeniz gerekebilir.' }
                    ]
                }
            ],
            stillHaveQuestions: 'Hâlâ sorunuz mu var?',
            hereToHelp: 'Yardımcı olmak için buradayız! İstediğiniz zaman bize ulaşın.',
            contactUs: 'Bize Ulaşın',
            startPlaying: 'Şimdi Oynamaya Başla'
        },

        aboutPage: {
            title: 'KelimeCasusu Hakkında',
            subtitle: 'En iyi sosyal çıkarım parti oyunu',
            whatIs: 'KelimeCasusu Nedir?',
            whatIsDesc1: 'KelimeCasusu, oyuncuların aralarındaki gizli Casusu bulmaya çalıştığı ücretsiz bir çevrimiçi sosyal çıkarım oyunudur. Kelime tahmin mekaniğini gizli rollerle birleştirerek heyecanlı ve stratejik bir parti oyunu deneyimi yaratır.',
            whatIsDesc2: 'Oyun geceleri, takım oluşturma etkinlikleri, sanal buluşmalar veya arkadaşlar ve aileyle eğlenmek istediğiniz her an için mükemmeldir. 3-10 oyuncuyla oynayın, indirme veya hesap gerekmez!',
            mission: 'Misyonumuz',
            missionDesc: 'Harika oyunların herkes için erişilebilir olması gerektiğine inanıyoruz. Misyonumuz, insanları bir araya getiren eğlenceli, ilgi çekici ve tamamen ücretsiz bir oyun deneyimi sunmaktır. İster dünyanın dört bir yanındaki arkadaşlarınızla bağlantı kurun, ister yerel bir oyun gecesi yapın, KelimeCasusu unutulmaz anlar yaratmayı kolaylaştırır.',
            whyChoose: 'Neden KelimeCasusu?',
            features: [
                { icon: '&#127381;', title: '%100 Ücretsiz', desc: 'Gizli ücret yok, premium özellik yok, öde-kazan yok. Herkes için saf eğlence.' },
                { icon: '&#9889;', title: 'Anında Oyna', desc: 'İndirme yok, hesap yok. Oda oluştur, kodu paylaş ve hemen oyna.' },
                { icon: '&#128241;', title: 'Her Yerde Oyna', desc: 'Telefonlar, tabletler, dizüstü bilgisayarlar, masaüstü bilgisayarlarda çalışır. Sadece tarayıcı gerekli!' },
                { icon: '&#128101;', title: '3-10 Oyuncu', desc: 'Küçük gruplar veya büyük partiler için mükemmel. Daha fazla oyuncu = daha fazla kaos!' },
                { icon: '&#127758;', title: 'Çoklu Dil', desc: 'İngilizce ve Türkçe olarak mevcut. Yakında daha fazla dil geliyor!' },
                { icon: '&#128218;', title: 'Birçok Kategori', desc: 'Hayvanlar, filmler, şehirler, yemekler ve seçebileceğiniz daha birçok kategori!' }
            ],
            techTitle: 'Modern Teknoloji ile Üretildi',
            techDesc: 'KelimeCasusu, sorunsuz, hızlı ve güvenilir bir oyun deneyimi sağlamak için en son web teknolojileri kullanılarak oluşturulmuştur:',
            privacyTitle: 'Gizliliğiniz Önemlidir',
            privacyDesc: 'Gizliliğinizi ciddiye alıyoruz. KelimeCasusu yalnızca oyun için gereken minimum verileri toplar (seçtiğiniz takma ad ve oda kodu). Sizi takip etmiyoruz, verilerinizi satmıyoruz veya kişisel bilgi istemiyoruz. Oyun verileri her oturumdan sonra silinir. Daha fazla bilgi için gizlilik politikamızı okuyun.',
            developerTitle: 'Geliştiriciyle Tanışın',
            developerDesc: 'KelimeCasusu, eğlenceli ve erişilebilir oyunlar yaratma tutkusu olan bağımsız geliştirici Enes Öz tarafından geliştirilmiştir. Klasik sosyal çıkarım oyunlarından ilham alan KelimeCasusu, oyun keyfini paylaşarak arkadaşları bir araya getirmek için yaratılmıştır.',
            futurePlans: 'Gelecek Planları',
            futurePlansDesc: 'KelimeCasusu\'nu daha iyi yapmak için sürekli çalışıyoruz. İşte gelenler:',
            futureItems: [
                'Daha fazla dil (Almanca, Fransızca, İspanyolca ve daha fazlası)',
                'Özel kelime listeleri - kendi kategorilerinizi oluşturun',
                'Oyun istatistikleri ve skor tabloları',
                'Sesli sohbet entegrasyonu',
                'Yeni oyun modları ve varyasyonları',
                'iOS ve Android için yerel mobil uygulamalar'
            ],
            thankYou: 'Teşekkürler!',
            thankYouDesc: 'KelimeCasusu\'nu oynadığınız için teşekkürler! Desteğiniz ve geri bildirimleriniz oyunu daha iyi yapmamıza yardımcı oluyor. İyi eğlenceler!',
            playCta: 'KelimeCasusu\'nu Şimdi Oyna'
        },

        contactPage: {
            title: 'Bize Ulaşın',
            subtitle: 'Sizden haber almak isteriz!',
            sendMessage: 'Bize Mesaj Gönderin',
            yourName: 'Adınız',
            yourEmail: 'E-posta Adresiniz',
            subject: 'Konu',
            message: 'Mesaj',
            namePlaceholder: 'Ahmet Yılmaz',
            emailPlaceholder: 'ahmet@example.com',
            subjectPlaceholder: 'Hata bildirimi, Geri bildirim, Soru...',
            messagePlaceholder: 'Aklınızdakileri bize anlatın...',
            send: 'Mesaj Gönder',
            sent: 'Mesaj gönderildi!',
            sentDesc: 'En kısa sürede size dönüş yapacağız.',
            contactInfo: 'İletişim Bilgileri',
            email: 'E-posta',
            responseTime: 'Yanıt Süresi',
            responseTimeValue: 'Genellikle 24-48 saat içinde',
            techSupport: 'Teknik Destek',
            techSupportDesc: 'Teknik sorun mu yaşıyorsunuz? Lütfen şunları belirtin:',
            techSupportItems: [
                'Tarayıcı ve sürümü (örn. Chrome 120)',
                'Cihaz türü (telefon, tablet, bilgisayar)',
                'Ne olduğu ve ne zaman',
                'Mümkünse ekran görüntüleri'
            ],
            suggestions: 'Öneriler Bekliyoruz',
            suggestionsDesc: 'Yeni özellikler, kategoriler veya iyileştirmeler için fikirleriniz mi var? Oyuncularımızdan haber almayı seviyoruz! Geri bildirimleriniz KelimeCasusu\'nu herkes için daha iyi yapmamıza yardımcı olur.',
            quickAnswers: 'Hızlı Yanıtlar',
            quickItems: [
                { title: 'KelimeCasusu ücretsiz mi?', desc: 'Evet! Tamamen ücretsiz, gizli ücret yok.' },
                { title: 'Kaç oyuncu?', desc: 'Oyun başına 3-10 oyuncu.' },
                { title: 'Mobilde çalışır mı?', desc: 'Evet! Tarayıcısı olan herhangi bir cihaz.' },
                { title: 'Hesap gerekli mi?', desc: 'Hayır! Takma ad seçin ve oynayın.' }
            ],
            viewAllFaqs: 'Tüm SSS\'leri Görüntüle →',
            backToGameCta: 'Oyuna Dön'
        },
    },
    en: {
        appName: 'WordImposter',
        tagline: 'Find the Imposter Among You!',
        howToPlay: 'HOW TO PLAY',
        rules: [
            'Everyone gets a secret word, except the Imposter.',
            'The Imposter doesn\'t know the word, only the category.',
            'Take turns giving one-word clues.',
            'Discuss and Find the Imposter at the end!'
        ],
        username: 'Username',
        enterName: 'Enter your name...',
        createRoom: 'Create Room',
        joinRoom: 'Join Room',
        roomCodePlaceholder: 'Room code...',
        rejoinLastRoom: 'Rejoin last room:',
        ready: 'READY?',
        connecting: 'Connecting...',
        playersHeading: 'Players',
        live: 'LIVE',
        minPlayers: 'MINIMUM 3 PLAYERS REQUIRED',
        startGame: 'START GAME',
        waitingForHost: 'WAITING FOR HOST...',
        category: 'CATEGORY',
        chooseCategory: 'CHOOSE CATEGORY',
        hostChoice: 'HOST\'S CHOICE',
        imposterCount: 'Number of Imposters',
        kickPlayer: 'Kick Player',
        you: 'YOU',
        host: 'HOST',
        organizer: 'ORGANIZER',
        player: 'PLAYER',
        roomCode: 'Room Code',
        cardDistribution: 'Card Reveal',
        revealCard: 'Tap to see your card',
        imposterRole: 'YOU ARE THE IMPOSTER!',
        imposterSecret: 'You don\'t know the secret word. Don\'t get caught!',
        civilianSecret: 'Describe the word but watch out for the Imposter!',
        understood: 'Understood',
        confirmed: 'Card Seen',
        waitingForOthers: 'Waiting for other players...',
        readyToStart: 'Everyone is ready! Game starting...',
        gamePhase: 'Game',
        currentTurn: 'CURRENT TURN',
        nextTurn: 'NEXT TURN',
        wait: 'WAIT',
        goToVote: 'VOTING',
        votingPhase: 'Voting',
        whosImposter: 'Who is the Imposter?',
        confirmVote: 'CONFIRM VOTE',
        votes: 'Votes',
        voteDistribution: 'Vote Distribution',
        civiliansWin: 'CIVILIANS WIN!',
        imposterWins: 'IMPOSTER WINS!',
        imposterCaught: 'The Imposter was caught!',
        imposterEscaped: 'The Imposter escaped!',
        playAgain: 'PLAY AGAIN',
        waitingForHostRestart: 'Waiting for host to restart...',
        random: 'RANDOM',
        categories: {
            random: 'RANDOM',
            Genel: 'General',
            Yemek: 'Food',
            Eşya: 'Items',
            Şehirler: 'Cities',
            Diziler: 'TV Shows',
            Filmler: 'Movies',
            Spor: 'Sports',
            Hayvanlar: 'Animals'
        },
        shareText: 'Share',
        shareMessage: 'Let\'s play WordImposter! Room code: ',

        // Timer
        timerToggle: 'Timer',
        timerOn: 'ON',
        timerOff: 'OFF',
        timerDuration: 'Duration (seconds)',

        // Navbar
        navHowToPlay: 'How to Play',
        navStrategies: 'Strategies',
        navFaq: 'FAQ',
        navAbout: 'About',
        navContact: 'Contact',
        navMenu: 'Menu',
        backToGame: 'Back to Game',

        // Content pages
        howToPlayPage: {
            title: 'How to Play',
            subtitle: 'Complete guide to playing WordImposter',
            whatIs: 'What is WordImposter?',
            whatIsDesc: 'WordImposter is an exciting social deduction party game combining word guessing with hidden roles. Play with 3-10 friends and find the Imposter among you! The Imposter does not know the secret word that everyone else sees - they only know the category. Can you catch them before they blend in?',
            gameSetup: 'Game Setup',
            steps: [
                { title: 'Create a Room', desc: 'Click Create Room to get a unique 4-digit code. Share this with friends!' },
                { title: 'Invite Players', desc: 'Friends join by entering the room code. Each player picks a nickname. 3-10 players needed.' },
                { title: 'Choose Category', desc: 'Room host selects a word category: Animals, Movies, Countries, Foods, and many more!' },
                { title: 'Start the Game', desc: 'Once everyone is ready, the host starts the game and roles are assigned!' }
            ],
            gameplayPhases: 'Gameplay Phases',
            phases: [
                { title: 'Phase 1: Role Assignment', text: 'When the game starts, everyone receives a secret card:', items: ['Civilians: See the secret word (e.g., Lion)', 'Imposter: Only sees the category (e.g., Animals)'] },
                { title: 'Phase 2: Clue Round', text: 'Each player gives a ONE-WORD clue about the secret word:', items: ['Civilians prove they know the word (but not too obviously!)', 'Imposter tries to blend in by giving generic clues', 'You CANNOT say the word or any derivatives'] },
                { title: 'Phase 3: Discussion', text: 'After all clues are given:', items: ['Analyze everyone\'s clues', 'Question suspicious players', 'Debate who might be the Imposter'] },
                { title: 'Phase 4: Voting', text: 'Everyone votes for who they think is the Imposter:', items: ['Player with most votes is revealed', 'If correct \u2192 Civilians WIN!', 'If wrong \u2192 Imposter WINS!'] }
            ],
            winConditions: 'Winning Conditions',
            civiliansWinTitle: 'Civilians Win',
            civiliansWinItems: ['Vote out the Imposter correctly', 'Catch the Imposter giving suspicious clues'],
            imposterWinTitle: 'Imposter Wins',
            imposterWinItems: ['An innocent Civilian gets voted out', 'Correctly guess the secret word', 'Stay hidden until the end'],
            importantRules: 'Important Rules',
            rulesItems: [
                'Keep your screen private - do not show your role!',
                'Clues must be ONE word only',
                'Never say the secret word or derivatives',
                'Lying during discussion is allowed!',
                'Do not peek at other players\' screens',
                'Be respectful and have fun!'
            ],
            exampleRound: 'Example Round',
            exampleCategory: 'Category:',
            exampleWord: 'Secret Word:',
            examplePlayers: 'Players:',
            exampleResult: 'Jordan\'s clue was too vague. Players voted correctly - CIVILIANS WIN!',
            playNow: 'Play Now'
        },

        strategiesPage: {
            title: 'Game Strategies',
            subtitle: 'Master WordImposter with these pro tips and tactics',
            civilianTitle: 'Civilian Strategies',
            civilianDesc: 'As a Civilian, your goal is to prove you know the word while catching the Imposter.',
            civilianStrategies: [
                { level: 'BEGINNER', title: 'Balance Your Clues', desc: 'Do not be too obvious (Imposter will guess the word) or too vague (you will look suspicious).', example: 'If the word is Lion:', good: 'Good: Safari, Mane, Pride', bad: 'Bad: King (too obvious), Animal (too vague)' },
                { level: 'INTERMEDIATE', title: 'Watch Other Players', desc: 'Pay attention to clues that do not fit well with others. The Imposter often gives generic or mismatched hints.', flags: ['Clues that could fit any word in the category', 'Hesitation before giving a clue', 'Clues that contradict others'] },
                { level: 'ADVANCED', title: 'Set Traps', desc: 'Give a slightly misleading clue to see if the Imposter copies your style without truly understanding.', tip: 'If everyone says animal features but one person says a random adjective, they might be guessing blindly!' },
                { level: 'INTERMEDIATE', title: 'Be Active in Discussion', desc: 'Staying silent makes you look suspicious. Share your analysis and ask questions!', example: '"Sarah, your clue was interesting - why did you choose that?"' }
            ],
            imposterTitle: 'Imposter Strategies',
            imposterDesc: 'As the Imposter, blend in with the Civilians and figure out the secret word from their clues.',
            imposterStrategies: [
                { level: 'BEGINNER', title: 'Listen Carefully First', desc: 'The first few clues are gold! Look for patterns and common themes to guess the word.', example: 'Clues: Cold, Black, Waddle \u2192 Category: Animals \u2192 Probably Penguin!' },
                { level: 'BEGINNER', title: 'Give Safe, Broad Clues', desc: 'Use clues that could apply to multiple things in the category.', example: 'Category Animals - safe clues: Wild, Nature, Beautiful, Fast' },
                { level: 'INTERMEDIATE', title: 'Deflect Suspicion', desc: 'If someone suspects you, calmly redirect attention to another player without being aggressive.', example: '"My clue makes sense because... But actually, did anyone notice Mike\'s clue was pretty vague too?"' },
                { level: 'ADVANCED', title: 'Guess the Word for Bonus Win', desc: 'If you figure out the word from clues, you can guess it at the end for an instant win!', tip: 'Even if you are caught, a correct guess means you still win.' },
                { level: 'INTERMEDIATE', title: 'Act Confident', desc: 'Do not hesitate or look nervous. Give your clue confidently like you know exactly what you are doing. Body language matters in video calls too!' }
            ],
            advancedTitle: 'Advanced Tactics',
            advancedTactics: [
                { title: 'Read Player Patterns', desc: 'Learn how your friends play. Some people always give obvious clues, others are cryptic. Notice when someone breaks their pattern!' },
                { title: 'Psychology Matters', desc: 'Watch for nervousness, over-explaining, or sudden silence. People often give themselves away through behavior, not just words.' },
                { title: 'Think Statistically', desc: 'With 5 players, there is a 20% chance anyone is the Imposter. Do not vote randomly - base decisions on evidence!' },
                { title: 'Build Alliances', desc: 'Players with complementary clues are likely both Civilians. Work together to analyze the odd one out!' }
            ],
            mistakesTitle: 'Common Mistakes to Avoid',
            mistakes: [
                { title: 'Giving too obvious clues', desc: 'The Imposter will figure out the word instantly' },
                { title: 'Being too defensive when accused', desc: 'This makes you look more guilty, even if you are innocent' },
                { title: 'Voting randomly in the first round', desc: 'You might eliminate an innocent Civilian and help the Imposter win' },
                { title: 'Staying completely silent', desc: 'Silence looks suspicious - participate in discussions!' },
                { title: 'Accidentally saying the word', desc: 'This ruins the game for everyone - think before you speak!' }
            ],
            tryCta: 'Try These Strategies Now'
        },

        faqPage: {
            title: 'Frequently Asked Questions',
            subtitle: 'Everything you need to know about WordImposter',
            sections: [
                {
                    category: 'General Questions',
                    faqs: [
                        { q: 'Is WordImposter free to play?', a: 'Yes! WordImposter is completely free. No fees, no registration, no downloads required. Just open the website and start playing with your friends instantly.' },
                        { q: 'How many players can play?', a: 'WordImposter supports 3-10 players. The sweet spot is 5-8 players for the best experience. With fewer players, games are faster. With more players, there is more deception and excitement!' },
                        { q: 'Do I need to create an account?', a: 'No account needed! Just pick a nickname and you are ready to play. We believe in instant fun without barriers.' },
                        { q: 'What languages are supported?', a: 'Currently available in English and Turkish. We are working on adding more languages including German, French, and Spanish.' }
                    ]
                },
                {
                    category: 'Technical Questions',
                    faqs: [
                        { q: 'What devices can I play on?', a: 'WordImposter works on any device with a modern web browser - desktops, laptops, tablets, and smartphones. No app download required!' },
                        { q: 'Is there a mobile app?', a: 'Not yet, but the website is fully optimized for mobile devices. It works perfectly in your phone browser. Native iOS and Android apps are planned for the future.' },
                        { q: 'Do I need internet to play?', a: 'Yes, WordImposter is an online multiplayer game. All players need an internet connection to play together in real-time.' },
                        { q: 'The game is laggy or not loading. What should I do?', a: 'Try these steps: 1) Refresh the page, 2) Clear your browser cache, 3) Try a different browser, 4) Check your internet connection. If problems persist, contact us!' }
                    ]
                },
                {
                    category: 'Gameplay Questions',
                    faqs: [
                        { q: 'How do I create a game room?', a: 'Click Create Room on the homepage. You will get a unique 4-digit code. Share this code with your friends so they can join your room.' },
                        { q: 'How do friends join my room?', a: 'Friends click Join Room and enter the 4-digit code you shared. Each player picks a nickname, then everyone is ready to play!' },
                        { q: 'What is the Imposter?', a: 'One player is randomly chosen as the Imposter each game. The Imposter does not see the secret word - only the category. They must blend in by giving clues without knowing the actual word!' },
                        { q: 'How do I give clues?', a: 'Each player takes turns giving a ONE-WORD clue about the secret word. Clues should hint at the word without making it obvious. You cannot say the word itself or any variations of it.' },
                        { q: 'How do I win?', a: 'As a Civilian: Help find and vote out the Imposter. As the Imposter: Survive the vote or correctly guess the secret word for a bonus win!' },
                        { q: 'Can we play multiple rounds?', a: 'Yes! After each game ends, the host can start a new game with the same players. Play as many rounds as you want!' }
                    ]
                },
                {
                    category: 'Word Categories',
                    faqs: [
                        { q: 'What categories are available?', a: 'We have many categories: Animals, Foods, Countries, Movies, TV Shows, Sports, Professions, Music, and more! New categories are added regularly.' },
                        { q: 'How many words are in the game?', a: 'Our database contains hundreds of words across all categories. Each category has 20-30+ unique words, ensuring variety in every game.' },
                        { q: 'Can I suggest new words or categories?', a: 'Absolutely! We love community input. Contact us with your suggestions and we will consider adding them in future updates.' }
                    ]
                },
                {
                    category: 'Privacy and Safety',
                    faqs: [
                        { q: 'What data do you collect?', a: 'We only store minimal data needed for gameplay: your chosen nickname and room code. No personal information, emails, or tracking data is collected.' },
                        { q: 'Is my game data saved?', a: 'No, game data is temporary. Once a game ends, all data is deleted. We do not keep records of your games or statistics.' },
                        { q: 'Is the game safe for kids?', a: 'Yes! WordImposter is family-friendly. All words are appropriate for all ages. However, we recommend parental supervision for younger children playing online.' }
                    ]
                },
                {
                    category: 'Troubleshooting',
                    faqs: [
                        { q: 'Room code is not working. What do I do?', a: 'Make sure you entered the correct 4-digit code. The room might have been closed - ask the host to create a new room. Also try refreshing your page.' },
                        { q: 'Game will not start. Why?', a: 'You need at least 3 players to start. Make sure all players are in the room and the host clicks the Start button.' },
                        { q: 'I only see a category, not a word!', a: 'That means you are the Imposter! As the Imposter, you only see the category and must figure out the word from other players\' clues.' },
                        { q: 'I got disconnected. Can I rejoin?', a: 'Yes! Just enter the room code again with the same nickname. If the game already started, you might need to wait for the next round.' }
                    ]
                }
            ],
            stillHaveQuestions: 'Still have questions?',
            hereToHelp: 'We are here to help! Reach out to us anytime.',
            contactUs: 'Contact Us',
            startPlaying: 'Start Playing Now'
        },

        aboutPage: {
            title: 'About WordImposter',
            subtitle: 'The ultimate social deduction party game',
            whatIs: 'What is WordImposter?',
            whatIsDesc1: 'WordImposter is a free online social deduction game where players try to find the hidden Imposter among them. It combines word guessing mechanics with hidden roles, creating an exciting and strategic party game experience.',
            whatIsDesc2: 'Perfect for game nights, team building events, virtual hangouts, or whenever you want to have fun with friends and family. Play with 3-10 players, no downloads or accounts required!',
            mission: 'Our Mission',
            missionDesc: 'We believe great games should be accessible to everyone. Our mission is to provide a fun, engaging, and completely free gaming experience that brings people together. Whether you are connecting with friends across the world or having a local game night, WordImposter makes it easy to create memorable moments.',
            whyChoose: 'Why Choose WordImposter?',
            features: [
                { icon: '&#127381;', title: '100% Free', desc: 'No hidden fees, no premium features, no pay-to-win. Just pure fun for everyone.' },
                { icon: '&#9889;', title: 'Instant Play', desc: 'No downloads, no accounts. Create a room, share the code, and play immediately.' },
                { icon: '&#128241;', title: 'Play Anywhere', desc: 'Works on any device - phones, tablets, laptops, desktops. Just need a browser!' },
                { icon: '&#128101;', title: '3-10 Players', desc: 'Perfect for small groups or larger parties. More players = more chaos!' },
                { icon: '&#127758;', title: 'Multi-Language', desc: 'Available in English and Turkish. More languages coming soon!' },
                { icon: '&#128218;', title: 'Lots of Categories', desc: 'Animals, movies, countries, foods, and many more categories to choose from!' }
            ],
            techTitle: 'Built with Modern Technology',
            techDesc: 'WordImposter is built using cutting-edge web technologies to ensure a smooth, fast, and reliable gaming experience:',
            privacyTitle: 'Your Privacy Matters',
            privacyDesc: 'We take your privacy seriously. WordImposter only collects the minimal data needed for gameplay (your chosen nickname and room code). We do not track you, sell your data, or require any personal information. Game data is deleted after each session. Read our full privacy policy for more details.',
            developerTitle: 'Meet the Developer',
            developerDesc: 'WordImposter is developed by Enes Oz, an independent developer passionate about creating fun, accessible games. Inspired by classic social deduction games, WordImposter was created to bring friends together through the joy of gaming.',
            futurePlans: 'Future Plans',
            futurePlansDesc: 'We are always working to make WordImposter better. Here is what is coming:',
            futureItems: [
                'More languages (German, French, Spanish, and more)',
                'Custom word lists - create your own categories',
                'Game statistics and leaderboards',
                'Voice chat integration',
                'New game modes and variations',
                'Native mobile apps for iOS and Android'
            ],
            thankYou: 'Thank You!',
            thankYouDesc: 'Thank you for playing WordImposter! Your support and feedback help us make the game better. Have fun and happy gaming!',
            playCta: 'Play WordImposter Now'
        },

        contactPage: {
            title: 'Contact Us',
            subtitle: 'We would love to hear from you!',
            sendMessage: 'Send us a Message',
            yourName: 'Your Name',
            yourEmail: 'Your Email',
            subject: 'Subject',
            message: 'Message',
            namePlaceholder: 'John Doe',
            emailPlaceholder: 'john@example.com',
            subjectPlaceholder: 'Bug report, Feedback, Question...',
            messagePlaceholder: 'Tell us what is on your mind...',
            send: 'Send Message',
            sent: 'Message sent!',
            sentDesc: 'We will get back to you soon.',
            contactInfo: 'Contact Information',
            email: 'Email',
            responseTime: 'Response Time',
            responseTimeValue: 'Usually within 24-48 hours',
            techSupport: 'Technical Support',
            techSupportDesc: 'Having technical issues? Please include:',
            techSupportItems: [
                'Browser and version (e.g., Chrome 120)',
                'Device type (phone, tablet, computer)',
                'What happened and when',
                'Screenshots if possible'
            ],
            suggestions: 'Suggestions Welcome',
            suggestionsDesc: 'Have ideas for new features, categories, or improvements? We love hearing from our players! Your feedback helps make WordImposter better for everyone.',
            quickAnswers: 'Quick Answers',
            quickItems: [
                { title: 'Is WordImposter free?', desc: 'Yes! Completely free, no hidden fees.' },
                { title: 'How many players?', desc: '3-10 players per game.' },
                { title: 'Works on mobile?', desc: 'Yes! Any device with a browser.' },
                { title: 'Need an account?', desc: 'No! Just pick a nickname and play.' }
            ],
            viewAllFaqs: 'View all FAQs \u2192',
            backToGameCta: 'Back to Game'
        },
    }
};
