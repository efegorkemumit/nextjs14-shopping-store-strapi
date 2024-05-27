'use client'
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";

export default function Home() {
  const { toast } = useToast()


  return (
   <div className="">
    <button>
      deneme
    </button>

    <Button variant="destructive" size="lg">
      test
    </Button>

    <Button
      onClick={() => {
        toast({
          variant:"destructive",
          title: "Scheduled: Catch up",
        })
      }}
    >
      Show Toast
    </Button>
    <ModeToggle/>
   </div>
  );
}
