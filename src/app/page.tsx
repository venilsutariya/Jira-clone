import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="p-2 flex gap-4">
      <Button>
        Primary
      </Button>
      <Button variant={'secondary'}>
        Secondary
      </Button>
      <Button variant={'destructive'}>
        Destructive
      </Button>
      <Button variant={'ghost'}>
        Ghost
      </Button>
      <Button variant={'muted'}>
        Muted
      </Button>
      <Button variant={'outline'}>
        Outline
      </Button>
      <Button variant={'teritary'}>
        Teritary
      </Button>
    </div>
  );
}
