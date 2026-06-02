import { useEffect } from "react";
import TailorMade from "./TailorMade";

export default function BookCustomTrip() {
  useEffect(() => {
    document.title = "Book a Custom Trip | White Magic Adventure Travel";
  }, []);
  return <TailorMade />;
}
