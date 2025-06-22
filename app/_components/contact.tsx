import {Button, Input, Label, Textarea} from '@/components/ui';

export const Contact = () => {
  const send = async (formData: FormData) => {
    'use server';

    console.log(formData);
  };

  return (
    <section id="contact">
      <h3 className="text-lg scroll-m-20 underline underline-offset-4 leading-7 [&:not(:first-child)]:mt-2">
        <a href="/#contact">CONTACT</a>
      </h3>
      <form action={send} className="mt-8 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Name</Label>
          <Input
            required
            id="name"
            autoComplete="name"
            placeholder="Pau Chiner"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            required
            id="email"
            autoComplete="email"
            placeholder="pauchiner@formizee.com"
            type="email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="motive">Motive</Label>
          <Textarea
            required
            id="motive"
            placeholder="Pau, I contact you because React is dead. Try this new framew..."
          />
        </div>
        <Button type="submit">SEND</Button>
      </form>
    </section>
  );
};
