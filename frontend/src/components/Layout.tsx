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
         
         {/* Now is Header File*/}
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
            
         </header>
        </div>
    )
}