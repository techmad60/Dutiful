import { inty } from "./fonts/fonts";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className={`${inty.className}`}>
      <Header />
    </div>
  );
}