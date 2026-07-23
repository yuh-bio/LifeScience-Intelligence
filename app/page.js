import Link from "next/link";

import { researchCenters } from "../data/research";

import { latestResearch } from "../data/latestResearch";



const technologies = [

{
slug:"gene-editing",
title:"🧬 Gene Editing",
description:
"基因编辑技术，包括CRISPR、Base Editing和Prime Editing。"
},


{
slug:"organoid-organ-chip",
title:"🧫 Organoid & Organ Chip",
description:
"类器官与器官芯片，用于疾病模型和药物研发。"
},


{
slug:"single-cell-sequencing",
title:"🔬 Single-cell Sequencing",
description:
"单细胞测序和空间组学解析生命复杂性。"
},


{
slug:"ai-drug-discovery",
title:"🤖 AI Drug Discovery",
description:
"人工智能驱动药物发现和精准医疗。"
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


<p>

生命科学智能平台

</p>


<p>

Biomedical Knowledge Intelligence Platform

</p>


</section>





{/* Research Centers */}


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

{item.description}

</p>


</div>


</Link>


))


}


</div>



</section>







{/* Latest Research */}



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

领域：

{item.field}

</p>



<p>

年份：

{item.year}

</p>



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







{/* AI Analyst */}



<section>


<h2>

AI Biomedical Analyst

</h2>



<Link href="/ai-analyst">


<div className="card">


<h3>

AI生命科学分析助手

</h3>


<p>

输入疾病、技术或研究方向，

AI帮助分析论文、专家、

机构和未来趋势。

</p>


</div>


</Link>


</section>





</main>


)


}
