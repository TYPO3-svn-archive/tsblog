lib.typolinkToSingleView {
	parameter = {$plugin.tx_tsblog.singleViewPid}
	additionalParams.field = uid
	additionalParams.wrap = &tx_tsblog[post_uid]=|
	useCacheHash = 1
}