import { supabase } from '@/libs/supabase';
import { Question } from '@/types/questions';

const transformToQuestion = (data: any): Question => {
    return {
        questionId: data.question_id,
        type: data.type,
        difficulty: data.difficulty,
        targetSkill: data.target_skill,
        subSkills: data.sub_skills,
        question: data.question,
        options: data.options,
        answer: data.answer,
        explanation: data.explanation,
        articleReference: data.article_reference,
        status: data.status,
        metadata: {
            averageSuccessRate: data.metadata.average_success_rate,
            attemptCount: data.metadata.attempt_count,
            lastUsed: data.metadata.last_used,
        },
    }
}

export async function getLesson(id: string): Promise<Question[]> {
    try {
        const { data, error } = await supabase
            .from('questions')
            .select('*')
            .eq('article_id', id)
            .eq('status', 'publish');

        if (error) {
            console.error('Supabase error:', error);
            return [];
        }

        if (!data || data.length === 0) {
            return [];
        }

        return data.map(transformToQuestion);
    } catch (error) {
        console.error('Error fetching questions:', error);
        return [];
    }
} 