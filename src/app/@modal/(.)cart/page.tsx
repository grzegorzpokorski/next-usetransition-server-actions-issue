import { CloseButton } from "./close-button";

export default function Page() {
  return (
    <div className="fixed bg-black/50 inset-0">
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] overerflow-auto box-shadow bg-white">
        <CloseButton />
        <h1>Cart</h1>
      </div>
    </div>
  );
}
