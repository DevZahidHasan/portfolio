import React from 'react';
import IconButton from '../ui/IconButton';

function BlogCard() {
  return (
    <div className="card flex-between" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
      <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', marginBottom: '1rem' }}>
        {/* Placeholder for Z/B Logo */}
        <div style={{ position: 'relative', width: '80px', height: '80px' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '50px', height: '80px', backgroundColor: '#FF8A00', borderTopLeftRadius: '40px', borderBottomLeftRadius: '40px' }}></div>
          <div style={{ position: 'absolute', top: 0, right: 0, width: '40px', height: '40px', backgroundColor: '#00D1FF', borderTopRightRadius: '40px', borderBottomRightRadius: '40px' }}></div>
          <div style={{ position: 'absolute', bottom: 0, right: 0, width: '40px', height: '40px', backgroundColor: '#FF005C', borderBottomRightRadius: '40px' }}></div>
        </div>
      </div>
      
      <div className="flex-between" style={{ width: '100%', alignItems: 'flex-end' }}>
        <div>
          <p className="text-sm">BLOG</p>
          <h2 className="text-lg">GFonts</h2>
        </div>
        <IconButton />
      </div>
    </div>
  );
}

export default BlogCard;
