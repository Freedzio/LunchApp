import * as React from 'react'
import { Button, Row, Col, Container } from 'reactstrap'
import soups from './database/soups'
import mainCourses from './database/mainCourses'
import fridayCourses from './database/fridayCourses'
import vege from './database/vege'
import days from './database/weekDays';
import getRandomIndex from './common/getRandomIndex'

class Mainscreen extends React.Component<MainscreenProps, MainscreenState> {
    constructor(props: any) {
        super(props);

        this.state = {
            generated: false,
            menu: []
        }

        
        this.generateLunches = this.generateLunches.bind(this)
        this.generateDay = this.generateDay.bind(this)
    }

    

    generateDay(friday: boolean) {
        var soupsAmount = soups.length
        var mainsAmount = mainCourses.length
        var vegeAmount = vege.length
        var fridaysAmount = fridayCourses.length

        if (friday) {
            return {
                soup: soups[getRandomIndex(soupsAmount)],
                main: fridayCourses[getRandomIndex(fridaysAmount)],
                vege: vege[getRandomIndex(vegeAmount)]
            }
        } else {
            return {
                soup: soups[getRandomIndex(soupsAmount)],
                main: mainCourses[getRandomIndex(mainsAmount)],
                vege: vege[getRandomIndex(vegeAmount)]
            }
        }
    }

    generateLunches() {
        var stateProps = {
            generated: true,
            menu: [
                this.generateDay(false),
                this.generateDay(false),
                this.generateDay(false),
                this.generateDay(false),
                this.generateDay(true)
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