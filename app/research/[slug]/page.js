import { researchCenters } from "../../../data/research";


export default function ResearchPage({params}){


const research = researchCenters.find(
(item)=>item.slug===params.slug
);


if(!research){

return <div className="container">
页面不存在
</div>

}


return (

<main className="container">


<h1>
{research.title}
</h1>


<h3>
{research.subtitle}
</h3>


<p>
{research.description}
</p>



<section>

<h2>
核心技术
</h2>


<div className="card">

<ul>

{research.topics.map((topic,index)=>(

<li key={index}>
{topic}
</li>

))}


</ul>

</div>


</section>



<section>

<h2>
最新研究与论文
</h2>


<div className="grid">

{research.papers?.map((paper,index)=>(

<div className="card" key={index}>

<h3>
{paper.title}
</h3>

<p>
年份：{paper.year}
</p>

<p>
{paper.summary}
</p>

</div>

))}

</div>


</section>

<section>

<h2>
专家与科学家
</h2>


<div className="grid">

{research.experts?.map((expert,index)=>(

<div className="card" key={index}>

<h3>
{expert.name}
</h3>

<p>
研究方向：
{expert.field}
</p>

</div>

))}

</div>

</section>
<section>

<h2>
代表机构
</h2>


<div className="grid">

{research.institutions?.map((institution,index)=>(

<div className="card" key={index}>

<h3>
{institution}
</h3>

</div>

))}

</div>

</section>
<section>

<h2>
技术应用案例
</h2>


<div className="grid">

{research.applications?.map((app,index)=>(

<div className="card" key={index}>

<p>
{app}
</p>

</div>

))}

</div>

</section>
