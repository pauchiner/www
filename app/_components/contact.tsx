'use client';

import {Button, Input, Label, Textarea} from '@/components/ui';
import {FormEvent, useState} from 'react';
import {cn} from '@/lib/ui';

export const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        'https://api.formizee.com/v1/f/enp_3ygybtPZp4V2SRcgswuAtGk934GH',
        {
          headers: {'Content-Type': 'application/json'},
          method: 'POST',
          body: JSON.stringify({
            name: formData.get('name'),
            mail: formData.get('email'),
            message: formData.get('motive')
          })
        }
      );
      const error = await response.json();

      if (response.status !== 201) {
        setMessage(error?.message ?? 'Something went wrong, please try again.');
        setError(true);
        return;
      }

      setMessage(
        'Your message was sent correctly, I will answer as soon as possible.'
      );
    } catch (error) {
      setMessage('Something went wrong, please try again.');
      console.error(error);
      setError(true);
    }
    form?.reset();
    setLoading(false);
  };

  return (
    <section id="contact">
      <h3 className="text-lg scroll-m-20 underline underline-offset-4 leading-7 [&:not(:first-child)]:mt-2">
        <a href="/#contact">CONTACT</a>
      </h3>
      <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Name</Label>
          <Input
            required
            id="name"
            name="name"
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
            name="email"
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
            name="motive"
            placeholder="Pau, I contact you because React is dead. Try this new framew..."
          />
        </div>
        <Button disabled={loading} type="submit">
          {loading ? 'LOADING...' : 'SEND'}
        </Button>
        {message ? (
          <p
            className={cn(
              'animate-in fade-in-0 text-sm font-medium text-center',
              error
                ? 'text-red-500 dark:text-red-400'
                : 'text-green-500 dark:text-green-400'
            )}
            aria-live="polite"
          >
            {message}
          </p>
        ) : (
          <></>
        )}
      </form>
    </section>
  );
};
