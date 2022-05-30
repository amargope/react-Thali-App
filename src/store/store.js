import {configureStore} from '@reduxjs/toolkit'

import productslice from '../slices/productslice'

 export const store=configureStore({

reducer:
{
//googlebooksslice:googlebooksslice,
productslice:productslice

},
 })