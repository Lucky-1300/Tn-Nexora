import { useNavigate } from "react-router-dom";

function ErrorPage({ code, title, message, emoji }) {
const navigate = useNavigate();

return (

<div className="min-h-screen flex items-center justify-center 
bg-[#020617] relative overflow-hidden">


<div className="absolute top-20 left-20 w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
<div className="absolute bottom-20 right-20 w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
<div className="absolute top-40 right-40 w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
<div className="absolute bottom-32 left-1/3 w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>



{/* subtle background light */}
<div className="absolute inset-0 
bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10">
</div>

{/* circles */}
<div className="absolute w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full top-10 left-10"></div>
<div className="absolute w-72 h-72 bg-purple-500/20 blur-3xl rounded-full bottom-10 right-10"></div>

<div className="relative w-[420px]">

<div className="p-[1px] rounded-3xl 
bg-gradient-to-r from-indigo-500 to-purple-500">

<div className="rounded-3xl bg-[#020617]/80 backdrop-blur-xl 
text-white text-center px-8 py-8 shadow-2xl
hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]
transition-all duration-500">

<h1 className="text-7xl font-bold 
bg-gradient-to-r from-indigo-400 to-purple-400 
bg-clip-text text-transparent">
{code}
</h1>

<h3 className="mt-2 text-lg text-white/90">
{title}
</h3>

<div className="w-24 h-24 mx-auto my-6 rounded-2xl 
bg-gradient-to-br from-indigo-500 to-purple-500 
flex items-center justify-center text-6xl shadow-xl">
{emoji}
</div>

<p className="text-sm text-white/60 leading-relaxed">
{message}
</p>

<button
onClick={()=>navigate("/")}
className="mt-7 px-8 py-3 rounded-lg
bg-gradient-to-r from-indigo-500 to-purple-500
transition-all duration-300
hover:shadow-[0_0_20px_rgba(99,102,241,0.6)]
hover:ring-2 hover:ring-indigo-400/50
hover:scale-105"
> 
GoHome
</button>


<div className="flex justify-between mt-6 text-white/30 text-xl">
<span>←</span>
<span>→</span>
</div>

</div>
</div>

</div>
</div>
);
}

export default ErrorPage;