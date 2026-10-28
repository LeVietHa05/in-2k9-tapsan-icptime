export type Leadin = {
  content: string[];
  talkLink?: string; // nhân vật không có game thì vẫn dùng nút Talk
  game?: {
    title?: string; // mặc định "Start Game"
    pairs: { term: string; definition: string }[];
  };
};

export type MindmapTextItem = {
  text: string;
  style: "label" | "bold" | "normal" | "bullet";
};

export type MindmapNode = {
  label: string;
  color?: string;
  items?: MindmapTextItem[];
};

export type DataItem = {
  type: "bullets" | "text_only" | "table" | "mindmap";
  option?: string;
  content?: string[];
  tableData?: { headers: string[]; rows: string[][] };
  mindmapData?: {
    centerLabel: string;
    nodes: MindmapNode[];
  };
  footerText?: string;
}; // hoặc định nghĩa kỹ hơn

export type CharPage = {
  pageId: number;
  title: string | null;
  data: DataItem[];
  bgImg?: { height: string | number; link: string }[];
};

export type Character = {
  infotab: {
    name: string;
    age: number | string;
    occupation: string;
    moreinfo: string[];
    talkLink?: string;
  };
  tabs: { key: string; label: string }[];
  leadin: Leadin;
  personal: CharPage[];
  family: CharPage[];
  external: CharPage[];
};

export const data: Character[] = [
  {
    infotab: {
      name: "Nguyen Ha Anh",
      age: 15,
      occupation: "Student & Actress",
      moreinfo: [
        "MBTI: ENFP",
        "Favourite things about her job: <br/>\
            To be able to meet so many<br/>\
            cool people and appear on screen",
      ],
    },
    tabs: [
      { key: "leadin", label: "Lead in" },
      { key: "personal", label: "Personal Factors" },
      { key: "family", label: "Family Factors" },
      { key: "external", label: "External Factors" },
    ],
    leadin: {
      content: [
        "For centuries, teenagers have played a substantial role in the workforce. In earlier times, they were often regarded as \u201Cminiature adults,\u201D working full-time in agriculture or factories to help support their families. However, the widespread of child labour laws alongside post\u2013World War II industrialisation marked a turning point, significantly reducing youth employment as focus was shifted on education and school activities instead, with part-time work largely limited to earning pocket money.",

        "In recent years, however, teen employment has experienced a notable resurgence. According to recent reports, increased hiring demand across various sectors, coupled with rising wages, has driven what many describe as a \u201Ccomeback\u201D in teen participation. At the same time, data suggests that despite higher employment rates among Gen Z as of 2026, young people often prioritized work-life balance over traditional hustle, largely shaped by either academic pressure, parental support or high digital fluency. With this in mind, our team spoke with Nguyen Ha Anh, an acclaimed Vietnamese child actress who began her career as early as five years old, to gain insight into her perspective on entering the workforce at such an early age.",

        "From our team interview with Ha Anh, it seems that in today\u2019s era of rapid economic change, adolescents are increasingly required to equip themselves with essential knowledge, skills and experiences to make informed financial decisions, thus finding suitable career paths. From managing personal expenses and pursuing passions to building a personal \u201Cbrand\u201D while still in school, even the smallest choices reflect the influence of various underlying factors. This raises an even more pressing question: What are the key determinants that shape the economic behavior of young people, specifically teenagers today? Having conducted research, our team has concluded that the main forces are: personal factors, family factors and external factors.",
      ],
      talkLink:
        "https://drive.google.com/file/d/1HE9g8ZIglpdyu1KCf1nrCkc1NuDGrGje/view?usp=drive_link",
    },

    personal: [
      {
        pageId: 1,
        title: "Personal Factors",
        data: [
          {
            type: "bullets",
            content: [
              "This section continues the discussion of theory and background about teenagers and economic behavior. While social environment and family background are important, research shows that personal factors also play a major role in shaping how teenagers interact with money, work, and entrepreneurship. These factors include personality, personal skills, and personal goals. Studies in entrepreneurship and education suggest that the foundations of entrepreneurial thinking often begin developing during adolescence.",
            ],
          },
        ],
        bgImg: [{ height: "full", link: "/bg-mountain.png" }],
      },
      {
        pageId: 2,
        title: "1. Research on Entrepreneurial Intention in Young People",
        // type: "bullets",
        data: [
          {
            type: "bullets",
            content: [
              "A well-known study by Krueger, Reilly, and Carsrud (2000) in the Journal of Business Venturing explains that entrepreneurial intentions are usually formed before individuals actually start a business. The study suggests that three main factors influence entrepreneurial intention: attitude toward entrepreneurship, perceived ability to start a business, and social influence.",
              "Another important study by Liñán and Chen (2009), published in Entrepreneurship Theory and Practice, developed a scale to measure entrepreneurial intention among students. Their findings showed that students who have strong confidence in their abilities and a positive view of entrepreneurship are more likely to consider starting a business in the future.",
              "Researchers in the Journal of Business Research have also suggested that adolescence is an important stage for developing 'occupational identity', which means that young people begin imagining their future careers. At this stage, teenagers may start thinking about becoming entrepreneurs, especially when they are exposed to business ideas or digital economic opportunities.",
            ],
          },
        ],
        // bgImg: [{ height: 'full', link: '/bg-mountain.png' }]
      },
      {
        pageId: 3,
        title: "2. Global Data on Youth Entrepreneurship ",
        data: [
          {
            type: "bullets",
            content: [
              "Data from international entrepreneurship studies also shows that young people are increasingly interested in entrepreneurship. The Global Entrepreneurship Monitor (GEM) reports that a significant percentage of young people express interest in starting a business in the future.",
            ],
          },
          {
            type: "table",
            tableData: {
              headers: [
                "Age Group",
                "Interest in Starting a Business (%)",
                "Common Motivation",
              ],
              rows: [
                ["15 - 18", "35%", "Curiosity and independence"],
                ["18 - 24", "42%", "Career opportunities"],
                ["25 - 34", "48%", "Financial independence"],
              ],
            },
          },
          {
            type: "bullets",
            content: [
              "This data suggests that entrepreneurial interest often begins during the teenage years and continues increasing as individuals enter adulthood.",
            ],
          },
        ],
        // bgImg: [{ height: 'full', link: '/bg-mountain.png' }]
      },
      {
        pageId: 4,
        title: "3. Personal Factors Influencing Teen Entrepreneurship",
        data: [
          {
            type: "bullets",
            content: [
              "Data from international entrepreneurship studies also shows that young people are increasingly interested in entrepreneurship. The Global Entrepreneurship Monitor (GEM) reports that a significant percentage of young people express interest in starting a business in the future.",
            ],
          },
          {
            type: "table",
            tableData: {
              headers: ["Factor", "Description", "Possible Impact"],
              rows: [
                [
                  "Personality",
                  "Traits such as curiosity, creativity, and persistence",
                  "Teenagers may explore business ideas or new economic activities",
                ],
                [
                  "Skills",
                  "Digital skills, communication skills, and financial literacy",
                  " Skills enable teenagers to create value and earn income",
                ],
                [
                  "Personal Goals",
                  "Desire for independence or career ambition",
                  "Goals motivate teenagers to experiment with entrepreneurship",
                ],
              ],
            },
          },
        ],
        // bgImg: [{ height: 'full', link: '/bg-mountain.png' }]
      },
      {
        pageId: 5,
        title: "4. Example Economic Activitie Among Teenagers",
        data: [
          {
            type: "bullets",
            content: [
              "Data from international entrepreneurship studies also shows that young people are increasingly interested in entrepreneurship. The Global Entrepreneurship Monitor (GEM) reports that a significant percentage of young people express interest in starting a business in the future.",
            ],
          },
          {
            type: "table",
            tableData: {
              headers: ["Activity", "Description"],
              rows: [
                [
                  "Online selling",
                  "Selling handmade products or clothes through social media",
                ],
                [
                  "Content creation",
                  "Making videos or online content and earning advertising revenue",
                ],
                [
                  "Freelancing",
                  "Graphic design, programming, or digital services",
                ],
                ["Tutoring", "Helping younger students with academic subjects"],
              ],
            },
          },
        ],
        // bgImg: [{ height: 'full', link: '/bg-mountain.png' }]
      },
      {
        pageId: 6,
        title: "Conclusion",
        data: [
          {
            type: "bullets",
            content: [
              "Overall, research suggests that entrepreneurial thinking can begin forming during adolescence. Personal traits, skills, and goals influence how teenagers interact with economic opportunities. Even small experiences such as online selling or managing small projects can contribute to developing entrepreneurial confidence and economic awareness",
            ],
          },
        ],
        // bgImg: [{ height: 'full', link: '/bg-mountain.png' }]
      },
    ],
    family: [
      {
        pageId: 1,
        title: "I. Income constraint → Consumption pressure ",
        data: [
          {
            type: "bullets",
            option: "font-bold",
            content: [
              "Household income affects financial pressure and the need for teenagers to work.",
            ],
          },
          {
            type: "table",
            tableData: {
              headers: ["Lower-income households", "Higher-income households"],
              rows: [
                [
                  "Limited resources → pressure on basic consumption",
                  "Financially supported by parents",
                ],
                [
                  "Content crIncome = necessary, not optionaleation",
                  "Lower need for additional income",
                ],
                [
                  "Teen work = response to economic pressure",
                  "Focus on education & development",
                ],
              ],
            },
          },
          {
            type: "bullets",
            content: [
              "ILO (2021): ~160 million children work globally → shows early labour is widespread",
              "World Bank (2022): low-income families face financial shocks → increases pressure to earn",
              "GSO Vietnam (2023): child labour mainly in rural areas → linked to lower household income",
            ],
          },
        ],
        bgImg: [
          { height: "full", link: "/bg-sky.PNG" },
          { height: 160, link: "/bg-ground.PNG" },
        ],
      },
      {
        pageId: 2,
        title: "II. Parental attitudes \n → Economic behavior formatio",
        data: [
          {
            type: "text_only",
            option: "font-bold",
            content: ["Encourage independence: "],
          },
          {
            type: "bullets",
            content: [
              "Allow money management, part-time work",
              "Build financial literacy and responsibility",
              "Real-life exposure to economic activities",
            ],
          },
          {
            type: "text_only",
            option: "font-bold",
            content: ["Education-focused: "],
          },
          {
            type: "bullets",
            content: [
              "Discourage working, prioritize academics",
              "Longer financial dependence",
              "Limited practical experience",
            ],
          },
        ],
      },
      {
        pageId: 3,
        title:
          "III. Family background \n → Career orientation and economic mindset",
        data: [
          {
            type: "text_only",
            option: "font-bold",
            content: [
              "Family background influences whether teenagers prioritize work or long-term education.",
            ],
          },
          {
            type: "table",
            tableData: {
              headers: [
                "Unstable income background",
                "Value academic achievement",
              ],
              rows: [
                [
                  "Value practical experience, early work",
                  "Value academic achievement",
                ],
                [
                  "More independence & risk-taking",
                  "Focus on long-term career path",
                ],
                [
                  "Higher tendency toward entrepreneurship",
                  "Delay entry into labour market",
                ],
              ],
            },
          },
          {
            type: "text_only",
            option: "font-bold",
            content: ["Reference: "],
          },
          {
            type: "text_only",
            content: [
              "GEM (2023): entrepreneurial families → higher business intention",
              "World Economic Forum (2020): youth prioritize long-term skills over short-term income",
            ],
          },
        ],
      },
    ],
    external: [
      {
        pageId: 1,
        title: "External Factors",
        data: [
          {
            type: "text_only",
            option: "font-bold",
            content: ["1. Legal frameworks"],
          },
          {
            type: "text_only",
            content: [
              "Vietnamese Labour Code (2019) limits teenage work by age → under 13 (arts/ sports), 13-15 (light work), 15-18 (restricted jobs).",
              "Protects minors but confines them to low-skill, low-paying sectors.",
              "Evidence: teenagers earn ~3.0 million VND/month vs 7.1 - 8.4 million VND (adults)",
              "→ Work is allowed but financial returns are limited , making it a compromise with education",
            ],
          },
          {
            type: "text_only",
            option: "font-bold",
            content: [
              "2. Poverty and economic pressure on the shoulders of young children",
            ],
          },
          {
            type: "bullets",
            content: [
              "Main driver: household financial hardship",
              "UNICEF (2020): 8.1% rural vs 4.6% urban child labour rates",
              "→ Even small income matters → work becomes family obligation, not personal choice.",
            ],
          },
          {
            type: "text_only",
            option: "font-bold",
            content: ["3. Social media and consumerism"],
          },
          {
            type: "bullets",
            content: [
              "Urban teens influenced by digital lifestyles and peer pressure",
              "OECD (2017): well-being linked to identity & belonging shaped online",
              "Hanoi living cost ~6.8 million VND/month > teen income.",
              "→ Teens work to keep up socially, not just for basic needs.",
            ],
          },
          {
            type: "text_only",
            option: "font-bold",
            content: ["4. Rural - urban divide"],
          },
          {
            type: "bullets",
            content: [
              "Rural: work = economic survival, may disrupt education",
              "Urban: work = independence + social pressure + high living costs",
              "→ different causes, same result: early workforce entry.",
            ],
          },
        ],
        bgImg: [
          { height: "full", link: "/bg-city.png" },
          { height: 160, link: "/bg-ground.png" },
        ],
      },
      {
        pageId: 2,
        title: null,
        data: [
          {
            type: "mindmap",
            mindmapData: {
              centerLabel:
                "External Factors Affecting \n Teenagers’ Participation \n in Part-Time Work",
              nodes: [
                {
                  label: "Social Media and Consumerism",
                  items: [
                    {
                      text: "Urban teens influenced by digital lifestyles and peer pressure.",
                      style: "bullet",
                    },
                    { text: "OECD (2017):", style: "bold" },
                    {
                      text: "well-being linked to identity & belonging shaped online.",
                      style: "bullet",
                    },
                    {
                      text: "Hanoi living cost ~6.8 million VND/month > teen income.",
                      style: "bullet",
                    },
                    {
                      text: "Teens work to keep up socially, not just for basic needs.",
                      style: "bullet",
                    },
                  ],
                },
                {
                  label: "Legal Frameworks",
                  items: [
                    { text: "Vietnamese Labour Code (2019):", style: "bold" },
                    { text: "under 13 → arts/sports only.", style: "bullet" },
                    { text: "13-15 → light work.", style: "bullet" },
                    { text: "15-18 → restricted jobs.", style: "bullet" },
                    {
                      text: "Protects minors but confines them to low-skill, low-paying sectors.",
                      style: "bullet",
                    },
                    { text: "Evidence:", style: "bold" },
                    {
                      text: "teenagers earn ~3.0 million VND/month. Adults earn 7.1-8.4 million VND/month.",
                      style: "bullet",
                    },
                    {
                      text: "Work is allowed but financial returns are limited, making it a compromise with education.",
                      style: "bullet",
                    },
                  ],
                },
                {
                  label: "Rural-Urban Divide",
                  items: [
                    {
                      text: "Rural: work = economic survival, may disrupt education.",
                      style: "bullet",
                    },
                    {
                      text: "Urban: work = independence + social pressure + high living costs.",
                      style: "bullet",
                    },
                    {
                      text: "Different causes, same result: early workforce entry.",
                      style: "bullet",
                    },
                  ],
                },
                {
                  label: "Poverty and Economic Pressure",
                  items: [
                    { text: "Main driver:", style: "label" },
                    { text: "household financial hardship.", style: "normal" },
                    { text: "UNICEF (2020):", style: "label" },
                    { text: "8.1% rural child labour rate.", style: "bullet" },
                    { text: "4.6% urban child labour rate.", style: "bullet" },
                    { text: "Even small income matters.", style: "bullet" },
                    {
                      text: "Work becomes family obligation, not personal choice.",
                      style: "bullet",
                    },
                  ],
                },
              ],
            },
          },
        ],
        bgImg: [
          { height: "full", link: "/bg-city.png" },
          { height: 160, link: "/bg-ground.png" },
        ],
      },
      {
        pageId: 1,
        title: "External Factors",
        data: [
          {
            type: "text_only",
            option: "font-bold",
            content: ["REFERENCES"],
          },
          {
            type: "bullets",
            option: "list-[lower-alpha]! pl-12",
            content: [
              "Nguyen, T. T. (2021). Child labor and poverty reduction in Vietnam: Issues and policy implications. Retrieved from https://www.researchgate.net/publication/356674264",
              "UNICEF. (2020). Child labour in Vietnam. UNICEF. Retrieved from https://www.unicef.org/vietnam/media/8671/file/Child%20labour.pdf",
              "OECD. (2017). Youth well-being policy review of Vietnam. OECD Publishing. Retrieved from https://www.oecd.org/content/dam/oecd/en/publications/reports/2017/11/youth-well-being-policy-review-of-viet-nam_305e224f-en.pdf",
              "UNICEF. (n.d.). Child labour. Retrieved from https://www.unicef.org/vietnam/child-labour",
              "Work No Child’s Business. (2023). Study on youth employment in Vietnam. Retrieved from https://www.childrights-business.org/public/uploads/files/20240913/Work-No%20Child%27s%20Business_Study%20on%20Youth%20Emplyment%20in%20Vietnam_2023.pdf",
            ],
          },
        ],
        // bgImg: [{ height: 'full', link: '/bg-city.png' }, { height: 160, link: '/bg-ground.png' }]
      },
    ],
  },
  {
    infotab: {
      name: "Hoang Tuan Anh",
      age: 28,
      occupation: "Software engineer ",
      moreinfo: [
        "Marital status: Having proposed to his girlfriend. They plan to get married next year!",
        "“ I can’t wait to get married with my little kitty! So excited!”",
      ],
    },
    tabs: [
      { key: "leadin", label: "Lead in" },
      { key: "personal", label: "Personal Factors" },
      { key: "family", label: "Case Study" },
      { key: "external", label: "External Factors" },
    ],
    leadin: {
      content: [
        "For most of modern history, entering the workforce in early adulthood was often viewed as a relatively predictable milestone. After completing one’s education, individuals were expected to secure stable employment, gradually advance within a single profession and build long-term financial security through steady career progression. Success was commonly associated with permanence and climbing a well-defined corporate ladder.",

        "Today, nonetheless, this traditional pathway has become increasingly uncertain. Rapid technological advancement, automation, AI and global economic shifts have fundamentally reshaped labor markets. While new industries continue to emerge, competition has intensified as employers seek increasingly specialised skills and relevant experience. At the same time, many young professionals face difficult personal decisions regarding career direction, financial responsibilities, family expectations and work-life balance. Rather ran asking “How do I find a job?”, many now find themselves asking “How do I build a sustainable career in an ever-changing world”?",

        "In this edition, our team explore the challenges faced by individuals ages 22 to 50 as they navigate today’s workforce. Through interactive activities, discussions on both social and personal factors, along with real-world case studies, we examine how economic transformation has redefined what it means: to remain competitive and resilient within the labor market instead of entering it.",
      ],
      game: {
        title: "Start Game",
        pairs: [
          {
            term: "Automation",
            definition:
              "Technology performing tasks with minimal human involvement.",
          },
          {
            term: "Skill Gap",
            definition: "Difference between required and existing skills.",
          },
          {
            term: "Analytical Decision-Making",
            definition:
              "Making decisions using data, logic, and critical thinking.",
          },
          {
            term: "Economic Mobility",
            definition: "Ability to improve economic status over time.",
          },
          {
            term: "Labour Market",
            definition: "Where employers and workers exchange labour.",
          },
          {
            term: "Structural Unemployment",
            definition:
              "Joblessness caused by economic or technological changes.",
          },
          {
            term: "Digital Transformation",
            definition:
              "Integrating digital technology into business operations.",
          },
          {
            term: "Career Transition",
            definition: "Changing jobs, industries, or professional paths.",
          },
          {
            term: "Work–Life Balance",
            definition:
              "Maintaining healthy priorities between work and personal life.",
          },
          {
            term: "Job Saturation",
            definition: "Excessive competition for limited job opportunities.",
          },
        ],
      },
    },
    personal: [
      {
        pageId: 1,
        title: "Personal Factors",
        data: [
          {
            type: "bullets",
            content: [
              "This section continues the discussion of theory and background about teenagers and economic behavior. While social environment and family background are important, research shows that personal factors also play a major role in shaping how teenagers interact with money, work, and entrepreneurship. These factors include personality, personal skills, and personal goals. Studies in entrepreneurship and education suggest that the foundations of entrepreneurial thinking often begin developing during adolescence.",
            ],
          },
        ],
        bgImg: [{ height: "full", link: "/bg-mountain.png" }],
      },
      {
        pageId: 2,
        title: "1. Career aspirations and personal goals",
        // type: "bullets",
        data: [
          {
            type: "bullets",
            content: [
              "Career decisions are shaped not only by labor market conditions but also by individual aspirations and personal definitions of success. While some workers pursue higher salaries and rapid career progression, others prioritize meaningful work, work-life balance, or opportunities for continuous learning. These differences reflect personal values rather than differences in ability. According to Randstad's Workmonitor 2025, 83% of respondents identified work-life balance as an important factor when choosing a job, surpassing pay (82%) for the first time in the survey's 22-year history. As career expectations continue to evolve, personal values increasingly shape economic decisions alongside financial incentives.",
            ],
          },
          {
            type: "bullets",
            option: "font-bold",
            content: ["REFERENCE:"],
          },
          {
            type: "text_only",
            content: [
              "Randstad. (2025). Work-life balance tops pay: Randstad's Workmonitor reveals changing workforce priorities.",
              "https://www.randstad.com/press/2025/work-life-balance-tops-pay-randstads-workmonitor-reveals/",
            ],
          },
        ],
        // bgImg: [{ height: 'full', link: '/bg-mountain.png' }]
      },
      {
        pageId: 3,
        title: "2. Risk preferences and career decisions ",
        data: [
          {
            type: "bullets",
            content: [
              "Individuals respond differently to uncertainty, even when presented with similar economic opportunities. While some are willing to pursue entrepreneurship despite uncertain returns, others prefer stable employment with predictable income and lower financial risk. These differences reflect risk preferences: the willingness to accept uncertainty in exchange for potentially greater future rewards. The Global Entrepreneurship Monitor (GEM) 2024/2025 found that 49% of adults reported they would not start a business because of fear of failure, even when they recognized promising business opportunities. This suggests that career decisions are influenced not only by available opportunities but also by each individual's attitude toward risk and uncertainty. ",
            ],
          },
          {
            type: "bullets",
            option: "font-bold",
            content: ["REFERENCE:"],
          },
          {
            type: "text_only",
            content: [
              "Global Entrepreneurship Monitor. (2025). GEM 2024/2025 Global Report: Entrepreneurship Reality Check.",
              "https://www.gemconsortium.org/report/gem-20242025-global-report-entrepreneurship-reality-check-4",
            ],
          },
        ],
        // bgImg: [{ height: 'full', link: '/bg-mountain.png' }]
      },
      {
        pageId: 4,
        title: "3. Family responsibilities and household priorities",
        data: [
          {
            type: "bullets",
            content: [
              "Career decisions rarely affect only the individual. As adults progress through different stages of life, financial responsibilities often expand to include supporting aging parents, raising children, purchasing homes, and maintaining household stability. These obligations influence not only spending habits but also employment decisions, making stable income and secure careers increasingly valuable. In many countries, this phenomenon is reflected in the 'sandwich generation,' where working adults simultaneously care for both elderly parents and dependent children. The OECD highlights that growing childcare and eldercare responsibilities increasingly affect labor force participation and long-term financial security, demonstrating how household responsibilities directly shape individual economic decisions ",
            ],
          },
          {
            type: "bullets",
            option: "font-bold",
            content: ["REFERENCE:"],
          },
          {
            type: "text_only",
            content: [
              "OECD. (2024). Changing Societies, Changing Social Policies: Megatrends and the Future of Social Protection(Section 4.1: Motherhood penalties meet eldercare demands).https://www.oecd.org/en/publications/megatrends-and-the-future-of-social-protection_6c9202e8-en/full-report/component-6.html",
              "OECD. (2025). Gender Equality in a Changing World (Box 5.6: Sandwich caregiving).https://www.oecd.org/en/publications/gender-equality-in-a-changing-world_e808086f-en/full-report/persistent-gender-gaps-in-paid-and-unpaid-work_cb137837.html",
            ],
          },
        ],
        // bgImg: [{ height: 'full', link: '/bg-mountain.png' }]
      },
    ],
    family: [
      {
        pageId: 1,
        title:
          "Inside The Suitcase: How A Graduate's Career Decision Reveals the Hidden  Forces Behind Brain Drain, Innovation, and Capital Allocation in Vietnam",
        data: [
          {
            type: "bullets",
            content: [
              "Georgia, 2031. On a humid July morning, Nguyen zipped up his suitcase for the last time. Inside were the usual things you would see in an international student’s starter pack: a laptop, clothing, family photos, but also something far less visible. Four years of education, countless hours preparing for programming competitions, and the hopes of becoming part of Vietnam's next generation of innovators. ",
              "Nonetheless, his destination was Singapore.",
              "Nguyen had always imagined returning home after university. He wanted to build technologies that could solve problems in Vietnam, not somewhere else. Yet when graduation arrived, two job offers sat side by side on his desk.",
              "The first came from a software company in Ho Chi Minh City. It promised stable employment, competitive local pay, and projects for international clients. The second came from an artificial intelligence research institute in Singapore. Along with a salary nearly four times higher, it offered access to advanced computing infrastructure, world-renowned researchers, and funding to pursue postgraduate study while working.",
              "To many, Nguyen's choice might seem obvious. To others, it might appear disappointing. But neither reaction explains the economics behind his decision.",
              "Economists often describe education as an investment in human capital: the knowledge and skills that increase a person's productivity over time. Like any investment, people naturally seek the environment where that capital creates the greatest return. For Nguyen, the difference was not simply income. It was the opportunity to work on frontier technologies, collaborate with leading researchers, and build expertise in fields that were still developing in Vietnam.",
              "This makes us think. If Vietnam is producing more talented graduates than ever before, why does retaining them remain so difficult?",
              "The answer lies less in classrooms than in the structure of the economy itself.",
              "Over the past three decades, Vietnam has transformed into one of Asia's fastest growing economies. Foreign investment has fueled manufacturing, electronics production, and a rapidly expanding digital sector. These achievements have generated millions of jobs and significantly improved living standards.",
              "Yet much of this growth remains concentrated in manufacturing, assembly, and software outsourcing. Admittedly, these industries are essential to economic development, but they are not always where new technologies are invented. Graduates specializing in artificial intelligence, engineering, biotechnology, or advanced robotics often discover that opportunities for cutting edge research or product development are comparatively limited. As a result, the highest returns to their specialized skills frequently exist elsewhere. Anywhere, beside their own motherland. ",
              "The challenge extends beyond employment. Innovation depends on an ecosystem where the government, universities, research institutes, and investors reinforce one another. When one part of that ecosystem is underdeveloped, the others struggle to flourish. ",
              "Capital allocation illustrates this dynamic. In Vietnam, real estate has long been viewed as one of the safest and most profitable investments. For many investors, purchasing land or property offers more predictable returns than financing a tech startup. From an individual perspective, this decision is entirely rational.",
              "Collectively, however, the consequences are more complex.",
              "When a significant share of capital flows toward property rather than innovation, fewer technology startups receive the funding needed to grow. Fewer startups mean fewer research centric jobs, thereby offering limited opportunities for fresh graduates to delve into their specialized areas, leaving them no options but to seek careers abroad. The result is a feedback loop in which the economy produces capable workers faster than it creates opportunities to fully utilize them.",
              "This phenomenon is commonly described as brain drain, but I find that phrase to be quite misleading. It suggests that the body of talent is itself the problem. In reality, it is often the outcome of deeper economic incentives.",
              "History offers an important lesson. During the late twentieth century, economies such as South Korea and China also experienced significant emigration of highly educated workers. Rather than attempting to prevent people from leaving, they invested heavily in research institutions, advanced manufacturing, and technology industries. As domestic opportunities expanded, many professionals returned. These people see how the economic incentives have changed, see how their personal values align with their country, and the opportunities to grow individually while contributing to their rising nation. ",
              "Perhaps the more useful question, then, is not How do we stop talented people from leaving?, but rather, What kind of economy would make returning the better choice?",
              "Nguyen's suitcase ultimately represents more than one graduate's decision. It symbolizes the movement of human capital in response to opportunity. Every economy educates talented individuals, but only those capable of transforming knowledge into innovation consistently retain them.",
              "For countries aspiring to move beyond manufacturing toward technological leadership, the challenge is not simply producing brighter graduates. It is building an economy where ambition has room to grow.",
              "In the end, I can firmly say that people rarely leave because they love their country less. More often, they leave because another place has learned to reward their potential more effectively. In economics, talent follows incentives. The countries that understand this best are often the ones that shape the future.",
            ],
          },
        ],
        bgImg: [
          { height: "full", link: "/bg-sky.PNG" },
          { height: 160, link: "/bg-ground.PNG" },
        ],
      },
    ],
    external: [
      {
        pageId: 1,
        title: "External Factors",
        data: [
          {
            type: "text_only",
            option: "font-bold",
            content: ["1. Legal frameworks"],
          },
          {
            type: "text_only",
            content: [
              "Vietnamese Labour Code (2019) limits teenage work by age → under 13 (arts/ sports), 13-15 (light work), 15-18 (restricted jobs).",
              "Protects minors but confines them to low-skill, low-paying sectors.",
              "Evidence: teenagers earn ~3.0 million VND/month vs 7.1 - 8.4 million VND (adults)",
              "→ Work is allowed but financial returns are limited , making it a compromise with education",
            ],
          },
          {
            type: "text_only",
            option: "font-bold",
            content: [
              "2. Poverty and economic pressure on the shoulders of young children",
            ],
          },
          {
            type: "bullets",
            content: [
              "Main driver: household financial hardship",
              "UNICEF (2020): 8.1% rural vs 4.6% urban child labour rates",
              "→ Even small income matters → work becomes family obligation, not personal choice.",
            ],
          },
          {
            type: "text_only",
            option: "font-bold",
            content: ["3. Social media and consumerism"],
          },
          {
            type: "bullets",
            content: [
              "Urban teens influenced by digital lifestyles and peer pressure",
              "OECD (2017): well-being linked to identity & belonging shaped online",
              "Hanoi living cost ~6.8 million VND/month > teen income.",
              "→ Teens work to keep up socially, not just for basic needs.",
            ],
          },
          {
            type: "text_only",
            option: "font-bold",
            content: ["4. Rural - urban divide"],
          },
          {
            type: "bullets",
            content: [
              "Rural: work = economic survival, may disrupt education",
              "Urban: work = independence + social pressure + high living costs",
              "→ different causes, same result: early workforce entry.",
            ],
          },
        ],
        bgImg: [
          { height: "full", link: "/bg-city.png" },
          { height: 160, link: "/bg-ground.png" },
        ],
      },
      {
        pageId: 2,
        title: null,
        data: [
          {
            type: "mindmap",
            mindmapData: {
              centerLabel:
                "External Factors Affecting \n Teenagers’ Participation \n in Part-Time Work",
              nodes: [
                {
                  label: "Social Media and Consumerism",
                  items: [
                    {
                      text: "Urban teens influenced by digital lifestyles and peer pressure.",
                      style: "bullet",
                    },
                    { text: "OECD (2017):", style: "bold" },
                    {
                      text: "well-being linked to identity & belonging shaped online.",
                      style: "bullet",
                    },
                    {
                      text: "Hanoi living cost ~6.8 million VND/month > teen income.",
                      style: "bullet",
                    },
                    {
                      text: "Teens work to keep up socially, not just for basic needs.",
                      style: "bullet",
                    },
                  ],
                },
                {
                  label: "Legal Frameworks",
                  items: [
                    { text: "Vietnamese Labour Code (2019):", style: "bold" },
                    { text: "under 13 → arts/sports only.", style: "bullet" },
                    { text: "13-15 → light work.", style: "bullet" },
                    { text: "15-18 → restricted jobs.", style: "bullet" },
                    {
                      text: "Protects minors but confines them to low-skill, low-paying sectors.",
                      style: "bullet",
                    },
                    { text: "Evidence:", style: "bold" },
                    {
                      text: "teenagers earn ~3.0 million VND/month. Adults earn 7.1-8.4 million VND/month.",
                      style: "bullet",
                    },
                    {
                      text: "Work is allowed but financial returns are limited, making it a compromise with education.",
                      style: "bullet",
                    },
                  ],
                },
                {
                  label: "Rural-Urban Divide",
                  items: [
                    {
                      text: "Rural: work = economic survival, may disrupt education.",
                      style: "bullet",
                    },
                    {
                      text: "Urban: work = independence + social pressure + high living costs.",
                      style: "bullet",
                    },
                    {
                      text: "Different causes, same result: early workforce entry.",
                      style: "bullet",
                    },
                  ],
                },
                {
                  label: "Poverty and Economic Pressure",
                  items: [
                    { text: "Main driver:", style: "label" },
                    { text: "household financial hardship.", style: "normal" },
                    { text: "UNICEF (2020):", style: "label" },
                    { text: "8.1% rural child labour rate.", style: "bullet" },
                    { text: "4.6% urban child labour rate.", style: "bullet" },
                    { text: "Even small income matters.", style: "bullet" },
                    {
                      text: "Work becomes family obligation, not personal choice.",
                      style: "bullet",
                    },
                  ],
                },
              ],
            },
          },
        ],
        bgImg: [
          { height: "full", link: "/bg-city.png" },
          { height: 160, link: "/bg-ground.png" },
        ],
      },
      {
        pageId: 1,
        title: "External Factors",
        data: [
          {
            type: "text_only",
            option: "font-bold",
            content: ["REFERENCES"],
          },
          {
            type: "bullets",
            option: "list-[lower-alpha]! pl-12",
            content: [
              "Nguyen, T. T. (2021). Child labor and poverty reduction in Vietnam: Issues and policy implications. Retrieved from https://www.researchgate.net/publication/356674264",
              "UNICEF. (2020). Child labour in Vietnam. UNICEF. Retrieved from https://www.unicef.org/vietnam/media/8671/file/Child%20labour.pdf",
              "OECD. (2017). Youth well-being policy review of Vietnam. OECD Publishing. Retrieved from https://www.oecd.org/content/dam/oecd/en/publications/reports/2017/11/youth-well-being-policy-review-of-viet-nam_305e224f-en.pdf",
              "UNICEF. (n.d.). Child labour. Retrieved from https://www.unicef.org/vietnam/child-labour",
              "Work No Child’s Business. (2023). Study on youth employment in Vietnam. Retrieved from https://www.childrights-business.org/public/uploads/files/20240913/Work-No%20Child%27s%20Business_Study%20on%20Youth%20Emplyment%20in%20Vietnam_2023.pdf",
            ],
          },
        ],
        // bgImg: [{ height: 'full', link: '/bg-city.png' }, { height: 160, link: '/bg-ground.png' }]
      },
    ],
  },
  {
    infotab: {
      name: "Grandpa Thuan and grandma Thanh",
      age: "Both are 88",
      occupation:
        "Retired. However, grandpa and grandma always try to keep their hand bus",
      moreinfo: [
        "A word of wisdom: Life goes by pretty fast, so tell people you love them. That’s how we’re happily married for 61 years!",
      ],
    },
    tabs: [
      { key: "leadin", label: "Lead in" },
      { key: "personal", label: "Personal Factors" },
      { key: "family", label: "Solution" },
      { key: "external", label: "Misconception about Old People" },
    ],
    leadin: {
      content: [
        "For much of modern history, retirement was often viewed as the final stage of one's economic journey. After leaving the workforce, older adults were generally expected to rely on pensions, personal savings, or support from their families. As a result, ageing was commonly associated with economic dependence rather than continued participation in society.",

        "Today, however, this perception is gradually changing. Longer life expectancy, rising living costs, and shifting family structures have reshaped later life. While some older adults remain active in the workforce by choice or necessity, others depend on pensions, family support, or social welfare to maintain financial security. These diverse experiences show that aging is no longer defined by a single economic pathway.",

        "In this edition, we explore the economics of aging through the perspectives of work, financial independence, family responsibilities, and social perceptions. Together, these issues reveal how growing older is not simply about leaving the workforce, but about navigating a new stage of economic decisions and challenges.",
      ],
    },

    personal: [
      {
        pageId: 1,
        title: "1. The labor resilience (capable of working)",
        data: [
          {
            type: "bullets",
            content: [
              "The unretirement trend: Older adults actively re-entering the workforce or embracing the gig economy to secure secondary income.",
              "Skill acquisition: 79% of workers aged 50 and older actively seek new skills to remain competitive",
              "Economic impact: The 65+ demographic is the fastest-growing segment in the labor force, projected to reach 8.6% of the workforce by 2032",
            ],
          },
        ],
        bgImg: [{ height: "full", link: "/bg-mountain.png" }],
      },
      {
        pageId: 2,
        title: "2. The psychological weight (incapable of working)",
        // type: "bullets",
        data: [
          {
            type: "bullets",
            content: [
              "Perceived burdensomeness: The profound psychological guilt of feeling like a financial or emotional liability to children.",
              "Vulnerable demographics: Pension-reliant retirees and wounded veterans balancing state support with the heavy emotional toll of physical dependency.",
              "Cultural contrast: Asian multi-generational households utilize filial piety and reciprocal childcare. Western individualism frames dependency as a perceived personal failing.",
            ],
          },
        ],
        // bgImg: [{ height: 'full', link: '/bg-mountain.png' }]
      },
      {
        pageId: 3,
        title: "3. The cognitive automation wave ",
        data: [
          {
            type: "bullets",
            content: [
              "Severe shortfalls: 20% of adults over fifty possess zero retirement savings, sparking widespread panic.",
              "Extreme frugality: Aggressive late-stage saving driven by the terrifying unpredictability of future healthcare costs.",
            ],
          },
        ],
        // bgImg: [{ height: 'full', link: '/bg-mountain.png' }]
      },
    ],
    family: [
      {
        pageId: 1,
        title: "I. Income constraint → Consumption pressure ",
        data: [
          {
            type: "bullets",
            content: [
              "Helping retired older adults live fulfilling lives requires more than financial support. A sustainable approach should enable them to remain economically active, socially connected, and mentally engaged while allowing society to benefit from their knowledge and experience. Below are several practical solutions that can be implemented by governments, employers, communities, and individuals.",
            ],
          },
          {
            type: "table",
            tableData: {
              headers: ["Goal", "Key Actions"],
              rows: [
                [
                  "Support active ageing",
                  "Flexible jobs • Digital training • Community activities • Public awareness",
                ],
              ],
            },
          },
          {
            type: "table",
            tableData: {
              headers: ["Solution", "Implementation"],
              rows: [
                [
                  "Encourage Flexible Employment",
                  "Introduce part-time work, mentoring, and consultancy roles → provide retirees with flexible income opportunities → improve financial security while allowing employers to retain experienced talent.",
                ],
                [
                  "Expand Digital Literacy",
                  "Organise free digital skills workshops → increase retirees' confidence in using technology → improve access to banking, healthcare, and online communication.",
                ],
                [
                  "Strengthen Community Connections",
                  "Develop community clubs and volunteer programmes → encourage regular social interaction → reduce loneliness and enhance physical and mental well-being.",
                ],
                [
                  "Promote Lifelong Learning",
                  "Offer affordable courses in practical and emerging subjects → keep retirees intellectually active → create new career, entrepreneurial, or volunteer opportunities.",
                ],
                [
                  "Change Public Attitudes",
                  "Launch media campaigns and educational initiatives → challenge age-related stereotypes → foster a more inclusive society that values older adults' experience and contributions.",
                ],
              ],
            },
          },
        ],
        bgImg: [
          { height: "full", link: "/bg-sky.PNG" },
          { height: 160, link: "/bg-ground.PNG" },
        ],
      },
      {
        pageId: 2,
        title: "2. The psychological weight (incapable of working)",
        data: [
          {
            type: "bullets",
            content: [
              "Together, these recommendations address both the financial and psychological challenges of retirement. Instead of treating older adults as passive recipients of support, they empower them to remain active participants in society. The combination of employment opportunities, lifelong learning, stronger communities, and changing public perceptions creates a more inclusive environment where people can continue contributing regardless of age.",
            ],
          },
        ],
      },
      {
        pageId: 3,
        title:
          "III. Family background \n → Career orientation and economic mindset",
        data: [
          {
            type: "text_only",
            option: "font-bold",
            content: [
              "Family background influences whether teenagers prioritize work or long-term education.",
            ],
          },
          {
            type: "table",
            tableData: {
              headers: [
                "Unstable income background",
                "Value academic achievement",
              ],
              rows: [
                [
                  "Value practical experience, early work",
                  "Value academic achievement",
                ],
                [
                  "More independence & risk-taking",
                  "Focus on long-term career path",
                ],
                [
                  "Higher tendency toward entrepreneurship",
                  "Delay entry into labour market",
                ],
              ],
            },
          },
          {
            type: "text_only",
            option: "font-bold",
            content: ["Reference: "],
          },
          {
            type: "text_only",
            content: [
              "GEM (2023): entrepreneurial families → higher business intention",
              "World Economic Forum (2020): youth prioritize long-term skills over short-term income",
            ],
          },
        ],
      },
    ],
    external: [
      {
        pageId: 1,
        title: "Misconception about Old People",
        data: [
          {
            type: "text_only",
            content: [
              "1. Population ageing is transforming labour markets around the world, yet many stereotypes about older adults remain deeply rooted in society. These misconceptions influence hiring decisions, workplace policies, and even how retirees perceive their own abilities. ",
            ],
          },
          {
            type: "text_only",
            content: [
              "2. Evidence from international organisations such as the OECD, WHO, ILO, and AARP suggests that many common beliefs about ageing are inaccurate. Rather than representing a decline in capability, retirement often marks a transition toward new forms of economic and social contribution.",
            ],
          },
          {
            type: "table",
            tableData: {
              headers: ["Common Misconception", "Implementation"],
              rows: [
                [
                  "Older people can no longer contribute to society.",
                  "Many retirees continue working, mentoring, volunteering, or running businesses. Experience and institutional knowledge remain valuable.",
                ],
                [
                  "Older adults cannot use technology.",
                  "Digital adoption among adults aged 50+ continues to rise. Most use smartphones, online banking, telehealth, and social media.",
                ],
                [
                  "Older workers resist change",
                  "Research shows adaptability depends more on training opportunities and workplace culture than on age.",
                ],
                [
                  "Older employees are too expensive.",
                  "Lower turnover, stronger mentoring, and accumulated expertise often outweigh higher wage or healthcare costs. ",
                ],
              ],
            },
          },
        ],
        bgImg: [
          { height: "full", link: "/bg-city.png" },
          { height: 160, link: "/bg-ground.png" },
        ],
      },
      {
        pageId: 2,
        title: "1. Inefficiency ",
        data: [
          {
            type: "text_only",
            content: [
              "Perhaps the most common stereotype surrounding retirement is that older adults are no longer productive enough to participate in the labour market. However, evidence paints a very different picture. According to the OECD's Working Better with Age (2023), increasing labour-force participation among older adults helps countries address labour shortages while improving economic resilience. Many retired professionals continue to work as consultants, mentors, freelancers, or entrepreneurs, bringing decades of expertise that cannot easily be replaced. Their accumulated experience often enables them to solve complex problems more efficiently and guide younger employees through difficult decisions. Instead of competing with younger generations, older workers frequently complement them by transferring practical knowledge and professional values.",
            ],
          },
        ],
        // bgImg: [{ height: 'full', link: '/bg-city.png' }, { height: 160, link: '/bg-ground.png' }]
      }, 
      {
        pageId: 3,
        title: "2. Technology Illiteracy",
        data: [
          {
            type: "text_only",
            content: [
              "Another widespread misconception is that older adults are unable to learn new technologies. Although they may adopt innovations more gradually than younger generations, this difference should not be interpreted as inability. AARP's 2026 Technology Trends report found that 71% of adults aged 50 and above purchased new technology products within the previous year, while 66% agreed that technology had improved their quality of life. Older adults increasingly use smartphones, online banking, digital payment systems, telemedicine, video conferencing, and AI-powered applications. Researchers argue that the greatest barriers are insufficient digital training, accessibility issues, and concerns about privacy rather than age itself. When technology is designed inclusively and accompanied by appropriate training, older adults demonstrate a strong willingness and ability to adapt.",
            ],
          },
        ],
        // bgImg: [{ height: 'full', link: '/bg-city.png' }, { height: 160, link: '/bg-ground.png' }]
      }, 
      {
        pageId: 4,
        title: "3. Change resistance",
        data: [
          {
            type: "text_only",
            content: [
              "Employers sometimes assume that older employees dislike innovation or refuse to embrace organisational change. In reality, studies from the World Health Organization show that ageism often leads employers to underestimate older workers' learning potential. Employees of all ages can adapt successfully when organisations provide continuous professional development and supportive leadership. Older workers often approach change cautiously because they have experienced previous organisational successes and failures, allowing them to evaluate risks more effectively. Their experience can therefore strengthen decision-making during periods of transformation instead of slowing innovation.",
            ],
          },
        ],
        // bgImg: [{ height: 'full', link: '/bg-city.png' }, { height: 160, link: '/bg-ground.png' }]
      }, 
      {
        pageId: 5,
        title: "4. Cost",
        data: [
          {
            type: "text_only",
            content: [
              "Some employers avoid hiring older workers because they believe higher salaries and healthcare costs outweigh potential benefits. This assumption ignores hidden organisational costs such as recruitment, onboarding, and the loss of institutional knowledge when experienced staff leave. OECD research suggests that age-diverse workplaces improve collaboration, strengthen mentoring relationships, and reduce employee turnover. As populations continue ageing across many countries, governments increasingly encourage lifelong employment policies because retaining experienced workers contributes to sustainable economic growth.",
            ],
          },
        ],
        // bgImg: [{ height: 'full', link: '/bg-city.png' }, { height: 160, link: '/bg-ground.png' }]
      }, 
      {
        pageId: 6,
        title: "Conclusion",
        data: [
          {
            type: "text_only",
            content: [
              "Overall, misconceptions about older adults are largely based on stereotypes rather than evidence. As life expectancy increases and retirement patterns evolve, older people continue to make valuable economic and social contributions. Creating age-inclusive workplaces, providing lifelong learning opportunities, and challenging ageism will enable societies to benefit from the experience, resilience, and knowledge of older generations.",
            ],
          },
        ],
        // bgImg: [{ height: 'full', link: '/bg-city.png' }, { height: 160, link: '/bg-ground.png' }]
      },
    ],
  },
];
