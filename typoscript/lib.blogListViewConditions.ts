[globalVar = GP:tx_tsblog|category_uid>0]

	lib.blogListView.stdWrap.preCObject = RECORDS
	lib.blogListView.stdWrap.preCObject {
		source.data = GPvar:tx_tsblog|category_uid
		source.intval = 1
		tables = tx_tsblog_categories
		conf.tx_tsblog_categories = TEXT
		conf.tx_tsblog_categories {
			field = title
		}
		wrap = <h1>Posts in der Kategorie "|"</h1>
	}

	lib.blogListView.select.max >
	lib.blogListView.select.andWhere {
		data = GPvar:tx_tsblog|category_uid
		intval = 1
		wrap = FIND_IN_SET(|, categories)
	}

[globalVar = GP:tx_tsblog|month>0]

	lib.blogListView.stdWrap.preCObject = TEXT
	lib.blogListView.stdWrap.preCObject.value = <h1>Blog Posts im Monat</h1>

	lib.blogListView.select.max >
	lib.blogListView.select.andWhere {

		cObject = COA
		cObject {
			10 = TEXT
			10 {
				data = GPvar:tx_tsblog|month
				intval = 1
				wrap = MONTH(FROM_UNIXTIME(postdate))=|
			}
			
			20 = TEXT
			20 {
				value = AND
				noTrimWrap = | | |
			}
			
			30 < .10
			30 {
				data = GPvar:tx_tsblog|year
				intval = 1
				wrap = YEAR(FROM_UNIXTIME(postdate))=|
			}
			
		}
	}

[end]