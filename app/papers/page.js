import {papers} from "../../data/papers";


export default function Papers(){


return (

<main className="container">


<section className="header">


<h1>
Research Papers
</h1>


<p>
生命科学论文数据库
</p>


</section>



<section>


<div className="grid">


{

papers.map((paper,index)=>(


<div

className="card"

key={index}

>


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
领域：
{paper.field}
</p>


<p>
DOI：
{paper.doi}
</p>



</div>


))


}


</div>


</section>


</main>


)

}
