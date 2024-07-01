import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100">
            <div className="z-10 w-full max-w-5xl  bg-white rounded-lg shadow-lg p-8">
                <h2 className="mb-3 text-3xl font-semibold text-gray-700 dark:text-gray-200 text-center">
                    ลงทะเบียน
                </h2>
                <div className="mb-5 flex gap-5 items-center">
                <a href="https://lineauth.bomboonsan.com/" target="_blank"
                className="bg-[#00b900]/90 hover:bg-[#00b900] text-white font-bold py-2 px-4 rounded-lg"
                >LINE LOGIN</a>
                </div>
                <div className="mb-5 flex gap-5 items-center">
                    <span className="block w-1/5"><label className="block mb-2 text-base font-light text-gray-900">ชื่อ นามสกุล</label></span>
                    <input 
                    placeholder="Enter your name"
                    type="text" 
                    className="py-3 px-4 block w-full shadow-md bg-gray-50 border-gray-700 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
                </div>
                <div className="mb-5 flex gap-5 items-center">
                    <span className="block w-1/5"><label className="block mb-2 text-base font-light text-gray-900">เบอร์โทร</label></span>
                    <input 
                    placeholder="Enter your name"
                    type="tel" 
                    className="py-3 px-4 block w-full shadow-md bg-gray-50 border-gray-700 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
                </div>
                <div className="mb-5 flex gap-5 items-center">
                    <span className="block w-1/5"><label className="block mb-2 text-base font-light text-gray-900">อีเมล</label></span>
                    <input 
                    placeholder="Enter your name"
                    type="email" 
                    className="py-3 px-4 block w-full shadow-md bg-gray-50 border-gray-700 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
                </div>
                <div className="mb-5 flex gap-5 items-center">
                    <span className="block w-1/5"><label className="block mb-2 text-base font-light text-gray-900">รหัสผ่าน</label></span>
                    <input 
                    placeholder="Enter your name"
                    type="password" 
                    className="py-3 px-4 block w-full shadow-md bg-gray-50 border-gray-700 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    ลงทะเบียน
                </button>
            </div>
        </main>
    );
}
