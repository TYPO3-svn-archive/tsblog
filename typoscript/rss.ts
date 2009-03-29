rss = PAGE
rss {

	typeNum = 100

	config {
		disableAllHeaderCode = 1
		admPanel = 0
	}
	
	wrap (
<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0">
  <channel>
    <title>Typoscript Blog</title>
    <link>http://usergroup.local/</link>
    <description>Testfeed</description>
	|  
  </channel>
</rss>
)
	
	10 < lib.blogListView
	10.renderObj >
	10.renderObj = COA
	10.renderObj {
		10 = TEXT
		10 {
			htmlSpecialChars = 1
			field = title
			wrap = <title>|</title>
		}
		
		20 = TEXT
		20 {
			htmlSpecialChars = 1
			field = body
			crop = 200 | ... | 1
			wrap = <description>|</description>
		}
		
		30 = TEXT
		30 {
			htmlSpecialChars = 1
			cObject = TEXT
			cObject {
				typolink < lib.typolinkToSingleView
				returnLast = url
			}
			wrap = <link>|</link>
		}
		
		40 = TEXT
		40 {
			field = uid
			wrap = <guid>|</guid>
		}
		
		50 = TEXT
		50 {
			field = tstamp
			date = r
			wrap = <pubDate>|</pubDate>
		}
		
		wrap = <item>|</item>
		
	}
}