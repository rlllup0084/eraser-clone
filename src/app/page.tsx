export default function Home() {
  return (
    <div className="font-display bg-background-light text-slate-900 overflow-hidden h-screen w-full flex flex-col">
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
      <div className="flex flex-1 overflow-hidden">
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
        <div className="w-[500px] bg-white border-r border-slate-200 flex flex-col shrink-0 relative shadow-[4px_0_24px_-12px_rgba(0,0,0,0.1)] z-10 hidden md:flex">
          <div className="flex items-center h-10 border-b border-slate-100 px-4 gap-4 bg-white z-20">
            <button className="h-full border-b-2 border-primary text-sm font-semibold text-primary px-1">Write</button>
            <button className="h-full border-b-2 border-transparent text-sm font-medium text-slate-500 hover:text-slate-800 px-1 transition-colors">Both</button>
            <button className="h-full border-b-2 border-transparent text-sm font-medium text-slate-500 hover:text-slate-800 px-1 transition-colors">Preview</button>
            <div className="ml-auto flex items-center gap-1">
              <button className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-slate-700">
                <span className="material-symbols-outlined text-[18px]">vertical_split</span>
              </button>
            </div>
          </div>
          <div className="px-4 py-2 border-b border-slate-100 flex items-center gap-1 overflow-x-auto bg-white sticky top-0 z-10">
            <div className="flex items-center gap-0.5 border-r border-slate-200 pr-2 mr-2">
              <button className="p-1.5 text-slate-600 hover:bg-slate-100 rounded transition-colors group relative" title="Heading 1">
                <span className="font-bold text-xs">H1</span>
              </button>
              <button className="p-1.5 text-slate-600 hover:bg-slate-100 rounded transition-colors group relative" title="Heading 2">
                <span className="font-bold text-xs">H2</span>
              </button>
              <button className="p-1.5 text-slate-600 hover:bg-slate-100 rounded transition-colors group relative" title="Heading 3">
                <span className="font-bold text-xs">H3</span>
              </button>
            </div>
            <div className="flex items-center gap-0.5 border-r border-slate-200 pr-2 mr-2">
              <button className="p-1.5 text-slate-600 hover:bg-slate-100 rounded transition-colors" title="Bold">
                <span className="material-symbols-outlined text-[18px]">format_bold</span>
              </button>
              <button className="p-1.5 text-slate-600 hover:bg-slate-100 rounded transition-colors" title="Italic">
                <span className="material-symbols-outlined text-[18px]">format_italic</span>
              </button>
              <button className="p-1.5 text-slate-600 hover:bg-slate-100 rounded transition-colors" title="Strikethrough">
                <span className="material-symbols-outlined text-[18px]">format_strikethrough</span>
              </button>
            </div>
            <div className="flex items-center gap-0.5">
              <button className="p-1.5 text-slate-600 hover:bg-slate-100 rounded transition-colors" title="Bullet List">
                <span className="material-symbols-outlined text-[18px]">format_list_bulleted</span>
              </button>
              <button className="p-1.5 text-slate-600 hover:bg-slate-100 rounded transition-colors" title="Code Block">
                <span className="material-symbols-outlined text-[18px]">code</span>
              </button>
              <button className="p-1.5 text-slate-600 hover:bg-slate-100 rounded transition-colors" title="Link">
                <span className="material-symbols-outlined text-[18px]">link</span>
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-8 markdown-content relative">
            <div className="absolute top-[280px] left-[60px] bg-slate-800 text-white rounded-lg shadow-xl py-1.5 px-2 flex items-center gap-1 z-30 transform -translate-y-full opacity-0 animate-[fadeIn_0.2s_ease-out_forwards]" style={{animationDelay: "1s", opacity: 1}}>
              <button className="p-1 hover:bg-slate-700 rounded transition-colors" title="Bold">
                <span className="material-symbols-outlined text-[18px]">format_bold</span>
              </button>
              <button className="p-1 hover:bg-slate-700 rounded transition-colors" title="Italic">
                <span className="material-symbols-outlined text-[18px]">format_italic</span>
              </button>
              <button className="p-1 hover:bg-slate-700 rounded transition-colors" title="Link">
                <span className="material-symbols-outlined text-[18px]">link</span>
              </button>
              <div className="w-px h-4 bg-slate-600 mx-1"></div>
              <button className="p-1 hover:bg-slate-700 rounded transition-colors text-xs font-bold px-2">H1</button>
              <button className="p-1 hover:bg-slate-700 rounded transition-colors text-xs font-bold px-2">H2</button>
            </div>
            <h1>Project Architecture</h1>
            <p className="text-slate-500 text-sm italic mb-6">Last updated by Sarah 2 mins ago</p>
            <p>This document outlines the high-level architecture for the new payment gateway integration. The system is designed to be highly available and scalable.</p>
            <h2>Core Components</h2>
            <ul>
              <li><strong>API Gateway</strong>: Handles all incoming requests and routing.</li>
              <li><strong>Auth Service</strong>: Manages user authentication and JWT tokens.</li>
              <li><strong>Payment Processor</strong>: Interfaces with Stripe/PayPal.</li>
            </ul>
            <h2>Data Flow</h2>
            <p>The <code className="bg-blue-100/50 text-blue-800 selection:bg-blue-200">PaymentRequest</code> is initiated by the client and validated by the gateway before being placed on the message queue.</p>
            <div className="my-6 p-4 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-600 font-mono">
                {`// Example payload structure`}<br/>
                &#123;<br/>
                &nbsp;&nbsp;&quot;amount&quot;: 5000,<br/>
                &nbsp;&nbsp;&quot;currency&quot;: &quot;USD&quot;,<br/>
                &nbsp;&nbsp;&quot;source&quot;: &quot;card_123&quot;<br/>
                &#125;
            </div>
            <h2>Next Steps</h2>
            <ul>
              <li>Finalize database schema for transaction logs.</li>
              <li>Set up dead letter queues for failed webhooks.</li>
            </ul>
            <br/><br/><br/>
          </div>
          <div className="absolute bottom-6 right-6">
            <button className="size-12 bg-slate-900 hover:bg-slate-800 text-white rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-105">
              <span className="material-symbols-outlined">add</span>
            </button>
          </div>
        </div>
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
      </div>
    </div>
  );
}
