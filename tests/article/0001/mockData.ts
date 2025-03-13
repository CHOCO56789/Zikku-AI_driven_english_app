export const mockArticles = [
    {
      id: "1",
      title: "Zipline",
      content: `
      <h2>Introduction</h2>
      <p>Zipline is a pioneering drone delivery company based in California, founded in 2014. It specializes in delivering medical supplies and healthcare products, particularly to remote areas. <span class="reference" data-ref="1">[1]</span> Zipline began its operations in Rwanda in 2016, delivering blood and medical products, and has since expanded to several countries including Ghana, Nigeria, and Japan. <span class="reference" data-ref="2">[2]</span> The company uses all-electric drones, which significantly reduce carbon emissions compared to traditional delivery methods.Zipline's mission is to provide fast, accessible, and sustainable delivery solutions globally. Its drones can deliver up to seven times faster than traditional methods, making them ideal for urgent medical deliveries. Zipline also partners with major retailers like Walmart for non-medical deliveries, further expanding its reach.</p>
      <h2>Operations</h2>
      <p>Zipline began its operations in Rwanda in 2016, delivering blood and medical products, and has since expanded to several countries including Ghana, Nigeria, and Japan. The company uses all-electric drones, which significantly reduce carbon emissions compared to traditional delivery methods.Zipline's mission is to provide fast, accessible, and sustainable delivery solutions globally. Its drones can deliver up to seven times faster than traditional methods, making them ideal for urgent medical deliveries. Zipline also partners with major retailers like Walmart for non-medical deliveries, further expanding its reach.</p>
      `, 
      japanese_title: "Zipline社について",
      japanese_content: `
      <h2>ジップライン社について</h2>
      <p>ジップラインは、2014年にカリフォルニアで設立された先駆的なドローン配送会社です。特に医療用品や医薬品の配送に特化しており、特に遠隔地への配送を得意としています。<span class="reference" data-ref="1">[1]</span></p>
      <h2>運用</h2>
      <p>ジップラインは2016年にルワンダで運用を開始し、血液や医薬品を配送し、その後ガーナ、ナイジェリア、日本など多くの国に展開しています。<span class="reference" data-ref="2">[2]</span></p>
      `,
      difficulty: "INTERMEDIATE",
      topic: "health",
      vocabulary: [
        {
          word: "essential",
          meaning: "不可欠な",
          example: "Sleep is essential for good health."
        },
        {
          word: "pioneering",
          meaning: "先駆的な",
          example: "Zipline is a pioneering company in drone delivery."
        },
        {
          word: "sustainable",
          meaning: "持続可能な",
          example: "Sustainable practices are important for the environment."
        },
        {
          word: "accessible",
          meaning: "アクセスしやすい",
          example: "The service is accessible to everyone."
        }
      ],
      grammar_points: [
        {
          point: "Present Simple for Facts",
          explanation: "一般的な事実を述べる際に使用",
          example: "Exercise improves your health."
        }
      ],
      created_at: "2024-03-13T10:00:00Z",
      references: [
        {
          title: "Zipline's Official Website",
          url: "https://www.flyzipline.com/"
        },
        {
          title: "Drone Delivery in Rwanda",
          url: "https://www.example.com/rwanda-drone-delivery"
        }
      ],
      questions: {
        multiple_choice: [
          {
            id: "q1",
            question: "What is Zipline's main business?",
            options: [
              "Food delivery service",
              "Drone delivery for medical supplies",
              "Passenger drone service",
              "Online shopping platform"
            ],
            correct_answer: 1,
            japanese_question: "Zipline社の主な事業は何ですか？",
            japanese_options: [
              "食品配達サービス",
              "医療品のドローン配送",
              "旅客用ドローンサービス",
              "オンラインショッピングプラットフォーム"
            ],
            explanation: "Zipline specializes in delivering medical supplies and healthcare products using drones.",
            japanese_explanation: "Ziplineは、ドローンを使用した医療用品や医療機器の配送を専門としています。"
          }
        ],
        fill_in_blanks: [
          {
            id: "f1",
            question: "Zipline was founded in _____ and started operations in Rwanda in _____.",
            answers: ["2014", "2016"],
            japanese_question: "Ziplineは_____年に設立され、_____年にルワンダでの運用を開始しました。",
            explanation: "Zipline was founded in 2014 and began operations in Rwanda in 2016.",
            japanese_explanation: "Ziplineは2014年に設立され、2016年にルワンダでの運用を開始しました。"
          }
        ],
        comprehension: [
          {
            id: "c1",
            question: "Explain how Zipline contributes to environmental sustainability.",
            japanese_question: "Ziplineが環境の持続可能性にどのように貢献しているか説明してください。",
            sample_answer: "Zipline uses all-electric drones which significantly reduce carbon emissions compared to traditional delivery methods.",
            japanese_sample_answer: "Ziplineは全電気式のドローンを使用しており、従来の配送方法と比較して二酸化炭素排出量を大幅に削減しています。",
            key_points: [
              "Use of electric drones",
              "Reduction in carbon emissions",
              "Comparison with traditional methods"
            ]
          }
        ],
        vocabulary_quiz: [
          {
            id: "v1",
            word: "pioneering",
            question: "Choose the correct meaning of 'pioneering' in the context:",
            options: [
              "先駆的な",
              "困難な",
              "重要な",
              "古い"
            ],
            correct_answer: 0,
            example_sentence: "Zipline is a pioneering company in drone delivery.",
            explanation: "In this context, 'pioneering' means being one of the first to develop or use new methods."
          }
        ]
      }
    },
    // ... 他の記事
  ];