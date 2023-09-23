import { FetchButton } from "../../../components/fetch-button";
import { CloseButton } from "../../../components/close-button";

export default async function Page() {
  return (
    <div className="fixed bg-black/50 inset-0">
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] overerflow-auto box-shadow bg-white flex flex-col gap-1">
        <CloseButton />
        <h1>CART</h1>
        <FetchButton />
      </div>
    </div>
  );
}
