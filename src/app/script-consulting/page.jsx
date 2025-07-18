export const metadata = {
  title: "Script Consultant & Development | Fabio Montanari",
  description: "Fabio Montanari offers script consulting and original project development for studios, filmmakers, and writers, combining industry experience with storytelling expertise",
};


import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ConsultingContent from "./ConsultingContent";

export default function ScriptConsultingPage() {
  return (
    <>
      <Header />
      <ConsultingContent />
      <Footer />
    </>
  );
}
