import * as React from 'react'
import days from './database/weekDays';
import dayProps from './dayProps';

const Menu = (props: any) => (    
        <div>
            {props.menu.map((day: dayProps, index: number) =>
                <div>
                    <p className='font-weight-bold'>{days[index]}</p>
                    <p>{day.soup}</p>
                    <p>{day.main}</p>
                    <p>{day.vege}</p>
                </div>
            )}
        </div>    
)

export default Menu