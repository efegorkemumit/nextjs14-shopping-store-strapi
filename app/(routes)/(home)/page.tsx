'use client'
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";
import Slider from "../_components/Slider";

export default function Home() {
  const { toast } = useToast()


  return (
  <>
    <Slider/>
  
  </>
  );
}
