import { NextResponse } from 'next/server';

export const revalidate = 3600; // cache for 1 hour

export async function GET() {
  const apiKey = process.env.CURRENTS_API_KEY;

  if (!apiKey || apiKey === 'YOUR_API_KEY_HERE') {
    return NextResponse.json(
      { news: [], error: 'API key not configured' },
      { status: 200 }
    );
  }

  try {
    const res = await fetch(
      'https://api.currentsapi.services/v1/latest-news?language=en&country=IN&category=business',
      {
        headers: { Authorization: apiKey },
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      console.error('Currents API error:', res.status, res.statusText);
      return NextResponse.json({ news: [], error: 'API request failed' }, { status: 200 });
    }

    const data = await res.json();

    // Return only what we need (first 5 articles)
    const news = (data.news || []).slice(0, 5).map((article: { title: string; url: string; published: string; category: string[] }) => ({
      title: article.title,
      url: article.url,
      published: article.published,
      category: Array.isArray(article.category) ? article.category[0] : 'News',
    }));

    return NextResponse.json({ news });
  } catch (err) {
    console.error('Failed to fetch news:', err);
    return NextResponse.json({ news: [], error: 'Fetch failed' }, { status: 200 });
  }
}
