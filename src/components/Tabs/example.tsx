import { CircleDollarSign, Earth, KeyRound } from "lucide-react"
import { Tab } from "."

function ExampleTabs() {
    return (
        <div className="w-screen h-screen flex justify-center bg-[#171717]">
            <div className="bg-[#262626] w-1/2 rounded-lg p-4 h-fit mt-20 text-white">
                <div className="text-white">
                    <h1 className="font-bold text-xl">Create new database</h1>
                </div>

                <Tab.Root classNames={{ cursor: "!bg-[#fe6c46]" }}>
                    <Tab.Tab
                        key="one"
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

                        <div className="w-full flex h-[450px] rounded-lg flex-col relative">
                            <h2 className="mb-4 font-medium">Plan type</h2>
                            <div className="grid grid-cols-1 gap-3">
                                {Array.from([
                                    { name: "Business", price: 48 },
                                    { name: "Pro", price: 28 },
                                    { name: "Free", price: 0 },
                                ]).map((item, index) => (
                                    <div
                                        key={index}
                                        className="w-full border-2 h-24 rounded-lg border-[#3c3c3c] hover:cursor-pointer hover:border-[#fe6c46] transition-all p-4 flex justify-between items-start"
                                    >
                                        <div className="flex flex-col">
                                            <div className="flex gap-2 items-center">
                                                <p className="font-semibold">{item.name}</p>
                                                <div className="text-xs bg-[#373737] border border-[#3b3b3b] p-1 rounded-lg flex items-center gap-1">
                                                    <Earth className="w-4 h-4" />
                                                    AWS ap-east-1</div>


                                            </div>
                                            <p className="text-sm">Read/write-based billing for lower traffic applications</p>
                                            <p className="text-xs mt-1 text-[#898989] font-medium"><span className="text-white">100 billion</span> row reads and 10 million row writes / month</p>
                                        </div>

                                        <div>
                                            {item.price > 0 ? <>
                                                <h1 className="text-lg text-[#fe6c46]">from $ {item.price}</h1>
                                                <p className="text-xs text-[#898989] text-end">/ month</p>
                                            </> : <p>Free</p>}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="w-full justify-between flex bottom-0 absolute">
                                <button className="bg-[#373737] border border-[#3b3b3b] rounded-lg px-3 py-2 text-sm">
                                    Cancel
                                </button>
                                <button className="bg-[#fe6c46] rounded-lg px-3 py-2 text-sm">
                                    Save
                                </button>
                            </div>
                        </div>
                    </Tab.Tab>
                    <Tab.Tab
                        key="two"
                        title={
                            <div className="flex items-center space-x-3">
                                <div className="p-1 bg-[#fe6c46] rounded-md">
                                    <KeyRound className="w-4 h-4 stroke-white" />
                                </div>
                                <span>Keys</span>
                            </div>
                        }
                    >
                        <div className="border w-full flex border-[#3b3b3b] h-[450px] rounded-lg justify-center items-center flex-col">
                            <div className="p-2 bg-[#fe6c46] rounded-md flex justify-center items-center">
                                <KeyRound className="w-10 h-10 stroke-white" />
                            </div>

                            <h1 className="font-semibold text-xl mt-3">Not found keys</h1>
                        </div>
                    </Tab.Tab>

                    <Tab.Tab key='three' title='Services' disabled />
                </Tab.Root>
            </div>
        </div>
    )
}

export { ExampleTabs }