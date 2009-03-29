lib.commentListView = CONTENT
lib.commentListView {
	table = tx_comments_comments
	select {
		pidInList = {$plugin.tx_tsblog.storagePid}
		orderBy = tstamp asc
		where = approved=1
		andWhere {
			data = GPvar:tx_tsblog|post_uid
			intval = 1
			wrap = external_ref="tx_tsblog_posts_|"
		}
	}

	renderObj = COA
	renderObj {
	
		10 = TEXT
		10 {
			cObject = TEXT
			cObject {
				field = email
				ifEmpty = unknown@gravatar.com
				postUserFunc = user_tsblog->user_md5
			}
			dataWrap = <div class="gravatar-image"><img src="http://www.gravatar.com/avatar/|?s=96&default=http%3A%2F%2Fwww.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D96" title="{field:firstname} {field:lastname}"/></div>
		}
	
		20 = COA
		20 {
		
			10 = TEXT
			10 {
				cObject = TEXT
				cObject.dataWrap = {field:firstname} {field:lastname}
				typolink {
					parameter.field = homepage
				}
				
			}
			
			20 = TEXT
			20 {
				field = tstamp
				date = \a\m d.m.y \u\m H:i \U\h\r
				wrap = <br /><span class="comment-date">|</span>
			}
			wrap = <div class="comment-header">|</div>
		}
		
		30 = TEXT
		30 {
			field = content
			wrap = <div class="comment-body">|</div>
		}
		wrap = <div class="comment">|</div>
	}
	stdWrap.wrap = <div id="comment-list"><h2>Kommentare</h2>|</div>
	
	stdWrap.ifEmpty = Keine Kommentare vorhanden
}