import TicTacToe from './TicTacToe';

export default function MainPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 dark:bg-black">
      <main className="flex flex-col items-center justify-center w-full max-w-md p-4 bg-white dark:bg-black rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-black dark:text-white mb-4">Tic Tac Toe Game</h1>
        <TicTacToe />
      </main>
    </div>
  );
}
