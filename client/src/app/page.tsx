import HomePg from './HomePg/page';
import Services from './Services/page';
import Contact from './Contact/page';

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
    </div>
  );
}