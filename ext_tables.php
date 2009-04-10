<?php
if (!defined ('TYPO3_MODE')) {
	die ('Access denied.');
}
$TCA['tx_tsblog_categories'] = array (
	'ctrl' => array (
		'title'     => 'LLL:EXT:tsblog/locallang_db.xml:tx_tsblog_categories',
		'label'     => 'title',
		'tstamp'    => 'tstamp',
		'crdate'    => 'crdate',
		'cruser_id' => 'cruser_id',
		'default_sortby' => 'ORDER BY crdate',
		'delete' => 'deleted',
		'enablecolumns' => array (
			'disabled' => 'hidden',
		),
		'dynamicConfigFile' => t3lib_extMgm::extPath($_EXTKEY).'tca.php',
		'iconfile'          => t3lib_extMgm::extRelPath($_EXTKEY).'icon_tx_tsblog_categories.gif',
	),
);

$TCA['tx_tsblog_posts'] = array (
	'ctrl' => array (
		'title'     => 'LLL:EXT:tsblog/locallang_db.xml:tx_tsblog_posts',
		'label'     => 'title',
		'tstamp'    => 'tstamp',
		'crdate'    => 'crdate',
		'cruser_id' => 'cruser_id',
		'default_sortby' => 'ORDER BY crdate',
		'delete' => 'deleted',
		'enablecolumns' => array (
			'disabled' => 'hidden',
		),
		'dynamicConfigFile' => t3lib_extMgm::extPath($_EXTKEY).'tca.php',
		'iconfile'          => t3lib_extMgm::extRelPath($_EXTKEY).'icon_tx_tsblog_posts.gif',
	),
);

t3lib_extMgm::addStaticFile($_EXTKEY,'static/tsblog_page_setup/', 'TSBLOG Page Setup');

t3lib_extMgm::addStaticFile($_EXTKEY,'static/tsblog/', 'TSBLOG');
?>