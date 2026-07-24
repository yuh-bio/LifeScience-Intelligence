import {papers} from "../../../data/papers";



export default function PaperDetail({params}){


const paper = papers.find(

(item)=>item.slug === params.slug

);



if(!paper){


return (

<main className="container">


<h1>

Paper Not Found

</h1>


</main>

)

}




return (

<main className="container">



<section className="header">


<h1>

{paper.title}

</h1>


<p>

{paper.field}

</p>


</section>







<section>


<div className="card">


<h2>
Paper Information
</h2>



<p>

<strong>
Authors:
</strong>

<br/>

{paper.authors}

</p>



<p>

<strong>
Journal:
</strong>

<br/>

{paper.journal}

</p>




<p>

<strong>
Publication Year:
</strong>

<br/>

{paper.year}

</p>





<p>

<strong>
DOI:
</strong>

<br/>

{paper.doi}

</p>




<p>

<strong>
Technology:
</strong>

<br/>

{paper.technology}

</p>



</div>


</section>







<section>


<div className="card">


<h2>

Research Summary

</h2>


<p>

{paper.summary}

</p>


</div>


</section>






<section>


<div className="card">


<h2>

LifeScience Intelligence Analysis

</h2>


<p>

该研究属于：

{paper.field}

领域。

相关技术：

{paper.technology}

。

未来可结合人工智能、
多组学分析和精准医学进一步发展。

</p>


</div>


</section>





</main>


)

}
