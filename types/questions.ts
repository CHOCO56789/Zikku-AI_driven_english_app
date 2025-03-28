// 問題タイプをEnum型として定義
export enum QuestionType {
    MULTIPLE_CHOICE = "multiple_choice",
    TRUE_FALSE = "truefalse",
    WORD_BANK = "word_bank",
    REORDER = "reorder",
    FILL_BLANK = "fill_blank",
    MATCHING = "matching",
    SHORT_ANSWER = "shortanswer"
}

// CEFRレベルをEnum型として定義
export enum CEFRLevel {
    A1 = "A1",
    A2 = "A2",
    B1 = "B1",
    B2 = "B2",
    C1 = "C1",
    C2 = "C2"
}

export enum SkillCategory {
    READING_COMPREHENSION = "reading_comprehension",
    VOCABULARY = "vocabulary",
    GRAMMAR = "grammar",
    EXPRESSION = "expression",
    CULTURAL_KNOWLEDGE = "cultural_knowledge"
}

export interface Question {
    questionId: string;
    type: QuestionType;
    difficulty: CEFRLevel;
    targetSkill: SkillCategory; // 必須フィールドに変更
    subSkills?: string[]; // 詳細なスキルタグを追加
    question: string;
    options: string[];
    answer: string[];
    explanation: string;
    articleReference: ArticleReference;
    status: "draft"|"publish"|"private"|"future";
    metadata?: {
        averageSuccessRate?: number;
        attemptCount?: number;
        lastUsed?: Date;
    }
}

interface ArticleReference { // 記事参照情報・ポインター情報
    articleId: string;
    sectionId?: string;
    paragraphIndex?: number;
    relevantQuote?: string;//該当する引用文
    created_at: string;
    updated_at: string;
}