// import React, { useState } from 'react';
// import ProductCard from './ProductCard';
// import { products, categories } from '../data/products';
// import { Icons } from './Icons';

// function ProductList({ isDarkMode, addToCart, wishlist, toggleWishlist, title = "Best Sellers", isDeals = false }) {
//   const [activeCategory, setActiveCategory] = useState('All');
//   const [searchTerm, setSearchTerm] = useState('');

//   // Filter products based on category and search
//   const filteredProducts = products.filter(product => {
//     const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
//     const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                           product.category.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   // For Hot Deals section, show only products with discount >= 30%
//   const displayProducts = isDeals 
//     ? filteredProducts.filter(p => p.discount >= 30)
//     : filteredProducts;

//   return (
//     <div id="products" style={{ padding: '60px 5% 80px' }}>
//       {/* Header */}
//       <div style={{ textAlign: 'center', marginBottom: '40px' }}>
//         <span style={{ 
//           background: 'linear-gradient(135deg, #6366f1, #a855f7)', 
//           padding: '4px 16px', 
//           borderRadius: '50px', 
//           fontSize: '11px', 
//           fontWeight: 600, 
//           color: 'white', 
//           display: 'inline-block',
//           marginBottom: '12px'
//         }}>
//           {isDeals ? <Icons.Fire /> : <Icons.Star />} 
//           {isDeals ? "FLASH SALE" : "BEST SELLERS"}
//         </span>
//         <h2 style={{ 
//           fontSize: '32px', 
//           fontWeight: 700, 
//           marginTop: '12px', 
//           marginBottom: '0',
//           color: isDarkMode ? '#fff' : '#1a1a2e'
//         }}>
//           {title}
//         </h2>
//         <p style={{ 
//           color: isDarkMode ? '#888' : '#999', 
//           fontSize: '14px', 
//           marginTop: '8px' 
//         }}>
//           {isDeals 
//             ? "Limited time offers - Grab before they're gone!" 
//             : "Handpicked premium gadgets for tech enthusiasts"}
//         </p>
//       </div>
      
//       {/* Search Bar */}
//       <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
//         <div style={{ position: 'relative', width: '300px' }}>
//           <span style={{ 
//             position: 'absolute', 
//             left: '15px', 
//             top: '50%', 
//             transform: 'translateY(-50%)',
//             color: isDarkMode ? '#888' : '#999'
//           }}>
//             <Icons.Search />
//           </span>
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             style={{
//               padding: '12px 20px 12px 45px',
//               borderRadius: '50px',
//               border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'}`,
//               background: isDarkMode ? 'rgba(255,255,255,0.05)' : '#f8f9fc',
//               color: isDarkMode ? '#fff' : '#333',
//               width: '100%',
//               outline: 'none',
//               fontSize: '14px',
//               transition: 'all 0.3s ease'
//             }}
//             onFocus={e => e.target.style.borderColor = '#6366f1'}
//             onBlur={e => e.target.style.borderColor = isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'}
//           />
//         </div>
//       </div>
      
//       {/* Category Filters */}
//       <div style={{ 
//         display: 'flex', 
//         flexWrap: 'wrap', 
//         justifyContent: 'center', 
//         gap: '10px', 
//         marginBottom: '40px' 
//       }}>
//         {categories.map(cat => (
//           <button 
//             key={cat} 
//             onClick={() => setActiveCategory(cat)} 
//             style={{ 
//               background: activeCategory === cat 
//                 ? 'linear-gradient(135deg, #6366f1, #a855f7)' 
//                 : 'transparent', 
//               border: activeCategory === cat 
//                 ? 'none' 
//                 : `1px solid ${isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'}`, 
//               borderRadius: '50px', 
//               padding: '8px 24px', 
//               fontSize: '14px', 
//               fontWeight: activeCategory === cat ? 600 : 500, 
//               color: activeCategory === cat ? 'white' : (isDarkMode ? '#c0c0d0' : '#555'), 
//               cursor: 'pointer', 
//               transition: 'all 0.2s ease',
//               boxShadow: activeCategory === cat ? '0 4px 12px rgba(99,102,241,0.3)' : 'none'
//             }}
//             onMouseEnter={e => {
//               if (activeCategory !== cat) {
//                 e.currentTarget.style.borderColor = '#6366f1';
//                 e.currentTarget.style.color = '#6366f1';
//               }
//             }}
//             onMouseLeave={e => {
//               if (activeCategory !== cat) {
//                 e.currentTarget.style.borderColor = isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)';
//                 e.currentTarget.style.color = isDarkMode ? '#c0c0d0' : '#555';
//               }
//             }}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>
      
//       {/* No Results Message */}
//       {displayProducts.length === 0 ? (
//         <div style={{ textAlign: 'center', padding: '60px 0' }}>
//           <p style={{ color: isDarkMode ? '#888' : '#999', fontSize: '18px' }}>
//             <Icons.Search /> No products found matching "{searchTerm}"
//           </p>
//         </div>
//       ) : (
//         <div style={{ 
//           display: 'grid', 
//           gridTemplateColumns: 'repeat(3, 1fr)', 
//           gap: '25px',
//           maxWidth: '1100px',
//           margin: '0 auto'
//         }}>
//           {displayProducts.map((product, index) => (
//             <div
//               key={product.id}
//               style={{
//                 animation: `fadeInUp 0.5s ease ${index * 0.05}s forwards`,
//                 opacity: 0,
//                 transform: 'translateY(30px)'
//               }}
//             >
//               <ProductCard 
//                 product={product} 
//                 isDarkMode={isDarkMode} 
//                 addToCart={addToCart} 
//                 toggleWishlist={toggleWishlist} 
//                 isWishlisted={wishlist.includes(product.id)} 
//               />
//             </div>
//           ))}
//         </div>
//       )}

//       <style>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// export default ProductList;
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { products, categories } from '../data/products';
import { Icons } from './Icons';

function ProductList({ isDarkMode, addToCart, wishlist, toggleWishlist, title = "Best Sellers", isDeals = false }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayProducts = isDeals
    ? filteredProducts.filter(p => p.discount >= 30)
    : filteredProducts;

  return (
    <div id={isDeals ? "deals" : "products"} style={{ padding: '60px 5% 80px' }}>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <span style={{ 
          background: 'linear-gradient(135deg, #6366f1, #a855f7)', 
          padding: '4px 16px', 
          borderRadius: '50px', 
          fontSize: '11px', 
          fontWeight: 600, 
          color: 'white', 
          display: 'inline-block',
          marginBottom: '12px'
        }}>
          {isDeals ? <Icons.Fire /> : <Icons.Star />} 
          {isDeals ? "FLASH SALE" : "BEST SELLERS"}
        </span>
        <h2 style={{ 
          fontSize: '32px', 
          fontWeight: 700, 
          marginTop: '12px', 
          marginBottom: '0',
          color: isDarkMode ? '#fff' : '#1a1a2e'
        }}>
          {title}
        </h2>
        <p style={{ 
          color: isDarkMode ? '#888' : '#999', 
          fontSize: '14px', 
          marginTop: '8px' 
        }}>
          {isDeals 
            ? "Limited time offers - Grab before they're gone!" 
            : "Handpicked premium gadgets for tech enthusiasts"}
        </p>
      </div>

      {/* Search Bar */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
        <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
          <span style={{ 
            position: 'absolute', 
            left: '15px', 
            top: '50%', 
            transform: 'translateY(-50%)',
            color: isDarkMode ? '#888' : '#999'
          }}>
            <Icons.Search />
          </span>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: '12px 20px 12px 45px',
              borderRadius: '50px',
              border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'}`,
              background: isDarkMode ? 'rgba(255,255,255,0.05)' : '#f8f9fc',
              color: isDarkMode ? '#fff' : '#333',
              width: '100%',
              outline: 'none',
              fontSize: '14px',
              transition: 'all 0.3s ease'
            }}
            onFocus={e => e.target.style.borderColor = '#6366f1'}
            onBlur={e => e.target.style.borderColor = isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'}
          />
        </div>
      </div>

      {/* Category Filters */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        gap: '10px', 
        marginBottom: '40px' 
      }}>
        {categories.map(cat => (
          <button 
            key={cat} 
            onClick={() => setActiveCategory(cat)} 
            style={{ 
              background: activeCategory === cat 
                ? 'linear-gradient(135deg, #6366f1, #a855f7)' 
                : 'transparent', 
              border: activeCategory === cat 
                ? 'none' 
                : `1px solid ${isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'}`, 
              borderRadius: '50px', 
              padding: '8px 24px', 
              fontSize: '14px', 
              fontWeight: activeCategory === cat ? 600 : 500, 
              color: activeCategory === cat ? 'white' : (isDarkMode ? '#c0c0d0' : '#555'), 
              cursor: 'pointer', 
              transition: 'all 0.2s ease',
              boxShadow: activeCategory === cat ? '0 4px 12px rgba(99,102,241,0.3)' : 'none'
            }}
            onMouseEnter={e => {
              if (activeCategory !== cat) {
                e.currentTarget.style.borderColor = '#6366f1';
                e.currentTarget.style.color = '#6366f1';
              }
            }}
            onMouseLeave={e => {
              if (activeCategory !== cat) {
                e.currentTarget.style.borderColor = isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)';
                e.currentTarget.style.color = isDarkMode ? '#c0c0d0' : '#555';
              }
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      {displayProducts.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px 0' }}>
          <p style={{ color: isDarkMode ? '#888' : '#999', fontSize: '18px' }}>
            <Icons.Search /> No products found matching "{searchTerm}"
          </p>
        </div>
      ) : (
        <div className="products-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '25px',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {displayProducts.map((product, index) => (
            <div
              key={product.id}
              style={{
                animation: `fadeInUp 0.5s ease ${index * 0.05}s forwards`,
                opacity: 0,
                transform: 'translateY(30px)'
              }}
            >
              <ProductCard 
                product={product} 
                isDarkMode={isDarkMode} 
                addToCart={addToCart} 
                toggleWishlist={toggleWishlist} 
                isWishlisted={wishlist.includes(product.id)} 
              />
            </div>
          ))}
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Responsive */
        @media (max-width: 900px) {
          .products-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .products-grid { grid-template-columns: 1fr !important; gap: 18px !important; }
        }
      `}</style>
    </div>
  );
}

export default ProductList;