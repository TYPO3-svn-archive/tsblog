page {
	includeLibs.user_tsblog = EXT:tsblog/res/class.user_tsblog.php
 
 	# noindex, follow
	headerData.5.override.cObject = TEXT
	headerData.5.override.cObject {
		value = <meta name="robots" content="index,follow" />
		if.isTrue.data = GPvar:tx_tsblog|post_uid
	}
 
	# <title> Überschreiben
	headerData.10.override.cObject = RECORDS
	headerData.10.override.cObject {
		source.data = GPvar:tx_tsblog|post_uid
		source.intval = 1
		source.postUserFunc = user_tsblog->user_clearRecordRegister
		tables = tx_tsblog_posts
		conf.tx_tsblog_posts = TEXT
		conf.tx_tsblog_posts.field = title
	}	
	
}