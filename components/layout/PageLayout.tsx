import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ConsentBanner from "@/components/ui/ConsentBanner";
import AnalyticsLoader from "@/components/ui/AnalyticsLoader";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <Header />
      <main id="main" className="pt-20 md:pt-24">
        {children}
      </main>
      <Footer />
      <ConsentBanner />
      <AnalyticsLoader />
    </>
  );
}
