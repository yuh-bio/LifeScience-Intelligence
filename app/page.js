import Link from "next/link";
import { researchCenters } from "../data/research";


export default function Home() {

  return (

    <main className="container">


      <section className="header">

        <h1>
          LifeScience Intelligence
        </h1>

        <p>
          生命科学智能平台 |
          Biomedical Knowledge Intelligence Platform
        </p>

      </section>



      <section>

        <h2>
          六大生命科学中心
        </h2>


        <div className="grid">


        {researchCenters.map((item,index)=>(

         <Link
  href={`/research/${item.slug}`}
  key={index}
>

  <div className="card">

    <h3>
      {item.title}
    </h3>


    <p>
      {item.subtitle}
    </p>


    <p>
      {item.description}
    </p>


  </div>

</Link>


        ))}


        </div>


      </section>



      <section>

        <h2>
          Technology Radar
        </h2>

        <div className="card">

          <p>
            🧬 Gene Editing
          </p>

          <p>
            🧫 Organoid & Organ Chip
          </p>

          <p>
            🔬 Single-cell Sequencing
          </p>

          <p>
            🤖 AI Drug Discovery
          </p>

        </div>


      </section>



      <section>

        <h2>
          AI Biomedical Analyst
        </h2>

        <div className="card">

          <p>
            AI辅助生命科学研究分析入口。
          </p>

        </div>


      </section>


    </main>

  );

}
