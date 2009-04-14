lib.blogSingleView = TEXT
lib.blogSingleView {

	cObject = TEXT
	cObject {
		data = GPvar:tx_tsblog|post_uid
		intval = 1
		wrap = <p class="error">No post found for uid "|"</p>
	}

	override.cObject = RECORDS
	override.cObject {
		source.data = GPvar:tx_tsblog|post_uid
		source.intval = 1
		tables = tx_tsblog_posts
		conf.tx_tsblog_posts < lib.blogListView.renderObj
		conf.tx_tsblog_posts {
			20.typolink >
			40.crop >
			40.postCObject >
		}
	}

}
