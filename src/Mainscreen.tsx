import * as React from 'react'
import { Row, Col, Container, Form } from 'reactstrap'
import soups from './database/soups'
import vege from './database/vege'
import getRandomIndex from './common/getRandomIndex'
import sides from './database/sides'
import carbs from './database/carbs';
import GenerateButton from './Button';
import Menu from './Menu';
import days from './database/weekDays';
import courseTypes from './database/courseTypes';
import CourseTypeSelect from './CourseTypeSelect';
import beef from './database/beef';
import chicken from './database/chicken';
import delicatessen from './database/delicatessen';
import fish from './database/fish';
import offal from './database/offal';
import pasta from './database/pasta';
import pork from './database/pork';
import turkey from './database/turkey';

class Mainscreen extends React.Component<MainscreenProps, MainscreenState> {
    courseTypesArray: string[]

    constructor(props: any) {
        super(props);

        this.state = {
            generated: false,
            menu: [],
            error: false,
            courseTypes: []
        }

        this.courseTypesArray = []

        this.generateLunches = this.generateLunches.bind(this);
        this.generateDay = this.generateDay.bind(this);
        this.generateMainCourse = this.generateMainCourse.bind(this);
        this.onCourseTypeChange = this.onCourseTypeChange.bind(this);
        this.validateCourseTypes = this.validateCourseTypes.bind(this)
    }

    onCourseTypeChange(courseType: string, index: number) {
        var newArray = [...this.state.courseTypes]

        newArray[index] = courseType

        var newState = this.state

        newState = {
            ...newState,
            courseTypes: newArray
        }

        this.setState(newState)
    }

    generateMainCourse(courseType: string) {
        var beefAmount = beef.length
        var chickenAmount = chicken.length
        var delicatessenAmount = delicatessen.length
        var fishAmount = fish.length
        var offalAmount = offal.length
        var pastaAmount = pasta.length
        var porkAmount = pork.length
        var turkeyAmount = turkey.length
        var sidesAmount = sides.length
        var carbsAmount = carbs.length

        var course = [
            sides[getRandomIndex(sidesAmount)],
            carbs[getRandomIndex(carbsAmount)]
        ]

        if (courseType === 'Kurczak') {
            course = [
                chicken[getRandomIndex(chickenAmount)],
                ...course
            ]

            return course.join(', ')
        }

        if (courseType === 'Indyk') {
            course = [
                turkey[getRandomIndex(turkeyAmount)],
                ...course
            ]

            return course.join(', ')
        }

        if (courseType === 'Wołowina') {
            course = [
                beef[getRandomIndex(beefAmount)],
                ...course
            ]

            return course.join(', ')
        }

        if (courseType === 'Wieprzowina') {
            course = [
                pork[getRandomIndex(porkAmount)],
                ...course
            ]

            return course.join(', ')
        }

        if (courseType === 'Ryba') {
            course = [
                fish[getRandomIndex(fishAmount)],
                ...course
            ]

            return course.join(', ')
        }

        if (courseType === 'Garmażeria') {
            return delicatessen[getRandomIndex(delicatessenAmount)]
        }

        if (courseType === 'Makarony') {
            return pasta[getRandomIndex(pastaAmount)]
        }

        if (courseType === 'Podroby') {
            course = [
                offal[getRandomIndex(offalAmount)],
                ...course
            ]

            return course.join(', ')
        }
    }

    generateDay(courseType: string) {
        var soupsAmount = soups.length
        var vegeAmount = vege.length

        return {
            soup: soups[getRandomIndex(soupsAmount)],
            main: this.generateMainCourse(courseType),
            vege: vege[getRandomIndex(vegeAmount)]
        }
    }

    async validateCourseTypes() {
        await this.setState({
            error: false
        })

        if (this.state.courseTypes.length < 5) {
            this.setState({
                error: true
            });

            return
        }

        for (var i = 0; i < this.state.courseTypes.length; i++) {
            if (!this.state.courseTypes[i] ||
                this.state.courseTypes[i] === 'Wybierz typ dania') {
                this.setState({
                    error: true
                });

                return
            }
        }

        if (!this.state.error) {
            await this.generateLunches()
        }
    }

    generateLunches() {
        var menu = []

        for (var i = 0; i < this.state.courseTypes.length; i++) {
            menu.push(this.generateDay(this.state.courseTypes[i]))
        }

        if (!this.state.error) {
            var newState = this.state

            newState = {
                ...newState,
                generated: true,
                menu: menu,
                error: false
            }

            this.setState(newState)
        }
    }

    render() {
        return (
            <Container className='centered'>
                <Row className='child text-center'>
                    <Col lg='12'>
                        {!this.state.generated &&
                            <Form>
                                <div>
                                    eloeloelo
                                </div>
                                {days.map((day, index) =>
                                    <CourseTypeSelect key={index} day={day} courses={courseTypes} onCourseTypeChange={(courseType: string) =>
                                        this.onCourseTypeChange(courseType, index)} />
                                )}
                            </Form>
                        }
                        {!!this.state.error && <div>Wybierz danie na każdy dzień!</div>}
                        <GenerateButton generateLunches={this.validateCourseTypes} />
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
    menu: any[],
    error: boolean,
    courseTypes: string[]
}

export default Mainscreen