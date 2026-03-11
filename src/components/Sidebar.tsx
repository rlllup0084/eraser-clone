export function Sidebar() {
  return (
    <nav className="w-14 bg-slate-50 border-r border-slate-200 flex flex-col items-center shrink-0 py-4 gap-4 hidden md:flex transition-all duration-300">
      <button className="p-2.5 bg-white border border-slate-200 shadow-sm rounded-lg text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-colors group relative" title="Search">
        <span className="material-symbols-outlined text-[20px]">search</span>
      </button>
      <div className="w-8 h-px bg-slate-200 my-1"></div>
      <a className="p-2.5 bg-primary/10 text-primary rounded-lg shadow-sm group relative" href="#" title="Project Architecture">
        <span className="material-symbols-outlined text-[20px] fill-current">description</span>
        <div className="absolute left-full top-1/2 ml-2 -translate-y-1/2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 whitespace-nowrap z-50 pointer-events-none transition-opacity">
            Project Architecture
        </div>
      </a>
      <a className="p-2.5 hover:bg-slate-200 rounded-lg text-slate-500 hover:text-slate-700 transition-colors group relative" href="#" title="Files">
        <span className="material-symbols-outlined text-[20px]">folder</span>
        <div className="absolute left-full top-1/2 ml-2 -translate-y-1/2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 whitespace-nowrap z-50 pointer-events-none transition-opacity">
            Files
        </div>
      </a>
      <a className="p-2.5 hover:bg-slate-200 rounded-lg text-slate-500 hover:text-slate-700 transition-colors group relative" href="#" title="Templates">
        <span className="material-symbols-outlined text-[20px]">grid_view</span>
        <div className="absolute left-full top-1/2 ml-2 -translate-y-1/2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 whitespace-nowrap z-50 pointer-events-none transition-opacity">
            Templates
        </div>
      </a>
      <div className="flex-1"></div>
      <a className="p-2.5 hover:bg-slate-200 rounded-lg text-slate-500 hover:text-slate-700 transition-colors group relative" href="#" title="Trash">
        <span className="material-symbols-outlined text-[20px]">delete</span>
        <div className="absolute left-full top-1/2 ml-2 -translate-y-1/2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 whitespace-nowrap z-50 pointer-events-none transition-opacity">
            Trash
        </div>
      </a>
      <button className="p-2 hover:bg-slate-200 rounded-lg text-slate-400 hover:text-slate-600 transition-colors mt-2" title="Expand Sidebar">
        <span className="material-symbols-outlined text-[20px]">dock_to_right</span>
      </button>
    </nav>
  );
}
