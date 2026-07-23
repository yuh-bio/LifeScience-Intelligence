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


<div className="card">

<p>
Future research intelligence module.
</p>

<p>
论文摘要、研究总结将在这里展示。
</p>


</div>


</section>



<section>

<h2>
专家与研究机构
</h2>


<div className="card">

<p>
专家数据库模块
</p>

<p>
大学、医院、研究所信息模块
</p>


</div>


</section>


</main>

)

}
