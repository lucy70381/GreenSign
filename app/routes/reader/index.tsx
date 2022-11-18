import ReaderElement from "~/components/ReaderElement";

export default function Index() {
  return (
    <main>
      <div className="container mx-auto w-full bg-orange md:w-3/4 lg:w-1/2">
        <ReaderElement>
          <ReaderElement.Pagination />
          <ReaderElement.Zoom />
          <ReaderElement.Render />
        </ReaderElement>
      </div>
    </main>
  );
}
