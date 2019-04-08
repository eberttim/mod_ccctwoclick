<?php
// No direct access
defined('_JEXEC') or die;

// $contentBefore = str_replace(array("\r", "\n"), '', $contentBefore);

$contentBefore = '<div class="tccontentbefore tccontentbefore-' . $moduleId . '">' . $contentBefore .'</div>';
$contentAfter = '<div class="tccontentafter tccontentafter-' . $moduleId . '" style="display:none;">' . $contentAfter .'</div>';

$btnReveal = '<div class="' . $btnclassEnable . ' tcreveal tcreveal-' . $moduleId . '"><a class="tcrevealbtn tcrevealbtn-' . $moduleId . ' btn btn-primary">' . JText::_($btntxtReveal) .'</a></div>';
$btnDisable = '<div class="' . $btnclassDisable . ' tcdisable tcdisable-' . $moduleId . '" style="display:none;"><a class="tcdisablebtn tcdisablebtn-' . $moduleId . '">' . JText::_($btntxtDisable) .'</a></div>';

?>

<div class="tccontainer tccontainer-<?php echo $moduleId; ?> mx-auto <?php echo $moduleclass_sfx; ?>"
     style="width: <?php echo $iwidth; ?>; margin:0 auto;">

	<?php
	echo ($contentbeforepos == 'top' ? $contentBefore : '');
	echo ($btnrevpos == 'top' ? $btnReveal : '');
	echo ($contentafterpos == 'top' ? $contentAfter : '');
	echo ($btndispos == 'top' ? $btnDisable : '');
	?>

	<div class="tccontent tccontent-<?php echo $moduleId; ?>"
	     data-source="<?php echo $isrc; ?>"
	     data-width="<?php echo $iwidth; ?>"
	     data-height="<?php echo $iheight; ?>"
	     data-title="<?php echo $iframetitle; ?>"
	     data-name="<?php echo $iframename; ?>"
	     style="<?php echo 'width:' . $iwidth . '; min-height:' . $iheight . ';';
	     echo ($disabledimage ? 'background-image:url(' . $disabledimage . '); background-repeat: no-repeat; background-size:' . $backgroundsize . ';' : '');
	     echo ($disabledcolor ? 'background-color:' . $disabledcolor . ';' : ''); ?> ">

    <?php
    echo ($contentbeforepos == 'center' ? $contentBefore : '');
    echo ($btnrevpos == 'center' ? $btnReveal : '');
    ?>

    <div class="tciframecontainer tciframecontainer-<?php echo $moduleId; ?>"
      style="width: <?php echo $iwidth; ?>; height: <?php echo $iheight; ?>; display: none;"></div>

	</div>

	<?php
	echo ($contentbeforepos == 'bottom' ? $contentBefore : '');
	echo ($btnrevpos == 'bottom' ? $btnReveal : '');
	echo ($contentafterpos == 'bottom' ? $contentAfter : '');
	echo ($btndispos == 'bottom' ? $btnDisable : '');
	?>

</div>
