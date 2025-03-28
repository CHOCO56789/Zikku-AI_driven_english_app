'use client';

import { useState, useEffect } from 'react';
import { Question } from '@/types/questions';
import { getLesson } from '@/features/lessons/getLesson';

// サンプルデータ
// const sampleQuestions: Question[] = [
//   {
//     questionId: "1",
//     type: QuestionType.MULTIPLE_CHOICE,
//     difficulty: CEFRLevel.B1,
//     targetSkill: SkillCategory.READING_COMPREHENSION,
//     question: "What is the main point of the article?",
//     options: [
//       "AI is replacing human healthcare professionals.",
//       "AI is being used to predict patient outcomes.",
//       "AI is transforming the healthcare industry.",
//       "AI is only used for analyzing medical images."
//     ],
//     answer: ["AI is transforming the healthcare industry."],
//     explanation: "記事全体を通して、AIが医療業界を変革しているという主旨が述べられています。AIが医療画像の分析や患者の結果予測、治療計画の最適化、新薬の発見に使用されていることが示されていますが、これらはその一部分に過ぎません。",
//     articleReference: {
//       articleId: "",
//       sectionId: "",
//       paragraphIndex: 0,
//       relevantQuote: "",
//       created_at: new Date().toISOString(),
//       updated_at: new Date().toISOString()
//     },
//     status: "publish"
//   },
//   {
//     questionId: "2",
//     type: QuestionType.MULTIPLE_CHOICE,
//     difficulty: CEFRLevel.B1, 
//     targetSkill: SkillCategory.READING_COMPREHENSION,
//     question: "What does 'augment' mean in this context?",
//     options: [
//       "Replace",
//       "Decrease", 
//       "Increase or improve",
//       "Destroy"
//     ],
//     answer: ["Increase or improve"],
//     explanation: "この文脈では、「augment」は「増加させる」または「改善する」を意味します。専門家はAIが医療専門家を置き換えるのではなく、補完するためのものであると強調しています。つまり、AIは医療の意思決定をサポートする強力なツールとして、医療専門家の能力を増加または改善することを意図しています。",
//     articleReference: {
//       articleId: "",
//       sectionId: "",
//       paragraphIndex: 0,
//       relevantQuote: "",
//       created_at: new Date().toISOString(),
//       updated_at: new Date().toISOString()
//     },
//     status: "publish"
//   },
//   {
//     questionId: "3",
//     type: QuestionType.MULTIPLE_CHOICE,
//     difficulty: CEFRLevel.B1,
//     targetSkill: SkillCategory.READING_COMPREHENSION,
//     question: "Choose the correct form of the verb for the following sentence: 'These AI systems _____ thousands of scans in minutes.'",
//     options: [
//       "can process",
//       "could processed",
//       "can processed", 
//       "could processing"
//     ],
//     answer: ["can process"],
//     explanation: "この文では、現在の能力を表すために「can」を使用します。また、モーダル動詞「can」の後には基本形の動詞が来るため、「process」が正しい形です。",
//     articleReference: {
//       articleId: "",
//       sectionId: "",
//       paragraphIndex: 0,
//       relevantQuote: "",
//       created_at: new Date().toISOString(),
//       updated_at: new Date().toISOString()
//     },
//     status: "publish"
//   },
//   {
//     questionId: "4",
//     type: QuestionType.MULTIPLE_CHOICE,
//     difficulty: CEFRLevel.B1,
//     targetSkill: SkillCategory.READING_COMPREHENSION,
//     question: "What is the role of AI in healthcare according to the article?",
//     options: [
//       "To replace healthcare professionals",
//       "To support clinical decision-making",
//       "To decrease the accuracy of medical image analysis",
//       "To slow down the diagnosis time"
//     ],
//     answer: ["To support clinical decision-making"],
//     explanation: "記事によれば、AIの役割は医療専門家を置き換えることではなく、臨床判断を支援することです。AIは医療画像の分析を高速化し、診断時間を大幅に短縮するなど、医療業界における多くのプロセスを改善しています。",
//     articleReference: {
//       articleId: "",
//       sectionId: "",
//       paragraphIndex: 0,
//       relevantQuote: "",
//       created_at: new Date().toISOString(),
//       updated_at: new Date().toISOString()
//     },
//     status: "publish"
//   }
// ];
// // 記事クイズの取得・生成
// const fetchQuestions = async (articleId: string, content: string, title: string) => {

//     const response = await fetch(`/api/articles/${articleId}/questions`);
//     const data = await response.json();
//     return data;
// }

interface LessonCardProps {
    articleId: string;
}

export default function LessonCard({ articleId }: LessonCardProps) {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                setIsLoading(true);
                const questionData = await getLesson(articleId);
                if (questionData && questionData.length > 0) {
                    setQuestions(questionData);
                } else {
                    setError('問題が見つかりませんでした');
                }
            } catch (err) {
                setError('エラーが発生しました');
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchQuestions();
    }, [articleId]);

    if (isLoading) return <div>読み込み中...</div>;
    if (error) return <div>{error}</div>;
    if (questions.length === 0) return <div>問題が見つかりませんでした</div>;

    const currentQuestion = questions[currentIndex];

    const handleAnswerSelect = (option: string) => {
        setSelectedAnswer(option);
        setShowExplanation(true);
    };

    const handleNextQuestion = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setSelectedAnswer(null);
            setShowExplanation(false);
        }
    };

    return (
        <div className="flex flex-col gap-4 p-6 outline outline-1 outline-gray-200 rounded-lg w-full max-w-2xl mx-auto">
            <div className="text-sm text-gray-500">
                問題 {currentIndex + 1}/{questions.length}
            </div>

            <h1 className="text-2xl font-normal text-gray-700">{currentQuestion.question}</h1>
            
            <div className="flex flex-col gap-2">
                {currentQuestion.options.map((option) => {
                    const isSelected = selectedAnswer === option;
                    const isCorrect = currentQuestion.answer.includes(option);
                    
                    let buttonClass = "p-4 rounded-md outline outline-1 outline-gray-200";
                    if (isSelected && isCorrect) {
                        buttonClass += " bg-green-100 outline-green-500";
                    } else if (isSelected && !isCorrect) {
                        buttonClass += " bg-red-100 outline-red-500";
                    }
                    
                    return (
                        <button 
                            key={option} 
                            className={buttonClass}
                            onClick={() => handleAnswerSelect(option)}
                            disabled={selectedAnswer !== null}
                        >
                            {option}
                        </button>
                    );
                })}
            </div>
            
            {showExplanation && (
                <div className="mt-4 p-4 bg-blue-50 rounded-md">
                    <p className="text-blue-700">{currentQuestion.explanation}</p>
                </div>
            )}

            {showExplanation && currentIndex < questions.length - 1 && (
                <button 
                    className="w-fit px-4 py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    onClick={handleNextQuestion}
                >
                    次の問題へ
                </button>
            )}
        </div>
    );
}