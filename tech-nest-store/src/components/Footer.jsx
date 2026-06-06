import React from 'react';
import { Icons } from './Icons';

function Footer({ isDarkMode }) {
  const quickLinks = ['About Us', 'Our Products', 'Best Sellers', 'New Arrivals'];
  const supportLinks = ['Help Center', 'Returns Policy', 'Track Order', 'Contact Us'];

  return (
    <footer style={{ 
      borderTop: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`, 
      padding: '70px 5% 40px', 
      background: isDarkMode ? '#0a0a0f' : '#fff',
      marginTop: '40px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Main Footer Grid - 4 columns in one line */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '40px', 
          marginBottom: '50px' 
        }}>
          
          {/* Brand Section - Column 1 */}
          <div>
            <div style={{ fontSize: '28px', fontWeight: 800, marginBottom: '20px' }}>
              <span style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>TECH</span>
              <span style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>NEST</span>
            </div>
            <p style={{ color: isDarkMode ? '#a0a0b0' : '#666', fontSize: '14px', lineHeight: '1.7', marginBottom: '24px' }}>
              Premium electronics for the modern lifestyle.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="#" style={{ 
                width: '36px', 
                height: '36px', 
                borderRadius: '50%', 
                background: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#888', 
                transition: 'all 0.3s ease'
              }} onMouseEnter={e => { e.currentTarget.style.background = '#6366f1'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'translateY(-3px)' }} 
                 onMouseLeave={e => { e.currentTarget.style.background = isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'; e.currentTarget.style.color = '#888'; e.currentTarget.style.transform = 'translateY(0)' }}>
                <Icons.Facebook />
              </a>
              <a href="#" style={{ 
                width: '36px', 
                height: '36px', 
                borderRadius: '50%', 
                background: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#888', 
                transition: 'all 0.3s ease'
              }} onMouseEnter={e => { e.currentTarget.style.background = '#6366f1'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'translateY(-3px)' }} 
                 onMouseLeave={e => { e.currentTarget.style.background = isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'; e.currentTarget.style.color = '#888'; e.currentTarget.style.transform = 'translateY(0)' }}>
                <Icons.Twitter />
              </a>
              <a href="#" style={{ 
                width: '36px', 
                height: '36px', 
                borderRadius: '50%', 
                background: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#888', 
                transition: 'all 0.3s ease'
              }} onMouseEnter={e => { e.currentTarget.style.background = '#6366f1'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'translateY(-3px)' }} 
                 onMouseLeave={e => { e.currentTarget.style.background = isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'; e.currentTarget.style.color = '#888'; e.currentTarget.style.transform = 'translateY(0)' }}>
                <Icons.Instagram />
              </a>
              <a href="#" style={{ 
                width: '36px', 
                height: '36px', 
                borderRadius: '50%', 
                background: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#888', 
                transition: 'all 0.3s ease'
              }} onMouseEnter={e => { e.currentTarget.style.background = '#6366f1'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'translateY(-3px)' }} 
                 onMouseLeave={e => { e.currentTarget.style.background = isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'; e.currentTarget.style.color = '#888'; e.currentTarget.style.transform = 'translateY(0)' }}>
                <Icons.LinkedIn />
              </a>
            </div>
          </div>
          
          {/* Quick Links - Column 2 */}
          <div>
            <h4 style={{ 
              color: isDarkMode ? '#fff' : '#1a1a2e', 
              fontSize: '18px', 
              fontWeight: 700, 
              marginBottom: '24px'
            }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {quickLinks.map(link => (
                <li key={link} style={{ marginBottom: '12px' }}>
                  <a href="#" style={{ 
                    color: isDarkMode ? '#a0a0b0' : '#666', 
                    textDecoration: 'none', 
                    fontSize: '14px', 
                    transition: 'all 0.2s ease',
                    display: 'inline-block'
                  }} onMouseEnter={e => { e.target.style.color = '#6366f1'; e.target.style.transform = 'translateX(5px)' }} 
                     onMouseLeave={e => { e.target.style.color = isDarkMode ? '#a0a0b0' : '#666'; e.target.style.transform = 'translateX(0)' }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support - Column 3 */}
          <div>
            <h4 style={{ 
              color: isDarkMode ? '#fff' : '#1a1a2e', 
              fontSize: '18px', 
              fontWeight: 700, 
              marginBottom: '24px'
            }}>
              Support
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {supportLinks.map(link => (
                <li key={link} style={{ marginBottom: '12px' }}>
                  <a href="#" style={{ 
                    color: isDarkMode ? '#a0a0b0' : '#666', 
                    textDecoration: 'none', 
                    fontSize: '14px', 
                    transition: 'all 0.2s ease',
                    display: 'inline-block'
                  }} onMouseEnter={e => { e.target.style.color = '#6366f1'; e.target.style.transform = 'translateX(5px)' }} 
                     onMouseLeave={e => { e.target.style.color = isDarkMode ? '#a0a0b0' : '#666'; e.target.style.transform = 'translateX(0)' }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info - Column 4 with Icons (No Emojis) */}
          <div>
            <h4 style={{ 
              color: isDarkMode ? '#fff' : '#1a1a2e', 
              fontSize: '18px', 
              fontWeight: 700, 
              marginBottom: '24px'
            }}>
              Contact
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ 
                marginBottom: '16px', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px',
                color: isDarkMode ? '#a0a0b0' : '#666',
                fontSize: '14px'
              }}>
                <span style={{ 
                  width: '32px', 
                  height: '32px', 
                  borderRadius: '50%', 
                  background: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#6366f1'
                }}>
                  <Icons.Email />
                </span>
                hello@technest.com
              </li>
              <li style={{ 
                marginBottom: '16px', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px',
                color: isDarkMode ? '#a0a0b0' : '#666',
                fontSize: '14px'
              }}>
                <span style={{ 
                  width: '32px', 
                  height: '32px', 
                  borderRadius: '50%', 
                  background: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#6366f1'
                }}>
                  <Icons.Phone />
                </span>
                +1 (234) 567-8900
              </li>
              <li style={{ 
                marginBottom: '16px', 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: '12px',
                color: isDarkMode ? '#a0a0b0' : '#666',
                fontSize: '14px'
              }}>
                <span style={{ 
                  width: '32px', 
                  height: '32px', 
                  borderRadius: '50%', 
                  background: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#6366f1',
                  marginTop: '2px'
                }}>
                  <Icons.Location />
                </span>
                123 Tech Street, NY 10001
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div style={{ 
          textAlign: 'center', 
          paddingTop: '30px', 
          borderTop: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '15px'
        }}>
          <p style={{ color: isDarkMode ? '#888' : '#999', fontSize: '13px', margin: 0 }}>
            © 2026 TECHNEST. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#" style={{ color: isDarkMode ? '#888' : '#999', textDecoration: 'none', fontSize: '12px', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#6366f1'} onMouseLeave={e => e.target.style.color = isDarkMode ? '#888' : '#999'}>
              Privacy
            </a>
            <a href="#" style={{ color: isDarkMode ? '#888' : '#999', textDecoration: 'none', fontSize: '12px', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#6366f1'} onMouseLeave={e => e.target.style.color = isDarkMode ? '#888' : '#999'}>
              Terms
            </a>
            <a href="#" style={{ color: isDarkMode ? '#888' : '#999', textDecoration: 'none', fontSize: '12px', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#6366f1'} onMouseLeave={e => e.target.style.color = isDarkMode ? '#888' : '#999'}>
              Cookies
            </a>
          </div>
          <p style={{ color: isDarkMode ? '#888' : '#999', fontSize: '12px', margin: 0 }}>
            Crafted with 💜 by Sara Manzoor
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;