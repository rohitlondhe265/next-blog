import React from 'react'

const SideNav = () => {
    const Menus = [
        { title: "Dashboard", src: "Chart_fill" },
        { title: "Inbox", src: "Chat" },
        { title: "Accounts", src: "User", gap: true },
        { title: "Schedule ", src: "Calendar" },
        { title: "Search", src: "Search" },
        { title: "Analytics", src: "Chart" },
        { title: "Files ", src: "Folder", gap: true },
        { title: "Setting", src: "Setting" },
    ];
    return (
        <div
            className="w-72 bg-gray-600 h-screen p-5  pt-8 relative duration-300"
        >
            <div className="flex gap-x-4 items-center">
                <img
                    src="/assets/logo.png"
                    className="cursor-pointer duration-500"
                />
                <h1
                    className="text-white origin-left font-medium text-xl duration-200"
                >
                    Designer
                </h1>
            </div>
            <ul className="pt-6">
                {Menus.map((menu, index) => (
                    <li
                        key={index}
                        className={`flex  rounded-md p-2 cursor-pointer hover:bg-white text-gray-300 text-sm items-center gap-x-4 
  ${menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-white"
                            } `}
                    >
                        <img src={`/assets/${menu.src}.png`} />
                        <span className="origin-left duration-200">
                            {menu.title}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SideNav