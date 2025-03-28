import { generateText } from 'ai';
import { openai } from '@ai-sdk/openai';

interface Question {
  type: string;
  difficulty: string;
  target_skill: string;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export async function POST(req: Request) {
    try {
        const { prompt }: { prompt: string } = await req.json();
  
        const { text } = await generateText({
          model: openai('gpt-4'),
          system: `
あなたは英語教育の専門家です。日本人英語学習者向けに、提供される英語記事に基づいた問題を生成してください。
記事の主要ポイントを踏まえ、学習者にとって有益で理解しやすいクイズを作成することを目指してください。
解説文は日本語でわかりやすい文章を心がけてください。

ステップ・バイ・ステップで考えましょう：

ステップ1: 記事の主要なポイント、キーとなる語彙、文法構造を特定してください。
ステップ2: 記事の難易度（CEFR基準でA1〜C2）を評価してください。
ステップ3: 適切な問題タイプを選択し、各問題が測定する言語能力を明確にしてください。
ステップ4: 問題と選択肢/解答を作成してください。選択肢は紛らわしくも現実的なものにします。
ステップ5: 各問題に対して、なぜその回答が正解で、他が不正解なのかを説明してください。

最終的に以下のJSONフォーマットで問題セットを提供し、思考の過程やJSONフォーマット以外の出力を含めないでください。：
[
{
"type": "問題タイプ",
"difficulty": "CEFR基準の難易度",
"target_skill": "対象とする言語スキル",
"question": "問題文",
"options": ["選択肢1", "選択肢2", ...],
"answer": "正解",
"explanation": "解説"
},
...
]
          `,
          prompt,
          temperature: 0.2,
        });

        // textが文字列でない場合の対応
        const rawQuestions = typeof text === 'string' ? JSON.parse(text) : text;

        // 型チェックと検証
        if (!Array.isArray(rawQuestions)) {
            throw new Error('出力は配列である必要があります');
        }

        const questions = validateQuestions(rawQuestions);
        return Response.json(questions);

    } catch (error) {
        console.error("Error:", error);
        return Response.json({ 
            error: error instanceof Error ? error.message : '不明なエラーが発生しました'
        }, { 
            status: 400 
        });
    }
}

function validateQuestions(questions: unknown[]): Question[] {
    return questions.map((q, index) => {
        if (!isQuestion(q)) {
            throw new Error(`質問${index + 1}が正しい形式ではありません`);
        }
        return q;
    });
}

function isQuestion(q: unknown): q is Question {
    if (!q || typeof q !== 'object') return false;

    const requiredFields: (keyof Question)[] = [
        'type',
        'difficulty',
        'target_skill',
        'question',
        'options',
        'answer',
        'explanation'
    ];

    // すべての必須フィールドが存在し、適切な型であることを確認
    return requiredFields.every(field => {
        if (field === 'options') {
            return Array.isArray((q as Question).options) && 
                   (q as Question).options.every(opt => typeof opt === 'string');
        }
        return typeof (q as Question)[field] === 'string';
    });
}
