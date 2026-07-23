import Link from "next/link";

import { researchCenters } from "../data/research";

import { latestResearch } from "../data/latestResearch";


const technologies=[

{
slug:"gene-editing",
title:"🧬 Gene Editing",
desc:"CRISPR、Base Editing、Prime Editing等精准基因工程技术"
},

{
slug:"organoid-organ-chip",
title:"🧫 Organoid & Organ Chip",
desc:"人体疾病模型和药物筛选的新一代平台"
},

{
slug:"single-cell-sequencing",
title:"🔬 Single-cell Sequencing",
desc:"解析细胞异质性的单细胞和空间组学技术"
},

{
slug:"ai-drug-discovery",
title:"🤖 AI Drug Discovery",
desc:"人工智能驱动的新药发现和设计"
}

];



export default function Home(){


return (

<main className="container">



{/* Hero */}


<section className="header">


<h1>

LifeScience Intelligence

</h1>


<h2>

Biomedical Knowledge Intelligence Platform

</h2>


<p>

连接生命科学研究、
人工智能、
专家网络与全球创新机构。

</p>


</section>






{/* Metrics */}


<section>


<div className="grid">


<div className="card">

<h2>
10,000+
</h2>

<p>
Scientific Papers
</p>

</div>



<div className="card">

<h2>
500+
</h2>

<p>
Global Experts
</p>

</div>



<div className="card">

<h2>
100+
</h2>

<p>
Research Institutions
</p>

</div>



<div className="card">

<h2>
6
</h2>

<p>
Life Science Domains
</p>

</div>


</div>


</section>







{/* Research Domains */}



<section>


<h2>

六大生命科学中心

</h2>


<div className="grid">


{

researchCenters.map((item,index)=>(


<Link

href={`/research/${item.slug}`}

key={index}

>


<div className="card">


<h3>

{item.title}

</h3>


<p>

{item.subtitle}

</p>


<p>

{item.description}

</p>


</div>


</Link>


))


}


</div>


</section>







{/* Technology Radar */}



<section>


<h2>

Technology Radar

</h2>


<div className="grid">


{

technologies.map((item,index)=>(


<Link

href={`/technology/${item.slug}`}

key={index}

>


<div className="card">


<h3>

{item.title}

</h3>


<p>

{item.desc}

</p>


</div>


</Link>


))


}


</div>


</section>







{/* Research Intelligence */}



<section>


<h2>

Latest Research Intelligence

</h2>



<div className="grid">


{

latestResearch.map((item,index)=>(


<div

className="card"

key={index}

>


<h3>

{item.title}

</h3>


<p>

{item.summary}

</p>


<p>

来源：

{item.source}

</p>


</div>


))


}


</div>


</section>







{/* AI */}



<section>


<Link href="/ai-analyst">


<div className="card">


<h2>

AI Biomedical Analyst

</h2>


<p>

输入疾病、
技术或研究方向，

AI帮助发现：

论文、
专家、
机构、
趋势。

</p>


</div>


</Link>


</section>




</main>


)

}
