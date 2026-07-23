import Link from "next/link";

import { researchCenters } from "../data/research";

import { latestResearch } from "../data/latestResearch";


export default function Home() {


  return (

    <main className="container">


      {/* Hero */}

      <section className="header">

        <h1>
          LifeScience Intelligence
        </h1>


        <p>
          生命科学智能平台 |
          Biomedical Knowledge Intelligence Platform
        </p>


        <p>
          探索生命科学前沿技术、研究突破、
          专家与机构网络
        </p>


      </section>



      {/* Research Centers */}

      <section>


        <h2>
          六大生命科学中心
        </h2>


        <div className="grid">


        {
        researchCenters.map((item,index)=>(


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


        ))

        }


        </div>


      </section>





      {/* Technology Radar */}


      <section>


        <h2>

          Technology Radar

        </h2>


        <div className="grid">


          <div className="card">

            <h3>
              🧬 Gene Editing
            </h3>

            <p>
              基因编辑技术原理、
              临床应用与未来发展。
            </p>

          </div>



          <div className="card">

            <h3>
              🧫 Organoid & Organ Chip
            </h3>

            <p>
              类器官和器官芯片技术，
              用于疾病模型和药物筛选。
            </p>

          </div>



          <div className="card">

            <h3>
              🔬 Single-cell Sequencing
            </h3>

            <p>
              单细胞测序解析细胞异质性。
            </p>

          </div>



          <div className="card">

            <h3>
              🤖 AI Drug Discovery
            </h3>

            <p>
              AI驱动药物发现和分子设计。
            </p>

          </div>


        </div>


      </section>





      {/* Latest Research */}


      <section>


        <h2>

          Latest Research Intelligence

        </h2>


        <div className="grid">


        {

        latestResearch.map((item,index)=>(


          <div

          className="card"

          key={index}

          >


            <h3>

              {item.title}

            </h3>


            <p>

              领域：
              {item.field}

            </p>


            <p>

              年份：
              {item.year}

            </p>


            <p>

              {item.summary}

            </p>


            <small>

              来源：
              {item.source}

            </small>


          </div>


        ))

        }


        </div>


      </section>





      {/* AI Analyst */}


      <section>


        <h2>

          AI Biomedical Analyst

        </h2>


        <div className="card">


          <h3>

            AI生命科学分析助手

          </h3>


          <p>

            输入疾病、技术或研究方向，
            AI帮助整理论文、
            专家、机构和研究趋势。

          </p>


        </div>


      </section>




    </main>

  );


}
