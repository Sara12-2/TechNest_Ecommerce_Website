import React from 'react';
import { Icons } from './Icons';

function Footer({ isDarkMode }) {
  const quickLinks = ['About Us', 'Our Products', 'Best Sellers', 'New Arrivals'];
  const supportLinks = ['Help Center', 'Returns Policy', 'Track Order', 'Contact Us'];

  return (
    <footer style={{ 
      borderTop: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`, 
      padding: '60px 5% 40px', 
      background: isDarkMode ? '#0a0a0f' : '#fff',
      marginTop: '60px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Main Footer Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '40px', 
          marginBottom: '50px',
          '@media (max-width: 768px)': { gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' },
          '@media (max-width: 480px)': { gridTemplateColumns: '1fr', gap: '35px' }
        }}>
          
          {/* Brand Section */}
          <div>
            <div style={{ fontSize: '26px', fontWeight: 800, marginBottom: '20px' }}>
              <span style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>TECH</span>
              <span style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>NEST</span>
            </div>
            <p style={{ color: isDarkMode ? '#a0a0b0' : '#666', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px', maxWidth: '250px' }}>
              Premium electronics for the modern lifestyle.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { icon: <Icons.Facebook />, color: '#1877f2' },
                { icon: <Icons.Twitter />, color: '#1da1f2' },
                { icon: <Icons.Instagram />, color: '#e4405f' },
                { icon: <Icons.LinkedIn />, color: '#0077b5' }
              ].map((social, i) => (
                <a 
                  key={i}
                  href="#" 
                  style={{ 
                    width: '36px', 
                    height: '36px', 
                    borderRadius: '50%', 
                    background: isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)', 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isDarkMode ? '#a0a0b0' : '#666', 
                    transition: 'all 0.3s ease'
                  }} 
                  onMouseEnter={e => { 
                    e.currentTarget.style.background = social.color; 
                    e.currentTarget.style.color = '#fff'; 
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }} 
                  onMouseLeave={e => { 
                    e.currentTarget.style.background = isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)'; 
                    e.currentTarget.style.color = isDarkMode ? '#a0a0b0' : '#666'; 
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 style={{ 
              color: isDarkMode ? '#fff' : '#1a1a2e', 
              fontSize: '18px', 
              fontWeight: 700, 
              marginBottom: '24px',
              position: 'relative',
              display: 'inline-block'
            }}>
              Quick Links
              <span style={{
                position: 'absolute',
                bottom: '-8px',
                left: 0,
                width: '30px',
                height: '2px',
                background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                borderRadius: '2px'
              }}></span>
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
          
          {/* Support */}
          <div>
            <h4 style={{ 
              color: isDarkMode ? '#fff' : '#1a1a2e', 
              fontSize: '18px', 
              fontWeight: 700, 
              marginBottom: '24px',
              position: 'relative',
              display: 'inline-block'
            }}>
              Support
              <span style={{
                position: 'absolute',
                bottom: '-8px',
                left: 0,
                width: '30px',
                height: '2px',
                background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                borderRadius: '2px'
              }}></span>
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
          
          {/* Contact Info */}
          <div>
            <h4 style={{ 
              color: isDarkMode ? '#fff' : '#1a1a2e', 
              fontSize: '18px', 
              fontWeight: 700, 
              marginBottom: '24px',
              position: 'relative',
              display: 'inline-block'
            }}>
              Contact
              <span style={{
                position: 'absolute',
                bottom: '-8px',
                left: 0,
                width: '30px',
                height: '2px',
                background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                borderRadius: '2px'
              }}></span>
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ 
                marginBottom: '16px', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px',
                color: isDarkMode ? '#a0a0b0' : '#666',
                fontSize: '14px',
                transition: 'transform 0.2s'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateX(3px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateX(0)'}>
                <span style={{ 
                  width: '34px', 
                  height: '34px', 
                  borderRadius: '50%', 
                  background: isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)',
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
                fontSize: '14px',
                transition: 'transform 0.2s'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateX(3px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateX(0)'}>
                <span style={{ 
                  width: '34px', 
                  height: '34px', 
                  borderRadius: '50%', 
                  background: isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)',
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
                fontSize: '14px',
                transition: 'transform 0.2s'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateX(3px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateX(0)'}>
                <span style={{ 
                  width: '34px', 
                  height: '34px', 
                  borderRadius: '50%', 
                  background: isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)',
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
          gap: '15px',
          '@media (max-width: 768px)': { flexDirection: 'column', gap: '12px' }
        }}>
          <p style={{ color: isDarkMode ? '#888' : '#999', fontSize: '12px', margin: 0 }}>
            © 2026 TECHNEST. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#" style={{ color: isDarkMode ? '#888' : '#999', textDecoration: 'none', fontSize: '12px', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#6366f1'} onMouseLeave={e => e.target.style.color = isDarkMode ? '#888' : '#999'}>
              Privacy Policy
            </a>
            <a href="#" style={{ color: isDarkMode ? '#888' : '#999', textDecoration: 'none', fontSize: '12px', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#6366f1'} onMouseLeave={e => e.target.style.color = isDarkMode ? '#888' : '#999'}>
              Terms of Service
            </a>
            <a href="#" style={{ color: isDarkMode ? '#888' : '#999', textDecoration: 'none', fontSize: '12px', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#6366f1'} onMouseLeave={e => e.target.style.color = isDarkMode ? '#888' : '#999'}>
              Cookie Policy
            </a>
          </div>
          <p style={{ color: isDarkMode ? '#888' : '#999', fontSize: '12px', margin: 0, display: 'flex', alignItems: 'center', gap: '4px' }}>
            Crafted with <span style={{ color: '#ff3366', fontSize: '12px' }}>❤️</span> by Sara Manzoor
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;