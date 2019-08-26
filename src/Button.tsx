import * as React from 'react'
import { Button } from 'reactstrap';

const GenerateButton = (props: any) => (
    <Button color='primary' onClick={props.generateLunches}>Generuj lunche</Button>
)

export default GenerateButton