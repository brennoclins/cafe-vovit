import React from 'react';

export default function Footer() {
  const copyRightDate = new Date().getFullYear();
  
  return (
    <footer className="footer text-faded text-center py-5">
      <div className="container">
        <div className="row justify-content-between">
          <p className="small">Copyright &copy; Café Vovit - {copyRightDate}</p>
          <p className="small"> Developer by <a href="http://www.bcl-st.com.br" target="_blank" rel="noopener noreferrer">BCL-ST</a></p>
        </div>
      </div>
    </footer>
  );
}
