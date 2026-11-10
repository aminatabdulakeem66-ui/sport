import React from 'react';
import { CheckCircle2, Info, X } from 'lucide-react';
import { useShowcase } from '../context/ShowcaseContext';

export const NotificationToast = () => {
  const { toastMessage, setToastMessage } = useShowcase();

  if (!toastMessage) return null;

  const isInfo = toastMessage.type === 'info';

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom duration-300">
      <div className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl shadow-2xl text-white border text-sm max-w-sm ${
        isInfo 
          ? 'bg-[#151515] border-gray-700' 
          : 'bg-[#103D35] border-[#D2B779]/40'
      }`}>
        {isInfo ? (
          <Info className="w-5 h-5 text-sky-400 shrink-0" />
        ) : (
          <CheckCircle2 className="w-5 h-5 text-[#D2B779] shrink-0" />
        )}
        <p className="font-medium text-xs sm:text-sm flex-1 leading-snug">
          {toastMessage.message}
        </p>
        <button
          onClick={() => setToastMessage(null)}
          className="p-1 hover:bg-white/10 rounded-lg text-white/70 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
