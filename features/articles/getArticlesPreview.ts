import { supabase } from '@/libs/supabase'
import { ArticlePreview } from '@/types/articles'

// APIレスポンスをArticlePreview型に変換する関数
function transformToArticlePreview(rawData: any): ArticlePreview {
  return {
    id: rawData.article_id,
    title: rawData.base_title,
    description: rawData.base_text?.substring(0, 100) + "...",
    imageUrl: rawData.metadata?.images[0]?.url || "/images/image.png",
    author: rawData.metadata?.authors?.[0] || "generated by Pattto",
    createdAt: rawData.created_at
  };
}

export async function getArticlesPreview(): Promise<ArticlePreview[]> {
  try {
    const { data, error } = await supabase
      .from('articles')
      .select(`
        article_id, 
        base_title, 
        base_text, 
        created_at, 
        metadata
      `)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Supabase error:', error)
      return []
    }

    return data.map(transformToArticlePreview)
  } catch (error) {
    console.error('Error fetching articles:', error)
    return []
  }
} 