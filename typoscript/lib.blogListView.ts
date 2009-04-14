lib.blogListView.stdWrap.prepend = EDITPANEL
lib.blogListView.stdWrap.prepend {
	newRecordFromTable = tx_tsblog_posts
	newRecordInPid = {$plugin.tx_tsblog.storagePid}
}


lib.blogListView = CONTENT
lib.blogListView {
	table = tx_tsblog_posts
	select {
		pidInList = {$plugin.tx_tsblog.storagePid}
		orderBy = postdate desc
		max = 10
	}

	renderObj = COA
	renderObj {

		10 = IMAGE
		10 {

			altText.cObject = TEXT
			altText.cObject {
				field = postdate
				date = d.m.Y
			}

			titleText < .altText

			file = GIFBUILDER
			file {
				XY = 68, 72
				format = png
				quality = 95

				10 = IMAGE
				10.file = EXT:tsblog/res/calendar.png

				20 = TEXT
				20 {
					text.field = postdate
					align = center
					text.date = j
					offset = -3,58
					fontSize = 40
					antiAlias = 1
					iterations = 1
					fontFile = t3lib/fonts/vera.ttf
					fontColor = #000000
					# spacing = 1
				}

				30 < .20
				30 {
					text.date = M 'y
					fontSize = 10
					offset = 9,22
					align = left
					iterations = 5
					fontFile = t3lib/fonts/vera.ttf
					fontColor = #FFFFFF
				}

			}
			wrap = <div class="web20date">|</div>
		}


		20 = TEXT
		20 {
			field = title
			typolink < lib.typolinkToSingleView
			editIcons = tx_tsblog_posts:postdate,title,image,body,categories
			editIcons.beforeLastTag = 1
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
				width = {$plugin.tx_tsblog.imageWidth}
				height = {$plugin.tx_tsblog.imageHeight}
			}
		}

		40 = TEXT
		40 {
			field = body
			parseFunc =< lib.parseFunc_RTE
		}

		50 = TEXT
		50 {
			field = categories
			split {
				token = ,
				cObjNum = |*| 1 |*| 2

				1 {
					10 = TEXT
					10 {
						cObject = RECORDS
						cObject {
							source.current = 1
							tables = tx_tsblog_categories
							conf.tx_tsblog_categories = TEXT
							conf.tx_tsblog_categories {
								field = title
							}
						}
						typolink {
							parameter = {$plugin.tx_tsblog.listViewPid}
							additionalParams.current = 1
							additionalParams.wrap = &tx_tsblog[category_uid]=|
						}
						if.isTrue.current = 1
					}
					ifEmpty = (Keine Kategorien gefunden)
				}
				1.noTrimWrap = ||, |

				2 < .1
				2.noTrimWrap >
			}
			wrap = <div class="category-info">&#187; Kategorien:&nbsp;|</div>
		}

		60 = LOAD_REGISTER
		60.currentPostUid.cObject = TEXT
		60.currentPostUid.cObject.field = uid

		70 = CONTENT
		70 {
			table = tx_comments_comments
			select {
				pidInList = {$plugin.tx_tsblog.storagePid}
				orderBy = tstamp asc
				where = approved=1
				andWhere {
					field = uid
					wrap = external_ref="tx_tsblog_posts_|"
				}
				selectFields = count(*) as quantity
			}


			renderObj = TEXT
			renderObj {

				cObject = CASE
				cObject {
					key.field = quantity

					default = TEXT
					default {
						field = quantity
						wrap = |&nbsp;Kommentare
					}

					1 < .default
					1.wrap = |&nbsp;Kommentar

					0 = TEXT
					0.value = Kein Kommentar
				}

				typolink {
					parameter = {$plugin.tx_tsblog.singleViewPid}#comment-list
					additionalParams.data = register:currentPostUid
					additionalParams.wrap = &tx_tsblog[post_uid]=|
				}
			}
			wrap = <div class="comment-info">&#187;&nbsp;|</div>
		}

		wrap = <div class="blogpost">|</div>
	}
}


/*
lib.blogListView.renderObj.40 {
	crop = 200 | ... | 1

	postCObject = TEXT
	postCObject {
		value = [mehr...]
		typolink < lib.typolinkToSingleView
		if {
			value.field = body
			value.crop = 200 | ... | 1
			equals.field = body
			negate = 1
		}
		wrap = <span class="more-link">|</span>
	}
}
*/
