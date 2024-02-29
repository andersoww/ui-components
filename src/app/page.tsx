import { Timeline } from "@/components/Timeline";
import { TimelineItem } from "@/components/Timeline/components/TimelineItem";
import { ExampleTimeline } from "@/components/Timeline/example";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-4 bg-[#02040a] justify-center">
      <ExampleTimeline />
    </main>
  );
}
