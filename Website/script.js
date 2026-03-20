const timelineEvents = {
  poland: {
    date: "September 1939",
    title: "Invasion of Poland",
    image: "pdf_images/pdf-image-12.png",
    imageClass: "portrait-frame",
    alt: "Nazi German leaders and soldiers at a military rally during the period of German expansion.",
    summary:
      "On September 1, 1939, Germany invaded Poland and launched the war in Europe. German forces used Blitzkrieg, or \"lightning war,\" which combined tanks, motorized troops, and aircraft to attack quickly and break through defenses before Poland could fully respond. The Luftwaffe bombed railways, bridges, and cities, while German troops pushed in from several directions. Poland fought back, but its army was not prepared for the speed and coordination of the German assault. On September 17, the Soviet Union invaded from the east under the secret terms of the Nazi-Soviet Pact, leaving Poland trapped between two invading powers. By early October, organized resistance had largely ended and Poland was divided between Germany and the Soviet Union.",
    why: "The invasion of Poland is widely seen as the official beginning of World War II because Britain and France declared war on Germany soon afterward. It also revealed how effective German modern warfare tactics could be against countries still relying on slower, more traditional methods of defense. The attack showed that Hitler was willing to ignore diplomacy and openly use force to expand German territory.",
    takeaway:
      "Poland showed the world how powerful Blitzkrieg could be in the early years of the war. It also demonstrated how international agreements, like the Nazi-Soviet Pact, could temporarily benefit aggressors while devastating smaller nations. Most importantly, it marked the start of a much larger conflict that would soon spread across Europe."
  },
  denmarkNorway: {
    date: "April 1940",
    title: "Denmark and Norway",
    image: "pdf_images/pdf-image-16.png",
    imageClass: "wide-frame",
    alt: "German soldiers marching on a road in Denmark during the 1940 invasion.",
    summary:
      "In April 1940, Germany launched Operation Weserubung and invaded Denmark and Norway. Denmark surrendered almost immediately because it had little ability to resist a full-scale German attack. Norway fought longer, and Allied troops from Britain and France attempted to help defend it, but Germany eventually captured key ports, cities, and transport routes. Germany used a combination of naval landings, airborne troops, and air attacks to seize control. Norway's long coastline and northern position made the campaign especially important. By June 1940, German forces had secured both countries and removed most Allied influence from the region.",
    why: "This campaign mattered because Germany wanted to protect shipments of Swedish iron ore that traveled through Norway and were essential for German steel production and war manufacturing. Control of Norway also gave Germany access to naval and air bases that could threaten Allied shipping in the North Sea and Atlantic. In addition, the invasion showed Germany's ability to carry out coordinated attacks across land, sea, and air.",
    takeaway:
      "The invasions of Denmark and Norway prove that expansion was not only about conquering land for prestige; it was also about securing resources, trade routes, and military position. Germany strengthened its economic and strategic power while weakening the Allies in northern Europe."
  },
  france: {
    date: "May-June 1940",
    title: "Low Countries and France",
    image: "pdf_images/pdf-image-19.png",
    imageClass: "portrait-frame",
    alt: "Adolf Hitler and German officials in Paris after the defeat of France.",
    summary:
      "In May 1940, Germany invaded Belgium, the Netherlands, and Luxembourg as part of a larger offensive against France. Instead of attacking the French Maginot Line directly, German commanders sent major forces through the Ardennes Forest, an area the Allies believed was too difficult for a large mechanized attack. This surprise move allowed German troops to break through defenses, split Allied armies, and trap many British and French soldiers. The evacuation at Dunkirk rescued many Allied troops, but France continued to collapse under German pressure. By June 1940, Paris had fallen and France signed an armistice. Northern France came under German occupation while the Vichy government ruled the south in cooperation with Germany.",
    why: "The defeat of France was one of Germany's greatest victories and completely changed the balance of power in Europe. France had been considered one of the strongest military powers on the continent, so its rapid collapse shocked the world. Germany now controlled much of western Europe and forced Britain to continue the war largely alone.",
    takeaway:
      "This campaign showed the value of speed, surprise, and attacking where the enemy feels safest. It also proved that strong fortifications do not guarantee protection if an opponent can outmaneuver them. Germany's expansion reached its peak in western Europe after France fell."
  },
  britain: {
    date: "July-October 1940",
    title: "Battle of Britain",
    image: "pdf_images/pdf-image-22.png",
    imageClass: "landscape-frame",
    alt: "British fighter planes lined up during the Battle of Britain.",
    summary:
      "After France surrendered, Hitler hoped Britain would negotiate peace, but when that did not happen Germany prepared for a possible invasion. Before invading, Germany needed to destroy the Royal Air Force and gain control of the skies. Beginning in the summer of 1940, the Luftwaffe attacked British airfields, radar stations, aircraft factories, and later major cities. This air campaign became known as the Battle of Britain, and the bombing of civilian areas was part of the Blitz. Britain defended itself through the RAF, a coordinated air defense system, and the use of radar to detect incoming planes. Although Britain suffered heavy damage and civilian deaths, Germany failed to eliminate British air power.",
    why: "The battle mattered because it was Germany's first major defeat in the war. Since Britain remained unconquered, Germany could not dominate western Europe completely. Britain also stayed in the war as a base for future Allied military operations and a symbol of resistance against Nazi expansion.",
    takeaway:
      "The Battle of Britain showed that air superiority was essential in modern warfare, but it also proved that technology, planning, and determination could stop a stronger attacker. German expansion was no longer unstoppable, and the war would become longer and more difficult for Hitler."
  },
  balkans: {
    date: "April 1941",
    title: "The Balkans",
    image: "pdf_images/pdf-image-25.png",
    imageClass: "landscape-frame",
    alt: "A wartime convoy moving through a mountainous road in the Balkans.",
    summary:
      "In 1941, Germany moved into the Balkans by invading Yugoslavia and Greece. The campaign began after political instability in Yugoslavia threatened Axis influence and after Italy's failed invasion of Greece created problems for Germany's ally. German forces attacked quickly using tanks, aircraft, and coordinated ground operations. Yugoslavia collapsed in a matter of days, and Greece was defeated soon after despite some British support. Germany then launched an airborne assault on Crete, using paratroopers on a large scale. Although Germany captured the island, the battle was costly and showed that airborne operations could succeed but at a high price.",
    why: "Germany wanted to secure southeastern Europe before turning east toward the Soviet Union. Controlling the Balkans protected Germany's southern flank, strengthened its hold over Axis-aligned territory, and helped secure access to Mediterranean routes and regional resources. However, the campaign also used up time, equipment, and energy just before the invasion of the Soviet Union.",
    takeaway:
      "The Balkans campaign demonstrates that even successful expansion can create long-term problems. Germany achieved quick military victories, but the operation added strain to the war effort and delayed Hitler's next major campaign. Winning territory does not always make a country stronger if it stretches resources too far."
  },
  ussr: {
    date: "June 1941",
    title: "Operation Barbarossa",
    image: "pdf_images/pdf-image-28.png",
    imageClass: "landscape-frame",
    alt: "German armored vehicles advancing during Operation Barbarossa.",
    summary:
      "On June 22, 1941, Germany launched Operation Barbarossa, the massive invasion of the Soviet Union. It was the largest land invasion in history, with millions of troops advancing across a huge front. At first, German armies moved rapidly and captured enormous areas of Soviet territory, taking hundreds of thousands of prisoners and surrounding entire Soviet units. Hitler expected a quick collapse, but Soviet resistance hardened as the campaign continued. German supply lines became stretched, roads and infrastructure were poor, and troops struggled with fuel shortages, equipment breakdowns, and the enormous distances involved. By winter, German forces were exhausted and failed to capture Moscow.",
    why: "The invasion opened the Eastern Front, which became the largest and deadliest theater of the war. Germany was now fighting a prolonged two-front conflict, dividing attention and resources between east and west. Instead of a quick victory, Hitler became trapped in a war of attrition against a powerful enemy with vast manpower and industrial potential.",
    takeaway:
      "Operation Barbarossa marked a major turning point in the war. It showed the danger of overconfidence, overexpansion, and underestimating an opponent. Germany could still win battles, but it had lost the ability to achieve easy, decisive expansion."
  }
};

const timelineButtons = document.querySelectorAll(".timeline-button");
const timelineDetail = document.getElementById("timeline-detail");
const quizForm = document.getElementById("quiz-form");
const quizResult = document.getElementById("quiz-result");

function updateTimeline(button) {
  const eventData = timelineEvents[button.dataset.event];

  timelineButtons.forEach((item) => {
    item.classList.remove("active");
    item.setAttribute("aria-selected", "false");
    item.setAttribute("tabindex", "-1");
  });

  button.classList.add("active");
  button.setAttribute("aria-selected", "true");
  button.setAttribute("tabindex", "0");

  timelineDetail.setAttribute("aria-labelledby", button.id);
  timelineDetail.innerHTML = `
    <p class="detail-date">${eventData.date}</p>
    <h3>${eventData.title}</h3>
    <p>${eventData.summary}</p>
    <div class="detail-grid">
      <div>
        <h4>Why it mattered</h4>
        <p>${eventData.why}</p>
      </div>
      <div>
        <h4>Key takeaway</h4>
        <p>${eventData.takeaway}</p>
      </div>
    </div>
    <figure class="timeline-figure">
      <img class="timeline-image ${eventData.imageClass}" src="${eventData.image}" alt="${eventData.alt}" />
      <figcaption>Image from the PDF notes paired with this event.</figcaption>
    </figure>
  `;
}

timelineButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    updateTimeline(button);
  });

  button.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp" && event.key !== "ArrowRight" && event.key !== "ArrowLeft") {
      return;
    }

    event.preventDefault();

    const direction = event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (index + direction + timelineButtons.length) % timelineButtons.length;
    const nextButton = timelineButtons[nextIndex];

    nextButton.focus();
    updateTimeline(nextButton);
  });
});

quizForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const answers = {
    q1: "b",
    q2: "b",
    q3: "b"
  };

  let score = 0;
  const formData = new FormData(quizForm);

  Object.entries(answers).forEach(([question, correctAnswer]) => {
    if (formData.get(question) === correctAnswer) {
      score += 1;
    }
  });

  if ([...Object.keys(answers)].some((question) => !formData.get(question))) {
    quizResult.textContent = "Answer all three questions to see your score.";
    return;
  }

  if (score === 3) {
    quizResult.textContent =
      "3/3. Strong work. You can clearly explain how Germany expanded across Europe in the early war years.";
    return;
  }

  if (score === 2) {
    quizResult.textContent =
      "2/3. Nice job. Review the timeline once more and focus on how strategy and geography supported expansion.";
    return;
  }

  quizResult.textContent =
    `${score}/3. Revisit Blitzkrieg and the expansion campaigns, then try again.`;
});
