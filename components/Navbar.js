import Link from "next/link";


export default function Navbar(){


return (

<nav
style={{

display:"flex",

justifyContent:"space-between",

alignItems:"center",

padding:"20px 40px",

background:"#ffffff",

borderBottom:"1px solid #e5e7eb"

}}
>


<div>


<Link href="/">

<h2>

LifeScience Intelligence

</h2>

</Link>


</div>





<div

style={{

display:"flex",

gap:"25px"

}}

>


<Link href="/">

首页

</Link>


<Link href="/research/stem-cell">

生命科学领域

</Link>



<Link href="/technology/gene-editing">

技术库

</Link>



<Link href="/">

最新研究

</Link>



<Link href="/ai-analyst">

AI Analyst

</Link>



</div>


</nav>


)


}
