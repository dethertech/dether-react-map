/**
 * Dependencies
 */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'

/**
 * Components
 */
import Loader from './index'

/**
 * Stories
 */
storiesOf('01 - Loader', module)
  .addDecorator(withKnobs)
  .add('Loader', withInfo('Loader')(() => <Loader />))
