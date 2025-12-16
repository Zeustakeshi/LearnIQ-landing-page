
export default function ListItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3 text-stone-700 font-medium">
       <div className="w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center text-green-500 text-xs font-bold">✓</div>
       {text}
    </li>
  )
}
