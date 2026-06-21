import { SiteHeader } from "@/components/site-header";
import { Playground } from "@/components/playground";

export default function AppPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Playground />
      </main>
    </>
  );
}
