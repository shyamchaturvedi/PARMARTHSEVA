import React, { useState, useEffect } from 'react';

// --- Icons ---

const TrustLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#FDE68A" stroke="#F97316" strokeWidth="4"/>
    <path d="M50 20 C65 30, 65 50, 50 60 C35 50, 35 30, 50 20 Z" fill="#4ADE80"/>
    <path d="M30 70 Q 50 50, 70 70" stroke="#0EA5E9" strokeWidth="4" fill="none"/>
    <text x="50" y="85" textAnchor="middle" fill="#F97316" fontSize="10" fontWeight="bold">सेवा परमो धर्मः</text>
  </svg>
);

const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
);

const LocationIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
    </svg>
);

const HeartHandIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
        <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.82 2.94 0l.06-.06L12 11l.96-.96.06.06c.8.8 2.12.8 2.94 0v0a2.17 2.17 0 0 0 0-3.08L12 5Z"/>
    </svg>
);

const UsersIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
);

const BookOpenIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
);

const BankIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        <path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2.16 8.23.67" />
    </svg>
);

const ArrowUpIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="12" y1="19" x2="12" y2="5"></line>
        <polyline points="5 12 12 5 19 12"></polyline>
    </svg>
);


// --- Header Component ---

const Header: React.FC<{ activeSection: string }> = ({ activeSection }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: '#home', label: 'होम' },
        { href: '#about', label: 'परिचय' },
        { href: '#work', label: 'कार्य' },
        { href: '#donate', label: 'दान करें' },
        { href: '#contact', label: 'संपर्क' },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.slice(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerOffset = 80; // Corresponds to h-20 (5rem * 16px/rem)
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            if (isOpen) {
                setIsOpen(false);
            }
        }
    };

    return (
        <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center space-x-2 cursor-pointer">
                        <TrustLogo className="h-12 w-12 text-orange-500" />
                        <span className="text-lg md:text-xl font-bold text-orange-600">ओम् शान्ति परमार्थ सेवा ट्रस्ट</span>
                    </a>
                    <nav className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`font-medium transition-colors duration-300 ${activeSection === link.href.slice(1) ? 'text-orange-500 font-bold' : 'text-slate-600 hover:text-orange-500'}`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-orange-500 focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <nav className="flex flex-col items-center space-y-4 py-4">
                         {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`font-medium transition-colors duration-300 ${activeSection === link.href.slice(1) ? 'text-orange-500 font-bold' : 'text-slate-600 hover:text-orange-500'}`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

// --- Hero Component ---

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative bg-amber-50 py-20 md:py-32">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-orange-200 opacity-50"></div>
            <div className="absolute inset-0 pattern-bg opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h1 className="text-4xl md:text-6xl font-extrabold text-orange-600 tracking-tight">
                    ओम् शान्ति परमार्थ सेवा ट्रस्ट
                </h1>
                <p className="mt-6 max-w-3xl mx-auto text-xl md:text-2xl text-slate-700">
                    सर्वे भवन्तु सुखिनः ॥ॐ शान्तिः ।। सर्वे सन्तु निरामया
                </p>
                <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-slate-600 font-semibold">
                    मानव सेवा माधव सेवा
                </p>
                <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                    <a href="#donate" className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300">
                        अभी दान करें
                    </a>
                    <a href="#work" className="w-full sm:w-auto bg-white hover:bg-amber-100 text-orange-500 font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300 border-2 border-orange-500">
                        हमारे कार्य
                    </a>
                </div>
            </div>
        </section>
    );
};

// --- About Component ---

const About: React.FC = () => {
    return (
        <section id="about" className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">हमारे बारे में</h2>
                    <div className="mt-4 w-24 h-1 bg-orange-500 mx-auto rounded"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left fade-in-up" style={{ transitionDelay: '100ms' }}>
                        <p className="text-lg text-slate-600 leading-relaxed mb-4">
                           <strong>ओम् शान्ति परमार्थ सेवा ट्रस्ट</strong> एक गैर-लाभकारी संगठन है जो समाज के निर्धन, निर्बल, और दिव्यांगजनों की सेवा के लिए समर्पित है। हमारा उद्देश्य विभिन्न कौशलों के माध्यम से लोगों को स्वावलंबी एवं आत्मनिर्भर बनाना है।
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            हमारा विश्वास है कि शिक्षा राष्ट्र निर्माण की नींव है। इसी उद्देश्य से, हम शिक्षण संस्थान संचालित करके एक सम्पन्न और शिक्षित राष्ट्र के निर्माण में अपना योगदान प्रदान करते हैं। हमारा कार्यक्षेत्र सम्पूर्ण भारत है।
                        </p>
                    </div>
                    <div className="flex justify-center fade-in-up" style={{ transitionDelay: '200ms' }}>
                        <div className="relative p-8 bg-amber-100 rounded-full">
                           <TrustLogo className="w-48 h-48 md:w-64 md:h-64 text-orange-500" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- OurWork Component ---

const WorkCard: React.FC<{ icon: React.ReactNode; title: string; description: string; delay: number }> = ({ icon, title, description, delay }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out border-t-4 border-orange-400 fade-in-up" style={{ transitionDelay: `${delay}ms` }}>
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-amber-100 text-orange-500 mb-6">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
);

const OurWork: React.FC = () => {
    const works = [
        {
            icon: <HeartHandIcon className="w-8 h-8" />,
            title: 'जन सेवा',
            description: 'निर्धन, निर्बल, और दिव्यांगजनों की सेवा करना और उनकी मूलभूत आवश्यकताओं को पूरा करने में सहायता प्रदान करना।',
        },
        {
            icon: <UsersIcon className="w-8 h-8" />,
            title: 'आत्मनिर्भरता',
            description: 'विभिन्न कौशलों का प्रशिक्षण देकर समाज के वंचित वर्ग को स्वावलंबी और आत्मनिर्भर बनाना ताकि वे सम्मानपूर्वक जीवन जी सकें।',
        },
        {
            icon: <BookOpenIcon className="w-8 h-8" />,
            title: 'शिक्षा का प्रसार',
            description: 'शिक्षण संस्थानों का संचालन करके गुणवत्तापूर्ण शिक्षा प्रदान करना और एक मजबूत तथा शिक्षित राष्ट्र के निर्माण में योगदान देना।',
        },
    ];

    return (
        <section id="work" className="py-16 md:py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">हमारे मुख्य कार्य</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                        हमारा लक्ष्य समाज के हर वर्ग तक पहुँचकर उनकी सहायता करना और उन्हें सशक्त बनाना है।
                    </p>
                    <div className="mt-4 w-24 h-1 bg-orange-500 mx-auto rounded"></div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {works.map((work, index) => (
                        <WorkCard key={index} icon={work.icon} title={work.title} description={work.description} delay={index * 150} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- Donate Component ---

const Donate: React.FC = () => {
    const bankDetails = [
        { label: 'खाता धारक का नाम', value: 'OM SHANTI PARMARTH SEWA TRUST' },
        { label: 'खाता संख्या (A/c No)', value: '21240210002025' },
        { label: 'IFSC कोड', value: 'UCBA0002124' },
        { label: 'बैंक का नाम', value: 'UCO BANK' },
        { label: 'शाखा (Branch)', value: 'SUJANGANJ' },
        { label: 'MICR कोड', value: '222028051' },
    ];
    
    return (
        <section id="donate" className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-orange-600">सहयोग करें</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                        आपका छोटा सा योगदान किसी के जीवन में बड़ा बदलाव ला सकता है। इस नेक कार्य में हमारा साथ दें।
                    </p>
                    <div className="mt-4 w-24 h-1 bg-orange-500 mx-auto rounded"></div>
                </div>

                <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="bg-slate-50 p-8 rounded-xl shadow-lg border border-slate-200 fade-in-up" style={{ transitionDelay: '100ms' }}>
                        <div className="flex items-center mb-6">
                            <BankIcon className="w-8 h-8 text-orange-500 mr-4"/>
                            <h3 className="text-2xl font-bold text-slate-800">बैंक विवरण</h3>
                        </div>
                        <ul className="space-y-4">
                           {bankDetails.map(detail => (
                               <li key={detail.label} className="flex flex-col sm:flex-row justify-between text-base">
                                   <span className="font-semibold text-slate-500">{detail.label}:</span>
                                   <span className="font-mono text-slate-800 text-left sm:text-right">{detail.value}</span>
                               </li>
                           ))}
                        </ul>
                    </div>
                    
                    <div className="text-center p-8 bg-amber-50 rounded-xl shadow-lg border border-amber-200 fade-in-up" style={{ transitionDelay: '200ms' }}>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">UPI के माध्यम से दान करें</h3>
                        <p className="text-slate-600 mb-4">
                            आप नीचे दिए गए QR कोड को स्कैन करके या UPI नंबर पर सीधे भुगतान कर सकते हैं।
                        </p>
                        <div className="flex justify-center my-6">
                           <div className="bg-white p-4 rounded-lg shadow-inner">
                             <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=9839992489@paytm" alt="UPI QR Code" className="w-48 h-48"/>
                           </div>
                        </div>
                        <p className="font-bold text-slate-700">Paytm / PhonePe</p>
                        <p className="font-mono text-2xl text-orange-600 font-bold tracking-wider mt-1">9839992489</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Contact Component ---

const ContactCard: React.FC<{ name: string; title: string; phone: string; phone2?: string; delay: number }> = ({ name, title, phone, phone2, delay }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow duration-300 border-t-4 border-amber-400 fade-in-up" style={{ transitionDelay: `${delay}ms` }}>
        <h3 className="text-2xl font-bold text-slate-800">{name}</h3>
        <p className="text-orange-600 font-semibold mb-4">{title}</p>
        <div className="flex items-center justify-center text-slate-600">
            <PhoneIcon className="w-5 h-5 mr-2"/>
            <a href={`tel:${phone}`} className="hover:text-orange-500">{phone}</a>
        </div>
        {phone2 && (
             <div className="flex items-center justify-center text-slate-600 mt-2">
                <PhoneIcon className="w-5 h-5 mr-2"/>
                <a href={`tel:${phone2}`} className="hover:text-orange-500">{phone2}</a>
            </div>
        )}
    </div>
);

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-16 md:py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">हमसे संपर्क करें</h2>
                    <div className="mt-4 w-24 h-1 bg-orange-500 mx-auto rounded"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
                    <ContactCard name="मातादीन यादव" title="संस्थापक" phone="9984964990" delay={0} />
                    <ContactCard name="प्रशान्त यादव" title="प्रबन्धक" phone="6392680041" phone2="9839992489" delay={150} />
                </div>

                <div className="max-w-4xl mx-auto text-center bg-white p-8 rounded-xl shadow-lg fade-in-up" style={{ transitionDelay: '300ms' }}>
                    <div className="flex justify-center items-center mb-4 text-orange-500">
                        <LocationIcon className="w-8 h-8"/>
                    </div>
                     <h3 className="text-2xl font-bold text-slate-800 mb-2">हमारा कार्यालय</h3>
                     <p className="text-lg text-slate-600">
                        शान्तिनगर, नेवादा, सुजानगंज, जौनपुर - 222201
                     </p>
                </div>
            </div>
        </section>
    );
};

// --- Footer Component ---

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-3 mb-4">
              <TrustLogo className="h-12 w-12" />
              <span className="text-xl font-bold text-white">ओम् शान्ति परमार्थ सेवा ट्रस्ट</span>
            </div>
            <p className="max-w-xs text-slate-400">
              समाज सेवा और शिक्षा के माध्यम से एक बेहतर कल का निर्माण।
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white tracking-wider uppercase mb-4">पंजीकरण विवरण</h4>
            <ul className="space-y-2 text-slate-400">
              <li>रजि० नं०: 08/2022</li>
              <li>PAN: AAATO9728R</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white tracking-wider uppercase mb-4">संपर्क</h4>
             <p className="text-slate-400">
                शान्तिनगर, नेवादा, सुजानगंज, <br/>जौनपुर - 222201
             </p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-700 text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} ओम् शान्ति परमार्थ सेवा ट्रस्ट। सर्वाधिकार सुरक्षित।</p>
        </div>
      </div>
    </footer>
  );
};

// --- Back To Top Button Component ---
const BackToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <button
            type="button"
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}
            aria-label="ऊपर जाएं"
        >
            <ArrowUpIcon className="w-6 h-6" />
        </button>
    );
};

// --- Main App Component ---

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Effect for active section highlighting
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0px -50% 0px', // Offset for sticky header and trigger point
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Effect for scroll animations
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.fade-in-up');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    animatedElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      animatedElements.forEach((el) => {
        if (observer) {
            observer.unobserve(el);
        }
      });
    };
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800">
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <OurWork />
        <Donate />
        <Contact />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default App;
