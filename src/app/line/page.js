import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
            <div className="mb-5 flex gap-5 items-center justify-center">
                <a href="https://lineauth.bomboonsan.com/" target="_blank"
                className="bg-[#00b900]/90 hover:bg-[#00b900] text-white font-bold py-2 px-4 rounded-lg"
                >LINE LOGIN</a>
                </div>
        </main>
    );
}
