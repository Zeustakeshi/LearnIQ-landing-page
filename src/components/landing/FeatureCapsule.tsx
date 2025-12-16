import React from 'react';

export default function FeatureCapsule({ icon, title, color }: { icon: React.ReactNode, title: string, color: string }) {
   return (
      <div className={`p-6 rounded-2xl ${color} flex flex-col items-center justify-center gap-3 text-center aspect-square transition-transform hover:scale-105 cursor-default`}>
         {icon}
         <span className="font-semibold text-stone-700 text-sm">{title}</span>
      </div>
   )
}
