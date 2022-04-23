/*
 *  The itivrutaha logging module for showing friendly log messages.
 *  Created On 23 April 2022
 */

import itivrutaha from 'itivrutaha'

export default await itivrutaha.createNewLogger({
    appName: 'vsnthdev',
    bootLog: false,
    shutdownLog: false
})
