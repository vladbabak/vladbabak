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
#include "peripherals_i2c_pal_config_2.h"

/*******************************************************************************
 * i2c_pal_config_2 initialization code
 ******************************************************************************/
/* clang-format off */
/* TEXT BELOW IS USED AS SETTING FOR TOOLS *************************************
instance:
- name: 'i2c_pal_config_2'
- type: 'i2c_pal_config'
- mode: 'LPI2C'
- custom_name_enabled: 'false'
- type_id: 'i2c_pal'
- functional_group: 'BOARD_InitPeripherals'
- peripheral: 'FLEXIO'
- config_sets:
  - i2c_pal:
    - i2c_palMasterConfiguration:
      - 0:
        - i2c_MasterConfiguration:
          - name: 'i2c_pal_flexio_MasterConfig0'
          - readonly: 'false'
          - i2c_pal_master_cfg_slaveAddress: '0x32'
          - i2c_pal_master_cfg_baudRate: '100000'
          - i2c_pal_master_cfg_dmaChannel1: '0'
          - i2c_pal_master_cfg_dmaChannel2: '1'
          - i2c_pal_master_cfg_transferType: 'I2C_PAL_USING_INTERRUPTS'
          - i2c_pal_master_cfg_operatingMode: 'I2C_PAL_STANDARD_MODE'
          - i2c_pal_master_cfg_callback: 'NULL'
          - i2c_pal_master_cfg_callbackParam: 'NULL'
        - i2cExtConfig:
          - name: 'i2c_ext0'
          - sclPin: '1'
          - sdaPin: '2'
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

/* PAL instance information */
i2c_instance_t flexio_instance = {I2C_INST_TYPE_FLEXIO, 0U};

static extension_flexio_for_i2c_t i2c_ext0 = {
  .sclPin = 1U,
  .sdaPin = 2U
};

i2c_master_t i2c_pal_flexio_MasterConfig0 = {
    .slaveAddress = 50U,
    .is10bitAddr = false,
  .baudRate = 100000UL,
  .dmaChannel1 = 0U,
  .dmaChannel2 = 1U,
  .transferType = I2C_PAL_USING_INTERRUPTS,
  .operatingMode = I2C_PAL_STANDARD_MODE,
  .callback = NULL,
  .callbackParam = NULL,
  .extension = &i2c_ext0
};

