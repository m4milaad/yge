'use client';

import { useState, useEffect } from 'react';

interface NewsItem {
  title: string;
  source: string;
  url?: string;
}

export default function NewsTicker() {
  const [news, setNews] = useState<NewsItem[]>([
    { title: 'LATEST UPDATE: Yuva Global Enterprises launches new eco-friendly stationery line! Stay tuned for exciting offers...', source: 'YGE' },
    { title: 'TRENDING: #SupportLocalBusiness #QualityServices #YuvaGlobal', source: 'Social' },
    { title: 'NEWS: Check out our expanded Facility Management services for corporate clients.', source: 'YGE' },
  ]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    setLoading(true);
    try {
      // Try multiple free news sources
      const sources = [
        fetchFromNewsAPI(),
        fetchFromGNews(),
        fetchFromMediaStack(),
      ];

      // Try each source until one succeeds
      for (const source of sources) {
        try {
          const data = await source;
          if (data && data.length > 0) {
            // Mix company news with fetched news
            const companyNews = [
              { title: '🎉 SPECIAL OFFER: 20% off on all stationery items this week!', source: 'YGE Promotions' },
              { title: '✨ NEW ARRIVAL: Premium notebooks and art supplies now in stock', source: 'YGE Products' },
              { title: '🏆 ISO 9001:2015 Certified - Your trusted partner for quality services', source: 'YGE Certification' },
            ];
            
            setNews([...companyNews, ...data.slice(0, 3)]);
            break;
          }
        } catch (err) {
          console.log('Trying next news source...');
          continue;
        }
      }
    } catch (error) {
      console.log('Using default news');
    } finally {
      setLoading(false);
    }
  };

  // NewsAPI.org (Free tier: 100 requests/day)
  const fetchFromNewsAPI = async (): Promise<NewsItem[]> => {
    const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY || 'demo'; // Users can add their own key
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=business&pageSize=5&apiKey=${API_KEY}`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );
    
    if (!response.ok) throw new Error('NewsAPI failed');
    
    const data = await response.json();
    return data.articles?.map((article: any) => ({
      title: `📰 ${article.title}`,
      source: article.source.name,
      url: article.url,
    })) || [];
  };

  // GNews API (Free tier: 100 requests/day)
  const fetchFromGNews = async (): Promise<NewsItem[]> => {
    const API_KEY = process.env.NEXT_PUBLIC_GNEWS_API_KEY || 'demo';
    const response = await fetch(
      `https://gnews.io/api/v4/top-headlines?country=in&category=business&lang=en&max=5&apikey=${API_KEY}`,
      { next: { revalidate: 3600 } }
    );
    
    if (!response.ok) throw new Error('GNews failed');
    
    const data = await response.json();
    return data.articles?.map((article: any) => ({
      title: `📰 ${article.title}`,
      source: article.source.name,
      url: article.url,
    })) || [];
  };

  // MediaStack API (Free tier: 500 requests/month)
  const fetchFromMediaStack = async (): Promise<NewsItem[]> => {
    const API_KEY = process.env.NEXT_PUBLIC_MEDIASTACK_API_KEY || 'demo';
    const response = await fetch(
      `http://api.mediastack.com/v1/news?access_key=${API_KEY}&countries=in&categories=business&limit=5`,
      { next: { revalidate: 3600 } }
    );
    
    if (!response.ok) throw new Error('MediaStack failed');
    
    const data = await response.json();
    return data.data?.map((article: any) => ({
      title: `📰 ${article.title}`,
      source: article.source,
      url: article.url,
    })) || [];
  };

  return (
    <section className="marquee-container bg-blue-600 dark:bg-blue-800 text-white py-2.5">
      {loading && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
          <div className="animate-spin rounded-full h-3 w-3 border-2 border-white border-t-transparent"></div>
        </div>
      )}
      <div className="marquee-content">
        {news.map((item, index) => (
          <span key={index}>
            {item.url ? (
              <a 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition-colors"
              >
                {item.title}
              </a>
            ) : (
              item.title
            )}
            {index < news.length - 1 && <span className="mx-8 opacity-75">|</span>}
          </span>
        ))}
        {/* Duplicate for seamless loop */}
        {news.map((item, index) => (
          <span key={`dup-${index}`}>
            <span className="mx-8 opacity-75">|</span>
            {item.url ? (
              <a 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition-colors"
              >
                {item.title}
              </a>
            ) : (
              item.title
            )}
          </span>
        ))}
      </div>
    </section>
  );
}
