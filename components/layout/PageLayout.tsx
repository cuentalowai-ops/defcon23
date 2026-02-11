import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ConsentBanner from "@/components/ui/ConsentBanner";
import AnalyticsLoader from "@/components/ui/AnalyticsLoader";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-24">{children}</main>
      <Footer />
      <ConsentBanner />
      <AnalyticsLoader />
    </>
  );
}
