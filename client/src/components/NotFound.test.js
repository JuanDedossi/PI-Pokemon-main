import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render,screen} from '@testing-library/react'
import {NotFound} from './NotFound'


test('render content',()=> {
    render(<NotFound/>)
    
    expect(screen.getByText('Not Found')).toBeInTheDocument()
})