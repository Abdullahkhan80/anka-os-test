'use client';

import Image from "next/image";

import Card from "./components/Card";
import Button from "./components/Button";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black">
        <Card title="Welcome to My App" content="This is a simple application to demonstrate a modern UI." />
        <Button label="Click Me" onClick={() => alert('Button clicked!')} />
        
        

      </main>
    </div>
  );
}
