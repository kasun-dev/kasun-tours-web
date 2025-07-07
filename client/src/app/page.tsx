import HomePg from './pages/HomePg/page';
import ClientLayout from './clientLayout'

export default function Page() {
  return (
    <ClientLayout>
      {/* Load the home page */}
      <HomePg />
    </ClientLayout>
  );
}