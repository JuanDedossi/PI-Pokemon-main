import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import {NotFound} from './NotFound'

test('render content',()=> {
    const component = render(<NotFound/>)
    expect(component.container).toHaveTextContent('Not Found')
})