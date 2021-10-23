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
  UUID: aeede96d-50a1-43cb-bd9d-b8f10b1263cd
  called_from_default_init: true
  selectedCore: core0
 * BE CAREFUL MODIFYING THIS COMMENT - IT IS YAML SETTINGS FOR TOOLS **********/
/* clang-format on */

/*******************************************************************************
 * Included files 
 ******************************************************************************/
#include "peripherals_cmp_1.h"

/*******************************************************************************
 * cmp_1 initialization code
 ******************************************************************************/
/* clang-format off */
/* TEXT BELOW IS USED AS SETTING FOR TOOLS *************************************
instance:
- name: 'cmp_1'
- type: 'cmp_config'
- mode: 'general_soft'
- custom_name_enabled: 'false'
- type_id: 'cmp'
- functional_group: 'BOARD_InitPeripherals'
- peripheral: 'CMP_0'
- config_sets:
  - cmp:
    - cmpConfig:
      - 0:
        - name: 'cmp_InitConfig0'
        - readOnly: 'true'
        - Comparator:
          - mode: 'CMP_CONTINUOUS'
          - dmaTriggerState: 'false'
          - outputInterruptTrigger: 'CMP_BOTH_EDGES'
          - filterSamplePeriod: '0'
          - filterSampleCount: '0'
          - powerMode: 'CMP_LOW_SPEED'
          - inverterState: 'CMP_NORMAL'
          - pinState: 'CMP_UNAVAILABLE'
          - outputSelect: 'CMP_COUT'
          - offsetLevel: 'CMP_LEVEL_OFFSET_0'
          - hysteresisLevel: 'CMP_LEVEL_HYS_0'
        - MUX:
          - positivePortMux: 'CMP_MUX'
          - negativePortMux: 'CMP_DAC'
          - positiveInputMux: '0'
          - negativeInputMux: '0'
        - DAC:
          - state: 'true'
          - voltageReferenceSource: 'CMP_VIN1'
          - voltage: '127'
        - TriggerMode:
          - roundRobinState: 'false'
          - roundRobinInterruptState: 'false'
          - fixedPort: 'CMP_PLUS_FIXED'
          - fixedChannel: '0'
          - samples: '0'
          - initializationDelay: '0'
          - roundRobinChannelsState:
            - rr_channel0: 'false'
            - rr_channel1: 'false'
            - rr_channel2: 'false'
            - rr_channel3: 'false'
            - rr_channel4: 'false'
            - rr_channel5: 'false'
            - rr_channel6: 'false'
            - rr_channel7: 'false'
          - programedState:
            - state_channel0: 'false'
            - state_channel1: 'false'
            - state_channel2: 'false'
            - state_channel3: 'false'
            - state_channel4: 'false'
            - state_channel5: 'false'
            - state_channel6: 'false'
            - state_channel7: 'false'
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

/* CMP configuration structure 0 */
const cmp_module_t cmp_InitConfig0=
{
	{
		.dmaTriggerState        = false,
		.outputInterruptTrigger = CMP_BOTH_EDGES,
		.mode                   = CMP_CONTINUOUS,
		.filterSamplePeriod     = 0,
		.filterSampleCount      = 0,
		.powerMode              = CMP_LOW_SPEED,
		.inverterState          = CMP_NORMAL,
		.outputSelect           = CMP_COUT,
		.pinState               = CMP_UNAVAILABLE,
		.offsetLevel            = CMP_LEVEL_OFFSET_0,
		.hysteresisLevel        = CMP_LEVEL_HYS_0
	},
	{
		.positivePortMux  = CMP_MUX,
		.negativePortMux  = CMP_DAC,
		.positiveInputMux = 0,
		.negativeInputMux = 0
	},
	{
		.voltageReferenceSource  = CMP_VIN1,
		.voltage = 127,
		.state = true
	},
	{
		.roundRobinState  = false,
		.roundRobinInterruptState = false,
		.fixedPort  = CMP_PLUS_FIXED,
		.fixedChannel = 0,
		.samples  = 0,
		.initializationDelay = 0,
		.roundRobinChannelsState = 0,
		.programedState = 0
	},
};

