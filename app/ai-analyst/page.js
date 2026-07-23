"use client";


import {useState} from "react";



export default function AIAnalyst(){


const [query,setQuery]=useState("");

const [result,setResult]=useState(null);



function analyze(){


setResult({

topic:query,


keywords:[

"Precision Medicine",

"Clinical Research",

"Biomedical AI"

],


papers:[

"Recent advances in biomedical research",

"Emerging therapeutic strategies"

],


experts:[

"Leading Biomedical Scientists",

"Clinical Research Experts"

],


institutions:[

"Harvard Medical School",

"Stanford Medicine",

"Leading Research Institutes"

],


trend:

"AI + Multi-omics + Precision Medicine will continue shaping future biomedical innovation."


});


}





return (


<main className="container">


<section className="header">


<h1>

AI Biomedical Analyst

</h1>


<p>

生命科学智能分析助手

</p>


</section>





<section>


<h2>

输入研究问题

</h2>



<div className="card">


<input


value={query}


onChange={(e)=>setQuery(e.target.value)}


placeholder="例如：MASH最新治疗进展"


style={{

width:"100%",

padding:"15px",

fontSize:"18px"

}}


/ />


<br/><br/>



<button

onClick={analyze}

style={{

padding:"12px 25px",

fontSize:"16px"

}}

>

开始分析

</button>



</div>


</section>








{

result &&


<>

<section>


<h2>

研究主题

</h2>


<div className="card">


<h3>

{result.topic}

</h3>


</div>


</section>






<section>


<h2>

核心关键词

</h2>


<div className="grid">


{

result.keywords.map((item,index)=>(


<div

className="card"

key={index}

>

{item}

</div>


))


}


</div>


</section>







<section>


<h2>

关键论文

</h2>


<div className="grid">


{

result.papers.map((item,index)=>(


<div

className="card"

key={index}

>

{item}

</div>


))


}


</div>


</section>







<section>


<h2>

代表专家

</h2>


<div className="grid">


{

result.experts.map((item,index)=>(


<div

className="card"

key={index}

>

{item}

</div>


))


}


</div>


</section>







<section>


<h2>

研究机构

</h2>


<div className="grid">


{

result.institutions.map((item,index)=>(


<div

className="card"

key={index}

>

{item}

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

{result.trend}

</p>


</div>


</section>



</>


}



</main>


)


}
