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
    }
    generateLunches() {
        var soupsAmount = soups.length
        var mainsAmount = mainCourses.length
        var fridaysAmount = fridayCourses.length
        var vegeAmount = vege.length

    }

    render() {
        return (
            <Container>
                <Row>
                    <Col lg='12' className='centered'>
                        <Button color='primary'>Generuj lunche</Button>
                    </Col>
                </Row>
                <Row>
                    <Col lg='12'>
                        <div>
                            <p>Poniedziałek</p>
                            <p>{this.state.day1.soup}</p>
                            <p>{this.state.day1.main}</p>
                            <p>{this.state.day1.vege}</p>
                        </div>
                        <div>
                            <p>Wtorek</p>
                            <p>{this.state.day2.soup}</p>
                            <p>{this.state.day2.main}</p>
                            <p>{this.state.day2.vege}</p>
                        </div>
                        <div>
                            <p>Środa</p>
                            <p>{this.state.day3.soup}</p>
                            <p>{this.state.day3.main}</p>
                            <p>{this.state.day3.vege}</p>
                        </div>
                        <div>
                            <p>Czwartek</p>
                            <p>{this.state.day4.soup}</p>
                            <p>{this.state.day4.main}</p>
                            <p>{this.state.day4.vege}</p>
                        </div>
                        <div>
                            <p>Piątek</p>
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