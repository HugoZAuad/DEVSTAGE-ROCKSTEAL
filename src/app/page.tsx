import { ArrowRight, Copy } from "lucide-react";
import { Button } from "@/components/Button";
import { IconButton } from "@/components/IconButton";
import { Input } from "@/components/Input";

export default function Home() {
  return (
    <main>
      <Button type="submit">
        ENVIAR
        <ArrowRight />
      </Button>

      <IconButton>
        <Copy />
      </IconButton>

      <div>
        <Input type="email" placeholder="Digite o seu e-mail" />
        <Input type="email" placeholder="Digite o seu e-mail" error />
      </div>
    </main>
  );
}