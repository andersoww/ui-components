import {
  AutoCompleteContainer,
  AutoCompleteItem,
} from "@/components/AutoComplete";
import { Check } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-4 bg-gradient-to-r from-slate-900 to-slate-700 justify-center">
      <div className="flex flex-col bg-white shadow-sm rounded-md w-full max-w-[500px] p-4 gap-4">
        <div>
          <h1 className="text-xl text-zinc-700 font-bold">Create User</h1>
          <p className="text-zinc-700">
            Enter your load to complete the registration.
          </p>
        </div>

        <AutoCompleteContainer
          label="Roles:"
          className="w-1/2"
          placeholder="Choose a role..."
        >
          {[
            "Software Developer",
            "Web Developer",
            "Mobile App Developer",
            "Front-end Developer",
          ].map((item, index) => (
            <AutoCompleteItem
              key={index}
              index={index}
              id={item}
              description={item}
            >
              <div className="flex items-center gap-3">
                <p className="text-md font-bold">{item}</p>

                <div className="w-4 h-4 rounded-sm bg-green-500 justify-center items-center flex">
                  <Check className="w-3 h-3 text-white" />
                </div>
              </div>
            </AutoCompleteItem>
          ))}
        </AutoCompleteContainer>

        <div className="flex w-full justify-between">
          <button className="px-3 py-2 text-zinc-600 rounded-lg">Cancel</button>
          <button className="bg-blue-500 px-3 py-2 rounded-xl shadow-sm">
            Save
          </button>
        </div>
      </div>
    </main>
  );
}
