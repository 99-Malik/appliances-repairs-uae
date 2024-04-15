import FixedCallButtons from "@/components/buttons/FixCallButtons";
import CallHeader from "@/components/headers/CallHeader";
import Header from "@/components/headers/Header";
import Footer from "@/components/sections/home/Footer";

const ServiceLayout = ({ children }) => {
  return (
    <main className="flex flex-col py-20">
      {children}
    </main>
  );
};

export default ServiceLayout;
