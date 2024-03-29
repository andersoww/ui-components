import { Timeline } from "@/components/Timeline";

function ExampleTimeline() {
  return (
    <div className="shadow-sm w-[350px] bg-[#0e1117] rounded-md p-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border border-[#30363d]">
      <Timeline.Root>
        <Timeline.Header>
          <h1 className="text-[#e6edf3] font-bold">Latest changes</h1>
        </Timeline.Header>
        <Timeline.Content>
          {[
            {
              title: "11 hours ago",
              description: "Enterprise READMEs",
            },
            {
              title: "Yesterday",
              description: "Copilot – February 27th update",
            },
            {
              title: "Yesterday",
              description:
                "Repository Rules – configure merge queue rule – public beta",
            },
            {
              title: "Yesterday",
              description:
                "GitHub Copilot Enterprise is now generally available",
            },
          ].map((item, index) => (
            <Timeline.Item key={index}>
              <Timeline.Point />
              <div>
                <h1 className="text-[#828b95] text-xs">{item.title}</h1>
                <p className="text-[#e6edf3] text-sm hover:underline hover:text-blue-500 hover:cursor-pointer">
                  {item.description}
                </p>
              </div>
            </Timeline.Item>
          ))}
          <Timeline.Item className="pb-0">
            <div>
              <p className="text-[#828b95] text-xs hover:underline hover:text-blue-500 hover:cursor-pointer">
                View changelog →
              </p>
            </div>
          </Timeline.Item>
        </Timeline.Content>
      </Timeline.Root>
    </div>
  );
}
export { ExampleTimeline };
