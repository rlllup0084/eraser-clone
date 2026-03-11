import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { MarkdownEditor } from "@/components/MarkdownEditor";
import { Canvas } from "@/components/Canvas";

export default function Home() {
  return (
    <div className="font-display bg-background-light text-slate-900 overflow-hidden h-screen w-full flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <MarkdownEditor />
        <Canvas />
      </div>
    </div>
  );
}
