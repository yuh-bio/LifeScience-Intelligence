import Link from "next/link";

import {papers} from "../../data/papers";



export default function Papers(){


return (

<main className="container">


<section className="header">


<h1>
Research Papers
</h1>


<h3>
LifeScience Intelligence Literature Database
</h3>


<p>
生命科学论文智能数据库
</p>


</section>





<section>


<div className="grid">


{

papers.map((paper,index)=>(


<Link

href={`/papers/${paper.slug}`}

key={index}

>


<div className="card">


<h3>

{paper.title}

</h3>


<p>

作者：

{paper.authors}

</p>


<p>

期刊：

{paper.journal}

</p>


<p>

年份：

{paper.year}

</p>


<p>

研究方向：

{paper.field}

</p>


</div>


</Link>


))


}


</div>


</section>


</main>


)

}
