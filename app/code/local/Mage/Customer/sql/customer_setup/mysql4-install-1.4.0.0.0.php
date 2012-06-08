    <?php
    $setup = new Mage_Eav_Model_Entity_Setup('core_setup');
    $AttrCode = 'occupation';
    $settings = array (
        'position' => 1,
        'is_required'=> 0
    );
    $setup->addAttribute('1', $AttrCode, $settings);
    ?>