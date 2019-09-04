import * as React from 'react'
import { FormGroup, Label, Input } from 'reactstrap';

class CourseTypeSelect extends React.Component<CourseTypeSelectProps, CourseTypeSelectState> {
    constructor(props: any) {
        super(props);

        this.onCourseTypeChange = this.onCourseTypeChange.bind(this)

    }

    onCourseTypeChange(event: any) {
        this.props.onCourseTypeChange(event.target.value)
    }

    render() {
        return (
            <div>
                <FormGroup>
                    <Label for={this.props.day}>{this.props.day}</Label>
                    <Input type='select' name={this.props.day} id={this.props.day} onChange={this.onCourseTypeChange} >
                        <option>Wybierz typ dania</option>
                        {this.props.courses.map((type: string, index: number) =>
                            <option key={index}>{type}</option>
                        )}
                    </Input>
                </FormGroup>
            </div>
        )
    }
}

interface CourseTypeSelectProps {
    day: string,
    courses: string[],
    onCourseTypeChange: (courseType: string) => void
}

interface CourseTypeSelectState {

}

export default CourseTypeSelect