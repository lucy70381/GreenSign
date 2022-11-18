import SignElement from "~/components/SignElement";

export default function Sign() {
  return (
    <main>
      <div className="container mx-auto w-full bg-orange md:w-3/4 lg:w-1/2">
        <SignElement>
          <SignElement.Container>
            <SignElement.Switch />
            <SignElement.ColorPicker />
            <SignElement.Canvas />
            <SignElement.ClearBtn />
            <SignElement.CreateBtn />
          </SignElement.Container>
        </SignElement>
      </div>
    </main>
  );
}
