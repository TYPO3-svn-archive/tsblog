page {
	headerData.20 = TEXT
	headerData.20 {
		typolink {
			parameter = {$plugin.tx_tsblog.listViewPid}
			additionalParams = &type=100
			returnLast = url
		}
		wrap = <link rel="alternate" type="application/rss+xml" title="RSS" href="|" />
	}
}