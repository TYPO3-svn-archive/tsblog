lib.menuCategories = CONTENT
lib.menuCategories {
	table = tx_tsblog_categories
	select {
		join = tx_tsblog_posts
		selectFields = tx_tsblog_categories.*, count(*) quantity
		pidInList = {$plugin.tx_tsblog.storagePid}
		where = FIND_IN_SET(tx_tsblog_categories.uid, tx_tsblog_posts.categories)
		groupBy = tx_tsblog_categories.uid
		orderBy = tx_tsblog_categories.title
	}

	renderObj = COA
	renderObj {
		10 = TEXT
		10 {
			field = title
			typolink {
				parameter = {$plugin.tx_tsblog.listViewPid}
				additionalParams.field = uid
				additionalParams.wrap = &tx_tsblog[category_uid]=|
				useCacheHash = 1
			}
		}
		20 = TEXT
		20 {
			field = quantity
			noTrimWrap = | <span class="count">(|)</span>|
		}
		wrap = <li>|</li>
	}
	
	wrap = <ul class="category-menu">|</ul>
}