// app/components/TestComponent.tsx
'use client'

import { useState } from 'react'

interface SourceReference {
  url: string;
  title: string;
  trust_score: number;
  accessed_at: string;
}

interface ImageData {
  url: string;
  alt: string;
  credit?: string;
  type?: 'featured' | 'thumbnail' | 'content' | 'gallery';
  caption?: string;
}

interface ArticleData {
  base_title: string;
  target_title: string;
  status: 'draft' | 'publish' | 'private' | 'future';
  category: 'world' | 'business' | 'technology' | 'entertainment' | 'sports' | 'science' | 'health';
  base_language: string;
  target_language: string;
  base_text: string;
  target_text: string;
  is_ai_generated: boolean;
  source_url: {
    references: SourceReference[];
  };
  metadata: {
    tags: string[];
    images: ImageData[];
  };
}

export default function TestComponent() {
  const [message, setMessage] = useState('')

  const handleSubmit = async () => {
    try {
      const articleData: ArticleData = {
        base_title: 'OpenAI Announces Revolutionary AI Model for Medical Research',
        target_title: 'OpenAI、医学研究向けの革新的AIモデルを発表',
        status: 'draft',
        category: 'technology',
        base_language: 'en',
        target_language: 'ja',
        base_text: `In a groundbreaking announcement today, OpenAI unveiled its latest artificial intelligence model specifically designed for medical research. The new model, dubbed "MedicalMind," represents a significant leap forward in the application of AI to healthcare and medical research.

The model has demonstrated unprecedented capabilities in analyzing medical literature, interpreting clinical trial data, and suggesting novel research directions. During initial testing, MedicalMind successfully processed over 2 million medical research papers and identified previously unknown connections between different medical conditions.

"This is a transformative moment in medical research," said Dr. Sarah Chen, lead researcher at OpenAI's medical AI division. "MedicalMind can accomplish in hours what would take human researchers months or even years to discover."

Key features of the new model include:
- Real-time analysis of medical research papers
- Advanced pattern recognition in clinical trial data
- Multi-language support for global research collaboration
- Integration with existing medical databases

The development team emphasized that MedicalMind is designed to augment, not replace, human researchers. The model has already assisted in identifying several promising new drug candidates for treating rare diseases.`,
        target_text: `OpenAIは本日、医学研究に特化した最新の人工知能モデルを発表しました。「MedicalMind」と名付けられたこの新モデルは、ヘルスケアと医学研究におけるAI応用の分野で大きな飛躍を表しています。

このモデルは、医学文献の分析、臨床試験データの解釈、そして新しい研究方向の提案において、前例のない能力を実証しています。初期テストでは、MedicalMindは200万以上の医学研究論文を処理し、異なる医療状態間の未知の関連性を特定することに成功しました。

「これは医学研究における革新的な瞬間です」とOpenAIの医療AI部門の主任研究員であるサラ・チェン博士は述べています。「MedicalMindは、人間の研究者が数ヶ月または数年かかる発見を数時間で成し遂げることができます。」

新モデルの主な特徴：
- 医学研究論文のリアルタイム分析
- 臨床試験データにおける高度なパターン認識
- グローバルな研究協力のための多言語サポート
- 既存の医療データベースとの統合

開発チームは、MedicalMindが人間の研究者に取って代わるのではなく、補完することを目的として設計されていることを強調しています。このモデルは既に、希少疾患の治療のための有望な新薬候補の特定を支援しています。`,
        is_ai_generated: false,
        source_url: {
          references: [
            {
              url: 'https://openai.com/research/medicalmind',
              title: 'MedicalMind: A New Era in AI-Assisted Medical Research',
              trust_score: 0.98,
              accessed_at: new Date().toISOString()
            },
            {
              url: 'https://medical-ai-journal.org/breakthrough-2024',
              title: 'Comprehensive Analysis of MedicalMind AI System',
              trust_score: 0.92,
              accessed_at: new Date().toISOString()
            }
          ]
        },
        metadata: {
          tags: ['AI', 'Medical Research', 'Healthcare', 'OpenAI', 'Machine Learning', 'Clinical Trials'],
          images: [
            {
              url: 'https://example.com/medicalmind-interface.jpg',
              alt: 'MedicalMind AIインターフェース',
              credit: 'OpenAI Research',
              type: 'featured',
              caption: 'MedicalMindの研究者向けインターフェース画面'
            },
            {
              url: 'https://example.com/research-visualization.jpg',
              alt: 'Medical research connection map',
              type: 'content',
              caption: 'AIが発見した医療研究間の新しい関連性の可視化'
            },
            {
              url: 'https://example.com/research-lab.jpg',
              alt: 'OpenAI Medical Research Lab',
              type: 'gallery',
              credit: '© OpenAI 2024'
            }
          ]
        }
      }

      const response = await fetch('/api/v1/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(articleData)
      })

      const data = await response.json()
      if (response.ok) {
        setMessage('投稿成功！')
        console.log('Created article:', data)
      } else {
        setMessage(`エラー: ${data.error}`)
        console.error('Error details:', data)
      }
    } catch (error) {
      setMessage('エラーが発生しました')
      console.error('Request error:', error)
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">テストページ</h1>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        テストデータを投稿
      </button>
      {message && (
        <p className={`mt-4 p-2 border rounded ${
          message.includes('エラー') ? 'bg-red-100' : 'bg-green-100'
        }`}>
          {message}
        </p>
      )}
    </div>
  )
}