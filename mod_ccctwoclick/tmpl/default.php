<?php
// No direct access
defined('_JEXEC') or die;

$contentBefore = str_replace(array("\r", "\n"), '', $contentBefore);

$contentBefore = '<div id="tccontentbefore-' . $moduleId . '" class="tccontentbefore tccontentbefore-' . $moduleId . '">' . $contentBefore .'</div>';
$contentAfter = '<div id="tccontentafter-' . $moduleId . '" class="tccontentafter tccontentafter-' . $moduleId . '" style="display:none;">' . $contentAfter .'</div>';

$btnReveal = '<div id="tcreveal-' . $moduleId . '" class="' . $btnclassEnable . ' tcreveal tcreveal-' . $moduleId . '"><a id="tcrevealbtn-' . $moduleId . '" class="btn btn-primary">' . JText::_($btntxtReveal) .'</a></div>';
$btnDisable = '<div id="tcdisable-' . $moduleId . '" class="' . $btnclassDisable . ' tcdisable tcdisable-' . $moduleId . '" style="display:none;"><a id="tcdisablebtn-' . $moduleId . '">' . JText::_($btntxtDisable) .'</a></div>';

?>

<div id="tccontainer-<?php echo $moduleId; ?>" class="tccontainer tccontainer-<?php echo $moduleId; ?> <?php echo $moduleclass_sfx; mx-auto?>"
     style="width: <?php echo $iwidth; ?>; margin:0 auto;">

	<?php
	echo ($contentbeforepos == 'top' ? $contentBefore : '');
	echo ($btnrevpos == 'top' ? $btnReveal : '');
	echo ($contentafterpos == 'top' ? $contentAfter : '');
	echo ($btndispos == 'top' ? $btnDisable : '');
	?>

	<div id="tccontent-<?php echo $moduleId; ?>"
	     class="tccontent tccontent-<?php echo $moduleId; ?>"
	     data-source="<?php echo $isrc; ?>"
	     data-width="<?php echo $iwidth; ?>"
	     data-height="<?php echo $iheight; ?>"
	     style="<?php echo 'width:' . $iwidth . '; min-height:' . $iheight . ';';
	     echo ($disabledimage ? 'background-image:url(' . $disabledimage . '); background-repeat: no-repeat; background-size:' . $backgroundsize . ';' : '');
	     echo ($disabledcolor ? 'background-color:' . $disabledcolor . ';' : ''); ?> ">

    <?php
    echo ($contentbeforepos == 'center' ? $contentBefore : '');
    echo ($btnrevpos == 'center' ? $btnReveal : '');
    ?>

    <div id="tciframecontainer-<?php echo $moduleId; ?>" class="tciframecontainer tciframecontainer-<?php echo $moduleId; ?>"></div>

	</div>

	<?php
	echo ($contentbeforepos == 'bottom' ? $contentBefore : '');
	echo ($btnrevpos == 'bottom' ? $btnReveal : '');
	echo ($contentafterpos == 'bottom' ? $contentAfter : '');
	echo ($btndispos == 'bottom' ? $btnDisable : '');
	?>

</div>
