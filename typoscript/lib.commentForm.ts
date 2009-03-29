lib.commentForm = COA
lib.commentForm.10 < plugin.tx_comments_pi1
lib.commentForm.10 {
	code = FORM
	storagePid = {$plugin.tx_tsblog.storagePid}
	externalPrefix = tx_tsblog
	prefixToTableMap.tx_tsblog = tx_tsblog_posts
	showUidMap.tx_tsblog = post_uid
	additionalClearCachePages = {$plugin.tx_tsblog.singleViewPid},{$plugin.tx_tsblog.listViewPid}
	spamProtect {
		requireApproval = 0
	}
}
lib.commentForm.wrap = <!--TYPO3SEARCH_end--><div id="comment-form"><h2>Kommentar hinzufügen</h2>|</div><!--TYPO3SEARCH_begin-->
