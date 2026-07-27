export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-canvas">
      <div className="flex flex-col items-center gap-6">
        <span className="display-heading text-2xl animate-pulse">Studio</span>
        <div className="h-[1px] w-32 bg-border overflow-hidden">
          <div className="h-full w-1/2 bg-accent animate-[shimmer_1.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}
