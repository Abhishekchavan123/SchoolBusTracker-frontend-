// src/components/Gallery.jsx

const images = [

"https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80",

"https://images.unsplash.com/photo-1606851091671-3c28b6c66eb3?auto=format&fit=crop&w=800&q=80",

"https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80",

"https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80",

];

export default function Gallery(){

return(

<section
id="moments"
className="py-16 bg-gray-800 overflow-hidden">

<h2 className="text-3xl font-bold text-yellow-400 text-center mb-10">

Memorable Moments

</h2>

<div className="overflow-hidden">

<div className="flex animate-scroll w-max">

{

[...images,...images].map((img,index)=>(

<img

key={index}

src={img}

alt=""

className="w-64 h-40 object-cover rounded-xl mr-5 shadow-lg"

/>

))

}

</div>

</div>

<style>{`

@keyframes scroll{

0%{

transform:translateX(0);

}

100%{

transform:translateX(-50%);

}

}

.animate-scroll{

animation:scroll 20s linear infinite;

}

`}</style>

</section>

);

}