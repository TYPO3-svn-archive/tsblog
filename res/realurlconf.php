<?php

$TYPO3_CONF_VARS['EXTCONF']['realurl']['_DEFAULT'] = array(

	'init' => array(
		'useCHashCache' => '0',
		'enableCHashCache' => 1,
		'respectSimulateStaticURLs' => 'TRUE',
		'appendMissingSlash' => 'ifNotFile',
		'enableUrlDecodeCache' => '1',
		'enableUrlEncodeCache' => '1',
	),

	'preVars' => array(
	
		array(
			'GETvar' => 'no_cache',
			'valueMap' => array(
				'no_cache' => 1,
				'nc' => 1,
			),
			'noMatch' => 'bypass',
		),
		
		array(
			'GETvar' => 'L',
			'valueMap' => array(
				'de' => '0',
				'en' => '1',
			),
			'noMatch' => 'bypass',
		),
		
	), 
	
	'postVarSets' => array(
	
		'_DEFAULT' => array(
		
			'category' => array ( 
				array(
					'GETvar' => 'tx_tsblog[category_uid]', 
					'lookUpTable' => array(
						'table' => 'tx_tsblog_categories', 
						'id_field' => 'uid', 
						'alias_field' => 'title', 
						'addWhereClause' => ' AND NOT deleted', 
						'useUniqueCache' => 1, 
						'useUniqueCache_conf' => array( 
							'strtolower' => 1, 
							'spaceCharacter' => '-',
						),
					),
				),
			),
			
			'archive' => array(
				array(
					'GETvar' => 'tx_tsblog[year]' , 
				),
				array(
					'GETvar' => 'tx_tsblog[month]' , 
					'valueMap' => array(
						'january' => '1',
						'february' => '2',
						'march' => '3',
						'april' => '4',
						'may' => '5',
						'june' => '6',
						'july' => '7',
						'august' => '8',
						'september' => '9',
						'october' => '10',
						'november' => '11',
						'december' => '12',
					),
				),
			),
			
			'single' => array(
				array(
					'GETvar' => 'tx_tsblog[post_uid]',
					'lookUpTable' => array( 
						'table' => 'tx_tsblog_posts', 
						'id_field' => 'uid', 
						'alias_field' => 'title', 
						'addWhereClause' => ' AND NOT deleted', 
						'useUniqueCache' => 1, 
						'useUniqueCache_conf' => array( 
							'strtolower' => 1, 
							'spaceCharacter' => '-',  
						),
					),
				),
			),
			
		),
		
	),
	
	'fileName' => array(
		'index' => array(
			'rss.xml' => array(
				'keyValues' => array(
					'type' => 100,
				),
			),
		),
	),
	
	'pagePath' => array( 
		'type' => 'user', 
		'userFunc' => 'EXT:realurl/class.tx_realurl_advanced.php:&tx_realurl_advanced->main', 
		'spaceCharacter' => '-', 
		'segTitleFieldList' => 'alias,tx_realurl_pathsegment,nav_title,title', 
		'languageGetVar' => 'L', 
		'expireDays' => 1, 
		'disablePathCache' => 1, 
		'rootpage_id' => 1, 
	),


	
);

?>