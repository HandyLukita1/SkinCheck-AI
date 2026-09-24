import { Link } from 'react-router-dom';
import coverImage from '../assets/Cover.jpg';
import asset1 from '../assets/Asset-01.svg';
import asset2 from '../assets/Asset-02.svg';
import asset3 from '../assets/Asset-04.svg';
import asset4 from '../assets/Asset-03.svg';

export default function Home() {
   return (
       <div style={{ 
        minHeight: '88vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#f8fbff',
        overflowX: 'hidden' }}>
     
      {/*Now is the cover section*/}
      <div style={{ 
          width: '100%',
          backgroundColor: '#ffffff',
          padding: '4rem 2rem',
          borderBottom: '1px solid #e2e8f0' }}>
        
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat (auto-fit, minmax(300px,1fr)',
            gap: '3rem',
            margin: '0 auto',
            maxWidth: '1200px',
            alignItems: 'center'
        }}>
        
         <div style={{ textAlign: 'left' }}>
             <div style={{ 
                display: 'inline-block',
                backgroundColor: '#e0f2fe',
                color: '#0284c7',
                padding: '0.4rem 1rem',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: 700,
                marginBottom: '1.2rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase' }}>
              AI-Powered Dermatology
            </div>

            <h1 style={{
              fontSize: '3rem',
              fontWeight: 900,
              color: '#1A3052',
              marginBottom: '1rem',
              lineHeight: 1.15 }}>
              Detect Skin Conditions <br/>

              <span style={{ 
                  background: 'linear-gradient(to right, #38bdf8, #22c55e)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent' }}>in One Click</span>
            </h1>

             <p style={{ 
                fontSize: '1.25rem',
                color: '#64748b',
                marginBottom: '2rem',
                lineHeight: 1.6,
                maxWidth: '500px' }}>
              Advanced, fast, and secure preliminary skin screening right from your device.
            </p>








         </div>


        

        

        </div>


    </div>
        


</div>
    )
}