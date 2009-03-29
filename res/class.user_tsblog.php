<?php
	
class user_tsblog {
	
	/**
	 * Unsetting the record register to enable multiple RECORDS of the same record
	 *
	 * @param 	string 	content
	 * @return	string	content
	 * @author	Fabrizio Branca <branca@punkt.de>
	 * @since	2009-03-01
	 */
	public function user_clearRecordRegister($content) {
		unset($GLOBALS['TSFE']->recordRegister['tx_tsblog_posts:'.$content]);
		return $content;
	}
	
	/**
	 * MD5
	 *
	 * @param 	string 	content
	 * @return	string	md5 of content
	 * @author	Fabrizio Branca <branca@punkt.de>
	 * @since	2009-03-01
	 */
	public function user_md5($content) {
		return md5($content);
	}
	
	
	/**
	 * Quote string
	 */
	public function user_quoteStr($content, array $conf, tslib_cObj $pObj) {
		$conf['table'] = $pObj->cObj->stdWrap($conf['table'], $conf['table.']);
		return $GLOBALS['TYPO3_DB']->quoteStr($content, $conf['table']);
	}
}

?>