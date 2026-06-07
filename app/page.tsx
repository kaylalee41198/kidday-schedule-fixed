"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    if (option === 'chore') {
      router.push('/chores');
    } else if (option === 'schedule') {
      router.push('/schedule');
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-violet-50 px-6">
      <div className="mb-10 text-center">
        <h1 className="text-6xl mb-3">Welcome to Space!</h1>
        <p className="text-violet-400 mt-2 text-lg">What would you like to do?</p>
      </div>
      <div className="flex flex-col gap-5 w-full max-w-sm">
        <button onClick={() => handleSelect('chore')} className="bg-violet-600 hover:bg-violet-700 text-white font-semibold text-lg py-5 px-8 rounded-2xl shadow-md transition">
          Build a Chore List
        </button>
        <button onClick={() => handleSelect('schedule')} className="bg-pink-500 hover:bg-pink-600 text-white font-semibold text-lg py-5 px-8 rounded-2xl shadow-md transition">
          Create a Daily Schedule
        </button>
      </div>
    </main>
  );
}