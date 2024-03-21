"use client";

import { Tab } from "@/components/Tabs";
import { CircleDollarSign, KeyRound } from "lucide-react";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center bg-[#171717]">
      <div className="bg-[#262626] w-3/5 rounded-lg p-4 h-fit mt-20 text-white">
        <div className="text-white">
          <h1 className="font-bold text-xl">Content settings</h1>
          <p className="pt-2">
            Create content collections and setup keywords to uncover and
            organizer community content knowledge base.
          </p>
        </div>

        <Tab.Root classNames={{ cursor: "!bg-[#fe6c46]" }}>
          <Tab.Tab
            key="first"
            title={
              <div className="flex items-center space-x-3">
                <div className="p-1 bg-[#fe6c46] rounded-md">
                  <CircleDollarSign className="w-4 h-4 stroke-white" />
                </div>
                <span>Plans</span>

                <span className="bg-[#373737] border border-[#3b3b3b] rounded-full text-xs h-5 w-5 flex justify-center items-center">
                  3
                </span>
              </div>
            }
          >
            <h2 className="mb-4 font-medium">Plan type</h2>
            <fieldset className="grid grid-cols-1 gap-3">
              {Array.from([
                { name: "Business" },
                { name: "Pro" },
                { name: "Free" },
              ]).map((item, index) => (
                <label
                  htmlFor={item.name}
                  key={index}
                  className="w-full border h-24 rounded-lg border-[#3c3c3c] hover:cursor-pointer hover:border-[#fe6c46] transition-all p-4"
                >
                  <input type="radio" name="price" id={item.name} />
                </label>
              ))}
            </fieldset>

            <div className="w-full justify-between flex mt-6">
              <button className="bg-[#373737] border border-[#3b3b3b] rounded-lg px-3 py-2 text-sm">
                Cancel
              </button>
              <button className="bg-[#fe6c46] rounded-lg px-3 py-2 text-sm">
                Save
              </button>
            </div>
          </Tab.Tab>
          <Tab.Tab
            key="last"
            title={
              <div className="flex items-center space-x-3">
                <div className="p-1 bg-[#fe6c46] rounded-md">
                  <KeyRound className="w-4 h-4 stroke-white" />
                </div>
                <span>Keys</span>
              </div>
            }
          ></Tab.Tab>
        </Tab.Root>
      </div>
    </div>
  );
}
