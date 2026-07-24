import { researchCenters } from "../../../data/research";


export default function ResearchPage({params}) {


const research = researchCenters.find(
(item)=>item.slug === params.slug
);



if(!research){

return (

<main className="container">

<h1>
页面不存在
</h1>

</main>

);

}



return (

<main className="container">


<section className="header">

<h1>
{research.title}
</h1>


<h3>
{research.subtitle}
</h3>


<p>
{research.description}
</p>

</section>




<section>

<h2>
核心技术
</h2>


<div className="grid">


{

research.topics?.map((topic,index)=>(

<div
className="card"
key={index}
>

<h3>
{topic}
</h3>

<p>
生命科学核心技术方向
</p>


</div>

))


}


</div>

</section>





<section>

<h2>
最新研究与论文
</h2>


<div className="grid">


{

research.papers?.map((paper,index)=>(


<div
className="card"
key={index}
>


<h3>
{paper.title}
</h3>


<p>
年份：
{paper.year}
</p>


<p>
{paper.summary}
</p>


</div>


))


}


</div>

</section>





<section>

<h2>
领域专家
</h2>


<div className="grid">


{

research.experts?.map((expert,index)=>(


<div
className="card"
key={index}
>


<h3>
{expert.name}
</h3>


<p>
研究方向：
{expert.field}
</p>


</div>


))


}


</div>

</section>





<section>

<h2>
代表机构
</h2>


<div className="grid">


{

research.institutions?.map((institution,index)=>(


<div
className="card"
key={index}
>


<h3>
{institution}
</h3>


<p>
University / Hospital / Research Institute
</p>


</div>


))


}


</div>

</section>






<section>

<h2>
应用案例
</h2>


<div className="grid">


{

research.applications?.map((app,index)=>(


<div
className="card"
key={index}
>


<h3>
{app}
</h3>


<p>
生命科学应用场景
</p>


</div>


))


}


</div>


</section>





<section>

<h2>
未来趋势
</h2>


<div className="card">


<p>

未来生命科学将结合：

AI、
多组学、
精准医疗，

推动下一代医学创新。

</p>


</div>


</section>



</main>

);


}
