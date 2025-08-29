export async function GET() {
  const baseUrl = 'https://gjcc.or.kr'
  
  const rssContent = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>광주문화진흥센터</title>
    <link>${baseUrl}</link>
    <description>문화로 행복한 광주를 만드는 광주문화진흥센터의 최신 소식</description>
    <language>ko</language>
    <copyright>© 2024 광주문화진흥센터. All rights reserved.</copyright>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    
    <item>
      <title>2024년 하반기 인문학 강좌 수강생 모집</title>
      <link>${baseUrl}/notice/1</link>
      <description>광주문화진흥센터에서 2024년 하반기 인문학 강좌 수강생을 모집합니다. 다양한 주제의 강좌를 준비했으니 많은 관심 부탁드립니다.</description>
      <pubDate>${new Date('2024-01-15').toUTCString()}</pubDate>
      <guid isPermaLink="true">${baseUrl}/notice/1</guid>
      <category>공지사항</category>
    </item>
    
    <item>
      <title>원데이 클래스 - 도자기 공예 체험</title>
      <link>${baseUrl}/program/oneday</link>
      <description>일상에서 즐기는 특별한 예술 체험, 도자기 공예 원데이 클래스를 진행합니다.</description>
      <pubDate>${new Date('2024-01-10').toUTCString()}</pubDate>
      <guid isPermaLink="true">${baseUrl}/program/oneday-1</guid>
      <category>프로그램</category>
    </item>
    
    <item>
      <title>신년음악회 '희망의 선율' 개최</title>
      <link>${baseUrl}/notice/events</link>
      <description>2024년을 맞아 광주시민을 위한 특별한 신년음악회를 개최합니다.</description>
      <pubDate>${new Date('2024-01-05').toUTCString()}</pubDate>
      <guid isPermaLink="true">${baseUrl}/notice/events-1</guid>
      <category>행사</category>
    </item>
    
    <item>
      <title>문화예술 팟캐스트 '광주의 소리' 시작</title>
      <link>${baseUrl}/podcast</link>
      <description>광주의 문화와 예술을 담은 팟캐스트 '광주의 소리'가 시작됩니다. 매주 새로운 에피소드로 찾아뵙겠습니다.</description>
      <pubDate>${new Date('2024-01-01').toUTCString()}</pubDate>
      <guid isPermaLink="true">${baseUrl}/podcast-launch</guid>
      <category>팟캐스트</category>
    </item>
    
    <item>
      <title>겨울방학 특별 프로그램 안내</title>
      <link>${baseUrl}/program</link>
      <description>겨울방학을 맞아 어린이와 청소년을 위한 특별 문화프로그램을 준비했습니다.</description>
      <pubDate>${new Date('2023-12-20').toUTCString()}</pubDate>
      <guid isPermaLink="true">${baseUrl}/program-winter</guid>
      <category>프로그램</category>
    </item>
    
    <item>
      <title>2024년 상반기 프로그램 사전 안내</title>
      <link>${baseUrl}/program</link>
      <description>2024년 상반기에 진행될 다양한 문화프로그램을 미리 소개합니다.</description>
      <pubDate>${new Date('2023-12-15').toUTCString()}</pubDate>
      <guid isPermaLink="true">${baseUrl}/program-preview</guid>
      <category>프로그램</category>
    </item>
    
    <item>
      <title>광주문화진흥센터 연말 휴관 안내</title>
      <link>${baseUrl}/notice</link>
      <description>연말연시 휴관 일정을 안내드립니다. 새해에는 더 나은 모습으로 찾아뵙겠습니다.</description>
      <pubDate>${new Date('2023-12-10').toUTCString()}</pubDate>
      <guid isPermaLink="true">${baseUrl}/notice-holiday</guid>
      <category>공지사항</category>
    </item>
    
    <item>
      <title>인문학 특강 - 광주의 역사와 문화</title>
      <link>${baseUrl}/program/humanities</link>
      <description>광주의 역사와 문화를 깊이 있게 탐구하는 인문학 특강을 개최합니다.</description>
      <pubDate>${new Date('2023-12-05').toUTCString()}</pubDate>
      <guid isPermaLink="true">${baseUrl}/humanities-special</guid>
      <category>프로그램</category>
    </item>
    
    <item>
      <title>공연예술 프로그램 수강생 모집</title>
      <link>${baseUrl}/program/performance</link>
      <description>연극, 무용, 음악 등 다양한 공연예술 프로그램 수강생을 모집합니다.</description>
      <pubDate>${new Date('2023-12-01').toUTCString()}</pubDate>
      <guid isPermaLink="true">${baseUrl}/performance-recruit</guid>
      <category>프로그램</category>
    </item>
    
    <item>
      <title>문화진흥센터 홈페이지 리뉴얼 오픈</title>
      <link>${baseUrl}</link>
      <description>더욱 편리하고 아름다운 디자인으로 홈페이지가 새롭게 단장되었습니다.</description>
      <pubDate>${new Date('2023-11-25').toUTCString()}</pubDate>
      <guid isPermaLink="true">${baseUrl}/renewal</guid>
      <category>공지사항</category>
    </item>
  </channel>
</rss>`

  return new Response(rssContent, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}