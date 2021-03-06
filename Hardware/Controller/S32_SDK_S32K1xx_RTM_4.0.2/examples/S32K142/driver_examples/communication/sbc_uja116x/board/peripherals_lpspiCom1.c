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
  UUID: ceb2e5d3-05f7-4f92-a4fd-1f63e4146c80
  called_from_default_init: true
  selectedCore: core0
 * BE CAREFUL MODIFYING THIS COMMENT - IT IS YAML SETTINGS FOR TOOLS **********/
/* clang-format on */

/*******************************************************************************
 * Included files 
 ******************************************************************************/
#include "peripherals_lpspiCom1.h"

/*******************************************************************************
 * lpspiCom1 initialization code
 ******************************************************************************/
/* clang-format off */
/* TEXT BELOW IS USED AS SETTING FOR TOOLS *************************************
instance:
- name: 'lpspiCom1'
- type: 'lpspi_config'
- mode: 'general_soft'
- custom_name_enabled: 'true'
- type_id: 'lpspi'
- functional_group: 'BOARD_InitPeripherals'
- peripheral: 'LPSPI_1'
- config_sets:
  - lpspi:
    - lpspiMasterConfig:
      - 0:
        - name: 'lpspiCom1_MasterConfig0'
        - readOnly: 'false'
        - bitsPerSec: '1000000'
        - whichPcs: 'LPSPI_PCS3'
        - pcsPolarity: 'LPSPI_ACTIVE_LOW'
        - isPcsContinuous: 'false'
        - bitcount: '16'
        - lpspiSrcClk: '8000000'
        - clkPhase: 'LPSPI_CLOCK_PHASE_2ND_EDGE'
        - clkPolarity: 'LPSPI_SCK_ACTIVE_HIGH'
        - lsbFirst: 'false'
        - transferType: 'LPSPI_USING_INTERRUPTS'
        - rxDMAChannel: '0'
        - txDMAChannel: '0'
        - callback: 'NULL'
        - callbackParam: 'NULL'
    - lpspiSlaveConfig:
      - 0:
        - name: 'lpspiCom1_SlaveConfig0'
        - readOnly: 'false'
        - whichPcs: 'LPSPI_PCS0'
        - pcsPolarity: 'LPSPI_ACTIVE_HIGH'
        - bitcount: '8'
        - clkPhase: 'LPSPI_CLOCK_PHASE_1ST_EDGE'
        - clkPolarity: 'LPSPI_SCK_ACTIVE_HIGH'
        - lsbFirst: 'false'
        - transferType: 'LPSPI_USING_INTERRUPTS'
        - rxDMAChannel: '0'
        - txDMAChannel: '0'
        - callback: 'NULL'
        - callbackParam: 'NULL'
 * BE CAREFUL MODIFYING THIS COMMENT - IT IS YAML SETTINGS FOR TOOLS **********/
/* clang-format on */

/**
 * @page misra_violations MISRA-C:2012 violations
 *
 * @section [global] 
 * Violates MISRA 2012 Required Rule 8.4, A compatible declaration shall be 
 * visible when an object or function with external linkage is defined..
 *
 * @section [global]
 * Violates MISRA 2012 Advisory Rule 8.7, External variable could be made static.
 * The external variables will be used in other source files in application code.
 *
 */

/* Define state structure for current SPI instance */
lpspi_state_t lpspiCom1State;

/* LPSPI Master Configurations 0 */

lpspi_master_config_t lpspiCom1_MasterConfig0 = {
  .bitsPerSec = 1000000UL,
  .whichPcs = LPSPI_PCS3,
  .pcsPolarity = LPSPI_ACTIVE_LOW,
  .isPcsContinuous = false,
  .bitcount = 16U,
  .lpspiSrcClk = 8000000UL,
  .clkPhase = LPSPI_CLOCK_PHASE_2ND_EDGE,
  .clkPolarity = LPSPI_SCK_ACTIVE_HIGH,
  .lsbFirst = false,
  .transferType = LPSPI_USING_INTERRUPTS,
  .rxDMAChannel = 0U,
  .txDMAChannel = 0U,
  .callback = NULL,
  .callbackParam = NULL
};

/* LPSPI Slave Configurations 0 */

lpspi_slave_config_t lpspiCom1_SlaveConfig0 = {
  .whichPcs = LPSPI_PCS0,
  .pcsPolarity = LPSPI_ACTIVE_HIGH,
  .bitcount = 8U,
  .clkPhase = LPSPI_CLOCK_PHASE_1ST_EDGE,
  .clkPolarity = LPSPI_SCK_ACTIVE_HIGH,
  .lsbFirst = false,
  .transferType = LPSPI_USING_INTERRUPTS,
  .rxDMAChannel = 0U,
  .txDMAChannel = 0U,
  .callback = NULL,
  .callbackParam = NULL
};



