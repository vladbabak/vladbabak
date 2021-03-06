/***********************************************************************************************************************
 * This file was generated by the S32 Config Tools. Any manual edits made to this file
 * will be overwritten if the respective S32 Config Tools is used to update this file.
 **********************************************************************************************************************/

#ifndef i2s_pal1_H
#define i2s_pal1_H

/**
 * @page misra_violations MISRA-C:2012 violations
 *
 * @section [global]
 * Violates MISRA 2012 Advisory Rule 2.5, Global macro not referenced.
 * The global macro will be used in function call of the module.
 *
 */
/*******************************************************************************
 * Included files 
 ******************************************************************************/
#include "i2s_pal.h"
#include <stddef.h>

/*******************************************************************************
 * Definitions 
 ******************************************************************************/
#define INST_I2S_PAL1 (&i2sOverFlexio0Instance)

/*******************************************************************************
 * Global variables 
 ******************************************************************************/

/* User configuration */
extern const i2s_instance_t i2sOverFlexio0Instance;

/*! @brief Serial module configurations */

/*! @brief I2S PAL User Configuration 0 */
extern i2s_user_config_t i2s_pal1_Config0;



#endif /* i2s_pal1_H */
