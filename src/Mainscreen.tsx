import * as React from 'react'
import { Button, Row, Col, Container } from 'reactstrap'
import soups from './database/soups'
import mainCourses from './database/mainCourses'
import fridayCourses from './database/fridayCourses'
import vege from './database/vege'
import days from './database/weekDays';
import getRandomIndex from './common/getRandomIndex'
import thursdayCourses from './database/thursdayCourses'
import sides from './database/sides'
import carbs from './database/carbs';

class Mainscreen extends React.Component<MainscreenProps, MainscreenState> {
    constructor(props: any) {
        super(props);

        this.state = {
            generated: false,
            menu: []
        }


        this.generateLunches = this.generateLunches.bind(this)
        this.generateDay = this.generateDay.bind(this)
        this.generateMainCourse = this.generateMainCourse.bind(this)
    }

    generateMainCourse(day?: string) {
        var mainsAmount = mainCourses.length
        var thursdaysAmount = thursdayCourses.length
        var fridaysAmount = fridayCourses.length
        var sidesAmount = sides.length
        var carbsAmount = carbs.length

        if (day === undefined) {
            return mainCourses[getRandomIndex(mainsAmount)] + ', ' + sides[getRandomIndex(sidesAmount)] + ', ' + carbs[getRandomIndex(carbsAmount)]
        }

        if (day === 'thursday') {
            return thursdayCourses[getRandomIndex(thursdaysAmount)]
        }

        if (day === 'friday') {
            return fridayCourses[getRandomIndex(fridaysAmount)] + ', ' + sides[getRandomIndex(sidesAmount)] + ', ' + carbs[getRandomIndex(carbsAmount)]
        }
    }

    generateDay(day?: string) {
        var soupsAmount = soups.length
        var vegeAmount = vege.length

        var dayProps = {
            soup: soups[getRandomIndex(soupsAmount)],
            main: this.generateMainCourse(day),
            vege: vege[getRandomIndex(vegeAmount)]
        }

        return dayProps
    }

    generateLunches() {
        var stateProps = {
            generated: true,
            menu: [
                this.generateDay(),
                this.generateDay(),
                this.generateDay(),
                this.generateDay('thursday'),
                this.generateDay('friday')
            ]
        }

        this.setState(stateProps)
    }

    render() {
        return (
            <Container className='centered'>
                <Row className='child text-center'>
                    <Col lg='12'>
                        <Button color='primary' onClick={this.generateLunches}>Generuj lunche</Button>
                        {!!this.state.generated && <div>
                            {this.state.menu.map((day, index) =>
                                <div>
                                    <p className='font-weight-bold'>{days[index]}</p>
                                    <p>{day.soup}</p>
                                    <p>{day.main}</p>
                                    <p>{day.vege}</p>
                                </div>
                            )}
                        </div>}
                    </Col>
                </Row>
            </Container>
        )
    }
}

interface MainscreenProps {

}

interface MainscreenState {
    generated: boolean,
    menu: any[]
}

export default Mainscreen