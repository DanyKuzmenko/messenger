import { FC } from 'react';

const PageNotFound: FC = () => {
  return (
    <main className={'flex h-screen items-center justify-center'}>
      <section className={'flex flex-col gap-8'}>
        <h1 className={'text-center text-9xl font-bold text-purple-500'}>404</h1>
        <h2 className={'text-6xl font-bold text-purple-500'}>PageNotFound</h2>
      </section>
    </main>
  );
};

export { PageNotFound };
