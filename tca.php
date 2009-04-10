<?php
if (!defined ('TYPO3_MODE')) 	die ('Access denied.');

$TCA['tx_tsblog_categories'] = array (
	'ctrl' => $TCA['tx_tsblog_categories']['ctrl'],
	'interface' => array (
		'showRecordFieldList' => 'hidden,title'
	),
	'feInterface' => $TCA['tx_tsblog_categories']['feInterface'],
	'columns' => array (
		'hidden' => array (
			'exclude' => 1,
			'label'   => 'LLL:EXT:lang/locallang_general.xml:LGL.hidden',
			'config'  => array (
				'type'    => 'check',
				'default' => '0'
			)
		),
		'title' => array (
			'exclude' => 0,
			'label' => 'LLL:EXT:tsblog/locallang_db.xml:tx_tsblog_categories.title',
			'config' => array (
				'type' => 'input',
				'size' => '30',
			)
		),
	),
	'types' => array (
		'0' => array('showitem' => 'hidden;;1;;1-1-1, title;;;;2-2-2')
	),
	'palettes' => array (
		'1' => array('showitem' => '')
	)
);



$TCA['tx_tsblog_posts'] = array (
	'ctrl' => $TCA['tx_tsblog_posts']['ctrl'],
	'interface' => array (
		'showRecordFieldList' => 'hidden,title,image,body,categories,postdate'
	),
	'feInterface' => $TCA['tx_tsblog_posts']['feInterface'],
	'columns' => array (
		'hidden' => array (
			'exclude' => 1,
			'label'   => 'LLL:EXT:lang/locallang_general.xml:LGL.hidden',
			'config'  => array (
				'type'    => 'check',
				'default' => '0'
			)
		),
		'title' => array (
			'exclude' => 0,
			'label' => 'LLL:EXT:tsblog/locallang_db.xml:tx_tsblog_posts.title',
			'config' => array (
				'type' => 'input',
				'size' => '30',
			)
		),
		'image' => array (
			'exclude' => 0,
			'label' => 'LLL:EXT:tsblog/locallang_db.xml:tx_tsblog_posts.image',
			'config' => array (
				'type' => 'group',
				'internal_type' => 'file',
				'allowed' => $GLOBALS['TYPO3_CONF_VARS']['GFX']['imagefile_ext'],
				'max_size' => $GLOBALS['TYPO3_CONF_VARS']['BE']['maxFileSize'],
				'uploadfolder' => 'uploads/tx_tsblog',
				'size' => 1,
				'minitems' => 0,
				'maxitems' => 1,
			)
		),
		'body' => array (
			'exclude' => 0,
			'label' => 'LLL:EXT:tsblog/locallang_db.xml:tx_tsblog_posts.body',
			'config' => array (
				'type' => 'text',
				'cols' => '30',
				'rows' => '5',
				'wizards' => array(
					'_PADDING' => 2,
					'RTE' => array(
						'notNewRecords' => 1,
						'RTEonly'       => 1,
						'type'          => 'script',
						'title'         => 'Full screen Rich Text Editing|Formatteret redigering i hele vinduet',
						'icon'          => 'wizard_rte2.gif',
						'script'        => 'wizard_rte.php',
					),
				),
			)
		),
		'categories' => array (
			'exclude' => 0,
			'label' => 'LLL:EXT:tsblog/locallang_db.xml:tx_tsblog_posts.categories',
			'config' => array (
				'type' => 'select',
				'foreign_table' => 'tx_tsblog_categories',
				'foreign_table_where' => 'AND tx_tsblog_categories.pid=###CURRENT_PID### ORDER BY tx_tsblog_categories.uid',
				'size' => 5,
				'minitems' => 0,
				'maxitems' => 100,
			)
		),
		'postdate' => array (
			'exclude' => 0,
			'label' => 'LLL:EXT:tsblog/locallang_db.xml:tx_tsblog_posts.postdate',
			'config' => array (
				'type'     => 'input',
				'size'     => '8',
				'max'      => '20',
				'eval'     => 'date',
				'checkbox' => '0',
				'default'  => time(),
			),
		),
	),
	'types' => array (
		'0' => array('showitem' => 'hidden;;1;;1-1-1, title;;;;2-2-2, image;;;;3-3-3, body;;;richtext[]:rte_transform[mode=ts], categories, postdate')
	),
	'palettes' => array (
		'1' => array('showitem' => '')
	)
);
?>