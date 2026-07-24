import Link from "next/link";


export default function Navbar(){


return (

<nav>


<div>


<Link href="/">

<h2>

LifeScience Intelligence

</h2>

</Link>


</div>





<div className="nav-links">


<Link href="/">

首页

</Link>



<Link href="/research/stem-cell">

生命科学领域

</Link>



<Link href="/technology/gene-editing">

技术库

</Link>



<Link href="/papers">

论文库

</Link>



<Link href="/experts">

专家库

</Link>



<Link href="/ai-analyst">

AI Analyst

</Link>



</div>


</nav>


)

}
