// src/components/Achievements.jsx

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    number: 10000,
    title: "Meals Served",
  },
  {
    number: 50,
    title: "NGO Partners",
  },
  {
    number: 500,
    title: "Donors Registered",
  },
  {
    number: 15,
    title: "Cities Covered",
  },
];

export default function Achievements() {

  const sectionRef = useRef(null);

  const [counts, setCounts] = useState([0,0,0,0]);

  useEffect(()=>{

    const observer=new IntersectionObserver(
      (entries)=>{

        if(entries[0].isIntersecting){

          stats.forEach((item,index)=>{

            let start=0;

            const increment=item.number/200;

            const timer=setInterval(()=>{

              start+=increment;

              setCounts(prev=>{

                const copy=[...prev];

                copy[index]=Math.min(
                  Math.ceil(start),
                  item.number
                );

                return copy;

              });

              if(start>=item.number){

                clearInterval(timer);

              }

            },20);

          });

          observer.disconnect();

        }

      },
      {
        threshold:0.3
      }
    );

    observer.observe(sectionRef.current);

  },[]);

  return(

<section
id="achievements"
ref={sectionRef}
className="py-16 bg-gray-900 text-center px-6">

<h2 className="text-3xl font-bold text-yellow-400 mb-8">
Our Achievements
</h2>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8">

{
stats.map((item,index)=>(

<div key={index}>

<h3 className="text-4xl font-extrabold text-yellow-400">

{counts[index].toLocaleString()}

</h3>

<p className="text-gray-300 mt-2">

{item.title}

</p>

</div>

))
}

</div>

</section>

  );

}