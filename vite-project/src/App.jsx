import { useState } from 'react'
import { BarChart } from '@mui/x-charts/BarChart';

import './App.css'

function App() {
  const [textArray, setTextArray] = useState(["Formation of alliances helped spur the devastation experienced in the world war, with Germany, Austria-Hungary, the Ottoman Empire, and Bulgaria forming the Central powers, and Italy, the United States, Russia, France, and Great Britain forming the Allied powers. ",
    <>
      <p>Franz Ferdinand was the archduke of Austria-Hungary and was next in line to take the Austrian-hungarian throne. But one day, while he and his wife were travelling through Sarajevo, in Bosnia and Herzegovina, a grenade was lobbed at him by assassins supported by the Black Hand--- a secret military society---. The grenade missed and blew up the cars behind him, instead.</p>
      <br />
      <p>The assassin’s motivation behind the assassination, was to allow Bosnia and Herzegovina to be allowed to form their own state. After the attempted assassination, instead of leaving the province, the couple decided to check on the injured officers in a hospital, and while on route to the hospital, the drivers took a wrong turn and happened across an assassin who immediately shot the both of them.</p>
      <br />
      <p> The death of Franz Ferdinand, was the spark that caused the war, as shortly after Austria-Hungary declared war on Serbia --- whom they blamed for the assassination---, and the domino effect ensued, where the allies of both sides each declare war on another.</p>
    </>,
    <>
      <p>
        Trench warfare on the Western Front, stretched from the borders of Switzerland to the Belgian coast. Both Allied and the Central powers used trenches to protect their soldiers from the devastating, new technology like machine guns and artillery, that can churn soldiers into meaty chunks within seconds.

      </p>
      <br></br>
      <p>
        However, living conditions in the trenches were terrible, with water causing soldiers to be around mud constantly, causing some soldiers to contract a condition known as “trench foot”.  Diseases such as trench fever also spread easily throughout the trenches, and killed many people, along with contributing to an ever-decreasing quality of life.
      </p>
      <div className="card bg-base-100 w-4xl shadow-xl timeline-end md:mb-10 m-2 border">
        <div className="card-body">
          <div className="card-title">
            <div className="text-4xl font-black">Trenches in Context</div>
          </div>
          <p className="text-3xl">Trenches are lines dug several feet under the ground to provide cover for soldier against enemy artillery and machine guns. In between trenches is a piece of land called "No Man's Land". It is called the way it is due to the fact that it is the only thing seperating soldiers from different sides from each other, and nobody in their right mind would attempt to cross it without a direct order to attack. Trenches are build using sandbags, pieces of wood and mud, and barbed wire were often added to provide an additional defense against attacking soldiers. </p><br></br>
          <p className="text-3xl">During an attack on an enemy trench, one side will start with an artillery barrage to reduce the defenses of the enemy, and then the soldiers will leap out of their home trenche and charge across No Man's Land to the enemy trench. </p>
        </div>
      </div>
    </>,
    <>
      <p> The second Battle of Ypres is a significant battle in the early stages of WW1, as it is the first modern use of chemical weapons.</p><br></br>

      <p>The second Battle of Ypres happened in Ypres (now Ieper) Belgium, was an attempt by the Germans to shorten the Allied lines, and to hide their movement of troops to Russia. The Germans planned to utilize chlorine gas to expose a gap in the Allied lines, allowing their troops to cross. However, while the gas attack was more effective than the Germans had predicted, they failed to take the initiative and eventually the battle stalled.</p>
      <div className="stats shadow transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ">
        <div className="stat">
          <div className="stat-title text-3xl " >Ammount of people killed</div>
          <div className="stat-value text-3xl">117,748</div>
        </div>
      </div>
      <div className="stats shadow  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
        <div className="stat">
          <div className="stat-title text-3xl" >Significant for</div>
          <div className="stat-value text-3xl">First use of chemical weapons</div>
        </div>
      </div>
    </>,
    <>
      <p>
        The Battle of Verdun was one of the deadliest battles in WW1 and was an attempt by Germany to prevent the Allies from gaining the initiative in the war. The Germans chose the fortress at Verdun as their target, as they believed that it was a critical point of the French defense and is a fortress they would throw their soldiers at to defend against an attack.


      </p>
      <br></br>
      <p>     The Germans view France, Italy and Russia as the “weapons” of Britain, but the Germans also believed that France is the one of the three that pose a threat to them. As a result, to reduce the strength of the French, German General Erich Von Falkenhayn adopted a war of attrition strategy to make the French bleed manpower.
      </p>
      <br></br>
      <p>
        Unfortunately for the Germans, due to strategic blunders made by the commander in charge of the German army in Verdun, the attack failed to complete their objective of destroying the French army. In fact, the French and German army’s suffered similar amounts of casualties.
      </p>
      <div className="stats shadow transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ">
        <div className="stat">
          <div className="stat-title text-3xl " >Ammount of people killed</div>
          <div className="stat-value text-3xl">Over 700,000</div>
        </div>
      </div>
      <div className="stats shadow  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
        <div className="stat">
          <div className="stat-title text-3xl" >Significant for</div>
          <div className="stat-value text-3xl">The ammount of losses</div>
        </div>
      </div>
    </>,
    <>
      <p>
        The Russian revolution occurred during WW1 and featured the overthrowing of Tsar Nicholas II --- the last Russian Tsar --- and the establishment of a communist regime under the Bolshevik party that was led by Vladmir Lenin.  The Russian Revolution was caused by many different factors; however, the prominent ones are the failure of the Russo-Japanese war, the lack of people rights, economic issues and the failures experienced during WW1.


      </p><br></br>
      <p>
        The Russian Revolution can be split into two parts --- the February Revolution, and the October Revolution. The February Revolution began with worker riots and ended with the abdication of the Tsar. In its aftermath, two governments were set up --- the provisional government and the Soviets. The October revolution saw the overthrowing of the provisional governments as the Bolsheviks declare “all powered to the Soviets”. The revolution itself was uneventful, as the Bolsheviks simply walked into key government buildings and seized control.
      </p>
    </>,
    <>
      <p>
        The United States entry into the war is motivated by multiple different events. Most importantly, it was influenced by Germany’s use of unrestricted submarine warfare, and the Zimmerman Telegram.


      </p>
      <br></br>
      <p>
        On May 4, 1916, Germany pledged to discontinue unrestricted submarine warfare, however they soon resumed it in 1917, to speed up their attempts to choke Great Britain from supplies. Furthermore, on January 19, 1917, British Intelligence intercepted a German message to Mexico, proposing a formation of an alliance between them. The Germans promised Mexico that in return of support, they would help Mexico recover their territory lost to the U.S. during the U.S.- Mexico war. This intercepted message is known as the Zimmerman Telegram and was the last straw for the U.S., and they declared war soon after.
      </p>
    </>,
    <>
      <p>
        The battle of Cambrai was significant for being the first battle in which tanks played a big role in warfare. The Allies wanted to capture Cambrai as it was an important supply hub and would threaten the German line in the north. The battle builds on many tactics that were developed throughout the war.


      </p><br></br>
      <p>
        The British Mark IV tanks were able to achieve great success during the first day of the battle, however due to many mechanical problems and fierce resistance from artillery and infantry, half of the British Mark IV tanks was disabled by the second day.
        The British was also unable to push the attack and was driven back close to their starting positions soon after.
      </p>
      <div className="stats shadow transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ">
        <div className="stat">
          <div className="stat-title text-3xl " >Ammount of people killed</div>
          <div className="stat-value text-3xl">About 90,000</div>
        </div>
      </div>
      <div className="stats shadow  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
        <div className="stat">
          <div className="stat-title text-3xl" >Significant for</div>
          <div className="stat-value text-3xl">The First use of tanks</div>
        </div>
      </div>
    </>,
    <>
      <p>
        The treaty of Brest-Litovsk was a peace treaty signed between Russia and Germany, and saw the cessation of large pieces of territory to the latter. One of the main reasons why the peace treaty was so harsh on Russia, is because of Trotsky’s “no war no peace” blunder. The treaty worsened the new Russia governments reputation and would be one of the contributing factors leading to the Russian civil war.
      </p>
    </>,
    <>
      <p>
        The war ended with the signing of the Treaty of Versailles, and was extremely harsh on Germany. It was mostly headed by the “Big Four” --- Britain, France, the U.S., and Italy. The treaty saw the creation of the League of Nations, an international community whose mission is to promote peace across the globe, and the creation of a demilitarized zone in the Rhineland. Massive war reparations must also be paid by Germany, and severe limitations were placed on the German army. Furthermore, it also created new countries in Europe, such as Yugoslavia, and dissolved the Ottoman empire. The harsh terms on Germany will eventually contribute to the sparking of WWII.
      </p>
    </>



  ]);
  const [number, setNumber] = useState(0);
  return (
    <>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <p className='text-3xl overflow-y-auto'>{textArray[number]}</p>
          <p className="py-4 text-3xl text-red-300">Press ESC key or click the button below to close</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <ul className="timeline timeline-snap-icon timeline-horizontal w-screen">
        <li key="1998-imac">
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
          </div>
          <div className="card bg-base-100 w-4xl shadow-xl timeline-start md:mb-10 m-2">
            <figure>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/66/World_War_I_alliances.png"
                alt="AlliancesPicture" />
            </figure>
            <div className="card-body">
              <div className="card-title">
                <time className="font-mono italic text-4xl border-r-5 m-1">Before the War</time>
                <div className="text-4xl font-black">Alliances</div>
                <div className="badge badge-lg badge-primary">Context</div>
              </div>
              <p className="text-4xl line-clamp-3">{textArray[0]}</p>
              <button className="btn" onClick={() => { document.getElementById('my_modal_1').showModal(); setNumber(0); }}>open modal</button>
            </div>
          </div>
          <hr />
        </li>
        <li key="1998-imac-description">
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
          </div>
          <div className="card bg-base-100 w-4xl shadow-xl timeline-end md:mb-10 m-2">
            <figure>
              <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/DC-1914-27-d-Sarajevo-cropped.jpg/360px-DC-1914-27-d-Sarajevo-cropped.jpg"
                    className="w-full h-96 object-contain" />
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                  </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Franz_ferdinand.jpg/242px-Franz_ferdinand.jpg"
                    className="w-full h-96 object-contain" />
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                  </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Sophie%2C_Duchess_of_Hohenberg_1868.jpg/230px-Sophie%2C_Duchess_of_Hohenberg_1868.jpg"
                    className="w-full h-96 object-contain" />
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                  </div>
                </div>
              </div>

            </figure>
            <div className="card-body">
              <div className="card-title">
                <time className="font-mono italic text-4xl border-r-5 m-1">June 28, 1914</time>
                <div className="text-4xl font-black">Outbreak of War: Assasination of Franz Ferdinand</div>
                <div className="badge badge-lg badge-primary">Event</div>
              </div>
              <p className="text-4xl line-clamp-3">{textArray[1]}</p>
              <button className="btn" onClick={() => { document.getElementById('my_modal_1').showModal(); setNumber(1); }}>open modal</button>
            </div>
          </div>
          <hr />
        </li>
        <li key="trench-warfare">
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
          </div>
          <div className="card bg-base-100 w-4xl shadow-xl timeline-start md:mb-10 m-2">
            <figure>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Aerial_Photography_on_the_Western_Front%2C_1916._HU100394.jpg/450px-Aerial_Photography_on_the_Western_Front%2C_1916._HU100394.jpg" className="object-cover" />
            </figure>
            <div className="card-body">
              <div className="card-title">
                <time className="font-mono italic text-4xl border-r-5 m-1">September 1914</time>
                <div className="text-4xl font-black">Trench Warfare</div>
                <div className="badge badge-lg badge-primary">Event</div>
              </div>
              <p className="text-4xl line-clamp-3">{textArray[2]}</p>

              <button className="btn" onClick={() => { document.getElementById('my_modal_1').showModal(); setNumber(2); }}>open modal</button>
            </div>
          </div>
          <hr />
        </li>
        <li key="2001-ipod">
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
          </div>
          <div className="card bg-base-100 w-4xl shadow-xl timeline-end md:mb-10 m-2 ">
            <figure className="border">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/RJB18_%E2%80%93_Ypernbogen.jpg/375px-RJB18_%E2%80%93_Ypernbogen.jpg" />
              <figcaption className="text-3xl">The German map showing the new frontlines after the second Battle of Ypres</figcaption>
            </figure>
            <div className="card-body">
              <div className="card-title">
                <time className="font-mono italic text-4xl border-r-5 m-1">April 22,1915</time>
                <div className="text-4xl font-black">Second Battle of Ypres</div>
                <div className="badge badge-lg badge-primary">Battle</div>
              </div>
              <p className="text-4xl line-clamp-3">{textArray[3]}</p>

              <button className="btn" onClick={() => { document.getElementById('my_modal_1').showModal(); setNumber(3); }}>open modal</button>
            </div>
          </div>
          <hr />
        </li>
        <li key="2007-iphone">
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
          </div>
          <div className="card bg-base-100 w-4xl shadow-xl timeline-start md:mb-10 m-2">
            <figure className='border'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Battle_of_Verdun_map.png/375px-Battle_of_Verdun_map.png" />
              <figcaption className="text-4xl">The map of the battle</figcaption>
            </figure>
            <div className="card-body">
              <div className="card-title">
                <time className="font-mono italic text-4xl border-r-5 m-1">21 February, 1916- 15 December, 1916</time>
                <div className="text-4xl font-black">The Battle of Verdun</div>
                <div className="badge badge-lg badge-primary">Battle</div>
              </div>
              <p className="text-4xl line-clamp-3">{textArray[4]}</p>
              <button className="btn" onClick={() => { document.getElementById('my_modal_1').showModal(); setNumber(4); }}>open modal</button>
            </div>
          </div>
          <hr />
        </li>
        <li key="2015-apple-watch">
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
          </div>
          <div className="card bg-base-100 w-4xl shadow-xl timeline-end md:mb-10 m-2">
            <figure>
              <div className="carousel w-full h-128">
                <div id="slide4" className="carousel-item relative w-full">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7c/%D0%9C%D0%B8%D1%82%D0%B8%D0%BD%D0%B3_%D0%BD%D0%B0_%D0%9D%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%BC_%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82%D0%B5_%281917%29.jpg"
                    className="w-full object-contain" />
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide6" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                  </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/f7/19170704_Riot_on_Nevsky_prosp_Petrograd.jpg"
                    className="w-full" />
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                  </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d9/U_Narvskikh_vorot.jpg"
                    className="w-full" />
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                  </div>
                </div>
              </div>

            </figure>
            <div className="card-body">
              <div className="card-title">
                <time className="font-mono italic text-4xl border-r-5 m-1">8 March, 1917 - 7 Novermber, 1917</time>
                <div className="text-4xl font-black">Russian Revolution</div>
                <div className="badge badge-lg badge-primary">Event</div>
              </div>
              <p className="text-4xl line-clamp-3">{textArray[5]}</p>
              <button className="btn" onClick={() => { document.getElementById('my_modal_1').showModal(); setNumber(5); }}>open modal</button>
            </div>
          </div>
          <hr />
        </li>
        <li key="2016-apple-watch">
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
          </div>
          <div className="card bg-base-100 w-4xl shadow-xl timeline-start md:mb-10 m-2">
            <figure className = "h-96">
              <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/President_Woodrow_Wilson_asking_Congress_to_declare_war_on_Germany%2C_2_April_1917.jpg/2560px-President_Woodrow_Wilson_asking_Congress_to_declare_war_on_Germany%2C_2_April_1917.jpg" className = "object-cover"/>
            </figure>
            <div className="card-body">
              <div className="card-title">
                <time className="font-mono italic text-4xl border-r-5 m-1">April 6, 1917</time>
                <div className="text-4xl font-black">U.S. entry into the war</div>
                <div className="badge badge-lg badge-primary">Event</div>
              </div>
              <p className="text-4xl line-clamp-3">{textArray[6]}</p>
              <button className="btn" onClick={() => { document.getElementById('my_modal_1').showModal(); setNumber(6); }}>open modal</button>
            </div>
          </div>
          <hr />
        </li>
        <li key="2030-apple-watch">
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
          </div>
          <div className="card bg-base-100 w-4xl shadow-xl timeline-end md:mb-10 m-2">
            <figure className = "h-96">
              <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Bundesarchiv_Bild_104-0941A%2C_Bei_Cambrai%2C_zerst%C3%B6rter_englischer_Panzer_Mark_I.jpg/450px-Bundesarchiv_Bild_104-0941A%2C_Bei_Cambrai%2C_zerst%C3%B6rter_englischer_Panzer_Mark_I.jpg" className = "object-cover"/>
            </figure>
            <div className="card-body">
              <div className="card-title">
                <time className="font-mono italic text-4xl border-r-5 m-1">Nov 20, 1917-Dec 6, 1917</time>
                <div className="text-4xl font-black">The Battle of Cambrai </div>
                <div className="badge badge-lg badge-primary">Event</div>
              </div>
              <p className="text-4xl line-clamp-3">{textArray[7]}</p>
              <button className="btn" onClick={() => { document.getElementById('my_modal_1').showModal(); setNumber(7); }}>open modal</button>
            </div>
          </div>
          <hr />
        </li>
        <li key="2017-apple-watch">
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
          </div>
          <div className="card bg-base-100 w-4xl shadow-xl timeline-start md:mb-10 m-2">
            <figure className = "border">
              <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Traktat_brzeski_1918.jpg/450px-Traktat_brzeski_1918.jpg"/>
              <figcaption className = "text-2xl">First page of the treaty of Brest-Litovsk</figcaption>
            </figure>
            <div className="card-body">
              <div className="card-title">
                <time className="font-mono italic text-4xl border-r-5 m-1">March 3, 1918</time>
                <div className="text-4xl font-black">Treaty of Brest-Litovsk </div>
                <div className="badge badge-lg badge-primary">Event</div>
              </div>
              <p className="text-4xl line-clamp-3">{textArray[8]}</p>
              <button className="btn" onClick={() => { document.getElementById('my_modal_1').showModal(); setNumber(8); }}>open modal</button>
            </div>
          </div>
          <hr />
        </li>
        <li key="2018-apple-watch">
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
          </div>
          <div className="card bg-base-100 w-4xl shadow-xl timeline-end md:mb-10 m-2">
            <figure className = "h-96">
              <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Big_four.jpg/2560px-Big_four.jpg" className = "object-contain"/>
            </figure>
            <div className="card-body">
              <div className="card-title">
                <time className="font-mono italic text-4xl border-r-5 m-1">June 28, 1919</time>
                <div className="text-4xl font-black">The Treaty of Versailles </div>
                <div className="badge badge-lg badge-primary">Event</div>
              </div>
              <p className="text-4xl line-clamp-3">{textArray[9]}</p>
              <button className="btn" onClick={() => { document.getElementById('my_modal_1').showModal(); setNumber(9); }}>open modal</button>
            </div>
          </div>
          <hr />
        </li>
      </ul>
    </>
  )
}

export default App
