export const data = {
    personal: [
        {
            pageId: 1,
            title: "Personal Factors",
            data: [{
                type: "bullets", // Loại màn hình chỉ có chữ  ,
                content: [
                    "This section continues the discussion of theory and background about teenagers and economic behavior. While social environment and family background are important, research shows that personal factors also play a major role in shaping how teenagers interact with money, work, and entrepreneurship. These factors include personality, personal skills, and personal goals. Studies in entrepreneurship and education suggest that the foundations of entrepreneurial thinking often begin developing during adolescence."
                ]
            }
            ],
            bgImg: '/bg-moutntain.png'
        },
        {
            pageId: 2,
            title: "1. Research on Entrepreneurial Intention in Young People",
            type: "bullets", // Loại màn hình có danh sách gạch đầu dòng 
            data: [{
                type: "bullets", // Loại màn hình có danh sách gạch đầu dòng ,
                content: [
                    "A well-known study by Krueger, Reilly, and Carsrud (2000) in the Journal of Business Venturing explains that entrepreneurial intentions are usually formed before individuals actually start a business. The study suggests that three main factors influence entrepreneurial intention: attitude toward entrepreneurship, perceived ability to start a business, and social influence.",
                    "Another important study by Liñán and Chen (2009), published in Entrepreneurship Theory and Practice, developed a scale to measure entrepreneurial intention among students. Their findings showed that students who have strong confidence in their abilities and a positive view of entrepreneurship are more likely to consider starting a business in the future.",
                    "Researchers in the Journal of Business Research have also suggested that adolescence is an important stage for developing 'occupational identity', which means that young people begin imagining their future careers. At this stage, teenagers may start thinking about becoming entrepreneurs, especially when they are exposed to business ideas or digital economic opportunities."
                ]
            }
            ],
            bgImg: '/bg-moutntain.png'
        },
        {
            pageId: 3,
            title: "2. Global Data on Youth Entrepreneurship ",
            data: [
                {
                    type: 'bullets',
                    content: [
                        "Data from international entrepreneurship studies also shows that young people are increasingly interested in entrepreneurship. The Global Entrepreneurship Monitor (GEM) reports that a significant percentage of young people express interest in starting a business in the future."
                    ]
                },
                {
                    type: "table", // Loại màn hình chứa bảng dữ liệu  
                    tableData: {
                        headers: ["Age Group", "Interest in Starting a Business (%)", "Common Motivation"],
                        rows: [
                            ["15 - 18", "35%", "Curiosity and independence"],
                            ["18 - 24", "42%", "Career opportunities"],
                            ["25 - 34", "48%", "Financial independence"]
                        ]
                    },
                },
                {
                    type: 'bullets',
                    content: [
                        "This data suggests that entrepreneurial interest often begins during the teenage years and continues increasing as individuals enter adulthood."
                    ]
                },
            ],
            bgImg: '/bg-moutntain.png'
        },
        {
            pageId: 4,
            title: "3. Personal Factors Influencing Teen Entrepreneurship",
            data: [
                {
                    type: 'bullets',
                    content: [
                        "Data from international entrepreneurship studies also shows that young people are increasingly interested in entrepreneurship. The Global Entrepreneurship Monitor (GEM) reports that a significant percentage of young people express interest in starting a business in the future."
                    ]
                },
                {
                    type: "table", // Loại màn hình chứa bảng dữ liệu  
                    tableData: {
                        headers: ["Factor", "Description", "Possible Impact"],
                        rows: [
                            ["Personality", "Traits such as curiosity, creativity, and persistence", "Teenagers may explore business ideas or new economic activities"],
                            ["Skills", "Digital skills, communication skills, and financial literacy", " Skills enable teenagers to create value and earn income"],
                            ["Personal Goals", "Desire for independence or career ambition", "Goals motivate teenagers to experiment with entrepreneurship"]
                        ]
                    },
                },
            ],
            bgImg: '/bg-moutntain.png'
        },
    ],
    family: [
        // Cấu trúc 10 màn hình tương tự cho tab Family
    ],
    external: [
        // Cấu trúc 10 màn hình tương tự cho tab External
    ]
};

