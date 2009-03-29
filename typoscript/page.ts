page = PAGE
page {
 
	# Header
	10 = TEXT
	10 {
		value = Bear's Blog
		typolink {
			parameter = {$plugin.tx_tsblog.listViewPid}
		}
		wrap = <div id="header">|</div>
	}
 
	20 = COA
	20 {
 
		# Sidebar
		10 < styles.content.getLeft
		10.wrap = <div id="border-left">|</div>
 
		# Main content
		20 < styles.content.get
		20.wrap = <!--TYPO3SEARCH_begin--><div id="border-normal">|</div><!--TYPO3SEARCH_end-->

		wrap = <div id="content">|</div>
	}
 
	# Footer
	30 = COA
	30 {
		10 = TEXT
		10 {
			data = date:U
			strftime = %Y
			wrap = <p>&copy;&nbsp;|&nbsp;Fabrizio Branca</p>
		}
 
		20 = TEXT
		20 {
			value = TYPO3
			typolink {
				parameter = http://www.typo3.com
			}
			outerWrap = powered by&nbsp;|
		}
		wrap = <div id="footer">|</div>
	}
 
	wrap = <div id="body-container">|</div>
	
	# noindex, follow
	headerData.5 = TEXT
	headerData.5.value = <meta name="robots" content="noindex,follow" />
	
	# eigenen HTML-<title>
	config.noPageTitle = 1
	headerData.10 = TEXT
	headerData.10 {
		field = subtitle // title
		noTrimWrap = |<title>| &#171; Typoscript Blog</title>|
	}
 
	includeCSS.basic = EXT:tsblog/res/page.css
	includeCSS.extra = EXT:tsblog/res/extra.css
}