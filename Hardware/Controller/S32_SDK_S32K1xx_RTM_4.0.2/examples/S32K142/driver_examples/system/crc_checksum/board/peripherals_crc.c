/***********************************************************************************************************************
 * This file was generated by the S32 Configuration Tools. Any manual edits made to this file
 * will be overwritten if the respective S32 Configuration Tools is used to update this file.
 **********************************************************************************************************************/

/* clang-format off */
/* TEXT BELOW IS USED AS SETTING FOR TOOLS *************************************
!!GlobalInfo
product: Peripherals v9.0
processor: S32K142
package_id: S32K142_LQFP100
mcu_data: s32sdk_s32k1xx_rtm_402
processor_version: 0.0.0
functionalGroups:
- name: BOARD_InitPeripherals
  UUID: a6d43dcb-893a-49cd-9d9d-0bb26ff0f05b
  called_from_default_init: true
  selectedCore: core0
 * BE CAREFUL MODIFYING THIS COMMENT - IT IS YAML SETTINGS FOR TOOLS **********/
/* clang-format on */

/*******************************************************************************
 * Included files 
 ******************************************************************************/
#include "peripherals_crc.h"

/*******************************************************************************
 * crc initialization code
 ******************************************************************************/
/* clang-format off */
/* TEXT BELOW IS USED AS SETTING FOR TOOLS *************************************
instance:
- name: 'crc'
- type: 'crc_config'
- mode: 'general_soft'
- custom_name_enabled: 'true'
- type_id: 'crc'
- functional_group: 'BOARD_InitPeripherals'
- peripheral: 'CRC'
- config_sets:
  - crc_soft:
    - crcConfig:
      - 0:
        - name: 'crc_Cfg0'
        - readonly: 'true'
        - crcWidth: 'CRC_BITS_16'
        - readTranspose: 'CRC_TRANSPOSE_NONE'
        - writeTranspose: 'CRC_TRANSPOSE_NONE'
        - complementChecksum: 'false'
        - polynomial: '0x1021'
        - seed: '0xFFFF'
 * BE CAREFUL MODIFYING THIS COMMENT - IT IS YAML SETTINGS FOR TOOLS **********/
/* clang-format on */

/**
 * @page misra_violations MISRA-C:2012 violations
 *
 * @section [global]
 * Violates MISRA 2012 Advisory Rule 8.7, External variable could be made static.
 * The external variables will be used in other source files in application code.
 *
 */

const crc_user_config_t crc_Cfg0 = {
  .crcWidth = CRC_BITS_16,
  .readTranspose = CRC_TRANSPOSE_NONE,
  .writeTranspose = CRC_TRANSPOSE_NONE,
  .complementChecksum = false,
  .polynomial = 4129UL,
  .seed = 65535UL
};


