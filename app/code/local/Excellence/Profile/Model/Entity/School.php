<?php
class Excellence_Profile_Model_Entity_School extends Mage_Eav_Model_Entity_Attribute_Source_Abstract
{
	public function getAllOptions()
	{
		if ($this->_options === null) {
			$this->_options = array();
			$this->_options[] = array(
                    'value' => '',
                    'label' => 'Choose Option..'
			);
			$this->_options[] = array(
                    'value' => 1,
                    'label' => 'Enabled'
			);
			$this->_options[] = array(
                    'value' => 2,
                    'label' => 'Disabled'
			);
			
			
		}

		return $this->_options;
	}
}