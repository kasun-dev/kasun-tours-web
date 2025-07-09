import HomePg from './HomePg/page';
import Services from './Services/page';
import Contact from './Contact/page';
import GalleryPg from './Gallery/page';

export default function Page() {
  return (
    <div>
    <section id='home'>
      {/* Load the home page */}
      <HomePg />
    </section>

    <section id='services'>
      {/* Load the services page */}
      <Services />
    </section>
    
    <section id='contact'>
      {/* Load the tours page */}
      <Contact />
    </section>

    <section id='gallery'>
      {/* Load the gallery page */}
      <GalleryPg />
    </section>
    </div>
  );
}