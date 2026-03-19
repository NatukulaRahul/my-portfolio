// import React, { useState, useRef, useEffect } from 'react';
// import { gsap } from 'gsap';

// const API_KEY = 'AIzaSyAdVu446X8cApkDDtjsrvHKfM1KQ0knI5A';

// const SYSTEM_PROMPT = `You are an AI version of Rahul Natukula, a Full Stack Developer from Hyderabad, India. Answer questions AS Rahul, in first person, naturally and confidently.

// About Rahul:
// - Full Stack Developer with 2+ years of experience
// - Skills: React, JavaScript, CSS, Python, Django, AWS Cloud
// - Location: Hyderabad, India
// - Available for work and freelance opportunities

// Projects:
// 1. TrackJS — Universal Website Analytics. Just 2 lines of code tracks any website. Tracks visitors, pages, behaviour, ecommerce, live dashboard, team access. Self-hosted. Works on any website.
// 2. AI Health Symptom Checker — AI asks follow-up questions, identifies conditions, gives precautions, suggests doctor for serious issues.
// 3. Job Portal — In progress. Full job platform with smart matching, application tracking, recruiter dashboards.

// Personality: Confident, passionate, honest, direct. Builds real production products not tutorials.

// Rules:
// - Keep answers SHORT 2 to 3 sentences max
// - Sound like a real person not a resume
// - If asked about salary say lets discuss based on the project
// - If asked for code or links say projects are private but happy to discuss technical details
// - If recruiter asks if available say yes enthusiastically
// - At the END of every response add a new line with exactly this format: SCROLL:section
// - Replace section with one of these: about, skills, projects, contact, none
// - If the question is about who you are or background use SCROLL:about
// - If the question is about skills or technologies use SCROLL:skills
// - If the question is about projects or work use SCROLL:projects
// - If the question is about hiring or contact or email use SCROLL:contact
// - If none apply use SCROLL:none`;

// const offlineAnswers = {
//   trackjs:
//     'TrackJS is my analytics platform — add 2 lines of code to any website and get full analytics. Tracks visitors, pages, behaviour, ecommerce, and live dashboard. Self-hosted so your data stays yours.',
//   projects:
//     'I have built 3 real projects — TrackJS (universal analytics), AI Health Symptom Checker, and a Job Portal currently in progress. These are production-level products, not tutorials.',
//   skills:
//     'I work with React, JavaScript, CSS on the frontend. Python and Django on the backend. AWS Cloud for deployment. Full stack — I own everything end to end.',
//   about:
//     'I am Rahul Natukula, a Full Stack Developer from Hyderabad with 2+ years of experience. I build real production products that solve actual problems. Currently available for work!',
//   contact:
//     'You can reach me directly at natukularahul14@gmail.com — I usually respond within 24 hours!',
//   hire: 'Yes absolutely! I am actively looking for exciting full-time and freelance opportunities. Reach me at natukularahul14@gmail.com!',
// };

// const getOfflineAnswer = (text) => {
//   const t = text.toLowerCase();
//   if (t.includes('trackjs') || t.includes('tracker') || t.includes('analytics'))
//     return offlineAnswers.trackjs;
//   if (
//     t.includes('project') ||
//     t.includes('built') ||
//     t.includes('health') ||
//     t.includes('job portal')
//   )
//     return offlineAnswers.projects;
//   if (
//     t.includes('skill') ||
//     t.includes('tech') ||
//     t.includes('stack') ||
//     t.includes('react') ||
//     t.includes('django') ||
//     t.includes('python') ||
//     t.includes('aws')
//   )
//     return offlineAnswers.skills;
//   if (
//     t.includes('about') ||
//     t.includes('yourself') ||
//     t.includes('who') ||
//     t.includes('introduce') ||
//     t.includes('background')
//   )
//     return offlineAnswers.about;
//   if (
//     t.includes('hire') ||
//     t.includes('available') ||
//     t.includes('opportunity') ||
//     t.includes('recruit')
//   )
//     return offlineAnswers.hire;
//   if (
//     t.includes('contact') ||
//     t.includes('email') ||
//     t.includes('reach') ||
//     t.includes('connect')
//   )
//     return offlineAnswers.contact;
//   return 'I am Rahul Natukula, a Full Stack Developer from Hyderabad. Ask me about my projects, skills, or availability!';
// };

// const getScrollSection = (text) => {
//   const t = text.toLowerCase();
//   if (
//     t.includes('hire') ||
//     t.includes('available') ||
//     t.includes('contact') ||
//     t.includes('email') ||
//     t.includes('opportunity') ||
//     t.includes('recruit')
//   )
//     return 'contact';
//   if (
//     t.includes('project') ||
//     t.includes('trackjs') ||
//     t.includes('health') ||
//     t.includes('job portal') ||
//     t.includes('built')
//   )
//     return 'projects';
//   if (
//     t.includes('skill') ||
//     t.includes('tech') ||
//     t.includes('stack') ||
//     t.includes('react') ||
//     t.includes('django') ||
//     t.includes('python') ||
//     t.includes('aws') ||
//     t.includes('language')
//   )
//     return 'skills';
//   if (
//     t.includes('about') ||
//     t.includes('yourself') ||
//     t.includes('who') ||
//     t.includes('introduce') ||
//     t.includes('background')
//   )
//     return 'about';
//   return 'none';
// };

// export default function ChatBot() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     {
//       role: 'bot',
//       text: 'Hey! I am an AI version of Rahul. Ask me anything about his skills, projects or experience!',
//     },
//   ]);
//   const [input, setInput] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [history, setHistory] = useState([]);
//   const [hasAutoOpened, setHasAutoOpened] = useState(false);
//   const messagesRef = useRef(null);
//   const windowRef = useRef(null);
//   const btnRef = useRef(null);
//   const labelRef = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(
//       btnRef.current,
//       { scale: 0, opacity: 0 },
//       { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.7)', delay: 1.5 }
//     );
//     gsap.fromTo(
//       labelRef.current,
//       { x: 20, opacity: 0 },
//       { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out', delay: 2.2 }
//     );
//     const timer = setTimeout(() => {
//       if (!hasAutoOpened) {
//         setIsOpen(true);
//         setHasAutoOpened(true);
//       }
//     }, 4000);
//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     if (isOpen && windowRef.current) {
//       gsap.fromTo(
//         windowRef.current,
//         { opacity: 0, y: 20, scale: 0.95 },
//         { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: 'power3.out' }
//       );
//     }
//   }, [isOpen]);

//   useEffect(() => {
//     if (messagesRef.current) {
//       messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
//     }
//   }, [messages, loading]);

//   const scrollToSection = (id) => {
//     setTimeout(() => {
//       const el = document.getElementById(id);
//       if (el) {
//         const start = window.scrollY;
//         const top = el.getBoundingClientRect().top + window.scrollY - 60;
//         const distance = top - start;
//         const duration = 1500;
//         let startTime = null;
//         const ease = (t) =>
//           t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
//         const step = (timestamp) => {
//           if (!startTime) startTime = timestamp;
//           const progress = Math.min((timestamp - startTime) / duration, 1);
//           window.scrollTo(0, start + distance * ease(progress));
//           if (progress < 1) requestAnimationFrame(step);
//         };
//         requestAnimationFrame(step);
//       }
//     }, 1200);
//   };

//   const sendMessage = async (text) => {
//     if (!text.trim() || loading) return;
//     setMessages((prev) => [...prev, { role: 'user', text }]);
//     setInput('');
//     setLoading(true);

//     // Always scroll based on user text
//     const section = getScrollSection(text);
//     if (section === 'contact') {
//       scrollToSection('contact');
//       setTimeout(() => {
//         setMessages((prev) => [
//           ...prev,
//           {
//             role: 'bot',
//             text: 'You can reach Rahul directly at natukularahul14@gmail.com — he usually responds within 24 hours!',
//           },
//         ]);
//       }, 2000);
//     } else if (section !== 'none') {
//       scrollToSection(section);
//     }

//     const newHistory = [...history, { role: 'user', parts: [{ text }] }];
//     setHistory(newHistory);

//     try {
//       const response = await fetch(
//         `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${API_KEY}`,
//         {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({
//             system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
//             contents: newHistory,
//           }),
//         }
//       );

//       const data = await response.json();

//       if (data.error) {
//         const offlineReply = getOfflineAnswer(text);
//         setHistory((prev) => [
//           ...prev,
//           { role: 'model', parts: [{ text: offlineReply }] },
//         ]);
//         setMessages((prev) => [...prev, { role: 'bot', text: offlineReply }]);
//         setLoading(false);
//         return;
//       }

//       const reply =
//         data?.candidates?.[0]?.content?.parts?.[0]?.text ||
//         getOfflineAnswer(text);
//       const lines = reply.split('\n');
//       const cleanReply = lines
//         .filter((l) => !l.startsWith('SCROLL:'))
//         .join('\n')
//         .trim();

//       setHistory((prev) => [
//         ...prev,
//         { role: 'model', parts: [{ text: reply }] },
//       ]);
//       setMessages((prev) => [...prev, { role: 'bot', text: cleanReply }]);
//     } catch (err) {
//       const offlineReply = getOfflineAnswer(text);
//       setMessages((prev) => [...prev, { role: 'bot', text: offlineReply }]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const suggestions = [
//     'What is TrackJS?',
//     'What stack do you use?',
//     'Are you available to hire?',
//     'Tell me about yourself',
//   ];

//   return (
//     <div
//       style={{
//         position: 'fixed',
//         bottom: '32px',
//         right: '32px',
//         zIndex: 900,
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'flex-end',
//         gap: '12px',
//       }}
//     >
//       {isOpen && (
//         <div
//           ref={windowRef}
//           style={{
//             width: '380px',
//             background: '#111',
//             border: '1px solid rgba(255,255,255,0.1)',
//             borderRadius: '24px',
//             overflow: 'hidden',
//             display: 'flex',
//             flexDirection: 'column',
//             boxShadow:
//               '0 32px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.05)',
//           }}
//         >
//           {/* Header */}
//           <div
//             style={{
//               padding: '20px 24px',
//               borderBottom: '0.5px solid rgba(255,255,255,0.08)',
//               display: 'flex',
//               alignItems: 'center',
//               gap: '14px',
//               background: '#0a0a0a',
//             }}
//           >
//             <div
//               style={{
//                 width: '42px',
//                 height: '42px',
//                 borderRadius: '50%',
//                 background: 'linear-gradient(135deg, #2997FF, #0071e3)',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 fontFamily: "'DM Serif Display', serif",
//                 fontSize: '16px',
//                 color: 'white',
//                 flexShrink: 0,
//                 boxShadow: '0 4px 16px rgba(41,151,255,0.3)',
//               }}
//             >
//               R
//             </div>
//             <div style={{ flex: 1 }}>
//               <div
//                 style={{
//                   fontSize: '15px',
//                   fontWeight: '500',
//                   color: 'white',
//                   marginBottom: '2px',
//                 }}
//               >
//                 Rahul AI
//               </div>
//               <div
//                 style={{
//                   fontSize: '12px',
//                   color: '#34C759',
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '5px',
//                 }}
//               >
//                 <div
//                   style={{
//                     width: '6px',
//                     height: '6px',
//                     borderRadius: '50%',
//                     background: '#34C759',
//                     animation: 'pulse 2s ease infinite',
//                   }}
//                 />
//                 Online — ask me anything
//               </div>
//             </div>
//             <button
//               onClick={() => setIsOpen(false)}
//               style={{
//                 background: 'rgba(255,255,255,0.06)',
//                 border: 'none',
//                 color: '#86868b',
//                 width: '28px',
//                 height: '28px',
//                 borderRadius: '50%',
//                 fontSize: '16px',
//                 cursor: 'pointer',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//               }}
//             >
//               x
//             </button>
//           </div>

//           {/* Messages */}
//           <div
//             ref={messagesRef}
//             style={{
//               flex: 1,
//               overflowY: 'auto',
//               padding: '20px',
//               display: 'flex',
//               flexDirection: 'column',
//               gap: '12px',
//               maxHeight: '360px',
//               minHeight: '220px',
//             }}
//           >
//             {messages.map((msg, i) => (
//               <div
//                 key={i}
//                 style={{
//                   maxWidth: '88%',
//                   alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
//                   background:
//                     msg.role === 'user'
//                       ? 'linear-gradient(135deg, #2997FF, #0071e3)'
//                       : '#1a1a1a',
//                   color: 'white',
//                   padding: '12px 16px',
//                   borderRadius:
//                     msg.role === 'user'
//                       ? '18px 18px 4px 18px'
//                       : '18px 18px 18px 4px',
//                   fontSize: '14px',
//                   lineHeight: 1.55,
//                   border:
//                     msg.role === 'user'
//                       ? 'none'
//                       : '1px solid rgba(255,255,255,0.06)',
//                 }}
//               >
//                 {msg.text}
//               </div>
//             ))}
//             {loading && (
//               <div
//                 style={{
//                   alignSelf: 'flex-start',
//                   background: '#1a1a1a',
//                   padding: '14px 18px',
//                   borderRadius: '18px 18px 18px 4px',
//                   display: 'flex',
//                   gap: '5px',
//                   alignItems: 'center',
//                   border: '1px solid rgba(255,255,255,0.06)',
//                 }}
//               >
//                 {[0, 1, 2].map((i) => (
//                   <div
//                     key={i}
//                     style={{
//                       width: '6px',
//                       height: '6px',
//                       background: '#86868b',
//                       borderRadius: '50%',
//                       animation: 'typingBounce 1.2s ease infinite',
//                       animationDelay: i * 0.2 + 's',
//                     }}
//                   />
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Suggestions */}
//           {messages.length <= 3 && (
//             <div
//               style={{
//                 padding: '0 20px 12px',
//                 display: 'flex',
//                 gap: '8px',
//                 overflowX: 'auto',
//                 scrollbarWidth: 'none',
//               }}
//             >
//               {suggestions.map((s, i) => (
//                 <button
//                   key={i}
//                   onClick={() => sendMessage(s)}
//                   style={{
//                     whiteSpace: 'nowrap',
//                     fontSize: '12px',
//                     color: '#2997FF',
//                     background: 'rgba(41,151,255,0.08)',
//                     border: '1px solid rgba(41,151,255,0.2)',
//                     padding: '7px 14px',
//                     borderRadius: '20px',
//                     cursor: 'pointer',
//                     flexShrink: 0,
//                     fontFamily: "'DM Sans', sans-serif",
//                   }}
//                 >
//                   {s}
//                 </button>
//               ))}
//             </div>
//           )}

//           {/* Input */}
//           <div
//             style={{
//               padding: '16px 20px',
//               borderTop: '0.5px solid rgba(255,255,255,0.08)',
//               display: 'flex',
//               gap: '10px',
//               alignItems: 'center',
//               background: '#0a0a0a',
//             }}
//           >
//             <input
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
//               placeholder="Ask Rahul anything..."
//               style={{
//                 flex: 1,
//                 background: '#1a1a1a',
//                 border: '1px solid rgba(255,255,255,0.08)',
//                 borderRadius: '30px',
//                 padding: '11px 18px',
//                 fontSize: '13px',
//                 fontFamily: "'DM Sans', sans-serif",
//                 color: 'white',
//                 outline: 'none',
//               }}
//               onFocus={(e) =>
//                 (e.target.style.borderColor = 'rgba(41,151,255,0.5)')
//               }
//               onBlur={(e) =>
//                 (e.target.style.borderColor = 'rgba(255,255,255,0.08)')
//               }
//             />
//             <button
//               onClick={() => sendMessage(input)}
//               style={{
//                 width: '38px',
//                 height: '38px',
//                 background: 'linear-gradient(135deg, #2997FF, #0071e3)',
//                 border: 'none',
//                 borderRadius: '50%',
//                 cursor: 'pointer',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 flexShrink: 0,
//                 boxShadow: '0 4px 12px rgba(41,151,255,0.3)',
//               }}
//             >
//               <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
//                 <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Bottom row */}
//       <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
//         {!isOpen && (
//           <div
//             ref={labelRef}
//             style={{
//               background: '#111',
//               border: '1px solid rgba(255,255,255,0.1)',
//               borderRadius: '20px',
//               padding: '10px 18px',
//               fontSize: '13px',
//               color: 'white',
//               whiteSpace: 'nowrap',
//               boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
//             }}
//           >
//             Chat with Rahul AI 👋
//           </div>
//         )}
//         <div ref={btnRef} style={{ position: 'relative' }}>
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             style={{
//               width: '58px',
//               height: '58px',
//               borderRadius: '50%',
//               background: 'linear-gradient(135deg, #2997FF, #0071e3)',
//               border: 'none',
//               cursor: 'pointer',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               boxShadow: '0 8px 32px rgba(41,151,255,0.45)',
//               transition: 'transform 0.2s, box-shadow 0.2s',
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.transform = 'scale(1.08)';
//               e.currentTarget.style.boxShadow =
//                 '0 12px 40px rgba(41,151,255,0.6)';
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.transform = 'scale(1)';
//               e.currentTarget.style.boxShadow =
//                 '0 8px 32px rgba(41,151,255,0.45)';
//             }}
//           >
//             {isOpen ? (
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
//                 <path d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z" />
//               </svg>
//             ) : (
//               <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
//                 <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.07L2 22l4.93-1.38C8.42 21.5 10.15 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
//               </svg>
//             )}
//           </button>
//           <div
//             style={{
//               position: 'absolute',
//               top: '-2px',
//               right: '-2px',
//               width: '14px',
//               height: '14px',
//               background: '#34C759',
//               borderRadius: '50%',
//               border: '2px solid #000',
//               animation: 'ping 2s ease infinite',
//             }}
//           />
//         </div>
//       </div>

//       <style>{`
//         @keyframes typingBounce {
//           0%, 60%, 100% { transform: translateY(0); }
//           30% { transform: translateY(-6px); }
//         }
//         @keyframes ping {
//           0%, 100% { transform: scale(1); opacity: 1; }
//           50% { transform: scale(1.3); opacity: 0.7; }
//         }
//         @keyframes pulse {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0.4; }
//         }
//       `}</style>
//     </div>
//   );
// }

import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const API_KEY = 'AIzaSyAdVu446X8cApkDDtjsrvHKfM1KQ0knI5A';

const SYSTEM_PROMPT = `You are an AI version of Rahul Natukula, a Full Stack Developer from Hyderabad, India. Answer questions AS Rahul, in first person, naturally and confidently.

About Rahul:
- Full Stack Developer with 2+ years of experience
- Skills: React, JavaScript, CSS, Python, Django, AWS Cloud
- Location: Hyderabad, India
- Available for work and freelance opportunities

Projects:
1. TrackJS — Universal Website Analytics. Just 2 lines of code tracks any website. Tracks visitors, pages, behaviour, ecommerce, live dashboard, team access. Self-hosted. Works on any website.
2. AI Health Symptom Checker — AI asks follow-up questions, identifies conditions, gives precautions, suggests doctor for serious issues.
3. Job Portal — In progress. Full job platform with smart matching, application tracking, recruiter dashboards.

Personality: Confident, passionate, honest, direct. Builds real production products not tutorials.

Rules:
- Keep answers SHORT 2 to 3 sentences max
- Sound like a real person not a resume
- If asked about salary say lets discuss based on the project
- If asked for code or links say projects are private but happy to discuss technical details
- If recruiter asks if available say yes enthusiastically
- At the END of every response add a new line with exactly this format: SCROLL:section
- Replace section with one of these: about, skills, projects, contact, none
- If the question is about who you are or background use SCROLL:about
- If the question is about skills or technologies use SCROLL:skills
- If the question is about projects or work use SCROLL:projects
- If the question is about hiring or contact or email use SCROLL:contact
- If none apply use SCROLL:none`;

const offlineAnswers = {
  trackjs:
    'TrackJS is my analytics platform — add 2 lines of code to any website and get full analytics. Tracks visitors, pages, behaviour, ecommerce, and live dashboard. Self-hosted so your data stays yours.',
  projects:
    'I have built 3 real projects — TrackJS (universal analytics), AI Health Symptom Checker, and a Job Portal currently in progress. These are production-level products, not tutorials.',
  skills:
    'I work with React, JavaScript, CSS on the frontend. Python and Django on the backend. AWS Cloud for deployment. Full stack — I own everything end to end.',
  about:
    'I am Rahul Natukula, a Full Stack Developer from Hyderabad with 2+ years of experience. I build real production products that solve actual problems. Currently available for work!',
  contact:
    'You can reach me directly at natukularahul14@gmail.com — I usually respond within 24 hours!',
  hire: 'Yes absolutely! I am actively looking for exciting full-time and freelance opportunities. Reach me at natukularahul14@gmail.com!',
};

const getOfflineAnswer = (text) => {
  const t = text.toLowerCase();
  if (t.includes('trackjs') || t.includes('tracker') || t.includes('analytics'))
    return offlineAnswers.trackjs;
  if (
    t.includes('project') ||
    t.includes('built') ||
    t.includes('health') ||
    t.includes('job portal')
  )
    return offlineAnswers.projects;
  if (
    t.includes('skill') ||
    t.includes('tech') ||
    t.includes('stack') ||
    t.includes('react') ||
    t.includes('django') ||
    t.includes('python') ||
    t.includes('aws')
  )
    return offlineAnswers.skills;
  if (
    t.includes('about') ||
    t.includes('yourself') ||
    t.includes('who') ||
    t.includes('introduce') ||
    t.includes('background')
  )
    return offlineAnswers.about;
  if (
    t.includes('hire') ||
    t.includes('available') ||
    t.includes('opportunity') ||
    t.includes('recruit')
  )
    return offlineAnswers.hire;
  if (
    t.includes('contact') ||
    t.includes('email') ||
    t.includes('reach') ||
    t.includes('connect')
  )
    return offlineAnswers.contact;
  return 'I am Rahul Natukula, a Full Stack Developer from Hyderabad. Ask me about my projects, skills, or availability!';
};

const getScrollSection = (text) => {
  const t = text.toLowerCase();
  if (
    t.includes('hire') ||
    t.includes('available') ||
    t.includes('contact') ||
    t.includes('email') ||
    t.includes('opportunity') ||
    t.includes('recruit')
  )
    return 'contact';
  if (
    t.includes('project') ||
    t.includes('trackjs') ||
    t.includes('health') ||
    t.includes('job portal') ||
    t.includes('built')
  )
    return 'projects';
  if (
    t.includes('skill') ||
    t.includes('tech') ||
    t.includes('stack') ||
    t.includes('react') ||
    t.includes('django') ||
    t.includes('python') ||
    t.includes('aws') ||
    t.includes('language')
  )
    return 'skills';
  if (
    t.includes('about') ||
    t.includes('yourself') ||
    t.includes('who') ||
    t.includes('introduce') ||
    t.includes('background')
  )
    return 'about';
  return 'none';
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      text: 'Hey! I am an AI version of Rahul. Ask me anything about his skills, projects or experience!',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const messagesRef = useRef(null);
  const windowRef = useRef(null);
  const btnRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      btnRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.7)', delay: 1.5 }
    );
    gsap.fromTo(
      labelRef.current,
      { x: 20, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out', delay: 2.2 }
    );
  }, []);

  useEffect(() => {
    if (isOpen && windowRef.current) {
      gsap.fromTo(
        windowRef.current,
        { opacity: 0, y: 20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: 'power3.out' }
      );
    }
  }, [isOpen]);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const scrollToSection = (id) => {
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const start = window.scrollY;
        const top = el.getBoundingClientRect().top + window.scrollY - 60;
        const distance = top - start;
        const duration = 1500;
        let startTime = null;
        const ease = (t) =>
          t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        const step = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          window.scrollTo(0, start + distance * ease(progress));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, 1200);
  };

  const sendMessage = async (text) => {
    if (!text.trim() || loading) return;
    setMessages((prev) => [...prev, { role: 'user', text }]);
    setInput('');
    setLoading(true);

    const section = getScrollSection(text);
    if (section === 'contact') {
      scrollToSection('contact');
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: 'bot',
            text: 'You can reach Rahul directly at natukularahul14@gmail.com — he usually responds within 24 hours!',
          },
        ]);
      }, 2000);
    } else if (section !== 'none') {
      scrollToSection(section);
    }

    const newHistory = [...history, { role: 'user', parts: [{ text }] }];
    setHistory(newHistory);

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
            contents: newHistory,
          }),
        }
      );

      const data = await response.json();

      if (data.error) {
        const offlineReply = getOfflineAnswer(text);
        setHistory((prev) => [
          ...prev,
          { role: 'model', parts: [{ text: offlineReply }] },
        ]);
        setMessages((prev) => [...prev, { role: 'bot', text: offlineReply }]);
        setLoading(false);
        return;
      }

      const reply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        getOfflineAnswer(text);
      const lines = reply.split('\n');
      const cleanReply = lines
        .filter((l) => !l.startsWith('SCROLL:'))
        .join('\n')
        .trim();

      setHistory((prev) => [
        ...prev,
        { role: 'model', parts: [{ text: reply }] },
      ]);
      setMessages((prev) => [...prev, { role: 'bot', text: cleanReply }]);
    } catch (err) {
      const offlineReply = getOfflineAnswer(text);
      setMessages((prev) => [...prev, { role: 'bot', text: offlineReply }]);
    } finally {
      setLoading(false);
    }
  };

  const suggestions = [
    'What is TrackJS?',
    'What stack do you use?',
    'Are you available to hire?',
    'Tell me about yourself',
  ];

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '32px',
        right: '32px',
        zIndex: 900,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '12px',
      }}
    >
      {isOpen && (
        <div
          ref={windowRef}
          className="chat-window-mobile"
          style={{
            width: '380px',
            background: '#111',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '24px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            boxShadow:
              '0 32px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.05)',
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '20px 24px',
              borderBottom: '0.5px solid rgba(255,255,255,0.08)',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              background: '#0a0a0a',
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #2997FF, #0071e3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'DM Serif Display', serif",
                fontSize: '16px',
                color: 'white',
                flexShrink: 0,
                boxShadow: '0 4px 16px rgba(41,151,255,0.3)',
              }}
            >
              R
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: '15px',
                  fontWeight: '500',
                  color: 'white',
                  marginBottom: '2px',
                }}
              >
                Rahul AI
              </div>
              <div
                style={{
                  fontSize: '12px',
                  color: '#34C759',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                }}
              >
                <div
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#34C759',
                    animation: 'pulse 2s ease infinite',
                  }}
                />
                Online — ask me anything
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: 'none',
                color: '#86868b',
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                fontSize: '16px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              x
            </button>
          </div>

          {/* Messages */}
          <div
            ref={messagesRef}
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              maxHeight: '360px',
              minHeight: '220px',
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  maxWidth: '88%',
                  alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  background:
                    msg.role === 'user'
                      ? 'linear-gradient(135deg, #2997FF, #0071e3)'
                      : '#1a1a1a',
                  color: 'white',
                  padding: '12px 16px',
                  borderRadius:
                    msg.role === 'user'
                      ? '18px 18px 4px 18px'
                      : '18px 18px 18px 4px',
                  fontSize: '14px',
                  lineHeight: 1.55,
                  border:
                    msg.role === 'user'
                      ? 'none'
                      : '1px solid rgba(255,255,255,0.06)',
                }}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div
                style={{
                  alignSelf: 'flex-start',
                  background: '#1a1a1a',
                  padding: '14px 18px',
                  borderRadius: '18px 18px 18px 4px',
                  display: 'flex',
                  gap: '5px',
                  alignItems: 'center',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: '6px',
                      height: '6px',
                      background: '#86868b',
                      borderRadius: '50%',
                      animation: 'typingBounce 1.2s ease infinite',
                      animationDelay: i * 0.2 + 's',
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Suggestions */}
          {messages.length <= 3 && (
            <div
              style={{
                padding: '0 20px 12px',
                display: 'flex',
                gap: '8px',
                overflowX: 'auto',
                scrollbarWidth: 'none',
              }}
            >
              {suggestions.map((s, i) => (
                <button
                  key={i}
                  onClick={() => sendMessage(s)}
                  style={{
                    whiteSpace: 'nowrap',
                    fontSize: '12px',
                    color: '#2997FF',
                    background: 'rgba(41,151,255,0.08)',
                    border: '1px solid rgba(41,151,255,0.2)',
                    padding: '7px 14px',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    flexShrink: 0,
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div
            style={{
              padding: '16px 20px',
              borderTop: '0.5px solid rgba(255,255,255,0.08)',
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
              background: '#0a0a0a',
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
              placeholder="Ask Rahul anything..."
              style={{
                flex: 1,
                background: '#1a1a1a',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '30px',
                padding: '11px 18px',
                fontSize: '13px',
                fontFamily: "'DM Sans', sans-serif",
                color: 'white',
                outline: 'none',
              }}
              onFocus={(e) =>
                (e.target.style.borderColor = 'rgba(41,151,255,0.5)')
              }
              onBlur={(e) =>
                (e.target.style.borderColor = 'rgba(255,255,255,0.08)')
              }
            />
            <button
              onClick={() => sendMessage(input)}
              style={{
                width: '38px',
                height: '38px',
                background: 'linear-gradient(135deg, #2997FF, #0071e3)',
                border: 'none',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: '0 4px 12px rgba(41,151,255,0.3)',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Bottom row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {!isOpen && (
          <div
            ref={labelRef}
            style={{
              background: '#111',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '20px',
              padding: '10px 18px',
              fontSize: '13px',
              color: 'white',
              whiteSpace: 'nowrap',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
            }}
          >
            Chat with Rahul AI 👋
          </div>
        )}
        <div ref={btnRef} style={{ position: 'relative' }}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              width: '58px',
              height: '58px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #2997FF, #0071e3)',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 32px rgba(41,151,255,0.45)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.08)';
              e.currentTarget.style.boxShadow =
                '0 12px 40px rgba(41,151,255,0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow =
                '0 8px 32px rgba(41,151,255,0.45)';
            }}
          >
            {isOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.07L2 22l4.93-1.38C8.42 21.5 10.15 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
              </svg>
            )}
          </button>
          <div
            style={{
              position: 'absolute',
              top: '-2px',
              right: '-2px',
              width: '14px',
              height: '14px',
              background: '#34C759',
              borderRadius: '50%',
              border: '2px solid #000',
              animation: 'ping 2s ease infinite',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes typingBounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-6px); }
        }
        @keyframes ping {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.7; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}
