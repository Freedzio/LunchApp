import * as React from 'react'
import { Row, Col, Container } from 'reactstrap'
import soups from './database/soups'
import mainCourses from './database/mainCourses'
import fridayCourses from './database/fridayCourses'
import vege from './database/vege'
import getRandomIndex from './common/getRandomIndex'
import thursdayCourses from './database/thursdayCourses'
import sides from './database/sides'
import carbs from './database/carbs';
import GenerateButton from './Button';
import Menu from './Menu';

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

        return {
            soup: soups[getRandomIndex(soupsAmount)],
            main: this.generateMainCourse(day),
            vege: vege[getRandomIndex(vegeAmount)]
        }
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
                        <GenerateButton generateLunches={this.generateLunches} />
                        {!!this.state.generated && <Menu menu={this.state.menu} />}
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