lib.menuMonths = CONTENT
lib.menuMonths {
	table = tx_tsblog_posts
	select {
		pidInList = {$plugin.tx_tsblog.storagePid}
		orderBy = title asc
		selectFields = MONTH(FROM_UNIXTIME(postdate)) as month, YEAR(FROM_UNIXTIME(postdate)) as year, count(*) as quantity, MAX(postdate) as timeStampOfLastPostInMonth
		groupBy = year, month
		orderBy = year desc, month desc
	}

	renderObj = COA
	renderObj {
	
		5 = TEXT
		5 {
			field = year
			if {
				value.field = year
				equals.data = register:lastUsedYear
				negate = 1
			}
			wrap = <li class="year">|</li>
		}
	
		10 = COA
		10 {
			10 = TEXT
			10 {
				cObject = TEXT
				cObject {
					field = timeStampOfLastPostInMonth
					date = F
				}
	
				typolink {
					parameter = {$plugin.tx_tsblog.listViewPid}
					additionalParams.field = uid
					additionalParams.dataWrap = &tx_tsblog[month]={field:month}&tx_tsblog[year]={field:year}
					useCacheHash = 1
				}
			}
			20 = TEXT
			20 {
				field = quantity
				noTrimWrap = | <span class="count">(|)</span>|
			}
			wrap = <li class="month">|</li>
		}
		
		20 = LOAD_REGISTER
		20.lastUsedYear.cObject = TEXT
		20.lastUsedYear.cObject.field = year
	}
	
	wrap = <ul class="months-menu">|</ul>
}