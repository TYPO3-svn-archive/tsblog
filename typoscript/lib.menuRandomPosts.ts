lib.menuRandomPosts = COA
lib.menuRandomPosts.10 = CONTENT
lib.menuRandomPosts.10 {
	table = tx_tsblog_posts
	select {
		pidInList = {$plugin.tx_tsblog.storagePid}
		orderBy = rand()
		where = image != ''
		max = 3
	}

	renderObj = COA_INT
	renderObj {
		
		20 = TEXT
		20 {
			field = title
			typolink < lib.typolinkToSingleView
			wrap = <h2 class="posttitle">|</h2>
		}
		
		30 = IMAGE
		30 {
			
			file {
				import = uploads/tx_tsblog/
				import {
					field = image
					listNum = 0
				}
				width = 150c
				height = 75c
			}
			imageLinkWrap = 1
			imageLinkWrap.enable = 1
			imageLinkWrap.typolink < lib.typolinkToSingleView
		}
		
		wrap = <div class="blogpost">|</div>
	}
	
	wrap = <div id="random-blogposts">|</div>
}