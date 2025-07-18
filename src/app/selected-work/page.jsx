export const metadata = {
  title: "Selected Work | Fabio Montanari",
  description: "From Netflix, HBO Max, and Amazon Prime Video to award-winning indie films—Fabio Montanari creates stories across genres, formats, and scales",
};


import Header from "../components/Header";
import Footer from "../components/Footer";
import WorkContent from "./WorkContent";

export default function SelectedWorkPage() {
  return (
    <>
      <Header />
      <WorkContent />
      <Footer />
    </>
  );
}
