import * as React from 'react'
import { Row, Col, Container, Form, Button } from 'reactstrap'
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
import days from './database/weekDays';
import courseTypes from './database/courseTypes';
import CourseTypeSelect from './CourseTypeSelect';

class Mainscreen extends React.Component<MainscreenProps, MainscreenState> {
    courseTypesArray: string[]

    constructor(props: any) {
        super(props);

        this.state = {
            generated: false,
            menu: []
        }

        this.courseTypesArray = []

        this.generateLunches = this.generateLunches.bind(this);
        this.generateDay = this.generateDay.bind(this);
        this.generateMainCourse = this.generateMainCourse.bind(this);
        this.onCourseTypeChange = this.onCourseTypeChange.bind(this)
    }

    onCourseTypeChange(courseType: string, index: number) {
        var newArray = [...this.courseTypesArray]

        newArray[index] = courseType

        this.courseTypesArray = newArray
    }

    generateMainCourse(day?: string) {
        var mainsAmount = mainCourses.length
        var thursdaysAmount = thursdayCourses.length
        var fridaysAmount = fridayCourses.length
        var sidesAmount = sides.length
        var carbsAmount = carbs.length

        if (day === undefined) {
            var course = [
                mainCourses[getRandomIndex(mainsAmount)],
                sides[getRandomIndex(sidesAmount)],
                carbs[getRandomIndex(carbsAmount)]
            ]

            return course.join(', ')
        }

        if (day === 'thursday') {
            return thursdayCourses[getRandomIndex(thursdaysAmount)]
        }

        if (day === 'friday') {
            var course = [
                fridayCourses[getRandomIndex(fridaysAmount)],
                sides[getRandomIndex(sidesAmount)],
                carbs[getRandomIndex(carbsAmount)]
            ]

            return course.join(', ')
        }
    }

    generateDay(day?: string) {
        var soupsAmount = soups.length
        var vegeAmount = vege.length

        for (var i = 0; i < days.length; i++) {
            if (this.courseTypesArray[i] === 'Garmażeria' || this.courseTypesArray[i] === 'Makarony') {

            }
        }

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
                        {!this.state.generated &&
                            <Form>
                                {days.map((day, index) =>
                                    <CourseTypeSelect key={index} day={day} courses={courseTypes} onCourseTypeChange={(courseType: string) =>
                                        this.onCourseTypeChange(courseType, index)} />
                                )}
                            </Form>
                        }
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