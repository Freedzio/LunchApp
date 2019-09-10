import * as React from 'react'
import days from './database/weekDays';
import dayProps from './dayProps';

class Menu extends React.Component<MenuProps, MenuState> {
    constructor(props: any) {
        super(props);

        this.state = {
            menu: this.props.menu
        }
    }

    render() {
        return (
            <div>
                {this.props.menu.map((day: dayProps, index: number) =>
                    <div key={index} onClick={() => this.props.onDayClick(index)}>
                        <p className='font-weight-bold'>{days[index]}</p>
                        <p>{day.soup}</p>
                        <p>{day.main}</p>
                        <p>{day.vege}</p>

                    </div>
                )}
            </div>
        )
    }
}

interface MenuProps {
    menu: dayProps[],
    onDayClick: (index: number) => void
}

interface MenuState {
    menu: dayProps[]
}

export default Menu