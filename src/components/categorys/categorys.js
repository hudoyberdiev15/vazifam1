import React from 'react';
import {Stack} from "@mui/material";
import {categories, colors} from "../constanta";

function Category({selectCategory, selectedCategory}) {
    return (
        <Stack direction={'row'} style={{overflowX: 'scroll'}}>
            {categories.map(item =>
                <button
                    type='button' className='category-btn' key={item.name}
                    onClick={() => selectedCategory(item.name)}
                    style={{
                        backgroundColor: selectCategory === item.name ? colors.fontColor : 'white',
                        color: selectCategory === item.name ? 'white' : colors.fontColor
                    }}
                >
                    <span>{item.icon}</span>
                    <span style={{marginLeft: '10px'}}>{item.name}</span>
                </button>
            )}
        </Stack>
    );
}
export default Category;