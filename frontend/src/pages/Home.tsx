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

        </div>


    </div>
        


</div>
    )
}