export function MarkdownEditor() {
  return (
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
  );
}
