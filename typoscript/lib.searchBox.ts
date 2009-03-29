lib.searchBox = COA_INT
lib.searchBox {
	10 = TEXT
	10 {
		typolink.parameter = {$plugin.tx_tsblog.searchPid}
		typolink.returnLast = url
		wrap = <div id="indexedsearchbox"><form action="|" method="post" id="indexedsearch"><table cellpadding="0" cellspacing="0" border="0">
	}

	20 = COA
	20 {
		wrap = <tr> | </tr>
		10 = TEXT
		10 {
			data = GPvar : tx_indexedsearch |sword
			wrap = <td><input name="tx_indexedsearch[sword]" value="|" class="searchbox-sword" type="text" /></td>
		}
		20 = COA
		20 {
			wrap = <td align="right">&nbsp;|</td>
			10 = TEXT
			10.value = <input type="hidden" name="tx_indexedsearch[sections]" value="0" />
			20 = TEXT
			20.value = <input name="tx_indexedsearch[submit_button]" value="Search" type="hidden" />
			30 = TEXT
			30.value = <input name="search" src="typo3conf/ext/tsblog/res/viewmag.png" value="Search" class="searchbox-button" type="image" />
		}
	}
	wrap = | </table></form></div>
}
