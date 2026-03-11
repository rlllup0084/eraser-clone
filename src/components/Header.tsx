export function Header() {
  return (
    <header className="flex h-14 items-center justify-between border-b border-slate-200 bg-white px-4 shrink-0 z-20 relative shadow-sm">
      <div className="flex items-center gap-4">
        <button className="p-1.5 hover:bg-slate-100 rounded-md text-slate-500 md:hidden">
          <span className="material-symbols-outlined">menu</span>
        </button>
        <div className="flex items-center gap-2 cursor-pointer hover:bg-slate-50 p-1.5 rounded-lg transition-colors">
          <div className="size-6 text-primary flex items-center justify-center bg-primary/10 rounded-md">
            <span className="material-symbols-outlined text-[18px]">draw</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-slate-900">Project Architecture</span>
              <span className="text-xs text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">v1.2</span>
            </div>
            <span className="text-[10px] text-slate-500 font-medium">Last edited just now</span>
          </div>
          <span className="material-symbols-outlined text-slate-400 text-sm">expand_more</span>
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-1 bg-white border border-slate-200 p-1 rounded-lg shadow-sm">
        <button className="p-1.5 text-primary bg-primary/10 rounded hover:bg-primary/20 transition-colors" title="Select">
          <span className="material-symbols-outlined text-[20px]">arrow_selector_tool</span>
        </button>
        <button className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded transition-colors" title="Rectangle">
          <span className="material-symbols-outlined text-[20px]">crop_square</span>
        </button>
        <button className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded transition-colors" title="Diamond">
          <span className="material-symbols-outlined text-[20px]">diamond</span>
        </button>
        <button className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded transition-colors" title="Text">
          <span className="material-symbols-outlined text-[20px]">text_fields</span>
        </button>
        <div className="w-px h-5 bg-slate-200 mx-1"></div>
        <button className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded transition-colors" title="Connect">
          <span className="material-symbols-outlined text-[20px]">arrow_right_alt</span>
        </button>
        <button className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded transition-colors" title="Pen">
          <span className="material-symbols-outlined text-[20px]">edit</span>
        </button>
        <button className="flex items-center gap-1 px-2 py-1 text-purple-600 bg-purple-50 hover:bg-purple-100 rounded text-xs font-bold transition-colors ml-1">
          <span className="material-symbols-outlined text-[16px]">auto_awesome</span>
                        AI
                    </button>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex -space-x-2">
          <div className="size-8 rounded-full ring-2 ring-white bg-cover bg-center" data-alt="User avatar 1" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCDYF6-n1LJbGV2sXxU4ygnW9jdrNk9WPqwwgzfUO7_lJqjEv_MRgC6od3iis-p7PQRvEBEx9BdAEP2gFiJNmS1tcJ2lyshLqJ4lmcaqdLtQpAlA-adKHEf7cMIoDrxZMTHfUUoP3RXTi3yRyEEcJLNg1oOdxLi7RV8EV9fCQQzLQQheL6W0_yvlc5z_EXwmKMYT5D-1ykOjCRm3Byn9QWxa5oA1bOvVM7F8RIxMaOM0O9hbpXJ2dP4haxDx4aW8ABw8uhIvyrNxDE')"}}></div>
          <div className="size-8 rounded-full ring-2 ring-white bg-cover bg-center" data-alt="User avatar 2" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBTTtMSMH90P97Jg6DyJRh0labqNdtu1tknUgEi38DJEuIFzJBTvL01gNVmtQJmzaae8RYjwIKY5ugWwf9r9qFXxHJhaDGHzzCqlUnWv4Ibik0XNVDiGqjjQcxwER1St7C7q__30F8TvW7RTfpyYwkW4AZRvXNondFZeIvB0G0igniK_Ds-klr8mbr0oi9H7rMlC51_2IW-ymGaJ4HFT9l7rG5GCIlsPiNq40z0lM7zP30a4Xr15AjnOOW2e1TQOd-3nkjLi1H5YN0')"}}></div>
          <div className="size-8 rounded-full ring-2 ring-white bg-primary text-white flex items-center justify-center text-xs font-bold shadow-inner">+3</div>
        </div>
        <button className="h-8 px-4 bg-primary hover:bg-primary/90 text-white text-sm font-semibold rounded-lg shadow-sm transition-colors flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">share</span>
                        Share
                    </button>
        <button className="size-8 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors">
          <span className="material-symbols-outlined text-[20px]">settings</span>
        </button>
      </div>
    </header>
  );
}
