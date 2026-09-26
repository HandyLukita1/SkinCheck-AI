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
      
      {/* Main Page */}
      <main style = {{ flex: 1}}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer style = {{
        backgroundColor: '#d3d3d3',
        color: '#94a3b8',
        padding: '2.5rem 3rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
        borderTop: '1px solid #334155' 
      }}>

        <div>
          <p style = {{
            color: '#ffffff',
            fontWeight: 700,
            fontSize: '1.1rem',
            margin: '0 0 0.25rem 0' }}
            >SkinCheckAI</p>
          <p style = {{
            color: '#ffffff',
            fontWeight: 700,
            fontSize: '1.1 rem',
            margin: '0.25 rem'
          }}> Your Dermatologist Solution, where we provide details
              about your skin like normal mole and bad mole
          </p>
        </div>

        <div style ={{
          maxWidth: '400px',
          maxHeight: '600px'
        }}>
          <p style = {{
            color: '#ffffff',
            fontWeight: 500,
            fontSize: '1.3 rem',
            margin: '0.22 rem'
          }}> This is an assistive tool, not a change for professional</p>
        </div>

      

        
        


        
  

      </footer>



      



            
         </div>
    );
}