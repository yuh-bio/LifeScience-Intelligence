import { technologies } from "../../../data/technologies";


export default function TechnologyPage({params}){


const technology = technologies.find(

(item)=>item.slug===params.slug

);



if(!technology){

return (

<main className="container">

<h1>
技术不存在
</h1>

</main>

)

}



return (

<main className="container">



<section className="header">


<h1>

{technology.title}

</h1>


<h3>

{technology.english}

</h3>


<p>

{technology.description}

</p>


</section>






<section>


<h2>
技术原理
</h2>


<div className="card">

<p>

{technology.principle}

</p>

</div>


</section>






<section>


<h2>
发展历史
</h2>


<div className="card">

<p>

{technology.history}

</p>

</div>


</section>







<section>


<h2>
核心方法
</h2>


<div className="grid">


{

technology.methods?.map((method,index)=>(


<div

className="card"

key={index}

>


<h3>

{method}

</h3>


<p>

核心技术方向

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

technology.applications?.map((application,index)=>(


<div

className="card"

key={index}

>


<h3>

{application}

</h3>


<p>

生命科学实际应用场景

</p>


</div>


))


}


</div>


</section>







<section>


<h2>
代表论文
</h2>


<div className="grid">


{

technology.papers?.map((paper,index)=>(


<div

className="card"

key={index}

>


<h3>

{paper.title}

</h3>


<p>

来源：
{paper.source}

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
未来趋势
</h2>


<div className="card">


<p>

未来生命科学技术将进一步结合人工智能、
多组学分析和精准医疗。

</p>


</div>


</section>



</main>


)


}
