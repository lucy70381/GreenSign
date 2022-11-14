import Pagination from "~/components/Pagination";
import Zoom from "~/components/Zoom";
import SignElement from "~/components/SignElement";

export default function Index() {
  return (
    <>
      <nav className="h-[72px]"></nav>
      <main>
        <SignElement>
          <SignElement.Container>
            <SignElement.Switch />
            <SignElement.ColorPicker />
            <SignElement.SignCanvas />
          </SignElement.Container>
        </SignElement>
        <Pagination currentPage={1} count={2} />
        <Zoom currentRatio={100} />
      </main>
    </>
  );
}
