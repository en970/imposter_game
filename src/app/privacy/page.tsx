'use client';

import { useGameStore } from '@/lib/gameStore';
import { translations } from '@/lib/translations';
import Link from 'next/link';

export default function PrivacyPolicy() {
    const { language } = useGameStore();
    const t = translations[language];

    const content = {
        tr: {
            title: 'Gizlilik Politikası',
            lastUpdated: 'Son güncelleme: 26 Ocak 2026',
            sections: [
                {
                    title: '1. Giriş',
                    content: 'KelimeCasusu (wordimposter.fun) olarak, kullanıcılarımızın gizliliğine saygı duyuyoruz. Bu Gizlilik Politikası, sitemizi ziyaret ettiğinizde topladığımız bilgileri ve bu bilgileri nasıl kullandığımızı açıklar.'
                },
                {
                    title: '2. Toplanan Bilgiler',
                    content: 'Sitemiz aşağıdaki bilgileri toplayabilir:\n• Kullanıcı adınız (oyun için girdiğiniz takma ad)\n• Oda kodları ve oyun verileri\n• Tarayıcı türü ve cihaz bilgileri\n• IP adresi\n• Çerezler ve benzeri teknolojiler aracılığıyla toplanan veriler'
                },
                {
                    title: '3. Çerezler ve Reklam',
                    content: 'Sitemiz, Google AdSense aracılığıyla reklam göstermektedir. Google ve üçüncü taraf satıcılar, kullanıcıların sitemize ve diğer web sitelerine yaptığı önceki ziyaretlere dayalı olarak reklam yayınlamak için çerez kullanır. Google\'ın reklam çerezlerini kullanması, Google\'ın ve iş ortaklarının, kullanıcılara sitemize ve/veya İnternet\'teki diğer sitelere yaptıkları ziyaretlere dayalı olarak reklam sunmasına olanak tanır.\n\nKullanıcılar, Google Reklam Ayarları\'nı ziyaret ederek kişiselleştirilmiş reklamcılığı devre dışı bırakabilir.'
                },
                {
                    title: '4. Verilerin Kullanımı',
                    content: 'Topladığımız bilgileri şu amaçlarla kullanırız:\n• Oyun deneyiminizi sağlamak ve iyileştirmek\n• Çok oyunculu oyun oturumlarını yönetmek\n• Reklam göstermek\n• Site performansını analiz etmek'
                },
                {
                    title: '5. Veri Paylaşımı',
                    content: 'Kişisel verilerinizi üçüncü taraflarla paylaşmıyoruz, ancak:\n• Google AdSense ve Analytics gibi hizmetler, kendi gizlilik politikalarına uygun olarak veri toplayabilir.\n• Yasal zorunluluklar durumunda yetkili makamlarla paylaşılabilir.'
                },
                {
                    title: '6. Veri Güvenliği',
                    content: 'Verilerinizin güvenliğini sağlamak için makul teknik ve organizasyonel önlemler alıyoruz. Ancak, internet üzerinden hiçbir veri iletiminin %100 güvenli olduğu garanti edilemez.'
                },
                {
                    title: '7. Çocukların Gizliliği',
                    content: 'Sitemiz 13 yaşından küçük çocuklardan bilerek kişisel bilgi toplamaz. Ebeveynlerin çocuklarının internet kullanımını denetlemeleri önerilir.'
                },
                {
                    title: '8. İletişim',
                    content: 'Bu gizlilik politikası hakkında sorularınız varsa, bizimle iletişime geçebilirsiniz:\nE-posta: oze05607@gmail.com'
                }
            ]
        },
        en: {
            title: 'Privacy Policy',
            lastUpdated: 'Last updated: January 26, 2026',
            sections: [
                {
                    title: '1. Introduction',
                    content: 'At WordImposter (wordimposter.fun), we respect the privacy of our users. This Privacy Policy explains the information we collect when you visit our site and how we use that information.'
                },
                {
                    title: '2. Information Collected',
                    content: 'Our site may collect the following information:\n• Your username (nickname you enter for the game)\n• Room codes and game data\n• Browser type and device information\n• IP address\n• Data collected through cookies and similar technologies'
                },
                {
                    title: '3. Cookies and Advertising',
                    content: 'Our site displays advertisements through Google AdSense. Google and third-party vendors use cookies to serve ads based on users\' previous visits to our site and other websites. Google\'s use of advertising cookies enables Google and its partners to serve ads based on visits to our site and/or other sites on the Internet.\n\nUsers may opt out of personalized advertising by visiting Google Ads Settings.'
                },
                {
                    title: '4. Use of Data',
                    content: 'We use the information we collect for the following purposes:\n• To provide and improve your gaming experience\n• To manage multiplayer game sessions\n• To display advertisements\n• To analyze site performance'
                },
                {
                    title: '5. Data Sharing',
                    content: 'We do not share your personal data with third parties, however:\n• Services like Google AdSense and Analytics may collect data in accordance with their own privacy policies.\n• Data may be shared with authorities in case of legal requirements.'
                },
                {
                    title: '6. Data Security',
                    content: 'We take reasonable technical and organizational measures to ensure the security of your data. However, no data transmission over the internet can be guaranteed to be 100% secure.'
                },
                {
                    title: '7. Children\'s Privacy',
                    content: 'Our site does not knowingly collect personal information from children under 13 years of age. Parents are advised to supervise their children\'s internet usage.'
                },
                {
                    title: '8. Contact',
                    content: 'If you have questions about this privacy policy, you can contact us:\nEmail: oze05607@gmail.com'
                }
            ]
        }
    };

    const c = content[language];

    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white p-4 md:p-8">
            <div className="max-w-3xl mx-auto">
                <Link href="/" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-6">
                    ← {language === 'tr' ? 'Ana Sayfaya Dön' : 'Back to Home'}
                </Link>

                <h1 className="text-3xl font-bold mb-2">{c.title}</h1>
                <p className="text-gray-400 mb-8">{c.lastUpdated}</p>

                <div className="space-y-6">
                    {c.sections.map((section, idx) => (
                        <div key={idx} className="bg-[#12121a] rounded-lg p-6 border border-gray-800">
                            <h2 className="text-xl font-semibold mb-3 text-purple-400">{section.title}</h2>
                            <p className="text-gray-300 whitespace-pre-line leading-relaxed">{section.content}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center text-gray-500 text-sm">
                    © 2026 KelimeCasusu / WordImposter. {language === 'tr' ? 'Tüm hakları saklıdır.' : 'All rights reserved.'}
                </div>
            </div>
        </div>
    );
}
