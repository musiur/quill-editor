import Navbar from "@/components/Navbar";
import "@/styles/globals.scss";
import "react-quill/dist/quill.snow.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className="max-w-[800px] mx-auto">
        <Component {...pageProps} />
      </div>
    </>
  );
}
