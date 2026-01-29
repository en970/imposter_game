'use client';

import { useGameStore } from '@/lib/gameStore';
import Link from 'next/link';

export default function FAQPage() {
    const { language } = useGameStore();

    const content = {
        tr: {
            title: 'Sık Sorulan Sorular (SSS)',
            subtitle: 'KelimeCasusu hakkında merak ettikleriniz',
            
            sections: [
                {
                    category: 'Genel Sorular',
                    faqs: [
                        {
                            q: 'KelimeCasusu ücretsiz mi?',
                            a: 'Evet! KelimeCasusu tamamen ücretsizdir. Hiçbir ücret talep etmiyoruz, kayıt veya üyelik de gerekmez. Oyunu doğrudan tarayıcınızdan oynayabilirsiniz.'
                        },
                        {
                            q: 'Kaç kişiyle oynanabilir?',
                            a: 'KelimeCasusu minimum 3, maksimum 10 oyuncu ile oynanabilir. İdeal oyuncu sayısı 5-8 kişidir. Daha az oyuncuyla oyun hızlı olur, daha fazla oyuncuyla daha karmaşık ve heyecanlı olur.'
                        },
                        {
                            q: 'Hesap oluşturmam gerekiyor mu?',
                            a: 'Hayır! Hesap oluşturmanıza veya giriş yapmanıza gerek yoktur. Sadece bir takma ad seçin ve hemen oynamaya başlayın.'
                        },
                        {
                            q: 'Oyun hangi dillerde mevcut?',
                            a: 'Şu anda Türkçe ve İngilizce dillerinde oynanabilir. Daha fazla dil desteği (Almanca, Fransızca, İspanyolca vb.) üzerinde çalışıyoruz.'
                        }
                    ]
                },
                {
                    category: 'Teknik Sorular',
                    faqs: [
                        {
                            q: 'Hangi cihazlarda çalışır?',
                            a: 'KelimeCasusu tüm modern cihazlarda çalışır: masaüstü bilgisayar, laptop, tablet ve akıllı telefonlar. Modern bir web tarayıcısı yeterlidir (Chrome, Firefox, Safari, Edge).'
                        },
                        {
                            q: 'Mobil uygulama var mı?',
                            a: 'Şu anda mobil uygulama yoktur, ancak web sitesi mobil cihazlarda mükemmel çalışır. Mobil uygulama indirmenize gerek yoktur - tarayıcıdan oynayabilirsiniz. iOS ve Android uygulamaları gelecek güncellemelerde gelecek.'
                        },
                        {
                            q: 'İnternet bağlantısı gerekli mi?',
                            a: 'Evet, KelimeCasusu online bir oyundur ve internet bağlantısı gerektirir. Tüm oyuncuların Firebase Realtime Database üzerinden gerçek zamanlı olarak senkronize olması gerekir.'
                        },
                        {
                            q: 'Oyun donuyor veya hata veriyor, ne yapmalıyım?',
                            a: 'Sayfayı yenileyin ve tekrar deneyin. Sorun devam ederse: 1) Tarayıcı önbelleğinizi temizleyin, 2) Farklı bir tarayıcı deneyin, 3) İnternet bağlantınızı kontrol edin. Sorun sürerse bizimle iletişime geçin.'
                        }
                    ]
                },
                {
                    category: 'Oynanış Soruları',
                    faqs: [
                        {
                            q: 'Nasıl oda oluşturabilirim?',
                            a: 'Ana sayfada "Oda Oluştur" butonuna tıklayın. Sistem otomatik olarak 4 haneli benzersiz bir oda kodu oluşturacaktır. Bu kodu arkadaşlarınızla paylaşın.'
                        },
                        {
                            q: 'Arkadaşlarım odaya nasıl katılır?',
                            a: 'Arkadaşlarınız ana sayfada "Odaya Katıl" butonuna tıklayıp sizin paylaştığınız 4 haneli oda kodunu girebilir. Herkes bir takma ad seçer ve odaya katılır.'
                        },
                        {
                            q: 'Casus kimdir ve ne yapar?',
                            a: 'Her oyunda rastgele seçilen BİR oyuncu Casus\'tur. Casus, diğer oyuncuların bildiği gizli kelimeyi bilmez - sadece kategoriyi görür. Casus\'un amacı kelimeyi tahmin etmek ve Sivil gibi görünmektir.'
                        },
                        {
                            q: 'İpucu nasıl verilir?',
                            a: 'Her oyuncu sırayla, kelime hakkında TEK KELİMELİK bir ipucu verir. İpuçlar kelimeyi açıkça belli etmemeli ama Sivil olduğunuzu kanıtlamalıdır. Kelimeyi veya türevlerini söylemek yasaktır!'
                        },
                        {
                            q: 'Oyun nasıl kazanılır?',
                            a: 'Siviller: Casus\'u doğru tespit ederek kazanır. Casus: Yanlış bir oyuncu oylanırsa veya kelimeyi doğru tahmin ederse kazanır.'
                        },
                        {
                            q: 'Kaç tur oynanır?',
                            a: 'Her oyun 1 tur sürer. Ancak istediğiniz kadar yeni oyun başlatabilirsiniz. Genellikle gruplar birkaç tur üst üste oynar ve kim daha çok kazandı sağlar.'
                        }
                    ]
                },
                {
                    category: 'Kategoriler ve Kelimeler',
                    faqs: [
                        {
                            q: 'Hangi kategoriler var?',
                            a: 'Onlarca kategori mevcut: Mekanlar, Yiyecekler, Meslekler, Sporlar, Hayvanlar, Ülkeler, Yerli/Yabancı Diziler, Yerli/Yabancı Filmler, Anime & Çizgi Diziler, Şarkılar ve daha fazlası!'
                        },
                        {
                            q: 'Kaç kelime var?',
                            a: 'Veritabanımızda binlerce kelime bulunur ve sürekli yeni kelimeler eklenmektedir. Her kategoride 20-30 farklı kelime vardır.'
                        },
                        {
                            q: 'Özel kelime ekleyebilir miyim?',
                            a: 'Şu anda kullanıcıların özel kelime eklemesi mümkün değildir, ancak bu özellik gelecek güncellemelerde eklenecektir. Kelime önerileri için bizimle iletişime geçebilirsiniz.'
                        },
                        {
                            q: 'Kategorilerin listesini görebilir miyim?',
                            a: 'Evet! "Kategoriler" sayfamızda tüm kategorileri ve örnek kelimeleri görebilirsiniz.'
                        }
                    ]
                },
                {
                    category: 'Güvenlik ve Gizlilik',
                    faqs: [
                        {
                            q: 'Kişisel bilgilerim güvende mi?',
                            a: 'Evet! Sadece takma adınızı ve oda kodunu kaydediyoruz. E-posta, telefon veya başka kişisel bilgi talep etmiyoruz. Verileriniz Firebase güvenli veritabanında saklanır.'
                        },
                        {
                            q: 'Oyun geçmişim kaydediliyor mu?',
                            a: 'Hayır, oyun geçmişi saklanmaz. Her oyun bittiğinde tüm veriler silinir. Gelecekte isteğe bağlı istatistik özelliği eklenebilir.'
                        },
                        {
                            q: 'Çocuklar için güvenli mi?',
                            a: 'Evet! KelimeCasusu aile dostu bir oyundur. Tüm kelimeler uygun içeriklidir. Ancak çocukların ebeveyn gözetiminde internet kullanması önerilir.'
                        }
                    ]
                },
                {
                    category: 'Sorun Giderme',
                    faqs: [
                        {
                            q: 'Oda kodu çalışmıyor, ne yapmalıyım?',
                            a: 'Oda kodunun doğru girildiğinden emin olun (4 hane). Oda kapanmış olabilir - oda sahibi yeni oda oluşturmalı. Sayfa yenileyip tekrar deneyin.'
                        },
                        {
                            q: 'Oyun başlamıyor, ne yapmalıyım?',
                            a: 'Minimum 3 oyuncu olmalıdır. Tüm oyuncuların "Hazır" olduğundan emin olun. Oda sahibi oyunu başlatmalıdır.'
                        },
                        {
                            q: 'Ekranımda sadece kategori görünüyor, kelime yok!',
                            a: 'Bu normaldir - Siz Casus\'sunuz! Casus olarak kelimeyi bilmiyorsunuz, sadece kategoriyi görüyorsunuz.'
                        },
                        {
                            q: 'Oyundan atıldım, neden?',
                            a: 'İnternet bağlantınız kesilmiş olabilir. Sayfayı yenileyin ve oda kodunu tekrar girin. Oda kapanmışsa yeni oda oluşturulmalı.'
                        }
                    ]
                }
            ]
        },
        
        en: {
            title: 'Frequently Asked Questions (FAQ)',
            subtitle: 'Everything you want to know about WordImposter',
            
            sections: [
                {
                    category: 'General Questions',
                    faqs: [
                        {
                            q: 'Is WordImposter free?',
                            a: 'Yes! WordImposter is completely free. We don\'t charge any fees, and no registration or membership is required. You can play directly from your browser.'
                        },
                        {
                            q: 'How many players can play?',
                            a: 'WordImposter can be played with minimum 3, maximum 10 players. The ideal number is 5-8 players. With fewer players, the game is faster; with more players, it\'s more complex and exciting.'
                        },
                        {
                            q: 'Do I need to create an account?',
                            a: 'No! You don\'t need to create an account or log in. Just choose a nickname and start playing immediately.'
                        },
                        {
                            q: 'What languages is the game available in?',
                            a: 'Currently available in Turkish and English. We\'re working on more language support (German, French, Spanish, etc.).'
                        }
                    ]
                },
                {
                    category: 'Technical Questions',
                    faqs: [
                        {
                            q: 'What devices does it work on?',
                            a: 'WordImposter works on all modern devices: desktop computers, laptops, tablets, and smartphones. All you need is a modern web browser (Chrome, Firefox, Safari, Edge).'
                        },
                        {
                            q: 'Is there a mobile app?',
                            a: 'Currently there\'s no mobile app, but the website works perfectly on mobile devices. You don\'t need to download a mobile app - play from your browser. iOS and Android apps coming in future updates.'
                        },
                        {
                            q: 'Is an internet connection required?',
                            a: 'Yes, WordImposter is an online game and requires an internet connection. All players need to synchronize in real-time through Firebase Realtime Database.'
                        },
                        {
                            q: 'Game is freezing or giving errors, what should I do?',
                            a: 'Refresh the page and try again. If the problem persists: 1) Clear your browser cache, 2) Try a different browser, 3) Check your internet connection. If issue continues, contact us.'
                        }
                    ]
                },
                {
                    category: 'Gameplay Questions',
                    faqs: [
                        {
                            q: 'How do I create a room?',
                            a: 'Click the "Create Room" button on the homepage. The system will automatically generate a unique 4-digit room code. Share this code with your friends.'
                        },
                        {
                            q: 'How do friends join the room?',
                            a: 'Your friends click "Join Room" on the homepage and enter the 4-digit room code you shared. Everyone chooses a nickname and joins the room.'
                        },
                        {
                            q: 'Who is the Imposter and what do they do?',
                            a: 'ONE player randomly selected each game is the Imposter. The Imposter doesn\'t know the secret word that other players know - they only see the category. The Imposter\'s goal is to guess the word and appear like a Civilian.'
                        },
                        {
                            q: 'How do I give clues?',
                            a: 'Each player takes turns giving a ONE-WORD clue about the word. Clues shouldn\'t obviously reveal the word but should prove you\'re a Civilian. Saying the word or its derivatives is forbidden!'
                        },
                        {
                            q: 'How do you win the game?',
                            a: 'Civilians: Win by correctly identifying the Imposter. Imposter: Wins if the wrong player is voted out or if they correctly guess the word.'
                        },
                        {
                            q: 'How many rounds are played?',
                            a: 'Each game lasts 1 round. However, you can start as many new games as you want. Usually groups play several rounds in a row and keep score of who wins most.'
                        }
                    ]
                },
                {
                    category: 'Categories and Words',
                    faqs: [
                        {
                            q: 'What categories are available?',
                            a: 'Dozens of categories available: Places, Foods, Professions, Sports, Animals, Countries, Local/Foreign TV Series, Local/Foreign Movies, Anime & Cartoons, Songs, and more!'
                        },
                        {
                            q: 'How many words are there?',
                            a: 'Our database contains thousands of words and new words are constantly being added. Each category has 20-30 different words.'
                        },
                        {
                            q: 'Can I add custom words?',
                            a: 'Currently users cannot add custom words, but this feature will be added in future updates. You can contact us with word suggestions.'
                        },
                        {
                            q: 'Can I see a list of categories?',
                            a: 'Yes! On our "Categories" page you can see all categories and sample words.'
                        }
                    ]
                },
                {
                    category: 'Security and Privacy',
                    faqs: [
                        {
                            q: 'Is my personal information safe?',
                            a: 'Yes! We only record your nickname and room code. We don\'t request email, phone, or other personal information. Your data is stored in Firebase secure database.'
                        },
                        {
                            q: 'Is my game history recorded?',
                            a: 'No, game history is not saved. All data is deleted when each game ends. Optional statistics feature may be added in the future.'
                        },
                        {
                            q: 'Is it safe for children?',
                            a: 'Yes! WordImposter is a family-friendly game. All words are appropriate content. However, parental supervision of children\'s internet use is recommended.'
                        }
                    ]
                },
                {
                    category: 'Troubleshooting',
                    faqs: [
                        {
                            q: 'Room code isn\'t working, what should I do?',
                            a: 'Make sure the room code is entered correctly (4 digits). The room may have closed - room owner should create a new room. Refresh the page and try again.'
                        },
                        {
                            q: 'Game won\'t start, what should I do?',
                            a: 'There must be minimum 3 players. Make sure all players are "Ready". The room owner must start the game.'
                        },
                        {
                            q: 'I only see the category on my screen, no word!',
                            a: 'This is normal - You\'re the Imposter! As Imposter, you don\'t know the word, you only see the category.'
                        },
                        {
                            q: 'I got disconnected from the game, why?',
                            a: 'Your internet connection may have dropped. Refresh the page and re-enter the room code. If the room closed, a new room must be created.'
                        }
                    ]
                }
            ]
        }
    };

    const c = content[language];

    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white">
            <div className="max-w-4xl mx-auto p-4 md:p-8">
                <Link href="/" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8">
                    ← {language === 'tr' ? 'Ana Sayfaya Dön' : 'Back to Home'}
                </Link>

                <div className="space-y-12">
                    <header className="text-center space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                            {c.title}
                        </h1>
                        <p className="text-xl text-gray-300">{c.subtitle}</p>
                    </header>

                    {c.sections.map((section, secIdx) => (
                        <section key={secIdx}>
                            <h2 className="text-2xl font-bold mb-6 text-purple-400">{section.category}</h2>
                            <div className="space-y-4">
                                {section.faqs.map((faq, faqIdx) => (
                                    <details key={faqIdx} className="bg-[#12121a] rounded-xl border border-gray-800 overflow-hidden group">
                                        <summary className="cursor-pointer p-6 hover:bg-[#1a1a24] transition-colors">
                                            <div className="flex items-start gap-4">
                                                <span className="text-purple-400 mt-1 text-xl group-open:rotate-90 transition-transform">▸</span>
                                                <h3 className="flex-1 text-lg font-semibold text-white">{faq.q}</h3>
                                            </div>
                                        </summary>
                                        <div className="px-6 pb-6 pt-2 pl-14">
                                            <p className="text-gray-300 leading-relaxed">{faq.a}</p>
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </section>
                    ))}

                    <section className="text-center bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-12 border border-purple-500/30">
                        <h2 className="text-2xl font-bold mb-4 text-white">
                            {language === 'tr' ? 'Sorunuz Cevapsız mı Kaldı?' : 'Still Have Questions?'}
                        </h2>
                        <p className="text-gray-300 mb-6">
                            {language === 'tr' 
                                ? 'Bizimle iletişime geçmekten çekinmeyin!'
                                : 'Feel free to contact us!'}
                        </p>
                        <Link href="/contact" className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-3 px-8 rounded-lg transition-all">
                            {language === 'tr' ? 'İletişime Geç' : 'Contact Us'}
                        </Link>
                    </section>
                </div>
            </div>
        </div>
    );
}
