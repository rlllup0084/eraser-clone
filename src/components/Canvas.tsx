export function Canvas() {
  return (
    <main className="flex-1 relative canvas-grid overflow-hidden cursor-grab active:cursor-grabbing">
      <div className="absolute bottom-6 right-6 flex flex-col gap-2 z-10">
        <div className="flex flex-col bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
          <button className="p-2 hover:bg-slate-50 text-slate-600 border-b border-slate-100">
            <span className="material-symbols-outlined text-[20px]">add</span>
          </button>
          <button className="p-2 hover:bg-slate-50 text-slate-600">
            <span className="material-symbols-outlined text-[20px]">remove</span>
          </button>
        </div>
        <button className="p-2 bg-white border border-slate-200 rounded-lg shadow-sm hover:bg-slate-50 text-slate-600">
          <span className="material-symbols-outlined text-[20px]">fit_screen</span>
        </button>
      </div>
      <div className="absolute top-0 left-0 w-full h-full" style={{transform: "scale(1) translate(0px, 0px)"}}>
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-48 bg-white rounded-lg shadow-md border-l-4 border-primary p-4 z-10 group hover:shadow-lg transition-all">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-primary/10 rounded-md text-primary">
              <span className="material-symbols-outlined text-[20px]">dns</span>
            </div>
            <span className="font-bold text-slate-800">API Gateway</span>
          </div>
          <div className="text-xs text-slate-500">Route traffic &amp; Rate limiting</div>
          <div className="absolute -right-1.5 top-1/2 w-3 h-3 bg-white border-2 border-primary rounded-full transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 bg-white rounded-lg shadow-md border-l-4 border-emerald-500 p-4 z-10 group hover:shadow-lg transition-all ml-12">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-emerald-50 rounded-md text-emerald-600">
              <span className="material-symbols-outlined text-[20px]">verified_user</span>
            </div>
            <span className="font-bold text-slate-800">Auth Service</span>
          </div>
          <div className="text-xs text-slate-500">JWT Validation</div>
          <div className="absolute -top-6 -right-4 flex items-center gap-1">
            <span className="material-symbols-outlined text-purple-600 text-[16px] transform -rotate-12 fill-current">near_me</span>
            <span className="text-xs font-bold text-white bg-purple-600 px-1.5 py-0.5 rounded-full shadow-sm">Sarah</span>
          </div>
        </div>
        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <path d="M 360 250 L 580 250" fill="none" markerEnd="url(#arrowhead)" stroke="#94a3b8" strokeDasharray="5,5" strokeWidth="2"></path>
          <path d="M 360 300 C 360 350, 360 450, 430 450" fill="none" markerEnd="url(#arrowhead)" stroke="#cbd5e1" strokeWidth="2"></path>
          <defs>
            <marker id="arrowhead" markerHeight="7" markerWidth="10" orient="auto" refX="9" refY="3.5">
              <polygon fill="#94a3b8" points="0 0, 10 3.5, 0 7"></polygon>
            </marker>
          </defs>
        </svg>
        <div className="absolute top-1/2 left-1/3 transform translate-y-12 w-56 bg-white rounded-lg shadow-md border-l-4 border-orange-500 p-4 z-10 group hover:shadow-lg transition-all">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-orange-50 rounded-md text-orange-600">
              <span className="material-symbols-outlined text-[20px]">payments</span>
            </div>
            <span className="font-bold text-slate-800">Payment Processor</span>
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between text-xs text-slate-500 p-1 bg-slate-50 rounded">
              <span>Status</span>
              <span className="text-green-600 font-semibold">Active</span>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-500 p-1 bg-slate-50 rounded">
              <span>Queue</span>
              <span className="text-slate-700 font-mono">sqs-payment-v1</span>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-2/3 transform translate-y-12 w-48 bg-white rounded-lg shadow-md border-2 border-slate-200 border-dashed p-4 z-10 opacity-70">
          <div className="flex items-center gap-2 mb-2 justify-center">
            <span className="material-symbols-outlined text-[32px] text-slate-400">database</span>
          </div>
          <div className="text-center text-sm font-medium text-slate-400">New Cluster Node</div>
          <div className="text-center text-xs text-slate-400 mt-1">Drag to configure</div>
        </div>
      </div>
      <div className="absolute bottom-6 left-6 w-48 h-32 bg-white border border-slate-200 rounded-lg shadow-sm hidden md:block overflow-hidden">
        <div className="w-full h-full bg-slate-50 relative p-4">
          <div className="w-8 h-6 bg-slate-300 rounded absolute top-1/4 left-1/4"></div>
          <div className="w-8 h-6 bg-slate-300 rounded absolute top-1/4 left-1/2"></div>
          <div className="w-8 h-6 bg-slate-300 rounded absolute top-1/2 left-1/3 mt-4"></div>
          <div className="absolute top-2 left-2 w-32 h-20 border-2 border-primary rounded bg-primary/5 cursor-move"></div>
        </div>
      </div>
      <div className="absolute top-6 right-6">
        <button className="flex items-center gap-2 bg-white pl-3 pr-4 py-2 rounded-full shadow-lg border border-slate-100 hover:shadow-xl transition-shadow group">
          <div className="bg-gradient-to-tr from-purple-500 to-indigo-500 text-white p-1 rounded-full">
            <span className="material-symbols-outlined text-[16px]">auto_awesome</span>
          </div>
          <span className="text-sm font-medium text-slate-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-indigo-600 transition-all">Generate Diagram from Text</span>
        </button>
      </div>
    </main>
  );
}
