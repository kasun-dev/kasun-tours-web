// components/LoadingScreen.tsx
export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white animate-fade">
      {/* Animation styles */}
      <style jsx>{`
        @keyframes fillBar {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>

      {/* Kasun Tours Text */}
      <div className="flex mb-6">
        <p className="text-5xl text-black mx-2 mt-2">Kasun</p>
        <p className="text-5xl text-white bg-yellow-500 p-2 border rounded-xl">Tours</p>
      </div>

      {/* Progress Bar */}
      <div className="w-64 h-2 bg-gray-200 rounded overflow-hidden">
        <div
          className="h-full bg-yellow-500"
          style={{
            animation: 'fillBar 2s ease-in-out forwards',
          }}
        />
      </div>
    </div>
  );
}
