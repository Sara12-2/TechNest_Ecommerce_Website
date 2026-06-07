
// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Features from './components/Features';
// import ProductList from './components/ProductList';
// import Testimonials from './components/Testimonials';
// import Newsletter from './components/Newsletter';
// import Footer from './components/Footer';
// import CartDrawer from './components/CartDrawer';

// function App() {
//   const [cart, setCart] = useState([]);
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(true);
//   const [wishlist, setWishlist] = useState([]);
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [orderId, setOrderId] = useState('');

//   useEffect(() => {
//     const savedCart = localStorage.getItem('technest-cart');
//     if (savedCart) setCart(JSON.parse(savedCart));
//     const savedWishlist = localStorage.getItem('technest-wishlist');
//     if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
//     const savedTheme = localStorage.getItem('technest-theme');
//     if (savedTheme) setIsDarkMode(savedTheme === 'dark');
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('technest-cart', JSON.stringify(cart));
//   }, [cart]);

//   useEffect(() => {
//     localStorage.setItem('technest-wishlist', JSON.stringify(wishlist));
//   }, [wishlist]);

//   useEffect(() => {
//     localStorage.setItem('technest-theme', isDarkMode ? 'dark' : 'light');
//   }, [isDarkMode]);

//   const addToCart = (product) => {
//     setCart(prevCart => {
//       const existingItem = prevCart.find(item => item.id === product.id);
//       if (existingItem) {
//         return prevCart.map(item =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       }
//       return [...prevCart, { ...product, quantity: 1 }];
//     });
//   };

//   const removeFromCart = (id) => {
//     setCart(cart.filter(item => item.id !== id));
//   };

//   const updateQuantity = (id, newQuantity) => {
//     if (newQuantity < 1) {
//       removeFromCart(id);
//       return;
//     }
//     setCart(cart.map(item =>
//       item.id === id ? { ...item, quantity: newQuantity } : item
//     ));
//   };

//   const toggleWishlist = (id) => {
//     if (wishlist.includes(id)) {
//       setWishlist(wishlist.filter(i => i !== id));
//     } else {
//       setWishlist([...wishlist, id]);
//     }
//   };

//   const getCartCount = () => {
//     return cart.reduce((sum, item) => sum + item.quantity, 0);
//   };

//   const getCartTotal = () => {
//     return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
//   };

//   const cartTotal = getCartTotal();
//   const shipping = cartTotal > 199 ? 0 : 15;
//   const finalTotal = cartTotal + shipping;

//   const handleCheckout = () => {
//     if (cart.length === 0) return;
    
//     // Generate random order ID
//     const newOrderId = 'TN' + Math.floor(Math.random() * 1000000);
//     setOrderId(newOrderId);
//     setShowSuccessModal(true);
    
//     // Clear cart
//     setCart([]);
//     setIsCartOpen(false);
    
//     // Auto hide modal after 4 seconds
//     setTimeout(() => {
//       setShowSuccessModal(false);
//     }, 4000);
//   };

//   return (
//     <div style={{ 
//       background: isDarkMode ? '#0a0a0f' : '#f5f5f7', 
//       minHeight: '100vh',
//       fontFamily: "'Inter', -apple-system, sans-serif"
//     }}>
//       {/* Success Modal */}
//       {showSuccessModal && (
//         <div style={{
//           position: 'fixed',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           background: 'rgba(0,0,0,0.7)',
//           backdropFilter: 'blur(5px)',
//           zIndex: 10000,
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           animation: 'fadeIn 0.3s ease'
//         }}>
//           <div style={{
//             background: isDarkMode ? '#1a1a2e' : '#fff',
//             borderRadius: '24px',
//             padding: '40px',
//             textAlign: 'center',
//             maxWidth: '400px',
//             width: '90%',
//             animation: 'scaleIn 0.3s ease'
//           }}>
//             <div style={{
//               width: '70px',
//               height: '70px',
//               background: 'linear-gradient(135deg, #00ff88, #00D4FF)',
//               borderRadius: '50%',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               margin: '0 auto 20px'
//             }}>
//               <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
//                 <polyline points="20 6 9 17 4 12"></polyline>
//               </svg>
//             </div>
//             <h2 style={{ fontSize: '24px', fontWeight: 700, color: isDarkMode ? '#fff' : '#1a1a2e', marginBottom: '10px' }}>
//               Order Confirmed!
//             </h2>
//             <p style={{ color: isDarkMode ? '#aaa' : '#666', marginBottom: '15px' }}>
//               Thank you for shopping with us
//             </p>
//             <p style={{ 
//               background: isDarkMode ? 'rgba(255,255,255,0.05)' : '#f0f0f0',
//               padding: '10px',
//               borderRadius: '10px',
//               fontSize: '14px',
//               fontWeight: 600,
//               color: '#6366f1'
//             }}>
//               Order ID: {orderId}
//             </p>
//             <p style={{ color: isDarkMode ? '#888' : '#999', fontSize: '13px', marginTop: '15px' }}>
//               Total: <strong>${finalTotal}</strong>
//             </p>
//           </div>
//         </div>
//       )}

//       <Navbar 
//         isDarkMode={isDarkMode} 
//         setIsDarkMode={setIsDarkMode} 
//         cartCount={getCartCount()} 
//         setIsCartOpen={setIsCartOpen} 
//       />
      
//       <Hero isDarkMode={isDarkMode} />
//       <Features isDarkMode={isDarkMode} />
//       4
//       <div id="products">
//         <ProductList 
//           isDarkMode={isDarkMode} 
//           addToCart={addToCart} 
//           wishlist={wishlist} 
//           toggleWishlist={toggleWishlist} 
//         />
//       </div>
      
//       <div id="deals" style={{ marginTop: '60px' }}>
//         <ProductList 
//           isDarkMode={isDarkMode} 
//           addToCart={addToCart} 
//           wishlist={wishlist} 
//           toggleWishlist={toggleWishlist} 
//         />
//       </div>
      
//       <div id="reviews">
//         <Testimonials isDarkMode={isDarkMode} />
//       </div>
      
//       <Newsletter isDarkMode={isDarkMode} />
      
//       <div id="support">
//         <Footer isDarkMode={isDarkMode} />
//       </div>
      
//       <CartDrawer 
//         isOpen={isCartOpen}
//         onClose={() => setIsCartOpen(false)}
//         cart={cart}
//         onUpdateQuantity={updateQuantity}
//         onRemove={removeFromCart}
//         total={cartTotal}
//         shipping={shipping}
//         finalTotal={finalTotal}
//         isDarkMode={isDarkMode}
//         onCheckout={handleCheckout}
//       />

//       <style>{`
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         @keyframes scaleIn {
//           from {
//             opacity: 0;
//             transform: scale(0.9);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }
//       `}</style>
//     </div>
//   );




//         {/* Best Sellers Section */}
//       <div id="products">
//         <ProductList 
//           title="Best Sellers"
//           isDeals={false}
//           isDarkMode={isDarkMode} 
//           addToCart={addToCart} 
//           wishlist={wishlist} 
//           toggleWishlist={toggleWishlist} 
//         />
//       </div>
      
//       {/* Hot Deals Section */}
//       <div id="deals" style={{ marginTop: '60px' }}>
//         <ProductList 
//           title="Hot Deals"
//           isDeals={true}
//           isDarkMode={isDarkMode} 
//           addToCart={addToCart} 
//           wishlist={wishlist} 
//           toggleWishlist={toggleWishlist} 
//         />
//       </div>
// }

// export default App;
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductList from './components/ProductList';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [wishlist, setWishlist] = useState([]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [orderId, setOrderId] = useState('');

  useEffect(() => {
    const savedCart = localStorage.getItem('technest-cart');
    if (savedCart) setCart(JSON.parse(savedCart));
    const savedWishlist = localStorage.getItem('technest-wishlist');
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
    const savedTheme = localStorage.getItem('technest-theme');
    if (savedTheme) setIsDarkMode(savedTheme === 'dark');
  }, []);

  useEffect(() => {
    localStorage.setItem('technest-cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('technest-wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('technest-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(id);
      return;
    }
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter(i => i !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  const getCartCount = () => cart.reduce((sum, item) => sum + item.quantity, 0);
  const getCartTotal = () => cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const cartTotal = getCartTotal();
  const shipping = cartTotal > 199 ? 0 : 15;
  const finalTotal = cartTotal + shipping;

  const handleCheckout = () => {
    if (cart.length === 0) return;
    const newOrderId = 'TN' + Math.floor(Math.random() * 1000000);
    setOrderId(newOrderId);
    setShowSuccessModal(true);
    setCart([]);
    setIsCartOpen(false);
    setTimeout(() => setShowSuccessModal(false), 4000);
  };

  return (
    <div style={{ 
      background: isDarkMode ? '#0a0a0f' : '#f5f5f7', 
      minHeight: '100vh',
      fontFamily: "'Inter', -apple-system, sans-serif"
    }}>

      {/* Success Modal */}
      {showSuccessModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(5px)',
          zIndex: 10000, display: 'flex', alignItems: 'center',
          justifyContent: 'center', animation: 'fadeIn 0.3s ease'
        }}>
          <div style={{
            background: isDarkMode ? '#1a1a2e' : '#fff',
            borderRadius: '24px', padding: '40px', textAlign: 'center',
            maxWidth: '400px', width: '90%', animation: 'scaleIn 0.3s ease'
          }}>
            <div style={{
              width: '70px', height: '70px',
              background: 'linear-gradient(135deg, #00ff88, #00D4FF)',
              borderRadius: '50%', display: 'flex', alignItems: 'center',
              justifyContent: 'center', margin: '0 auto 20px'
            }}>
              <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: isDarkMode ? '#fff' : '#1a1a2e', marginBottom: '10px' }}>
              Order Confirmed!
            </h2>
            <p style={{ color: isDarkMode ? '#aaa' : '#666', marginBottom: '15px' }}>
              Thank you for shopping with us
            </p>
            <p style={{ 
              background: isDarkMode ? 'rgba(255,255,255,0.05)' : '#f0f0f0',
              padding: '10px', borderRadius: '10px', fontSize: '14px',
              fontWeight: 600, color: '#6366f1'
            }}>
              Order ID: {orderId}
            </p>
            <p style={{ color: isDarkMode ? '#888' : '#999', fontSize: '13px', marginTop: '15px' }}>
              Total: <strong>${finalTotal}</strong>
            </p>
          </div>
        </div>
      )}

      <Navbar 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode} 
        cartCount={getCartCount()} 
        setIsCartOpen={setIsCartOpen} 
      />

      <Hero isDarkMode={isDarkMode} />
      <Features isDarkMode={isDarkMode} />

      {/* Best Sellers Section */}
      <div id="products">
        <ProductList
          title="Best Sellers"
          isDeals={false}
          isDarkMode={isDarkMode}
          addToCart={addToCart}
          wishlist={wishlist}
          toggleWishlist={toggleWishlist}
        />
      </div>

      {/* Hot Deals Section */}
      <div id="deals" style={{ marginTop: '60px' }}>
        <ProductList
          title="Hot Deals"
          isDeals={true}
          isDarkMode={isDarkMode}
          addToCart={addToCart}
          wishlist={wishlist}
          toggleWishlist={toggleWishlist}
        />
      </div>

      <div id="reviews">
        <Testimonials isDarkMode={isDarkMode} />
      </div>

      <Newsletter isDarkMode={isDarkMode} />

      <div id="support">
        <Footer isDarkMode={isDarkMode} />
      </div>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        total={cartTotal}
        shipping={shipping}
        finalTotal={finalTotal}
        isDarkMode={isDarkMode}
        onCheckout={handleCheckout}
      />

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}

export default App;