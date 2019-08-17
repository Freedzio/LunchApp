import * as React from 'react'
import { Button, Row, Col, Container } from 'reactstrap'
import soups from './database/soups'
import mainCourses from './database/mainCourses'
import fridayCourses from './database/fridayCourses'
import vege from './database/vege'

class Mainscreen extends React.Component<MainscreenProps, MainscreenState> {
    constructor(props: any) {
        super(props);

        this.state = {
            generated: false,
            day1: {
                soup: '',
                main: '',
                vege: '',
            },
            day2: {
                soup: '',
                main: '',
                vege: '',
            },
            day3: {
                soup: '',
                main: '',
                vege: '',
            },
            day4: {
                soup: '',
                main: '',
                vege: '',
            },
            day5: {
                soup: '',
                main: '',
                vege: '',
            }
        }

        this.getRandomIndex = this.getRandomIndex.bind(this)
        this.generateLunches = this.generateLunches.bind(this)
    }   

    getRandomIndex(amount: number) {
        var randomIndex

        randomIndex = Math.floor(Math.random() * amount)

        return randomIndex
    }

    generateLunches() {
        var soupsAmount = soups.length
        var mainsAmount = mainCourses.length
        var fridaysAmount = fridayCourses.length
        var vegeAmount = vege.length

        var stateProps = {
            day1: {
                soup: soups[this.getRandomIndex(soupsAmount)],
                main: mainCourses[this.getRandomIndex(mainsAmount)],
                vege: vege[this.getRandomIndex(vegeAmount)],
            },
            day2: {
                soup: soups[this.getRandomIndex(soupsAmount)],
                main: mainCourses[this.getRandomIndex(mainsAmount)],
                vege: vege[this.getRandomIndex(vegeAmount)],
            },
            day3: {
                soup: soups[this.getRandomIndex(soupsAmount)],
                main: mainCourses[this.getRandomIndex(mainsAmount)],
                vege: vege[this.getRandomIndex(vegeAmount)],
            },
            day4: {
                soup: soups[this.getRandomIndex(soupsAmount)],
                main: mainCourses[this.getRandomIndex(mainsAmount)],
                vege: vege[this.getRandomIndex(vegeAmount)],
            },
            day5: {
                soup: soups[this.getRandomIndex(soupsAmount)],
                main: fridayCourses[this.getRandomIndex(fridaysAmount)],
                vege: vege[this.getRandomIndex(vegeAmount)],
            }
        }

        this.setState(stateProps)

    }

    render() {
        return (
            <Container>
                <Row>
                    <Col lg='12' className='centered'>
                        <Button color='primary' onClick={this.generateLunches}>Generuj lunche</Button>
                    </Col>
                </Row>
                <Row>
                    <Col lg='12'>
                        <div>
                            <p className='font-weight-bold'>Poniedziałek</p>
                            <p>{this.state.day1.soup}</p>
                            <p>{this.state.day1.main}</p>
                            <p>{this.state.day1.vege}</p>
                        </div>
                        <div>
                            <p className='font-weight-bold'>Wtorek</p>
                            <p>{this.state.day2.soup}</p>
                            <p>{this.state.day2.main}</p>
                            <p>{this.state.day2.vege}</p>
                        </div>
                        <div>
                            <p className='font-weight-bold'>Środa</p>
                            <p>{this.state.day3.soup}</p>
                            <p>{this.state.day3.main}</p>
                            <p>{this.state.day3.vege}</p>
                        </div>
                        <div>
                            <p className='font-weight-bold'>Czwartek</p>
                            <p>{this.state.day4.soup}</p>
                            <p>{this.state.day4.main}</p>
                            <p>{this.state.day4.vege}</p>
                        </div>
                        <div>
                            <p className='font-weight-bold'>Piątek</p>
                            <p>{this.state.day5.soup}</p>
                            <p>{this.state.day5.main}</p>
                            <p>{this.state.day5.vege}</p>
                        </div>
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
    day1: {
        soup: string,
        main: string,
        vege: string
    },
    day2: {
        soup: string,
        main: string,
        vege: string
    },
    day3: {
        soup: string,
        main: string,
        vege: string
    },
    day4: {
        soup: string,
        main: string,
        vege: string
    },
    day5: {
        soup: string,
        main: string,
        vege: string
    },
    
}

export default Mainscreen