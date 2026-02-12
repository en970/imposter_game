'use client';

import { useGameStore } from '@/lib/gameStore';
import { translations } from '@/lib/translations';
import Link from 'next/link';

export default function TermsOfService() {
    const { language } = useGameStore();
    const t = translations[language];

    const content = {
        tr: {
            title: 'Kullanım Şartları',
            lastUpdated: 'Son güncelleme: 26 Ocak 2026',
            sections: [
                {
                    title: '1. Şartların Kabulü',
                    content: 'KelimeCasusu (wordimposter.fun) web sitesini kullanarak, bu Kullanım Şartlarını kabul etmiş olursunuz. Bu şartları kabul etmiyorsanız, lütfen sitemizi kullanmayın.'
                },
                {
                    title: '2. Hizmet Açıklaması',
                    content: 'KelimeCasusu, arkadaşlarınızla çevrimiçi oynayabileceğiniz ücretsiz bir kelime tahmin oyunudur. Oyunda, oyuncular arasındaki "casus"u bulmaya çalışırsınız.'
                },
                {
                    title: '3. Kullanıcı Davranışları',
                    content: 'Sitemizi kullanırken aşağıdaki kurallara uymanız gerekmektedir:\n• Başkalarına hakaret etmemek veya taciz etmemek\n• Uygunsuz, müstehcen veya yasadışı içerik paylaşmamak\n• Sistemi kötüye kullanmamak veya manipüle etmemek\n• Diğer kullanıcıların oyun deneyimini bozmamak'
                },
                {
                    title: '4. Fikri Mülkiyet',
                    content: 'Sitedeki tüm içerikler, tasarım, logo ve kodlar telif hakkı ile korunmaktadır. İzinsiz kopyalama, dağıtma veya değiştirme yasaktır.'
                },
                {
                    title: '5. Reklamlar',
                    content: 'Sitemiz Google AdSense üzerinden reklam göstermektedir. Bu reklamlar, sitemizin ücretsiz olarak hizmet vermesini sağlar. Reklam engelleyici kullanımı, hizmet kalitesini etkileyebilir.'
                },
                {
                    title: '6. Sorumluluk Reddi',
                    content: 'Site "olduğu gibi" sunulmaktadır. Kesintisiz veya hatasız hizmet garantisi verilmez. Siteden kaynaklanan herhangi bir zarar için sorumluluk kabul edilmez.'
                },
                {
                    title: '7. Değişiklikler',
                    content: 'Bu şartları önceden haber vermeksizin değiştirme hakkını saklı tutarız. Değişiklikler sitede yayınlandığı anda yürürlüğe girer.'
                },
                {
                    title: '8. İletişim',
                    content: 'Sorularınız için bizimle iletişime geçebilirsiniz:\nE-posta: oze05607@gmail.com'
                }
            ]
        },
        en: {
            title: 'Terms of Service',
            lastUpdated: 'Last updated: January 26, 2026',
            sections: [
                {
                    title: '1. Acceptance of Terms',
                    content: 'By using the WordSpy (wordimposter.fun) website, you agree to these Terms of Service. If you do not accept these terms, please do not use our site.'
                },
                {
                    title: '2. Service Description',
                    content: 'WordSpy is a free word guessing game that you can play online with your friends. In the game, you try to find the "imposter" among the players.'
                },
                {
                    title: '3. User Conduct',
                    content: 'When using our site, you must follow these rules:\n• Do not insult or harass others\n• Do not share inappropriate, obscene, or illegal content\n• Do not abuse or manipulate the system\n• Do not disrupt other users\' gaming experience'
                },
                {
                    title: '4. Intellectual Property',
                    content: 'All content, design, logos, and code on the site are protected by copyright. Unauthorized copying, distribution, or modification is prohibited.'
                },
                {
                    title: '5. Advertisements',
                    content: 'Our site displays advertisements through Google AdSense. These ads allow our site to provide free service. Using ad blockers may affect service quality.'
                },
                {
                    title: '6. Disclaimer',
                    content: 'The site is provided "as is". No guarantee of uninterrupted or error-free service is given. We do not accept responsibility for any damages arising from the site.'
                },
                {
                    title: '7. Changes',
                    content: 'We reserve the right to change these terms without prior notice. Changes take effect as soon as they are published on the site.'
                },
                {
                    title: '8. Contact',
                    content: 'For questions, you can contact us:\nEmail: oze05607@gmail.com'
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
                    © 2026 KelimeCasusu / WordSpy. {language === 'tr' ? 'Tüm hakları saklıdır.' : 'All rights reserved.'}
                </div>
            </div>
        </div>
    );
}
