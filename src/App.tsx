import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout';
import {
  Home,
  Services,
  ServiceDetail,
  Pricing,
  About,
  Reviews,
  Contact,
  NotFound,
} from '@/pages';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
