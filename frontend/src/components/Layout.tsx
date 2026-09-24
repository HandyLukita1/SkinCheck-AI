import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Layout() {
    return (
        <div style={{
            display: 'flex',
            flexDirection:'column',
            minHeight: '100vh',
            fontFamily: 'system-ui,sans-serif'
        }}>
         
         {/* Now is Navbar File*/}
         <header style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 3rem',
            backgroundColor: '#ffffff',
            borderBottom: '1px solid #e2e8f0',
            position: 'sticky',
            top: 0,
            zIndex: 1000
         }}>
        
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem' }}>

          <span style={{ 
              fontSize: '1.25rem',
              fontWeight: 800,
              color: '#1A3052',
              letterSpacing: '-0.02em' }}
              >SkinCheckAI</span>
        </div>

        <nav style={{
            display: 'flex',
            gap: '2rem' }
          }>
            
          <Link to="/" style={{ 
              textDecoration: 'none',
              color: '#475569',
              fontWeight: 600,
              fontSize: '1rem' }}
              >Home</Link>

            <Link to="/scan" style={{ 
              textDecoration: 'none',
              color: '#475569',
              fontWeight: 600,
              fontSize: '1rem' }}
              >Scanner</Link>
        </nav>
      </header>



            
         </header>
        </div>
    )
}