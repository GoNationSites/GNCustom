import React from 'react';
import styled from 'styled-components'

const NewItemBadge = styled.span`
    color: ${({color}) => color};
`

const newItemBadge = ({color, text="New!"}) => 
        <NewItemBadge color={color}>
            {text}
        </NewItemBadge>
    

export default newItemBadge;
